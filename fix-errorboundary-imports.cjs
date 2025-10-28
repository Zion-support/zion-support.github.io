const fs = require('fs');
const path = require('path');

// Find all .tsx files in the app directory that use ErrorBoundary but don't import it
const appDir = './app';
const files = [];

function findTsxFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findTsxFiles(fullPath);
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
}

findTsxFiles(appDir);

let fixedCount = 0;

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check if file uses ErrorBoundary but doesn't import it
    if (content.includes('ErrorBoundary') && !content.includes('import { ErrorBoundary }') && !content.includes('import ErrorBoundary')) {
      // Calculate relative path to ErrorBoundary
      const fileDir = path.dirname(file);
      const relativePath = path.relative(fileDir, './app/components/ErrorBoundary');
      const importPath = relativePath.startsWith('.') ? relativePath : './' + relativePath;
      
      // Add import at the top
      const lines = content.split('\n');
      let insertIndex = 0;
      
      // Find where to insert the import (after existing imports or at the beginning)
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ') || lines[i].startsWith("import ")) {
          insertIndex = i + 1;
        } else if (lines[i].trim() === '' && insertIndex > 0) {
          insertIndex = i;
          break;
        }
      }
      
      // Insert the import
      lines.splice(insertIndex, 0, `import { ErrorBoundary } from '${importPath}';`);
      
      const newContent = lines.join('\n');
      fs.writeFileSync(file, newContent);
      fixedCount++;
      console.log(`Fixed: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);
