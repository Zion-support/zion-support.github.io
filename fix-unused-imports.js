import fs from 'fs';
import path from 'path';

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix unused imports in a file
const fixUnusedImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Common unused imports to remove
    const unusedImports = [
      'Zap', 'BarChart3', 'DollarSign', 'Users', 'Settings', 'Shield', 'Mail', 'Lock', 'FileText',
      'StarIcon', 'TrophyIcon', 'React'
    ];
    
    // Remove unused imports from import statements
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"][^'"]+['"];?/g;
    
    content = content.replace(importRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        const cleanImport = imp.replace(/\s+as\s+\w+/, '').trim();
        return !unusedImports.includes(cleanImport);
      });
      
      if (usedImports.length === 0) {
        modified = true;
        return ''; // Remove entire import line
      } else if (usedImports.length !== importList.length) {
        modified = true;
        return match.replace(imports, usedImports.join(', '));
      }
      
      return match;
    });
    
    // Remove React import if it's the only import and not used
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main execution
console.log('Fixing unused imports...');

const files = getAllFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  try {
    fixUnusedImports(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error with file ${file}:`, error.message);
  }
});

console.log(`Processed ${fixedCount} files`);

// Also fix the main App.tsx
fixUnusedImports('./App.tsx');

console.log('Unused imports fix completed!');