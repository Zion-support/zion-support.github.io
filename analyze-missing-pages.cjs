const fs = require('fs');
const path = require('path');

// Extract all href links from navigation and footer components
const extractLinksFromFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const hrefMatches = content.match(/href="([^"]+)"/g) || [];
    return hrefMatches.map(match => match.replace('href="', '').replace('"', ''));
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return [];
  }
};

// Check if a page exists
const pageExists = (href) => {
  if (href === '/') return true; // Home page
  if (href.startsWith('http')) return true; // External links
  if (href.startsWith('mailto:') || href.startsWith('tel:')) return true; // Contact links
  
  const pagePath = path.join('/workspace/app', href, 'page.tsx');
  return fs.existsSync(pagePath);
};

// Main analysis
const analyzeMissingPages = () => {
  console.log('🔍 Analyzing missing pages...\n');
  
  const navigationLinks = extractLinksFromFile('/workspace/app/components/Navigation.tsx');
  const footerLinks = extractLinksFromFile('/workspace/app/components/Footer.tsx');
  
  const allLinks = [...new Set([...navigationLinks, ...footerLinks])];
  
  console.log(`📊 Total unique links found: ${allLinks.length}`);
  
  const missingPages = [];
  const existingPages = [];
  
  allLinks.forEach(link => {
    if (pageExists(link)) {
      existingPages.push(link);
    } else {
      missingPages.push(link);
    }
  });
  
  console.log(`✅ Existing pages: ${existingPages.length}`);
  console.log(`❌ Missing pages: ${missingPages.length}\n`);
  
  if (missingPages.length > 0) {
    console.log('🚨 MISSING PAGES:');
    missingPages.forEach(page => {
      console.log(`  - ${page}`);
    });
  }
  
  // Check for AI services specifically
  console.log('\n🤖 AI Services Analysis:');
  const aiServices = [
    '/ai-services', '/ai-marketing', '/ai-customer-support', '/ai-data-analytics',
    '/ai-content-generation', '/ai-healthcare', '/ai-fintech', '/ai-ecommerce-solutions',
    '/ai-cybersecurity', '/ai-mobile-app-development', '/ai-sales-automation',
    '/ai-workflow-automation', '/ai-data-visualization', '/ai-lead-generation',
    '/ai-document-processing', '/ai-automation'
  ];
  
  aiServices.forEach(service => {
    const exists = pageExists(service);
    console.log(`  ${exists ? '✅' : '❌'} ${service}`);
  });
  
  // Check for IT services
  console.log('\n💻 IT Services Analysis:');
  const itServices = [
    '/cloud-services', '/cloud-migration', '/devops', '/database',
    '/cybersecurity', '/security-monitoring', '/penetration-testing',
    '/it-infrastructure', '/managed-it', '/it-consulting', '/data-analytics',
    '/mobile-development', '/web-development', '/process-automation'
  ];
  
  itServices.forEach(service => {
    const exists = pageExists(service);
    console.log(`  ${exists ? '✅' : '❌'} ${service}`);
  });
  
  // Check for Micro SAAS services
  console.log('\n🔧 Micro SAAS Analysis:');
  const microSaasServices = [
    '/micro-saas', '/ai-analytics-dashboard', '/ai-crm', '/security-monitoring-suite',
    '/cloud-infrastructure-manager', '/email-marketing-automation', '/project-management-pro',
    '/ecommerce-analytics-pro', '/ai-recruitment-assistant', '/medical-records-manager',
    '/ai-accounting-assistant', '/property-management-ai', '/legal-document-manager',
    '/online-learning-platform', '/supply-chain-optimizer', '/ai-writing-assistant'
  ];
  
  microSaasServices.forEach(service => {
    const exists = pageExists(service);
    console.log(`  ${exists ? '✅' : '❌'} ${service}`);
  });
  
  // Check for Emerging Tech
  console.log('\n⚡ Emerging Tech Analysis:');
  const emergingTech = [
    '/quantum-computing', '/robotics', '/iot-edge-computing', '/blockchain-web3',
    '/business-intelligence', '/autonomous-systems', '/5g-implementation',
    '/ai-3d-generation', '/ai-holographic-workspace'
  ];
  
  emergingTech.forEach(service => {
    const exists = pageExists(service);
    console.log(`  ${exists ? '✅' : '❌'} ${service}`);
  });
  
  // Check for Company pages
  console.log('\n🏢 Company Pages Analysis:');
  const companyPages = [
    '/team', '/news', '/docs', '/api-docs', '/status', '/privacy', '/terms', '/cookies'
  ];
  
  companyPages.forEach(page => {
    const exists = pageExists(page);
    console.log(`  ${exists ? '✅' : '❌'} ${page}`);
  });
  
  return { missingPages, existingPages };
};

// Run the analysis
const result = analyzeMissingPages();

// Write results to file
const report = {
  timestamp: new Date().toISOString(),
  totalLinks: result.missingPages.length + result.existingPages.length,
  existingPages: result.existingPages.length,
  missingPages: result.missingPages.length,
  missingPagesList: result.missingPages
};

fs.writeFileSync('/workspace/missing-pages-report.json', JSON.stringify(report, null, 2));
console.log('\n📄 Report saved to missing-pages-report.json');