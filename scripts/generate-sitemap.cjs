const fs = require('fs');
const path = require('path');

const baseUrl = 'https://ziontechgroup.com';
const pages = [
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
  { url: '/careers', priority: '0.6', changefreq: 'weekly' },
  { url: '/partners', priority: '0.6', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'weekly' },
  { url: '/faq', priority: '0.6', changefreq: 'monthly' },
  { url: '/demo', priority: '0.7', changefreq: 'monthly' },
  { url: '/consultation', priority: '0.8', changefreq: 'monthly' },
  { url: '/micro-saas', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
  { url: '/docs', priority: '0.5', changefreq: 'monthly' },
  { url: '/community', priority: '0.5', changefreq: 'weekly' },
  { url: '/api', priority: '0.4', changefreq: 'monthly' },
  { url: '/tutorials', priority: '0.6', changefreq: 'weekly' },
  { url: '/sitemap', priority: '0.4', changefreq: 'monthly' }
];

// Generate AI services pages
const aiServices = [
  'ai-chatbots', 'ai-content-generation', 'ai-data-analytics', 'ai-computer-vision',
  'ai-voice-assistant', 'ai-automation', 'ai-fraud-detection', 'ai-predictive-maintenance',
  'ai-personalization', 'ai-sentiment-analysis', 'ai-customer-support', 'ai-content-moderation',
  'ai-predictive-analytics', 'ai-document-processing', 'ai-customer-analytics', 'ai-supply-chain',
  'ai-healthcare', 'ai-financial-services', 'ai-nlp', 'ai-workflow-automation',
  'ai-customer-insights', 'ai-software-testing', 'ai-energy', 'ai-hr',
  'ai-blockchain', 'ai-edge-computing', 'ai-video-processing', 'ai-audio-generation',
  'ai-recommendation', 'ai-emotion-analysis', 'ai-chatbot-builder', 'ai-content-moderation',
  'ai-predictive-analytics', 'ai-document-processing', 'ai-customer-analytics', 'ai-supply-chain',
  'ai-healthcare', 'ai-financial-services', 'ai-nlp', 'ai-workflow-automation',
  'ai-customer-insights', 'ai-software-testing', 'ai-energy', 'ai-hr',
  'ai-blockchain', 'ai-edge-computing', 'ai-video-processing', 'ai-audio-generation',
  'ai-recommendation', 'ai-emotion-analysis'
];

// Generate IT services pages
const itServices = [
  'cloud-infrastructure', 'devops-cicd', 'cybersecurity-solutions', 'web-development',
  'mobile-development', 'api-development', 'it-support', 'data-analytics-bi',
  'custom-software', 'database-management', 'network-infrastructure', 'it-asset-management',
  'cloud-native-development', 'ai-integration-services', 'blockchain-development', 'iot-development',
  'e-commerce-development', 'advanced-api-development', 'data-engineering', 'advanced-cybersecurity',
  'cloud-migration-advanced', 'advanced-devops-sre', 'machine-learning-ops', 'enterprise-integration',
  'performance-optimization', 'disaster-recovery-advanced', 'compliance-automation', 'cloud-cost-optimization',
  'security-automation', 'data-visualization', 'workflow-automation', 'cloud-native-security'
];

// Add AI and IT services to pages
aiServices.forEach(service => {
  pages.push({
    url: `/ai-services/${service}`,
    priority: '0.6',
    changefreq: 'monthly'
  });
});

itServices.forEach(service => {
  pages.push({
    url: `/it-services/${service}`,
    priority: '0.6',
    changefreq: 'monthly'
  });
});

// Generate sitemap XML
const generateSitemap = () => {
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

// Write sitemap to file
const sitemap = generateSitemap();
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap);
console.log('Sitemap generated successfully at:', sitemapPath);
