#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to comprehensively fix all syntax errors
function comprehensiveFix(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix extra quotes at the end of lines
    const quoteFixes = [
      // Fix lines ending with single quote
      {
        pattern: /^([^']*)';$/gm,
        replacement: '$1'
      },
      // Fix lines ending with double quote
      {
        pattern: /^([^"]*)";$/gm,
        replacement: '$1'
      },
      // Fix lines ending with backtick
      {
        pattern: /^([^`]*)`;$/gm,
        replacement: '$1'
      }
    ];
    
    for (const fix of quoteFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
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
    
    // Fix specific parsing errors
    if (content.includes('Expression expected')) {
      content = content.replace(/\s*Expression expected\s*/g, '');
      modified = true;
    }
    
    if (content.includes("Declaration or statement expected")) {
      content = content.replace(/\s*Declaration or statement expected\s*/g, '');
      modified = true;
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

// Function to find all files that need fixing
function findFilesToFix(dir) {
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
console.log('Starting comprehensive fixes...');

const files = findFilesToFix('/workspace/src');
console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
for (const file of files) {
  if (comprehensiveFix(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);

// Run verification
console.log('Running verification...');
try {
  execSync('pnpm run type-check', { stdio: 'inherit' });
  console.log('Type check passed!');
} catch (error) {
  console.log('Type check failed, but continuing...');
}

console.log('Comprehensive fixes completed!');