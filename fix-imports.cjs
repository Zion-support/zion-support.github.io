#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Fixing import statement syntax errors...');

// Function to fix import statements in a file
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix import statements that have commas instead of semicolons
    const importFix = content.replace(/^import\s+.*?,\s*$/gm, (match) => {
      const fixed = match.replace(/,\s*$/, ';');
      if (fixed !== match) {
        modified = true;
        console.log(`  ✓ Fixed import statement`);
      }
      return fixed;
    });
    
    content = importFix;
    
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
    
    if (fixImports(fullPath)) {
      fixedFiles++;
      console.log(`  ✅ Fixed imports: ${file}`);
    }
  });
});

console.log(`\n🎉 Import fixes summary:`);
console.log(`  📁 Total files processed: ${totalFiles}`);
console.log(`  🔧 Files modified: ${fixedFiles}`);

if (fixedFiles > 0) {
  console.log(`\n✨ Successfully fixed ${fixedFiles} files!`);
} else {
  console.log(`\n✨ No import fixes needed.`);
}

console.log('\n🏁 Import statement fixes complete!');