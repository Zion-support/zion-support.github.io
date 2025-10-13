const fs = require('fs');
const path = require('path');

const baseUrl = 'https://ziontechgroup.com';

const routes = [
  // Main pages
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
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
  { url: '/cloud-migration', priority: '0.8', changefreq: 'weekly' },
  { url: '/devops-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-consulting', priority: '0.8', changefreq: 'weekly' },
  { url: '/network-security', priority: '0.8', changefreq: 'weekly' },
  { url: '/software-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/system-integration', priority: '0.8', changefreq: 'weekly' },
  { url: '/web-development', priority: '0.8', changefreq: 'weekly' },

  // 5G Services
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-network-infrastructure', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-private-networks', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-mobile-applications', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-data-analytics', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-implementation', priority: '0.7', changefreq: 'weekly' },

  // Micro SAAS Services
  { url: '/micro-saas-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/project-management-tool', priority: '0.7', changefreq: 'weekly' },
  { url: '/customer-relationship-manager', priority: '0.7', changefreq: 'weekly' },
  { url: '/inventory-management-system', priority: '0.7', changefreq: 'weekly' },
  { url: '/financial-reporting-tool', priority: '0.7', changefreq: 'weekly' },
  { url: '/employee-time-tracker', priority: '0.7', changefreq: 'weekly' },
  { url: '/social-media-scheduler', priority: '0.7', changefreq: 'weekly' },
  { url: '/email-marketing-platform', priority: '0.7', changefreq: 'weekly' },
  { url: '/website-analytics-tool', priority: '0.7', changefreq: 'weekly' },
  { url: '/task-automation-workflow', priority: '0.7', changefreq: 'weekly' },

  // New Innovative Micro SAAS Services
  { url: '/ai-powered-email-analyzer', priority: '0.8', changefreq: 'weekly' },
  { url: '/smart-inventory-optimizer', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-customer-sentiment-tracker', priority: '0.8', changefreq: 'weekly' },
  { url: '/smart-expense-categorizer', priority: '0.8', changefreq: 'weekly' },
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(sitemapPath, sitemap);
  console.log('Sitemap generated successfully at:', sitemapPath);
};

generateSitemap();