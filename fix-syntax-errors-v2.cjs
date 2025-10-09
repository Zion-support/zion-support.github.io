#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix duplicate imports more aggressively
  fixed = fixed.replace(/(\w+,\s*)+(\w+)\s*,\s*(\1\2)/g, '$1$2');
  fixed = fixed.replace(/(\w+,\s*)+(\w+)\s*,\s*(\1\2)/g, '$1$2'); // Run twice to catch nested duplicates
  
  // Fix malformed object syntax (e.g., "{," -> "{")
  fixed = fixed.replace(/{\s*,/g, '{');
  
  // Fix semicolon in variable declarations
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*,\s*;/g, '$1: $2;');
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*,\s*;/g, '$1: $2;'); // Run twice
  
  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(\w+:\s*[^,}]+)(\s*[,}])/g, '$1;$2');
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/(<h2[^>]*>)([^<]*?)(?!<\/h2>)/g, '$1$2</h2>');
  fixed = fixed.replace(/(<section[^>]*>)([^<]*?)(?!<\/section>)/g, '$1$2</section>');
  fixed = fixed.replace(/(<div[^>]*>)([^<]*?)(?!<\/div>)/g, '$1$2</div>');
  
  // Fix duplicate return statements - keep only the last one
  const returnMatches = [...fixed.matchAll(/return\s*\(/g)];
  if (returnMatches.length > 1) {
    const lastReturnIndex = returnMatches[returnMatches.length - 1].index;
    const beforeLastReturn = fixed.substring(0, lastReturnIndex);
    const afterLastReturn = fixed.substring(lastReturnIndex);
    
    // Remove all return statements before the last one
    const cleanedBefore = beforeLastReturn.replace(/return\s*\([^)]*\)\s*;?\s*/g, '');
    fixed = cleanedBefore + afterLastReturn;
  }
  
  // Fix malformed destructuring
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*,\s*;/g, '$1: $2;');
  
  // Fix property assignment issues
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*,\s*;/g, '$1: $2;');
  
  // Fix missing closing braces in JSX
  fixed = fixed.replace(/(<[^>]+>)([^<]*?)(<[^>]*>)/g, (match, open, content, close) => {
    if (open.includes('h2') && !close.includes('/h2')) {
      return open + content + '</h2>';
    }
    if (open.includes('section') && !close.includes('/section')) {
      return open + content + '</section>';
    }
    if (open.includes('div') && !close.includes('/div')) {
      return open + content + '</div>';
    }
    return match;
  });
  
  // Fix specific patterns
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*,\s*;/g, '$1: $2;');
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*,\s*;/g, '$1: $2;');
  
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
    'src/**/*.tsx',
    'src/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**'] });
    
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

main().catch(console.error);