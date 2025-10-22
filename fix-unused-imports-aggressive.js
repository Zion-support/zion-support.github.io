#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if it's not a TypeScript/JavaScript file
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.jsx') && !filePath.endsWith('.js')) {
      return;
    }
    
    console.log(`Processing: ${filePath}`);
    
    let modified = false;
    let newContent = content;
    
    // Pattern to match import statements with multiple named imports
    const importPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];?/g;
    
    newContent = newContent.replace(importPattern, (match, imports, module) => {
      // Split imports and clean them
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = [];
      
      // Check which imports are actually used in the file
      for (const imp of importList) {
        const importName = imp.replace(/\s+as\s+\w+/, '').trim();
        const regex = new RegExp(`\\b${importName}\\b`, 'g');
        const matches = newContent.match(regex);
        
        // Count occurrences (should be more than 1 if used, since the import itself counts)
        if (matches && matches.length > 1) {
          usedImports.push(imp);
        }
      }
      
      if (usedImports.length === 0) {
        // No imports are used, remove the entire import statement
        modified = true;
        return '';
      } else if (usedImports.length < importList.length) {
        // Some imports are unused, keep only the used ones
        modified = true;
        return `import { ${usedImports.join(', ')} } from '${module}';`;
      }
      
      return match;
    });
    
    // Also handle default imports
    const defaultImportPattern = /import\s+(\w+)\s+from\s*['"]([^'"]+)['"];?/g;
    newContent = newContent.replace(defaultImportPattern, (match, importName, module) => {
      const regex = new RegExp(`\\b${importName}\\b`, 'g');
      const matches = newContent.match(regex);
      
      if (matches && matches.length <= 1) {
        // Import is not used
        modified = true;
        return '';
      }
      
      return match;
    });
    
    // Clean up multiple empty lines
    newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✓ Fixed unused imports in ${filePath}`);
    } else {
      console.log(`- No changes needed for ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findTsFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting aggressive unused imports cleanup...');

const tsFiles = findTsFiles('/workspace');
console.log(`Found ${tsFiles.length} TypeScript/JavaScript files`);

// Process each file
for (const file of tsFiles) {
  removeUnusedImports(file);
}

console.log('Aggressive unused imports cleanup completed!');