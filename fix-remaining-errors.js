#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Fix remaining JSX syntax errors
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix malformed meta tags with commas
  fixed = fixed.replace(/meta\s+name="([^"]*)"\s*,\s*content="([^"]*)"/g, 'meta name="$1" content="$2"');
  
  // Fix malformed JSX attributes with commas
  fixed = fixed.replace(/(\w+)="([^"]*)"\s*,\s*(\w+)="/g, '$1="$2" $3="');
  
  // Fix malformed array syntax
  fixed = fixed.replace(/const\s+\$1\s*=\s*\[/g, 'const features = [');
  
  // Fix malformed benefits arrays with double quotes
  fixed = fixed.replace(/benefits:\s*\[\s*''([^']*)''/g, 'benefits: [\'$1\'');
  fixed = fixed.replace(/benefits:\s*\[\s*''([^']*)''\s*,\s*''([^']*)''\s*,\s*''([^']*)''\s*\]/g, 'benefits: [\'$1\', \'$2\', \'$3\']');
  
  // Fix malformed closing brackets
  fixed = fixed.replace(/\]\];\]/g, '];');
  fixed = fixed.replace(/\]\];/g, '];');
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/\)\s*\)\s*<\/div>/g, ')</div>');
  fixed = fixed.replace(/\)\s*<\/div>\s*<\/div>/g, ')</div></div>');
  
  // Fix malformed section tags
  fixed = fixed.replace(/<\/div><\/div><section/g, '</div></div>\n        <section');
  fixed = fixed.replace(/\)\s*<\/div><\/div><section/g, ')</div></div>\n        <section');
  
  // Fix malformed closing parentheses
  fixed = fixed.replace(/\)\s*\)\s*$/gm, ')');
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{\s*\)\s*\}/g, '{}');
  
  // Fix malformed object properties
  fixed = fixed.replace(/(\w+):\s*([^,\n}]+)\s*\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+):\s*([^,\n}]+)\s*\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix malformed array elements
  fixed = fixed.replace(/(\w+)\s+(\w+)(?=\s*[\]}])/g, '$1, $2');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>([^<]*)<>/g, '<>$1</>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div><\/div><\/div>/g, '</div></div></div>');
  
  // Fix malformed section closing
  fixed = fixed.replace(/<\/section><\/div><\/div>/g, '</section></div></div>');
  
  return fixed;
}

// Main function
async function main() {
  // Find all TypeScript/JSX files
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });

  console.log(`Found ${files.length} files to process...`);

  let fixedCount = 0;
  let errorCount = 0;

  for (const file of files) {
    try {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf8');
      const fixed = fixRemainingErrors(content);
      
      if (content !== fixed) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\nProcessing complete:`);
  console.log(`- Files fixed: ${fixedCount}`);
  console.log(`- Errors: ${errorCount}`);
}

main().catch(console.error);