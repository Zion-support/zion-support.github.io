<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

<<<<<<< HEAD
console.log('🗺️ Generating sitemap...');

// Get all page files from the app directory
const appDir = path.join(__dirname, '../app');
const pages = [];

function scanDirectory(dir, basePath = '') {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      scanDirectory(fullPath, path.join(basePath, item));
    } else if (item === 'page.tsx' || item === 'page.js') {
      const route = basePath || '/';
      pages.push(route);
    }
  });
}

scanDirectory(appDir);

// Generate sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/ai-services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/micro-saas</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  ${pages
    .filter(page => page !== '/')
    .map(page => `
  <url>
    <loc>https://ziontechgroup.com${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`)
    .join('')}
</urlset>`;

// Ensure public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully at:', path.join(publicDir, 'sitemap.xml'));
=======
// Define all routes
const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/micro-saas', priority: '0.8', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/case-studies', priority: '0.7', changefreq: 'weekly' },
  { url: '/blog', priority: '0.7', changefreq: 'daily' },
  { url: '/team', priority: '0.6', changefreq: 'monthly' },
  { url: '/careers', priority: '0.6', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
  { url: '/docs', priority: '0.5', changefreq: 'weekly' },
  { url: '/api-docs', priority: '0.5', changefreq: 'weekly' },
  { url: '/support', priority: '0.6', changefreq: 'weekly' },
  { url: '/status', priority: '0.4', changefreq: 'daily' },
  { url: '/demo', priority: '0.7', changefreq: 'monthly' },
  { url: '/consultation', priority: '0.7', changefreq: 'monthly' }
];

// Add AI service pages
const aiServices = [
  'ai-project-manager', 'ai-social-media-manager', 'ai-analytics-dashboard',
  'ai-email-marketing', 'ai-customer-support-bot', 'ai-content-studio',
  'ai-financial-advisor', 'ai-workflow-automation', 'ai-quantum-financial-oracle',
  'ai-3d-generation', 'ai-mobile-app-builder', 'ai-logo-designer',
  'ai-drug-discovery-pro', 'ai-climate-solutions-pro', 'ai-space-technology-pro',
  'ai-financial-crime-detection-pro', 'ai-voice-cloning-studio', 'ai-code-security-auditor',
  'ai-mental-health-companion', 'ai-smart-home-controller', 'ai-investment-optimizer',
  'ai-infrastructure-monitoring', 'blockchain-integration-services', 'ai-api-management',
  'intelligent-database-migration'
];

aiServices.forEach(service => {
  routes.push({
    url: `/${service}`,
    priority: '0.6',
    changefreq: 'monthly'
  });
});

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
`;

  routes.forEach(route => {
    sitemap += `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

// Generate robots.txt
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas
=======
const fs = require('fs');
const path = require('path');

// Define all routes
const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/micro-saas', priority: '0.8', changefreq: 'weekly' },
  { url: '/blog', priority: '0.7', changefreq: 'daily' },
  { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
  { url: '/team', priority: '0.6', changefreq: 'monthly' },
  { url: '/careers', priority: '0.6', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
  { url: '/docs', priority: '0.7', changefreq: 'weekly' },
  { url: '/api-docs', priority: '0.6', changefreq: 'weekly' },
  { url: '/support', priority: '0.7', changefreq: 'weekly' },
  { url: '/status', priority: '0.5', changefreq: 'daily' },
  { url: '/demo', priority: '0.8', changefreq: 'weekly' },
  { url: '/consultation', priority: '0.8', changefreq: 'weekly' },
  { url: '/services', priority: '0.8', changefreq: 'weekly' },
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
};

// Generate robots.txt
const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fb25
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
<<<<<<< HEAD
=======
Disallow: /private/
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fb25

# Allow important pages
Allow: /ai-services/
Allow: /it-services/
Allow: /micro-saas/
<<<<<<< HEAD
Allow: /case-studies/
Allow: /blog/
`;
}

// Main execution
try {
  // Ensure public directory exists
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Generate and write sitemap
  const sitemap = generateSitemap();
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('Sitemap generated successfully at:', sitemapPath);

  // Generate and write robots.txt
  const robotsTxt = generateRobotsTxt();
  const robotsPath = path.join(publicDir, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt);
  console.log('Robots.txt generated successfully at:', robotsPath);

  // Generate sitemap index for better organization
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://ziontechgroup.com/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

  const sitemapIndexPath = path.join(publicDir, 'sitemap-index.xml');
  fs.writeFileSync(sitemapIndexPath, sitemapIndex);
  console.log('Sitemap index generated successfully at:', sitemapIndexPath);

  console.log('All SEO files generated successfully!');
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
=======
Allow: /blog/
Allow: /case-studies/`;
};

// Write files
const writeFiles = () => {
  const distDir = path.join(__dirname, '../dist');
  
  // Ensure dist directory exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Write sitemap.xml
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), generateSitemap());
  console.log('✅ Sitemap.xml generated');

  // Write robots.txt
  fs.writeFileSync(path.join(distDir, 'robots.txt'), generateRobotsTxt());
  console.log('✅ Robots.txt generated');
};

// Run if called directly
if (require.main === module) {
  writeFiles();
}

module.exports = { generateSitemap, generateRobotsTxt, writeFiles };
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fb25
