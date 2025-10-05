#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

function fixFinalErrors(content) {
  // Fix unterminated string literals in object properties
  content = content.replace(
    /(\s+[a-zA-Z_][a-zA-Z0-9_]*:\s*'[^']*')\s*\n\s*([a-zA-Z_][a-zA-Z0-9_]*:)/g,
    '$1,\n    $2'
  );
  
  // Fix unterminated string literals in array elements
  content = content.replace(
    /(\s*\{\s*[^}]*'[^']*')\s*\n\s*(\{[^}]*\})/g,
    '$1,\n    $2'
  );
  
  // Fix missing commas in object properties
  content = content.replace(
    /(\s+[a-zA-Z_][a-zA-Z0-9_]*:\s*[^,}\n]+)\s*\n\s*([a-zA-Z_][a-zA-Z0-9_]*:)/g,
    '$1,\n    $2'
  );
  
  // Fix malformed JSX expressions
  content = content.replace(
    /\{\s*,\s*([^}]+)\s*\}/g,
    '{ $1 }'
  );
  
  // Fix malformed function parameters
  content = content.replace(
    /\(\s*,\s*([^)]+)\s*\)/g,
    '($1)'
  );
  
  // Fix malformed array type definitions
  content = content.replace(
    /Array<\{\s*,\s*([^}]+)\s*\}>/g,
    'Array<{ $1 }>'
  );
  
  // Fix malformed object type definitions
  content = content.replace(
    /\{\s*,\s*([^}]+)\s*\}/g,
    '{ $1 }'
  );
  
  // Fix malformed interface properties with extra commas
  content = content.replace(
    /(\s+[a-zA-Z_][a-zA-Z0-9_]*:\s*[^;]+);,\s*\n\s+([a-zA-Z_][a-zA-Z0-9_]*:)/g,
    '$1;\n  $2'
  );
  
  // Fix malformed interface properties with extra commas (single line)
  content = content.replace(
    /(\s+[a-zA-Z_][a-zA-Z0-9_]*:\s*[^;]+);,\s*([a-zA-Z_][a-zA-Z0-9_]*:)/g,
    '$1;\n  $2'
  );
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixFinalErrors(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Get all TypeScript/TSX files in components directory
  const componentFiles = await glob('src/components/**/*.{ts,tsx}');

  console.log(`Found ${componentFiles.length} component files to check...`);

  let fixedCount = 0;
  componentFiles.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);