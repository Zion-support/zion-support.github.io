const fs = require('fs');
const path = require('path');

// Define all the pages that should be in the sitemap
const pages = [
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/demo', priority: '0.6', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  
  // AI Services
  { url: '/ai-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-business-intelligence', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-content-generation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-customer-service', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-data-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-email-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-fraud-detection', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-healthcare', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-marketing', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-predictive-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-project-management', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-recommendation-engine', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-sales-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-workflow-automation', priority: '0.8', changefreq: 'monthly' },
  
  // IT Services
  { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'monthly' },
  { url: '/cybersecurity-solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/web-development', priority: '0.8', changefreq: 'monthly' },
  { url: '/mobile-development', priority: '0.8', changefreq: 'monthly' },
  { url: '/database-management', priority: '0.8', changefreq: 'monthly' },
  { url: '/custom-software', priority: '0.8', changefreq: 'monthly' },
  { url: '/network-infrastructure', priority: '0.8', changefreq: 'monthly' },
  
  // Micro SAAS Services
  { url: '/zion-analytics-pro', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-security-shield', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-cloud-vault', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-content-studio', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-video-generator', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-invoice-generator', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-customer-insights', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-email-analyzer', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-smart-inventory-optimizer', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-customer-sentiment-tracker', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-smart-expense-categorizer', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-voice-assistant-pro', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-code-reviewer', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-social-media-manager', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-contract-analyzer', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-performance-optimizer', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-customer-churn-predictor', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-supply-chain-optimizer', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-financial-forecaster', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-content-moderator', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-translator-pro', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-data-cleaner', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-task-scheduler', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-customer-support-pro', priority: '0.7', changefreq: 'monthly' },
  
  // 5G Services
  { url: '/5g-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-data-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-edge-computing', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-implementation', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-mobile-applications', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-network-infrastructure', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-private-networks', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-smart-city-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-iot-solutions', priority: '0.7', changefreq: 'monthly' }
];

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  pages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
}

// Write sitemap to file
function writeSitemap() {
  try {
    const sitemap = generateSitemap();
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    
    // Ensure public directory exists
    const publicDir = path.dirname(sitemapPath);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
    console.log(`📄 Generated sitemap with ${pages.length} pages`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// Run the sitemap generation
writeSitemap();