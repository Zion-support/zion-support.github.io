const fs = require('fs');
const path = require('path');

// Function to fix Footer import paths based on directory depth
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Calculate the depth of the file relative to app directory
    const relativePath = path.relative(path.join(__dirname, 'app'), filePath);
    const depth = relativePath.split(path.sep).length - 1; // -1 for the page.tsx file itself
    
    // Generate the correct import path based on depth
    let correctPath = '';
    for (let i = 0; i < depth; i++) {
      correctPath += '../';
    }
    correctPath += 'components/Footer';
    
    // Fix Footer import path
    if (content.includes("import Footer from '../components/Footer'")) {
      content = content.replace("import Footer from '../components/Footer'", `import Footer from '${correctPath}'`);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath} (depth: ${depth}, path: ${correctPath})`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all page.tsx files
function fixAllPages(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-page directories
      if (!['node_modules', '.next', '.git', 'components', 'utils', 'api'].includes(file)) {
        fixedCount += fixAllPages(filePath);
      }
    } else if (file === 'page.tsx') {
      if (fixPageFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Main execution
console.log('Starting nested Footer import fixes...');
const appDir = path.join(__dirname, 'app');
const fixedCount = fixAllPages(appDir);
console.log(`Fixed ${fixedCount} files`);