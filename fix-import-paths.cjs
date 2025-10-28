const fs = require('fs');
const path = require('path');

// Get all page files that need fixing
const getAllPageFiles = () => {
  const files = [];
  
  const walkDir = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  };
  
  walkDir('app');
  return files;
};

const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Calculate relative path to components directory
    const pathParts = filePath.split('/');
    const depth = pathParts.length - 2; // -2 because we have 'app' and 'page.tsx'
    const relativePath = '../'.repeat(depth) + 'components/';
    
    // Fix ErrorBoundary import
    content = content.replace(
      /import { ErrorBoundary } from '@\/components\/ErrorBoundary'/g,
      `import { ErrorBoundary } from '${relativePath}ErrorBoundary'`
    );
    
    // Fix Footer import
    content = content.replace(
      /import Footer from '@\/components\/Footer'/g,
      `import Footer from '${relativePath}Footer'`
    );
    
    // Fix other component imports if any
    content = content.replace(
      /import { Navigation } from '@\/components\/Navigation'/g,
      `import { Navigation } from '${relativePath}Navigation'`
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
};

// Get all page files and fix them
const pageFiles = getAllPageFiles();
console.log(`Found ${pageFiles.length} page files to fix`);

pageFiles.forEach(fixFile);

console.log('Import paths fixed!');