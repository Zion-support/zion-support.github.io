#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Remove stray single quotes at the end of files
  fixed = fixed.replace(/\n'+\s*$/g, '');
  fixed = fixed.replace(/\n'+\s*$/gm, '');
  
  // Fix unterminated string literals by adding closing quotes
  const lines = fixed.split('\n');
  const fixedLines = lines.map((line, index) => {
    // Skip empty lines and comments
    if (line.trim() === '' || line.trim().startsWith('//') || line.trim().startsWith('*')) {
      return line;
    }
    
    // Check for unterminated string literals
    const singleQuotes = (line.match(/'/g) || []).length;
    const doubleQuotes = (line.match(/"/g) || []).length;
    
    // If odd number of quotes, likely unterminated
    if (singleQuotes % 2 !== 0) {
      // Look for the last single quote and add closing quote
      const lastSingleQuote = line.lastIndexOf("'");
      if (lastSingleQuote !== -1) {
        // Check if it's already properly closed
        const afterQuote = line.substring(lastSingleQuote + 1).trim();
        if (afterQuote && !afterQuote.endsWith(';') && !afterQuote.endsWith(',') && !afterQuote.endsWith(')') && !afterQuote.endsWith('}') && !afterQuote.endsWith(']')) {
          line = line + "'";
        }
      }
    }
    
    if (doubleQuotes % 2 !== 0) {
      // Look for the last double quote and add closing quote
      const lastDoubleQuote = line.lastIndexOf('"');
      if (lastDoubleQuote !== -1) {
        // Check if it's already properly closed
        const afterQuote = line.substring(lastDoubleQuote + 1).trim();
        if (afterQuote && !afterQuote.endsWith(';') && !afterQuote.endsWith(',') && !afterQuote.endsWith(')') && !afterQuote.endsWith('}') && !afterQuote.endsWith(']')) {
          line = line + '"';
        }
      }
    }
    
    return line;
  });
  
  fixed = fixedLines.join('\n');
  
  // Fix malformed JSX and function declarations
  fixed = fixed.replace(/export default function\s+\w+\(\)\s*\{\s*\}\s*return\s*\(/g, 'export default function Component() {\n  return (');
  fixed = fixed.replace(/const\s+\w+\s*=\s*\(\)\s*=>\s*\{\s*\}\s*return\s*\(/g, 'const Component = () => {\n  return (');
  
  // Fix missing closing braces and parentheses
  fixed = fixed.replace(/\}\s*\)\s*;\s*\}\s*$/gm, '});');
  fixed = fixed.replace(/\}\s*\)\s*;\s*\}\s*'$/gm, '});');
  
  // Fix malformed imports
  fixed = fixed.replace(/import\s+React[^;]*;\s*;\s*/g, 'import React from \'react\';\n');
  
  // Fix unterminated template literals
  fixed = fixed.replace(/`([^`]*)$/gm, '`$1`');
  
  // Fix malformed JSX return statements
  fixed = fixed.replace(/return\s*\(\s*<div[^>]*>\s*<\/div>\s*\)\s*;\s*return\s*\(\s*<div[^>]*>\s*<\/div>\s*\)\s*;/g, 'return (\n    <div>Page content</div>\n  );');
  
  // Clean up extra closing braces and parentheses
  fixed = fixed.replace(/\}\s*\)\s*;\s*\}\s*$/gm, '});');
  fixed = fixed.replace(/\}\s*\)\s*;\s*\}\s*'$/gm, '});');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export default function\s+\w+\(\)\s*\{\s*\}\s*return\s*\(/g, 'export default function Component() {\n  return (');
  
  // Fix unterminated JSX elements
  fixed = fixed.replace(/<div[^>]*>\s*$/gm, '<div>');
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*$/gm, '</div>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingErrors(content);
    
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
    'app/**/*.jsx',
    'app/**/*.js'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nFixed ${totalFixed} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixRemainingErrors, processFile };