#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Fixing remaining syntax errors...');

// Additional syntax error patterns to fix
const additionalFixes = [
  // Fix semicolons in object properties (more comprehensive)
  {
    pattern: /(\w+):\s*([^,;]+);(\s*$|\s*\n)/gm,
    replacement: '$1: $2,$3',
    description: 'Fix semicolons in object properties'
  },
  // Fix semicolons in function calls
  {
    pattern: /(\w+\([^)]*\));(\s*$|\s*\n)/gm,
    replacement: '$1,$2',
    description: 'Fix semicolons in function calls'
  },
  // Fix semicolons in array elements
  {
    pattern: /(\{[^}]*\});(\s*$|\s*\n)/gm,
    replacement: '$1,$2',
    description: 'Fix semicolons in array elements'
  },
  // Fix semicolons in template literals
  {
    pattern: /(`[^`]*`);(\s*$|\s*\n)/gm,
    replacement: '$1,$2',
    description: 'Fix semicolons in template literals'
  },
  // Fix semicolons in string literals
  {
    pattern: /('[^']*');(\s*$|\s*\n)/gm,
    replacement: '$1,$2',
    description: 'Fix semicolons in string literals'
  },
  // Fix semicolons in double-quoted strings
  {
    pattern: /("[^"]*");(\s*$|\s*\n)/gm,
    replacement: '$1,$2',
    description: 'Fix semicolons in double-quoted strings'
  },
  // Fix semicolons in variable assignments
  {
    pattern: /(\w+\s*=\s*[^;]+);(\s*$|\s*\n)/gm,
    replacement: '$1,$2',
    description: 'Fix semicolons in variable assignments'
  },
  // Fix semicolons in property access
  {
    pattern: /(\w+\.\w+);(\s*$|\s*\n)/gm,
    replacement: '$1,$2',
    description: 'Fix semicolons in property access'
  },
  // Fix semicolons in method calls
  {
    pattern: /(\w+\.\w+\([^)]*\));(\s*$|\s*\n)/gm,
    replacement: '$1,$2',
    description: 'Fix semicolons in method calls'
  }
];

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    additionalFixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
        console.log(`  ✓ ${fix.description}`);
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`  ❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript and JavaScript files
const patterns = [
  'pages/api/**/*.ts',
  'pages/api/**/*.js',
  'components/**/*.tsx',
  'components/**/*.ts',
  'utils/**/*.ts',
  'lib/**/*.ts'
];

let totalFiles = 0;
let fixedFiles = 0;

patterns.forEach(pattern => {
  const files = glob.sync(pattern, { cwd: process.cwd() });
  totalFiles += files.length;
  
  files.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    
    if (fixFile(fullPath)) {
      fixedFiles++;
      console.log(`  ✅ Fixed: ${file}`);
    }
  });
});

console.log(`\n🎉 Additional fixes summary:`);
console.log(`  📁 Total files processed: ${totalFiles}`);
console.log(`  🔧 Files modified: ${fixedFiles}`);

if (fixedFiles > 0) {
  console.log(`\n✨ Successfully fixed ${fixedFiles} additional files!`);
} else {
  console.log(`\n✨ No additional files needed fixing.`);
}

console.log('\n🏁 Additional syntax error resolution complete!');