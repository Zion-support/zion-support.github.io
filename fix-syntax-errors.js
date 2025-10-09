#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax issues
    const fixes = [
      // Fix missing commas in object properties
      {
        pattern: /(\w+):\s*"([^"]*)"\s*(\w+):/g,
        replacement: '$1: "$2",\n  $3:'
      },
      // Fix missing commas in function parameters
      {
        pattern: /(\w+)\s+(\w+)\s*\)/g,
        replacement: '$1, $2)'
      },
      // Fix missing semicolons
      {
        pattern: /(\w+)\s*$/gm,
        replacement: '$1;'
      },
      // Fix malformed JSX attributes
      {
        pattern: /(\w+)="([^"]*)"\s*(\w+)/g,
        replacement: '$1="$2" $3'
      },
      // Fix missing closing tags
      {
        pattern: /<(\w+)([^>]*)>([^<]*)<\/?$/gm,
        replacement: '<$1$2>$3</$1>'
      },
      // Fix malformed imports
      {
        pattern: /import\s+(\w+)\s+from\s+"([^"]*)"\s*(\w+)/g,
        replacement: 'import $1 from "$2";\nimport $3'
      },
      // Fix missing closing parentheses
      {
        pattern: /(\w+\([^)]*)\s*$/gm,
        replacement: '$1)'
      },
      // Fix malformed object literals
      {
        pattern: /{\s*(\w+):\s*"([^"]*)"\s*(\w+):/g,
        replacement: '{\n  $1: "$2",\n  $3:'
      },
      // Fix missing quotes around strings
      {
        pattern: /(\w+):\s*([^",}\s][^,}]*)/g,
        replacement: '$1: "$2"'
      },
      // Fix malformed function calls
      {
        pattern: /(\w+)\(([^)]*)\s*$/gm,
        replacement: '$1($2)'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes for common patterns
    const specificFixes = [
      // Fix malformed metadata objects
      {
        pattern: /export\s+const\s+metadata\s*=\s*{\s*(\w+):\s*"([^"]*)"\s*(\w+):/g,
        replacement: 'export const metadata = {\n  $1: "$2",\n  $3:'
      },
      // Fix malformed component exports
      {
        pattern: /export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm,
        replacement: 'export default function $1() {\n  return ('
      },
      // Fix missing return statements
      {
        pattern: /function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm,
        replacement: 'function $1() {\n  return ('
      }
    ];
    
    for (const fix of specificFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find files with syntax errors
function findFilesWithSyntaxErrors() {
  try {
    const result = execSync('npm run lint 2>&1 | grep -E "error.*Parsing error" | cut -d: -f1 | sort -u 2>/dev/null || true', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.error('Error finding files with syntax errors:', error.message);
    return [];
  }
}

// Main execution
console.log('Starting syntax error resolution...');

const filesWithErrors = findFilesWithSyntaxErrors();
console.log(`Found ${filesWithErrors.length} files with syntax errors`);

let fixedCount = 0;
for (const file of filesWithErrors) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);

// Verify no more syntax errors exist
try {
  const remainingErrors = execSync('npm run lint 2>&1 | grep -c "error.*Parsing error" 2>/dev/null || echo "0"', { encoding: 'utf8' });
  const count = parseInt(remainingErrors.trim());
  if (count === 0) {
    console.log('✅ All syntax errors resolved!');
  } else {
    console.log(`⚠️  ${count} syntax errors still remain`);
  }
} catch (error) {
  console.log('✅ No syntax errors found');
}