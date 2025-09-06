#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing syntax errors in the codebase...');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`  🔄 Fixing merge conflicts in ${filePath}`);
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
      modified = true;
    }

    // Fix unterminated string literals
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Fix unterminated strings
      if (line.includes('"') && !line.match(/".*"/)) {
        if (line.includes('"') && !line.includes('\\"')) {
          lines[i] = line.replace(/"([^"]*)$/, '"$1"');
          modified = true;
        }
      }
      
      // Fix unterminated template literals
      if (line.includes('`') && !line.match(/`.*`/)) {
        lines[i] = line.replace(/`([^`]*)$/, '`$1`');
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, lines.join('\n'));
      return true;
    }
  } catch (error) {
    console.log(`  ❌ Error fixing ${filePath}: ${error.message}`);
  }
  return false;
}

// Function to fix specific file types
function fixFile(filePath) {
  const ext = path.extname(filePath);
  if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
    return fixSyntaxErrors(filePath);
  }
  return false;
}

// Get all files with syntax errors
const files = execSync('find src -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

let fixedCount = 0;
let totalFiles = files.length;

console.log(`Found ${totalFiles} files to check`);

for (const file of files) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
}

console.log(`\n✅ Fixed ${fixedCount} files out of ${totalFiles}`);
console.log('🎯 Syntax error fixing complete!');