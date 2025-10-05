import fs from 'fs'
import path from 'path'
// Define all routes from App.tsx
const routes = [
  '/',
  '/about',
  '/contact',
  '/blog',
  '/blog/:slug',
  '/faq',
  '/docs',
  '/careers',
  '/privacy',
  '/terms',
  '/cookies',
  '/partners',
  '/pricing',
  '/services',
  '/solutions',
  '/resources',
  '/case-studies',
  '/white-papers',
  '/webinars',
  '/revolutionary-services-2030',
  '/services/enhanced',
  '/services/comprehensive-2030',
  '/services/micro-saas',
  '/services/comprehensive-advertising',
  '/services/showcase-2030',
  '/services/overview',
  '/pricing-guide-2027',
  '/pricing-guide-2025',
  '/pricing-guide-2030',
  '/request-quote',
  '/dashboard',
  '/login',
  '/marketplace',
  '/innovative-micro-saas-services-2025',
  '/innovative-services-showcase-2027',
  '/comprehensive-services-landing-2027',
  '/services/innovative-2025',
  '/schedule-demo',
  '/community',
  '/developers',
  '/demo',
  '/legal',
  '/services/cloud-devops',
  '/services/digital-twin',
  '/services/data-analytics',
  '/services/it-infrastructure',
  '/services/ai-business-intelligence',
  '/services/ai-legal-document-analysis',
  '/services/ai-supply-chain-optimization',
  '/services/ai-healthcare-analytics',
  '/services/ai-financial-trading',
];
// Define page files mapping
const pageFiles = {'/': 'src/pages/Home.jsx',
  '/about': 'src/pages/About.tsx',
  '/contact': 'src/components/EnhancedContact.tsx',
  '/blog': 'src/pages/Blog.tsx',
  '/blog/:slug': 'src/pages/BlogPost.tsx',
  '/faq': 'src/pages/FAQ.tsx',
  '/docs': 'src/pages/Documentation.tsx',
  '/careers': 'src/pages/Careers.tsx',
  '/privacy': 'src/pages/Privacy.tsx',
  '/terms': 'src/pages/Terms.tsx',
  '/cookies': 'src/pages/Cookies.tsx',
  '/partners': 'src/pages/Partners.tsx',
  '/pricing': 'src/pages/Pricing.tsx',
  '/services': 'src/pages/Services.tsx',
  '/solutions': 'src/pages/Solutions.tsx',
  '/resources': 'src/pages/Resources.tsx',
  '/case-studies': 'src/pages/CaseStudies.tsx',
  '/white-papers': 'src/pages/WhitePapers.tsx',
  '/webinars': 'src/pages/Webinars.tsx',
  '/revolutionary-services-2030': 'src/pages/RevolutionaryServices2030.tsx',
  '/services/enhanced': 'src/pages/EnhancedServicesLanding.tsx',
  '/services/comprehensive-2030':
    'src/pages/ComprehensiveServicesLanding2030.tsx',
  '/services/micro-saas': 'src/pages/services/MicroSaaSProducts.tsx',
  '/services/comprehensive-advertising':
    'src/pages/ComprehensiveServicesAdvertising.tsx',
  '/services/showcase-2030': 'src/pages/ComprehensiveServicesShowcase2030.tsx',
  '/services/overview': 'src/pages/InnovativeServicesOverview.tsx',
  '/pricing-guide-2027': 'src/pages/ComprehensivePricingGuide2027.tsx',
  '/pricing-guide-2025': 'src/pages/ComprehensivePricingGuide2025.tsx',
  '/pricing-guide-2030': 'src/pages/ComprehensivePricingGuide2030.tsx',
  '/request-quote': 'src/pages/RequestQuote.tsx',
  '/dashboard': 'src/pages/Dashboard.tsx',
  '/login': 'src/pages/Login.tsx',
  '/marketplace': 'src/pages/Marketplace.tsx',
  '/innovative-micro-saas-services-2025':
    'src/pages/InnovativeMicroSAASServices2025.tsx',
  '/innovative-services-showcase-2027':
    'src/pages/InnovativeServicesShowcase2027.tsx',
  '/comprehensive-services-landing-2027':
    'src/pages/ComprehensiveServicesLanding2027.tsx',
  '/services/innovative-2025': 'src/pages/InnovativeServices2025.tsx',
  '/schedule-demo': 'src/pages/ScheduleDemo.tsx',
  '/community': 'src/pages/Community.tsx',
  '/developers': 'src/pages/Developers.tsx',
  '/demo': 'src/pages/Demo.tsx',
  '/legal': 'src/pages/Legal.tsx',
  '/services/cloud-devops': 'src/pages/services/CloudDevOps.tsx',
  '/services/digital-twin': 'src/pages/services/DigitalTwin.tsx',
  '/services/data-analytics': 'src/pages/services/DataAnalytics.tsx',
  '/services/it-infrastructure': 'src/pages/services/ITInfrastructure.tsx',
  '/services/ai-business-intelligence':
    'src/pages/services/AIBusinessIntelligence.tsx',
  '/services/ai-legal-document-analysis':
    'src/pages/services/ai-legal-document-analysis.tsx',
  '/services/ai-supply-chain-optimization':
    'src/pages/services/ai-supply-chain-optimization.tsx',
  '/services/ai-healthcare-analytics':
    'src/pages/services/ai-healthcare-analytics.tsx',
  '/services/ai-financial-trading':
    'src/pages/services/ai-financial-trading.tsx'}
};
function checkPageExists(filePath) {try {
    return fs.existsSync(filePath)}
  } catch (error) {return false}
  }
}
function analyzeBrokenLinks() {console.log('🔍 Analyzing Zion Tech Group Website Links...\n')}
  const results = {
    total: routes.length,
    working: 0,
    broken: 0,
    missingPages: []}
  };
  routes.forEach(route => {const pageFile = pageFiles[route])
    if (pageFile) {
      const exists = checkPageExists(pageFile);
      if (exists) {
        results.working++}
        console.log(`✅ ${route} -> ${pageFile}`);
      } else {results.broken++}
        results.missingPages.push({ route} expectedFile: pageFile });
        console.log(`❌ ${route} -> ${pageFile} (MISSING)`);
      }
    } else {results.broken++}
      results.missingPages.push({ route} expectedFile: 'Unknown mapping' });
      console.log(`❌ ${route} -> No file mapping defined`);
    }
  });
  console.log('\n📊 Analysis Summary: '),
  console.log(`Total Routes: ${results.total}`);
  console.log(`Working: ${results.working}`);
  console.log(`Broken: ${results.broken}`);
  if (results.missingPages.length > 0) {console.log('\n🚨 Missing Pages: ')}
    results.missingPages.forEach(item => {
      console.log(`- ${item.route} (Expected: ${item.expectedFile})`);
    });
  }
  return results;
}
// Run the analysis
analyzeBrokenLinks();
import fs from 'fs'' import path from 'path' // Define all routes from App.tsx const routes = [' '/',' '/about',' '/contact',' '/blog',' '/blog/:slug',' '/faq',' '/docs',' '/careers',' '/privacy',' '/terms',' '/cookies',' '/partners',' '/pricing',' '/services',' '/solutions',' '/resources',' '/case-studies',' '/white-papers',' '/webinars',' '/revolutionary-services-2030',' '/services/enhanced',' '/services/comprehensive-2030',' '/services/micro-saas',' '/services/comprehensive-advertising',' '/services/showcase-2030',' '/services/overview',' '/pricing-guide-2027',' '/pricing-guide-2025',' '/pricing-guide-2030',' '/request-quote',' '/dashboard',' '/login',' '/marketplace',' '/innovative-micro-saas-services-2025',' '/innovative-services-showcase-2027',' '/comprehensive-services-landing-2027',' '/services/innovative-2025',' '/schedule-demo',' '/community',' '/developers',' '/demo',' '/legal',' '/services/cloud-devops',' '/services/digital-twin',' '/services/data-analytics',' '/services/it-infrastructure',' '/services/ai-business-intelligence',' '/services/ai-legal-document-analysis',' '/services/ai-supply-chain-optimization',' '/services/ai-healthcare-analytics',' '/services/ai-financial-trading' ]; // Define page files mapping const pageFiles = {' '/': 'src/pages/Home.jsx',' '/about': 'src/pages/About.tsx',' '/contact': 'src/components/EnhancedContact.tsx',' '/blog': 'src/pages/Blog.tsx',' '/blog/:slug': 'src/pages/BlogPost.tsx',' '/faq': 'src/pages/FAQ.tsx',' '/docs': 'src/pages/Documentation.tsx',' '/careers': 'src/pages/Careers.tsx',' '/privacy': 'src/pages/Privacy.tsx',' '/terms': 'src/pages/Terms.tsx',' '/cookies': 'src/pages/Cookies.tsx',' '/partners': 'src/pages/Partners.tsx',' '/pricing': 'src/pages/Pricing.tsx',' '/services': 'src/pages/Services.tsx',' '/solutions': 'src/pages/Solutions.tsx',' '/resources': 'src/pages/Resources.tsx',' '/case-studies': 'src/pages/CaseStudies.tsx',' '/white-papers': 'src/pages/WhitePapers.tsx',' '/webinars': 'src/pages/Webinars.tsx',' '/revolutionary-services-2030': 'src/pages/RevolutionaryServices2030.tsx',' '/services/enhanced': 'src/pages/EnhancedServicesLanding.tsx',' '/services/comprehensive-2030': 'src/pages/ComprehensiveServicesLanding2030.tsx',' '/services/micro-saas': 'src/pages/services/MicroSaaSProducts.tsx',' '/services/comprehensive-advertising': 'src/pages/ComprehensiveServicesAdvertising.tsx',' '/services/showcase-2030': 'src/pages/ComprehensiveServicesShowcase2030.tsx',' '/services/overview': 'src/pages/InnovativeServicesOverview.tsx',' '/pricing-guide-2027': 'src/pages/ComprehensivePricingGuide2027.tsx',' '/pricing-guide-2025': 'src/pages/ComprehensivePricingGuide2025.tsx',' '/pricing-guide-2030': 'src/pages/ComprehensivePricingGuide2030.tsx',' '/request-quote': 'src/pages/RequestQuote.tsx',' '/dashboard': 'src/pages/Dashboard.tsx',' '/login': 'src/pages/Login.tsx',' '/marketplace': 'src/pages/Marketplace.tsx',' '/innovative-micro-saas-services-2025': 'src/pages/InnovativeMicroSAASServices2025.tsx',' '/innovative-services-showcase-2027': 'src/pages/InnovativeServicesShowcase2027.tsx',' '/comprehensive-services-landing-2027': 'src/pages/ComprehensiveServicesLanding2027.tsx',' '/services/innovative-2025': 'src/pages/InnovativeServices2025.tsx',' '/schedule-demo': 'src/pages/ScheduleDemo.tsx',' '/community': 'src/pages/Community.tsx',' '/developers': 'src/pages/Developers.tsx',' '/demo': 'src/pages/Demo.tsx',' '/legal': 'src/pages/Legal.tsx',' '/services/cloud-devops': 'src/pages/services/CloudDevOps.tsx',' '/services/digital-twin': 'src/pages/services/DigitalTwin.tsx',' '/services/data-analytics': 'src/pages/services/DataAnalytics.tsx',' '/services/it-infrastructure': 'src/pages/services/ITInfrastructure.tsx',' '/services/ai-business-intelligence': 'src/pages/services/AIBusinessIntelligence.tsx',' '/services/ai-legal-document-analysis': 'src/pages/services/ai-legal-document-analysis.tsx',' '/services/ai-supply-chain-optimization': 'src/pages/services/ai-supply-chain-optimization.tsx',' '/services/ai-healthcare-analytics': 'src/pages/services/ai-healthcare-analytics.tsx'}' '/services/ai-financial-trading': 'src/pages/services/ai-financial-trading.tsx' }; function checkPageExists(filePath) {try { return fs.existsSync(filePath)} } catch (error) {return false} } } function analyzeBrokenLinks() {' console.log('🔍 Analyzing Zion Tech Group Website Links...\n')} const results = { total: routes.length, working: 0, broken: 0} missingPages: [] }; routes.forEach(route => {const pageFile = pageFiles[route]) if (pageFile) { const exists = checkPageExists(pageFile); if (exists) { results.working++} console.log(`✅ ${route} -> ${pageFile}`); } else {results.broken++} results.missingPages.push({ route} expectedFile: pageFile }); console.log(`❌ ${route} -> ${pageFile} (MISSING)`); } } else {results.broken++}' results.missingPages.push({ route} expectedFile: 'Unknown mapping' }); console.log(`❌ ${route} -> No file mapping defined`); } }); ' console.log('\n📊 Analysis Summary: '), console.log(`Total Routes: ${results.total}`); console.log(`Working: ${results.working}`); console.log(`Broken: ${results.broken}`); if (results.missingPages.length > 0) {' console.log('\n🚨 Missing Pages: ')} results.missingPages.forEach(item => { console.log(`- ${item.route} (Expected: ${item.expectedFile})`); }); } return results; } // Run the analysis analyzeBrokenLinks();'