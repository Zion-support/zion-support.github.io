const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to remove unused ErrorBoundary imports
function removeUnusedErrorBoundaryImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if ErrorBoundary is imported but not used
    const hasErrorBoundaryImport = content.includes('import ErrorBoundary from');
    const usesErrorBoundary = content.includes('<ErrorBoundary') || content.includes('ErrorBoundary(');
    
    if (hasErrorBoundaryImport && !usesErrorBoundary) {
      // Remove the ErrorBoundary import line
      content = content.replace(/import ErrorBoundary from ["'][^"']*["'];\s*\n?/g, '');
      modified = true;
      console.log(`Removed unused ErrorBoundary import from: ${filePath}`);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting cleanup of unused ErrorBoundary imports...');

const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

let totalModified = 0;

for (const file of tsxFiles) {
  if (removeUnusedErrorBoundaryImports(file)) {
    totalModified++;
  }
}

console.log(`\nCleanup complete! Modified ${totalModified} files.`);