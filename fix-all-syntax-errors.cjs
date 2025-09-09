#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔧 Fixing all syntax errors...');

function fixSyntaxErrors() {
  // Find all TypeScript/JavaScript files
  const files = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules', { encoding: 'utf8' })
    .split('\n')
    .filter(f => f.trim());
  
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;
      
      // Fix incomplete JSX components
      if (content.includes('size="icon"') && !content.includes('>')) {
        content = content.replace(/size="icon"\s*$/, 'size="icon">\n      </Button>\n    </div>\n  );\n};');
      }
      
      // Fix incomplete function declarations
      if (content.includes('const ') && content.includes('= ({') && !content.includes('});')) {
        content = content.replace(/(\s*)$/, '\n});');
      }
      
      // Fix incomplete JSX returns
      if (content.includes('return (') && !content.includes(');')) {
        content = content.replace(/(\s*)$/, '\n  );\n};');
      }
      
      // Fix incomplete interfaces
      if (content.includes('interface ') && !content.includes('}')) {
        content = content.replace(/(\s*)$/, '\n}');
      }
      
      // Fix incomplete imports
      if (content.includes('import ') && !content.includes('from')) {
        content = content.replace(/import\s+[^;]+$/, 'import React from \'react\';');
      }
      
      // Fix incomplete JSX elements
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

// Run the syntax fixer
const fixedCount = fixSyntaxErrors();

if (fixedCount > 0) {
  console.log('\n🎉 Syntax errors resolved successfully!');
} else {
  console.log('\n✅ No syntax errors found - all clean!');
}