const fs = require('fs');
const path = require('path');

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
  content = content.replace(/import React from 'react';/g, "import React from 'react';");
  content = content.replace(/import Head from 'next\/head";/g, "import Head from 'next/head';");
  
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
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
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