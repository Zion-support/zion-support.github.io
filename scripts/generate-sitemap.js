import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

__filename = fileURLToPath(import.meta.url);
__dirname = path.dirname(__filename);

// Get all page routes
function getAllRoutes() {
  routes = []
  appDir = path.join(__dirname, '../app')
  
  function scanDirectory(dir, basePath = '') {
    items = fs.readdirSync(dir)
    
    for (const item of items) {
      fullPath = path.join(dir, item)
      stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        // Skip node_modules and other non-page directories
        if (!['node_modules', '.git', 'components', 'utils', 'types'].includes(item)) {
          scanDirectory(fullPath, basePath + '/' + item)
        }
      } else if (item === 'page.tsx') {
        // Found a page
        route = basePath || '/'
        routes.push(route)
      }
    }
  }
  
  scanDirectory(appDir)
  return routes
}

// Generate sitemap
function generateSitemap() {
  routes = getAllRoutes()
  baseUrl = 'https://ziontechgroup.com'
  
  sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`
  
  // Write to public directory
  publicDir = path.join(__dirname, '../public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
  console.log('Sitemap generated successfully!')
  console.log(`Found ${routes.length} routes`)
}

generateSitemap();
