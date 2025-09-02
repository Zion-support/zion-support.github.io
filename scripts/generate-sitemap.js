import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all pages from the pages directory
function getPages(dir, basePath = '') {
  const pages = [];
  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively get pages from subdirectories
      pages.push(...getPages(fullPath, path.join(basePath, item)));
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
      // Skip special Next.js files
      if (
        !item.startsWith('_') &&
        item !== 'index.tsx' &&
        item !== 'index.jsx'
      ) {
        const pageName = item.replace(/\.(tsx|jsx)$/, '');
        pages.push(path.join(basePath, pageName));
      } else if (item === 'index.tsx' || item === 'index.jsx') {
        pages.push(basePath || '/');
      }
    }
  });

  return pages;
}

// Generate sitemap.xml
function generateSitemap() {
  const pagesDir = path.join(__dirname, '..', 'pages');
  const pages = getPages(pagesDir);

=======
export async function generateSitemap() {
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
  const baseUrl = 'https://ziontechgroup.com';
  const pages = ['/', '/about', '/services', '/contact', '/blog', '/careers'];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<<<<<<< HEAD
  ${pages
    .map(page => {
      const url = page === '/' ? baseUrl : `${baseUrl}${page}`;
      return `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
    })
    .join('\n')}
</urlset>`;

  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);

  console.log(`Generated sitemap with ${pages.length} pages`);
  console.log(`Sitemap saved to: ${outputPath}`);
}

generateSitemap();
=======
${pages
  .map(
    page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
}

if (require.main === module) {
  generateSitemap();
}
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
