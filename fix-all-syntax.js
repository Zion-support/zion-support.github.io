#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix all import statements with extra quotes
    const lines = content.split('\n');
    const fixedLines = lines.map(line => {
      if (line.trim().startsWith('import ') && line.includes("';)) {
        return line.replace(/';$/g, ';);
      }
      if (line.trim().startsWith('import ') && line.includes('";')) {
        return line.replace(/";$/g, ';);
      }
      return line;
    });

    if (fixedLines.join('\n') !== content) {
      content = fixedLines.join('\n');
      modified = true;
    }

    // Remove any remaining extra quotes and semicolons
    content = content.replace(/;+/g, ';);
    content = content.replace(/;/g, ';);
    content = content.replace(/;+/g, ';);

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesToFix(dir) {
  const files = [];

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
console.log('Fixing all syntax errors...');

const filesToFix = findFilesToFix(workspaceDir);
console.log(`Found ${filesToFix.length} files to process`);

let fixedCount = 0;
for (const file of filesToFix) {
  if (fixFile(file)) {
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`Fixed ${fixedCount} files`);