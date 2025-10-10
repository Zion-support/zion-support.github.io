#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix import statements
function fixImportStatements(content) {
  // Fix }from -> } from
  content = content.replace(/}\s*from\s*/g, '} from ');
  
  // Fix }}from -> } from
  content = content.replace(/}\s*}\s*from\s*/g, '} from ');
  
  // Fix }}}from -> } from
  content = content.replace(/}\s*}\s*}\s*from\s*/g, '} from ');
  
  // Fix missing spaces in destructured imports like {a,b}from -> {a, b} from
  content = content.replace(/\{\s*([^}]+)\s*\}\s*from\s*/g, (match, imports) => {
    const fixedImports = imports.split(',').map(imp => imp.trim()).join(', ');
    return `{ ${fixedImports} } from `;
  });
  
  // Fix function declarations with trailing commas
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{,\s*/g, 'const $1: React.FC = () => {\n  ');
  
  // Fix return statements with missing parentheses
  content = content.replace(/return\s*\(\<\>\)\s*/g, 'return (\n    <>\n  ');
  
  // Fix missing semicolons after lazy load comments
  content = content.replace(/\/\/ Lazy load pages for better performance;\s*/g, '// Lazy load pages for better performance\n');
  
  return content;
}

// Function to fix merge conflict markers
function fixMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/^<<<<<<<.*$/gm, '');
  content = content.replace(/^=======.*$/gm, '');
  content = content.replace(/^>>>>>>>.*$/gm, '');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix import statements
    content = fixImportStatements(content);
    
    // Fix merge conflicts
    content = fixMergeConflicts(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
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
    'app/components/**/*.tsx',
    'app/components/**/*.ts'
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
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

if (require.main === module) {
  main();
}

module.exports = { fixImportStatements, fixMergeConflicts, processFile };