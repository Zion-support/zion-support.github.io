const fs = require('fs');
const path = require('path');

// Define all the routes in your application
const routes = [
<<<<<<< HEAD
  '/',
  '/about',
  '/contact',
  '/services',
  '/ai-services',
  '/micro-saas',
  '/5g-solutions',
  '/pricing',
  '/blog',
  '/tutorials',
  '/demo',
  '/support',
  '/privacy',
  '/terms',
  '/cookies',
  '/sitemap',
  
  // AI Services
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
  
  // IT Services
  '/cloud-infrastructure',
  '/cybersecurity-solutions',
  '/web-development',
  '/mobile-development',
  '/database-management',
  '/custom-software',
  '/network-infrastructure',
  '/data-analytics',
  
  // Micro SAAS
  '/zion-analytics-pro',
  '/zion-security-shield',
  '/zion-cloud-vault',
  '/zion-content-studio',
  '/zion-ai-video-generator',
  '/zion-ai-customer-insights',
  '/zion-ai-cybersecurity-suite-pro',
  '/zion-ai-business-intelligence-pro',
  
  // 5G Solutions
  '/5g-data-analytics',
  '/5g-edge-computing',
  '/5g-implementation',
  '/5g-mobile-applications',
  '/5g-network-infrastructure',
  '/5g-private-networks',
  '/5g-smart-city-solutions',
  '/5g-iot-solutions'
=======
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.8', changefreq: 'weekly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/demo', priority: '0.7', changefreq: 'weekly' },
  { url: '/support', priority: '0.6', changefreq: 'weekly' },
  { url: '/tutorials', priority: '0.6', changefreq: 'weekly' },

  // AI Services
  { url: '/ai-services', priority: '0.8', changefreq: 'weekly' },
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

  // Micro SAAS Services
  { url: '/micro-saas', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-analytics-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-security-shield', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-cloud-vault', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-content-studio', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-video-generator', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-invoice-generator', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-customer-insights', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-email-analyzer', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-smart-inventory-optimizer', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-customer-sentiment-tracker', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-smart-expense-categorizer', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-voice-assistant-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-code-reviewer', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-social-media-manager', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-contract-analyzer', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-performance-optimizer', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-customer-churn-predictor', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-supply-chain-optimizer', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-financial-forecaster', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-content-moderator', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-translator-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-data-cleaner', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-task-scheduler', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-customer-support-pro', priority: '0.7', changefreq: 'weekly' },

  // 5G Solutions
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-data-analytics', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-implementation', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-mobile-applications', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-network-infrastructure', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-private-networks', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.7', changefreq: 'weekly' }
>>>>>>> cursor/analyze-improve-and-deploy-application-c573
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
<<<<<<< HEAD
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Write sitemap to public directory
const writeSitemap = () => {
  try {
    const sitemap = generateSitemap();
    const publicDir = path.join(__dirname, '..', 'public');
    
    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);
    
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the script
writeSitemap();
=======
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
}

// Write sitemap to file
const sitemap = generateSitemap();
const outputPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');

// Ensure dist directory exists
const distDir = path.dirname(outputPath);
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(outputPath, sitemap);
console.log('Sitemap generated successfully at:', outputPath);
>>>>>>> cursor/analyze-improve-and-deploy-application-c573
