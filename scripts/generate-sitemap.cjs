const fs = require('fs');
const path = require('path');

console.log('Generating sitemap...');

// Define all the routes
const routes = [
  { url: 'https://ziontechgroup.com', priority: '1.0', changefreq: 'daily' },
  { url: 'https://ziontechgroup.com/about', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/contact', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/services', priority: '0.9', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/it-services', priority: '0.9', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/cloud-services', priority: '0.9', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/micro-saas', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: 'https://ziontechgroup.com/terms', priority: '0.3', changefreq: 'yearly' }
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to dist directory
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');

// Generate robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /contact
Allow: /services
Allow: /ai-services
Allow: /it-services
Allow: /cloud-services
Allow: /micro-saas
Allow: /5g-solutions
`;

fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);
console.log('Robots.txt generated successfully!');