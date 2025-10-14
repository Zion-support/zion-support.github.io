#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting comprehensive error fixing and merge conflict resolution...');

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<React\.Fragment>\s*<\/React\.Fragment>/g, '<></>');
  fixed = fixed.replace(/<React\.Fragment>/g, '<>');
  fixed = fixed.replace(/<\/React\.Fragment>/g, '</>');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*\)\s*</g, 'return (');
  fixed = fixed.replace(/return\s*\(\s*\)\s*$/gm, 'return null;');
  
  // Fix duplicate semicolons and quotes
  fixed = fixed.replace(/;;+/g, ';');
  fixed = fixed.replace(/''+/g, "'");
  fixed = fixed.replace(/""+/g, '"');
  
  // Fix malformed imports
  fixed = fixed.replace(/import\s+.*?;+;+/g, (match) => match.replace(/;+$/, ';'));
  
  // Fix unterminated strings
  fixed = fixed.replace(/"([^"]*?)\n/g, '"$1"');
  fixed = fixed.replace(/'([^']*?)\n/g, "'$1'");
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*?)";+"/g, 'className="$1"');
  fixed = fixed.replace(/className='([^']*?)';+'/g, "className='$1'");
  
  // Fix merge conflict markers
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  fixed = fixed.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/function\s+(\w+)\s*\(\s*\)\s*\{\s*\}\s*return/g, 'function $1() {\n  return');
  
  // Fix missing closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  if (openBraces > closeBraces) {
    fixed += '\n'.repeat(openBraces - closeBraces) + '}';
  }
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<\/\s*React\.Fragment\s*>/g, '</>');
  
  return fixed;
}

// Function to fix specific file patterns
function fixFilePatterns(filePath, content) {
  let fixed = content;
  
  // Fix common page component patterns
  if (filePath.includes('/page.tsx') || filePath.includes('/page.jsx')) {
    // Ensure proper React component structure
    if (!fixed.includes('export default')) {
      fixed = fixed.replace(/(const\s+\w+\s*=\s*\(\)\s*=>\s*{)/, '$1\n  return (');
    }
    
    // Fix missing return statements
    if (fixed.includes('const') && fixed.includes('=>') && !fixed.includes('return')) {
      fixed = fixed.replace(/(const\s+\w+\s*=\s*\(\)\s*=>\s*{)/, '$1\n  return (');
    }
  }
  
  // Fix component files
  if (filePath.includes('/components/')) {
    // Ensure proper export
    if (!fixed.includes('export') && fixed.includes('function')) {
      fixed = fixed.replace(/(function\s+\w+)/, 'export $1');
    }
  }
  
  return fixed;
}

// Main fixing function
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixSyntaxErrors(content);
    content = fixFilePatterns(filePath, content);
    
    // Only write if content changed
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

// Find and fix all files
const files = findFiles('./app');
const files2 = findFiles('./src');
const files3 = findFiles('./', ['.tsx', '.ts', '.jsx', '.js']).filter(f => 
  !f.includes('node_modules') && 
  !f.includes('.git') &&
  (f.includes('App') || f.includes('main'))
);

const allFiles = [...files, ...files2, ...files3];
let fixedCount = 0;

console.log(`📁 Found ${allFiles.length} files to check...`);

for (const file of allFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`\n🎉 Fixed ${fixedCount} files!`);

// Run linting to check for remaining issues
console.log('\n🔍 Running linting check...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('✅ Linting passed!');
} catch (error) {
  console.log('⚠️  Linting found issues, but continuing...');
}

// Run type check
console.log('\n🔍 Running type check...');
try {
  execSync('npm run type-check', { stdio: 'inherit' });
  console.log('✅ Type check passed!');
} catch (error) {
  console.log('⚠️  Type check found issues, but continuing...');
}

// Run build
console.log('\n🔍 Running build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful!');
} catch (error) {
  console.log('⚠️  Build had issues, but continuing...');
}

console.log('\n🏁 Comprehensive fix completed!');