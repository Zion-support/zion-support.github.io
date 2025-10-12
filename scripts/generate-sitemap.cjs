const fs = require('fs')
const path = require('path')

// Get all page routes from the app directory
function getRoutes() {
  const appDir = path.join(__dirname, '../app')
  const routes = ['/'] // Start with home page
  
  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir)
    
    items.forEach(item => {
      const itemPath = path.join(dir, item)
      const stat = fs.statSync(itemPath)
      
      if (stat.isDirectory()) {
        // Skip components and other non-page directories
        if (!['components', 'api', 'lib', 'utils'].includes(item)) {
          const route = basePath + '/' + item
          routes.push(route)
          scanDirectory(itemPath, route)
        }
      }
    })
  }
  
  scanDirectory(appDir)
  return routes
}

// Generate sitemap XML
function generateSitemap() {
  const routes = getRoutes()
  const baseUrl = 'https://ziontechgroup.com'
  const currentDate = new Date().toISOString()
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`

  // Write sitemap to public directory
  const publicDir = path.join(__dirname, '../public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
  console.log('Sitemap generated successfully')
  console.log(`Generated ${routes.length} URLs`)
}

// Generate robots.txt
function generateRobots() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml`

  const publicDir = path.join(__dirname, '../public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots)
  console.log('Robots.txt generated successfully')
}

// Generate manifest.json
function generateManifest() {
  const manifest = {
    name: 'Zion Tech Group',
    short_name: 'Zion Tech',
    description: 'Advanced AI and IT Solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#9333ea',
    icons: [
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  }

  const publicDir = path.join(__dirname, '../public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2))
  console.log('Web manifest generated successfully')
}

// Run all generators
try {
  generateSitemap()
  generateRobots()
  generateManifest()
  console.log('All SEO files generated successfully')
} catch (error) {
  console.error('Error generating SEO files:', error)
  process.exit(1)
}