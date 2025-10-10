const fs = require('fs');
const path = require('path');

// Extract service links from navigation
const navigationFile = '/workspace/app/components/Navigation.tsx';

function extractServiceLinks() {
  const content = fs.readFileSync(navigationFile, 'utf8');
  
  // Extract AI services
  const aiServicesMatch = content.match(/const aiServices = \[([\s\S]*?)\];/);
  const aiServices = [];
  if (aiServicesMatch) {
    const aiServicesContent = aiServicesMatch[1];
    const hrefRegex = /href: '([^']+)'/g;
    let match;
    while ((match = hrefRegex.exec(aiServicesContent)) !== null) {
      aiServices.push(match[1]);
    }
  }
  
  // Extract IT services
  const itServicesMatch = content.match(/const itServices = \[([\s\S]*?)\];/);
  const itServices = [];
  if (itServicesMatch) {
    const itServicesContent = itServicesMatch[1];
    const hrefRegex = /href: '([^']+)'/g;
    let match;
    while ((match = hrefRegex.exec(itServicesContent)) !== null) {
      itServices.push(match[1]);
    }
  }
  
  // Extract Micro SAAS services
  const microSaasMatch = content.match(/const microSaasServices = \[([\s\S]*?)\];/);
  const microSaasServices = [];
  if (microSaasMatch) {
    const microSaasContent = microSaasMatch[1];
    const hrefRegex = /href: '([^']+)'/g;
    let match;
    while ((match = hrefRegex.exec(microSaasContent)) !== null) {
      microSaasServices.push(match[1]);
    }
  }
  
  // Extract Emerging Tech services
  const emergingTechMatch = content.match(/const emergingTech = \[([\s\S]*?)\];/);
  const emergingTech = [];
  if (emergingTechMatch) {
    const emergingTechContent = emergingTechMatch[1];
    const hrefRegex = /href: '([^']+)'/g;
    let match;
    while ((match = hrefRegex.exec(emergingTechContent)) !== null) {
      emergingTech.push(match[1]);
    }
  }
  
  return {
    aiServices,
    itServices,
    microSaasServices,
    emergingTech
  };
}

function checkPageExists(link) {
  if (link === '/') {
    return fs.existsSync('/workspace/app/page.tsx');
  }
  
  const pagePath = `/workspace/app${link}/page.tsx`;
  return fs.existsSync(pagePath);
}

function main() {
  console.log('Checking service pages...\n');
  
  const services = extractServiceLinks();
  
  const allServiceLinks = [
    ...services.aiServices,
    ...services.itServices,
    ...services.microSaasServices,
    ...services.emergingTech
  ];
  
  const missingPages = [];
  const existingPages = [];
  
  allServiceLinks.forEach(link => {
    if (checkPageExists(link)) {
      existingPages.push(link);
    } else {
      missingPages.push(link);
    }
  });
  
  console.log(`Total service links found: ${allServiceLinks.length}`);
  console.log(`Existing pages: ${existingPages.length}`);
  console.log(`Missing pages: ${missingPages.length}\n`);
  
  if (missingPages.length > 0) {
    console.log('Missing service pages:');
    missingPages.forEach(page => {
      console.log(`  - ${page}`);
    });
  }
  
  console.log('\nService categories:');
  console.log(`AI Services: ${services.aiServices.length} links`);
  console.log(`IT Services: ${services.itServices.length} links`);
  console.log(`Micro SAAS: ${services.microSaasServices.length} links`);
  console.log(`Emerging Tech: ${services.emergingTech.length} links`);
}

main();