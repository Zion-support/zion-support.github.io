#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';

// Function to fix specific TypeScript syntax errors;
function fixSpecificErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing commas in object literals;
    const commaFixes = [
      // Fix missing commas after object properties;
      {
        pattern: /(\w+):\s*([^,}]*)\s*$/gm,
        replacement: (match, key, value) => {
          if (value.trim() && !value.includes(',') && !value.includes('}') && !value.includes(';')) {
            return `${key}: ${value},`;
          }
          return match;
        }
      },
      
      // Fix missing commas in function parameters;
      {
        pattern: /(\w+)\s*\(\s*([^)]*)\s*$/gm,
        replacement: (match, func, params) => {
          if (params.trim() && !params.includes(')') && !params.includes(',')) {
            return `${func}(${params})`;
          }
          return match;
        }
      },
      
      // Fix missing semicolons after statements;
      {
        pattern: /(\w+)\s*$/gm,
        replacement: (match, stmt) => {
          if (stmt && !stmt.endsWith(';') && !stmt.endsWith('{') && !stmt.endsWith('}') && !stmt.endsWith(',') && !stmt.endsWith(')')) {
            return `${stmt};`;
          }
          return match;
        }
      }
    ];
    
    // Apply comma fixes;
    for (const fix of commaFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Fix specific patterns;
    const specificFixes = [
      // Fix malformed object properties;
      {
        pattern: /(\w+):\s*([^,}]*)\s*$/gm,
        replacement: (match, key, value) => {
          if (value.trim() && !value.includes(',') && !value.includes('}')) {
            return `${key}: ${value},`;
          }
          return match;
        }
      },
      
      // Fix missing closing braces;
      {
        pattern: /(\w+)\s*{\s*$/gm,
        replacement: (match, stmt) => {
          return `${stmt} {`;
        }
      },
      
      // Fix missing closing parentheses;
      {
        pattern: /(\w+)\s*\(\s*([^)]*)\s*$/gm,
        replacement: (match, func, params) => {
          if (params.trim() && !params.includes(')')) {
            return `${func}(${params})`;
          }
          return match;
        }
      }
    ];
    
    for (const fix of specificFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed specific errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files;
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories;
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution;
console.log('Starting specific error resolution...');

const files = findFiles('.');
let fixedCount = 0;

for (const file of files) {
  if (fixSpecificErrors(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed specific errors in ${fixedCount} files.`);