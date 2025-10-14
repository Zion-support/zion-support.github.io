#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix all remaining issues
function fixAllRemainingIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix stray closing brackets
    content = content.replace(/\s*\]\s*const\s+\w+:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*\]/g, '');
    
    // Fix malformed function declarations
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*\]/g, 'const $1: React.FC = () => {');
    
    // Fix stray closing brackets before function declarations
    content = content.replace(/\s*\]\s*const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{/g, '\nconst $1: React.FC = () => {');
    
    // Fix duplicate closing braces
    content = content.replace(/\}\s*;\s*\}\s*;\s*export\s+default/g, '};\n\nexport default');
    
    // Fix malformed export statements
    content = content.replace(/\}\s*;\s*export\s+default\s+(\w+)\s*;\s*export\s+default\s+\w+/g, '};\n\nexport default $1');
    
    // Fix stray semicolons in function declarations
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*;\s*/g, 'const $1: React.FC = () => {\n  ');
    
    // Fix malformed array declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\[\s*\]\s*;\s*const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $2: React.FC = () => {\n  const $1 = [');
    
    // Clean up multiple consecutive empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Ensure file ends with single newline
    content = content.trim() + '\n';
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔍 Searching for files with remaining issues...');
const sourceFiles = findSourceFiles('./app');

console.log(`Found ${sourceFiles.length} source files`);

let fixedCount = 0;
let errorCount = 0;

for (const file of sourceFiles) {
  try {
    if (fixAllRemainingIssues(file)) {
      fixedCount++;
      console.log(`✅ Fixed: ${file}`);
    }
  } catch (error) {
    errorCount++;
    console.error(`❌ Error fixing ${file}:`, error.message);
  }
}

console.log(`\n📊 Summary:`);
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

if (fixedCount > 0) {
  console.log('\n🎉 Remaining issues fixed! You can now run the build.');
} else {
  console.log('\n✨ No remaining issues found or all issues were already resolved.');
}
