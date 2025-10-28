#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix import paths based on file location
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Calculate relative path to components directory
    const relativePath = path.relative(path.dirname(filePath), 'app/components');
    const importPath = relativePath.replace(/\\/g, '/');
    
    // Fix ErrorBoundary imports
    if (content.includes("import { ErrorBoundary } from '../components/ErrorBoundary'")) {
      content = content.replace(
        "import { ErrorBoundary } from '../components/ErrorBoundary'",
        `import { ErrorBoundary } from '${importPath}/ErrorBoundary'`
      );
      modified = true;
    }
    
    // Fix Footer imports
    if (content.includes("import Footer from '../components/Footer'")) {
      content = content.replace(
        "import Footer from '../components/Footer'",
        `import Footer from '${importPath}/Footer'`
      );
      modified = true;
    }
    
    if (content.includes("import Footer from '../../components/Footer'")) {
      content = content.replace(
        "import Footer from '../../components/Footer'",
        `import Footer from '${importPath}/Footer'`
      );
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files`);

let fixedCount = 0;
for (const file of files) {
  if (fixImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);