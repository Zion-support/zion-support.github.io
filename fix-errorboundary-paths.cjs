const fs = require('fs');
const path = require('path');

const filesToFix = [
  'app/5g-data-analytics/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/about/page.tsx',
  'app/offline/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix ErrorBoundary import path
    content = content.replace(
      /import ErrorBoundary from '\.\/components\/ErrorBoundary'/g,
      "import ErrorBoundary from '../components/ErrorBoundary'"
    );
    
    // For micro-saas-services pages, need to go up two levels
    if (filePath.includes('micro-saas-services')) {
      content = content.replace(
        /import ErrorBoundary from '\.\.\/components\/ErrorBoundary'/g,
        "import ErrorBoundary from '../../components/ErrorBoundary'"
      );
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

console.log('Fixing ErrorBoundary import paths...');
filesToFix.forEach(fixFile);
console.log('Done!');