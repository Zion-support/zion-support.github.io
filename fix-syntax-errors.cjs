#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors
    content = content
      // Fix unterminated string literals with single quotes
      .replace(/'([^']*?)\n/g, "'$1'\n")
      // Fix unterminated string literals with double quotes
      .replace(/"([^"]*?)\n/g, '"$1"\n')
      // Fix extra commas in object properties
      .replace(/,(\s*[}\]])/g, '$1')
      // Fix semicolons in object properties
      .replace(/(\w+):\s*"([^"]*)"\s*;\s*}/g, '$1: "$2" }')
      // Fix malformed JSX
      .replace(/>\s*;\s*</g, '><')
      .replace(/>\s*;\s*$/gm, '>')
      // Fix duplicate color properties
      .replace(/(\w+):\s*"([^"]*)"\s*}\s*\1:\s*"([^"]*)"\s*}/g, '$1: "$2" }')
      // Fix stray semicolons in JSX attributes
      .replace(/(\w+)="([^"]*)"\s*;\s*>/g, '$1="$2">')
      // Fix missing closing braces
      .replace(/(\w+):\s*"([^"]*)"\s*,\s*$/gm, '$1: "$2",')
      // Fix malformed function calls
      .replace(/(\w+)\s*\(\s*\)\s*{\s*$/gm, '$1() {\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('Starting syntax error fixes...');
  
  // Find all TypeScript and JSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'api/**/*.js',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (fixFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`Fixed ${totalFixed} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };