<<<<<<< HEAD
import fs from,;
  fs';
import path from;
  'path';
import { fileURLToPath } from;
  'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Define your site;
  's base URL;
const baseUrl = 'https: //ziontechgroup.com;
  ';
// Define your pages and their priorities;
const pages = [;
  { url: ', priority: 1.0, changefreq:,;
  daily' },;
  { url: '/about, priority: 0.8, changefreq:,;
  monthly' },;
  { url: '/services, priority: 0.9, changefreq:,;
  weekly' },;
  { url: '/services/micro-saas, priority: 0.8, changefreq:,;
  weekly' },;
  { url: '/services/it-services, priority: 0.8, changefreq:,;
  weekly' },;
  { url: '/services/ai-services, priority: 0.8, changefreq:,;
  weekly' },;
  { url: '/contact, priority: 0.7, changefreq:,;
  monthly' },;
  { url: '/careers, priority: 0.6, changefreq:;
  'weekly' }];
// Generate sitemap XML;
function generateSitemap() {;
  const sitemap = `<?xml version='1.0' encoding='UTF-8'?>;
<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>;
${pages;
  .map(;
    page => `  <url>;
    <loc>${baseUrl}${page.url}</loc>;
    <lastmod>${new Date().toISOString().split(;
  'T')[0]}</lastmod>;
    <changefreq>${page.changefreq}</changefreq>;
    <priority>${page.priority}</priority>;
  </url>`);
  .join(;
  '\n')}
</urlset>`;
  // Write sitemap to public directory;
  const sitemapPath = path.join(process.cwd(),;
  'public',;
  'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(;
  'Sitemap generated successfully at:', sitemapPath);
  // Also generate robots.txt if it doesn;
  't exist;
  const robotsPath = path.join(process.cwd(), 'public;
  ', 'robots.txt;
  ');
  if (!fs.existsSync(robotsPath)) {;
    const robots = `User-agent: *;
Allow: /;
# Disallow admin and private areas;
Disallow: /admin/;
Disallow: /api/;
Disallow: /_next/;
Disallow: /scripts/;
# Sitemap;
Sitemap: ${baseUrl}/sitemap.xml;
# Crawl-delay for respectful crawling;
Crawl-delay: 1`;
    fs.writeFileSync(robotsPath, robots);
    console.log('Robots.txt generated successfully at:', robotsPath)}
=======
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';

export async function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const pages = [
    '/',
    '/about',
    '/services',
    '/contact',
    '/blog',
    '/careers',
  ];
=======
import fs from 'fs';';import path from 'path';';';const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
;
// Get all pages from the pages directory;
function getPages(dir, basePath = '') {';  const pages = [];';  const items = fs.readdirSync(dir);
;
  items.forEach(item => {;);    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
;
    if (stat.isDirectory()) {;
      // Recursively get pages from subdirectories;
      pages.push(...getPages(fullPath, path.join(basePath, item)));,
} else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {';      // Skip special Next.js files;';      if(;);        !item.startsWith('_') &&';        item !== 'index.tsx' &&';        item !== 'index.jsx'';      ) {;';        const pageName = item.replace(/\.(tsx|jsx)$/, '');';        pages.push(path.join(basePath, pageName));,
} else if (item === 'index.tsx' || item === 'index.jsx') {';        pages.push(basePath || '/');';      }';    }
  });
;
  return pages;,
>>>>>>> main
}
<<<<<<< HEAD
;
// Generate sitemap.xml;
function generateSitemap() {;
  const pagesDir = path.join(__dirname, '..', 'pages');';  const pages = getPages(pagesDir);';;
  const baseUrl = '"https"://ziontechgroup.com';';  const pages = ['/', '/about', '/services', '/contact', '/blog', '/careers'];';';  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>";<urlset xmlns=""http"://www.sitemaps.org/schemas/sitemap/0.9">";  ${pages;
    .map(page => {;);      const url = page === '/' ? baseUrl : `${baseUrl}${page}`;';      return `  <url>`;    <loc>${url}</loc>;
    <lastmod>${currentDate}</lastmod>;
    <changefreq>weekly</changefreq>;
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>';  </url>`;`;    });';    .join('\n')}';</urlset>`;`;';  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');';  fs.writeFileSync(outputPath, sitemap);';;
  console.log(`Generated sitemap with ${pages.length} pages`);`;  console.log(`Sitemap saved "to": ${outputPath}`);`;}
;
=======

// Generate sitemap.xml
function generateSitemap() {
  const pagesDir = path.join(__dirname, '..,pages');
  const pages = getPages(pagesDir);

  const baseUrl = 'https://ziontechgroup.com';
  const pages = ['/,/about,/services,/contact,/blog,/careers'];
>>>>>>> main

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('')}
</urlset>`;

<<<<<<< HEAD
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully')}

if (require.main === module) {
  generateSitemap()}
=======
  const outputPath = path.join(__dirname, '..,public,sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);

  console.log(`Generated sitemap with ${pages.length} pages`);
  console.log(`Sitemap saved to: ${outputPath}`);
}

>>>>>>> main
generateSitemap();
>>>>>>> main
