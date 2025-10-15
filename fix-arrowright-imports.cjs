const fs = require('fs');
const path = require('path');

// Fix ArrowRight imports in files
const fixArrowRightImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Check if ArrowRight is used but not imported
    if (content.includes('ArrowRight') && !content.includes("import { ArrowRight")) {
      // Find the lucide-react import line
      const lucideImportMatch = content.match(/import { ([^}]+) } from 'lucide-react';/);
      
      if (lucideImportMatch) {
        // Add ArrowRight to existing import
        const existingImports = lucideImportMatch[1];
        if (!existingImports.includes('ArrowRight')) {
          content = content.replace(
            /import { ([^}]+) } from 'lucide-react';/,
            `import { $1, ArrowRight } from 'lucide-react';`
          );
        }
      } else {
        // Add new import line
        content = `import { ArrowRight } from 'lucide-react';\n` + content;
      }
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed ArrowRight import: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
};

// Find all files that use ArrowRight
const findFilesWithArrowRight = () => {
  const files = [];
  const appDir = 'app';
  
  const walkDir = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('ArrowRight')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  };
  
  walkDir(appDir);
  return files;
};

// Fix all files with ArrowRight
const filesToFix = findFilesWithArrowRight();
let fixedCount = 0;

filesToFix.forEach(filePath => {
  if (fixArrowRightImports(filePath)) {
    fixedCount++;
  }
});

console.log(`Fixed ArrowRight imports in ${fixedCount} files`);