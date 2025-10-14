#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Function to fix merge conflicts
function fixMergeConflicts(content) {
  // Remove merge conflict markers and keep the HEAD version
  let fixed = content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g, '$1')
    .replace(/<<<<<<< [^\n]+\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g, '$1')
    .replace(/<<<<<<< [^\n]+\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g, '$1');
  
  return fixed;
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals
  fixed = fixed.replace(/(['"`])([^'"`]*?)(\n|$)/g, (match, quote, str, newline) => {
    if (str.includes(quote)) return match;
    return quote + str + quote + ';' + newline;
  });
  
  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(const|let|var)\s+[^=]+=\s*[^;]+(\n|$)/g, (match, decl, newline) => {
    if (match.trim().endsWith(';')) return match;
    return match.trim() + ';' + newline;
  });
  
  // Fix missing commas in object literals
  fixed = fixed.replace(/(\w+):\s*[^,}\n]+(\n\s*[^,}])/g, '$1: $2,');
  
  // Fix JSX fragments
  fixed = fixed.replace(/<>([\s\S]*?)<\/>/g, '<React.Fragment>$1</React.Fragment>');
  
  // Fix missing React import
  if (fixed.includes('React.') && !fixed.includes("import React")) {
    fixed = "import React from 'react';\n" + fixed;
  }
  
  return fixed;
}

// Function to fix specific file patterns
function fixFilePatterns(content, filePath) {
  let fixed = content;
  
  // Fix common import issues
  fixed = fixed.replace(/import\s+{\s*}\s+from\s+['"][^'"]+['"];?\s*\n/g, '');
  
  // Fix empty components
  if (filePath.includes('components/') && fixed.includes('export default function') && !fixed.includes('return')) {
    fixed = fixed.replace(/(export default function[^{]+{)([\s\S]*?)(})/g, '$1\n  return <div>Component placeholder</div>;\n$3');
  }
  
  return fixed;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix merge conflicts
    content = fixMergeConflicts(content);
    
    // Fix syntax errors
    content = fixSyntaxErrors(content);
    
    // Fix file-specific patterns
    content = fixFilePatterns(content, filePath);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting comprehensive error fix...');

const files = findFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files.`);

// Also fix root level files
const rootFiles = ['./App.tsx', './main.tsx', './index.html'];
rootFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
});

console.log(`Total files fixed: ${fixedCount}`);
console.log('Error fixing completed!');