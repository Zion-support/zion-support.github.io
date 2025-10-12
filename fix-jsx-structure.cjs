#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix JSX structure issues
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix missing closing tags for common elements
  fixed = fixed
    // Fix div elements
    .replace(/<div([^>]*)>\s*$/gm, '<div$1></div>')
    // Fix p elements
    .replace(/<p([^>]*)>\s*$/gm, '<p$1></p>')
    // Fix span elements
    .replace(/<span([^>]*)>\s*$/gm, '<span$1></span>')
    // Fix section elements
    .replace(/<section([^>]*)>\s*$/gm, '<section$1></section>')
    // Fix h1, h2, h3, h4, h5, h6 elements
    .replace(/<h([1-6])([^>]*)>\s*$/gm, '<h$1$2></h$1>')
    // Fix button elements
    .replace(/<button([^>]*)>\s*$/gm, '<button$1></button>')
    // Fix Link elements
    .replace(/<Link([^>]*)>\s*$/gm, '<Link$1></Link>');
  
  // Fix malformed JSX structure
  fixed = fixed
    // Fix self-closing tags that should be closed
    .replace(/<([A-Z][a-zA-Z]*)([^>]*)\s*\/>\s*$/gm, '<$1$2></$1>')
    // Fix missing closing tags for custom components
    .replace(/<FuturisticButton([^>]*)>\s*$/gm, '<FuturisticButton$1></FuturisticButton>')
    .replace(/<FuturisticCard([^>]*)>\s*$/gm, '<FuturisticCard$1></FuturisticCard>')
    .replace(/<FuturisticBackground([^>]*)>\s*$/gm, '<FuturisticBackground$1></FuturisticBackground>');
  
  // Fix duplicate content and malformed structure
  fixed = fixed
    // Remove duplicate closing tags
    .replace(/(<\/[^>]+>)\s*\1/g, '$1')
    // Fix missing opening tags
    .replace(/<\/div>\s*<div([^>]*)>\s*$/gm, '<div$1></div>')
    // Fix malformed JSX expressions
    .replace(/(<[^>]+>)\s*([^<]+)\s*$/gm, (match, tag, content) => {
      if (content.trim() && !content.includes('<')) {
        const tagName = tag.match(/<(\w+)/)[1];
        return `${tag}${content}</${tagName}>`;
      }
      return match;
    });
  
  // Clean up extra whitespace
  fixed = fixed
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/^\s+$/gm, '');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXStructure(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✓ Fixed JSX structure in: ${filePath}`);
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
  console.log('Starting JSX structure fixes...');
  
  // Find all TypeScript and JSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    });
  });
  
  console.log(`\nJSX structure fixes complete!`);
  console.log(`Total files processed: ${totalFiles}`);
  console.log(`Files with JSX structure fixed: ${fixedFiles}`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { fixJSXStructure, processFile };