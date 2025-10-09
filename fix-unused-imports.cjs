const fs = require('fs');
const path = require('path');

// Function to remove unused imports and variables
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused imports from lucide-react
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    const lucideMatches = content.match(lucideImportRegex);
    
    if (lucideMatches) {
      lucideMatches.forEach(match => {
        const importContent = match.match(/{\s*([^}]+)\s*}/)[1];
        const imports = importContent.split(',').map(imp => imp.trim());
        
        // Check which imports are actually used
        const usedImports = imports.filter(imp => {
          const cleanImport = imp.split(' as ')[0].trim();
          const usageRegex = new RegExp(`\\b${cleanImport}\\b`, 'g');
          const matches = content.match(usageRegex);
          return matches && matches.length > 1; // More than just the import itself
        });
        
        if (usedImports.length === 0) {
          // Remove entire import line
          content = content.replace(match + '\n', '');
          modified = true;
        } else if (usedImports.length < imports.length) {
          // Replace with only used imports
          const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
          content = content.replace(match, newImport);
          modified = true;
        }
      });
    }

    // Remove unused variables (prefixed with _)
    const unusedVarRegex = /const\s+_(\w+)\s*=/g;
    content = content.replace(unusedVarRegex, (match, varName) => {
      modified = true;
      return `// const _${varName} =`; // Comment out instead of removing
    });

    // Remove 'use client' directives (Next.js specific)
    content = content.replace(/'use client';?\s*\n/g, '');
    modified = true;

    // Remove unused React imports if only default is used
    const reactImportRegex = /import\s+React\s*,\s*{\s*([^}]+)\s*}\s*from\s*['"]react['"];?/g;
    const reactMatches = content.match(reactImportRegex);
    
    if (reactMatches) {
      reactMatches.forEach(match => {
        const importContent = match.match(/{\s*([^}]+)\s*}/)[1];
        const imports = importContent.split(',').map(imp => imp.trim());
        
        // Check which React imports are actually used
        const usedImports = imports.filter(imp => {
          const cleanImport = imp.trim();
          const usageRegex = new RegExp(`\\b${cleanImport}\\b`, 'g');
          const matches = content.match(usageRegex);
          return matches && matches.length > 1;
        });
        
        if (usedImports.length === 0) {
          // Remove React named imports, keep default
          content = content.replace(match, "import React from 'react';");
          modified = true;
        } else if (usedImports.length < imports.length) {
          // Replace with only used imports
          const newImport = `import React, { ${usedImports.join(', ')} } from 'react';`;
          content = content.replace(match, newImport);
          modified = true;
        }
      });
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const files = findFiles(srcDir);

console.log(`Found ${files.length} files to process...`);

files.forEach(file => {
  fixUnusedImports(file);
});

console.log('Done fixing unused imports!');