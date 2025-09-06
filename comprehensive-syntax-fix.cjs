#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Comprehensive syntax fix...');

const filesToFix = [
  'lib/integrations/fileStore.ts',
  'pages/api/admin/analytics/summary.ts',
  'pages/api/admin/kyc-queue.ts',
  'pages/api/admin/moderation/flags/[id]/action.ts',
  'pages/api/admin/moderation/flags/index.ts'
];

let fixedCount = 0;

for (const filePath of filesToFix) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      continue;
    }

    console.log(`🔧 Fixing ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax issues
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*(\n\s*res\.status)/g, '$1;\n$2');
    content = content.replace(/(\w+)\s*(\n\s*return)/g, '$1;\n$2');
    
    // Fix malformed import statements
    content = content.replace(/import\s+{\s*([^}]+),\s*;\s*}/g, 'import { $1 }');
    content = content.replace(/,\s*;\s*}/g, ' }');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
    }
    
    // Fix malformed function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {\n');
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+)\s*(\n\s*})/g, '$1,\n$2');
    
    // Fix malformed return statements
    content = content.replace(/return\s+([^;]+)\s*$/gm, 'return $1;');
    
    // Fix missing newlines between statements
    content = content.replace(/(\w+)\s*(\n\s*export)/g, '$1;\n$2');
    content = content.replace(/(\w+)\s*(\n\s*function)/g, '$1;\n$2');
    
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