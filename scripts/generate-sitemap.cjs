#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Base URL for the website
const BASE_URL = 'https://ziontechgroup.com';

// Define all the routes and their metadata
const routes = [
  // Main pages
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/ai-solutions', priority: '0.9', changefreq: 'weekly' },
  { path: '/solutions/enterprise', priority: '0.8', changefreq: 'weekly' },
  { path: '/solutions/healthcare', priority: '0.8', changefreq: 'weekly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { path: '/case-studies', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.6', changefreq: 'weekly' },
  { path: '/news', priority: '0.6', changefreq: 'weekly' },
  { path: '/careers', priority: '0.6', changefreq: 'monthly' },
  { path: '/partners', priority: '0.6', changefreq: 'monthly' },
  
  // Service pages
  { path: '/services/ai-autonomous-systems', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/ai-business-intelligence', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/ai-marketing-automation', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/quantum-technology', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/cybersecurity', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/it-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/micro-saas-solutions', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/industry-solutions', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/cloud-devops', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/digital-transformation', priority: '0.8', changefreq: 'weekly' },
  
  // AI Autonomous Services
  { path: '/ai-autonomous-business-manager', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-business-platform', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-code-review', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-creative-director', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-data', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-decision-engine', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-decision-platform', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-devops', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-education-professor', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-healthcare-physician', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-learning-system', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-legal-counsel', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-logistics', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-manufacturing', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-research', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-robotics', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-scientific-researcher', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-security', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-systems-platform', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-testing', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-vehicle-platform', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-vehicle', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-vehicles-platform', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-vehicles', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-venture-capitalist', priority: '0.7', changefreq: 'monthly' },
  
  // AI Content Generation
  { path: '/ai-content-generation-automation', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-content-generation-pro', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-consciousness-evolution', priority: '0.7', changefreq: 'monthly' },
  
  // Enhanced AI Services
  { path: '/ai-business-intelligence-elite-2026', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-business-intelligence-suite-2029', priority: '0.7', changefreq: 'monthly' },
  
  // Innovative Services
  { path: '/ai-workflow-automation', priority: '0.7', changefreq: 'monthly' },
  { path: '/blockchain-enterprise-solutions', priority: '0.7', changefreq: 'monthly' },
  { path: '/iot-data-analytics', priority: '0.7', changefreq: 'monthly' },
  
  // Missing pages that were in the analysis
  { path: '/quantum-neural-network-platform', priority: '0.7', changefreq: 'monthly' },
  { path: '/autonomous-business-operations-platform', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-powered-it-asset-management', priority: '0.7', changefreq: 'monthly' },
  { path: '/soc2-compliance-automation', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-autonomous-research-assistant', priority: '0.7', changefreq: 'monthly' },
  { path: '/5g-enterprise-solutions', priority: '0.7', changefreq: 'monthly' },
  
  // Additional pages
  { path: '/help', priority: '0.6', changefreq: 'monthly' },
  { path: '/new-services', priority: '0.6', changefreq: 'monthly' },
  { path: '/mission', priority: '0.6', changefreq: 'monthly' },
  { path: '/team', priority: '0.6', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { path: '/terms', priority: '0.5', changefreq: 'yearly' },
  { path: '/cookies', priority: '0.5', changefreq: 'yearly' },
  { path: '/faq', priority: '0.6', changefreq: 'monthly' },
  { path: '/events', priority: '0.6', changefreq: 'monthly' },
  { path: '/webinars', priority: '0.6', changefreq: 'monthly' },
  { path: '/white-papers', priority: '0.6', changefreq: 'monthly' },
  { path: '/testimonials', priority: '0.6', changefreq: 'monthly' },
  { path: '/support', priority: '0.6', changefreq: 'monthly' },
  { path: '/docs', priority: '0.6', changefreq: 'monthly' },
  { path: '/marketplace', priority: '0.7', changefreq: 'weekly' },
  { path: '/community', priority: '0.6', changefreq: 'monthly' },
  { path: '/emerging-tech', priority: '0.7', changefreq: 'weekly' },
  { path: '/talent-directory', priority: '0.6', changefreq: 'monthly' },
  { path: '/talents', priority: '0.6', changefreq: 'monthly' },
  { path: '/ai-matcher', priority: '0.7', changefreq: 'weekly' },
  { path: '/services-showcase', priority: '0.7', changefreq: 'weekly' }
];

// Generate sitemap XML
function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  routes.forEach(route => {
    sitemap += `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

// Generate robots.txt
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /services/
Allow: /solutions/
Allow: /about/
Allow: /contact/
Allow: /blog/
Allow: /case-studies/

# Crawl delay (optional)
Crawl-delay: 1
`;
}

// Write files
function writeFiles() {
  const sitemap = generateSitemap();
  const robotsTxt = generateRobotsTxt();
  
  // Ensure public directory exists
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Write sitemap.xml
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Generated sitemap.xml');
  
  // Write robots.txt
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('✅ Generated robots.txt');
  
  // Write sitemap to root as well
  fs.writeFileSync(path.join(__dirname, '../sitemap.xml'), sitemap);
  console.log('✅ Generated sitemap.xml in root directory');
  
  console.log(`\n📊 Sitemap generated with ${routes.length} URLs`);
  console.log(`🌐 Base URL: ${BASE_URL}`);
  console.log(`📅 Generated on: ${new Date().toISOString()}`);
}

// Run the generator
if (require.main === module) {
  try {
    writeFiles();
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

module.exports = { generateSitemap, generateRobotsTxt, routes };
