<<<<<<< HEAD
=======
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all page routes
function getAllRoutes() {
  const routes = [];
  const appDir = path.join(__dirname, '../app');
  
  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other non-page directories
        if (!['node_modules', '.git', 'components', 'utils', 'types'].includes(item)) {
          scanDirectory(fullPath, basePath + '/' + item);
        }
      } else if (item === 'page.tsx' || item === 'page.ts') {
        // This is a page
        const route = basePath || '/';
        routes.push(route);
      }
    }
  }
  
  scanDirectory(appDir);
  return routes;
}

// Generate sitemap XML
function generateSitemap() {
  const routes = getAllRoutes();
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add main pages with higher priority
  const mainPages = ['/', '/about', '/contact', '/services', '/ai-services', '/it-services'];
  
  for (const route of routes) {
    const url = baseUrl + route;
    const priority = mainPages.includes(route) ? '1.0' : '0.8';
    const changefreq = mainPages.includes(route) ? 'weekly' : 'monthly';
    
    sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
  }
  
  sitemap += `</urlset>`;
  
  // Write to public directory
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log(`Generated sitemap with ${routes.length} routes`);
}

// Generate robots.txt
function generateRobots() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
`;
  
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
  console.log('Generated robots.txt');
}

// Run the generators
generateSitemap();
generateRobots();
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
