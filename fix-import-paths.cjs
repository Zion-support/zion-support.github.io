const fs = require('fs');
const path = require('path');

// Function to fix import paths in a file
function fixImportPaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if the file has the wrong ErrorBoundary import path
    if (content.includes("import ErrorBoundary from '../components/GlobalErrorBoundary'")) {
      // Determine the correct import path based on file location
      const relativePath = path.relative(path.join(__dirname, 'app'), filePath);
      const depth = relativePath.split(path.sep).length - 1;
      
      let correctPath;
      if (depth > 1) {
        correctPath = '../'.repeat(depth) + 'components/GlobalErrorBoundary';
      } else {
        correctPath = '../components/GlobalErrorBoundary';
      }
      
      // Replace the wrong import path
      content = content.replace(
        "import ErrorBoundary from '../components/GlobalErrorBoundary'",
        `import ErrorBoundary from '${correctPath}'`
      );
      
      modified = true;
    }
    
    if (modified) {
      // Write the file back
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed import path in: ${filePath}`);
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
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixImportPaths(file)) {
    fixedCount++;
  }
}

console.log(`Fixed import paths in ${fixedCount} files`);