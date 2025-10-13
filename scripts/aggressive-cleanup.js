#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to get unused imports from ESLint output
function getUnusedImports(filePath) {
  try {
    const result = execSync(`npx eslint "${filePath}" --format=json --no-eslintrc --config .eslintrc.json 2>/dev/null`, { 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    
    const lintResults = JSON.parse(result);
    if (lintResults.length === 0) return [];
    
    return lintResults[0].messages
      .filter(msg => msg.ruleId === '@typescript-eslint/no-unused-vars' && msg.message.includes('is defined but never used'))
      .map(msg => {
        const match = msg.message.match(/'([^']+)' is defined but never used/);
        return match ? match[1] : null;
      })
      .filter(Boolean);
  } catch (error) {
    return [];
  }
}

// Function to clean a single file
function cleanFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't contain lucide-react imports
    if (!content.includes('from \'lucide-react\'')) {
      return false;
    }
    
    const unusedImports = getUnusedImports(filePath);
    if (unusedImports.length === 0) return false;
    
    console.log(`Cleaning ${filePath}: ${unusedImports.length} unused imports`);
    
    // Remove unused imports from lucide-react
    let newContent = content;
    
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
    
    // Remove unused variable declarations
    const lines = newContent.split('\n');
    const cleanedLines = lines.filter(line => {
      // Check if line declares an unused variable
      for (const unused of unusedImports) {
        if (line.includes(`const ${unused}`) && line.includes('=') && !line.includes('//')) {
          return false; // Remove this line
        }
      }
      return true;
    });
    
    newContent = cleanedLines.join('\n');
    
    // Write the cleaned content back
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting aggressive cleanup of unused imports...');

const files = findFiles('./app');
let cleanedCount = 0;

for (const file of files) {
  if (cleanFile(file)) {
    cleanedCount++;
  }
}

console.log(`Aggressive cleanup complete! Cleaned ${cleanedCount} files.`);