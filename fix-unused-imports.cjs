#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files
const files = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${files.length} files to process`);

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't exist or is empty
    if (!content) return;
    
    // Get unused imports from ESLint
    let unusedImports = [];
    try {
      const eslintOutput = execSync(`npx eslint "${filePath}" --format=json --no-eslintrc --config .eslintrc.json 2>/dev/null || true`, { encoding: 'utf8' });
      const eslintResults = JSON.parse(eslintOutput);
      
      if (eslintResults && eslintResults[0] && eslintResults[0].messages) {
        unusedImports = eslintResults[0].messages
          .filter(msg => msg.ruleId === '@typescript-eslint/no-unused-vars' && msg.message.includes('is defined but never used'))
          .map(msg => {
            const match = msg.message.match(/'([^']+)' is defined but never used/);
            return match ? match[1] : null;
          })
          .filter(Boolean);
      }
    } catch (e) {
      // Skip if ESLint fails
      return;
    }
    
    if (unusedImports.length === 0) return;
    
    console.log(`Fixing ${unusedImports.length} unused imports in ${filePath}`);
    
    let newContent = content;
    
    // Remove unused imports from import statements
    unusedImports.forEach(importName => {
      // Handle different import patterns
      const patterns = [
        // Named imports: import { A, B, C } from 'module'
        new RegExp(`\\b${importName}\\s*,?`, 'g'),
        // Import with comma before: , A, or , A }
        new RegExp(`,\\s*${importName}\\s*,?`, 'g'),
        // Import at end: A } from
        new RegExp(`${importName}\\s*}\\s*from`, 'g'),
        // Single import: import { A } from 'module'
        new RegExp(`{\\s*${importName}\\s*}`, 'g'),
      ];
      
      patterns.forEach(pattern => {
        newContent = newContent.replace(pattern, (match) => {
          // Clean up the match
          if (match.includes('}')) {
            return '}';
          }
          if (match.includes(',')) {
            return match.replace(importName, '').replace(/,\s*,/, ',').replace(/,\s*$/, '');
          }
          return '';
        });
      });
    });
    
    // Clean up empty import statements
    newContent = newContent.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
    newContent = newContent.replace(/import\s*{\s*,?\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
    
    // Clean up trailing commas in import statements
    newContent = newContent.replace(/,(\s*})/g, '$1');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`✓ Fixed ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Done fixing unused imports');