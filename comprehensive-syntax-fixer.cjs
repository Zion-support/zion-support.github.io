#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors
    content = content.replace(/([\s\S]*?)
    content = content.replace(//g, '');
    content = content.replace(/
    
    // Fix shebang issues
    if (content.includes('#!/usr/bin/env node') && !content.startsWith('#!/usr/bin/env node')) {
      content = content.replace(/.*#!/usr\/bin\/env node.*\n/g, '#!/usr/bin/env node\n');
    }
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+)\s*(\w+)\s*:/g, '$1: $2:');
    content = content.replace(/(\w+):\s*(\w+)\s*:/g, '$1: $2:');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*(\w+)\s*}/g, '$1; $2}');
    content = content.replace(/(\w+)\s*(\w+)\s*]/g, '$1; $2]');
    
    // Fix unterminated strings
    content = content.replace(/(['"`])([^'"`]*?)(\n)/g, '$1$2$1$3');
    
    // Fix missing quotes in object keys
    content = content.replace(/(\w+):/g, '"$1":');
    
    // Fix missing commas between array elements
    content = content.replace(/(\w+)\s*(\w+)\s*]/g, '$1, $2]');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors: in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithErrors(dir) {
  const files = [];
  const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build', 'backup-merge-conflicts'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(fullPath);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔍 Scanning for files with syntax errors...');
const files = findFilesWithErrors(process.cwd());

console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
console.log('🎉 Syntax error fixing complete!');