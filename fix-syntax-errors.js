#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Common syntax error patterns and their fixes
const fixes = [
  // Fix missing semicolons after interface declarations
  {
    pattern: /interface\s+\w+\s*\{[^}]*\}\s*$/gm,
    replacement: (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    }
  },
  
  // Fix missing closing braces in interfaces
  {
    pattern: /interface\s+\w+\s*\{[^}]*$/gm,
    replacement: (match) => {
      if (!match.includes('}')) {
        return match + '}';
      }
      return match;
    }
  },
  
  // Fix missing semicolons after function declarations
  {
    pattern: /const\s+\w+\s*:\s*React\.FC<[^>]*>\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\}\s*$/gm,
    replacement: (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    }
  },
  
  // Fix missing closing braces in function declarations
  {
    pattern: /const\s+\w+\s*:\s*React\.FC<[^>]*>\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*$/gm,
    replacement: (match) => {
      if (!match.includes('}')) {
        return match + '}';
      }
      return match;
    }
  },
  
  // Fix missing commas in object properties
  {
    pattern: /(\w+:\s*[^,}]+)\s*(\w+:\s*[^,}]+)/g,
    replacement: '$1,\n  $2'
  },
  
  // Fix missing closing parentheses in function calls
  {
    pattern: /(\w+\([^)]*)\s*$/gm,
    replacement: (match) => {
      const openParens = (match.match(/\(/g) || []).length;
      const closeParens = (match.match(/\)/g) || []).length;
      if (openParens > closeParens) {
        return match + ')';
      }
      return match;
    }
  },
  
  // Fix missing closing braces in JSX
  {
    pattern: /<(\w+)[^>]*>[^<]*$/gm,
    replacement: (match) => {
      if (!match.includes('</')) {
        const tagName = match.match(/<(\w+)/)?.[1];
        if (tagName) {
          return match + `</${tagName}>`;
        }
      }
      return match;
    }
  },
  
  // Fix missing semicolons in variable declarations
  {
    pattern: /(const|let|var)\s+\w+\s*=\s*[^;]+$/gm,
    replacement: (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    }
  },
  
  // Fix missing commas in array elements
  {
    pattern: /(\w+)\s*(\w+)/g,
    replacement: (match, p1, p2) => {
      if (match.includes('[') && match.includes(']')) {
        return `${p1},\n  ${p2}`;
      }
      return match;
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes
    // Fix missing closing braces in function components
    if (content.includes('const ') && content.includes('React.FC') && !content.includes('export default')) {
      const lastBrace = content.lastIndexOf('}');
      const lastSemicolon = content.lastIndexOf(';');
      if (lastBrace > lastSemicolon) {
        content = content.substring(0, lastBrace + 1) + ';\n\nexport default ' + 
          content.match(/const\s+(\w+)/)?.[1] + ';';
        modified = true;
      }
    }
    
    // Fix missing return statements in React components
    if (content.includes('React.FC') && content.includes('return') && !content.includes('return (')) {
      content = content.replace(/return\s+([^;]+);/g, 'return (\n    $1\n  );');
      modified = true;
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
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
const tsxFiles = findTsxFiles(workspaceDir);

console.log(`Found ${tsxFiles.length} TypeScript files to check...`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);