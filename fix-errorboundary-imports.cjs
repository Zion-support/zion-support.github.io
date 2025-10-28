const fs = require('fs');
const path = require('path');

// List of files that need ErrorBoundary import fixes
const filesToFix = [
  'app/page.tsx',
  'app/about/page.tsx',
  'app/offline/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/5g-data-analytics/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx'
];

function fixErrorBoundaryImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the import statement
    content = content.replace(
      /import \{ ErrorBoundary \} from ['"][^'"]*ErrorBoundary['"];?/g,
      'import ErrorBoundary from \'../components/ErrorBoundary\';'
    );
    
    // Fix relative paths based on file location
    if (filePath.includes('micro-saas-services/')) {
      content = content.replace(
        /import ErrorBoundary from ['"][^'"]*ErrorBoundary['"];?/g,
        'import ErrorBoundary from \'../../components/ErrorBoundary\';'
      );
    } else if (filePath === 'app/page.tsx') {
      content = content.replace(
        /import ErrorBoundary from ['"][^'"]*ErrorBoundary['"];?/g,
        'import ErrorBoundary from \'./components/ErrorBoundary\';'
      );
    } else {
      content = content.replace(
        /import ErrorBoundary from ['"][^'"]*ErrorBoundary['"];?/g,
        'import ErrorBoundary from \'../components/ErrorBoundary\';'
      );
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ErrorBoundary import: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixErrorBoundaryImport);

console.log('ErrorBoundary import fixing completed!');