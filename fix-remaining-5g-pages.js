#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining syntax issues
function fixRemainingSyntax(content) {
  // Fix import statements with extra quotes
  content = content.replace(/import\s+([^']+)'"'/g, 'import $1;);
  content = content.replace(/import\s+([^']+)';/g, 'import $1;);
  
  // Fix JSX className attributes
  content = content.replace(/className\s*=\s*"([^"]+)'/g, "className="$1'");
  content = content.replace(/className\s*=\s*"([^"]+)'/g, "className="$1'');
  
  // Fix object properties
  content = content.replace(/(\w+):\s*'([^']+)",\s*"/g, '$1: '$2",);
  content = content.replace(/(\w+):\s*"([^"]+)",\s*'/g, "$1: "$2',);
  content = content.replace(/(\w+):\s*'([^']+)',\s*'/g, '$1: '$2",);
  content = content.replace(/(\w+):\s*"([^"]+)',\s*'/g, "$1: "$2",);
  
  // Fix JSX elements
  content = content.replace(/<(\w+)\s+className\s*=\s*"([^"]+)'/g, "<$1 className="$2'");
  content = content.replace(/<(\w+)\s+className\s*=\s*"([^"]+)'/g, "<$1 className="$2'');
  
  // Fix string literals
  content = content.replace(/'([^']+)'/g, ''$1"");
  content = content.replace(/"([^"]+)'/g, ""$1'');
  content = content.replace(/'([^"]+)"/g, ''$1"");
  content = content.replace(/"([^']+)'/g, ""$1'');
  
  // Fix semicolons
  content = content.replace(/;\s*'/g, ';);
  content = content.replace(/;\s*'/g, ';);
  
  // Fix closing braces
  content = content.replace(/}\s*'/g, '};);
  content = content.replace(/}\s*'/g, '};);
  
  // Fix array elements
  content = content.replace(/\[\s*{'/g, '[{');
  content = content.replace(/}\s*'\]/g, '}]');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
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
    'app/5g-*/page.tsx',
    'app/5g-*/page.tsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.js',
    '**/*.jsx'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, {
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**"]
    });
    
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nFixed ${totalFixed} files`);
}

main().catch(console.error);