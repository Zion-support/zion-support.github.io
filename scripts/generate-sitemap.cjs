const fs = require('fs');
const path = require('path');

// Simple sitemap generator
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const pages = [
    '',
    '/about',
    '/services',
    '/ai-services',
    '/ai-solutions',
    '/it-services',
    '/cloud-infrastructure',
    '/digital-transformation',
    '/5g-solutions',
    '/micro-saas-solutions',
    '/ai-content-generator',
    '/data-analytics',
    '/web-development',
    '/mobile-development',
    '/database-management',
    '/network-infrastructure',
    '/pricing',
    '/case-studies',
    '/blog',
    '/team',
    '/careers',
    '/partnerships',
    '/contact',
    '/help',
    '/api-docs',
    '/privacy',
    '/terms',
    '/cookies'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
};

generateSitemap();