const fs = require('fs');
const path = require('path');

// Function to fix import paths with proper relative paths
function fixFinalImportPaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix import paths to use relative paths starting with ./
    if (content.includes("import Navigation from")) {
      content = content.replace(/import Navigation from '[^']*'/g, "import Navigation from './components/Navigation'");
      modified = true;
    }

    if (content.includes("import Footer from")) {
      content = content.replace(/import Footer from '[^']*'/g, "import Footer from './components/Footer'");
      modified = true;
    }

    // Fix other component import paths
    if (content.includes("import") && content.includes("components/")) {
      content = content.replace(/import (\w+) from '[^']*components\/(\w+)'/g, "import $1 from './components/$2'");
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFinalImportPaths(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);