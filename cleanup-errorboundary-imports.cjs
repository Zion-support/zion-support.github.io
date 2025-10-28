const fs = require('fs');
const path = require('path');

function cleanupErrorBoundaryImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const originalContent = content;

    // Check if ErrorBoundary is imported but not used
    if (content.includes("import { ErrorBoundary } from 'react-error-boundary';") || 
        content.includes("import { ErrorBoundary } from '../components/ErrorBoundary';") ||
        content.includes("import { ErrorBoundary } from '@/components/ErrorBoundary';")) {
      // Check if ErrorBoundary is actually used in JSX
      const errorBoundaryUsed = content.includes('<ErrorBoundary') || 
                               content.includes('ErrorBoundary.') ||
                               content.includes('ErrorBoundary(') ||
                               content.includes('ErrorBoundary>');
      
      if (!errorBoundaryUsed) {
        content = content.replace(/import { ErrorBoundary } from 'react-error-boundary';\n?/g, '');
        content = content.replace(/import { ErrorBoundary } from '\.\.\/components\/ErrorBoundary';\n?/g, '');
        content = content.replace(/import { ErrorBoundary } from '@\/components\/ErrorBoundary';\n?/g, '');
        modified = true;
      }
    }

    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned up ErrorBoundary import: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find all .tsx files in the app directory
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let cleanedCount = 0;
for (const file of tsxFiles) {
  if (cleanupErrorBoundaryImports(file)) {
    cleanedCount++;
  }
}

console.log(`Cleaned up ${cleanedCount} files`);