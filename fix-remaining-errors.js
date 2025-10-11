#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix missing commas in arrays
    content = content.replace(/\]\s*\{/g, '],\n    {');
    content = content.replace(/}\s*\{/g, '},\n    {');
    
    // Fix missing commas in object properties
    content = content.replace(/benefits: \[([^\]]+)\]\s*}/g, 'benefits: [$1]\n    }');
    
    // Fix malformed JSX elements
    content = content.replace(/<(\w+)([^>]*)\s*$/gm, '<$1$2>');
    
    // Fix missing closing brackets
    content = content.replace(/className="([^"]*)"\s*$/gm, 'className="$1">');
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(\s*$/gm, 'return (\n    <>');
    
    // Fix missing semicolons
    content = content.replace(/}\s*$/gm, '};');
    
    // Fix missing closing tags
    content = content.replace(/<(\w+)([^>]*)>\s*$/gm, '<$1$2></$1>');
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*$/gm, '<>');
    content = content.replace(/<\/>\s*$/gm, '</>');
    
    // Fix missing export statements
    if (!content.includes('export default') && content.includes('const PagePage')) {
      content += '\n\nexport default PagePage;';
    }
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      fixed = true;
    }
    
    return fixed;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get files with syntax errors
const files = execSync("find app -name '*.tsx' -exec grep -l 'Identifier expected\\|Expected corresponding JSX closing tag\\|JSX expressions must have one parent element\\|Parsing error' {} +", { encoding: 'utf8' }).trim().split('\n').filter(f => f);

console.log(`Found ${files.length} files with syntax errors`);

let fixed = 0;
let failed = 0;

files.forEach(file => {
  if (fixSyntaxErrors(file)) {
    fixed++;
  } else {
    failed++;
  }
});

console.log(`\nFixed: ${fixed} files`);
console.log(`Failed: ${failed} files`);