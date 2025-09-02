#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix severe syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix malformed imports - remove extra spaces and fix structure
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g, 
    'import { $1 } from \'$2\';\nimport { $3 } from \'$4\);
  
  // Fix imports without semicolons
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*(?![;])/g, 
    'import { $1 } from \'$2\);
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\([^)]*\)\s*:\s*any\s*\{/g, 
    'export default function $1() {');
  
  // Fix malformed array declarations with extra quotes and semicolons
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*\{/g, 'const $1 = [\n  {');
  
  // Fix malformed object properties with extra quotes
  fixed = fixed.replace(/title:\s*['"]([^'"]+)['"]\s*,\s*['"]\s*['"]\s*description:/g, 
    'title: \'$1\',\n    description:');
  
  // Fix malformed JSX quotes
  fixed = fixed.replace(/className\s*=\s*['"]([^'"]+)['"]\s*['"]\s*['"]/g, 
    'className=\'$1\'');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*['"]\s*['"]\s*<div/g, 'return (\n    <div');
  
  // Remove extra semicolons and quotes
  fixed = fixed.replace(/['"]\s*;\s*['"]/g, '');
  fixed = fixed.replace(/['"]\s*,\s*['"]/g, ,);
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div>\s*['"]\s*['"]\s*\)\s*;\s*}/g, '</div>\n  );\n}');
  
  return fixed;
}

// Main function
async function main() {
  const files = await glob('src/pages/services/*.{ts,tsx,js,jsx}', { ignore: ['node_modules/**'] });
  
  console.log(`Found ${files.length} service files to process...`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const fixed = fixSyntaxErrors(content);
      
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