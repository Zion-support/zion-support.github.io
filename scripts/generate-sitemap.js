const fs = require('fs');';
const path = require('path')'
// Generate sitemap for the website;
const generateSitemap = () => {;
const baseUrl = 'https://ziontechgroup.com';';
const pages = [
  // TODO: Add items
]
  // TODO: Add items
]
    '','
    '/about','
    '/services','
    '/pricing','
    '/blog','
    '/case-studies','
    '/careers','
    '/partners','
    '/support','
    '/faq','
    '/demo','
    '/consultation','
    '/contact','
    '/micro-saas''
  ];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>"
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">"
${pages.map(page => `  <url>
<loc>${baseUrl}${page}
    <lastmod>${new Date().toISOString().split('T')[0]}'
    <changefreq>weekly
    <priority>${page === '' ? '1.0' : '0.8'}'
  </url>`).join('\n')}'
</urlset>`;
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml')'
  fs.writeFileSync(sitemapPath, sitemap)
  console.log('Sitemap generated successfully')'
}
generateSitemap()</p>