const fs = require('fs');
const path = require('path');

// Function to fix common syntax issues in React/Next.js files
function fixSyntaxIssues(content) {
  // Fix missing semicolons after imports
  content = content.replace(/(import [^;]+)(\n)/g, '$1;$2');
  
  // Fix malformed JSX return statements
  content = content.replace(/return \(<div>/g, 'return (\n    <div>');
  
  // Fix unterminated strings with extra quotes
  content = content.replace(/'use client'"/g, "'use client';");
  content = content.replace(/import React from 'react'"/g, "import React from 'react';");
  content = content.replace(/import Head from 'next\/head'"/g, "import Head from 'next/head';");
  content = content.replace(/import Link from 'next\/link'"/g, "import Link from 'next/link';");
  content = content.replace(/import Footer from '\.\.\/components\/Footer'"/g, "import Footer from '../components/Footer';");
  
  // Fix malformed JSX attributes
  content = content.replace(/content="([^"]*)" \/>"/g, 'content="$1" />');
  content = content.replace(/content="([^"]*)" \/>"/g, 'content="$1" />');
  
  // Fix malformed JSX closing tags
  content = content.replace(/    <\/>"/g, '    </>');
  content = content.replace(/  \);"/g, '  );');
  content = content.replace(/}\"'/g, '}');
  
  // Fix missing semicolons in function declarations
  content = content.replace(/export default function ServicePage\(\) \{\n  return \(/g, 'export default function ServicePage() {\n  return (');
  
  // Fix malformed JSX structure
  content = content.replace(/return \(<div>\n      <Head>/g, 'return (\n    <div>\n      <Head>');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has syntax issues
    if (content.includes('return (<div>') || 
        content.includes('import [^;]+$') || 
        content.includes('" />"') ||
        content.includes('</>")')) {
      
      console.log(`Fixing syntax issues in: ${filePath}`);
      
      const fixed = fixSyntaxIssues(content);
      
      fs.writeFileSync(filePath, fixed);
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
console.log('Starting syntax error fixes...');
const processedCount = processDirectory('/workspace/app');
console.log(`\n✓ Processed ${processedCount} files with syntax issues`);

console.log('\nSyntax error fixes completed!');