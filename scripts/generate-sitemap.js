import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all the routes in your application
const routes = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/services', changefreq: 'weekly', priority: '0.9' },
  { url: '/contact', changefreq: 'monthly', priority: '0.8' },
  { url: '/blog', changefreq: 'weekly', priority: '0.7' },
  { url: '/tutorials', changefreq: 'weekly', priority: '0.7' },
  { url: '/demo', changefreq: 'monthly', priority: '0.6' },
  { url: '/support', changefreq: 'monthly', priority: '0.6' },
  { url: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { url: '/terms', changefreq: 'yearly', priority: '0.3' },
  { url: '/pricing', changefreq: 'monthly', priority: '0.7' },
  { url: '/solutions', changefreq: 'weekly', priority: '0.8' },
];

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    sitemap += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Write sitemap to public directory
const sitemap = generateSitemap();
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemap);
console.log('Sitemap generated successfully at:', sitemapPath);

// Also generate robots.txt
const baseUrl = 'https://ziontechgroup.com';
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1`;

const robotsPath = path.join(publicDir, 'robots.txt');
fs.writeFileSync(robotsPath, robotsTxt);
console.log('Robots.txt generated successfully at:', robotsPath);