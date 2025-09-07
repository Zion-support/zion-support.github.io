#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix import statements with commas instead of semicolons
    const importRegex = /^import\s+.*?,\s*$/gm;
    const matches = content.match(importRegex);
    if (matches) {
      content = content.replace(importRegex, (match) => {
        return match.replace(/,\s*$/, ';');
      });
      modified = true;
    }

    // Fix interface properties with commas instead of semicolons
    const interfaceRegex = /interface\s+\w+\s*\{[^}]*\}/gs;
    content = content.replace(interfaceRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,;]+),\s*$/gm, '$1: $2;');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix type definitions with commas instead of semicolons
    const typeRegex = /type\s+\w+\s*=\s*\{[^}]*\}/gs;
    content = content.replace(typeRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,;]+),\s*$/gm, '$1: $2;');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix object properties with commas instead of semicolons
    const objectRegex = /const\s+\w+\s*=\s*\{[^}]*\}/gs;
    content = content.replace(objectRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,;]+),\s*$/gm, '$1: $2;');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix function parameters with commas instead of semicolons
    const functionRegex = /function\s+\w+\s*\([^)]*\)/g;
    content = content.replace(functionRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,)]+),\s*/g, '$1: $2, ');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix arrow function parameters with commas instead of semicolons
    const arrowFunctionRegex = /\([^)]*\)\s*=>/g;
    content = content.replace(arrowFunctionRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,)]+),\s*/g, '$1: $2, ');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix destructuring with commas instead of semicolons
    const destructuringRegex = /const\s+\{[^}]*\}\s*=/g;
    content = content.replace(destructuringRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,}]+),\s*/g, '$1: $2, ');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix array destructuring with commas instead of semicolons
    const arrayDestructuringRegex = /const\s+\[[^\]]*\]\s*=/g;
    content = content.replace(arrayDestructuringRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,\]]+),\s*/g, '$1: $2, ');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix React component props with commas instead of semicolons
    const componentPropsRegex = /interface\s+\w+Props\s*\{[^}]*\}/gs;
    content = content.replace(componentPropsRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,;]+),\s*$/gm, '$1: $2;');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix generic type parameters with commas instead of semicolons
    const genericRegex = /<[^>]*>/g;
    content = content.replace(genericRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,>]+),\s*/g, '$1: $2, ');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix export statements with commas instead of semicolons
    const exportRegex = /^export\s+.*?,\s*$/gm;
    content = content.replace(exportRegex, (match) => {
      return match.replace(/,\s*$/, ';');
    });

    // Fix variable declarations with commas instead of semicolons
    const varRegex = /^(const|let|var)\s+.*?,\s*$/gm;
    content = content.replace(varRegex, (match) => {
      return match.replace(/,\s*$/, ';');
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process all files
function main() {
  const patterns = [
    'src/**/*.tsx',
    'src/**/*.ts',
    'src/**/*.jsx',
    'src/**/*.js'
  ];

  let totalFiles = 0;
  let fixedFiles = 0;

  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    totalFiles += files.length;

    files.forEach(file => {
      if (fixSyntaxErrors(file)) {
        fixedFiles++;
      }
    });
  });

  console.log(`\nProcessed ${totalFiles} files`);
  console.log(`Fixed syntax errors in ${fixedFiles} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors };