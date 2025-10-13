const fs = require('fs');
const path = require('path');

// Generate sitemap
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const pages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/ai-services',
    '/micro-saas',
    '/5g-solutions',
    '/blog',
    '/tutorials',
    '/demo',
    '/support',
    '/privacy',
    '/terms',
    '/cookies',
    '/sitemap'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
};

generateSitemap();
