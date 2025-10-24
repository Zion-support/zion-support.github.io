const fs = require('fs');
const path = require('path');

// Function to fix stray semicolons and other issues
function fixSemicolons(content) {
  // Fix stray semicolons after import statements
  content = content.replace(/import Footer from '\.\.\/components\/Footer'\n;/g, "import Footer from '../components/Footer';\n");
  
  // Fix other stray semicolons
  content = content.replace(/;\n;/g, ';\n');
  
  // Fix missing semicolons in import statements
  content = content.replace(/import React from 'react'\n/g, "import React from 'react';\n");
  content = content.replace(/import Head from 'next\/head'\n/g, "import Head from 'next/head';\n");
  content = content.replace(/import Link from 'next\/link'\n/g, "import Link from 'next/link';\n");
  
  return content;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixSemicolons(content);
        
        if (content !== fixedContent) {
          fs.writeFileSync(filePath, fixedContent, 'utf8');
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  }
}

// Start fixing from the app directory
console.log('Starting semicolon fixes...');
fixFilesInDirectory('./app');
console.log('Semicolon fixes completed!');