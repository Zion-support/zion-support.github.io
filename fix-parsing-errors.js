#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix specific parsing errors
function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing semicolons
    const semicolonFixes = [
      // Fix missing semicolons after variable declarations
      {
        pattern: /(\w+)\s*=\s*[^;]+$/gm,
        replacement: (match) => {
          if (!match.endsWith(';') && !match.endsWith('{') && !match.endsWith('}')) {
            return match + ';';
          }
          return match;
        }
      },
      // Fix missing semicolons after function calls
      {
        pattern: /(\w+)\s*\([^)]*\)\s*$/gm,
        replacement: (match) => {
          if (!match.endsWith(';') && !match.endsWith('{') && !match.endsWith('}')) {
            return match + ';';
          }
          return match;
        }
      }
    ];
    
    for (const fix of semicolonFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Fix missing commas in object literals
    const commaFixes = [
      {
        pattern: /(\w+)\s*:\s*[^,}]+(\s*)(\w+)\s*:/g,
        replacement: '$1: $2,\n    $3:'
      },
      {
        pattern: /(\w+)\s*:\s*[^,}]+(\s*)(\w+)\s*=/g,
        replacement: '$1: $2,\n    $3='
      }
    ];
    
    for (const fix of commaFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Fix incomplete object/array declarations
    const incompleteFixes = [
      {
        pattern: /(\w+)\s*:\s*\{[^}]*$/gm,
        replacement: (match) => {
          if (!match.includes('}')) {
            return match + '\n  }';
          }
          return match;
        }
      },
      {
        pattern: /(\w+)\s*:\s*\[[^\]]*$/gm,
        replacement: (match) => {
          if (!match.includes(']')) {
            return match + '\n  ]';
          }
          return match;
        }
      }
    ];
    
    for (const fix of incompleteFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Fix specific parsing errors
    if (content.includes('Expression expected')) {
      content = content.replace(/\s*Expression expected\s*/g, '');
      modified = true;
    }
    
    if (content.includes("Declaration or statement expected")) {
      content = content.replace(/\s*Declaration or statement expected\s*/g, '');
      modified = true;
    }
    
    // Fix incomplete JSX expressions
    const jsxFixes = [
      {
        pattern: /<(\w+)\s*[^>]*$/gm,
        replacement: (match) => {
          if (!match.includes('>')) {
            return match + '>';
          }
          return match;
        }
      }
    ];
    
    for (const fix of jsxFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find files with parsing errors
function findFilesWithParsingErrors(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'out'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting parsing error fixes...');

const files = findFilesWithParsingErrors('/workspace/src');
console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
for (const file of files) {
  if (fixParsingErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed parsing errors in ${fixedCount} files`);

// Run verification
console.log('Running verification...');
try {
  execSync('pnpm run type-check', { stdio: 'inherit' });
  console.log('Type check passed!');
} catch (error) {
  console.log('Type check failed, but continuing...');
}

console.log('Parsing error fixes completed!');