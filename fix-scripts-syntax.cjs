#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing syntax errors in scripts directory...');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors
    content = content.replace(/ {;/g, ' {');
    content = content.replace(/;,$/gm, ',');
    content = content.replace(/,,/g, ',');
    content = content.replace(/;$/gm, ';');
    content = content.replace(/^;$/gm, '');
    content = content.replace(/^; /gm, '');
    content = content.replace(/; /gm, '; ');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    content = content.replace(/,\s*\)/g, ')');
    
    // Fix specific patterns
    content = content.replace(/}\s*else\s*{/g, '} else {');
    content = content.replace(/}\s*;\s*$/gm, '}');
    content = content.replace(/^\s*;\s*$/gm, '');
    content = content.replace(/require\("\$1"\)/g, 'require("fs")');
    content = content.replace(/require\("\$1"\)/g, 'require("path")');
    
    // Fix comment syntax
    content = content.replace(/^#!\/usr\/bin\/env node;$/gm, '#!/usr/bin/env node');
    content = content.replace(/\/\*\*;/g, '/**');
    content = content.replace(/\*\/;/g, '*/');
    content = content.replace(/^\s*\*;/gm, ' *');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

// Fix all .cjs files in scripts directory
const scriptsDir = './scripts';
const files = fs.readdirSync(scriptsDir);
let fixedCount = 0;

for (const file of files) {
  if (file.endsWith('.cjs')) {
    const filePath = path.join(scriptsDir, file);
    if (fixFile(filePath)) {
      fixedCount++;
    }
  }
}

console.log(`🎉 Fixed ${fixedCount} script files`);