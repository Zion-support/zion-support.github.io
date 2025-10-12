const fs = require('fs');
const path = require('path');

const baseUrl = 'https://ziontechgroup.com';
const currentDate = new Date().toISOString();

// Define all the routes
const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/micro-saas-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/5g-implementation', priority: '0.8', changefreq: 'monthly' },
  { url: '/cloud-services', priority: '0.8', changefreq: 'monthly' },
  { url: '/digital-transformation', priority: '0.8', changefreq: 'monthly' }
];

// Generate sitemap XML
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const sitemapPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');
  
  // Ensure dist directory exists
  const distDir = path.dirname(sitemapPath);
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('Sitemap generated successfully at:', sitemapPath);
};

generateSitemap();