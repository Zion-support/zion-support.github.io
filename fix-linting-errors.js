#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
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

// Function to fix linting errors
function fixLintingErrors(content, filePath) {
  let fixed = content;
  
  // Fix extra semicolons in import statements
  fixed = fixed.replace(/import\s+([^;]+);;+/g, 'import $1;');
  
  // Fix extra semicolons in JSX attributes
  fixed = fixed.replace(/content="([^"]+)";;+/g, 'content="$1"');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<React\.Fragment>\s*<\/React\.Fragment>/g, '<></>');
  
  // Fix empty JSX fragments
  fixed = fixed.replace(/<React\.Fragment>\s*<Helmet>[\s\S]*?<\/Helmet>\s*<\/React\.Fragment>/g, (match) => {
    return match.replace(/<React\.Fragment>/g, '<>').replace(/<\/React\.Fragment>/g, '</>');
  });
  
  // Fix malformed function declarations
  if (filePath.includes('/page.tsx') && fixed.includes('export default function Page()')) {
    // Ensure proper React import
    if (!fixed.includes("import React from 'react'")) {
      fixed = "import React from 'react';\n" + fixed;
    }
    
    // Ensure proper Helmet import
    if (fixed.includes('<Helmet>') && !fixed.includes("import { Helmet }")) {
      fixed = fixed.replace(/import React from 'react';/, "import React from 'react';\nimport { Helmet } from 'react-helmet-async';");
    }
  }
  
  return fixed;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix linting errors
    content = fixLintingErrors(content, filePath);
    
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
console.log('Starting linting error fix...');

const files = findFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files.`);
console.log('Linting error fixing completed!');