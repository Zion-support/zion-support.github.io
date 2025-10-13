const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = 'https://ziontechgroup.com';
const OUTPUT_FILE = 'public/sitemap.xml';
const PRIORITY_HIGH = '1.0';
const PRIORITY_MEDIUM = '0.8';
const PRIORITY_LOW = '0.6';
const PRIORITY_VERY_LOW = '0.4';

// Page configurations with priorities and change frequencies
const pages = [
  // Main pages
  { path: '/', priority: PRIORITY_HIGH, changefreq: 'daily' },
  { path: '/about', priority: PRIORITY_HIGH, changefreq: 'monthly' },
  { path: '/contact', priority: PRIORITY_HIGH, changefreq: 'monthly' },
  { path: '/services', priority: PRIORITY_HIGH, changefreq: 'weekly' },
  { path: '/careers', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/case-studies', priority: PRIORITY_MEDIUM, changefreq: 'monthly' },
  { path: '/partners', priority: PRIORITY_MEDIUM, changefreq: 'monthly' },
  { path: '/privacy', priority: PRIORITY_LOW, changefreq: 'yearly' },
  { path: '/terms', priority: PRIORITY_LOW, changefreq: 'yearly' },
  
  // AI Services
  { path: '/ai-services', priority: PRIORITY_HIGH, changefreq: 'weekly' },
  { path: '/ai-analytics', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-automation', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-business-intelligence', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-content-generation', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-customer-service', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-data-analytics', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-email-automation', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-fraud-detection', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-healthcare', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-marketing', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-predictive-analytics', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-project-management', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-quantum-computing', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-powered-devops', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-code-assistant-pro', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-content-studio', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-customer-insights', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-marketing-automation-pro', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-meeting-transcriber', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-sales-predictor', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-video-generator', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-cybersecurity-suite-pro', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-invoice-generator', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-project-manager-pro', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/ai-analytics-pro', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/zion-ai-analytics-pro', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/zion-ai-crm-pro', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/zion-ai-customer-insights', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/zion-ai-marketing-automation-pro', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/zion-ai-meeting-transcriber', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/zion-ai-sales-predictor', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/zion-ai-video-generator', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/zion-analytics-pro', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/zion-smart-inventory-optimizer', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  
  // Micro SAAS Services
  { path: '/micro-saas', priority: PRIORITY_HIGH, changefreq: 'weekly' },
  { path: '/micro-saas-services', priority: PRIORITY_HIGH, changefreq: 'weekly' },
  
  // 5G Solutions
  { path: '/5g-solutions', priority: PRIORITY_HIGH, changefreq: 'weekly' },
  { path: '/5g-network-infrastructure', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/5g-private-networks', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/5g-iot-solutions', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/5g-edge-computing', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/5g-smart-cities', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/5g-autonomous-vehicles', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  
  // Other services
  { path: '/cloud-infrastructure', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/custom-development', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/it-services', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/consultation', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/tutorials', priority: PRIORITY_LOW, changefreq: 'monthly' },
  { path: '/demo', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/support', priority: PRIORITY_MEDIUM, changefreq: 'weekly' },
  { path: '/blog', priority: PRIORITY_LOW, changefreq: 'weekly' }
];

// Generate sitemap XML
function generateSitemap() {
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
`;

  pages.forEach(page => {
    const fullUrl = `${SITE_URL}${page.path}`;
    sitemap += `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

// Write sitemap to file
function writeSitemap() {
  try {
    const sitemap = generateSitemap();
    const outputPath = path.join(process.cwd(), OUTPUT_FILE);
    
    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, sitemap, 'utf8');
    
    console.log(`✅ Enhanced sitemap generated successfully at: ${outputPath}`);
    console.log(`📊 Total pages: ${pages.length}`);
    console.log(`🤖 AI Services: ${pages.filter(p => p.path.includes('ai-') || p.path.includes('zion-ai-')).length}`);
    console.log(`💼 Micro SAAS: ${pages.filter(p => p.path.includes('micro-saas')).length}`);
    console.log(`📡 5G Solutions: ${pages.filter(p => p.path.includes('5g-')).length}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the generator
writeSitemap();
