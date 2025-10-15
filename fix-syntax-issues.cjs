#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix syntax issues in a file
function fixSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix export statements in the middle of functions
    const lines = content.split('\n');
    const result = [];
    let inFunction = false;
    let braceCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if we're entering a function
      if (line.includes('const ') && line.includes('= () => {') || 
          line.includes('function ') && line.includes('{')) {
        inFunction = true;
        braceCount = 0;
      }
      
      // Count braces to track function scope
      if (inFunction) {
        braceCount += (line.match(/\{/g) || []).length;
        braceCount -= (line.match(/\}/g) || []).length;
        
        // If we hit an export statement inside a function, move it outside
        if (line.trim().startsWith('export default') && braceCount > 0) {
          // Skip this line for now, we'll add it at the end
          modified = true;
          continue;
        }
        
        // If we've closed the function (braceCount <= 0), we're out of function scope
        if (braceCount <= 0) {
          inFunction = false;
        }
      }
      
      result.push(line);
    }
    
    // If we found export statements inside functions, add them at the end
    if (modified) {
      // Find the last closing brace and add export there
      let lastBraceIndex = -1;
      for (let i = result.length - 1; i >= 0; i--) {
        if (result[i].trim() === '}') {
          lastBraceIndex = i;
          break;
        }
      }
      
      if (lastBraceIndex !== -1) {
        // Add export statement after the last closing brace
        result.splice(lastBraceIndex + 1, 0, '');
        result.splice(lastBraceIndex + 2, 0, 'export default FiveGSolutionsPage;');
        modified = true;
      }
    }
    
    // Fix missing imports at the top
    if (content.includes('useState') && !content.includes("import { useState }")) {
      const importLines = content.split('\n');
      const firstImportIndex = importLines.findIndex(line => line.startsWith('import '));
      
      if (firstImportIndex !== -1) {
        importLines.splice(firstImportIndex, 0, "import React, { useState } from 'react';");
        modified = true;
        content = importLines.join('\n');
      }
    }
    
    // Fix missing Helmet import
    if (content.includes('<Helmet>') && !content.includes('react-helmet-async')) {
      const importLines = content.split('\n');
      const firstImportIndex = importLines.findIndex(line => line.startsWith('import '));
      
      if (firstImportIndex !== -1) {
        importLines.splice(firstImportIndex, 0, 'import { Helmet } from "react-helmet-async";');
        modified = true;
        content = importLines.join('\n');
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax issues in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix syntax issues
function fixSyntaxIssuesRecursive(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {
        continue;
      }
      fixedCount += fixSyntaxIssuesRecursive(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixSyntaxIssues(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax issue resolution...');

try {
  const fixedCount = fixSyntaxIssuesRecursive('./app');
  console.log(`Fixed syntax issues in ${fixedCount} files`);
  
  // Try to build after fixing issues
  console.log('Attempting build after syntax fixes...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build successful!');
  
} catch (error) {
  console.error('Error during syntax fix or build:', error.message);
  process.exit(1);
}