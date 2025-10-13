const fs = require('fs');
const path = require('path');

// Define all the routes in your application
const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/ai-services',
  '/micro-saas',
  '/5g-solutions',
  '/pricing',
  '/blog',
  '/tutorials',
  '/demo',
  '/support',
  '/privacy',
  '/terms',
  '/team',
  '/careers',
  '/case-studies',
  '/news',
  '/press',
  '/partners',
  '/docs',
  '/webinars',
  '/whitepapers',
  '/accessibility',
  '/security',
  '/sitemap',
  '/cookies'
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${route}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += '    <changefreq>weekly</changefreq>\n';
    sitemap += '    <priority>0.8</priority>\n';
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

// Write sitemap to public directory
const sitemap = generateSitemap();
const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Ensure public directory exists
const publicDir = path.dirname(outputPath);
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(outputPath, sitemap);
console.log('Sitemap generated successfully at:', outputPath);