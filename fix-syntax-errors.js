#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;

  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/className\s*=\s*"[^"]*$/gm, (match) => {
    if (!match.endsWith('"')) {
      return match + '"';
    }
    return match;
  });

  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<(\w+)\s*\)/g, '</$1>');
  fixed = fixed.replace(/<(\w+)\s*\)\s*>/g, '</$1>');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/const\s+(\w+):\s*"React\.FC<[^>]*>\s*=\s*\(\s*{\s*([^}]*)\s*"\s*\)\s*=>/g, 
    'const $1: React.FC<$1Props> = ({ $2 }) =>');
  
  // Fix unterminated string literals in general
  fixed = fixed.replace(/([^\\])"([^"]*)$/gm, '$1"$2"');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className\s*=\s*{\s*([^}]*)\s*$/gm, 'className={`$1`}');
  
  // Fix missing closing parentheses in function calls
  fixed = fixed.replace(/onClick\s*=\s*\(\s*\(\s*\)\s*=>\s*{\s*([^}]*)\s*$/gm, 'onClick={() => { $1 }}');
  
  // Fix malformed object literals
  fixed = fixed.replace(/{\s*([^}]*)\s*$/gm, (match, content) => {
    if (content.trim() && !content.includes('}')) {
      return `{ ${content} }`;
    }
    return match;
  });

  // Fix unterminated template literals
  fixed = fixed.replace(/`([^`]*)$/gm, '`$1`');
  
  // Fix malformed arrow functions
  fixed = fixed.replace(/\(\s*{\s*([^}]*)\s*"\s*\)\s*=>/g, '({ $1 }) =>');
  
  // Fix missing semicolons in imports
  fixed = fixed.replace(/import\s+[^;]+$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });

  // Fix malformed JSX elements
  fixed = fixed.replace(/<(\w+)\s*\)\s*>/g, '</$1>');
  
  // Fix unterminated comments
  fixed = fixed.replace(/\/\*([^*]|\*[^/])*$/gm, (match) => {
    if (!match.endsWith('*/')) {
      return match + '*/';
    }
    return match;
  });

  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*$/gm, 'return (');
  
  // Fix missing closing braces
  const openBraces = (fixed.match(/{/g) || []).length;
  const closeBraces = (fixed.match(/}/g) || []).length;
  if (openBraces > closeBraces) {
    fixed += '}'.repeat(openBraces - closeBraces);
  }

  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/<\/>\s*$/gm, '</>');

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
  console.log(`Fixed ${totalFixed} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, processFile };