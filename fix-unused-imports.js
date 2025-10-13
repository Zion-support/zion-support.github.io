#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
const files = execSync('find app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file);

console.log(`Found ${files.length} files to process`);

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Find import lines
    const importLines = [];
    const otherLines = [];
    let inImportSection = true;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (inImportSection && (line.startsWith('import ') || line.trim() === '')) {
        importLines.push({ line, index: i });
      } else {
        inImportSection = false;
        otherLines.push({ line, index: i });
      }
    }
    
    // Extract unused imports from ESLint output
    const eslintOutput = execSync(`npx eslint "${filePath}" --format=json`, { encoding: 'utf8', stdio: 'pipe' }).trim();
    
    if (eslintOutput) {
      try {
        const eslintResults = JSON.parse(eslintOutput);
        const unusedVars = new Set();
        
        eslintResults.forEach(result => {
          result.messages.forEach(message => {
            if (message.ruleId === '@typescript-eslint/no-unused-vars' && message.message.includes('is defined but never used')) {
              const varName = message.message.match(/'([^']+)' is defined but never used/)?.[1];
              if (varName) {
                unusedVars.add(varName);
              }
            }
          });
        });
        
        if (unusedVars.size > 0) {
          console.log(`Processing ${filePath}: removing ${unusedVars.size} unused imports`);
          
          // Filter out unused imports
          const filteredImportLines = importLines.filter(({ line }) => {
            // Check if this import line contains any unused variables
            const hasUnusedVar = Array.from(unusedVars).some(varName => {
              // Match import statements that import the unused variable
              const importMatch = line.match(/import\s+.*?\{([^}]+)\}.*?from/);
              if (importMatch) {
                const imports = importMatch[1].split(',').map(imp => imp.trim());
                return imports.includes(varName);
              }
              return false;
            });
            
            return !hasUnusedVar;
          });
          
          // Rebuild the file
          const newLines = [];
          
          // Add filtered import lines
          filteredImportLines.forEach(({ line }) => {
            newLines.push(line);
          });
          
          // Add other lines
          otherLines.forEach(({ line }) => {
            newLines.push(line);
          });
          
          // Write the file back
          fs.writeFileSync(filePath, newLines.join('\n'));
          console.log(`✓ Fixed ${filePath}`);
        }
      } catch (e) {
        console.log(`⚠ Could not parse ESLint output for ${filePath}`);
      }
    }
  } catch (error) {
    console.log(`⚠ Error processing ${filePath}: ${error.message}`);
  }
});

console.log('Done fixing unused imports');