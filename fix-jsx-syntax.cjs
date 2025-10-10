#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix common JSX syntax issues
    const fixes = [
      // Fix missing closing tags in map functions
      {
        pattern: /(\s*\)\s*\)\s*;\s*)(\s*<[^>]+>)/g,
        replacement: '$1\n              $2'
      },
      // Fix malformed JSX closing tags
      {
        pattern: /<\/\s*section\s*>\s*<\/\s*div\s*>/g,
        replacement: '</div>'
      },
      // Fix mismatched tags
      {
        pattern: /<\/\s*main\s*>\s*<\/\s*section\s*>/g,
        replacement: '</section>'
      },
      // Fix extra closing tags
      {
        pattern: /<\/\s*div\s*>\s*<\/\s*section\s*>/g,
        replacement: '</div>'
      },
      // Fix JSX structure issues
      {
        pattern: /(\s*\)\s*;\s*)(\s*<[^>]+>)/g,
        replacement: '$1\n              $2'
      },
      // Remove extra semicolons in JSX
      {
        pattern: /;\s*<\/[^>]+>/g,
        replacement: '</$1>'
      },
      // Fix malformed function returns
      {
        pattern: /(\s*\)\s*;\s*)(\s*export\s+default)/g,
        replacement: '$1\n  };\n\n  $2'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        fixed = true;
      }
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTSXFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.tsx$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const workspaceDir = process.argv[2] || '/workspace';
console.log(`Looking for TSX files in: ${workspaceDir}`);

const tsxFiles = findTSXFiles(workspaceDir);
console.log(`Found ${tsxFiles.length} TSX files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJSXSyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed JSX syntax in ${fixedCount} files`);