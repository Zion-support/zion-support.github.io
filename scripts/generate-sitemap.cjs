const fs = require('fs');
const path = require('path');

// Define all the routes
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.8', changefreq: 'weekly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },

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
  { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/cybersecurity-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/web-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/mobile-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/database-management', priority: '0.8', changefreq: 'weekly' },
  { url: '/custom-software', priority: '0.8', changefreq: 'weekly' },
  { url: '/network-infrastructure', priority: '0.8', changefreq: 'weekly' },

  // 5G Services
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-network-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-private-networks', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-mobile-applications', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-data-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-implementation', priority: '0.8', changefreq: 'weekly' },

  // Micro SAAS Services
  { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
  { url: '/project-management-tool', priority: '0.8', changefreq: 'weekly' },
  { url: '/customer-relationship-manager', priority: '0.8', changefreq: 'weekly' },
  { url: '/inventory-management-system', priority: '0.8', changefreq: 'weekly' },
  { url: '/financial-reporting-tool', priority: '0.8', changefreq: 'weekly' },
  { url: '/employee-time-tracker', priority: '0.8', changefreq: 'weekly' },
  { url: '/social-media-scheduler', priority: '0.8', changefreq: 'weekly' },
  { url: '/email-marketing-platform', priority: '0.8', changefreq: 'weekly' },
  { url: '/website-analytics-tool', priority: '0.8', changefreq: 'weekly' },
  { url: '/task-automation-workflow', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-powered-email-analyzer', priority: '0.9', changefreq: 'weekly' },
  { url: '/smart-inventory-optimizer', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-customer-sentiment-tracker', priority: '0.9', changefreq: 'weekly' },
  { url: '/smart-expense-categorizer', priority: '0.9', changefreq: 'weekly' },

  // Zion Products
  { url: '/zion-analytics-pro', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-security-shield', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-cloud-vault', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-content-studio', priority: '0.9', changefreq: 'weekly' },
];

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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

// Write sitemap to file
const sitemap = generateSitemap();
const sitemapPath = path.join(process.cwd(), 'dist', 'sitemap.xml');

// Ensure dist directory exists
const distDir = path.dirname(sitemapPath);
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemap);
console.log('✅ Sitemap generated successfully at dist/sitemap.xml');

// Generate robots.txt
const generateRobots = () => {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

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
Allow: /it-services/
Allow: /micro-saas/
Allow: /5g-solutions/
Allow: /about/
Allow: /contact/
Allow: /blog/

# Host
Host: https://ziontechgroup.com`;

  const robotsPath = path.join(process.cwd(), 'dist', 'robots.txt');
  fs.writeFileSync(robotsPath, robotsContent);
  console.log('✅ Robots.txt generated successfully at dist/robots.txt');
};

// Run the generation
try {
  generateRobots();
} catch (error) {
  console.error('❌ Error generating files:', error);
  process.exit(1);
}