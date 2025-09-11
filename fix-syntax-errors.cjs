#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
// Function to find and fix all relevant files
function fixAllFiles() {
  const extensions = ['.tsx', '.ts', '.js', '.jsx', '.cjs'];
  const excludeDirs = ['node_modules', '.next', 'out', 'dist', 'build', 'coverage'];
  
  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    let fixedCount = 0;
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        if (!excludeDirs.includes(file)) {
          fixedCount += walkDir(filePath);
        }
      } else if (extensions.some(ext => file.endsWith(ext))) {
        if (fixSyntaxErrors(filePath)) {
          fixedCount++;
        }
      }
    }
    
    return fixedCount;