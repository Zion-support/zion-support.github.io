#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all import issues...');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Remove duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const fixedLines = [];
    
    for (const line of lines) {
      if (line.trim().startsWith('import ')) {
        const importKey = line.trim();
        if (!seenImports.has(importKey)) {
          seenImports.add(importKey);
          fixedLines.push(line);
        } else {
          fixed = true;
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    if (fixed) {
      content = fixedLines.join('\n');
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed imports in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.next', 'dist', 'out'].includes(file)) {
        fixedCount += processDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

const workspacePath = process.cwd();
const fixedCount = processDirectory(workspacePath);
console.log(`✨ Fixed ${fixedCount} files with import issues`);