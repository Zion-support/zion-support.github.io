const fs = require('fs');
const path = require('path');

// Generate sitemap
function generateSitemap() {
  const pages = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/pricing',
    '/ai-services',
    '/it-services',
    '/micro-saas',
    '/zion-analytics-pro',
    '/zion-chat-ai',
    '/zion-security-shield',
    '/zion-cloud-vault',
    '/zion-content-studio'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://ziontechgroup.com${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

// Write sitemap to file
const sitemap = generateSitemap();
fs.writeFileSync('dist/sitemap.xml', sitemap);
console.log('Sitemap generated successfully');
