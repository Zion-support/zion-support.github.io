const fs = require('fs');
const path = require('path');

// Function to fix unused ErrorBoundary imports in a file
function fixUnusedErrorBoundaryImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if the file imports ErrorBoundary but doesn't use it
    if (content.includes('import ErrorBoundary') && !content.includes('<ErrorBoundary')) {
      // Remove the ErrorBoundary import line
      const lines = content.split('\n');
      const newLines = lines.filter(line => !line.includes('import ErrorBoundary'));
      
      if (newLines.length !== lines.length) {
        content = newLines.join('\n');
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed unused ErrorBoundary import in: ${filePath}`);
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
  if (fixUnusedErrorBoundaryImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed unused ErrorBoundary imports in ${fixedCount} files`);