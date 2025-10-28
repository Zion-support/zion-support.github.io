const fs = require('fs');
const path = require('path');

const filesToFix = [
  'app/offline/page.tsx',
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
  'app/about/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix ErrorBoundary import
    content = content.replace(
      /import \{ ErrorBoundary \} from '\.\/components\/ErrorBoundary'/g,
      "import ErrorBoundary from './components/ErrorBoundary'"
    );
    
    // Fix PageComponent references
    content = content.replace(/function Page\(\)/g, 'function PageComponent()');
    content = content.replace(/function pagePage\(\)/g, 'function PageComponent()');
    
    // Remove unused variables
    content = content.replace(/const Page = .*?;/g, '');
    content = content.replace(/const pagePage = .*?;/g, '');
    
    // Clean up extra semicolons and empty lines
    content = content.replace(/;\s*;/g, ';');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

console.log('Fixing import and component issues...');
filesToFix.forEach(fixFile);
console.log('Done!');