#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all TypeScript and JavaScript files;
const findFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
    let files = [];
  const items = fs.readdirSync(dir);
<<<<<<< HEAD
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
=======
  for (const item of items) {;
const fullPath = path.join(dir, item);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
<<<<<<< HEAD
      files = files.concat(findFiles(fullPath, extensions))
  } else if (extensions.some(ext => item.endsWith(ext))) {
    files.push(fullPath)
  }
  }
  
  return files;
}

=======
      files = files.concat(findFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath)};
  };
  return files};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Fix merge conflicts;
const fixMergeConflicts = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    // Remove merge conflict markers and keep the HEAD version;
    const mergeConflictRegex = /\n([\s\S]*?)\n([\s\S]*?)    content = content.replace(mergeConflictRegex, '$1');
    // Remove any remaining merge conflict markers;
    const conflictMarkers = /(||    content = content.replace(conflictMarkers, '');
    // Clean up extra whitespace;
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
<<<<<<< HEAD
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution;
const srcDir = path.join(__dirname, '..', 'src');
const appDir = path.join(__dirname, '..', 'app');

console.log('Starting merge conflict resolution...');

=======
      // console.log removed for production
return true};
    return false} catch (error) {
    // console.error removed for production
return false};
};
// Main execution;
const srcDir = path.join(__dirname, '..', 'src');
const appDir = path.join(__dirname, '..', 'app');
// console.log removed for production
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Find all files;
const srcFiles = findFiles(srcDir);
const appFiles = findFiles(appDir);
const allFiles = [...srcFiles, ...appFiles];
<<<<<<< HEAD

console.log(`Found ${allFiles.length} files to process`);

let fixedCount = 0;
for (const file of allFiles) {
    if (fixMergeConflicts(file)) {
    fixedCount++
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);
console.log('Merge conflict resolution completed!');
=======
// console.log removed for production
;
let fixedCount = 0;
for (const file of allFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++};
};
// console.log removed for production
// console.log removed for production
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
