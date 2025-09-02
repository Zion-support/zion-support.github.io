import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all the pages and their metadata
const pages = [
  {
    url: '',
    changefreq: 'daily',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/micro-saas',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/it-services',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/ai-services',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/solutions',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/solutions/enterprise',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/careers',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  }
];

// Generate XML sitemap
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  pages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Generate robots.txt
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /scripts/
Disallow: /automation/
Disallow: /error-reports/
Disallow: /refactoring-reports/
Disallow: /maintenance-reports/
Disallow: /link-reports/

# Allow important pages
Allow: /services/
Allow: /solutions/
Allow: /about
Allow: /contact
Allow: /careers

# Crawl delay
Crawl-delay: 1`;
}

// Write files
try {
  const sitemap = generateSitemap();
  const robots = generateRobotsTxt();
  
  // Write sitemap.xml
  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('✅ Sitemap.xml generated successfully');
  
  // Write robots.txt
  fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robots);
  console.log('✅ Robots.txt generated successfully');
  
  // Also generate a JSON version for programmatic use
  const sitemapJson = {
    baseUrl: 'https://ziontechgroup.com',
    pages: pages.map(page => ({
      ...page,
      fullUrl: `https://ziontechgroup.com${page.url}`
    }))
  };
  
  fs.writeFileSync(
    path.join(__dirname, '../public/sitemap.json'), 
    JSON.stringify(sitemapJson, null, 2)
  );
  console.log('✅ Sitemap.json generated successfully');
  
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}