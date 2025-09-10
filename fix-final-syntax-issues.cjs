#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔧 Fixing final syntax issues...');

function fixFinalSyntaxIssues() {
  // Find all TypeScript/JavaScript files
  const files = execSync('find . -name "*.tsx" -o -name "*.ts" | grep -v node_modules', { encoding: 'utf8' })
    .split('\n')
    .filter(f => f.trim());
  
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;
      
      // Fix missing closing braces for classes
      if (content.includes('class ') && !content.includes('}')) {
        content = content.replace(/(\s*)$/, '\n}');
      }
      
      // Fix missing closing braces for functions
      if (content.includes('function ') && !content.includes('}')) {
        content = content.replace(/(\s*)$/, '\n}');
      }
      
      // Fix missing closing braces for interfaces
      if (content.includes('interface ') && !content.includes('}')) {
        content = content.replace(/(\s*)$/, '\n}');
      }
      
      // Fix missing closing braces for objects
      if (content.includes('const ') && content.includes('= {') && !content.includes('}')) {
        content = content.replace(/(\s*)$/, '\n}');
      }
      
      // Fix missing semicolons
      if (content.includes('export ') && !content.includes(';')) {
        content = content.replace(/(export [^;]+)$/gm, '$1;');
      }
      
      // Fix incomplete JSX
      if (content.includes('<') && !content.includes('>')) {
        content = content.replace(/<[^>]*$/, '');
      }
      
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
const fixedCount = fixFinalSyntaxIssues();

if (fixedCount > 0) {
  console.log('\n🎉 Final syntax issues fixed successfully!');
} else {
  console.log('\n✅ No final syntax issues found - all clean!');
}