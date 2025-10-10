const fs = require('fs');
const path = require('path');

// Find all files with cursor references
const findFilesWithCursor = (dir) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFilesWithCursor(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('cursor/')) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
};

// Fix a single file
const fixFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove cursor references
  content = content.replace(/\s*cursor\/[^\n]*\n?/g, '');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
};

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFilesWithCursor(appDir);

console.log(`Found ${files.length} files with cursor references`);

files.forEach(fixFile);

console.log('All cursor references have been removed!');