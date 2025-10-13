#!/usr/bin/env node
<<<<<<< HEAD

    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to clean
=======
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
<<<<<<< HEAD

// Function to clean merge conflict markers from a file
=======
// Function to clean merge conflict markers from a file;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Clean up any remaining merge conflict artifacts
    content = content.replace(/    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Fix common syntax issues that might result from merge conflicts
    content = content.replace(/,\s*\)/g, ')');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    content = content.replace(/,\s*;/g, ';');
    content = content.replace(/\(\s*\)/g, '()');
    content = content.replace(/{\s*}/g, '{}');
    content = content.replace(/\[\s*\]/g, '[]');
    // Fix common JSX issues
    content = content.replace(/<\s*\/\s*>/g, '</>');
    content = content.replace(/<\s*\/\s*div\s*>/g, '</div>');
    content = content.replace(/<\s*\/\s*span\s*>/g, '</span>');
    content = content.replace(/<\s*\/\s*p\s*>/g, '</p>');
    // Fix function syntax issues
    content = content.replace(/function\s*\(\s*\)\s*{\s*}/g, 'function() {}');
    content = content.replace(/\(\s*\)\s*=>\s*{\s*}/g, '() => {}');
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
<<<<<<< HEAD
      console.log(`Cleaned: ${filePath}`);
      return true;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    }
    
    // Write cleaned content back to file
    const cleanedContent = cleanedLines.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    
    return true; // File was cleaned
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and clean files
function cleanDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let cleanedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
<<<<<<< HEAD
    if (stat.isDirectory()) {
      // Skip certain directories
      if (['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
        continue;
      }
      cleanedCount += cleanDirectory(fullPath);
    } else if (stat.isFile()) {
      // Only process TypeScript/JavaScript files
      if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
        if (cleanMergeConflicts(fullPath)) {
          cleanedCount++;
=======
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
=======
      // console.log removed for production
return true};
    return false} catch (error) {
    // console.error removed for production
return false};
};
// Function to recursively find and clean files;
function cleanDirectory(dirPath) {;
let cleanedCount = 0;
  try {;
const items = fs.readdirSync(dirPath);
    for (const item of items) {;
const fullPath = path.join(dirPath, item);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // Skip node_modules and other directories we don't want to process
        if (item === 'node_modules' || item === '.git' || item === 'dist' || item === '.next') {
<<<<<<< HEAD
          continue
  }
        cleanedCount += cleanDirectory(fullPath);
      } else if (stat.isFile()) {
    // Only process certain file types
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx', '.json', '.md'].includes(ext)) {
          if (cleanMergeConflicts(fullPath)) {
            cleanedCount++
  }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        }
      }
    }
  }
  
  return cleanedCount;
}

=======
          continue};
        cleanedCount += cleanDirectory(fullPath)} else if (stat.isFile()) {
        // Only process certain file types;
const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx', '.json', '.md'].includes(ext)) {
          if (cleanMergeConflicts(fullPath)) {
            cleanedCount++};
        };
      };
    };
  } catch (error) {
    // console.error removed for production
};
  return cleanedCount};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Main execution
console.log('Starting merge conflict cleanup...');
const cleanedCount = cleanDirectory('/workspace');
<<<<<<< HEAD
console.log(`Cleaned merge conflicts in ${cleanedCount} files.`);
=======
console.log(`Cleaned ${cleanedCount} files`);

// Also clean specific problematic files
const criticalFiles = [
];
  '/workspace/App.tsx',
  '/workspace/jest.setup.js',
  '/workspace/package.json',
  '/workspace/vite.config.ts',
  '/workspace/tailwind.config.ts'
];
<<<<<<< HEAD

console.log('Cleaning critical files...');
for (const file of criticalFiles) {
  if (fs.existsSync(file)) {
    if (cleanMergeConflicts(file)) {
      console.log(`Cleaned critical file: ${file}`);
    }
  }
}

console.log('Merge conflict cleanup completed!');
=======
// console.log removed for production
for (const file of criticalFiles) {
  if (fs.existsSync(file)) {
    if (cleanMergeConflicts(file)) {
      // console.log removed for production
};
  };
};
// console.log removed for production
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
