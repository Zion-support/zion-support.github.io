const fs = require('fs');
const path = require('path');

// Common lucide-react icons that are used
const commonIcons = ['ArrowRight', 'Award', 'Brain', 'Zap', 'Shield', 'Star', 'Clock', 'Users', 'TrendingUp', 'CheckCircle'];

// Find all files that use lucide-react icons but are missing imports
const findFilesWithMissingImports = (dir) => {
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
        if (content.includes('lucide-react')) {
          // Check if any common icons are used but not imported
          const hasMissingImports = commonIcons.some(icon => 
            content.includes(`<${icon}`) && !content.includes(icon)
          );
          if (hasMissingImports) {
            files.push(fullPath);
          }
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
  
  // Find which icons are used
  const usedIcons = commonIcons.filter(icon => content.includes(`<${icon}`));
  
  if (usedIcons.length > 0) {
    // Find the lucide-react import line
    const importMatch = content.match(/import {[^}]+} from ['"]lucide-react['"];/);
    if (importMatch) {
      const importLine = importMatch[0];
      const currentImports = importLine.match(/{([^}]+)}/)[1].split(',').map(i => i.trim());
      
      // Add missing imports
      const missingImports = usedIcons.filter(icon => !currentImports.includes(icon));
      if (missingImports.length > 0) {
        const newImports = [...currentImports, ...missingImports].join(', ');
        const newImportLine = importLine.replace(/{[^}]+}/, `{ ${newImports} }`);
        content = content.replace(importLine, newImportLine);
      }
    }
  }
  
  fs.writeFileSync(filePath, content);
};

// Main execution
const appDir = '/workspace/app';
const filesToFix = findFilesWithMissingImports(appDir);

console.log(`Found ${filesToFix.length} files to fix`);

filesToFix.forEach(fixFile);

console.log('All files fixed!');