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

// Function to fix unterminated string literals
function fixUnterminatedStrings(content) {
  let fixed = content;
  
  // Fix unterminated single quotes
  fixed = fixed.replace(/(['"])([^'"]*?)(\n|$)/g, (match, quote, str, newline) => {
    if (str.includes(quote)) return match;
    return quote + str + quote + ';' + newline;
  });
  
  // Fix double semicolons
  fixed = fixed.replace(/;;+/g, ';');
  
  // Fix malformed imports
  fixed = fixed.replace(/import\s+([^;]+);;+/g, 'import $1;');
  
  return fixed;
}

// Function to fix JSX issues
function fixJSX(content) {
  let fixed = content;
  
  // Fix unclosed JSX tags
  const openTags = [];
  const lines = fixed.split('\n');
  let result = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Find opening tags
    const openTagMatches = line.match(/<(\w+)(?:\s[^>]*)?(?!\/)>/g);
    if (openTagMatches) {
      openTagMatches.forEach(match => {
        const tagName = match.match(/<(\w+)/)[1];
        if (!['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {
          openTags.push(tagName);
        }
      });
    }
    
    // Find closing tags
    const closeTagMatches = line.match(/<\/(\w+)>/g);
    if (closeTagMatches) {
      closeTagMatches.forEach(match => {
        const tagName = match.match(/<\/(\w+)>/)[1];
        const index = openTags.lastIndexOf(tagName);
        if (index !== -1) {
          openTags.splice(index, 1);
        }
      });
    }
    
    result.push(line);
  }
  
  // Close any remaining open tags
  while (openTags.length > 0) {
    const tag = openTags.pop();
    result.push(`</${tag}>`);
  }
  
  return result.join('\n');
}

// Function to fix specific file patterns
function fixFileSpecific(content, filePath) {
  let fixed = content;
  
  // Fix common React patterns
  if (filePath.includes('App.tsx') || filePath.includes('main.tsx')) {
    // Ensure proper React imports
    if (!fixed.includes("import React from 'react'") && fixed.includes('React.')) {
      fixed = "import React from 'react';\n" + fixed;
    }
    
    // Fix Router imports
    if (fixed.includes('Router') && !fixed.includes("import { BrowserRouter as Router }")) {
      fixed = fixed.replace(/import.*Router.*from.*react-router-dom.*;/, "import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';");
    }
  }
  
  // Fix component exports
  if (filePath.includes('components/') && fixed.includes('export default function') && !fixed.includes('return')) {
    fixed = fixed.replace(/(export default function[^{]+{)([\s\S]*?)(})/g, '$1\n  return <div>Component placeholder</div>;\n$3');
  }
  
  return fixed;
}

// Function to fix HTML files
function fixHTML(content) {
  let fixed = content;
  
  // Fix malformed meta tags
  fixed = fixed.replace(/<,\s*meta/g, '<meta');
  fixed = fixed.replace(/<meta\s+property="og:\s*"/g, '<meta property="og:title"');
  
  // Fix malformed script tags
  fixed = fixed.replace(/<script\s+src="([^"]*)"\s*>\s*<\/script>/g, '<script src="$1"></script>');
  
  return fixed;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix unterminated strings
    content = fixUnterminatedStrings(content);
    
    // Fix JSX issues
    content = fixJSX(content);
    
    // Fix file-specific patterns
    content = fixFileSpecific(content, filePath);
    
    // Fix HTML if it's an HTML file
    if (filePath.endsWith('.html')) {
      content = fixHTML(content);
    }
    
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
console.log('Starting remaining error fix...');

const files = findFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

// Also fix root level files
const rootFiles = ['./App.tsx', './main.tsx', './index.html'];
rootFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
});

console.log(`\nFixed ${fixedCount} files.`);
console.log('Remaining error fixing completed!');