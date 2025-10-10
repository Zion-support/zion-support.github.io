const fs = require('fs');
const path = require('path');

// Extract service links from footer
const footerFile = '/workspace/app/components/Footer.tsx';

function extractServiceLinks() {
  const content = fs.readFileSync(footerFile, 'utf8');
  
  // Extract AI services
  const aiServicesMatch = content.match(/const aiServices = \[([\s\S]*?)\];/);
  const aiServices = [];
  if (aiServicesMatch) {
    const aiServicesContent = aiServicesMatch[1];
    const hrefRegex = /url: '([^']+)'/g;
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
    const hrefRegex = /url: '([^']+)'/g;
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
    const hrefRegex = /url: '([^']+)'/g;
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
    const hrefRegex = /url: '([^']+)'/g;
    let match;
    while ((match = hrefRegex.exec(emergingTechContent)) !== null) {
      emergingTech.push(match[1]);
    }
  }
  
  // Extract company links
  const companyLinksMatch = content.match(/const companyLinks = \[([\s\S]*?)\];/);
  const companyLinks = [];
  if (companyLinksMatch) {
    const companyLinksContent = companyLinksMatch[1];
    const hrefRegex = /url: '([^']+)'/g;
    let match;
    while ((match = hrefRegex.exec(companyLinksContent)) !== null) {
      companyLinks.push(match[1]);
    }
  }
  
  // Extract support links
  const supportLinksMatch = content.match(/const supportLinks = \[([\s\S]*?)\];/);
  const supportLinks = [];
  if (supportLinksMatch) {
    const supportLinksContent = supportLinksMatch[1];
    const hrefRegex = /url: '([^']+)'/g;
    let match;
    while ((match = hrefRegex.exec(supportLinksContent)) !== null) {
      supportLinks.push(match[1]);
    }
  }
  
  return {
    aiServices,
    itServices,
    microSaasServices,
    emergingTech,
    companyLinks,
    supportLinks
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
  console.log('Checking footer service pages...\n');
  
  const services = extractServiceLinks();
  
  const allServiceLinks = [
    ...services.aiServices,
    ...services.itServices,
    ...services.microSaasServices,
    ...services.emergingTech,
    ...services.companyLinks,
    ...services.supportLinks
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
  
  console.log(`Total footer service links found: ${allServiceLinks.length}`);
  console.log(`Existing pages: ${existingPages.length}`);
  console.log(`Missing pages: ${missingPages.length}\n`);
  
  if (missingPages.length > 0) {
    console.log('Missing footer service pages:');
    missingPages.forEach(page => {
      console.log(`  - ${page}`);
    });
  }
  
  console.log('\nFooter service categories:');
  console.log(`AI Services: ${services.aiServices.length} links`);
  console.log(`IT Services: ${services.itServices.length} links`);
  console.log(`Micro SAAS: ${services.microSaasServices.length} links`);
  console.log(`Emerging Tech: ${services.emergingTech.length} links`);
  console.log(`Company Links: ${services.companyLinks.length} links`);
  console.log(`Support Links: ${services.supportLinks.length} links`);
}

main();