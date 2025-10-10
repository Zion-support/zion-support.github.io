#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix missing space before 'from' in import statements
  fixed = fixed.replace(/import\s+([^}]+)from\s+/g, 'import $1 from ');
  
  // Fix extra closing braces in import statements
  fixed = fixed.replace(/import\s+([^}]+)}\s*from\s+/g, 'import $1 from ');
  
  // Fix extra closing braces in import statements (multiple occurrences)
  fixed = fixed.replace(/import\s+([^}]+)}}from\s+/g, 'import $1 from ');
  
  // Fix extra commas in function declarations
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{,\s*/g, 'const $1: React.FC = () => {\n  ');
  
  // Fix missing semicolons after lazy load comments
  fixed = fixed.replace(/\/\/ Lazy load pages for better performance;\s*\n/g, '// Lazy load pages for better performance\n');
  
  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(\w+)\s*=\s*useState\([^)]+\)\s*\n/g, '$1 = useState($2);\n');
  
  // Fix JSX fragment syntax issues
  fixed = fixed.replace(/<>([^<]*?)<\/>/g, (match, content) => {
    if (content.trim().includes('{') && content.trim().includes('}')) {
      return `<>${content}</>`;
    }
    return match;
  });
  
  // Fix missing spaces in object destructuring
  fixed = fixed.replace(/\{([^}]+)\}from/g, '{ $1 } from');
  
  // Fix extra commas in object destructuring
  fixed = fixed.replace(/\{([^}]+),\s*\}from/g, '{ $1 } from');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
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
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, processFile };