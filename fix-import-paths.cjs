const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: '/workspace' });

console.log(`Found ${files.length} files to process`);

let fixedCount = 0;

files.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Fix Navigation import paths
    if (content.includes("import Navigation from '../components/Navigation'")) {
      content = content.replace(/import Navigation from '\.\.\/components\/Navigation'/g, "import Navigation from '@/components/Navigation'");
      modified = true;
    }
    
    // Fix Footer import paths
    if (content.includes("import Footer from '../components/Footer'")) {
      content = content.replace(/import Footer from '\.\.\/components\/Footer'/g, "import Footer from '@/components/Footer'");
      modified = true;
    }
    
    // Fix ErrorBoundary import paths
    if (content.includes("import { ErrorBoundary } from '../components/ErrorBoundary'")) {
      content = content.replace(/import { ErrorBoundary } from '\.\.\/components\/ErrorBoundary'/g, "import { ErrorBoundary } from '@/components/ErrorBoundary'");
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);