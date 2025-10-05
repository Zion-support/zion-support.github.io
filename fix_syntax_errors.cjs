#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Common patterns to fix
const fixes = [
  // Fix malformed JSX with incomplete template literals
  {
    pattern: /`\s*\/>/g,
    replacement: ''
  },
  {
    pattern: /`\s*>/g,
    replacement: ''
  },
  // Fix malformed icon assignments
  {
    pattern: /icon:\s*`\s*\/>,/g,
    replacement: "icon: '🚀',"
  },
  // Fix malformed className assignments
  {
    pattern: /className={`\s*`}/g,
    replacement: 'className=""'
  },
  // Fix malformed template literals in JSX
  {
    pattern: /`\s*`}/g,
    replacement: '""'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
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
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        traverse(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src', 'components');
const appDir = path.join(__dirname, 'app');

console.log('Fixing syntax errors in TSX files...');

let fixedCount = 0;

// Fix src/components files
if (fs.existsSync(srcDir)) {
  const srcFiles = findTsxFiles(srcDir);
  for (const file of srcFiles) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
}

// Fix app files
if (fs.existsSync(appDir)) {
  const appFiles = findTsxFiles(appDir);
  for (const file of appFiles) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} files`);