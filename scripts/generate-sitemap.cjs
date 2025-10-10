const fs = require('fs');
const path = require('path');

const baseUrl = 'https://ziontechgroup.com';

// Get all page routes
const getPageRoutes = () => {
  const appDir = path.join(__dirname, '../app');
  const routes = ['/']; // Home page

  const scanDirectory = (dir, prefix = '') => {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        const route = `${prefix}/${item}`;
        routes.push(route);
        scanDirectory(itemPath, route);
      }
    });
  };

  scanDirectory(appDir);
  return routes;
};

const generateSitemap = () => {
  const routes = getPageRoutes();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
