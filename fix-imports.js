const fs = require('fs');
const path = require('path');

// Function to fix import statements and JSX issues
function fixImportsAndJSX(content) {
  // Fix import statements with semicolons
  content = content.replace(/import ([^;]+);\n;/g, 'import $1;\n');
  
  // Fix return statements with malformed parentheses
  content = content.replace(/return \(<div>/g, 'return (\n    <div>');
  
  // Fix missing React import
  if (content.includes('export default function') && !content.includes("import React")) {
    content = "import React from 'react';\n" + content;
  }
  
  // Fix missing Head import
  if (content.includes('<Head>') && !content.includes("import Head")) {
    content = content.replace(/import React from 'react';\n/, "import React from 'react';\nimport Head from 'next/head';\n");
  }
  
  // Fix missing Footer import
  if (content.includes('<Footer') && !content.includes("import Footer")) {
    content = content.replace(/import Head from 'next\/head';\n/, "import Head from 'next/head';\nimport Footer from '../components/Footer';\n");
  }
  
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
        const fixedContent = fixImportsAndJSX(content);
        
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
console.log('Starting import and JSX fixes...');
fixFilesInDirectory('./app');
console.log('Import and JSX fixes completed!');