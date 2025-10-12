#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix merge conflicts by keeping the latest version
function fixMergeConflicts(content) {
  const lines = content.split('\n');
  const result = [];
  let inConflict = false;
  let conflictBuffer = [];
  let currentVersion = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<<')) {
      inConflict = true;
      conflictBuffer = [];
      continue;
    }
    
    if (line.startsWith('=======')) {
      currentVersion = conflictBuffer.join('\n');
      conflictBuffer = [];
      continue;
    }
    
    if (line.startsWith('>>>>>>>')) {
      inConflict = false;
      if (currentVersion.trim()) {
        result.push(currentVersion);
      }
      currentVersion = '';
      continue;
    }
    
    if (inConflict) {
      conflictBuffer.push(line);
    } else {
      result.push(line);
    }
  }
  
  return result.join('\n');
}

// Function to fix common JSX syntax errors
function fixJSXSyntax(content) {
  // Fix spaces in attribute names (e.g., "className =" -> "className=")
  content = content.replace(/(\w+)\s+=\s*/g, '$1=');
  
  // Fix malformed JSX closing tags (e.g., "/ />" -> "/>")
  content = content.replace(/\/\s*\/>/g, '/>');
  
  // Fix malformed JSX opening tags (e.g., "<div const className=" -> "<div className=")
  content = content.replace(/<(\w+)\s+const\s+(\w+)=/g, '<$1 $2=');
  
  // Fix malformed JSX attributes with spaces (e.g., "text-4 xl" -> "text-4xl")
  content = content.replace(/text-(\d+)\s+(\w+)/g, 'text-$1$2');
  content = content.replace(/max-w-(\d+)\s+(\w+)/g, 'max-w-$1$2');
  content = content.replace(/grid-cols-(\d+)\s+(\w+)/g, 'grid-cols-$1$2');
  content = content.replace(/gap-(\d+)\s+(\w+)/g, 'gap-$1$2');
  content = content.replace(/px-(\d+)\s+(\w+)/g, 'px-$1$2');
  content = content.replace(/py-(\d+)\s+(\w+)/g, 'py-$1$2');
  content = content.replace(/w-(\d+)\s+(\w+)/g, 'w-$1$2');
  content = content.replace(/h-(\d+)\s+(\w+)/g, 'h-$1$2');
  content = content.replace(/text-(\w+)\s+(\w+)/g, 'text-$1$2');
  content = content.replace(/bg-(\w+)\s+(\w+)/g, 'bg-$1$2');
  content = content.replace(/from-(\w+)\s+(\w+)/g, 'from-$1$2');
  content = content.replace(/to-(\w+)\s+(\w+)/g, 'to-$1$2');
  
  // Fix malformed JSX fragments and self-closing tags
  content = content.replace(/<(\w+)\s*\/\s*\/>/g, '<$1 />');
  content = content.replace(/<(\w+)\s*\/\s*\/>/g, '<$1 />');
  
  // Fix missing closing tags for common elements
  content = content.replace(/<(\w+)\s+([^>]*)\s*\/\s*\/>/g, '<$1 $2 />');
  
  // Fix malformed Helmet tags
  content = content.replace(/<Helmet\s*\/\s*\/>/g, '<Helmet>');
  content = content.replace(/<\/Helmet\s*\/\s*\/>/g, '</Helmet>');
  
  // Fix malformed title tags
  content = content.replace(/<title\s+>\s*([^<]+)\s*<\/title>/g, '<title>$1</title>');
  
  // Fix malformed meta tags
  content = content.replace(/<meta\s+([^>]*)\s*\/\s*\/>/g, '<meta $1 />');
  
  // Fix malformed Link tags
  content = content.replace(/<Link\s+([^>]*)\s*\/\s*\/>/g, '<Link $1>');
  
  return content;
}

// Function to fix JSX structure issues
function fixJSXStructure(content) {
  // Fix missing React import
  if (content.includes('React.FC') || content.includes('useState') || content.includes('useEffect')) {
    if (!content.includes("import React")) {
      content = "import React from 'react';\n" + content;
    }
  }
  
  // Fix missing Helmet import
  if (content.includes('<Helmet>') && !content.includes("import { Helmet }")) {
    content = content.replace(
      /import React from 'react';/,
      "import React from 'react';\nimport { Helmet } from 'react-helmet-async';"
    );
  }
  
  // Fix missing Link import
  if (content.includes('<Link') && !content.includes("import { Link }")) {
    content = content.replace(
      /import React from 'react';/,
      "import React from 'react';\nimport { Link } from 'react-router-dom';"
    );
  }
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix merge conflicts
    content = fixMergeConflicts(content);
    
    // Fix JSX syntax
    content = fixJSXSyntax(content);
    
    // Fix JSX structure
    content = fixJSXStructure(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const patterns = [
  'app/**/*.tsx',
  'app/**/*.ts',
  'components/**/*.tsx',
  'components/**/*.ts',
  '*.tsx',
  '*.ts'
];

let totalFiles = 0;
let fixedFiles = 0;

patterns.forEach(pattern => {
  const files = glob.sync(pattern, { cwd: process.cwd() });
  
  files.forEach(file => {
    totalFiles++;
    if (processFile(file)) {
      fixedFiles++;
    }
  });
});

console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);