#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix corrupted patterns in a file
function fixCorruptedFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common corruption patterns
    const fixes = [
      // Fix corrupted JSX tags
      { pattern: /<\[\\^>\*\]\/>/g, replacement: '<div>Placeholder</div>' },
      { pattern: /<\/\[\\^>\*\]>/g, replacement: '</div>' },
      
      // Fix corrupted comments
      { pattern: /\/\/\[\\^;\*\]/g, replacement: '//' },
      { pattern: /\/\*\[\\^;\*\]\*\//g, replacement: '' },
      
      // Fix corrupted Route elements
      { pattern: /<Route;\s*path="([^"]*)"\s*element=\{\s*<\[\\^>\*\]\/>\s*<\/\[\\^>\*\]>\s*\};\s*\/>;/g, 
        replacement: '<Route path="$1" element={<div>Page Content</div>} />' },
      
      // Fix corrupted JSX expressions
      { pattern: /element=\{\s*<\[\\^>\*\]\/>\s*<\/\[\\^>\*\]>\s*\};/g, 
        replacement: 'element={<div>Page Content</div>}' },
      
      // Fix corrupted JSX structure
      { pattern: /<\[\\^>\*\]\/>\s*<\/\[\\^>\*\]>\s*\};\s*\/>;/g, 
        replacement: '<div>Page Content</div>} />' },
      
      // Fix corrupted closing tags
      { pattern: /<\/\[\\^>\*\]>\s*\)\s*,;/g, replacement: '</div>)' },
      { pattern: /\)\s*,;\s*}\s*,;/g, replacement: ')}' },
    ];
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // If content changed, write it back
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

// Function to recursively process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      fixedCount += processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
      if (fixCorruptedFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting corruption fix process...');
const srcDir = path.join(__dirname, 'src.corrupted');
const fixedCount = processDirectory(srcDir);
console.log(`\nFixed ${fixedCount} files.`);
console.log('Corruption fix process completed.');