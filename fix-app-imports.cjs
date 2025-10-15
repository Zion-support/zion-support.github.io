const fs = require('fs');
const path = require('path');

// Read the App.tsx file
const appTsxPath = path.join(process.cwd(), 'App.tsx');
let content = fs.readFileSync(appTsxPath, 'utf8');

// Define the correct import mappings
const importMappings = {
  'AboutPage': './app/about/page',
  'ContactPage': './app/contact/page',
  'ServicesPage': './app/services/page',
  'BlogPage': './app/blog/page',
  'DemoPage': './app/demo/page',
  'SupportPage': './app/support/page',
  'PrivacyPage': './app/privacy/page',
  'TermsPage': './app/terms/page',
  'PricingPage': './app/pricing/page',
  'SolutionsPage': './app/solutions/page',
  'AIServicesPage': './app/ai-services/page',
  'ITServicesPage': './app/it-services/page',
  'CloudInfrastructurePage': './app/cloud-infrastructure/page',
  'DigitalTransformationPage': './app/digital-transformation/page',
  'CaseStudiesPage': './app/case-studies/page',
  'CareersPage': './app/careers/page',
  'CybersecurityPage': './app/cybersecurity/page',
  'CloudSolutionsPage': './app/cloud-services/page',
  'MicroSaaSPage': './app/micro-saas-solutions/page',
  'FiveGSolutionsPage': './app/5g-solutions/page',
  'TeamPage': './app/team/page',
  'DocumentationPage': './app/docs/page'
};

// Fix each import
Object.entries(importMappings).forEach(([componentName, correctPath]) => {
  const oldImportPattern = new RegExp(`import ${componentName} from '\\./app/pages/${componentName}';`, 'g');
  const newImport = `import ${componentName} from '${correctPath}';`;
  
  if (content.includes(`import ${componentName} from './app/pages/${componentName}';`)) {
    content = content.replace(oldImportPattern, newImport);
    console.log(`Fixed import for ${componentName}`);
  }
});

// Write the updated content back
fs.writeFileSync(appTsxPath, content);
console.log('All imports have been fixed!');
