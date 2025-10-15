#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix import statements with extra quotes
  fixed = fixed.replace(/import\s+([^;]+);"/g, 'import $1;');
  fixed = fixed.replace(/from\s+['"]([^'"]+)['"];"/g, 'from "$1";');
  fixed = fixed.replace(/import\s+([^;]+)";/g, 'import $1;');
  fixed = fixed.replace(/from\s+['"]([^'"]+)['"]";/g, 'from "$1";');
  
  // Fix "use client" directive
  fixed = fixed.replace(/"use client""/g, '"use client";');
  fixed = fixed.replace(/"use client";"/g, '"use client";');
  
  // Fix JSX attributes with colons
  fixed = fixed.replace(/<(\w+):\s*([^>]+)>/g, '<$1 $2>');
  fixed = fixed.replace(/className\s*=\s*["']([^"']+)["'];"/g, 'className="$1"');
  
  // Fix unterminated string literals in imports
  fixed = fixed.replace(/import\s+\([^)]*\)\s*=>\s*import\(['"]([^'"]+)['"]\)"/g, 'import("$1")');
  fixed = fixed.replace(/import\s+\([^)]*\)\s*=>\s*import\(['"]([^'"]+)['"]\)";/g, 'import("$1");');
  
  // Fix lazy imports
  fixed = fixed.replace(/lazy\(\(\)\s*=>\s*import\(['"]([^'"]+)['"]\)"/g, 'lazy(() => import("$1")');
  fixed = fixed.replace(/lazy\(\(\)\s*=>\s*import\(['"]([^'"]+)['"]\)";/g, 'lazy(() => import("$1"));');
  
  // Fix extra semicolons in JSX
  fixed = fixed.replace(/;"/g, '"');
  fixed = fixed.replace(/;"/g, '"');
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<\/\w+:\s*>/g, '>');
  
  // Fix extra parentheses and brackets
  fixed = fixed.replace(/\)\)\)\)/g, ')');
  fixed = fixed.replace(/\)\)\)/g, ')');
  fixed = fixed.replace(/\)\)/g, ')');
  
  // Fix incomplete function declarations
  fixed = fixed.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*return\s+null;\s*}\s*return\s*\(/gm, 'function $1() {\n  return (');
  
  // Fix duplicate return statements
  fixed = fixed.replace(/return\s+null;\s*}\s*return\s*\(/gm, 'return (');
  
  // Fix incomplete JSX
  fixed = fixed.replace(/return\s*\(\s*$/gm, 'return null;\n}');
  
  // Fix unterminated strings
  fixed = fixed.replace(/([^\\])"([^"]*)$/gm, '$1"$2"');
  
  // Fix missing semicolons in const declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\(['"]([^'"]+)['"]\)\)$/gm, 'const $1 = lazy(() => import("$2"));');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other directories
        if (!['node_modules', 'dist', '.git', '.next'].includes(item)) {
          fixedCount += processDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.ts', '.js', '.jsx'].includes(ext)) {
          if (processFile(fullPath)) {
            fixedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive syntax error fixes...');
const fixedCount = processDirectory('./app');
console.log(`Fixed ${fixedCount} files in app directory.`);

// Also fix root level files
const rootFiles = ['App.tsx', 'App-backup.tsx', 'App-minimal.tsx', 'App-optimized.tsx'];
let rootFixedCount = 0;

for (const file of rootFiles) {
  if (fs.existsSync(file)) {
    if (processFile(file)) {
      rootFixedCount++;
    }
  }
}

console.log(`Fixed ${rootFixedCount} root files.`);
console.log('Comprehensive syntax error fixes completed.');