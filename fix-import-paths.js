const fs = require('fs');
const path = require('path');

// Function to get the correct Footer import path based on directory depth
function getFooterImportPath(filePath) {
  const relativePath = path.relative(path.dirname(filePath), path.join(__dirname, 'app', 'components', 'Footer'));
  return relativePath.replace(/\\/g, '/'); // Normalize path separators
}

// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file imports Footer
    if (content.includes("import Footer from '../components/Footer'")) {
      const correctPath = getFooterImportPath(filePath);
      content = content.replace(
        "import Footer from '../components/Footer'",
        `import Footer from '${correctPath}'`
      );
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed import path in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
  return false;
}

// Function to recursively find and fix all page.tsx files
function fixAllPages(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', '.next', 'components', 'api'].includes(file)) {
        fixedCount += fixAllPages(filePath);
      }
    } else if (file === 'page.tsx') {
      if (fixPageFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix Footer import paths...');
const fixedCount = fixAllPages(appDir);
console.log(`Fixed ${fixedCount} files.`);