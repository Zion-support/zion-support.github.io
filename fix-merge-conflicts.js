const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to clean merge conflicts and syntax errors
function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Fix common syntax errors
    // Remove extra quotes and semicolons
    content = content.replace(/;\"/g, '"');
    content = content.replace(/\"\"/g, '"');
    content = content.replace(/;\n/g, '\n');
    content = content.replace(/;\s*$/gm, '');
    
    // Fix JSX syntax errors
    content = content.replace(/<div>\s*<Head>/g, '<div>\n      <Head>');
    content = content.replace(/<\/Head>\s*<div/g, '</Head>\n      <div');
    
    // Fix import statements
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;\s*$/gm, "import { $1 } from '$2';");
    
    // Fix function declarations
    content = content.replace(/export default function\s+(\w+)\s*\(\s*\)\s*{\s*return\s*\(\s*<div>/g, 'export default function $1() {\n  return (\n    <div>');
    
    // Fix closing tags and parentheses
    content = content.replace(/\)\s*}\s*;?\s*$/gm, '  );\n}');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    // Fix specific patterns
    content = content.replace(/const NotFound = \(return \(<>;/g, 'const NotFound = () => {\n  return (\n    <>');
    content = content.replace(/from from /g, 'from ');
    content = content.replace(/;\s*$/gm, '');
    
    // Fix JSX closing tags
    content = content.replace(/<\/div>\s*\)\s*;\s*$/gm, '</div>\n  );\n}');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to find all TypeScript/JSX files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
=======
// Function to resolve merge conflicts by keeping the HEAD version
function resolveMergeConflicts(content) {
  // Remove merge conflict markers and keep HEAD version
  let resolved = content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+$/g, '$1');
  
  return resolved;
}

// Function to fix common syntax issues
function fixSyntaxIssues(content) {
  // Fix unterminated strings with extra quotes
  content = content.replace(/'use client';/g, "'use client';");
  content = content.replace(/import React from 'react;/g, "import React from 'react';");
  content = content.replace(/import Head from 'next\/head";/g, "import Head from next/head';");
  
  // Fix JSX syntax issues
  content = content.replace(/return \(<div>/g, 'return (\n    <div>');
  content = content.replace(/;\n/g, ';\n');
  
  // Fix unterminated JSX
  content = content.replace(/    <>\n([\s\S]*?)    <>/g, '    <>\n$1    </>');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<< HEAD')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      let resolved = resolveMergeConflicts(content);
      resolved = fixSyntaxIssues(resolved);
      
      fs.writeFileSync(filePath, resolved);
      console.log(`✓ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          processedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        if (processFile(fullPath)) {
          processedCount++;
        }
>>>>>>> origin/main
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
<<<<<<< HEAD
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict cleanup...');

const files = findTsxFiles('/workspace');
console.log(`Found ${files.length} TypeScript/JSX files to process`);

files.forEach(file => {
  cleanFile(file);
});

console.log('Merge conflict cleanup completed!');
=======
  return processedCount;
}

// Main execution
console.log('Starting merge conflict resolution...');
const processedCount = processDirectory('/workspace');
console.log(`\n✓ Processed ${processedCount} files with merge conflicts`);

// Also fix the sitemap duplicate issue
const sitemapXmlPath = '/workspace/app/sitemap.xml/page.tsx';
if (fs.existsSync(sitemapXmlPath)) {
  console.log('Removing duplicate sitemap.xml page...');
  fs.unlinkSync(sitemapXmlPath);
  console.log('✓ Removed duplicate sitemap.xml page');
}

console.log('\nMerge conflict resolution completed!');
>>>>>>> origin/main
