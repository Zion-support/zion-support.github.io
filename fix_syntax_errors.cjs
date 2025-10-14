#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix unterminated strings
    content = content.replace(/import React from "react\n/g, 'import React from "react";\n');
    content = content.replace(/from "react-helmet-async"\n/g, 'from "react-helmet-async";\n');
    content = content.replace(/from "react-helmet-async"\n/g, 'from "react-helmet-async";\n');
    
    // Fix missing semicolons
    content = content.replace(/const AppPage = \(\) => \{\n/g, 'const AppPage = () => {\n');
    content = content.replace(/const AppPage = \(\) => \{\n/g, 'const AppPage = () => {\n');
    
    // Fix JSX syntax issues
    content = content.replace(/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><Helmet><title>App - Zion Tech Group</title><meta name="description" content="App - Zion Tech Group" /></Helmet><div className="container mx-auto px-4 py-16"><div className="text-center"></div>/g, 
      '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <Helmet>\n        <title>App - Zion Tech Group</title>\n        <meta name="description" content="App - Zion Tech Group" />\n      </Helmet>\n      <div className="container mx-auto px-4 py-16">\n        <div className="text-center">');
    
    // Fix duplicate imports and content
    const lines = content.split('\n');
    const seenImports = new Set();
    const seenContent = new Set();
    const cleanedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip duplicate imports
      if (line.startsWith('import ') && seenImports.has(line)) {
        continue;
      }
      if (line.startsWith('import ')) {
        seenImports.add(line);
      }
      
      // Skip duplicate content
      if (line.includes('const AppPage = () => {') && seenContent.has('AppPage')) {
        continue;
      }
      if (line.includes('const AppPage = () => {')) {
        seenContent.add('AppPage');
      }
      
      cleanedLines.push(line);
    }
    
    content = cleanedLines.join('\n');
    
    // Clean up extra whitespace and empty lines
    content = content.replace(/\n\n\n+/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all files with syntax errors
function findAndFixSyntaxErrors(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixSyntaxErrors(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error resolution...');
const fixedCount = findAndFixSyntaxErrors('/workspace');
console.log(`Fixed syntax errors in ${fixedCount} files`);

console.log('Syntax error resolution completed!');