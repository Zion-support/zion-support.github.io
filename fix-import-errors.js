#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixImportErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix malformed imports
    const fixes = [
      // Fix React import without import keyword
      [/^React,\s*{\s*([^}]+)\s*}\s*from\s*$/gm, "import React, { $1 } from"],
      // Fix duplicate from statements
      [/from\s+['"][^'"]+['"]\s+from\s+['"][^'"]+['"]/g, (match) => {;
        const parts = match.split(' from ');
        return parts[0] + ' from ' + parts[parts.length - 1];
      }],
      // Fix malformed import statements
      [/import\s+{\s*([^}]+)\s*}\s+from\s+['"][^'"]+['"]\s+from\s+['"][^'"]+['"]/g, "import { $1 } from 'lucide-react'"],
      // Fix missing semicolons in imports;
      [/import\s+[^;]+$/gm, (match) => match + ';],
      // Fix broken interface declarations
      [/interface\s+(\w+)\s*{\s*([^}]+)\s*}/g, (match, name, body) => {
        const cleanBody = body.replace(/;\s*;/g, ';).replace(/\s+/g, ' ').trim();
        return `interface ${name} {\n  ${cleanBody.split(';).filter(Boolean).join(';\n  ')};\n}`;
      }],
      // Fix malformed JSX attributes
      [/className="([^"]*)"\s*"([^"]*)"\s*>/g, 'className="$1 $2">'],
      // Fix broken string literals
      [/['"]\s*;\s*['"]/g, "';],
      // Fix broken template literals
      [/`\s*;\s*`/g, "`;"]
    ];
    
    for (const [pattern, replacement] of fixes) {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        fixed = true;
      }
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed import errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

function main() {
  console.log('🔍 Searching for files to fix import errors...');
  
  const files = findAndFixFiles('.');
  console.log(`Found ${files.length} files to check`);
  
  let fixedCount = 0;
  for (const file of files) {
    if (fixImportErrors(file)) {
      fixedCount++;
    }
  }
  
  console.log(`✅ Fixed import errors in ${fixedCount} files`);
}

main();