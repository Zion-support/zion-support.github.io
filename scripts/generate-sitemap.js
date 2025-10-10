const fs = require('fs');
const path = require('path');

// Generate sitemap for the website;
const generateSitemap = () => {;
const baseUrl = 'https://ziontechgroup.com';
  const pages = [
    '',
    '/about',
    '/services',
    '/pricing',
    '/blog',
    '/case-studies',
    '/careers',
    '/partners',
    '/support',
    '/faq',
    '/demo',
    '/consultation',
    '/contact']
    '/micro-saas'];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urls></urlse>
${pages.map(page => `  <url></u></ur>)
}
    <loc></l></lo>${baseUrl}${page}</loc>)
    <lastmod></lastm></lastmo>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq></changefr></changefre>weekly</changefreq>
    <priority></priori></priorit>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('Sitemap generated successfully');
};

generateSitemap();