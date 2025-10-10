#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get list of files with syntax errors
const filesWithErrors = execSync('pnpm run lint 2>&1 | grep -E "\\.tsx|\\.ts|\\.js|\\.jsx" | cut -d: -f1 | sort -u', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'));

console.log(`Found ${filesWithErrors.length} files with syntax errors`);

let fixedCount = 0;
let errorCount = 0;

filesWithErrors.forEach(filePath => {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Fix common syntax issues
    // 1. Remove stray semicolons at the beginning of lines
    content = content.replace(/^\s*;\s*/gm, '');
    
    // 2. Fix malformed function declarations with semicolons
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{;/g, 'const $1: React.FC = () => {');
    
    // 3. Fix array declarations with semicolons
    content = content.replace(/const\s+(\w+)\s*=\s*\[;/g, 'const $1 = [');
    
    // 4. Fix object declarations with semicolons
    content = content.replace(/{\s*;/g, '{');
    
    // 5. Fix closing braces with semicolons
    content = content.replace(/}\s*;/g, '}');
    
    // 6. Fix array elements with semicolons
    content = content.replace(/{\s*([^}]+);\s*}/g, '{\n    $1\n  }');
    
    // 7. Fix duplicate React imports
    content = content.replace(/import React from 'react';\s*import React, {[^}]+} from 'react';/g, "import React, { Suspense, lazy } from 'react';");
    
    // 8. Fix malformed JSX with semicolons
    content = content.replace(/<(\w+)[^>]*>;/g, '<$1>');
    content = content.replace(/<\/(\w+)>;/g, '</$1>');
    
    // 9. Fix function calls with semicolons
    content = content.replace(/\(\s*\)\s*=>\s*{;/g, '() => {');
    
    // 10. Fix variable declarations with semicolons
    content = content.replace(/const\s+(\w+)\s*=\s*([^;]+);\s*;/g, 'const $1 = $2;');
    
    // 11. Fix object property declarations
    content = content.replace(/(\w+):\s*([^,}]+);/g, '$1: $2,');
    
    // 12. Fix array element declarations
    content = content.replace(/{\s*(\w+):\s*([^,}]+);\s*}/g, '{\n    $1: $2\n  }');
    
    // 13. Fix malformed JSX attributes
    content = content.replace(/=\s*{([^}]+);\s*}/g, '={$1}');
    
    // 14. Fix closing tags with semicolons
    content = content.replace(/<\/(\w+)>;/g, '</$1>');
    
    // 15. Fix opening tags with semicolons
    content = content.replace(/<(\w+)[^>]*>;/g, '<$1>');
    
    // 16. Fix malformed function parameters
    content = content.replace(/\(\s*\)\s*=>\s*{;/g, '() => {');
    
    // 17. Fix malformed object properties
    content = content.replace(/(\w+):\s*([^,}]+);\s*}/g, '$1: $2\n  }');
    
    // 18. Fix malformed array elements
    content = content.replace(/{\s*(\w+):\s*([^,}]+);\s*}/g, '{\n    $1: $2\n  }');
    
    // 19. Fix malformed JSX expressions
    content = content.replace(/{\s*([^}]+);\s*}/g, '{$1}');
    
    // 20. Fix malformed function calls
    content = content.replace(/\(\s*\)\s*=>\s*{;/g, '() => {');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Clean up trailing semicolons on empty lines
    content = content.replace(/^\s*;\s*$/gm, '');

    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    } else {
      console.log(`No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\nSummary:`);
console.log(`- Files processed: ${filesWithErrors.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);