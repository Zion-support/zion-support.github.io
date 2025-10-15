#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to remove unused imports
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Get all import statements
    const importRegex = /import\s+.*?from\s+['"][^'"]+['"];?\s*\n/g;
    const imports = content.match(importRegex) || [];
    
    // Get all used identifiers in the file
    const usedIdentifiers = new Set();
    
    // Find all JSX elements and function calls
    const jsxRegex = /<(\w+)/g;
    const functionRegex = /\b(\w+)\s*\(/g;
    const variableRegex = /\b(\w+)\s*[:=]/g;
    
    let match;
    while ((match = jsxRegex.exec(content)) !== null) {
      usedIdentifiers.add(match[1]);
    }
    
    while ((match = functionRegex.exec(content)) !== null) {
      usedIdentifiers.add(match[1]);
    }
    
    while ((match = variableRegex.exec(content)) !== null) {
      usedIdentifiers.add(match[1]);
    }

    // Process each import
    imports.forEach(importStatement => {
      // Extract imported names
      const importMatch = importStatement.match(/import\s+{([^}]+)}/);
      if (importMatch) {
        const importedNames = importMatch[1].split(',').map(name => name.trim().split(' as ')[0].trim());
        const unusedNames = importedNames.filter(name => !usedIdentifiers.has(name));
        
        if (unusedNames.length > 0) {
          const usedNames = importedNames.filter(name => usedIdentifiers.has(name));
          if (usedNames.length === 0) {
            // Remove entire import if no names are used
            content = content.replace(importStatement, '');
            modified = true;
          } else {
            // Remove unused names from import
            const newImport = importStatement.replace(
              /{([^}]+)}/,
              `{${usedNames.join(', ')}}`
            );
            content = content.replace(importStatement, newImport);
            modified = true;
          }
        }
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Removed unused imports from: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all TypeScript and JavaScript files
const files = await glob('**/*.{ts,tsx,js,jsx}', {
  ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**']
});

console.log('Removing unused imports...');
files.forEach(file => {
  removeUnusedImports(file);
});

console.log('Unused imports removal completed!');