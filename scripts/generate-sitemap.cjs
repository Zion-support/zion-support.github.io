const fs = require('fs');
const path = require('path');

// Get all page routes from the app directory
function getRoutes(dir, basePath = '') {
  const routes = [];
  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Check if directory has a page.tsx file
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        const route = basePath + '/' + item;
        routes.push(route);
      }
      
      // Recursively check subdirectories
      const subRoutes = getRoutes(fullPath, basePath + '/' + item);
      routes.push(...subRoutes);
    }
  });

  return routes;
}

// Generate sitemap
function generateSitemap() {
  const appDir = path.join(__dirname, '..', 'app');
  const routes = getRoutes(appDir);
  
  // Add root route
  routes.unshift('');
  
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => {
  const url = route === '' ? baseUrl : `${baseUrl}${route}`;
  const priority = route === '' ? '1.0' : route.includes('/ai-') || route.includes('/zion-') ? '0.9' : '0.8';
  const changefreq = route === '' ? 'daily' : 'weekly';
  
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  // Write sitemap to public directory
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
  console.log(`Found ${routes.length} routes`);
}

generateSitemap();
