#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolvedLines = [];
  let inConflict = false;
  let conflictType = null; // 'head', 'separator', 'other'
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
      inConflict = true;
      conflictType = 'head';
      continue;
    }
    
      inConflict = false;
      conflictType = null;
      continue;
    }
    
    if (inConflict) {
      if (conflictType === 'head') {
        resolvedLines.push(line);
      }
      // Skip lines from other branch (conflictType === 'separator' or 'other')
    } else {
      resolvedLines.push(line);
    }
  }
  
  return resolvedLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
      console.log(`Processing: ${filePath}`);
      const resolvedContent = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`✓ Resolved merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.ts', '.js', '.jsx'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
const workspaceDir = process.argv[2] || '/workspace';
console.log(`Scanning for merge conflicts in: ${workspaceDir}`);

const filesWithConflicts = findFilesWithConflicts(workspaceDir);
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
for (const filePath of filesWithConflicts) {
  if (processFile(filePath)) {
    resolvedCount++;
  }
}

console.log(`\nResolved merge conflicts in ${resolvedCount} files`);
console.log('Merge conflict resolution complete!');