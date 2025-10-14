#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix JSX structure issues
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix malformed h1 tags with spans
  fixed = fixed.replace(/<h1>([^<]+)<\/h1><span[^>]*>\s*([^<]+)\s*<\/span>\s*<\/h1>/g, '<h1>$1 <span>$2</span></h1>');
  
  // Fix malformed p tags
  fixed = fixed.replace(/<p[^>]*><\/p>\s*([^<]+)\s*<\/p>/g, '<p>$1</p>');
  
  // Fix malformed Link components
  fixed = fixed.replace(/<Link[^>]*><\/Link>\s*([^<]+)\s*<(\w+[^>]*)>\s*([^<]+)\s*<\/\2>\s*<\/Link>/g, '<Link>$1 <$2>$3</$2></Link>');
  fixed = fixed.replace(/<Link[^>]*><\/Link>\s*([^<]+)\s*<\/Link>/g, '<Link>$1</Link>');
  
  // Fix malformed div structure
  fixed = fixed.replace(/<div[^>]*><\/div>\s*<div[^>]*>/g, '<div>\n        <div>');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<section[^>]*>\s*<div[^>]*>\s*<div[^>]*>\s*<h1[^>]*>([^<]+)<\/h1>/g, '<section>\n        <div>\n          <div>\n            <h1>$1</h1>');
  
  // Fix malformed section structure
  fixed = fixed.replace(/<section>\s*<div>\s*<div>\s*<h1[^>]*>([^<]+)<\/h1>/g, '<section>\n        <div>\n          <div>\n            <h1>$1</h1>');
  
  // Fix empty JSX elements
  fixed = fixed.replace(/<(\w+)[^>]*><\/\1>/g, '<$1 />');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>\n          </div>\n        </div>\n      </div>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXStructure(content);
    
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

// Main function
function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, {
      ignore: ['node_modules/**', 'dist/**', 'build/**', '.next/**']
    });
    
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

main();