#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix targeted syntax errors in TSX files
function fixTargetedSyntax(content) {
  let fixed = content;
  
  // Fix semicolons after array elements in object properties
  fixed = fixed.replace(/(\w+):\s*(\[[^\]]*\]);\s*$/gm, '$1: $2');
  
  // Fix semicolons after object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+);\s*$/gm, '$1: $2');
  
  // Fix semicolons after array elements
  fixed = fixed.replace(/(\s*)([^,{}\[\]]+);\s*$/gm, '$1$2');
  
  // Fix semicolons after object properties with objects
  fixed = fixed.replace(/(\w+):\s*(\{[^}]*\});\s*$/gm, '$1: $2');
  
  // Fix semicolons after string literals in object properties
  fixed = fixed.replace(/(\w+):\s*(['"`][^'"`]*['"`]);\s*$/gm, '$1: $2');
  
  // Fix semicolons after function calls
  fixed = fixed.replace(/(\w+\([^)]*\));\s*$/gm, '$1');
  
  // Fix semicolons after string literals
  fixed = fixed.replace(/(['"`][^'"`]*['"`]);\s*$/gm, '$1');
  
  // Fix semicolons after template literals
  fixed = fixed.replace(/(`[^`]*`);\s*$/gm, '$1');
  
  // Fix semicolons after JSX expressions
  fixed = fixed.replace(/(\{[^}]*\});\s*$/gm, '$1');
  
  // Fix semicolons after comments
  fixed = fixed.replace(/(\/\/[^\n]*);\s*$/gm, '$1');
  fixed = fixed.replace(/(\/\*[\s\S]*?\*\/);\s*$/gm, '$1');
  
  // Fix semicolons after variable declarations
  fixed = fixed.replace(/(const|let|var)\s+(\w+)\s*=\s*([^;]+);\s*$/gm, '$1 $2 = $3');
  
  // Fix semicolons after import statements
  fixed = fixed.replace(/(import\s+[^;]+);\s*$/gm, '$1');
  
  // Fix semicolons after export statements
  fixed = fixed.replace(/(export\s+[^;]+);\s*$/gm, '$1');
  
  // Fix malformed JSX with semicolons
  fixed = fixed.replace(/(<[^>]+>);\s*$/gm, '$1');
  
  // Fix semicolons after JSX closing tags
  fixed = fixed.replace(/(<\/[^>]+>);\s*$/gm, '$1');
  
  // Fix semicolons after JSX self-closing tags
  fixed = fixed.replace(/(<[^>]+\/>);\s*$/gm, '$1');
  
  // Fix semicolons after JSX fragments
  fixed = fixed.replace(/(<>|<\/>);\s*$/gm, '$1');
  
  // Fix semicolons after JSX expressions in attributes
  fixed = fixed.replace(/(\{[^}]*\});\s*$/gm, '$1');
  
  // Remove standalone semicolons on their own lines
  fixed = fixed.replace(/^\s*;\s*$/gm, '');
  
  // Fix malformed JSX structure - remove semicolons after opening tags
  fixed = fixed.replace(/(<[A-Za-z][^>]*>);\s*$/gm, '$1');
  
  // Fix semicolons after React component declarations
  fixed = fixed.replace(/(const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{);\s*$/gm, '$1');
  
  // Fix semicolons after return statements
  fixed = fixed.replace(/(return\s*\([^)]*\));\s*$/gm, '$1');
  
  // Fix semicolons after JSX return
  fixed = fixed.replace(/(return\s*<[^>]+>);\s*$/gm, '$1');
  
  // Fix semicolons after array declarations
  fixed = fixed.replace(/(const\s+\w+\s*=\s*\[);\s*$/gm, '$1');
  
  // Fix semicolons after object declarations
  fixed = fixed.replace(/(const\s+\w+\s*=\s*\{);\s*$/gm, '$1');
  
  // Fix semicolons after function calls
  fixed = fixed.replace(/(\w+\([^)]*\));\s*$/gm, '$1');
  
  // Fix semicolons after string literals
  fixed = fixed.replace(/(['"`][^'"`]*['"`]);\s*$/gm, '$1');
  
  // Fix semicolons after template literals
  fixed = fixed.replace(/(`[^`]*`);\s*$/gm, '$1');
  
  // Fix semicolons after JSX expressions
  fixed = fixed.replace(/(\{[^}]*\});\s*$/gm, '$1');
  
  // Fix semicolons after comments
  fixed = fixed.replace(/(\/\/[^\n]*);\s*$/gm, '$1');
  fixed = fixed.replace(/(\/\*[\s\S]*?\*\/);\s*$/gm, '$1');
  
  // Clean up multiple empty lines
  fixed = fixed.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixTargetedSyntax(content);
    
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
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixTargetedSyntax, processFile };