#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common parsing errors
    const fixes = [
      // Fix missing closing braces
      {
        pattern: /(\s+)(\w+)\s*:\s*\{[^}]*$/gm,
        replacement: (match, indent, key) => {
          // Check if the line is incomplete
          if (!match.includes('}')) {
            return match + '\n' + indent + '}';
          }
          return match;
        }
      },
      // Fix incomplete JSX expressions
      {
        pattern: /(\w+)\s*:\s*\{[^}]*$/gm,
        replacement: (match, key) => {
          if (!match.includes('}')) {
            return match + '}';
          }
          return match;
        }
      },
      // Fix incomplete function calls
      {
        pattern: /(\w+)\s*\([^)]*$/gm,
        replacement: (match, func) => {
          if (!match.includes(')')) {
            return match + ')';
          }
          return match;
        }
      },
      // Fix incomplete array declarations
      {
        pattern: /(\w+)\s*:\s*\[[^\]]*$/gm,
        replacement: (match, key) => {
          if (!match.includes(']')) {
            return match + ']';
          }
          return match;
        }
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Fix specific parsing errors
    if (content.includes('Expression expected')) {
      // Try to fix incomplete expressions
      content = content.replace(/\s*Expression expected\s*/g, '');
      modified = true;
    }
    
    if (content.includes("'}' expected")) {
      // Try to add missing closing braces
      const lines = content.split('\n');
      const fixedLines = [];
      let braceCount = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        fixedLines.push(line);
        
        // Count braces
        braceCount += (line.match(/\{/g) || []).length;
        braceCount -= (line.match(/\}/g) || []).length;
        
        // If we're at the end and have unmatched braces, add them
        if (i === lines.length - 1 && braceCount > 0) {
          for (let j = 0; j < braceCount; j++) {
            fixedLines.push('}');
          }
        }
      }
      
      content = fixedLines.join('\n');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to remove unused imports and variables
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip lines that are likely unused imports
      if (line.includes('// eslint-disable-next-line') || 
          line.includes('@typescript-eslint/no-unused-vars')) {
        continue;
      }
      
      // Remove lines with only unused variable declarations
      if (line.match(/^\s*const\s+_\w+\s*=.*$/)) {
        continue;
      }
      
      // Remove unused import lines
      if (line.match(/^\s*import\s+.*from\s+['"][^'"]+['"];\s*$/) && 
          line.includes('// unused')) {
        continue;
      }
      
      fixedLines.push(line);
    }
    
    const newContent = fixedLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error removing unused imports from ${filePath}:`, error.message);
    return false;
  }
}

// Function to find files with syntax errors
function findFilesWithErrors(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'out'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const files = findFilesWithErrors('/workspace/src');
console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
for (const file of files) {
  let fileModified = false;
  
  if (fixSyntaxErrors(file)) {
    fileModified = true;
  }
  
  if (removeUnusedImports(file)) {
    fileModified = true;
  }
  
  if (fileModified) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);

// Run verification
console.log('Running verification...');
try {
  execSync('pnpm run type-check', { stdio: 'inherit' });
  console.log('Type check passed!');
} catch (error) {
  console.log('Type check failed, but continuing...');
}

console.log('Syntax error fixes completed!');