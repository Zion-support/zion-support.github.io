#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix test files with unterminated string literals
function fixTestFiles(content) {
  let fixed = content;
  
  // Fix unterminated describe statements
  fixed = fixed.replace(/describe\s*\(\s*['"]([^'"]*)$/gm, 'describe(\'$1\', () => {');
  
  // Fix unterminated it statements
  fixed = fixed.replace(/it\s*\(\s*['"]([^'"]*)$/gm, 'it(\'$1\', () => {');
  
  // Fix unterminated test statements
  fixed = fixed.replace(/test\s*\(\s*['"]([^'"]*)$/gm, 'test(\'$1\', () => {');
  
  // Fix unterminated expect statements
  fixed = fixed.replace(/expect\s*\(\s*['"]([^'"]*)$/gm, 'expect(\'$1\');');
  
  // Fix malformed imports
  fixed = fixed.replace(/import\s+([^;]+)\s*from\s*['"]([^'"]*)$/gm, 'import $1 from \'$2\';');
  
  // Fix missing semicolons
  fixed = fixed.replace(/import\s+([^;]+)\s*from\s*['"]([^'"]+)['"]\s*(?![;])/g, 'import $1 from \'$2\';');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\([^)]*\)\s*:\s*any\s*\{/g, 'export default function $1() {');
  
  // Fix malformed arrow functions
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*:\s*any\s*=>\s*\{/g, 'const $1 = () => {');
  
  return fixed;
}

// Main function
async function main() {
  // Get all test files
  const files = await glob('__tests__/**/*.{js,jsx,ts,tsx}', { ignore: ['node_modules/**'] });
  
  console.log(`Found ${files.length} test files to process...`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const fixed = fixTestFiles(content);
      
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