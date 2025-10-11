#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't exist or is empty
    if (!content) return false;
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let conflictType = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'separator';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (!inConflict) {
        result.push(line);
      } else if (conflictType === 'head') {
        // Keep the HEAD version (before =======)
        result.push(line);
      }
      // Skip the other branch (after =======)
    }
    
    // Write the cleaned content
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix component names starting with numbers
    content = content.replace(/const\s+(\d+[a-zA-Z_][a-zA-Z0-9_]*)\s*:/g, (match, name) => {
      const fixedName = name.replace(/^\d+/, '');
      modified = true;
      return `const ${fixedName}:`;
    });
    
    // Fix malformed imports
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;?\s*import/g, 
      (match, imports, module) => {
        modified = true;
        return `import { ${imports} } from '${module}';\nimport`;
      });
    
    // Fix missing semicolons after imports
    content = content.replace(/import\s+[^;]+(?!;)\n/g, (match) => {
      if (!match.endsWith(';\n')) {
        modified = true;
        return match.replace(/\n$/, ';\n');
      }
      return match;
    });
    
    // Fix malformed JSX fragments
    content = content.replace(/<>([^<]*?)<\/>/g, (match, content) => {
      if (content.trim().includes('<<<<<<<') || content.trim().includes('=======') || content.trim().includes('>>>>>>>')) {
        modified = true;
        return `<div>${content}</div>`;
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/TSX files in app directory
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
function main() {
  console.log('Starting merge conflict and syntax error fixes...');
  
  const appDir = path.join(__dirname, 'app');
  const files = findTsxFiles(appDir);
  
  let fixedCount = 0;
  
  for (const file of files) {
    let fileFixed = false;
    
    // Fix merge conflicts
    if (fixMergeConflicts(file)) {
      fileFixed = true;
    }
    
    // Fix syntax errors
    if (fixSyntaxErrors(file)) {
      fileFixed = true;
    }
    
    if (fileFixed) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
  
  // Run type check to see remaining errors
  try {
    console.log('Running type check...');
    execSync('pnpm run type-check', { stdio: 'inherit' });
  } catch (error) {
    console.log('Type check completed with errors (expected)');
  }
}

main();