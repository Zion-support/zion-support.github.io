const fs = require('fs');
const path = require('path');

// Define all the routes in your application
const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/ai-services',
  '/micro-saas',
  '/5g-solutions',
  '/blog',
  '/tutorials',
  '/demo',
  '/support',
  '/privacy',
  '/terms',
  
  // AI Services
  '/ai-analytics',
  '/ai-content-generation',
  '/ai-customer-support',
  '/ai-cybersecurity',
  '/ai-data-analytics',
  '/ai-document-processing',
  '/ai-marketing-automation',
  '/ai-predictive-analytics',
  '/ai-voice-assistant',
  '/ai-workflow-automation',
  
  // IT Services
  '/cloud-migration',
  '/devops-services',
  '/it-consulting',
  '/network-security',
  '/software-development',
  '/system-integration',
  '/web-development',
  
  // 5G Solutions
  '/5g-data-analytics',
  '/5g-edge-computing',
  '/5g-implementation',
  '/5g-mobile-applications',
  '/5g-network-infrastructure',
  '/5g-private-networks',
  '/5g-smart-city-solutions',
  '/5g-iot-solutions',
  
  // Micro SAAS Services
  '/zion-ai-video-generator',
  '/zion-ai-invoice-generator',
  '/zion-ai-customer-insights',
  '/zion-ai-voice-assistant-pro',
  '/zion-ai-code-reviewer',
  '/zion-ai-contract-analyzer',
  '/zion-ai-supply-chain-optimizer',
  '/zion-ai-translator-pro',
  '/zion-ai-data-cleaner',
  
  // Additional AI Services
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
  
  // Additional IT Services
  '/cloud-consulting',
  '/data-center-solutions',
  '/disaster-recovery',
  '/it-support',
  '/managed-services',
  '/security-audit',
  '/technology-consulting'
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
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
    
    fs.writeFileSync(sitemapPath, sitemap);
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;
  
  try {
    const publicDir = path.join(__dirname, '..', 'public');
    const robotsPath = path.join(publicDir, 'robots.txt');
    
    fs.writeFileSync(robotsPath, robotsTxt);
    console.log('✅ Robots.txt generated successfully at:', robotsPath);
  } catch (error) {
    console.error('❌ Error generating robots.txt:', error);
  }
};

// Run the generation
writeSitemap();
generateRobotsTxt();