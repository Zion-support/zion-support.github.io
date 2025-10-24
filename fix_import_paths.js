const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix import paths for AI services pages
    if (filePath.includes('/ai-services/')) {
      content = content.replace(
        "import Navigation from '../components/Navigation'",
        "import Navigation from '../../components/Navigation'"
      );
      content = content.replace(
        "import Footer from '../components/Footer'",
        "import Footer from '../../components/Footer'"
      );
    }
    
    // Fix import paths for micro-saas-services pages
    if (filePath.includes('/micro-saas-services/')) {
      content = content.replace(
        "import Navigation from '../components/Navigation'",
        "import Navigation from '../../../components/Navigation'"
      );
      content = content.replace(
        "import Footer from '../components/Footer'",
        "import Footer from '../../../components/Footer'"
      );
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all page files
const files = glob.sync('app/**/page.tsx', { cwd: process.cwd() });

console.log(`Found ${files.length} page files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);