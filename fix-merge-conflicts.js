#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to resolve merge conflicts by keeping the HEAD version
function resolveMergeConflicts(content) {
  // Remove all merge conflict markers and keep only the HEAD version
  let resolved = content;

  // Handle simple conflicts (...
  resolved = resolved.replace(/\n([\s\S]*?)\n

  // Handle nested conflicts
  resolved = resolved.replace(/\n([\s\S]*?)\n

  // Remove any remaining conflict markers
  resolved = resolved.replace(/^[<>=]{7}.*$/gm, '');

  // Clean up extra newlines
  resolved = resolved.replace(/\n{3,}/g, '\n\n');

  return resolved;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Check if file has merge conflicts
      console.log(`Processing: ${filePath}`);
      const resolved = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolved);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let processedCount = 0;

  try {
    const items = fs.readdirSync(dirPath);

    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          processedCount += processDirectory(fullPath, extensions);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          if (processFile(fullPath)) {
            processedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }

  return processedCount;
}

// Main execution
console.log('Starting merge conflict resolution...');

// Process main directories
const mainDirs = ['app', 'pages', 'components'];
let totalProcessed = 0;

for (const dir of mainDirs) {
  if (fs.existsSync(dir)) {
    console.log(`\nProcessing directory: ${dir}`);
    const count = processDirectory(dir);
    totalProcessed += count;
    console.log(`Processed ${count} files in ${dir}`);
  }
}

console.log(`\nTotal files processed: ${totalProcessed}`);
console.log('Merge conflict resolution complete!');