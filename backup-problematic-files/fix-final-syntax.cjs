#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
// Final targeted fixes for remaining syntax errors
const fixes = [// Fix missing semicolons in import statements
  {
    "pattern": /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*$/gm,
    "replacement": 'import { $1 } from \'$2\';'
  },
    if (filePath.includes('use-toast.ts')) {
        // Fix malformed interface
        content = content.replace(/position\?\: "top-right" \| "top-center" \| "top-left" \| "bottom-right" \| "bottom-center" \| "bottom-left"\}\s*$/g, 'position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";\n}');
        
        // Fix malformed function
        content = content.replace(/const showToast = \(message: string, options\?\: ToastOptions\)\s*=> \{\s*return toast\(message, options\)\s*return \{ showToast \};\s*\};\s*$/g, 'const showToast = (message: string, options?: ToastOptions) => {\n    return toast(message, options);\n  };\n\n  return { showToast };\n}');
    }

    // General fixes
    content = content.replace(/"""/g, '');
    content = content.replace(/""""/g, '');
    content = content.replace(/'"`/g, '');
    content = content.replace(/`"/g, '');
    content = content.replace(/`\s*$/gm, '');
    content = content.replace(/^\s*`\s*$/gm, '');

    // Count fixes
    const originalContent = fs.readFileSync(filePath, 'utf8');
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    for (const fix of fixes) {
      content = content.replace(fix.pattern, fix.replacement);
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax in ${filePath}`);
      return true;
    }

    if (fixes > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${fixes} issues in ${filePath}`);
    } else {
        console.log(`✨ No issues found in ${filePath}`);
    }

    return fixes;
}

// Process all files
let totalFixes = 0;
filesToFix.forEach(file => {
    totalFixes += fixFile(file);
});console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${filesToFix.length}`);
console.log(`   Total fixes applied: ${totalFixes}`);
if (totalFixes > 0) {
    console.log('\n✅ Final syntax error fixing completed!');
} else {
    console.log('\n✨ No syntax errors found to fix.');
function main() {
  console.log('🔧 Starting final syntax fixes...');
  
  const extensions = ['.ts', '.tsx', '.js', '.jsx', '.cjs', '.mjs'];
  const files = findFiles(process.cwd(), extensions);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`✅ Fixed syntax in ${fixedCount} files`);
  console.log('🎉 Final syntax fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, findFiles };=======>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    "replacement"
    "replacement"
    "replacement"
