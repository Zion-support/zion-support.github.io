const fs = require('fs');
const path = require('path');

// Define all routes for the sitemap
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/tutorials', priority: '0.7', changefreq: 'weekly' },
  { url: '/demo', priority: '0.8', changefreq: 'monthly' },
  { url: '/support', priority: '0.7', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms', priority: '0.5', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.5', changefreq: 'yearly' },
  { url: '/sitemap', priority: '0.3', changefreq: 'monthly' },

  // AI Services
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-business-intelligence', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-content-generation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-customer-service', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-data-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-email-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-fraud-detection', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-healthcare', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-marketing', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-predictive-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-project-management', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-recommendation-engine', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-sales-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-workflow-automation', priority: '0.8', changefreq: 'weekly' },

  // IT Services
  { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/cybersecurity-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/web-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/mobile-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/database-management', priority: '0.8', changefreq: 'weekly' },
  { url: '/custom-software', priority: '0.8', changefreq: 'weekly' },
  { url: '/network-infrastructure', priority: '0.8', changefreq: 'weekly' },

  // Micro SAAS
  { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-analytics-pro', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-security-shield', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-cloud-vault', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-ai-crm-pro', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-ai-marketing-automation-pro', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-ai-project-manager-pro', priority: '0.8', changefreq: 'weekly' },

  // 5G Solutions
  { url: '/5g-solutions', priority: '0.9', changefreq: 'weekly' },
  { url: '/5g-data-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-implementation', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-mobile-applications', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-network-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-private-networks', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.8', changefreq: 'weekly' },
];

const baseUrl = 'https://ziontechgroup.com';
const currentDate = new Date().toISOString();

// Generate XML sitemap
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

  routes.forEach(route => {
    sitemap += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
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
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /ai-services/
Allow: /services/
Allow: /micro-saas/
Allow: /5g-solutions/
Allow: /about/
Allow: /contact/
Allow: /pricing/
Allow: /blog/
Allow: /tutorials/
Allow: /demo/
Allow: /support/

# Block specific file types
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /*.txt$
Disallow: /*.log$

# Allow search engines to access CSS and JS files
Allow: /assets/
Allow: /*.css$
Allow: /*.js$

# Block common bot traps
Disallow: /search?
Disallow: /?*
Disallow: /tag/
Disallow: /category/
Disallow: /archive/

# Allow social media crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

# Block bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: SemrushBot
Disallow: /`;
}

// Write sitemap to public directory
const sitemapContent = generateSitemap();
const robotsContent = generateRobotsTxt();

// Ensure public directory exists
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write files
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);

console.log(`Generated sitemap with ${routes.length} routes`);
console.log('Generated robots.txt');