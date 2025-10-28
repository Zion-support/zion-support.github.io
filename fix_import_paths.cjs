const fs = require('fs');
const path = require('path');

// Files that need import path fixes
const filesToFix = [
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx'
];

function fixImportPaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the import paths based on the file location
    if (filePath.includes('it-services/')) {
      content = content.replace(
        "import ErrorBoundary from '../components/ErrorBoundary';",
        "import ErrorBoundary from '../../components/ErrorBoundary';"
      );
      content = content.replace(
        "import Navigation from '../components/Navigation';",
        "import Navigation from '../../components/Navigation';"
      );
      content = content.replace(
        "import Footer from '../components/Footer';",
        "import Footer from '../../components/Footer';"
      );
    } else if (filePath.includes('micro-saas-services/')) {
      content = content.replace(
        "import ErrorBoundary from '../components/ErrorBoundary';",
        "import ErrorBoundary from '../../components/ErrorBoundary';"
      );
      content = content.replace(
        "import Navigation from '../components/Navigation';",
        "import Navigation from '../../components/Navigation';"
      );
      content = content.replace(
        "import Footer from '../components/Footer';",
        "import Footer from '../../components/Footer';"
      );
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed import paths in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixImportPaths(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Import path fixing completed!');