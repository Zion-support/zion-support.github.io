const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Get all page routes from the app directory
function getPageRoutes() {
  const appDir = path.join(__dirname, '..', 'app');
  const routes = [];
  
  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Check if directory has a page.tsx file
        const pageFile = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          const route = basePath + '/' + item;
          routes.push(route);
        }
        
        // Recursively scan subdirectories
        scanDirectory(fullPath, basePath + '/' + item);
      }
    }
  }
  
  scanDirectory(appDir);
  return routes;
}

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  const pages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
    { url: '/5g-solutions', priority: '0.9', changefreq: 'weekly' },
    { url: '/demo', priority: '0.8', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms', priority: '0.5', changefreq: 'yearly' }
  ];
  
  // Get dynamic routes from app directory
  const dynamicRoutes = getPageRoutes();
  
  // Add dynamic routes to pages array
  dynamicRoutes.forEach(route => {
    // Skip if already in static pages
    if (!pages.find(p => p.url === route)) {
      pages.push({
        url: route,
        priority: '0.7',
        changefreq: 'weekly'
      });
    }
  });
  
  // Generate sitemap XML
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write sitemap to dist directory
  const sitemapPath = path.join(distDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('✅ Sitemap generated successfully at dist/sitemap.xml');
  
  // Also generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Host
Host: ${baseUrl}`;
  
  const robotsPath = path.join(distDir, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt);
  console.log('✅ Robots.txt generated successfully at dist/robots.txt');
}

// Run the sitemap generation
generateSitemap();