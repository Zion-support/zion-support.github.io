const fs = require('fs');
const path = require('path');

const baseUrl = 'https://ziontechgroup.com';
const currentDate = new Date().toISOString();

// Define all the routes including new pages
const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms', priority: '0.5', changefreq: 'yearly' },
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/micro-saas-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-implementation', priority: '0.7', changefreq: 'monthly' },
  { url: '/cloud-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/digital-transformation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-content-generator', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-chatbot-builder', priority: '0.8', changefreq: 'weekly' },
  { url: '/cloud-migration', priority: '0.7', changefreq: 'monthly' },
  { url: '/cybersecurity-solutions', priority: '0.7', changefreq: 'monthly' }
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to public directory
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully');