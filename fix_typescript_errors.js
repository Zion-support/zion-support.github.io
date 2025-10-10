#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix common TypeScript syntax errors;
function fixTypeScriptErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax errors;
    const fixes = [
      // Fix missing closing braces and parentheses;
      {
        pattern: /(\w+)\s*\(\s*([^)]*)\s*,\s*$/gm,
        replacement: (match, func, params) => {
          if (params.trim() && !params.includes(')')) {
            return `${func}(${params})`;
          }
          return match;
        }
      },
      
      // Fix missing closing parentheses in function calls;
      {
        pattern: /(\w+)\s*\(\s*([^)]*)\s*,\s*$/gm,
        replacement: (match, func, params) => {
          if (params.trim() && !params.includes(')')) {
            return `${func}(${params})`;
          }
          return match;
        }
      },
      
      // Fix missing closing braces in object literals;
      {
        pattern: /(\w+):\s*([^,}]*)\s*,\s*$/gm,
        replacement: (match, key, value) => {
          if (value.trim() && !value.includes('}')) {
            return `${key}: ${value}`;
          }
          return match;
        }
      },
      
      // Fix JSX syntax errors - missing closing tags;
      {
        pattern: /<(\w+)([^>]*)>\s*$/gm;
        replacement: (match, tag, attrs) => {
          // Only fix if it's not a self-closing tag;
          if (!attrs.includes('/>')) {
            return match;
          }
          return match;
        }
      },
      
      // Fix missing semicolons after statements;
      {
        pattern: /(\w+)\s*$/gm;
        replacement: (match, stmt) => {
          if (stmt && !stmt.endsWith(';') && !stmt.endsWith('{') && !stmt.endsWith('}')) {
            return `${stmt};`;
          }
          return match;
        }
      },
      
      // Fix malformed JSX attributes;
      {
        pattern: /(\w+)=\{([^}]*)\s*$/gm,
        replacement: (match, attr, value) => {
          if (value.trim() && !value.includes('}')) {
            return `${attr}={${value}}`;
          }
          return match;
        }
      },
      
      // Fix missing commas in object literals;
      {
        pattern: /(\w+):\s*([^,}]*)\s*$/gm,
        replacement: (match, key, value) => {
          if (value.trim() && !value.includes(',') && !value.includes('}')) {
            return `${key}: ${value},`;
          }
          return match;
        }
      },
      
      // Fix malformed function parameters;
      {
        pattern: /function\s+(\w+)\s*\(\s*([^)]*)\s*$/gm;
        replacement: (match, funcName, params) => {
          if (params.trim() && !params.includes(')')) {
            return `function ${funcName}(${params})`;
          }
          return match;
        }
      },
      
      // Fix arrow function syntax;
      {
        pattern: /(\w+)\s*=>\s*([^,}]*)\s*$/gm,
        replacement: (match, param, body) => {
          if (body.trim() && !body.includes('}') && !body.includes(')')) {
            return `${param} => ${body}`;
          }
          return match;
        }
      },
      
      // Fix missing closing parentheses in JSX;
      {
        pattern: /<(\w+)([^>]*)>\s*$/gm;
        replacement: (match, tag, attrs) => {
          if (!attrs.includes('/>') && !attrs.includes('>')) {
            return `<${tag}${attrs}>`;
          }
          return match;
        }
      }
    ];
    
    // Apply fixes;
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes for common patterns;
    const specificFixes = [
      // Fix missing closing braces;
      {
        pattern: /(\w+)\s*{\s*$/gm;
        replacement: (match, stmt) => {
          return `${stmt} {`;
        }
      },
      
      // Fix missing closing parentheses in function calls;
      {
        pattern: /(\w+)\s*\(\s*([^)]*)\s*,\s*$/gm,
        replacement: (match, func, params) => {
          if (params.trim() && !params.includes(')')) {
            return `${func}(${params})`;
          }
          return match;
        }
      },
      
      // Fix malformed object properties;
      {
        pattern: /(\w+):\s*([^,}]*)\s*$/gm,
        replacement: (match, key, value) => {
          if (value.trim() && !value.includes(',') && !value.includes('}')) {
            return `${key}: ${value},`;
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
      console.log(`Fixed TypeScript errors in: ${filePath}`);
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
console.log('Starting TypeScript error resolution...');

const files = findFiles('.');
let fixedCount = 0;

for (const file of files) {
  if (fixTypeScriptErrors(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed TypeScript errors in ${fixedCount} files.`);

// Run TypeScript check to see remaining errors;
console.log('\nRunning TypeScript check...');
try {
  execSync('pnpm run type-check', { stdio: 'inherit' });
} catch (error) {
  console.log('TypeScript check completed with errors (expected).');
}