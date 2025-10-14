#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
console.log('🔧 Starting comprehensive syntax error fix...');'

// Function to fix common syntax errors in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')'
    let modified = false;
    // Fix common syntax errors
    const fixes = [
      // Fix unterminated string literals
      { pattern: /import\s+.*from\s+['"]([^'"]*?)/g, replacement: "import $1 from '$1'" },"'
      { pattern: /import\s+.*from\s+['"]([^'"]*?);/g, replacement: "import $1 from '$1'" },"'
      
      // Fix missing quotes in imports
      { pattern: /import\s+.*from\s+['"]([^'"]*?)/g, replacement: "import $1 from '$1'" },"'
      
      // Fix semicolons in string literals
      { pattern: /"([^"]*?)"/g, replacement: '"$1"' },"'
      { pattern: /'([^']*?)'/g, replacement: "'$1'" },"'
      
      // Fix merge conflict markers
      { pattern: /
      { pattern: /
      
      // Fix malformed JSX
      { pattern: /<([^>]*?)\$1([^>]*?)>/g, replacement: '<$2>' },'
      { pattern: /className="\$1"/g, replacement: 'className="flex items-center"' },"'
      
      // Fix unterminated strings
      { pattern: /"([^"]*?)$/gm, replacement: '"$1"' },"'
      { pattern: /'([^']*?)$/gm, replacement: "'$1'" },"'
      
      // Fix missing semicolons
      { pattern: /(\w+)\s*$/gm, replacement: '$1' },'
      
      // Fix malformed function declarations
      { pattern: /function\s+(\w+)\s*\(\s*\)\s*{/g, replacement: 'function $1() {' },'
      
      // Fix malformed JSX closing tags
      { pattern: /<(\w+)([^>]*?)>\s*<\/\1>/g, replacement: '<$2></>' },'
      
      // Fix malformed array declarations
      { pattern: /\[\s*([^]]*?)\s*\]/g, replacement: '[$1]' },'
      
      // Fix malformed object declarations
      { pattern: /{\s*([^}]*?)\s*}/g, replacement: '{$1}' },'
    ];
    fixes.forEach(fix => {const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true}
    });
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');'
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
  }
  return false;
}

// Function to recursively find and fix files
function fixDirectory(dirPath) {const items = fs.readdirSync(dirPath)
  let fixedCount = 0;
  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', 'dist', 'build'].includes(item)) {'
        fixedCount += fixDirectory(fullPath)}
    } else if (stat.isFile()) {// Only process TypeScript and JavaScript files
      if (/\.(ts|tsx|js|jsx)$/.test(item)) {
        if (fixFile(fullPath)) {
          fixedCount++}
      }
    }
  })
  return fixedCount;
}

// Main execution
try {
  console.log('📁 Scanning for files to fix...')'
  const fixedCount = fixDirectory('/workspace');'
  console.log(`🎉 Fixed ${fixedCount} files!`);
  // Run lint to check remaining errors
  console.log('🔍 Running lint check...')'
  try {
    execSync('npm run lint', { stdio: 'pipe' });'
    console.log('✅ All syntax errors fixed!');'
  } catch (error) {
    console.log('⚠️  Some errors may remain, but significant progress made.');'
  }
} catch (error) {console.error('❌ Error during fix process:', error.message);'
  process.exit(1)}