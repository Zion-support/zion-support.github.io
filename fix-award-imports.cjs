const fs = require('fs');
const path = require('path');

// Find all files that use Award but don't import it
const findFilesWithAwardUsage = (dir) => {
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
        if (content.includes('<Award') && !content.includes('Award') && content.includes('lucide-react')) {
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
  
  // Add Award to lucide-react imports
  if (content.includes('from \'lucide-react\'')) {
    content = content.replace(/from 'lucide-react'/, ', Award from \'lucide-react\'');
    content = content.replace(/from "lucide-react"/, ', Award from "lucide-react"');
  }
  
  fs.writeFileSync(filePath, content);
};

// Main execution
const appDir = '/workspace/app';
const filesToFix = findFilesWithAwardUsage(appDir);

console.log(`Found ${filesToFix.length} files to fix`);

filesToFix.forEach(fixFile);

console.log('All files fixed!');