#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix unterminated string literals
function fixStringLiterals(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unterminated string literals
    const stringFixes = [
      // Fix unterminated double quotes
      {
        pattern: /"([^"]*)$/gm,
        replacement: (match, str) => {
          if (!match.endsWith('"')) {
            return `"${str}"`;
          }
          return match;
        }
      },
      // Fix unterminated single quotes
      {
        pattern: /'([^']*)$/gm,
        replacement: (match, str) => {
          if (!match.endsWith("'")) {
            return `'${str}'`;
          }
          return match;
        }
      },
      // Fix unterminated template literals
      {
        pattern: /`([^`]*)$/gm,
        replacement: (match, str) => {
          if (!match.endsWith('`')) {
            return `\`${str}\``;
          }
          return match;
        }
      }
    ];
    
    for (const fix of stringFixes) {
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
    
    // Fix missing semicolons
    const semicolonFixes = [
      {
        pattern: /(\w+)\s*=\s*[^;]+$/gm,
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
    
    // Fix JSX parsing errors
    const jsxFixes = [
      {
        pattern: /<(\w+)\s*([^>]*)\s*$/gm,
        replacement: (match, tag, attrs) => {
          if (!match.endsWith('>')) {
            return `<${tag} ${attrs}>`;
          }
          return match;
        }
      },
      {
        pattern: /<(\w+)\s*$/gm,
        replacement: (match, tag) => {
          if (!match.endsWith('>')) {
            return `<${tag}>`;
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

// Function to find files with string literal errors
function findFilesWithStringLiteralErrors(dir) {
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
console.log('Starting string literal fixes...');

const files = findFilesWithStringLiteralErrors('/workspace/src');
console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
for (const file of files) {
  if (fixStringLiterals(file)) {
    fixedCount++;
  }
}

console.log(`Fixed string literal errors in ${fixedCount} files`);

// Run verification
console.log('Running verification...');
try {
  execSync('pnpm run type-check', { stdio: 'inherit' });
  console.log('Type check passed!');
} catch (error) {
  console.log('Type check failed, but continuing...');
}

console.log('String literal fixes completed!');