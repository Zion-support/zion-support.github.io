#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix duplicate imports more aggressively - handle multiple patterns
  fixed = fixed.replace(/(\w+,\s*)+(\w+)\s*,\s*(\1\2)/g, '$1$2');
  fixed = fixed.replace(/(\w+,\s*)+(\w+)\s*,\s*(\1\2)/g, '$1$2'); // Run twice
  fixed = fixed.replace(/(\w+,\s*)+(\w+)\s*,\s*(\1\2)/g, '$1$2'); // Run thrice
  
  // Fix specific duplicate import patterns
  fixed = fixed.replace(/(\w+,\s*)+(\w+)\s*,\s*(\1\2)/g, '$1$2');
  fixed = fixed.replace(/(\w+,\s*)+(\w+)\s*,\s*(\1\2)/g, '$1$2');
  
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
  fixed = fixed.replace(/(<main[^>]*>)([^<]*?)(?!<\/main>)/g, '$1$2</main>');
  
  // Fix JSX expressions that need one parent element
  // Look for patterns like: return (<div>...</div><div>...</div>)
  fixed = fixed.replace(/return\s*\(\s*<([^>]+)>([^<]*)<\/\1>\s*<([^>]+)>([^<]*)<\/\3>\s*\)/g, 'return (<><$1>$2</$1><$3>$4</$3></>)');
  
  // Fix missing closing parentheses
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*,\s*;/g, '$1: $2;');
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
    if (open.includes('main') && !close.includes('/main')) {
      return open + content + '</main>';
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