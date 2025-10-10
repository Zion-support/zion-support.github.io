#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix semicolons after JSX elements
  fixed = fixed.replace(/\/>;/g, '/>');
  fixed = fixed.replace(/<\/[^>]+>;/g, (match) => match.slice(0, -1));
  
  // Fix missing closing tags for buttons
  fixed = fixed.replace(/<button[^>]*>([^<]+);\s*<\/\s*$/gm, '<button$1></button>');
  
  // Fix incomplete JSX tags
  fixed = fixed.replace(/<(\w+)[^>]*>\s*([^<]+);\s*<\/\s*$/gm, '<$1>$2</$1>');
  
  // Fix duplicate React imports
  fixed = fixed.replace(/import React from 'react';\s*import React, {[^}]+} from 'react';/g, 
    (match) => match.replace(/import React from 'react';\s*/, ''));
  
  // Fix missing closing tags for common elements
  const commonTags = ['div', 'section', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'ul', 'ol', 'li'];
  commonTags.forEach(tag => {
    const regex = new RegExp(`<${tag}[^>]*>([^<]+);\\s*$`, 'gm');
    fixed = fixed.replace(regex, `<${tag}>$1</${tag}>`);
  });
  
  // Fix JSX expressions with semicolons
  fixed = fixed.replace(/\{([^}]+)\};/g, '{$1}');
  
  // Fix incomplete closing tags
  fixed = fixed.replace(/<\/\s*$/gm, '');
  
  // Fix extra semicolons at end of lines in JSX
  fixed = fixed.replace(/;\s*$/gm, '');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      console.log(`Fixing: ${filePath}`);
      fs.writeFileSync(filePath, fixedContent, 'utf8');
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
  const files = process.argv.slice(2);
  
  if (files.length === 0) {
    console.log('Usage: node fix-syntax-errors.cjs <file1> <file2> ...');
    process.exit(1);
  }
  
  let processedCount = 0;
  let errorCount = 0;
  
  files.forEach(file => {
    if (processFile(file)) {
      processedCount++;
    } else {
      errorCount++;
    }
  });
  
  console.log(`\nProcessed ${processedCount} files with syntax errors`);
  console.log(`Errors: ${errorCount}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, processFile };