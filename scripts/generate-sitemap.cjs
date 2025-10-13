const fs = require('fs');
const path = require('path');

// Generate sitemap
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const pages = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/pricing',
    '/blog',
    '/tutorials',
    '/demo',
    '/support',
    '/privacy',
    '/terms',
    '/cookies',
    '/sitemap',
    '/ai-services',
    '/micro-saas',
    '/it-services',
    '/cloud-services',
    '/5g-solutions',
    '/ai-analytics',
    '/ai-automation',
    '/ai-business-intelligence',
    '/ai-content-generation',
    '/ai-customer-service',
    '/ai-data-analytics',
    '/ai-email-automation',
    '/ai-fraud-detection',
    '/ai-marketing',
    '/ai-predictive-analytics',
    '/ai-project-management',
    '/ai-recommendation-engine',
    '/ai-sales-automation',
    '/ai-workflow-automation',
    '/ai-quantum-computing',
    '/ai-blockchain-solutions',
    '/cloud-infrastructure',
    '/cybersecurity-solutions',
    '/web-development',
    '/mobile-development',
    '/database-management',
    '/custom-software',
    '/network-infrastructure',
    '/data-analytics',
    '/iot-solutions',
    '/devops-solutions',
    '/machine-learning',
    '/zion-analytics-pro',
    '/zion-security-shield',
    '/zion-cloud-vault',
    '/zion-ai-crm-pro',
    '/zion-content-studio',
    '/zion-data-sync',
    '/zion-lead-magnet',
    '/zion-project-master',
    '/zion-email-automation',
    '/zion-social-scheduler',
    '/zion-workflow-automation',
    '/zion-invoice-genius',
    '/zion-inventory-smart',
    '/zion-compliance-manager',
    '/zion-performance-monitor',
    '/zion-ai-sales-predictor',
    '/zion-ai-workflow-optimizer',
    '/zion-ai-customer-insights-pro',
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
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../dist/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
};

generateSitemap();