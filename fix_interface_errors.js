#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

function fixInterfaceErrors(content) {
  // Fix malformed interface properties with extra commas and indentation
  content = content.replace(
    /(\s+[a-zA-Z_][a-zA-Z0-9_]*:\s*[^;]+);,\s*\n\s+([a-zA-Z_][a-zA-Z0-9_]*:)/g,
    '$1;\n  $2'
  );
  
  // Fix malformed interface properties with extra commas (single line)
  content = content.replace(
    /(\s+[a-zA-Z_][a-zA-Z0-9_]*:\s*[^;]+);,\s*([a-zA-Z_][a-zA-Z0-9_]*:)/g,
    '$1;\n  $2'
  );
  
  // Fix malformed array type definitions with extra commas
  content = content.replace(
    /Array<\{\s*([^}]+);,\s*\n\s+([^}]+)\s*\}>/g,
    'Array<{ $1; $2 }>'
  );
  
  // Fix malformed object type definitions with extra commas
  content = content.replace(
    /\{\s*([^}]+);,\s*\n\s+([^}]+)\s*\}/g,
    '{ $1; $2 }'
  );
  
  // Fix malformed interface properties with extra commas and proper indentation
  content = content.replace(
    /(\s+[a-zA-Z_][a-zA-Z0-9_]*:\s*[^;]+);,\s*\n\s+([a-zA-Z_][a-zA-Z0-9_]*:)/g,
    '$1;\n  $2'
  );
  
  // Fix malformed interface properties with extra commas and proper indentation (single line)
  content = content.replace(
    /(\s+[a-zA-Z_][a-zA-Z0-9_]*:\s*[^;]+);,\s*([a-zA-Z_][a-zA-Z0-9_]*:)/g,
    '$1;\n  $2'
  );
  
  // Fix malformed array type definitions with extra commas and proper indentation
  content = content.replace(
    /Array<\{\s*([^}]+);,\s*\n\s+([^}]+)\s*\}>/g,
    'Array<{ $1; $2 }>'
  );
  
  // Fix malformed object type definitions with extra commas and proper indentation
  content = content.replace(
    /\{\s*([^}]+);,\s*\n\s+([^}]+)\s*\}/g,
    '{ $1; $2 }'
  );
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixInterfaceErrors(content);
    
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