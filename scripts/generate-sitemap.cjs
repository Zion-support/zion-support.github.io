const fs = require('fs');
const path = require('path');

// Simple sitemap generator for the website
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const pages = [
    '',
    '/about',
    '/services',
    '/ai-services',
    '/ai-solutions',
    '/ai-content-generator',
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

  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully at dist/sitemap.xml');
};

generateSitemap();