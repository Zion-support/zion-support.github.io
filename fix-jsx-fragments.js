#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all files with JSX fragment issues
function findFilesWithJSXIssues() {
  try {
    const result = execSync('find ./app -name "*.tsx" | head -20', { 
      encoding: 'utf8',
      cwd: '/workspace'
    });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.log('Error finding files:', error.message);
    return [];
  }
}

// Fix JSX fragments in a file
function fixJSXInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix JSX fragments by replacing with div
    if (content.includes('<>') && content.includes('</>')) {
      content = content.replace(/<>/g, '<div>');
      content = content.replace(/<\/>/g, '</div>');
      modified = true;
    }

    // Fix missing React import if needed
    if (content.includes('export default function') && !content.includes("import React from 'react'")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }

    // Fix missing Head import if needed
    if (content.includes('<Head>') && !content.includes("import Head from 'next/head'")) {
      content = content.replace(/import React from 'react';/, "import React from 'react';\nimport Head from 'next/head';");
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing file ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('Finding files with JSX issues...');
  const files = findFilesWithJSXIssues();
  
  if (files.length === 0) {
    console.log('No files found.');
    return;
  }

  console.log(`Found ${files.length} files to check.`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixJSXInFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed JSX in ${fixedCount} files.`);
}

main();