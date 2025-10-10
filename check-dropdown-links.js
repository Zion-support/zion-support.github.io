import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// AI Services from navigation
const aiServices = [
  '/ai-services',
  '/ai-marketing',
  '/ai-customer-support',
  '/ai-data-analytics',
  '/ai-content-generation',
  '/ai-healthcare',
  '/ai-fintech',
  '/ai-ecommerce-solutions',
  '/ai-cybersecurity',
  '/ai-mobile-app-development',
  '/ai-sales-automation',
  '/ai-workflow-automation',
  '/ai-data-visualization',
  '/ai-lead-generation',
  '/ai-document-processing',
  '/ai-automation',
  '/ai-voice-assistant',
  '/ai-predictive-maintenance',
  '/ai-supply-chain',
  '/ai-quality-control',
  '/ai-energy-management',
  '/ai-legal-analysis',
  '/ai-real-estate',
  '/ai-hr-assistant',
  '/ai-insurance',
  '/ai-education',
  '/ai-transportation',
  '/ai-environmental',
  '/ai-retail',
  '/ai-sports',
  '/ai-mental-health'
];

// IT Services from navigation
const itServices = [
  '/cloud-services',
  '/cloud-migration',
  '/devops',
  '/database',
  '/cybersecurity',
  '/security-monitoring',
  '/penetration-testing',
  '/it-infrastructure',
  '/managed-it',
  '/it-consulting',
  '/data-analytics',
  '/mobile-development',
  '/web-development',
  '/process-automation',
  '/cloud-infrastructure',
  '/network-security',
  '/data-backup',
  '/it-asset-management',
  '/website-hosting',
  '/mobile-device-management',
  '/compliance-services',
  '/it-performance-monitoring',
  '/it-training',
  '/it-project-management',
  '/vulnerability-assessment',
  '/hybrid-cloud',
  '/data-migration',
  '/api-development',
  '/it-governance'
];

// Micro SaaS Services from navigation
const microSaasServices = [
  '/micro-saas',
  '/ai-analytics-dashboard',
  '/ai-crm',
  '/ai-content-studio',
  '/ai-chatbot-builder',
  '/ai-email-marketing',
  '/ai-mobile-app-builder',
  '/ai-seo-optimizer',
  '/ai-invoice-generator',
  '/ai-writing-assistant',
  '/smart-analytics',
  '/ai-scheduler',
  '/expense-tracker',
  '/task-manager-pro',
  '/crm-lite',
  '/email-optimizer',
  '/social-media-manager',
  '/ai-design-studio',
  '/landing-page-builder',
  '/seo-optimizer',
  '/ad-campaign-manager',
  '/code-assistant',
  '/api-builder',
  '/bug-tracker-pro',
  '/doc-generator',
  '/ai-recruitment-assistant',
  '/medical-records-manager',
  '/ai-accounting-assistant',
  '/property-management-ai',
  '/legal-document-manager',
  '/online-learning-platform',
  '/supply-chain-optimizer'
];

// Emerging Technologies
const emergingTech = [
  '/quantum-computing',
  '/robotics',
  '/iot-edge-computing',
  '/blockchain-web3',
  '/business-intelligence',
  '/autonomous-systems',
  '/5g-implementation',
  '/ai-3d-generation',
  '/ai-holographic-workspace'
];

// Check if a page exists
function pageExists(href) {
  if (href === '/') {
    return fs.existsSync(path.join(__dirname, 'app', 'page.tsx'));
  }
  
  const pagePath = path.join(__dirname, 'app', href, 'page.tsx');
  return fs.existsSync(pagePath);
}

// Check all links
function checkAllLinks() {
  const allLinks = [
    ...aiServices,
    ...itServices,
    ...microSaasServices,
    ...emergingTech
  ];
  
  console.log('Checking all dropdown menu links...\n');
  
  const missingPages = [];
  const existingPages = [];
  
  allLinks.forEach(link => {
    if (pageExists(link)) {
      existingPages.push(link);
    } else {
      missingPages.push(link);
    }
  });
  
  console.log(`Total links checked: ${allLinks.length}`);
  console.log(`Existing pages: ${existingPages.length}`);
  console.log(`Missing pages: ${missingPages.length}\n`);
  
  if (missingPages.length > 0) {
    console.log('Missing pages:');
    missingPages.forEach(page => console.log(`  ❌ ${page}`));
  } else {
    console.log('✅ All pages exist!');
  }
  
  // Group by category
  console.log('\n--- AI Services ---');
  aiServices.forEach(link => {
    const status = pageExists(link) ? '✅' : '❌';
    console.log(`${status} ${link}`);
  });
  
  console.log('\n--- IT Services ---');
  itServices.forEach(link => {
    const status = pageExists(link) ? '✅' : '❌';
    console.log(`${status} ${link}`);
  });
  
  console.log('\n--- Micro SaaS Services ---');
  microSaasServices.forEach(link => {
    const status = pageExists(link) ? '✅' : '❌';
    console.log(`${status} ${link}`);
  });
  
  console.log('\n--- Emerging Technologies ---');
  emergingTech.forEach(link => {
    const status = pageExists(link) ? '✅' : '❌';
    console.log(`${status} ${link}`);
  });
}

checkAllLinks();