import fs from 'fs';
import { glob } from 'glob';

// Function to fix common JSX and syntax errors
function fixFinalErrors(content) {
  let fixed = content;
  
  // Fix missing closing tags
  fixed = fixed.replace(/<\/section>\s*<\/div>\s*<\/section>/g, '</div>\n        </section>');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/onClick=\{([^}]+);/g, 'onClick={$1}');
  
  // Fix missing semicolons in imports
  fixed = fixed.replace(/import React from 'react'$/gm, "import React from 'react';");
  
  // Fix missing closing braces in objects
  fixed = fixed.replace(/(\w+):\s*<(\w+)\s+className="[^"]*"\s*\/>,\s*$/gm, '$1: <$2 className="w-6 h-6" />,');
  
  // Fix unterminated strings
  fixed = fixed.replace(/(\w+):\s*'([^']*),'\s*$/gm, '$1: \'$2\'');
  fixed = fixed.replace(/(\w+):\s*"([^"]*),"\s*$/gm, '$1: "$2"');
  
  // Fix missing closing parentheses in function calls
  fixed = fixed.replace(/(\w+)\s*\(\s*([^)]*)\s*$/gm, (match, func, args) => {
    if (args.trim().endsWith(',')) {
      return `${func}(${args.trim().slice(0, -1)})`;
    }
    return match;
  });
  
  // Fix JSX fragment issues
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/<\/>\s*$/gm, '</>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixFinalErrors(content);
    
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
    '*.tsx',
    '*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixFinalErrors, processFile };