#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix JSX syntax errors
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX syntax errors
    const fixes = [
      // Fix semicolons in JSX tags
      { pattern: /<(\w+);/g, replacement: '<$1' },
      { pattern: /<\/?(\w+);/g, replacement: '</$1' },
      { pattern: /<(\w+)\s+([^>]*);/g, replacement: '<$1 $2' },
      
      // Fix malformed JSX attributes
      { pattern: /className="([^"]*);/g, replacement: 'className="$1"' },
      { pattern: /href="([^"]*);/g, replacement: 'href="$1"' },
      { pattern: /src="([^"]*);/g, replacement: 'src="$1"' },
      
      // Fix JSX text content
      { pattern: />\s*([^<]*);\s*</g, replacement: '>$1<' },
      { pattern: />\s*([^<]*);\s*$/gm, replacement: '>$1' },
      
      // Fix self-closing tags
      { pattern: /<(\w+)\s*;\s*\/>/g, replacement: '<$1 />' },
      
      // Fix malformed closing tags
      { pattern: /<\/?(\w+);\s*>/g, replacement: '</$1>' },
      
      // Fix function declarations in JSX
      { pattern: /const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*};/g, replacement: 'const $1 = () => {};' },
      
      // Fix missing closing braces
      { pattern: /}\s*;\s*$/gm, replacement: '}' },
      
      // Fix malformed return statements
      { pattern: /return\s*\(\s*;\s*$/gm, replacement: 'return (' },
      { pattern: /return\s*;\s*$/gm, replacement: 'return null;' },
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return modified;
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
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
console.log('Fixing JSX syntax errors...');

const filesToFix = findFilesToFix(srcDir);
console.log(`Processing ${filesToFix.length} files`);

let fixedCount = 0;
for (const file of filesToFix) {
  if (fixJSXErrors(file)) {
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`Fixed ${fixedCount} files`);