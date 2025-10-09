import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all the pages/routes
const pages = [
  {
    url: 'https://ziontechgroup.com',
    priority: '1.0',
    changefreq: 'daily',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-services',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/it-services',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/contact',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-automation',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-marketing',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-healthcare',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-fintech',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/quantum-computing',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-cybersecurity',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-data-analytics',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/cloud-migration',
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/cybersecurity-suite',
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/devops-cicd',
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/database-management',
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  }
];

// Generate sitemap XML
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write to public directory
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

// Generate robots.txt
function generateRobots() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /ai-services
Allow: /it-services
Allow: /contact`;

  const publicDir = path.join(__dirname, '..', 'public');
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
  console.log('Robots.txt generated successfully!');
}

// Run the generators
generateSitemap();
generateRobots();