#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix common TypeScript/JSX syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals by adding missing quotes
  fixed = fixed.replace(/import\s+React\s+from\s+["']react["'];\s*$/gm, 'import React from "react";');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/<\/>\s*$/gm, '</>');
  
  // Fix missing closing tags for common elements
  fixed = fixed.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
  fixed = fixed.replace(/<section([^>]*)>\s*$/gm, '<section$1>');
  fixed = fixed.replace(/<button([^>]*)>\s*$/gm, '<button$1>');
  fixed = fixed.replace(/<span([^>]*)>\s*$/gm, '<span$1>');
  
  // Fix malformed object literals
  fixed = fixed.replace(/\{\s*([^}]*)\s*:\s*([^,}]*)\s*,\s*$/gm, '{\n  $1: $2,\n');
  
  // Fix unterminated template literals
  fixed = fixed.replace(/`([^`]*)\s*$/gm, '`$1`');
  
  // Fix missing semicolons
  fixed = fixed.replace(/([^;}])\s*$/gm, '$1;');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/function\s+(\w+)\s*\(\s*\)\s*\{\s*$/gm, 'function $1() {\n  ');
  
  // Fix malformed arrow functions
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*\{\s*$/gm, 'const $1 = () => {\n  ');
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{\s*([^}]*)\s*\}\s*$/gm, '{$1}');
  
  // Fix missing return statements
  fixed = fixed.replace(/return\s*\(\s*$/gm, 'return (\n    ');
  
  // Fix malformed export statements
  fixed = fixed.replace(/export\s+default\s+(\w+)\s*;\s*$/gm, 'export default $1;');
  
  // Fix missing closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces;
    fixed += '\n' + '}'.repeat(missingBraces);
  }
  
  // Fix missing closing parentheses
  const openParens = (fixed.match(/\(/g) || []).length;
  const closeParens = (fixed.match(/\)/g) || []).length;
  if (openParens > closeParens) {
    const missingParens = openParens - closeParens;
    fixed += ')'.repeat(missingParens);
  }
  
  return fixed;
}

// Function to fix specific file types
function fixFileType(content, filePath) {
  let fixed = content;
  
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    // Fix React component structure
    if (!fixed.includes('import React')) {
      fixed = 'import React from "react";\n' + fixed;
    }
    
    // Fix JSX structure
    fixed = fixed.replace(/return\s*\(\s*$/gm, 'return (\n    ');
    fixed = fixed.replace(/\)\s*;\s*$/gm, '\n  );\n}');
    
    // Fix missing closing tags
    const openTags = fixed.match(/<(\w+)([^>]*)>/g) || [];
    const closeTags = fixed.match(/<\/(\w+)>/g) || [];
    
    for (const openTag of openTags) {
      const tagName = openTag.match(/<(\w+)/)[1];
      const closeTag = `</${tagName}>`;
      const openCount = (fixed.match(new RegExp(`<${tagName}([^>]*)>`, 'g')) || []).length;
      const closeCount = (fixed.match(new RegExp(`</${tagName}>`, 'g')) || []).length;
      
      if (openCount > closeCount && !fixed.includes(closeTag)) {
        fixed += `\n  ${closeTag}`;
      }
    }
  }
  
  return fixed;
}

// Main function to process files
async function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'app/**/*.jsx',
    'app/**/*.js'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalFiles++;
      try {
        const content = fs.readFileSync(file, 'utf8');
        let fixed = fixSyntaxErrors(content);
        fixed = fixFileType(fixed, file);
        
        if (fixed !== content) {
          fs.writeFileSync(file, fixed, 'utf8');
          console.log(`Fixed: ${file}`);
          fixedFiles++;
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

// Run the fix
processFiles();