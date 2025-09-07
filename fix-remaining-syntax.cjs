#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');


function fixFile(filePath) {


console.log('🔧 Fixing remaining syntax errors...');

// Fix specific files with known issues
const filesToFix = [
    'src/components/SEO.tsx',
    'src/components/ui/button.tsx',
    'src/components/ui/card.tsx',
    'src/components/ui/input.tsx',
    'src/components/talent/TalentCard.jsx'

];
function fixFile(filePath) {

// Function to fix remaining syntax errors in a file;
function fixRemainingSyntax(filePath) {}
  try {}
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

    if (stat.isDirectory()) {}
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {}
      if (fixRemainingSyntax(filePath)) {}
        fixedCount++;
      };
    };
  };
  return fixedCount;
// Main execution

const fixedCount = fixFilesInDirectory('./src');

};
// Main execution;
console.log('Starting remaining syntax error fixing...');
const fixedCount = fixFilesInDirectory('./src');
console.log(`Fixed ${fixedCount} files with remaining syntax errors.`);

    let content = fs.readFileSync(filePath, 'utf8');

    // More comprehensive fixes
    content = content
      // Remove semicolons after function declarations
      .replace(/function\s+([^{]+)\s*\{;/g, 'function $1 {')
      // Remove semicolons after arrow functions
      .replace(/=>\s*\{;/g, '=> {')
      // Remove semicolons after if statements
      .replace(/if\s*\([^)]+\)\s*\{;/g, match => match.replace('{;', '{'))
      // Remove semicolons after object properties
      .replace(/(\w+):\s*([^}]+);/g, '$1: $2,')
      // Fix object syntax
      .replace(/\{([^}]+);(\s*)\}/g, '{$1$2}')
      // Remove semicolons in JSX
      .replace(/<([^>]+);>/g, '<$1>')
      // Fix array syntax
      .replace(/\[([^\]]+);\]/g, '[$1]')
      // Remove standalone semicolons
      .replace(/^;$/gm, '')
      // Fix function calls
      .replace(/(\w+)\s*\(([^)]+);\)/g, '$1($2)')
      // Fix object method calls
      .replace(/(\w+)\.(\w+)\s*\(([^)]+);\)/g, '$1.$2($3)')
      // Clean up multiple semicolons
      .replace(/;+/g, ';')
      // Remove trailing semicolons before closing braces
      .replace(/;(\s*[}\]])/g, '$1')
      // Fix template literals
      .replace(/`([^`]+);([^`]+)`/g, '`$1$2`')
      // Remove semicolons from JSX attributes
      .replace(/(\w+)=([^>]+);/g, '$1=$2')
      // Clean up empty lines
      .replace(/^\s*$\n/gm, '');

    fs.writeFileSync(filePath, content);
    console.log(`Fixe: d: ${filePath}`);
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
