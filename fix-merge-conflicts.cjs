#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict and syntax error fix...');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers and keep the HEAD version (first part)
    const conflictRegex = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g;
    const originalContent = content;
    content = content.replace(conflictRegex, (match, headContent, otherContent) => {
      modified = true;
      return headContent.trim();
    });

    // Fix common syntax errors
    // Remove extra semicolons and quotes
    content = content.replace(/;'/g, ';');
    content = content.replace(/';/g, ';');
    content = content.replace(/;\s*$/gm, ';');
    
    // Fix unterminated strings
    content = content.replace(/([^;])\s*;\s*$/gm, '$1;');
    
    // Fix JSX syntax issues
    content = content.replace(/([^>])\s*;\s*>/g, '$1>');
    content = content.replace(/;\s*<\/[^>]+>/g, '</>');
    
    // Remove stray semicolons in JSX
    content = content.replace(/([^;])\s*;\s*<\/[^>]+>/g, '$1</>');
    
    // Fix React import issues
    content = content.replace(/import React from 'react';'/g, "import React from 'react';");
    content = content.replace(/import React from 'react';/g, "import React from 'react';");
    
    // Fix 'use client' directive
    content = content.replace(/'use client';/g, "'use client';");
    content = content.replace(/'use client'/g, "'use client';");
    
    // Fix JSX content issues
    content = content.replace(/(<h[1-6][^>]*>)\s*([^<]+);\s*(<\/h[1-6]>)/g, '$1$2$3');
    content = content.replace(/(<p[^>]*>)\s*([^<]+);\s*(<\/p>)/g, '$1$2$3');
    content = content.replace(/(<div[^>]*>)\s*([^<]+);\s*(<\/div>)/g, '$1$2$3');
    
    // Fix object syntax issues
    content = content.replace(/(\w+):\s*([^,}]+);/g, '$1: $2,');
    
    // Remove extra quotes in strings
    content = content.replace(/"([^"]*)"([^"]*)"([^"]*)"/g, '"$1$2$3"');
    content = content.replace(/'([^']*)'([^']*)'([^']*)'/g, "'$1$2$3'");
    
    // Fix array syntax
    content = content.replace(/\[\s*;\s*\]/g, '[]');
    content = content.replace(/\[\s*([^,\]]+);\s*\]/g, '[$1]');
    
    // Fix function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*;\s*{/g, 'function $1() {');
    
    // Fix export statements
    content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*;\s*{/g, 'export default function $1() {');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s+$/gm, '');
    
    if (modified || content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          files = files.concat(findFiles(fullPath, extensions));
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Skip directories we can't read
  }
  
  return files;
}

// Main execution
async function main() {
  console.log('📁 Scanning for files with merge conflicts...');
  
  const files = findFiles(process.cwd());
  let fixedCount = 0;
  let totalFiles = 0;
  
  for (const file of files) {
    totalFiles++;
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files fixed: ${fixedCount}`);
  
  if (fixedCount > 0) {
    console.log('\n🔍 Running lint check...');
    try {
      execSync('npm run lint', { stdio: 'inherit' });
      console.log('✅ Lint check passed!');
    } catch (error) {
      console.log('⚠️  Lint check found remaining issues, continuing...');
    }
    
    console.log('\n🔍 Running type check...');
    try {
      execSync('npm run type-check', { stdio: 'inherit' });
      console.log('✅ Type check passed!');
    } catch (error) {
      console.log('⚠️  Type check found remaining issues, continuing...');
    }
    
    console.log('\n🔍 Running build check...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build check passed!');
    } catch (error) {
      console.log('⚠️  Build check found remaining issues, continuing...');
    }
  }
  
  console.log('\n🎉 Merge conflict fix completed!');
}

main().catch(console.error);