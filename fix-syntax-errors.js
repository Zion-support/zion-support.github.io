#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;

  // Remove merge conflict markers
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  // Fix common JSX syntax issues
  fixed = fixed.replace(/,\s*\)/g, ')');
  fixed = fixed.replace(/,\s*}/g, '}');
  fixed = fixed.replace(/,\s*]/g, ']');
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/<div[^>]*>\s*,\s*<\/div>/g, '<div></div>');
  fixed = fixed.replace(/<section[^>]*>\s*,\s*<\/section>/g, '<section></section>');
  
  // Fix missing closing tags in common patterns
  fixed = fixed.replace(/(<div[^>]*>)(?!.*<\/div>)([^<]*)$/gm, '$1$2</div>');
  fixed = fixed.replace(/(<section[^>]*>)(?!.*<\/section>)([^<]*)$/gm, '$1$2</section>');
  
  // Fix malformed function calls
  fixed = fixed.replace(/\(\s*,\s*\)/g, '()');
  fixed = fixed.replace(/\(\s*,\s*\)/g, '()');
  
  // Fix common parsing errors
  fixed = fixed.replace(/;\s*\)/g, ')');
  fixed = fixed.replace(/;\s*}/g, '}');
  fixed = fixed.replace(/;\s*]/g, ']');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*,\s*<\/>/g, '<></>');
  
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}\n]+)\s*([,}])/g, '$1: $2$3');
  
  // Fix malformed template literals
  fixed = fixed.replace(/`\s*,\s*`/g, '``');
  
  // Fix common React patterns
  fixed = fixed.replace(/React\.FC\s*=\s*\(\s*\)\s*=>\s*{/g, 'React.FC = () => {');
  
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

export { fixSyntaxErrors, processFile };