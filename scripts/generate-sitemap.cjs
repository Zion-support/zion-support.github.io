const fs = require('fs');
const path = require('path');

// Define all the routes in your application
const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/ai-services',
  '/micro-saas',
  '/5g-solutions',
  '/blog',
  '/tutorials',
  '/demo',
  '/support',
  '/privacy',
  '/terms',
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
  // IT Services
  '/cloud-migration',
  '/devops-services',
  '/it-consulting',
  '/network-security',
  '/software-development',
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
  '/5g-data-analytics',
  '/5g-edge-computing',
  '/5g-implementation',
  '/5g-mobile-applications',
  '/5g-network-infrastructure',
  '/5g-private-networks',
  '/5g-smart-city-solutions',
  '/5g-iot-solutions',
  // Micro SAAS
  '/micro-saas-services',
  '/project-management-tool',
  '/customer-relationship-manager',
  '/inventory-management-system',
  '/financial-reporting-tool',
  '/employee-time-tracker',
  '/social-media-scheduler',
  '/email-marketing-platform',
  '/website-analytics-tool',
  '/task-automation-workflow',
  // Zion AI Products
  '/zion-ai-video-generator',
  '/zion-ai-invoice-generator',
  '/zion-ai-customer-insights',
  '/zion-ai-voice-assistant-pro',
  '/zion-ai-code-reviewer',
  '/zion-ai-contract-analyzer',
  '/zion-ai-supply-chain-optimizer',
  '/zion-ai-translator-pro',
  '/zion-ai-data-cleaner'
];

// Generate sitemap XML
const baseUrl = 'https://ziontechgroup.com';
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to dist directory
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');