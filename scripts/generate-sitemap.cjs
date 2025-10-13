const fs = require('fs');
const path = require('path');

// Define all routes
const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/tutorials', priority: '0.7', changefreq: 'weekly' },
  { url: '/demo', priority: '0.6', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
  { url: '/sitemap', priority: '0.4', changefreq: 'monthly' },
  // AI Services
  { url: '/ai-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-content-generation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-customer-support', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-cybersecurity', priority: '0.8', changefreq: 'weekly' },
  // IT Services
  { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/cybersecurity-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/web-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/mobile-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/database-management', priority: '0.8', changefreq: 'weekly' },
  { url: '/custom-software', priority: '0.8', changefreq: 'weekly' },
  // Micro SAAS
  { url: '/zion-analytics-pro', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-security-shield', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-cloud-vault', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-content-studio', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-data-sync', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-project-master', priority: '0.8', changefreq: 'weekly' },
  // 5G Solutions
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-implementation', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-private-networks', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-data-analytics', priority: '0.8', changefreq: 'weekly' },
  // Additional AI Services
  { url: '/ai-business-intelligence', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-chatbot-builder', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-crm', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-data-analytics', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-devops-automation', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-document-processing', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-marketing-automation', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-predictive-analytics', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-voice-assistant', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-workflow-automation', priority: '0.7', changefreq: 'weekly' },
  // Additional IT Services
  { url: '/network-infrastructure', priority: '0.7', changefreq: 'weekly' },
  { url: '/data-analytics', priority: '0.7', changefreq: 'weekly' },
  { url: '/it-consulting', priority: '0.7', changefreq: 'weekly' },
  { url: '/system-integration', priority: '0.7', changefreq: 'weekly' },
  { url: '/cloud-migration', priority: '0.7', changefreq: 'weekly' },
  { url: '/disaster-recovery', priority: '0.7', changefreq: 'weekly' },
  { url: '/backup-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/monitoring-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/compliance-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/training-services', priority: '0.7', changefreq: 'weekly' },
  // Additional Micro SAAS
  { url: '/zion-lead-magnet', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-email-automation', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-social-media-manager', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-inventory-manager', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-customer-feedback', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-expense-tracker', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-task-manager', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-time-tracker', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-report-generator', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-form-builder', priority: '0.7', changefreq: 'weekly' },
  // Additional 5G Services
  { url: '/5g-mobile-applications', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-network-infrastructure', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-testing-services', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-consulting', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-training', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-support', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-maintenance', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-optimization', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-security', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-compliance', priority: '0.7', changefreq: 'weekly' }
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${route.url}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

// Generate robots.txt
const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
`;
};

// Write files
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), generateSitemap());
fs.writeFileSync(path.join(distDir, 'robots.txt'), generateRobotsTxt());

console.log(`Generated sitemap with ${routes.length} routes`);
console.log('Generated robots.txt');
