const fs = require('fs');
const path = require('path');

const generateSitemap = () => {
  const routes = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/pricing',
    '/blog',
    '/case-studies',
    '/careers',
    '/ai-services',
    '/it-services',
    '/micro-saas',
    '/tutorials',
    '/consultation',
    '/demo',
    '/support',
    '/privacy',
    '/terms',
    '/cookies',
    '/sitemap',
    '/micro-saas-services',
    '/ai-services-advanced',
    '/it-services-comprehensive'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://ziontechgroup.com${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../dist/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
};

generateSitemap();
