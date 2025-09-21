#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix broken import statements with multiple commas
    const brokenImportPattern = /import\s*{\s*([^}]*?)\s*,+\s*,+\s*([^}]*?)\s*}\s*from\s*(['"][^'"]*['"])/g;
    content = content.replace(brokenImportPattern, (match, beforeCommas, afterCommas, module) => {
      modified = true;
      const allImports = [beforeCommas, afterCommas].filter(Boolean).join(', ');
      return `import { ${allImports} } from ${module}`;
    });
    
    // Fix imports with trailing commas
    const trailingCommaPattern = /import\s*{\s*([^}]*?)\s*,+\s*}\s*from\s*(['"][^'"]*['"])/g;
    content = content.replace(trailingCommaPattern, (match, imports, module) => {
      modified = true;
      return `import { ${imports.trim()} } from ${module}`;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithBrokenImports(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'out'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes(',,,') || content.includes(',,') || content.includes(',  }')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
console.log('Scanning for files with broken imports...');

const brokenImportFiles = findFilesWithBrokenImports(workspaceDir);
console.log(`Found ${brokenImportFiles.length} files with broken imports`);

let fixedCount = 0;
for (const file of brokenImportFiles) {
  if (fixImportsInFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed imports in ${fixedCount} files`);
console.log('Import fixes complete!');