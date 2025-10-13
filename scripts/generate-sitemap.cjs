const fs = require('fs');
const path = require('path');

// Generate comprehensive sitemap
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  // Get all page routes
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
    { url: '/5g-solutions', priority: '0.9', changefreq: 'weekly' },
    { url: '/accessibility', priority: '0.6', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms', priority: '0.5', changefreq: 'yearly' }
  ];

  // Add AI service pages
  const aiServices = [
    'ai-analytics', 'ai-content-generation', 'ai-customer-support', 'ai-cybersecurity',
    'ai-data-analytics', 'ai-document-processing', 'ai-marketing-automation',
    'ai-predictive-analytics', 'ai-voice-assistant', 'ai-workflow-automation',
    'ai-business-intelligence', 'ai-chatbot-builder', 'ai-computer-vision',
    'ai-crm', 'ai-automation', 'ai-blockchain-solutions'
  ];

  aiServices.forEach(service => {
    pages.push({
      url: `/ai-services/${service}`,
      priority: '0.8',
      changefreq: 'weekly'
    });
  });

  // Add Micro SAAS pages
  const microSaasServices = [
    'zion-ai-analytics-pro', 'zion-security-shield', 'zion-cloud-vault',
    'zion-ai-crm-pro', 'zion-ai-marketing-automation-pro', 'zion-ai-project-manager-pro',
    'zion-ai-video-generator', 'zion-ai-invoice-generator', 'zion-ai-customer-insights'
  ];

  microSaasServices.forEach(service => {
    pages.push({
      url: `/micro-saas/${service}`,
      priority: '0.8',
      changefreq: 'weekly'
    });
  });

  // Add 5G solution pages
  const fiveGServices = [
    '5g-network-infrastructure', '5g-edge-computing', '5g-iot-solutions',
    '5g-smart-city-solutions', '5g-private-networks', '5g-mobile-applications',
    '5g-data-analytics', '5g-implementation'
  ];

  fiveGServices.forEach(service => {
    pages.push({
      url: `/5g-solutions/${service}`,
      priority: '0.8',
      changefreq: 'weekly'
    });
  });

  // Generate XML sitemap
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">`;

  pages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Write sitemap
  fs.writeFileSync('/workspace/public/sitemap.xml', sitemap);
  console.log('✅ Comprehensive sitemap generated');
}

generateSitemap();