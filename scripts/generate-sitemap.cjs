const fs = require('fs');
const path = require('path');

// Base URL for the site
const baseUrl = 'https://ziontechgroup.com';

// Define all the pages and their metadata
const pages = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.9', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.6', changefreq: 'weekly' },
  
  // AI Services
  { url: '/ai-services', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-analytics', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-automation', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-content-generation', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-cybersecurity', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-customer-service', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-cloud-infrastructure', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-business-intelligence', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-data-analytics', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-devops-automation', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-computer-vision', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-conversational-ai', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-crm', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-customer-support', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-data-visualization', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-document-intelligence', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-fraud-detection', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-healthcare', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-marketing', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-nlp', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-predictive-analytics', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-recommendation-engine', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-robotics', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-supply-chain', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-testing', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-translation', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-voice-assistant', priority: '0.7', changefreq: 'weekly' },
  
  // Micro SAAS Services
  { url: '/micro-saas', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-analytics-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-security-shield', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-cloud-vault', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-crm-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-marketing-automation-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-project-manager-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-video-generator', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-invoice-generator', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-customer-insights', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-voice-assistant-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-code-reviewer', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-contract-analyzer', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-supply-chain-optimizer', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-translator-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-data-cleaner', priority: '0.7', changefreq: 'weekly' },
  
  // 5G Solutions
  { url: '/5g-solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-data-analytics', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-implementation', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-mobile-applications', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-network-infrastructure', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-private-networks', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.7', changefreq: 'weekly' }
];

// Generate sitemap XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

pages.forEach(page => {
  sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>
`;
});

sitemap += `</urlset>`;

// Write sitemap to public directory
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const sitemapPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log('Sitemap generated successfully at:', sitemapPath);
console.log(`Generated sitemap with ${pages.length} pages`);