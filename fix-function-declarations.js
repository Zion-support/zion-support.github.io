#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix function declarations
function fixFunctionDeclarations(content) {
  let fixed = content;

  // Fix malformed function declarations
  fixed = fixed.replace(/export default function ServicePage\(\) \{ return \(/g, 
    'export default function ServicePage() {\n  return (');
  
  // Fix malformed function declarations with different names
  fixed = fixed.replace(/export default function (\w+)\(\) \{ return \(/g, 
    'export default function $1() {\n  return (');
  
  // Fix any remaining malformed function declarations
  fixed = fixed.replace(/function (\w+)\(\) \{ return \(/g, 
    'function $1() {\n  return (');
  
  // Fix const function declarations
  fixed = fixed.replace(/const (\w+) = \(\) => \{ return \(/g, 
    'const $1 = () => {\n  return (');
  
  // Fix arrow function declarations
  fixed = fixed.replace(/const (\w+) = \(\) => \(/g, 
    'const $1 = () => (');
  
  // Fix malformed JSX returns
  fixed = fixed.replace(/return \(\s*<>\s*$/gm, 'return (\n    <>');
  
  // Fix closing braces and parentheses
  fixed = fixed.replace(/<\/>\s*\)\s*$/gm, '    </>\n  );');
  
  // Fix any remaining malformed returns
  fixed = fixed.replace(/return \(\s*$/gm, 'return (');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixFunctionDeclarations(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed function declarations in: ${filePath}`);
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
  console.log(`Fixed function declarations in ${totalFixed} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFunctionDeclarations, processFile };