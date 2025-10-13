const fs = require('fs');
const path = require('path');

// Define all routes for the sitemap
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms', priority: '0.5', changefreq: 'yearly' },

  // AI Services
  { url: '/ai-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-content-generation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-customer-support', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-cybersecurity', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-data-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-document-processing', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-marketing-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-predictive-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-voice-assistant', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-workflow-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-chatbot-builder', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-code-assistant', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-design-studio', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-business-intelligence', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-computer-vision', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-conversational-ai', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-crm', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-customer-insights', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-data-visualization', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-devops-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-document-intelligence', priority: '0.8', changefreq: 'weekly' },

  // IT Services
  { url: '/cloud-migration', priority: '0.8', changefreq: 'weekly' },
  { url: '/devops-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-consulting', priority: '0.8', changefreq: 'weekly' },
  { url: '/network-security', priority: '0.8', changefreq: 'weekly' },
  { url: '/software-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/system-integration', priority: '0.8', changefreq: 'weekly' },
  { url: '/web-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/cloud-consulting', priority: '0.8', changefreq: 'weekly' },
  { url: '/data-center-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/disaster-recovery', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-support', priority: '0.8', changefreq: 'weekly' },
  { url: '/managed-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/security-audit', priority: '0.8', changefreq: 'weekly' },
  { url: '/technology-consulting', priority: '0.8', changefreq: 'weekly' },

  // 5G Solutions
  { url: '/5g-solutions', priority: '0.9', changefreq: 'weekly' },
  { url: '/5g-network-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-private-networks', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-mobile-applications', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-data-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-implementation', priority: '0.8', changefreq: 'weekly' },

  // Micro SAAS
  { url: '/micro-saas-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/project-management-tool', priority: '0.8', changefreq: 'weekly' },
  { url: '/customer-relationship-manager', priority: '0.8', changefreq: 'weekly' },
  { url: '/inventory-management-system', priority: '0.8', changefreq: 'weekly' },
  { url: '/financial-reporting-tool', priority: '0.8', changefreq: 'weekly' },
  { url: '/employee-time-tracker', priority: '0.8', changefreq: 'weekly' },
  { url: '/social-media-scheduler', priority: '0.8', changefreq: 'weekly' },
  { url: '/email-marketing-platform', priority: '0.8', changefreq: 'weekly' },
  { url: '/website-analytics-tool', priority: '0.8', changefreq: 'weekly' },
  { url: '/task-automation-workflow', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-powered-email-analyzer', priority: '0.8', changefreq: 'weekly' },
  { url: '/smart-inventory-optimizer', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-customer-sentiment-tracker', priority: '0.8', changefreq: 'weekly' },
  { url: '/smart-expense-categorizer', priority: '0.8', changefreq: 'weekly' }
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