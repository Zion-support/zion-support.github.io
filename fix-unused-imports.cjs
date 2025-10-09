#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files in src directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Fix unused imports and variables in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Common patterns to fix
    const patterns = [
      // Unused imports
      { 
        regex: /^import\s+{[^}]+}\s+from\s+['"][^'"]+['"];?\s*$/gm,
        replacement: (match) => {
          // Check if the import is actually used in the file
          const importNames = match.match(/\{([^}]+)\}/)?.[1]?.split(',').map(s => s.trim()) || [];
          const hasUsedImports = importNames.some(name => {
            const cleanName = name.replace(/\s+as\s+\w+/, '').trim();
            return content.includes(cleanName) && !content.includes(`// ${cleanName}`);
          });
          
          if (!hasUsedImports) {
            return `// ${match} // Unused`;
          }
          return match;
        }
      },
      
      // Unused variables with underscore prefix
      {
        regex: /^(\s*)(const|let|var)\s+(_[a-zA-Z_][a-zA-Z0-9_]*)\s*=/gm,
        replacement: '$1// $2 $3 = // Unused'
      },
      
      // Unused function declarations
      {
        regex: /^(\s*)(const|let|var)\s+([A-Z][a-zA-Z0-9_]*)\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};\s*$/gm,
        replacement: (match, indent, decl, name) => {
          if (content.includes(name) && !content.includes(`// ${name}`)) {
            return match;
          }
          return `${indent}// ${decl} ${name} = () => {}; // Unused`;
        }
      }
    ];
    
    patterns.forEach(pattern => {
      if (pattern.replacement instanceof Function) {
        const newContent = content.replace(pattern.regex, pattern.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      } else {
        const newContent = content.replace(pattern.regex, pattern.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const files = getAllFiles(srcDir);

console.log(`Found ${files.length} files to process...`);

files.forEach(file => {
  fixFile(file);
});

console.log('Done fixing unused imports and variables!');