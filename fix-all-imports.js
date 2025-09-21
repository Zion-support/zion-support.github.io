#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixAllImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix any remaining comma issues in imports
    const patterns = [
      // Multiple commas
      /,\s*,\s*,+/g,
      // Double commas
      /,\s*,/g,
      // Trailing commas before closing brace
      /,\s*}/g,
      // Leading commas
      /,\s*{/g
    ];
    
    patterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, (match) => {
          if (match.includes('}')) {
            return '}';
          } else if (match.includes('{')) {
            return '{';
          } else {
            return ',';
          }
        });
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed remaining imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithImportIssues(dir) {
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
        if (content.includes(',,') || content.includes(',  }')) {
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
console.log('Scanning for files with remaining import issues...');

const importIssueFiles = findFilesWithImportIssues(workspaceDir);
console.log(`Found ${importIssueFiles.length} files with remaining import issues`);

let fixedCount = 0;
for (const file of importIssueFiles) {
  if (fixAllImportsInFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed remaining imports in ${fixedCount} files`);
console.log('All import fixes complete!');