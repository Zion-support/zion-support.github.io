const fs = require('fs');
const path = require('path');

// Read the App.tsx file to extract all routes
const appContent = fs.readFileSync('/workspace/src/App.tsx', 'utf8');

// Extract all page components from the routes using a simpler regex
const pageMatches = appContent.match(/element=\{<(\w+Page) \/>\}/g);
const pageComponents = pageMatches.map(match => {
  const componentMatch = match.match(/element=\{<(\w+Page) \/>\}/);
  return componentMatch ? componentMatch[1] : null;
}).filter(Boolean);

console.log('Pages referenced in routes:');
pageComponents.forEach(page => console.log(`- ${page}`));

// Check which pages exist in the src directory
const srcDir = '/workspace/src';
const existingPages = [];

function findPageFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findPageFiles(filePath);
    } else if (file === 'page.tsx') {
      const relativePath = path.relative(srcDir, filePath);
      const pageName = path.basename(path.dirname(filePath));
      existingPages.push({
        name: pageName,
        path: relativePath,
        fullPath: filePath
      });
    }
  }
}

findPageFiles(srcDir);

console.log('\nExisting page files:');
existingPages.forEach(page => console.log(`- ${page.name} (${page.path})`));

// Find missing pages
const missingPages = [];
const existingPageNames = existingPages.map(p => p.name);

// Map component names to expected page names
const componentToPageMap = {
  'HomePage': 'page',
  'AboutPage': 'about',
  'ContactPage': 'contact',
  'ServicesPage': 'services',
  'BlogPage': 'blog',
  'CaseStudiesPage': 'case-studies',
  'AIAnalyticsDashboardPage': 'ai-analytics-dashboard',
  'AIChatbotBuilderPage': 'ai-chatbot-builder',
  'AIContentGenerationPage': 'ai-content-generation',
  'AICRMPage': 'ai-crm',
  'AICustomerSupportPage': 'ai-customer-support',
  'AICybersecurityPage': 'ai-cybersecurity',
  'AIDataAnalyticsPage': 'ai-data-analytics',
  'AIDataVisualizationPage': 'ai-data-visualization',
  'AIDocumentProcessingPage': 'ai-document-processing',
  'AIEcommerceSolutionsPage': 'ai-ecommerce-solutions',
  'AIEmailAssistantPage': 'ai-email-assistant',
  'AIFintechPage': 'ai-fintech',
  'AIHealthcarePage': 'ai-healthcare',
  'AILeadGenerationPage': 'ai-lead-generation',
  'AIMarketingPage': 'ai-marketing',
  'AIMobileAppDevelopmentPage': 'ai-mobile-app-development',
  'AISalesAutomationPage': 'ai-sales-automation',
  'AISchedulerPage': 'ai-scheduler',
  'AIServicesPage': 'ai-services',
  'AIWorkflowAutomationPage': 'ai-workflow-automation',
  'AIWritingAssistantPage': 'ai-writing-assistant',
  'AIProjectManagerPage': 'ai-project-manager',
  'AISocialMediaManagerPage': 'ai-social-media-manager',
  'AIEmailMarketingPage': 'ai-email-marketing',
  'AICustomerSupportBotPage': 'ai-customer-support-bot',
  'AISEOOptimizerPage': 'ai-seo-optimizer',
  'AIFinancialAnalyzerPage': 'ai-financial-analyzer',
  'MachineLearningPage': 'machine-learning',
  'NLPPage': 'nlp',
  'ComputerVisionPage': 'computer-vision',
  'AIAutomationPage': 'ai-automation',
  'QuantumAIPage': 'quantum-ai',
  'DatabaseServicesPage': 'database-services',
  'NetworkInfrastructurePage': 'network-infrastructure',
  'ITSupportPage': 'it-support',
  'AnalyticsToolsPage': 'analytics-tools',
  'APIDocsPage': 'api-docs',
  'APIPage': 'api',
  'AutonomousSystemsPage': 'autonomous-systems',
  'BlockchainPage': 'blockchain',
  'BlockchainWeb3Page': 'blockchain-web3',
  'BusinessAppsPage': 'business-apps',
  'BusinessIntelligencePage': 'business-intelligence',
  'CareersPage': 'careers',
  'CloudServicesPage': 'cloud-services',
  'CompliancePage': 'compliance',
  'ConsultationPage': 'consultation',
  'CookiesPage': 'cookies',
  'CybersecurityPage': 'cybersecurity',
  'DatabasePage': 'database',
  'DemoPage': 'demo',
  'DeveloperToolsPage': 'developer-tools',
  'DevOpsPage': 'devops',
  'DocsPage': 'docs',
  'EnterprisePage': 'enterprise',
  'ExpenseTrackerPage': 'expense-tracker',
  'GDPRPage': 'gdpr',
  'IoTEdgeComputingPage': 'iot-edge-computing',
  'IoTEdgePage': 'iot-edge',
  'ITInfrastructurePage': 'it-infrastructure',
  'ITServicesPage': 'it-services',
  'MarketingToolsPage': 'marketing-tools',
  'MicroSAASPage': 'micro-saas',
  'NetworkingPage': 'networking',
  'NewsPage': 'news',
  'OfflinePage': 'offline',
  'PricingPage': 'pricing',
  'PrivacyPage': 'privacy',
  'ProductivityPage': 'productivity',
  'QuantumComputingPage': 'quantum-computing',
  'RoboticsPage': 'robotics',
  'SecurityPage': 'security',
  'ServicesAdvertisingPage': 'services-advertising',
  'SitemapPage': 'sitemap',
  'SmartAnalyticsPage': 'smart-analytics',
  'StatusPage': 'status',
  'SupportPage': 'support',
  'SystemStatusPage': 'system-status',
  'TaskManagerProPage': 'task-manager-pro',
  'TeamPage': 'team',
  'TermsPage': 'terms',
  'NotFoundPage': 'not-found'
};

console.log('\nChecking for missing pages...');
for (const component of pageComponents) {
  const expectedPageName = componentToPageMap[component];
  if (expectedPageName && !existingPageNames.includes(expectedPageName)) {
    missingPages.push({
      component,
      expectedPageName,
      route: Object.keys(componentToPageMap).find(key => componentToPageMap[key] === expectedPageName)
    });
  }
}

console.log('\nMissing pages:');
if (missingPages.length === 0) {
  console.log('All pages exist!');
} else {
  missingPages.forEach(page => {
    console.log(`- ${page.component} (expected: ${page.expectedPageName})`);
  });
}

// Check for pages that exist but aren't referenced in routes
console.log('\nPages that exist but might not be referenced in routes:');
const referencedPageNames = Object.values(componentToPageMap);
const orphanedPages = existingPageNames.filter(pageName => 
  !referencedPageNames.includes(pageName) && pageName !== 'page'
);

if (orphanedPages.length === 0) {
  console.log('No orphaned pages found.');
} else {
  orphanedPages.forEach(page => console.log(`- ${page}`));
}