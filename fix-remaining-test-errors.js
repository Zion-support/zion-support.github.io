#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix remaining test file errors
function fixRemainingTestErrors(content) {
  let fixed = content;
  
  // Fix malformed imports with missing quotes
  fixed = fixed.replace(/import\s+([^;]+)\s*from\s*['"]([^'"]*);/g, 'import $1 from \'$2\';');
  
  // Fix imports without semicolons
  fixed = fixed.replace(/import\s+([^;]+)\s*from\s*['"]([^'"]+)['"]\s*(?![;])/g, 'import $1 from \'$2\';');
  
  // Fix malformed import statements
  fixed = fixed.replace(/import\s+([^;]+)\s*from\s*['"]([^'"]*)$/gm, 'import $1 from \'$2\';');
  
  // Fix unterminated describe statements
  fixed = fixed.replace(/describe\s*\(\s*['"]([^'"]*)$/gm, 'describe(\'$1\', () => {');
  
  // Fix unterminated it statements
  fixed = fixed.replace(/it\s*\(\s*['"]([^'"]*)$/gm, 'it(\'$1\', () => {');
  
  // Fix unterminated test statements
  fixed = fixed.replace(/test\s*\(\s*['"]([^'"]*)$/gm, 'test(\'$1\', () => {');
  
  // Fix unterminated expect statements
  fixed = fixed.replace(/expect\s*\(\s*['"]([^'"]*)$/gm, 'expect(\'$1\');');
  
  // Fix malformed function calls
  fixed = fixed.replace(/render\s*\(\s*<([^>]+)\s*\/>\s*\)\s*;?\s*$/gm, 'render(<$1 />);');
  
  // Fix malformed expect statements
  fixed = fixed.replace(/expect\s*\(\s*screen\.getByTestId\s*\(\s*['"]([^'"]*)\s*\)\s*\)\s*\.toBeInTheDocument\s*\(\s*\)\s*\)\s*;?\s*$/gm, 'expect(screen.getByTestId(\'$1\')).toBeInTheDocument();');
  
  // Fix missing closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  if (openBraces > closeBraces) {
    fixed += '\n}'.repeat(openBraces - closeBraces);
  }
  
  return fixed;
}

// Main function
async function main() {
  // Get all test files that still have issues
  const files = await glob('__tests__/**/*.{js,jsx,ts,tsx}', { ignore: ['node_modules/**'] });
  
  console.log(`Found ${files.length} test files to process...`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const fixed = fixRemainingTestErrors(content);
      
      if (content !== fixed) {
        fs.writeFileSync(file, fixed, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\nCompleted: ${fixedCount} test files fixed, ${errorCount} errors`);
}

main().catch(console.error);