#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix Link component quote issues
function fixLinkQuotes(content) {
  let fixed = content;

  // Fix the specific pattern: <Link " followed by href="..." "
  fixed = fixed.replace(/<Link\s*\"\s*\n\s*href=\"([^\"]*)\"\s*\"\s*\n/g, 
    '<Link\n              href="$1"\n');
  
  // Fix any remaining unterminated quotes in Link components
  fixed = fixed.replace(/<Link\s*\"\s*\n/g, '<Link\n');
  
  // Fix href attributes with unterminated quotes
  fixed = fixed.replace(/href=\"([^\"]*)\"\s*\"\s*\n/g, 'href="$1"\n');
  
  // Fix className attributes with unterminated quotes
  fixed = fixed.replace(/className=\"([^\"]*)\"\s*\"\s*\n/g, 'className="$1"\n');
  
  // Fix any remaining unterminated quotes at end of lines
  fixed = fixed.replace(/\"\s*$/gm, '"');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixLinkQuotes(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed Link quotes in: ${filePath}`);
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
  console.log(`Fixed Link quotes in ${totalFixed} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixLinkQuotes, processFile };