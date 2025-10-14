#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix final syntax errors
function fixFinalErrors(content) {
  let fixed = content;
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<div><\/div>\s*<(\w+)/g, '<div>\n      <$1');
  fixed = fixed.replace(/<\/div>\s*<div className="min-h-screen/g, '</div>\n      <div className="min-h-screen');
  
  // Fix malformed section tags
  fixed = fixed.replace(/<section[^>]*><\/section>\s*<div>/g, '<section>\n        <div>');
  fixed = fixed.replace(/<\/div>\s*<\/section>/g, '</div>\n      </section>');
  
  // Fix malformed h1 tags
  fixed = fixed.replace(/<h1[^>]*><\/h1>\s*([^<]+)/g, '<h1>$1</h1>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/div>/g, '</div>\n        </div>\n      </div>');
  
  // Fix empty JSX elements
  fixed = fixed.replace(/<(\w+)[^>]*><\/\1>/g, '<$1 />');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*<div>\s*<EnhancedSEO[^>]*><\/EnhancedSEO>\s*<div[^>]*>/g, 'return (\n    <div>\n      <EnhancedSEO');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div[^>]*>\s*<section[^>]*>\s*<div[^>]*>\s*<h1[^>]*>([^<]+)<\/h1>/g, '<div>\n      <section>\n        <div>\n          <h1>$1</h1>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixFinalErrors(content);
    
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