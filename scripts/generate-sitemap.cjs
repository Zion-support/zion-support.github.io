const fs = require('fs');
const path = require('path');

// Simple sitemap generator
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const pages = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/pricing',
    '/blog',
    '/ai-services',
    '/micro-saas',
    '/5g-solutions',
    '/privacy',
    '/terms',
    '/cookies',
    '/sitemap',
    '/ai-analytics',
    '/ai-content-generation',
    '/ai-cybersecurity',
    '/ai-customer-service',
    '/ai-data-analytics'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
};

generateSitemap();