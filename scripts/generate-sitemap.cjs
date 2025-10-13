const fs = require('fs');
const path = require('path');

// Define all routes
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
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

  // IT Services
  { url: '/cloud-migration', priority: '0.7', changefreq: 'monthly' },
  { url: '/devops-services', priority: '0.7', changefreq: 'monthly' },
  { url: '/it-consulting', priority: '0.7', changefreq: 'monthly' },
  { url: '/network-security', priority: '0.7', changefreq: 'monthly' },
  { url: '/software-development', priority: '0.7', changefreq: 'monthly' },
  { url: '/system-integration', priority: '0.7', changefreq: 'monthly' },
  { url: '/web-development', priority: '0.7', changefreq: 'monthly' },

  // 5G Services
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-network-infrastructure', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-edge-computing', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-iot-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-smart-city-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-private-networks', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-mobile-applications', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-data-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-implementation', priority: '0.7', changefreq: 'monthly' },

  // Micro SAAS Services
  { url: '/micro-saas-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/project-management-tool', priority: '0.6', changefreq: 'monthly' },
  { url: '/customer-relationship-manager', priority: '0.6', changefreq: 'monthly' },
  { url: '/inventory-management-system', priority: '0.6', changefreq: 'monthly' },
  { url: '/financial-reporting-tool', priority: '0.6', changefreq: 'monthly' },
  { url: '/employee-time-tracker', priority: '0.6', changefreq: 'monthly' },
  { url: '/social-media-scheduler', priority: '0.6', changefreq: 'monthly' },
  { url: '/email-marketing-platform', priority: '0.6', changefreq: 'monthly' },
  { url: '/website-analytics-tool', priority: '0.6', changefreq: 'monthly' },
  { url: '/task-automation-workflow', priority: '0.6', changefreq: 'monthly' },

  // Zion Pro Solutions
  { url: '/zion-ai-analytics-pro', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-security-shield-pro', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-cloud-vault-pro', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-crm-pro', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-marketing-automation-pro', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-project-manager-pro', priority: '0.7', changefreq: 'monthly' },

  // AI-Powered Tools
  { url: '/ai-powered-email-analyzer', priority: '0.6', changefreq: 'monthly' },
  { url: '/smart-inventory-optimizer', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-customer-sentiment-tracker', priority: '0.6', changefreq: 'monthly' },
  { url: '/smart-expense-categorizer', priority: '0.6', changefreq: 'monthly' }
];

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

// Write sitemap to public directory
function writeSitemap() {
  try {
    const sitemap = generateSitemap();
    const publicDir = path.join(__dirname, '..', 'public');
    const sitemapPath = path.join(publicDir, 'sitemap.xml');

    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
    
    // Also generate robots.txt if it doesn't exist
    const robotsPath = path.join(publicDir, 'robots.txt');
    if (!fs.existsSync(robotsPath)) {
      const robotsContent = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;
      fs.writeFileSync(robotsPath, robotsContent, 'utf8');
      console.log('✅ Robots.txt generated successfully at:', robotsPath);
    }

  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the sitemap generation
writeSitemap();