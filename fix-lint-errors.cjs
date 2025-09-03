#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Common patterns to fix
const fixes = [
  // Fix malformed imports
  {
    pattern: /import\s*{\s*([^}]+)\s*export\s*default\s*function/g,
    replacement: 'import { $1 } from \'lucide-react\';\n\nexport default function'
  },
  
  // Fix missing closing brackets in arrays
  {
    pattern: /(\[.*?);\s*\]\s*},/g,
    replacement: '$1\n  ]\n},'
  },
  
  // Fix malformed JSX attributes
  {
    pattern: /className="([^"]*);\s*"/g,
    replacement: 'className="$1"'
  },
  
  // Fix missing semicolons in object properties
  {
    pattern: /(\w+):\s*'([^']*)',\s*;/g,
    replacement: '$1: \'$2\','
  },
  
  // Fix malformed return statements
  {
    pattern: /return\s*\(\s*<div";"/g,
    replacement: 'return (\n    <div className="min-h-screen bg-white">'
  },
  
  // Fix duplicated content (remove everything after the first complete component)
  {
    pattern: /(export default function[^}]+}\s*\)\s*;?\s*$).*/gms,
    replacement: '$1'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional cleanup
    content = content
      .replace(/;\s*;\s*/g, ';\n')
      .replace(/,\s*,\s*/g, ',\n')
      .replace(/\s+$/gm, '') // Remove trailing whitespace
      .trim();
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const files = findTsxFiles(srcDir);

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);