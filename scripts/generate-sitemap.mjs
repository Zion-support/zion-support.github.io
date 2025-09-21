import fs from 'fs';
import path from 'path';

const baseUrl = 'https://zion.app';
const pages = [
  '',
  '/about',
  '/services',
  '/services-advertising',
  '/blog',
  '/client-portal',
  '/contact'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${pages.map(page => {
  const url = `${baseUrl}${page}`;
  const priority = page === '' ? '1.0' : page === '/services' ? '0.9' : '0.8';
  const changefreq = page === '' ? 'daily' : page === '/blog' ? 'weekly' : 'monthly';
  
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  // Ensure out directory exists
  const outDir = path.join(process.cwd(), 'out');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Write sitemap
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully');
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /client-portal/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /blog
Allow: /contact`;

  const outDir = path.join(process.cwd(), 'out');
  fs.writeFileSync(path.join(outDir, 'robots.txt'), robots);
  console.log('✅ Robots.txt generated successfully');
};

// Generate sitemap index
const generateSitemapIndex = () => {
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>`;

  const outDir = path.join(process.cwd(), 'out');
  fs.writeFileSync(path.join(outDir, 'sitemap-index.xml'), sitemapIndex);
  console.log('✅ Sitemap index generated successfully');
};

// Run all generators
generateSitemap();
generateRobotsTxt();
generateSitemapIndex();