const fs = require('fs');
const path = require('path');

// Define the base URL
const baseUrl = 'https://ziontechgroup.com';

// Define the pages to include in the sitemap
const pages = [
  '/',
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
  // AI Services
  '/ai-analytics',
  '/ai-project-management-pro',
  '/ai-customer-insights-pro',
  '/ai-workflow-automation-pro',
  '/ai-data-visualization-pro',
  '/ai-content-optimization-pro',
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
  // IT Services
  '/cloud-migration-pro',
  '/cybersecurity-consulting-pro',
  '/cloud-infrastructure',
  '/cybersecurity-solutions',
  '/web-development',
  '/mobile-development',
  '/database-management',
  '/custom-software',
  '/network-infrastructure',
  // Micro SAAS Services
  '/zion-analytics-pro',
  '/zion-security-shield',
  '/zion-cloud-vault',
  '/zion-content-studio',
  // 5G Solutions
  '/5g-data-analytics',
  '/5g-edge-computing',
  '/5g-implementation',
  '/5g-iot-solutions',
  '/5g-mobile-applications',
  '/5g-network-infrastructure',
  '/5g-private-networks',
  '/5g-smart-city-solutions'
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to public directory
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');