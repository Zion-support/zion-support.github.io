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
    
    if (line.startsWith('      inConflict = true;
      conflictType = 'head';
      continue; // Skip the conflict marker
    } else if (line.startsWith('=======')) {
      conflictType = 'separator';
      continue; // Skip the separator
    } else if (line.startsWith('>>>>>>>')) {
      inConflict = false;
      conflictType = null;
      continue; // Skip the end marker
    }
    
    if (inConflict) {
      // Only keep lines from HEAD section
      if (conflictType === 'head') {
        resolvedLines.push(line);
      }
      // Skip lines from other branches (conflictType === 'separator' or 'other')
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
    
    if (content.includes('      console.log(`Processing: ${filePath}`);
      const resolvedContent = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`✓ Resolved conflicts in: ${filePath}`);
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
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
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
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔍 Finding files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts(process.cwd());

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let processedCount = 0;
let errorCount = 0;

for (const filePath of filesWithConflicts) {
  if (processFile(filePath)) {
    processedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\n📊 Summary:`);
console.log(`✓ Successfully processed: ${processedCount} files`);
console.log(`✗ Errors: ${errorCount} files`);

if (processedCount > 0) {
  console.log('\n🎉 Merge conflicts resolved! You can now run your build and lint commands.');
}