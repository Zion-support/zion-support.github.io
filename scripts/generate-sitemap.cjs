const fs = require('fs');
const path = require('path');

// Define all the routes in your application
const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'weekly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
  { url: '/careers', priority: '0.6', changefreq: 'monthly' },
  { url: '/partners', priority: '0.6', changefreq: 'monthly' },
  { url: '/support', priority: '0.7', changefreq: 'monthly' },
  { url: '/faq', priority: '0.7', changefreq: 'monthly' },
  { url: '/demo', priority: '0.8', changefreq: 'monthly' },
  { url: '/consultation', priority: '0.8', changefreq: 'monthly' },
  { url: '/micro-saas', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms', priority: '0.5', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.5', changefreq: 'yearly' },
  { url: '/docs', priority: '0.6', changefreq: 'monthly' },
  { url: '/community', priority: '0.6', changefreq: 'weekly' },
  { url: '/api', priority: '0.6', changefreq: 'monthly' },
  { url: '/tutorials', priority: '0.7', changefreq: 'weekly' },
  { url: '/sitemap', priority: '0.3', changefreq: 'monthly' }
];

// AI Services routes
const aiServices = [
  'ai-chatbot-builder', 'ai-content-generation', 'ai-data-analytics', 'ai-computer-vision',
  'ai-voice-solutions', 'ai-automation', 'ai-healthcare', 'ai-financial-services',
  'ai-document-processing', 'ai-predictive-analytics', 'ai-hr-solutions', 'ai-edge-computing',
  'ai-video-analysis', 'ai-speech-synthesis', 'ai-recommendation-engine', 'ai-sentiment-analysis',
  'ai-chatbot-enterprise', 'ai-content-moderation', 'ai-predictive-modeling', 'ai-document-intelligence',
  'ai-conversation-analytics', 'ai-supply-chain-ai', 'ai-healthcare-diagnostics', 'ai-financial-forecasting',
  'ai-iot-analytics', 'ai-conversational-ai', 'ai-automated-testing', 'ai-knowledge-management',
  'ai-customer-churn', 'ai-automated-reporting', 'ai-voice-assistant', 'ai-content-generation-pro'
];

// IT Services routes
const itServices = [
  'cloud-computing', 'cybersecurity', 'data-analytics', 'software-development',
  'mobile-app-development', 'web-development', 'devops', 'cloud-migration',
  'it-consulting', 'system-integration', 'network-security', 'database-management',
  'cloud-architecture', 'microservices', 'api-development', 'infrastructure-management'
];

// Add AI services to routes
aiServices.forEach(service => {
  routes.push({
    url: `/${service}`,
    priority: '0.8',
    changefreq: 'monthly'
  });
});

// Add IT services to routes
itServices.forEach(service => {
  routes.push({
    url: `/${service}`,
    priority: '0.8',
    changefreq: 'monthly'
  });
});

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${route.url}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });

  sitemap += '</urlset>';

  return sitemap;
};

// Write sitemap to public directory
const sitemap = generateSitemap();
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemap);
console.log('Sitemap generated successfully at:', sitemapPath);
console.log(`Total URLs: ${routes.length}`);

// Also generate a sitemap index if needed
const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://ziontechgroup.com/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

fs.writeFileSync(path.join(publicDir, 'sitemap-index.xml'), sitemapIndex);
console.log('Sitemap index generated successfully');