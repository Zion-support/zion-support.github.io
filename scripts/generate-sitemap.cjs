const fs = require('fs');
const path = require('path');

// Generate sitemap.xml
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  
  // Define all the pages
  const pages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/ai-services',
    '/micro-saas',
    '/5g-solutions',
    '/blog',
    '/privacy',
    '/terms',
    '/cookies',
    '/sitemap'
  ];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write sitemap to public directory
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
