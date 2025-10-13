
export default function Component() {
  return (
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
  );
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
const sitemap = `<?xml version="1.0"UTF-8"?>"http://www.sitemaps.org/schemas/sitemap/0.9">"1.0" encoding="?>
//  `
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
//     <changefreq>weekly</changefreq>
//     <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;
  // Write to public directory;
const publicDir = path.join(__dirname, '../public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
  // console.log('Sitemap generated successfully!')
  // console.log(`Found ${routes.length} routes`);
generateSitemap();
