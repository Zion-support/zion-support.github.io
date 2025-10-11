const fs = require('fs');
const path = require('path');

const pages = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/blog',
  '/case-studies',
  '/tutorials',
  '/support',
  '/careers',
  '/pricing',
  '/demo',
  '/consultation',
  '/privacy',
  '/terms',
  '/cookies',
  '/sitemap',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/team',
  '/cybersecurity',
  '/data-analytics',
  '/web-development',
  '/mobile-development',
  '/cloud-infrastructure',
  '/cybersecurity-solutions',
  '/ai-analytics',
  '/ai-chatbot-builder',
  '/ai-automation',
  '/ai-cybersecurity'
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

fs.writeFileSync(path.join(__dirname, '../dist/sitemap.xml'), sitemap);
console.log('Sitemap generated successfully');
