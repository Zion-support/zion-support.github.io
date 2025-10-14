const fs = require('fs');
const path = require('path');

// Define all routes for the sitemap
const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/ai-services',
  '/micro-saas',
  '/5g-solutions',
  '/blog',
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
  '/ai-chatbot-builder',
  '/ai-code-assistant',
  '/ai-design-studio',
  '/ai-computer-vision',
  '/ai-conversational-ai',
  '/ai-crm',
  '/ai-customer-insights',
  '/ai-data-visualization',
  '/ai-devops-automation',
  '/ai-document-intelligence',
  // IT Services
  '/it-services',
  '/cloud-services',
  '/cloud-infrastructure',
  '/cybersecurity',
  '/cybersecurity-solutions',
  '/custom-development',
  '/web-development',
  '/mobile-development',
  '/database-management',
  '/cloud-consulting',
  '/data-center-solutions',
  '/disaster-recovery',
  '/it-support',
  '/managed-services',
  '/security-audit',
  '/technology-consulting',
  // Micro SAAS Services
  '/zion-analytics-pro',
  '/zion-security-shield',
  '/zion-cloud-vault',
  '/zion-content-studio',
  '/zion-ai-video-generator',
  '/zion-ai-invoice-generator',
  '/zion-ai-customer-insights',
  '/zion-ai-email-analyzer',
  '/zion-smart-inventory-optimizer',
  '/zion-ai-customer-sentiment-tracker',
  '/zion-smart-expense-categorizer',
  '/zion-ai-voice-assistant-pro',
  '/zion-ai-code-reviewer',
  '/zion-ai-social-media-manager',
  '/zion-ai-contract-analyzer',
  '/zion-ai-performance-optimizer',
  '/zion-ai-customer-churn-predictor',
  '/zion-ai-supply-chain-optimizer',
  '/zion-ai-financial-forecaster',
  '/zion-ai-content-moderator',
  '/zion-ai-translator-pro',
  '/zion-ai-data-cleaner',
  '/zion-ai-task-scheduler',
  '/zion-ai-customer-support-pro',
  // 5G Solutions
  '/5g-implementation',
  '/5g-edge-computing',
  '/5g-iot-solutions',
  '/5g-smart-city-solutions',
  '/5g-private-networks',
  '/5g-data-analytics',
  '/5g-mobile-applications',
  '/5g-network-infrastructure',
  // New AI Services
  '/ai-voice-cloning-studio',
  '/ai-quantum-financial-oracle',
  '/ai-space-mission-optimizer',
  // New IT Services
  '/quantum-computing-solutions',
  // New Micro SAAS Services
  '/zion-ai-neural-interface'
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${route}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += '    <changefreq>weekly</changefreq>\n';
    sitemap += '    <priority>0.8</priority>\n';
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

// Write sitemap to public directory
const writeSitemap = () => {
  try {
    const sitemap = generateSitemap();
    const publicDir = path.join(__dirname, '..', 'public');
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    
    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
    console.log(`📊 Total URLs: ${routes.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /contact
Allow: /services
Allow: /ai-services
Allow: /micro-saas
Allow: /5g-solutions
Allow: /blog
`;

  try {
    const publicDir = path.join(__dirname, '..', 'public');
    const robotsPath = path.join(publicDir, 'robots.txt');
    fs.writeFileSync(robotsPath, robotsTxt, 'utf8');
    console.log('✅ Robots.txt generated successfully at:', robotsPath);
  } catch (error) {
    console.error('❌ Error generating robots.txt:', error.message);
  }
};

// Main execution
console.log('🚀 Generating sitemap and robots.txt...');
writeSitemap();
generateRobotsTxt();
console.log('✨ SEO files generation completed!');
