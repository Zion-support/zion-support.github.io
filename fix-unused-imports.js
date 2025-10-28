#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get TypeScript errors
function getTypeScriptErrors() {
  try {
    const output = execSync('npx tsc --noEmit', { cwd: '/workspace', encoding: 'utf8' });
    return [];
  } catch (error) {
    return error.stdout || error.stderr || '';
  }
}

// Fix unused imports and variables
function fixUnusedIssues() {
  const errors = getTypeScriptErrors();
  const lines = errors.split('\n');
  
  const fileErrors = {};
  
  // Parse errors
  lines.forEach(line => {
    const match = line.match(/^([^(]+)\((\d+),(\d+)\): error TS6133: '([^']+)' is declared but its value is never read\.$/);
    if (match) {
      const [, filePath, lineNum, colNum, varName] = match;
      if (!fileErrors[filePath]) {
        fileErrors[filePath] = [];
      }
      fileErrors[filePath].push({
        line: parseInt(lineNum),
        col: parseInt(colNum),
        varName
      });
    }
  });
  
  // Fix each file
  Object.keys(fileErrors).forEach(filePath => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const errors = fileErrors[filePath].sort((a, b) => b.line - a.line); // Sort by line number descending
      
      errors.forEach(error => {
        const lineIndex = error.line - 1;
        const line = lines[lineIndex];
        
        if (line) {
          // Check if it's an unused import
          if (line.includes('import') && line.includes(error.varName)) {
            // Remove the unused import
            const importMatch = line.match(/import\s*{([^}]+)}\s*from\s*['"][^'"]+['"];?/);
            if (importMatch) {
              const imports = importMatch[1].split(',').map(imp => imp.trim());
              const filteredImports = imports.filter(imp => imp !== error.varName);
              
              if (filteredImports.length === 0) {
                // Remove entire import line
                lines[lineIndex] = '';
              } else {
                // Update import with remaining items
                const newImport = line.replace(importMatch[1], filteredImports.join(', '));
                lines[lineIndex] = newImport;
              }
            } else {
              // Single import, remove the line
              lines[lineIndex] = '';
            }
          } else if (line.includes('const') || line.includes('let') || line.includes('var')) {
            // Remove unused variable declaration
            lines[lineIndex] = '';
          }
        }
      });
      
      // Write back the file
      const newContent = lines.join('\n');
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed ${filePath}`);
      
    } catch (err) {
      console.error(`Error fixing ${filePath}:`, err.message);
    }
  });
}

// Run the fix
fixUnusedIssues();
console.log('Done fixing unused imports and variables');