import fs from 'fs';
import path from 'path';

const baseUrl = 'https://ziontechgroup.com';

// Define all pages and their metadata
const pages = [
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/pricing', priority: '0.8', changefreq: 'weekly' },
  { url: '/partners', priority: '0.6', changefreq: 'monthly' },
  { url: '/careers', priority: '0.6', changefreq: 'weekly' },
  { url: '/faq', priority: '0.5', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'weekly' },
  { url: '/docs', priority: '0.7', changefreq: 'weekly' },
  { url: '/api-reference', priority: '0.6', changefreq: 'weekly' },
  { url: '/accessibility', priority: '0.4', changefreq: 'monthly' },
  { url: '/data-protection', priority: '0.4', changefreq: 'monthly' },
  { url: '/events', priority: '0.5', changefreq: 'weekly' },
  { url: '/news', priority: '0.5', changefreq: 'daily' },
  { url: '/research-development', priority: '0.6', changefreq: 'weekly' },
  { url: '/search', priority: '0.5', changefreq: 'monthly' },
  { url: '/services-overview', priority: '0.8', changefreq: 'weekly' },
  { url: '/system-status', priority: '0.4', changefreq: 'daily' },
  { url: '/team', priority: '0.5', changefreq: 'monthly' },
  
  // Service pages
  { url: '/services/ai-content-generator', priority: '0.7', changefreq: 'weekly' },
  { url: '/services/ai-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/services/cloud', priority: '0.7', changefreq: 'weekly' },
  { url: '/services/data', priority: '0.7', changefreq: 'weekly' },
  { url: '/services/transformation', priority: '0.7', changefreq: 'weekly' },
  
  // Solution pages
  { url: '/solutions/smb', priority: '0.6', changefreq: 'monthly' },
  { url: '/solutions/startup', priority: '0.6', changefreq: 'monthly' },
];

// Generate sitemap XML
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write sitemap to public directory
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
  console.log(`📊 Total pages: ${pages.length}`);
}

// Generate robots.txt
function generateRobotsTxt() {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /services/
Allow: /solutions/
Allow: /about/
Allow: /contact/

# Crawl delay
Crawl-delay: 1`;

  const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
  fs.writeFileSync(robotsPath, robots);
  
  console.log('✅ Robots.txt generated successfully at public/robots.txt');
}

// Run the generation
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemap();
  generateRobotsTxt();
}

export { generateSitemap, generateRobotsTxt };