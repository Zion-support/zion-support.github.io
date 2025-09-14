const fs = require('fs');
const path = require('path');

// List of invalid lucide-react imports that need to be replaced
const invalidImports = {
  'Tag': 'Award',
  'Cpu': 'Brain',
  'Target': 'Award',
  'Database': 'Shield'
};

// Find all files that have invalid lucide-react imports
const findFilesWithInvalidImports = (dir) => {
  const files = [];
  
  const walkDir = (currentDir) => {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const hasInvalidImport = Object.keys(invalidImports).some(invalid => 
          content.includes(invalid) && content.includes('lucide-react')
        );
        if (hasInvalidImport) {
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
  
  // Replace invalid imports
  Object.entries(invalidImports).forEach(([invalid, replacement]) => {
    // Remove from imports
    content = content.replace(new RegExp(`, ${invalid}`, 'g'), '');
    content = content.replace(new RegExp(`${invalid}, `, 'g'), '');
    content = content.replace(new RegExp(`{ ${invalid} }`, 'g'), `{ ${replacement} }`);
    
    // Replace usage
    content = content.replace(new RegExp(`<${invalid}`, 'g'), `<${replacement}`);
    content = content.replace(new RegExp(`</${invalid}>`, 'g'), `</${replacement}>`);
  });
  
  fs.writeFileSync(filePath, content);
};

// Main execution
const appDir = '/workspace/app';
const filesToFix = findFilesWithInvalidImports(appDir);

console.log(`Found ${filesToFix.length} files to fix`);

filesToFix.forEach(fixFile);

console.log('All files fixed!');