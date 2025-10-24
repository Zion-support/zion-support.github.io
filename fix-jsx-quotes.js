#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix JSX quote issues
function fixJSXQuotes(content) {
  let fixed = content;

  // Fix unterminated quotes in JSX attributes
  fixed = fixed.replace(/href=\"\s*\n/g, 'href="/\n');
  fixed = fixed.replace(/className=\"\s*\n/g, 'className="\n');
  fixed = fixed.replace(/src=\"\s*\n/g, 'src="\n');
  fixed = fixed.replace(/alt=\"\s*\n/g, 'alt="\n');
  
  // Fix unterminated quotes at end of lines
  fixed = fixed.replace(/\"\s*$/gm, '"');
  
  // Fix text content with unterminated quotes
  fixed = fixed.replace(/Get Started\"\s*$/gm, 'Get Started');
  fixed = fixed.replace(/Learn More\"\s*$/gm, 'Learn More');
  fixed = fixed.replace(/Contact Us\"\s*$/gm, 'Contact Us');
  fixed = fixed.replace(/Read More\"\s*$/gm, 'Read More');
  
  // Fix JSX closing tags with quotes
  fixed = fixed.replace(/<\/\w+>\"\s*$/gm, (match) => match.replace('"', ''));
  
  // Fix paragraph content with quotes
  fixed = fixed.replace(/Professional Page services designed to help your business grow and succeed\.\"\s*$/gm, 
    'Professional Page services designed to help your business grow and succeed.');
  
  // Fix any remaining unterminated string literals in JSX
  fixed = fixed.replace(/\"\s*\n\s*className/g, '"\n              className');
  fixed = fixed.replace(/\"\s*\n\s*href/g, '"\n                href');
  
  // Fix specific patterns we've seen
  fixed = fixed.replace(/href=\"\s*\n\s*className/g, 'href="/contact"\n              className');
  fixed = fixed.replace(/className=\"\s*\n\s*inline-flex/g, 'className="inline-flex');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXQuotes(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed JSX quotes in: ${filePath}`);
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
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.ts'
  ];

  let totalFixed = 0;
  let totalProcessed = 0;

  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      totalProcessed++;
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });

  console.log(`\nProcessed ${totalProcessed} files`);
  console.log(`Fixed JSX quotes in ${totalFixed} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixJSXQuotes, processFile };