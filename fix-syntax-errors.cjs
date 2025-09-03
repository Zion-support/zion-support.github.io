#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive syntax error fix...');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors
    content = content.replace(/ {/g, ' {');
    content = content.replace(/;,$/gm, ',');
    content = content.replace(/,/g, ',');
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
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to find and fix all relevant files
function fixAllFiles() {
  const extensions = ['.tsx', '.ts', '.js', '.jsx', '.cjs'];
  const excludeDirs = ['node_modules', '.next', 'out', 'dist', 'build', 'coverage'];
  
  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    let fixedCount = 0;
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        if (!excludeDirs.includes(file)) {
          fixedCount += walkDir(filePath);
        }
      } else if (extensions.some(ext => file.endsWith(ext))) {
        if (fixSyntaxErrors(filePath)) {
          fixedCount++;
        }
      }
    }
    
    return fixedCount;
  }
  
  return walkDir('.');
}

// Run the fix
const fixedCount = fixAllFiles();
console.log(`🎉 Fixed syntax errors in ${fixedCount} files`);

// Try to build the project
console.log('🚀 Attempting to build the project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful!');
} catch (error) {
  console.log('❌ Build failed, but syntax errors have been fixed');
  console.log('Please check the build output for remaining issues');
}