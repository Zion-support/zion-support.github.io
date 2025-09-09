#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔧 Fixing extra braces...');

function fixExtraBraces() {
  // Find all TypeScript/JavaScript files
  const files = execSync('find . -name "*.tsx" -o -name "*.ts" | grep -v node_modules', { encoding: 'utf8' })
    .split('\n')
    .filter(f => f.trim());
  
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;
      
      // Fix extra }); at the end of files
      if (content.trim().endsWith('});')) {
        content = content.replace(/\s*}\);$/, '');
      }
      
      // Fix extra }); after export default
      content = content.replace(/export default \w+;\s*}\);$/gm, 'export default $1;');
      
      if (content !== originalContent) {
        fs.writeFileSync(file, content);
        console.log(`✅ Fixed ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.log(`❌ Error fixing ${file}: ${error.message}`);
    }
  }
  
  console.log(`\n📊 Fixed ${fixedCount} files`);
  return fixedCount;
}

// Run the fixer
const fixedCount = fixExtraBraces();

if (fixedCount > 0) {
  console.log('\n🎉 Extra braces fixed successfully!');
} else {
  console.log('\n✅ No extra braces found - all clean!');
}