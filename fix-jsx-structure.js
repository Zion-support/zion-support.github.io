const fs = require('fs');
const path = require('path');

// Function to fix JSX structure issues
function fixJSXStructure(content) {
  // Check if this is a Next.js page component
  const isNextPage = content.includes('export default') && content.includes('function');
  
  if (!isNextPage) return content;

  // Fix the main structural issues
  let fixed = content
    // Fix return statements that have malformed JSX
    .replace(/return \(\s*<>\s*<title>/g, 'return (\n    <>\n      <Head>\n        <title>')
    .replace(/<\/title>\s*<h1/g, '</title>\n      </Head>\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">\n          <h1')
    .replace(/<\/h1>\s*<p/g, '</h1>\n          <p')
    .replace(/<\/p>\s*<\/>/g, '</p>\n        </div>\n      </div>\n    </>')
    
    // Add missing imports
    .replace(/import React from 'react';/g, `import React from 'react';\nimport Head from 'next/head';\nimport Link from 'next/link';\nimport { ArrowRight } from 'lucide-react';`)
    
    // Fix malformed closing tags
    .replace(/\)\s*\);\s*$/gm, ');')
    .replace(/\)\s*\)\s*$/gm, ')')
    
    // Clean up any remaining malformed JSX
    .replace(/<>\s*<>\s*/g, '<>')
    .replace(/\s*<>\s*<\/>/g, '')
    .replace(/<>\s*<\/>\s*/g, '')
    
    // Fix malformed function exports
    .replace(/export default (\w+);\s*const \1: React\.FC = \(\) => \{/g, 'const $1: React.FC = () => {')
    .replace(/export default (\w+);\s*const \1: React\.FC = \(\) => \{/g, 'const $1: React.FC = () => {');

  // If the file doesn't have proper JSX structure, create a basic one
  if (fixed.includes('<title>') && !fixed.includes('<Head>')) {
    fixed = fixed
      .replace(/return \(\s*<>\s*<title>/g, 'return (\n    <>\n      <Head>\n        <title>')
      .replace(/<\/title>\s*<h1/g, '</title>\n      </Head>\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">\n          <h1')
      .replace(/<\/h1>\s*<p/g, '</h1>\n          <p')
      .replace(/<\/p>\s*<\/>/g, '</p>\n        </div>\n      </div>\n    </>');
  }

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXStructure(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed structure: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
const pageFiles = findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page.tsx files`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed structure in ${fixedCount} files`);