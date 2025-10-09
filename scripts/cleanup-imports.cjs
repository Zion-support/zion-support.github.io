#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function cleanUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused imports from lucide-react
    const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    
    content = content.replace(importRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        // Check if the import is actually used in the file
        const importName = imp.replace(/\s+as\s+\w+/, '').trim();
        const usageRegex = new RegExp(`\\b${importName}\\b`, 'g');
        const usageCount = (content.match(usageRegex) || []).length;
        return usageCount > 1; // More than 1 means it's used (1 is the import itself)
      });

      if (usedImports.length === 0) {
        modified = true;
        return ''; // Remove entire import line
      } else if (usedImports.length !== importList.length) {
        modified = true;
        return `import { ${usedImports.join(', ')} } from 'lucide-react';`;
      }
      return match;
    });

    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned unused imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Find all TypeScript/JavaScript files
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to process...`);

files.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  cleanUnusedImports(fullPath);
});

console.log('Unused imports cleanup completed!');