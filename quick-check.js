#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Quick repository check...');

// Check if we're in the right directory
if (!fs.existsSync('package.json')) {
  console.error('❌ package.json not found');
  process.exit(1);
}
console.log('✅ package.json found');

// Check if src directory exists
if (!fs.existsSync('src')) {
  console.error('❌ src directory not found');
  process.exit(1);
}
console.log('✅ src directory found');

// Check if main App.tsx exists
if (!fs.existsSync('src/App.tsx')) {
  console.error('❌ src/App.tsx not found');
  process.exit(1);
}
console.log('✅ src/App.tsx found');

// Check for merge conflict markers in source files
const srcFiles = [];
function findSrcFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findSrcFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      srcFiles.push(filePath);
    }
  }
}

findSrcFiles('src');

let hasConflicts = false;
for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
    console.error(`❌ Merge conflict found in ${file}`);
    hasConflicts = true;
  }
}

if (!hasConflicts) {
  console.log('✅ No merge conflicts found in source files');
}

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.log('⚠️  node_modules not found - dependencies may need to be installed');
} else {
  console.log('✅ node_modules found');
}

// Check if dist directory exists (indicates previous successful build)
if (fs.existsSync('dist')) {
  console.log('✅ dist directory found - previous build exists');
} else {
  console.log('⚠️  dist directory not found - no previous build');
}

console.log('🎉 Quick check completed!');