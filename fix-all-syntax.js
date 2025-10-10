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

    // Fix all syntax issues comprehensively
    // 1. Remove stray semicolons from object properties
    content = content.replace(/(\w+):\s*([^,}]+);\s*([,}])/g, '$1: $2$3');
    content = content.replace(/(\w+):\s*([^,}]+);\s*$/gm, '$1: $2');
    
    // 2. Fix array elements with semicolons
    content = content.replace(/{\s*(\w+):\s*([^,}]+);\s*}/g, '{\n    $1: $2\n  }');
    
    // 3. Fix JSX with semicolons
    content = content.replace(/\/>;/g, '/>');
    content = content.replace(/<\/[^>]+>;/g, (match) => match.replace(/;$/g, ''));
    content = content.replace(/element={<[^>]+>} \/>;/g, (match) => match.replace(/\/>;$/, '/>'));
    
    // 4. Fix malformed function calls
    content = content.replace(/\(\s*\)\s*=>\s*\(;/g, '() => (');
    content = content.replace(/return\s*\(,/g, 'return (');
    content = content.replace(/return\s*\(;/g, 'return (');
    
    // 5. Fix malformed JSX attributes
    content = content.replace(/=\s*{([^}]+);\s*}/g, '={$1}');
    
    // 6. Fix object property declarations
    content = content.replace(/(\w+):\s*([^,}]+);\s*([,}])/g, '$1: $2$3');
    
    // 7. Fix array element declarations
    content = content.replace(/{\s*(\w+):\s*([^,}]+);\s*}/g, '{\n    $1: $2\n  }');
    
    // 8. Fix malformed function parameters
    content = content.replace(/\(\s*\)\s*=>\s*{;/g, '() => {');
    
    // 9. Fix malformed object properties
    content = content.replace(/(\w+):\s*([^,}]+);\s*}/g, '$1: $2\n  }');
    
    // 10. Fix malformed array elements
    content = content.replace(/{\s*(\w+):\s*([^,}]+);\s*}/g, '{\n    $1: $2\n  }');
    
    // 11. Fix malformed JSX expressions
    content = content.replace(/{\s*([^}]+);\s*}/g, '{$1}');
    
    // 12. Fix malformed function calls
    content = content.replace(/\(\s*\)\s*=>\s*{;/g, '() => {');
    
    // 13. Fix malformed object properties
    content = content.replace(/(\w+):\s*([^,}]+);\s*}/g, '$1: $2\n  }');
    
    // 14. Fix malformed array elements
    content = content.replace(/{\s*(\w+):\s*([^,}]+);\s*}/g, '{\n    $1: $2\n  }');
    
    // 15. Fix malformed JSX expressions
    content = content.replace(/{\s*([^}]+);\s*}/g, '{$1}');
    
    // 16. Fix malformed function calls
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