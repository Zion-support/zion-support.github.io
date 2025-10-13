#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to clean unused imports in a file
function cleanUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't contain lucide-react imports
    if (!content.includes('from \'lucide-react\'')) {
      return false;
    }
    
    // Get the list of unused imports using ESLint
    try {
      const result = execSync(`npx eslint "${filePath}" --format=json --no-eslintrc --config .eslintrc.json`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const lintResults = JSON.parse(result);
      if (lintResults.length === 0) return false;
      
      const unusedImports = lintResults[0].messages
        .filter(msg => msg.ruleId === '@typescript-eslint/no-unused-vars' && msg.message.includes('is defined but never used'))
        .map(msg => {
          const match = msg.message.match(/'([^']+)' is defined but never used/);
          return match ? match[1] : null;
        })
        .filter(Boolean);
      
      if (unusedImports.length === 0) return false;
      
      // Remove unused imports from the file
      let newContent = content;
      
      // Handle lucide-react imports
      const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
      newContent = newContent.replace(lucideImportRegex, (match, imports) => {
        const importList = imports.split(',').map(imp => imp.trim());
        const usedImports = importList.filter(imp => {
          const cleanImport = imp.replace(/\s+as\s+\w+/, '').trim();
          return !unusedImports.includes(cleanImport);
        });
        
        if (usedImports.length === 0) {
          return ''; // Remove entire import line if no imports are used
        }
        
        return `import { ${usedImports.join(', ')} } from 'lucide-react';`;
      });
      
      // Write the cleaned content back
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Cleaned unused imports in: ${filePath}`);
        return true;
      }
      
    } catch (error) {
      // If ESLint fails, try a simpler approach
      console.log(`ESLint failed for ${filePath}, skipping...`);
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, dist, etc.
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting cleanup of unused imports...');

const files = findFiles('./app');
let cleanedCount = 0;

for (const file of files) {
  if (cleanUnusedImports(file)) {
    cleanedCount++;
  }
}

console.log(`Cleanup complete! Cleaned ${cleanedCount} files.`);