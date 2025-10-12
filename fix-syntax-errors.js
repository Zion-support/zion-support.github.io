#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix common syntax errors in files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix duplicate function declarations and misplaced imports
    if (content.includes('export default function') && content.includes('import React')) {
      // Check if imports are after the function declaration
      const lines = content.split('\n');
      const importLines = [];
      const otherLines = [];
      let inImports = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('import ') || line.startsWith('export ') && line.includes('import')) {
          importLines.push(lines[i]);
          inImports = true;
        } else if (inImports && (line.startsWith('export default function') || line.startsWith('function'))) {
          // Found function declaration, stop collecting imports
          otherLines.push(...lines.slice(i));
          break;
        } else if (inImports) {
          importLines.push(lines[i]);
        } else {
          otherLines.push(lines[i]);
        }
      }
      
      if (importLines.length > 0 && otherLines.length > 0) {
        // Reconstruct the file with imports first
        const newContent = [...importLines, '', ...otherLines].join('\n');
        if (newContent !== content) {
          fs.writeFileSync(filePath, newContent, 'utf8');
          modified = true;
        }
      }
    }
    
    // Fix missing closing braces
    if (content.includes('export default function') && !content.includes('}')) {
      // Add missing closing brace
      const newContent = content + '\n}';
      fs.writeFileSync(filePath, newContent, 'utf8');
      modified = true;
    }
    
    // Fix duplicate export default statements
    const exportMatches = content.match(/export default function/g);
    if (exportMatches && exportMatches.length > 1) {
      // Keep only the first export default
      const lines = content.split('\n');
      let foundFirst = false;
      const newLines = lines.filter(line => {
        if (line.trim().startsWith('export default function')) {
          if (foundFirst) {
            return false; // Remove duplicate
          }
          foundFirst = true;
        }
        return true;
      });
      
      if (newLines.length !== lines.length) {
        fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
        modified = true;
      }
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find files with syntax errors
function findFilesWithSyntaxErrors() {
  try {
    const result = execSync('find ./app -name "*.tsx" -o -name "*.ts" | head -20', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return result.trim().split('\n').filter(f => f.length > 0);
  } catch (error) {
    return [];
  }
}

// Main execution
function main() {
  console.log('Starting syntax error fixes...');
  
  const files = findFilesWithSyntaxErrors();
  console.log(`Found ${files.length} files to check`);
  
  let fixedCount = 0;
  
  for (const filePath of files) {
    if (fixSyntaxErrors(filePath)) {
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
}

// Run main function
main();

export { fixSyntaxErrors, findFilesWithSyntaxErrors };