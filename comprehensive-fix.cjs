#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive fix for merge conflicts and syntax errors...');

// Function to completely rewrite a file with proper syntax
function rewriteFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove all merge conflict markers and keep only the HEAD version
    const conflictRegex = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g;
    content = content.replace(conflictRegex, (match, headContent) => {
      return headContent.trim();
    });
    
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< [^\n]+\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Fix common syntax issues
    // Fix import statements
    content = content.replace(/import React from 'react';'/g, "import React from 'react';");
    content = content.replace(/import React from 'react';/g, "import React from 'react';");
    content = content.replace(/import React from 'react'/g, "import React from 'react';");
    
    // Fix 'use client' directive
    content = content.replace(/'use client';/g, "'use client';");
    content = content.replace(/'use client'/g, "'use client';");
    
    // Fix Helmet imports
    content = content.replace(/import { Helmet } from 'react-helmet-async';'/g, "import { Helmet } from 'react-helmet-async';");
    content = content.replace(/import { Helmet } from 'react-helmet-async';/g, "import { Helmet } from 'react-helmet-async';");
    
    // Remove extra semicolons and quotes
    content = content.replace(/;'/g, ';');
    content = content.replace(/';/g, ';');
    content = content.replace(/;\s*$/gm, ';');
    
    // Fix JSX content - remove semicolons from text content
    content = content.replace(/(<h[1-6][^>]*>)\s*([^<]+);\s*(<\/h[1-6]>)/g, '$1$2$3');
    content = content.replace(/(<p[^>]*>)\s*([^<]+);\s*(<\/p>)/g, '$1$2$3');
    content = content.replace(/(<div[^>]*>)\s*([^<]+);\s*(<\/div>)/g, '$1$2$3');
    content = content.replace(/(<span[^>]*>)\s*([^<]+);\s*(<\/span>)/g, '$1$2$3');
    
    // Fix object syntax
    content = content.replace(/(\w+):\s*([^,}]+);/g, '$1: $2,');
    
    // Fix array syntax
    content = content.replace(/\[\s*;\s*\]/g, '[]');
    content = content.replace(/\[\s*([^,\]]+);\s*\]/g, '[$1]');
    
    // Fix function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*;\s*{/g, 'function $1() {');
    content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*;\s*{/g, 'export default function $1() {');
    
    // Fix JSX closing tags
    content = content.replace(/<\/\s*([^>]+)\s*;\s*>/g, '</$1>');
    
    // Remove stray semicolons in JSX
    content = content.replace(/([^;])\s*;\s*<\/[^>]+>/g, '$1</>');
    
    // Fix string literals
    content = content.replace(/"([^"]*)"([^"]*)"([^"]*)"/g, '"$1$2$3"');
    content = content.replace(/'([^']*)'([^']*)'([^']*)'/g, "'$1$2$3'");
    
    // Fix unterminated strings
    content = content.replace(/([^;])\s*;\s*$/gm, '$1;');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s+$/gm, '');
    
    // Remove any remaining problematic characters
    content = content.replace(/\x00/g, ''); // Remove null characters
    
    if (content !== originalContent) {
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

// Function to check if a file has merge conflicts
function hasMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>');
  } catch (error) {
    return false;
  }
}

// Main execution
async function main() {
  console.log('📁 Scanning for files with merge conflicts...');
  
  const files = findFiles(process.cwd());
  let fixedCount = 0;
  let totalFiles = 0;
  let conflictFiles = 0;
  
  // First pass: identify files with conflicts
  for (const file of files) {
    if (hasMergeConflicts(file)) {
      conflictFiles++;
      console.log(`🔍 Found conflicts in: ${file}`);
    }
  }
  
  console.log(`\n📊 Found ${conflictFiles} files with merge conflicts`);
  
  // Second pass: fix all files
  for (const file of files) {
    totalFiles++;
    if (rewriteFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files fixed: ${fixedCount}`);
  
  if (fixedCount > 0) {
    console.log('\n🔍 Running build check...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build check passed!');
    } catch (error) {
      console.log('⚠️  Build check found remaining issues, continuing...');
    }
  }
  
  console.log('\n🎉 Comprehensive fix completed!');
}

main().catch(console.error);