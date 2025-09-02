#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals in test files
  fixed = fixed.replace(/describe\s*\(\s*['"]([^'"]*)$/gm, 'describe(\'$1\', () => {');
  
  // Fix malformed test imports
  fixed = fixed.replace(/import\s+([^;]+)\s*from\s*['"]([^'"]*)$/gm, 'import $1 from \'$2\);
  
  // Fix missing semicolons in imports
  fixed = fixed.replace(/import\s+([^;]+)\s*from\s*['"]([^'"]+)['"]\s*(?![;])/g, 'import $1 from \'$2\);
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\([^)]*\)\s*:\s*any\s*\{/g, 'export default function $1() {');
  
  // Fix malformed arrow functions
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*:\s*any\s*=>\s*\{/g, 'const $1 = () => {');
  
  // Fix malformed JSX return statements
  fixed = fixed.replace(/return\s*\(\s*['"]\s*['"]\s*<div/g, 'return (\n    <div');
  
  // Fix malformed className attributes
  fixed = fixed.replace(/className\s*=\s*['"]([^'"]+)['"]\s*['"]\s*['"]/g, 'className=\'$1\'');
  
  // Fix malformed object properties
  fixed = fixed.replace(/title:\s*['"]([^'"]+)['"]\s*,\s*['"]\s*['"]\s*description:/g, 'title: \'$1\',\n    description:');
  
  // Fix malformed array declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*\{/g, 'const $1 = [\n  {');
  
  // Fix malformed closing tags and braces
  fixed = fixed.replace(/<\/div>\s*['"]\s*['"]\s*\)\s*;\s*}/g, '</div>\n  );\n}');
  
  // Fix malformed quotes in strings
  fixed = fixed.replace(/['"]\s*;\s*['"]/g, '');
  fixed = fixed.replace(/['"]\s*,\s*['"]/g, ,);
  
  // Fix malformed export statements
  fixed = fixed.replace(/export\s+default\s+(\w+)\s*\(\s*\)\s*\{/g, 'export default function $1() {');
  
  // Fix malformed React component declarations
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*\{/g, 'const $1: React.FC = () => {');
  
  return fixed;
}

// Main function
async function main() {
  // Get all TypeScript/JavaScript files except node_modules
  const files = await glob('**/*.{ts,tsx,js,jsx}', { 
    ignore: ['node_modules/**,dist/**,build/**,.next/**'] 
  });
  
  console.log(`Found ${files.length} files to process...`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const fixed = fixRemainingErrors(content);
      
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
  
  console.log(`\nCompleted: ${fixedCount} files fixed, ${errorCount} errors`);
}

main().catch(console.error);