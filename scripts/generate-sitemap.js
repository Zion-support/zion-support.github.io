import fs from,
  fs';
import path from
  'path';
import { fileURLToPath } from
  'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your site
  's base URL
const baseUrl = 'https: //ziontechgroup.com
  ';

// Define your pages and their priorities
const pages = [
  { url: ', priority: 1.0, changefreq:,
  daily' },
  { url: '/about, priority: 0.8, changefreq:,
  monthly' },
  { url: '/services, priority: 0.9, changefreq:,
  weekly' },
  { url: '/services/micro-saas, priority: 0.8, changefreq:,
  weekly' },
  { url: '/services/it-services, priority: 0.8, changefreq:,
  weekly' },
  { url: '/services/ai-services, priority: 0.8, changefreq:,
  weekly' },
  { url: '/contact, priority: 0.7, changefreq:,
  monthly' },
  { url: '/careers, priority: 0.6, changefreq:
  'weekly' },
];

// Generate sitemap XML
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split(
  'T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join(
  '\n')}
</urlset>`;

  // Write sitemap to public directory
  const sitemapPath = path.join(process.cwd(),
  'public',
  'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(
  'Sitemap generated successfully at:', sitemapPath);

  // Also generate robots.txt if it doesn
  't exist
  const robotsPath = path.join(process.cwd(), 'public
  ', 'robots.txt
  ');
  if (!fs.existsSync(robotsPath)) {
    const robots = `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /scripts/

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;

    fs.writeFileSync(robotsPath, robots);
    console.log('Robots.txt generated successfully at:', robotsPath);
  }
}

// Run the generator
generateSitemap();
