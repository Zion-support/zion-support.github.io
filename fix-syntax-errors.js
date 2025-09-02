#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common syntax fixes
const fixes = [
  // Fix malformed imports
  { pattern: /import React from,\s*react';/g, replacement: "import React from 'react';" },
  { pattern: /import React from,\s*'react';/g, replacement: "import React from 'react';" },
  { pattern: /import React from,\s*"react";/g, replacement: 'import React from "react";' },
  
  // Fix missing semicolons in function calls
  { pattern: /\)\s*\)\s*$/gm, replacement: ');' },
  { pattern: /\)\s*\}\s*$/gm, replacement: '});' },
  
  // Fix malformed describe blocks
  { pattern: /describe\(\s*$/gm, replacement: 'describe(' },
  { pattern: /it\(\s*$/gm, replacement: 'it(' },
  
  // Fix unterminated strings
  { pattern: /'([^']*?)\s*$/gm, replacement: "'$1';" },
  { pattern: /"([^"]*?)\s*$/gm, replacement: '"$1";' },
  
  // Fix missing closing braces
  { pattern: /(\s+)(it|describe)\(/g, replacement: '\n  $2(' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes
    content = content.replace(/describe\(\s*$/gm, 'describe(');
    content = content.replace(/it\(\s*$/gm, 'it(');
    
    // Fix common JSX issues
    content = content.replace(/<([A-Z][a-zA-Z]*)\s*\/>/g, '<$1 />');
    
    // Fix missing semicolons at end of statements
    content = content.replace(/([^;}])\s*$/gm, '$1;');
    
    // Fix function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*\{/g, 'function $1() {');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  const files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...walkDir(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return files;
}

// Main execution
const testFiles = walkDir(path.join(__dirname, '__tests__'));
const apiFiles = walkDir(path.join(__dirname, 'api'));

const allFiles = [...testFiles, ...apiFiles];

console.log(`Found ${allFiles.length} files to check`);

let fixedCount = 0;
for (const file of allFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);