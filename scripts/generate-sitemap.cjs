const fs = require('fs');
const path = require('path');

// Define all routes for the sitemap
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.9', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/team', priority: '0.7', changefreq: 'monthly' },
  { url: '/careers', priority: '0.7', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms', priority: '0.5', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.5', changefreq: 'yearly' },
  
  // AI Services
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-solutions', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-chatbot-builder', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-document-processor', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-form-builder', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-voice-assistant', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-fraud-detection', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-image-recognition', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-lead-scoring', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-predictive-maintenance', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-price-optimizer', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-scheduling-assistant', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-content-generator', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-crm-optimizer', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-data-visualizer', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-email-optimizer', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-website-analyzer', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-social-media-manager', priority: '0.8', changefreq: 'weekly' },
  
  // IT Services
  { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/digital-transformation', priority: '0.8', changefreq: 'weekly' },
  { url: '/web-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/mobile-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/database-management', priority: '0.8', changefreq: 'weekly' },
  { url: '/network-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/cybersecurity', priority: '0.8', changefreq: 'weekly' },
  { url: '/cloud-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/blockchain-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/iot-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/devops-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/data-engineering', priority: '0.8', changefreq: 'weekly' },
  { url: '/api-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/security-audit', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  
  // Micro SaaS
  { url: '/micro-saas-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/task-manager-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/analytics-dashboard', priority: '0.7', changefreq: 'weekly' },
  { url: '/customer-support-hub', priority: '0.7', changefreq: 'weekly' },
  { url: '/inventory-manager', priority: '0.7', changefreq: 'weekly' },
  { url: '/social-media-scheduler', priority: '0.7', changefreq: 'weekly' },
  { url: '/expense-tracker-pro', priority: '0.7', changefreq: 'weekly' },
  
  // Resources
  { url: '/blog', priority: '0.7', changefreq: 'daily' },
  { url: '/tutorials', priority: '0.7', changefreq: 'weekly' },
  { url: '/docs', priority: '0.7', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.6', changefreq: 'monthly' },
  { url: '/api-docs', priority: '0.6', changefreq: 'weekly' },
  { url: '/help', priority: '0.6', changefreq: 'weekly' },
  { url: '/support', priority: '0.6', changefreq: 'weekly' },
  { url: '/demo', priority: '0.6', changefreq: 'monthly' },
  { url: '/accessibility', priority: '0.5', changefreq: 'monthly' },
  
  // Zion AI Services
  { url: '/zion-ai-chatbot-builder', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-code-assistant', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-content-moderator', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-crm-optimizer', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-customer-churn-predictor', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-customer-support-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-data-visualizer', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-document-analyzer', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-document-processor', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-email-marketing-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-email-optimizer', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-financial-forecaster', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-form-builder', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-fraud-detection', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-image-generator', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-image-recognition', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-inventory-optimizer-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-lead-scoring', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-meeting-transcriber', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-predictive-analytics', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-predictive-maintenance', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-price-optimizer', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-sales-predictor', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-scheduling-assistant', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-social-media-manager', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-social-scheduler-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-task-scheduler', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-translation-service', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-video-generator', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-voice-assistant', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-voice-synthesis', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-website-analyzer', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-workflow-automator', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-workflow-automator-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-api-development', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-blockchain-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-customer-satisfaction-monitor', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-cybersecurity-audit', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-devops-automation', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-iot-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-smart-analytics-dashboard', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-smart-crm-automation', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-smart-expense-tracker', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-smart-inventory-manager', priority: '0.7', changefreq: 'weekly' }
];

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

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

// Generate and save sitemap
function createSitemap() {
  try {
    const sitemap = generateSitemap();
    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    console.log('Sitemap generated successfully at:', sitemapPath);
    
    // Also create a sitemap index if needed
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://ziontechgroup.com/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;
    
    const sitemapIndexPath = path.join(__dirname, '..', 'public', 'sitemap-index.xml');
    fs.writeFileSync(sitemapIndexPath, sitemapIndex, 'utf8');
    console.log('Sitemap index generated successfully at:', sitemapIndexPath);
    
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  createSitemap();
}

module.exports = { createSitemap, generateSitemap };