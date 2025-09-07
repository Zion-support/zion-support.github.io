#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix remaining syntax errors
function fixRemainingSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing semicolons after variable declarations
    content = content.replace(/^(\s*)(const|let|var)\s+[^=]+=\s*[^;]+$/gm, (match, indent, keyword) => {
      if (!match.endsWith(';')) {
        modified = true;
        return match + ';';
      }
      return match;
    });

    // Fix missing semicolons after function calls
    content = content.replace(/^(\s*)([a-zA-Z_$][a-zA-Z0-9_$]*\.[a-zA-Z_$][a-zA-Z0-9_$]*\([^)]*\))\s*$/gm, (match, indent, call) => {
      if (!match.endsWith(';') && !match.includes('if') && !match.includes('for') && !match.includes('while')) {
        modified = true;
        return match + ';';
      }
      return match;
    });

    // Fix missing commas in object literals
    content = content.replace(/(\w+)\s*:\s*([^,}]+)\s*$/gm, (match, key, value) => {
      if (match.includes(':')) {
        const trimmed = match.trim();
        if (!trimmed.endsWith(',') && !trimmed.endsWith('}') && !trimmed.endsWith(';')) {
          modified = true;
          return match.replace(/\s*$/, ',');
        }
      }
      return match;
    });

    // Fix missing semicolons in interface properties
    content = content.replace(/interface\s+\w+\s*\{[^}]*\}/gs, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,;]+)\s*$/gm, '$1: $2;');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix missing semicolons in type definitions
    content = content.replace(/type\s+\w+\s*=\s*\{[^}]*\}/gs, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,;]+)\s*$/gm, '$1: $2;');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix missing commas in function parameters
    content = content.replace(/\([^)]*\)\s*=>/g, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,)]+)\s*$/gm, '$1: $2,');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix missing semicolons after import statements
    content = content.replace(/^import\s+.*?,\s*$/gm, (match) => {
      return match.replace(/,\s*$/, ';');
    });

    // Fix missing semicolons after export statements
    content = content.replace(/^export\s+.*?,\s*$/gm, (match) => {
      return match.replace(/,\s*$/, ';');
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed remaining syntax errors in: ${filePath}`);
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
      if (fixRemainingSyntax(file)) {
        fixedFiles++;
      }
    });
  });

  console.log(`\nProcessed ${totalFiles} files`);
  console.log(`Fixed remaining syntax errors in ${fixedFiles} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixRemainingSyntax };