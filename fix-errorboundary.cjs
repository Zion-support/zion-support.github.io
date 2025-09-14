const fs = require('fs');
const path = require('path');

// Find all page.tsx files that use ErrorBoundary
const findFilesWithErrorBoundary = (dir) => {
  const files = [];
  
  const walkDir = (currentDir) => {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item === 'page.tsx') {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('ErrorBoundary')) {
          files.push(fullPath);
        }
      }
    }
  };
  
  walkDir(dir);
  return files;
};

// Fix a single file
const fixFile = (filePath) => {
  console.log(`Fixing ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove ErrorBoundary import
  content = content.replace(/import ErrorBoundary from ['"][^'"]*ErrorBoundary['"];\n?/g, '');
  
  // Replace <ErrorBoundary> with <div>
  content = content.replace(/<ErrorBoundary>/g, '<div>');
  
  // Replace </ErrorBoundary> with </div>
  content = content.replace(/<\/ErrorBoundary>/g, '</div>');
  
  fs.writeFileSync(filePath, content);
};

// Main execution
const appDir = '/workspace/app';
const filesToFix = findFilesWithErrorBoundary(appDir);

console.log(`Found ${filesToFix.length} files to fix`);

filesToFix.forEach(fixFile);

console.log('All files fixed!');