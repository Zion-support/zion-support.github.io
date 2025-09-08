#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL for the website
const baseUrl = 'https://ziontechgroup.com';

// Define all routes from the App.tsx routing
const routes = [
  // Core pages
  '/',
  '/about',
  '/contact',
  '/services',
  '/ai-services',
  '/ai-solutions',
  '/it-services',
  '/micro-saas',
  '/solutions',
  '/leadership',
  '/careers',
  '/news',
  '/events',
  '/partners',
  '/help',
  '/support',
  '/pricing',
  '/blog',
  '/docs',
  '/white-papers',
  '/webinars',
  '/training',
  '/research-development',
  '/case-studies',

  // AI Services 2025
  '/services/ai-supply-chain-optimization',
  '/services/ai-cybersecurity-platform',
  '/services/ai-healthcare-platform',
  '/services/ai-quantum-hybrid-platform',
  '/services/ai-autonomous-research-assistant',
  '/services/ai-financial-trading-platform',
  '/services/blockchain-enterprise-solutions',

  // Innovative Micro SAAS Services 2025
  '/services/ai-business-intelligence-dashboard',
  '/services/ai-customer-support-automation',
  '/services/ai-project-management-platform',
  '/services/ai-marketing-automation-platform',
  '/services/ai-workflow-orchestrator',
  '/services/ai-predictive-maintenance',
  '/services/ai-hr-platform',
  '/services/ai-financial-trading-risk-management',

  // Enhanced Innovative Micro SAAS Services 2025
  '/services/ai-customer-success-automation',
  '/services/ai-supply-chain-optimization-enhanced',
  '/services/ai-financial-risk-management-enhanced',

  // Additional AI Services 2025
  '/services/ai-enterprise-intelligence-platform',
  '/services/ai-quantum-neural-network-platform',
  '/services/ai-sales-copilot',
  '/services/ai-compliance-assistant',
  '/services/cloud-finops-optimizer',

  // Innovative Services 2026
  '/services/ai-autonomous-logistics-platform',
  '/services/ai-powered-seo',
  '/services/quantum-edge-computing-solutions',
  '/services/ai-space-technology-platform',

  // New Innovative Micro SAAS Services 2026
  '/services/ai-legal-document-automation-platform',
  '/services/ai-healthcare-analytics-platform',
  '/services/ai-financial-risk-management-platform',
  '/services/ai-supply-chain-optimization-platform',

  // Additional Services 2026
  '/services/ai-carbon-footprint-management-platform',
  '/services/ai-mental-health-support-platform',
  '/services/ai-smart-home-energy-management-platform',
  '/services/ai-powered-customer-churn-predictor',

  // Enterprise and Infrastructure Services
  '/services/ai-enterprise-automation-platform',
  '/services/ai-data-analytics-platform',
  '/services/it-infrastructure-management',
  '/services/micro-saas-solutions-comprehensive',
  '/services/ai-quantum-neural-network-platform',
  '/services/ai-autonomous-business-operations-platform',
  '/services/ai-customer-experience-analytics-platform',
  '/services/quantum-ai-cybersecurity-platform',
  '/services/ai-hr-management-platform',
  '/services/ai-enterprise-resource-planning',
  '/services/ai-autonomous-manufacturing-platform',
  '/services/cloud-devops',
  '/services/cybersecurity',
  '/services/digital-transformation',
  '/services/it-infrastructure',
  '/services/ai-business-intelligence',
  '/services/ai-healthcare-analytics',

  // Solution Routes
  '/solutions/healthcare',
  '/solutions/financial',
  '/solutions/manufacturing',
  '/solutions/government',
  '/solutions/retail',
  '/solutions/quantum-edge-computing',
  '/solutions/ai-autonomous-business',
  '/solutions/blockchain-web3',
  '/solutions/iot-edge-computing',
  '/solutions/space-tech',

  // AI Intelligence Services
  '/services/ai-autonomous-business-intelligence-platform',
  '/services/ai-cybersecurity-threat-intelligence-platform',
  '/services/ai-healthcare-analytics-platform',

  // Showcase Routes
  '/comprehensive-services-showcase-2025',
  '/innovative-ai-services-showcase-2025',
  '/innovative-services-showcase-2025',
  '/comprehensive-pricing-guide-2025',
  '/innovative-services-hub',
  '/innovative-services-showcase-2026',
  '/innovative-services-showcase-2032',
  '/comprehensive-pricing-guide-2032',

  // Legal and Policy Pages
  '/privacy',
  '/terms',
  '/cookies',
  '/accessibility',
  '/security',
  '/compliance',

  // Additional Main Pages
  '/enterprise',
  '/industry-solutions',
  '/cloud-solutions',
  '/emerging-tech',
  '/research',

  // User pages
  '/signup',
  '/login',
  '/get-started',
  '/request-quote',
  '/marketplace'
];

// Generate XML sitemap
function generateXMLSitemap(routes) {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    const priority = getPriority(route);
    const changefreq = getChangeFreq(route);
    
    xml += `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  return xml;
}

// Generate JSON sitemap for easier parsing
function generateJSONSitemap(routes) {
  return {
    baseUrl,
    lastGenerated: new Date().toISOString(),
    totalUrls: routes.length,
    urls: routes.map(route => ({
      url: `${baseUrl}${route}`,
      route,
      priority: getPriority(route),
      changefreq: getChangeFreq(route),
      category: getCategory(route)
    }))
  };
}

// Get priority based on route importance
function getPriority(route) {
  if (route === '/') return '1.0';
  if (route.startsWith('/services/') || route.startsWith('/solutions/')) return '0.9';
  if (['/about', '/contact', '/pricing', '/services', '/solutions'].includes(route)) return '0.8';
  if (route.startsWith('/showcase') || route.includes('showcase')) return '0.7';
  if (['/blog', '/news', '/case-studies'].includes(route)) return '0.6';
  return '0.5';
}

// Get change frequency based on content type
function getChangeFreq(route) {
  if (route === '/') return 'daily';
  if (['/news', '/blog'].includes(route)) return 'weekly';
  if (route.startsWith('/services/') || route.startsWith('/solutions/')) return 'monthly';
  if (route.includes('showcase') || route.includes('pricing')) return 'monthly';
  return 'yearly';
}

// Get category for organization
function getCategory(route) {
  if (route === '/') return 'home';
  if (route.startsWith('/services/')) return 'services';
  if (route.startsWith('/solutions/')) return 'solutions';
  if (['/about', '/leadership', '/careers', '/contact'].includes(route)) return 'company';
  if (['/blog', '/news', '/case-studies', '/white-papers'].includes(route)) return 'content';
  if (['/privacy', '/terms', '/cookies', '/security', '/compliance'].includes(route)) return 'legal';
  if (route.includes('showcase') || route.includes('pricing')) return 'showcase';
  return 'other';
}

// Generate human-readable sitemap
function generateHumanSitemap(routes) {
  const categories = {};
  
  routes.forEach(route => {
    const category = getCategory(route);
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(route);
  });

  let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zion Tech Group - Site Map</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; }
        h2 { color: #34495e; margin-top: 30px; }
        .category { margin-bottom: 30px; }
        .links { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 10px; }
        .link { padding: 8px 12px; background: #ecf0f1; border-radius: 4px; border-left: 4px solid #3498db; }
        .link a { text-decoration: none; color: #2c3e50; }
        .link a:hover { color: #3498db; }
        .stats { background: #e8f5e8; padding: 15px; border-radius: 6px; margin-bottom: 20px; }
        .stats strong { color: #27ae60; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Zion Tech Group - Complete Site Map</h1>
        <div class="stats">
            <strong>Total Pages:</strong> ${routes.length} | 
            <strong>Generated:</strong> ${new Date().toLocaleDateString()} |
            <strong>Base URL:</strong> ${baseUrl}
        </div>`;

  Object.keys(categories).sort().forEach(category => {
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    html += `
        <div class="category">
            <h2>📂 ${categoryName} (${categories[category].length} pages)</h2>
            <div class="links">`;
    
    categories[category].sort().forEach(route => {
      const fullUrl = `${baseUrl}${route}`;
      const displayName = route === '/' ? 'Home' : route.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      html += `
                <div class="link">
                    <a href="${fullUrl}" target="_blank">${displayName}</a>
                    <small style="color: #7f8c8d; display: block; font-size: 11px;">${route}</small>
                </div>`;
    });
    
    html += `
            </div>
        </div>`;
  });

  html += `
    </div>
</body>
</html>`;

  return html;
}

// Main execution
function main() {
  console.log('🚀 Generating comprehensive sitemap for Zion Tech Group...');
  
  // Create output directory
  const outputDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Generate and save XML sitemap
  const xmlSitemap = generateXMLSitemap(routes);
  fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), xmlSitemap);
  console.log('✅ XML sitemap generated: public/sitemap.xml');

  // Generate and save JSON sitemap
  const jsonSitemap = generateJSONSitemap(routes);
  fs.writeFileSync(path.join(outputDir, 'sitemap.json'), JSON.stringify(jsonSitemap, null, 2));
  console.log('✅ JSON sitemap generated: public/sitemap.json');

  // Generate and save human-readable sitemap
  const humanSitemap = generateHumanSitemap(routes);
  fs.writeFileSync(path.join(outputDir, 'sitemap.html'), humanSitemap);
  console.log('✅ Human-readable sitemap generated: public/sitemap.html');

  console.log(`\n📊 Summary:`);
  console.log(`   Total routes: ${routes.length}`);
  console.log(`   Base URL: ${baseUrl}`);
  console.log(`   Files generated in: ${outputDir}`);
  
  // Generate category breakdown
  const categories = {};
  routes.forEach(route => {
    const category = getCategory(route);
    categories[category] = (categories[category] || 0) + 1;
  });
  
  console.log(`\n📂 Category breakdown:`);
  Object.entries(categories).sort().forEach(([category, count]) => {
    console.log(`   ${category}: ${count} pages`);
  });

  console.log('\n🎉 Sitemap generation completed successfully!');
}

// Run the script
main();