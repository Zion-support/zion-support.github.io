const fs = require('fs');
const path = require('path');

console.log('Generating sitemap...');

// Get all page routes
const getRoutes = () => {
  const appPath = path.join(__dirname, '../app');
  const routes = ['/']; // Home page
  
  const scanDirectory = (dir, basePath = '') => {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'components') {
        const route = basePath + '/' + item;
        routes.push(route);
        
        // Recursively scan subdirectories
        scanDirectory(itemPath, route);
      }
    });
  };
  
  scanDirectory(appPath);
  return routes;
};

// Generate sitemap XML
const generateSitemap = (routes) => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    const url = baseUrl + route;
    const priority = route === '/' ? '1.0' : '0.8';
    const changefreq = route === '/' ? 'daily' : 'weekly';
    
    sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Generate robots.txt
const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
`;
};

// Main function
const generate = () => {
  try {
    const routes = getRoutes();
    console.log(`Found ${routes.length} routes`);
    
    const sitemap = generateSitemap(routes);
    const robotsTxt = generateRobotsTxt();
    
    const distPath = path.join(__dirname, '../dist');
    
    // Ensure dist directory exists
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath, { recursive: true });
    }
    
    // Write sitemap
    fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);
    console.log('Sitemap generated successfully');
    
    // Write robots.txt
    fs.writeFileSync(path.join(distPath, 'robots.txt'), robotsTxt);
    console.log('Robots.txt generated successfully');
    
    console.log('Sitemap generated successfully at:', path.join(distPath, 'sitemap.xml'));
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

generate();