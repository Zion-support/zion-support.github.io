#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Fixing test syntax errors...');

// Find all test files
const testFiles = glob.sync('**/*.{test,spec}.{js,jsx,ts,tsx}', {
  ignore: ['node_modules/**', 'dist/**', 'build/**', '.next/**']
});

let fixedCount = 0;
let errorCount = 0;

testFiles.forEach(filePath => {
  try {
    console.log(`📝 Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors
    // 1. Remove extra commas in import statements
    content = content.replace(/import\s+([^;]+),\s*;/g, 'import $1;');
    
    // 2. Fix unterminated strings
    content = content.replace(/from\s+['"]([^'"]*)$/gm, (match, p1) => {
      if (!p1.endsWith("'") && !p1.endsWith('"')) {
        return `from '${p1}'`;
      }
      return match;
    });
    
    // 3. Fix missing semicolons after imports
    content = content.replace(/import\s+([^;]+)\s*$/gm, 'import $1;');
    
    // 4. Fix malformed test files (basic cleanup)
    if (content.includes('test(') && !content.includes('describe(')) {
      content = content.replace(/test\(/g, 'it(');
    }
    
    // 5. Fix corrupted import statements
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*,\s*;/g, 'import { $1 } from \'$2\';');
    
    // 6. Fix extra commas in function parameters
    content = content.replace(/,\s*\)/g, ')');
    content = content.replace(/,\s*}/g, '}');
    
    // 7. Fix malformed async functions
    content = content.replace(/async\s*\(\s*{\s*page\s*}\s*\)\s*=>\s*{\s*'/g, 'async ({ page }) => {');
    
    // 8. Fix broken test structure
    content = content.replace(/test\('([^']+)',\s*async\s*\(\s*{\s*page\s*}\s*\)\s*=>\s*{\s*'/g, 'test(\'$1\', async ({ page }) => {');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      fixedCount++;
    } else {
      console.log(`✓ No changes needed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\n🎉 Fix completed!`);
console.log(`📊 Fixed files: ${fixedCount}`);
console.log(`❌ Errors: ${errorCount}`);
console.log(`📁 Total files processed: ${testFiles.length}`);