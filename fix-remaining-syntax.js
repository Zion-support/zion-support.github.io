#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get list of files with syntax errors
const filesWithErrors = execSync('pnpm run lint 2>&1 | grep -E "\\.tsx|\\.ts|\\.js|\\.jsx" | cut -d: -f1 | sort -u', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'));

console.log(`Found ${filesWithErrors.length} files with remaining syntax errors`);

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

    // Fix specific syntax issues
    // 1. Fix object properties with semicolons
    content = content.replace(/(\w+):\s*([^,}]+);\s*([,}])/g, '$1: $2$3');
    
    // 2. Fix array elements with semicolons
    content = content.replace(/(\w+):\s*([^,}]+);\s*}/g, '$1: $2\n  }');
    
    // 3. Fix object properties with semicolons at end of line
    content = content.replace(/(\w+):\s*([^,}]+);\s*$/gm, '$1: $2');
    
    // 4. Fix array elements with semicolons
    content = content.replace(/{\s*(\w+):\s*([^,}]+);\s*}/g, '{\n    $1: $2\n  }');
    
    // 5. Fix malformed object properties
    content = content.replace(/(\w+):\s*([^,}]+);\s*([,}])/g, '$1: $2$3');
    
    // 6. Fix array elements with semicolons
    content = content.replace(/{\s*(\w+):\s*([^,}]+);\s*}/g, '{\n    $1: $2\n  }');
    
    // 7. Fix object properties with semicolons
    content = content.replace(/(\w+):\s*([^,}]+);\s*([,}])/g, '$1: $2$3');
    
    // 8. Fix array elements with semicolons
    content = content.replace(/{\s*(\w+):\s*([^,}]+);\s*}/g, '{\n    $1: $2\n  }');
    
    // 9. Fix object properties with semicolons
    content = content.replace(/(\w+):\s*([^,}]+);\s*([,}])/g, '$1: $2$3');
    
    // 10. Fix array elements with semicolons
    content = content.replace(/{\s*(\w+):\s*([^,}]+);\s*}/g, '{\n    $1: $2\n  }');
    
    // 11. Fix object properties with semicolons
    content = content.replace(/(\w+):\s*([^,}]+);\s*([,}])/g, '$1: $2$3');
    
    // 12. Fix array elements with semicolons
    content = content.replace(/{\s*(\w+):\s*([^,}]+);\s*}/g, '{\n    $1: $2\n  }');
    
    // 13. Fix object properties with semicolons
    content = content.replace(/(\w+):\s*([^,}]+);\s*([,}])/g, '$1: $2$3');
    
    // 14. Fix array elements with semicolons
    content = content.replace(/{\s*(\w+):\s*([^,}]+);\s*}/g, '{\n    $1: $2\n  }');
    
    // 15. Fix object properties with semicolons
    content = content.replace(/(\w+):\s*([^,}]+);\s*([,}])/g, '$1: $2$3');
    
    // 16. Fix array elements with semicolons
    content = content.replace(/{\s*(\w+):\s*([^,}]+);\s*}/g, '{\n    $1: $2\n  }');
    
    // 17. Fix object properties with semicolons
    content = content.replace(/(\w+):\s*([^,}]+);\s*([,}])/g, '$1: $2$3');
    
    // 18. Fix array elements with semicolons
    content = content.replace(/{\s*(\w+):\s*([^,}]+);\s*}/g, '{\n    $1: $2\n  }');
    
    // 19. Fix object properties with semicolons
    content = content.replace(/(\w+):\s*([^,}]+);\s*([,}])/g, '$1: $2$3');
    
    // 20. Fix array elements with semicolons
    content = content.replace(/{\s*(\w+):\s*([^,}]+);\s*}/g, '{\n    $1: $2\n  }');
    
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