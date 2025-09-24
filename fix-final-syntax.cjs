#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Final targeted fixes for remaining syntax errors
const fixes = [
  // Fix missing semicolons in import statements
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*$/gm,
    replacement: 'import { $1 } from \'$2\';'
  },
  // Fix malformed import statements
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*export\s*default\s*function/g,
    replacement: 'import { $1 } from \'$2\';\n\nexport default function'
  },
  // Fix missing semicolons after import statements
  {
    pattern: /import\s+([^;]+)\s*$/gm,
    replacement: 'import $1;'
  },
  // Fix unterminated string literals
  {
    pattern: /"([^"]*)\s*$/gm,
    replacement: '"$1";'
  },
  // Fix malformed function declarations
  {
    pattern: /export\s*default\s*function\s*(\w+)\s*\(\s*\)\s*{\s*$/gm,
    replacement: 'export default function $1() {\n  return ('
  },
  // Fix missing closing brackets and parentheses
  {
    pattern: /return\s*\(\s*<div[^>]*>\s*$/gm,
    replacement: 'return (\n    <div>'
  },
  
  // Fix missing closing tags
  {
    pattern: /<div[^>]*>\s*$/gm,
    replacement: '<div>\n  </div>'
  },
  
  // Fix malformed JSX
  {
    pattern: /<(\w+)[^>]*>\s*$/gm,
    replacement: '<$1>\n  </$1>'
  }
];

const filesToFix = [
  'src/components/ui/button.tsx',
  'src/components/ui/input.tsx',
  'src/components/ui/label.tsx',
  'src/components/ui/card.tsx',
  'src/components/ui/textarea.tsx',
  'src/components/ui/use-toast.ts'
];
function fixFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return 0;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let fixCount = 0;
    
    // Apply each fix
    fixes.forEach((fix, index) => {
      const originalContent = content;
      content = content.replace(fix.pattern, fix.replacement);
      if (content !== originalContent) {
        modified = true;
        fixCount++;
        console.log(`  ✅ Applied fix ${index + 1} to ${filePath}`);
      }
    });
    
    // Special fixes for specific files
    if (filePath.includes('textarea.tsx')) {
      if (content.includes('export default function Textarea') && !content.includes('return')) {
        content = content.replace(
          /export default function Textarea[^{]*{/g,
          'export default function Textarea() {\n  return ('
        );
        modified = true;
        fixCount++;
        console.log(`  ✅ Applied special fix for textarea.tsx`);
      }
    }
    
    if (filePath.includes('use-toast.ts')) {
      if (content.includes('export const useToast') && !content.includes('return')) {
        content = content.replace(
          /export const useToast[^{]*{/g,
          'export const useToast = () => {\n  return {'
        );
        modified = true;
        fixCount++;
        console.log(`  ✅ Applied special fix for use-toast.ts`);
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed ${fixCount} issues in ${filePath}`);
    } else {
      console.log(`ℹ️  No fixes needed for ${filePath}`);
    }
    
    return fixCount;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return 0;
  }
}

console.log('🔧 Fixing final syntax errors...');

let totalFixes = 0;
filesToFix.forEach(file => {
  totalFixes += fixFile(file);
});

console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${filesToFix.length}`);
console.log(`   Total fixes applied: ${totalFixes}`);

if (totalFixes > 0) {
  console.log('\n✅ Syntax fixes completed successfully!');
} else {
  console.log('\nℹ️  No syntax issues found.');
}