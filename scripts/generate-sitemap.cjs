const fs = require('fs');
const path = require('path');

// Define all the routes
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.8', changefreq: 'weekly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },

  // AI Services
  { url: '/ai-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-business-intelligence', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-content-generation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-customer-service', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-data-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-email-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-fraud-detection', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-healthcare', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-marketing', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-predictive-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-project-management', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-recommendation-engine', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-sales-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-workflow-automation', priority: '0.8', changefreq: 'weekly' },

  // IT Services
  { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/cybersecurity-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/web-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/mobile-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/database-management', priority: '0.8', changefreq: 'weekly' },
  { url: '/custom-software', priority: '0.8', changefreq: 'weekly' },
  { url: '/network-infrastructure', priority: '0.8', changefreq: 'weekly' },

  // 5G Solutions
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-data-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-implementation', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-mobile-applications', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-network-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-private-networks', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.8', changefreq: 'weekly' },

  // Micro SAAS Services
  { url: '/micro-saas', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-analytics-pro', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-security-shield', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-cloud-vault', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-content-studio', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-ai-video-generator', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-ai-invoice-generator', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-ai-customer-insights', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-ai-voice-assistant-pro', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-ai-code-reviewer', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-ai-contract-analyzer', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-ai-supply-chain-optimizer', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-ai-content-moderation', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-ai-translator-pro', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-ai-data-cleaner', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-ai-customer-service-pro', priority: '0.9', changefreq: 'weekly' }
];

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const sitemapPath = path.join(process.cwd(), 'dist', 'sitemap.xml');
  
  // Ensure dist directory exists
  const distDir = path.dirname(sitemapPath);
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('✅ Sitemap generated successfully!');
  
  // Also generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /ai-services/
Allow: /it-services/
Allow: /micro-saas/
Allow: /5g-solutions/
Allow: /about/
Allow: /contact/
Allow: /blog/`;

  const robotsPath = path.join(process.cwd(), 'dist', 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt);
  console.log('✅ Robots.txt generated successfully!');
}

generateSitemap();