import fs from 'fs';
import path from 'path';

// Function to extract all service links from navigation
function extractServiceLinks() {
  const navContent = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');
  
  // Extract AI services
  const aiServicesMatch = navContent.match(/const aiServices = \[([\s\S]*?)\];/);
  const aiServices = [];
  
  if (aiServicesMatch) {
    const aiServicesText = aiServicesMatch[1];
    const hrefMatches = aiServicesText.match(/href: '([^']+)'/g);
    if (hrefMatches) {
      hrefMatches.forEach(match => {
        const href = match.match(/href: '([^']+)'/)[1];
        aiServices.push(href);
      });
    }
  }
  
  // Extract IT services
  const itServicesMatch = navContent.match(/const itServices = \[([\s\S]*?)\];/);
  const itServices = [];
  
  if (itServicesMatch) {
    const itServicesText = itServicesMatch[1];
    const hrefMatches = itServicesText.match(/href: '([^']+)'/g);
    if (hrefMatches) {
      hrefMatches.forEach(match => {
        const href = match.match(/href: '([^']+)'/)[1];
        itServices.push(href);
      });
    }
  }
  
  // Extract Micro SAAS services
  const microSaasMatch = navContent.match(/const microSaasServices = \[([\s\S]*?)\];/);
  const microSaasServices = [];
  
  if (microSaasMatch) {
    const microSaasText = microSaasMatch[1];
    const hrefMatches = microSaasText.match(/href: '([^']+)'/g);
    if (hrefMatches) {
      hrefMatches.forEach(match => {
        const href = match.match(/href: '([^']+)'/)[1];
        microSaasServices.push(href);
      });
    }
  }
  
  // Extract Emerging Tech services
  const emergingTechMatch = navContent.match(/const emergingTech = \[([\s\S]*?)\];/);
  const emergingTech = [];
  
  if (emergingTechMatch) {
    const emergingTechText = emergingTechMatch[1];
    const hrefMatches = emergingTechText.match(/href: '([^']+)'/g);
    if (hrefMatches) {
      hrefMatches.forEach(match => {
        const href = match.match(/href: '([^']+)'/)[1];
        emergingTech.push(href);
      });
    }
  }
  
  return {
    aiServices,
    itServices,
    microSaasServices,
    emergingTech
  };
}

// Function to check if a page exists
function pageExists(link) {
  const pagePath = path.join('/workspace/app', link, 'page.tsx');
  return fs.existsSync(pagePath);
}

// Main analysis function
function analyzeNavigationLinks() {
  console.log('🔍 Analyzing Navigation Service Links...\n');
  
  const services = extractServiceLinks();
  
  console.log(`📊 Found ${services.aiServices.length} AI Services`);
  console.log(`📊 Found ${services.itServices.length} IT Services`);
  console.log(`📊 Found ${services.microSaasServices.length} Micro SAAS Services`);
  console.log(`📊 Found ${services.emergingTech.length} Emerging Tech Services\n`);
  
  // Check AI Services
  console.log('🤖 AI SERVICES ANALYSIS:');
  console.log('========================');
  const missingAiServices = [];
  const existingAiServices = [];
  
  services.aiServices.forEach(service => {
    if (pageExists(service)) {
      existingAiServices.push(service);
    } else {
      missingAiServices.push(service);
    }
  });
  
  console.log(`✅ Existing: ${existingAiServices.length}`);
  console.log(`❌ Missing: ${missingAiServices.length}`);
  
  if (missingAiServices.length > 0) {
    console.log('\n❌ MISSING AI SERVICE PAGES:');
    missingAiServices.forEach(service => {
      console.log(`   ${service}`);
    });
  }
  
  // Check IT Services
  console.log('\n💻 IT SERVICES ANALYSIS:');
  console.log('========================');
  const missingItServices = [];
  const existingItServices = [];
  
  services.itServices.forEach(service => {
    if (pageExists(service)) {
      existingItServices.push(service);
    } else {
      missingItServices.push(service);
    }
  });
  
  console.log(`✅ Existing: ${existingItServices.length}`);
  console.log(`❌ Missing: ${missingItServices.length}`);
  
  if (missingItServices.length > 0) {
    console.log('\n❌ MISSING IT SERVICE PAGES:');
    missingItServices.forEach(service => {
      console.log(`   ${service}`);
    });
  }
  
  // Check Micro SAAS Services
  console.log('\n🔧 MICRO SAAS SERVICES ANALYSIS:');
  console.log('================================');
  const missingMicroSaasServices = [];
  const existingMicroSaasServices = [];
  
  services.microSaasServices.forEach(service => {
    if (pageExists(service)) {
      existingMicroSaasServices.push(service);
    } else {
      missingMicroSaasServices.push(service);
    }
  });
  
  console.log(`✅ Existing: ${existingMicroSaasServices.length}`);
  console.log(`❌ Missing: ${missingMicroSaasServices.length}`);
  
  if (missingMicroSaasServices.length > 0) {
    console.log('\n❌ MISSING MICRO SAAS SERVICE PAGES:');
    missingMicroSaasServices.forEach(service => {
      console.log(`   ${service}`);
    });
  }
  
  // Check Emerging Tech Services
  console.log('\n⚡ EMERGING TECH SERVICES ANALYSIS:');
  console.log('===================================');
  const missingEmergingTech = [];
  const existingEmergingTech = [];
  
  services.emergingTech.forEach(service => {
    if (pageExists(service)) {
      existingEmergingTech.push(service);
    } else {
      missingEmergingTech.push(service);
    }
  });
  
  console.log(`✅ Existing: ${existingEmergingTech.length}`);
  console.log(`❌ Missing: ${missingEmergingTech.length}`);
  
  if (missingEmergingTech.length > 0) {
    console.log('\n❌ MISSING EMERGING TECH SERVICE PAGES:');
    missingEmergingTech.forEach(service => {
      console.log(`   ${service}`);
    });
  }
  
  // Summary
  const totalMissing = missingAiServices.length + missingItServices.length + 
                      missingMicroSaasServices.length + missingEmergingTech.length;
  const totalExisting = existingAiServices.length + existingItServices.length + 
                       existingMicroSaasServices.length + existingEmergingTech.length;
  
  console.log('\n📊 OVERALL SUMMARY:');
  console.log('==================');
  console.log(`✅ Total Existing Service Pages: ${totalExisting}`);
  console.log(`❌ Total Missing Service Pages: ${totalMissing}`);
  console.log(`📈 Coverage: ${((totalExisting / (totalExisting + totalMissing)) * 100).toFixed(1)}%`);
  
  // Save detailed report
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalExisting,
      totalMissing,
      coverage: ((totalExisting / (totalExisting + totalMissing)) * 100).toFixed(1) + '%'
    },
    aiServices: {
      total: services.aiServices.length,
      existing: existingAiServices,
      missing: missingAiServices
    },
    itServices: {
      total: services.itServices.length,
      existing: existingItServices,
      missing: missingItServices
    },
    microSaasServices: {
      total: services.microSaasServices.length,
      existing: existingMicroSaasServices,
      missing: missingMicroSaasServices
    },
    emergingTech: {
      total: services.emergingTech.length,
      existing: existingEmergingTech,
      missing: missingEmergingTech
    }
  };
  
  fs.writeFileSync('/workspace/navigation-links-analysis.json', JSON.stringify(report, null, 2));
  console.log('\n💾 Detailed report saved to: navigation-links-analysis.json');
  
  return report;
}

// Run the analysis
analyzeNavigationLinks();