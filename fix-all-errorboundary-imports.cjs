const fs = require('fs');
const path = require('path');

// Function to fix ErrorBoundary imports in a file
function fixErrorBoundaryImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if the file uses ErrorBoundary but doesn't import it
    if (content.includes('ErrorBoundary') && !content.includes('import ErrorBoundary')) {
      // Determine the correct import path based on file location
      const relativePath = path.relative(path.join(__dirname, 'app'), filePath);
      const depth = relativePath.split(path.sep).length - 1;
      
      let importPath;
      if (depth > 1) {
        importPath = '../'.repeat(depth) + 'components/GlobalErrorBoundary';
      } else if (depth === 1) {
        importPath = '../components/GlobalErrorBoundary';
      } else {
        importPath = './components/GlobalErrorBoundary';
      }
      
      // Add the import statement after the first import
      const lines = content.split('\n');
      let importIndex = -1;
      
      // Find the last import statement
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          importIndex = i;
        }
      }
      
      if (importIndex !== -1) {
        // Add the ErrorBoundary import after the last import
        lines.splice(importIndex + 1, 0, `import ErrorBoundary from '${importPath}';`);
        content = lines.join('\n');
        modified = true;
      }
    }
    
    if (modified) {
      // Write the file back
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed ErrorBoundary import in: ${filePath}`);
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
  if (fixErrorBoundaryImport(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ErrorBoundary imports in ${fixedCount} files`);