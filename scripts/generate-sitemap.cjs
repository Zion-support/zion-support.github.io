const fs = require('fs');
const path = require('path');

// Generate sitemap.xml
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const pages = [
    '',
    '/about',
    '/services',
    '/ai-services',
    '/ai-solutions',
    '/it-services',
    '/web-development',
    '/mobile-development',
    '/cloud-infrastructure',
    '/network-infrastructure',
    '/database-management',
    '/data-analytics',
    '/digital-transformation',
    '/5g-solutions',
    '/micro-saas-solutions',
    '/ai-content-generator',
    '/case-studies',
    '/team',
    '/careers',
    '/partnerships',
    '/pricing',
    '/contact',
    '/blog',
    '/api-docs',
    '/help',
    '/privacy',
    '/terms',
    '/cookies'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'dist', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
};

generateSitemap();