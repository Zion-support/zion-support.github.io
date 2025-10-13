const fs = require('fs');
const path = require('path');

const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const pages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/blog',
    '/demo',
    '/privacy',
    '/terms',
    '/ai-services',
    '/micro-saas',
    '/5g-solutions',
    '/tutorials',
    '/support',
    '/ai-analytics',
    '/ai-automation',
    '/ai-business-intelligence',
    '/ai-content-generation',
    '/ai-customer-service',
    '/ai-data-analytics',
    '/ai-email-automation',
    '/ai-fraud-detection',
    '/ai-healthcare',
    '/ai-marketing',
    '/ai-predictive-analytics',
    '/ai-project-management',
    '/ai-recommendation-engine',
    '/ai-sales-automation',
    '/ai-workflow-automation',
    '/ai-quantum-ai-assistant',
    '/ai-holographic-workspace-pro',
    '/cloud-infrastructure',
    '/cybersecurity-solutions',
    '/web-development',
    '/mobile-development',
    '/database-management',
    '/custom-software',
    '/network-infrastructure',
    '/cybersecurity-suite-pro',
    '/zion-analytics-pro',
    '/zion-security-shield',
    '/zion-cloud-vault',
    '/zion-content-studio',
    '/zion-ai-video-generator',
    '/zion-ai-invoice-generator',
    '/zion-ai-customer-insights',
    '/zion-ai-voice-assistant-pro',
    '/zion-ai-code-reviewer',
    '/zion-ai-contract-analyzer',
    '/zion-ai-data-cleaner',
    '/zion-ai-translator-pro',
    '/zion-ai-supply-chain-optimizer',
    '/5g-data-analytics',
    '/5g-edge-computing',
    '/5g-implementation',
    '/5g-mobile-applications',
    '/5g-network-infrastructure',
    '/5g-private-networks',
    '/5g-smart-city-solutions',
    '/5g-iot-solutions'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../dist/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
};

generateSitemap();
