const fs = require('fs');
const path = require('path');

const filesToFix = [
  'app/pages/AboutPage.tsx',
  'app/pages/AIServicesPage.tsx',
  'app/pages/CareersPage.tsx',
  'app/pages/CaseStudiesPage.tsx',
  'app/pages/CloudInfrastructurePage.tsx',
  'app/pages/ContactPage.tsx',
  'app/pages/DigitalTransformationPage.tsx',
  'app/pages/DocumentationPage.tsx',
  'app/pages/FiveGSolutionsPage.tsx',
  'app/pages/ITServicesPage.tsx',
  'app/pages/ServicesPage.tsx',
  'app/pages/TeamPage.tsx',
  'app/error.tsx',
  'app/loading.tsx',
  'app/main.tsx',
  'app/not-found.tsx',
  'app/global-error.tsx',
  'app/page-backup.tsx',
  'app/page-optimized.tsx',
  'app/service-template.tsx',
  'app/sitemap-page.tsx',
  'app/types/next.d.ts',
  'app/micro-saas-services/microSaasServices.tsx',
  'app/micro-saas-services/services.tsx',
  'app/data/servicesData.ts',
  'app/config/errorBoundaryConfig.tsx',
  'app/utils/errorHandler.tsx',
  'app/utils/image.tsx',
  'app/utils/link.tsx',
  'app/utils/navigation.tsx',
  'app/utils/testRunner.tsx'
];

function fixMissingBraces(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file is missing closing brace
    if (content.includes('return null;') && !content.includes('}')) {
      const newContent = content.trim() + '\n}';
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed missing brace: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixMissingBraces);
console.log('Missing braces fixed!');
