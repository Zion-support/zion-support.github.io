const fs = require('fs');
const path = require('path');

// Define all the pages and their priorities
const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/demo', priority: '0.7', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'monthly' },
  { url: '/consultation', priority: '0.7', changefreq: 'monthly' },
  { url: '/team', priority: '0.6', changefreq: 'monthly' },
  { url: '/careers', priority: '0.6', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
  { url: '/news', priority: '0.6', changefreq: 'weekly' },
  { url: '/press', priority: '0.5', changefreq: 'monthly' },
  { url: '/partners', priority: '0.6', changefreq: 'monthly' }
];

// AI Services pages
const aiServices = [
  'ai-analytics-dashboard-pro',
  'ai-cybersecurity-suite-pro',
  'ai-content-generation-pro',
  'ai-customer-support-chatbot',
  'ai-code-assistant-pro',
  'ai-business-intelligence-pro',
  'ai-automation-platform',
  'ai-data-analytics-pro',
  'ai-marketing-automation',
  'ai-hr-recruitment-pro',
  'ai-financial-analysis',
  'ai-supply-chain-optimizer',
  'ai-voice-assistant-pro',
  'ai-image-recognition-pro',
  'ai-predictive-maintenance',
  'ai-sentiment-analysis-pro',
  'ai-recommendation-engine',
  'ai-fraud-detection-pro',
  'ai-language-translation',
  'ai-chatbot-enterprise',
  'ai-data-mining-pro',
  'ai-video-analysis',
  'ai-time-series-forecasting',
  'ai-nlp-text-analysis'
];

// Micro SAAS pages
const microSaas = [
  'zion-analytics-pro',
  'zion-security-shield',
  'zion-cloud-vault',
  'zion-ai-inventory-manager',
  'zion-hr-assistant-pro',
  'zion-ai-accounting-suite',
  'zion-ecommerce-optimizer',
  'zion-ai-customer-insights',
  'zion-ai-lead-scoring',
  'zion-ai-document-processor',
  'zion-ai-social-listener',
  'zion-ai-email-optimizer',
  'zion-ai-meeting-assistant',
  'zion-ai-expense-tracker',
  'zion-ai-survey-builder',
  'zion-ai-chatbot-builder',
  'zion-ai-workflow-automation',
  'zion-ai-seo-optimizer',
  'zion-ai-data-warehouse',
  'zion-ai-mobile-app-builder',
  'zion-ai-api-manager',
  'zion-ai-backup-manager',
  'zion-ai-testing-automation'
];

// 5G Solutions pages
const fiveGSolutions = [
  '5g-data-analytics',
  '5g-edge-computing',
  '5g-implementation',
  '5g-mobile-applications',
  '5g-network-infrastructure',
  '5g-private-networks',
  '5g-smart-city-solutions'
];

// Add AI services to pages
aiServices.forEach(service => {
  pages.push({
    url: `/${service}`,
    priority: '0.7',
    changefreq: 'monthly'
  });
});

// Add Micro SAAS to pages
microSaas.forEach(saas => {
  pages.push({
    url: `/${saas}`,
    priority: '0.7',
    changefreq: 'monthly'
  });
});

// Add 5G Solutions to pages
fiveGSolutions.forEach(solution => {
  pages.push({
    url: `/${solution}`,
    priority: '0.7',
    changefreq: 'monthly'
  });
});

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
`;

  pages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
};

// Write sitemap to public directory
const sitemapContent = generateSitemap();
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

try {
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('✅ Enhanced sitemap generated successfully at:', sitemapPath);
  console.log(`📊 Total pages: ${pages.length}`);
  console.log(`🤖 AI Services: ${aiServices.length}`);
  console.log(`💼 Micro SAAS: ${microSaas.length}`);
  console.log(`📡 5G Solutions: ${fiveGSolutions.length}`);
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}