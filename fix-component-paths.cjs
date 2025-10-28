const fs = require('fs');
const path = require('path');

// Function to fix component import paths
function fixComponentPaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Calculate the correct relative path to components
    const relativePath = path.relative(path.dirname(filePath), path.join(__dirname, 'app', 'components'));
    const correctPath = relativePath.replace(/\\/g, '/') || '.';
    
    // Fix Navigation imports
    if (content.includes("import Navigation from '../components/Navigation'")) {
      content = content.replace(
        "import Navigation from '../components/Navigation'",
        `import Navigation from '${correctPath}/Navigation'`
      );
      modified = true;
    }
    
    if (content.includes("import Navigation from './components/Navigation'")) {
      content = content.replace(
        "import Navigation from './components/Navigation'",
        `import Navigation from '${correctPath}/Navigation'`
      );
      modified = true;
    }
    
    // Fix Footer imports
    if (content.includes("import Footer from '../components/Footer'")) {
      content = content.replace(
        "import Footer from '../components/Footer'",
        `import Footer from '${correctPath}/Footer'`
      );
      modified = true;
    }
    
    if (content.includes("import Footer from './components/Footer'")) {
      content = content.replace(
        "import Footer from './components/Footer'",
        `import Footer from '${correctPath}/Footer'`
      );
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed component paths in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process...`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  if (fixComponentPaths(file)) {
    fixedCount++;
  }
});

console.log(`Fixed component paths in ${fixedCount} files.`);