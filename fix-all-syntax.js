#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix all remaining syntax issues
function fixAllSyntax(content) {
  let fixed = content;

  // Fix unterminated string literals in meta tags
  fixed = fixed.replace(/<title>([^<]*)<\/title>\s*\"\s*\n/g, '<title>$1</title>\n');
  fixed = fixed.replace(/<meta[^>]*content=\"([^\"]*)\"[^>]*>\s*\"\s*\n/g, '<meta name="description" content="$1" />\n');
  
  // Fix any remaining unterminated quotes
  fixed = fixed.replace(/\"\s*$/gm, '');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className=\"([^\"]*)\"\s*\"\s*\n/g, 'className="$1"\n');
  fixed = fixed.replace(/href=\"([^\"]*)\"\s*\"\s*\n/g, 'href="$1"\n');
  
  // Fix malformed JSX elements
  fixed = fixed.replace(/<(\w+)\s*\"\s*\n/g, '<$1\n');
  
  // Fix any remaining malformed returns
  fixed = fixed.replace(/return \(\s*$/gm, 'return (');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/>\s*\)\s*$/gm, '    </>\n  );');
  
  // Fix any remaining unterminated string literals
  fixed = fixed.replace(/\"\s*$/gm, '');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export default function (\w+)\(\) \{\s*return \(\s*$/gm, 
    'export default function $1() {\n  return (');
  
  // Fix any remaining malformed JSX
  fixed = fixed.replace(/<(\w+)\s*\"\s*$/gm, '<$1');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAllSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed all syntax in: ${filePath}`);
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
  console.log(`Fixed all syntax in ${totalFixed} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixAllSyntax, processFile };