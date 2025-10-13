const fs = require('fs');
const path = require('path');

// Define all the routes in your application
const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/blog',
  '/privacy',
  '/terms',
  '/ai-services',
  '/micro-saas',
  '/5g-solutions',
  '/tutorials',
  '/demo',
  '/support',
  // AI Services
  '/ai-analytics',
  '/ai-content-generation',
  '/ai-customer-support',
  '/ai-cybersecurity',
  '/ai-data-analytics',
  '/ai-document-processing',
  '/ai-marketing-automation',
  '/ai-predictive-analytics',
  '/ai-voice-assistant',
  '/ai-workflow-automation',
  '/ai-chatbot-builder',
  '/ai-code-assistant',
  '/ai-design-studio',
  '/ai-computer-vision',
  '/ai-conversational-ai',
  '/ai-crm',
  '/ai-customer-insights',
  '/ai-data-visualization',
  '/ai-devops-automation',
  '/ai-document-intelligence',
  // New AI Services
  '/ai-email-assistant',
  '/ai-invoice-generator',
  '/ai-video-generator',
  // IT Services
  '/cloud-migration',
  '/devops-services',
  '/it-consulting',
  '/network-security',
  '/custom-software',
  '/system-integration',
  '/web-development',
  '/cloud-consulting',
  '/data-center-solutions',
  '/disaster-recovery',
  '/it-support',
  '/managed-services',
  '/security-audit',
  '/technology-consulting',
  // 5G Services
  '/5g-network-infrastructure',
  '/5g-edge-computing',
  '/5g-iot-solutions',
  '/5g-smart-city-solutions',
  '/5g-private-networks',
  '/5g-mobile-applications',
  '/5g-data-analytics',
  '/5g-implementation',
  // Micro SAAS Services
  '/zion-analytics-pro',
  '/zion-security-shield',
  '/zion-cloud-vault',
  '/zion-content-studio',
  '/project-management-pro',
  '/zion-ai-crm-pro',
  '/zion-inventory-smart',
  '/ai-financial-analytics-pro',
  '/zion-performance-monitor',
  '/zion-ai-marketing-automation',
  '/zion-email-automation',
  '/data-analytics',
  '/ai-workflow-automation'
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${route}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += '    <changefreq>weekly</changefreq>\n';
    sitemap += '    <priority>0.8</priority>\n';
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

// Write sitemap to file
const sitemap = generateSitemap();
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
console.log('Sitemap generated successfully at public/sitemap.xml');