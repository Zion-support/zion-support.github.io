#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  let changes = [];

  // Fix 1: Remove duplicate 'from' in import statements
  if (fixed.includes('import React from  from')) {
    fixed = fixed.replace(/import React from  from/g, 'import React from');
    changes.push('Fixed duplicate "from" in import statement');
  }

  // Fix 2: Fix unterminated string literals with quotes
  const unterminatedStringRegex = /"([^"]*?)\n/g;
  const unterminatedMatches = fixed.match(unterminatedStringRegex);
  if (unterminatedMatches) {
    fixed = fixed.replace(unterminatedStringRegex, (match, content) => {
      return `"${content}"\n`;
    });
    changes.push('Fixed unterminated string literals');
  }

  // Fix 3: Remove extra quotes and fix malformed object properties
  fixed = fixed.replace(/"([^"]*?)",\s*"([^"]*?)"/g, '"$1", "$2"');
  fixed = fixed.replace(/"([^"]*?)",\s*"([^"]*?)"}/g, '"$1", "$2"}');
  
  // Fix 4: Fix duplicate property assignments
  fixed = fixed.replace(/(\w+):\s*"([^"]*)",\s*\1:\s*"([^"]*)"/g, '$1: "$2"');
  
  // Fix 5: Remove extra closing braces and parentheses
  fixed = fixed.replace(/\}\s*\}\s*\)\s*;\s*\}/g, '});');
  fixed = fixed.replace(/\}\s*\)\s*;\s*\}/g, '});');
  
  // Fix 6: Fix malformed JSX closing tags
  fixed = fixed.replace(/<\/\s*>\s*<\/\s*>/g, '</>');
  
  // Fix 7: Remove stray semicolons in JSX
  fixed = fixed.replace(/;\s*<\/p>/g, '</p>');
  
  // Fix 8: Fix incomplete import statements
  fixed = fixed.replace(/import\s+from\s+from/g, 'import');
  
  // Fix 9: Remove duplicate closing tags
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*\)\s*;\s*\}/g, '</div></div>);');
  
  // Fix 10: Fix malformed function declarations
  fixed = fixed.replace(/export default function\s+(\w+)\(\)\s*{\s*return\s*\(/g, 'export default function $1() {\n  return (');
  
  // Fix 11: Remove extra quotes at end of files
  fixed = fixed.replace(/\n''\s*$/g, '');
  
  // Fix 12: Fix malformed object syntax
  fixed = fixed.replace(/\{\s*"([^"]*)",\s*"([^"]*)"\s*\}/g, '{"$1", "$2"}');
  
  // Fix 13: Remove duplicate closing parentheses and braces
  fixed = fixed.replace(/\)\s*;\s*\}\s*\}\s*$/g, ');\n}');
  
  // Fix 14: Fix incomplete JSX elements
  fixed = fixed.replace(/<(\w+)\s*$/gm, '<$1>');
  
  // Fix 15: Remove stray characters and fix spacing
  fixed = fixed.replace(/\s+$/gm, '');
  fixed = fixed.replace(/\n\s*\n\s*\n/g, '\n\n');

  return { content: fixed, changes };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixSyntaxErrors(content, filePath);
    
    if (result.changes.length > 0) {
      fs.writeFileSync(filePath, result.content);
      console.log(`✅ Fixed ${filePath}:`);
      result.changes.forEach(change => console.log(`   - ${change}`));
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('🔧 Starting syntax error fixes...\n');
  
  // Get all TypeScript and JavaScript files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.ts',
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
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files fixed: ${fixedFiles}`);
  console.log(`   Files unchanged: ${totalFiles - fixedFiles}`);
  
  if (fixedFiles > 0) {
    console.log('\n✨ Syntax errors have been fixed!');
  } else {
    console.log('\n✅ No syntax errors found to fix.');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, processFile };