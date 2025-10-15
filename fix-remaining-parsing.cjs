const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix remaining parsing errors
function fixRemainingParsing(content) {
  let fixed = false;
  let originalContent = content;

  // Fix missing commas in arrays - more comprehensive
  content = content.replace(/(\s*"[^"]*",?\s*)\n(\s*"[^"]*")\s*]/g, '$1,\n$2]');
  content = content.replace(/(\s*'[^']*',?\s*)\n(\s*'[^']*')\s*]/g, '$1,\n$2]');
  content = content.replace(/(\s*[a-zA-Z_][a-zA-Z0-9_]*\s*,?\s*)\n(\s*[a-zA-Z_][a-zA-Z0-9_]*\s*)\s*]/g, '$1,\n$2]');
  
  // Fix missing commas in object arrays
  content = content.replace(/(\s*}\s*)\n(\s*{\s*)/g, '$1,\n$2');
  
  // Fix sparse arrays (remove extra commas)
  content = content.replace(/,\s*,/g, ',');
  content = content.replace(/,\s*]/g, ']');
  content = content.replace(/,\s*}/g, '}');
  
  // Fix property or signature expected errors
  content = content.replace(/:\s*{/g, ': {');
  content = content.replace(/{\s*:/g, '{');
  content = content.replace(/:\s*\[/g, ': [');
  content = content.replace(/\[\s*:/g, '[');
  
  // Fix declaration or statement expected errors
  content = content.replace(/^(\s*)(\w+)\s*=\s*{/gm, '$1const $2 = {');
  content = content.replace(/^(\s*)(\w+)\s*=\s*\[/gm, '$1const $2 = [');
  
  // Fix malformed function declarations
  if (content.includes('return (') && !content.includes('const ') && !content.includes('function ')) {
    if (!content.includes('export default') && !content.includes('export const')) {
      content = `import React from 'react';\n\nconst Component = () => {\n  ${content}`;
      content += '\n};\n\nexport default Component;';
    }
  }
  
  // Fix missing closing brackets
  content = content.replace(/(\s*]\s*)\n(\s*]\s*)/g, '$1,\n$2');
  
  // Fix duplicate declarations
  content = content.replace(/(\w+)\s*,\s*\1\s*,/g, '$1,');
  
  fixed = content !== originalContent;
  return { content, fixed };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: fixedContent, fixed } = fixRemainingParsing(content);
    
    if (fixed) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed remaining parsing in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

main();