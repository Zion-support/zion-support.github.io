#!/usr/bin/env node
<<<<<<< HEAD

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing remaining syntax errors...');

// Find all files with syntax errors
const findSyntaxErrorFiles = () => {
  try {
    const result = execSync('npm run build 2>&1 | grep -E "Syntax error|Unexpected token" | grep -o "\./[^:]*" | sort -u', { encoding: 'utf8' });
    return result.trim().split('\n').filter(Boolean);
  } catch (error) {
    return [];
  }
};

const syntaxErrorFiles = findSyntaxErrorFiles();
console.log(`📋 Found ${syntaxErrorFiles.length} files with syntax errors`);

let fixedCount = 0;

for (const filePath of syntaxErrorFiles) {
  try {
    console.log(`🔧 Fixing ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax issues
    
    // Fix export statements that are not at the top level
    content = content.replace(/(\s+)(export\s+function\s+\w+)/g, '\n$2');
    content = content.replace(/(\s+)(export\s+default\s+function)/g, '\n$2');
    content = content.replace(/(\s+)(export\s+const\s+\w+)/g, '\n$2');
    content = content.replace(/(\s+)(export\s+{\s*\w+)/g, '\n$2');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*(\n\s*export)/g, '$1;\n$2');
    content = content.replace(/(\w+)\s*(\n\s*return)/g, '$1;\n$2');
    
    // Fix malformed function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {\n');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
    }
    
    // Fix malformed return statements
    content = content.replace(/return\s+([^;]+)\s*$/gm, 'return $1;');
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+)\s*(\n\s*})/g, '$1,\n$2');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${filePath}`);
      fixedCount++;
    } else {
      console.log(`ℹ️  No changes needed for ${filePath}`);
    }
  } catch (error) {
    console.log(`⚠️  Could not fix ${filePath}: ${error.message}`);
  }
}

console.log(`🎉 Fixed ${fixedCount} files with syntax errors!`);
=======
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing remaining syntax errors...');

const filesToFix = [
  '/workspace/pages/api/admin/notes.ts',
  '/workspace/pages/api/admin/partners/fraud-flags.ts',
  '/workspace/pages/api/admin/partners/list.ts',
  '/workspace/pages/api/admin/partners/update.ts',
  '/workspace/pages/api/admin/pitch/add-slide.ts'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove extra closing braces after imports
    content = content.replace(/^import[^}]*\}\n\}/gm, (match) => {
      return match.replace(/\n\}$/, '');
    });
    
    // Remove extra closing braces at the beginning of files
    content = content.replace(/^import[^}]*\}\n\}/gm, (match) => {
      return match.replace(/\n\}$/, '');
    });
    
    // Clean up extra newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

let fixedCount = 0;
for (const file of filesToFix) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`🎉 Fixed ${fixedCount} files`);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
