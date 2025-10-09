#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepHead = true;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '        inConflict = true;
        keepHead = true;
        continue;
      }
      
      if (line.trim() === '') {
        keepHead = false;
        continue;
      }
      
      if (line.trim().startsWith('        inConflict = false;
        keepHead = true;
        continue;
      }
      
      if (inConflict) {
        if (keepHead) {
          fixedLines.push(line);
        }
        // Skip lines from the other branch
      } else {
        fixedLines.push(line);
      }
    }
    
    // Write the fixed content back
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    
    return true; // Conflicts were fixed
  } catch (error) {
    console.error(`Error fixing conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const srcDir = path.join(__dirname, 'src');
const conflictedFiles = findFilesWithConflicts(srcDir);

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);

// Verify no more conflicts
try {
  const result = execSync('grep -r "  const remainingConflicts = parseInt(result.trim());
  console.log(`Remaining conflicts: ${remainingConflicts}`);
  
  if (remainingConflicts === 0) {
    console.log('✅ All merge conflicts resolved successfully!');
  } else {
    console.log('⚠️  Some conflicts may still remain');
  }
} catch (error) {
  console.log('Could not verify remaining conflicts');
}

console.log('Merge conflict resolution complete!');
