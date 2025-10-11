#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
<<<<<<< HEAD
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to clean
=======
    // Check if file has merge conflicts
<<<<<<< HEAD
=======
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Cleaning merge conflicts in: ${filePath}`);
      
      // Remove merge conflict markers and keep the HEAD version
      content = content.replace(/<<<<<<< HEAD\n?/g, '');
      content = content.replace(/=======\n?/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
      
      // Clean up any extra whitespace
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      fs.writeFileSync(filePath, content);
      return true;
#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
// Function to clean merge conflict markers from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let originalContent = content
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n?/g, '')
    content = content.replace(/\n?/g, '')
    content = content.replace(/    
    // Clean up any remaining merge conflict artifacts
    content = content.replace(/    content = content.replace(/\n?/g, '')
    content = content.replace(/    
    // Fix common syntax issues that might result from merge conflicts
    content = content.replace(/,\s*\)/g, ')')
    content = content.replace(/,\s*}/g, '}')
    content = content.replace(/,\s*]/g, ']')
    content = content.replace(/,\s*;/g, ';')
    content = content.replace(/\(\s*\)/g, '()')
    content = content.replace(/{\s*}/g, '{}')
    content = content.replace(/\[\s*\]/g, '[]')
    // Fix common JSX issues
    content = content.replace(/<\s*\/\s*>/g, '</>')
    content = content.replace(/<\s*\/\s*div\s*>/g, '</div>')
    content = content.replace(/<\s*\/\s*span\s*>/g, '</span>')
    content = content.replace(/<\s*\/\s*p\s*>/g, '</p>')
    // Fix function syntax issues
    content = content.replace(/function\s*\(\s*\)\s*{\s*}/g, 'function() {}')
    content = content.replace(/\(\s*\)\s*=>\s*{\s*}/g, '() => {}')
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Cleaned: ${filePath}`)
      return true
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
    }
    
    console.log(`Cleaning merge conflicts in: ${filePath}`);
    
    // Split by conflict markers and take the main branch content (after =======)
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let conflictType = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<<')) {
        inConflict = true;
        conflictType = 'ours';
        continue;
      }
      
      if (line.trim().startsWith('=======')) {
        conflictType = 'theirs';
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
        continue;
      }
      
      if (!inConflict || conflictType === 'theirs') {
        cleanedLines.push(line);
      }
    }
    
    const cleanedContent = cleanedLines.join('\n');
    
    // Additional cleanup for common issues
    let finalContent = cleanedContent
      // Remove duplicate imports
      .replace(/(import\s+.*?from\s+['"][^'"]+['"];?\s*\n)+/g, (match) => {
        const imports = match.split('\n').filter(line => line.trim());
        const uniqueImports = [...new Set(imports)];
        return uniqueImports.join('\n') + '\n';
      })
      // Remove duplicate 'use client' directives
      .replace(/(['"]use client['"];?\s*\n)+/g, "'use client'\n")
      // Remove duplicate React imports
      .replace(/(import\s+React[^;]*;?\s*\n)+/g, "import React from 'react';\n")
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      // Fix common JSX issues
      .replace(/<React\.Fragment>/g, '<>')
      .replace(/<\/React\.Fragment>/g, '</>');
    
    fs.writeFileSync(filePath, finalContent);
    return true;
  } catch (error) {
<<<<<<< HEAD
    console.error(`Error cleaning ${filePath}:`, error.message);
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e3f7
    console.error(`Error processing ${filePath}:`, error.message);
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
    return false;
  }
}

// Function to find and clean all files with merge conflicts
async function cleanAllMergeConflicts() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    'utils/**/*.ts',
    'utils/**/*.js'
  ];
  
  let totalCleaned = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (cleanMergeConflicts(file)) {
        totalCleaned++;
      }
    }
  }
  
  console.log(`\nCleaned merge conflicts in ${totalCleaned} files`);
}

<<<<<<< HEAD
// Run the cleanup
cleanAllMergeConflicts().catch(console.error);
=======
// Main execution
const appDir = '/workspace/app';
const files = findTsxFiles(appDir);

let cleanedCount = 0;
for (const file of files) {
  if (cleanMergeConflicts(file)) {
    cleanedCount++;
  }
}

console.log(`Cleaned merge conflicts in ${cleanedCount} files`);
<<<<<<< HEAD
=======
    console.error(`Error cleaning ${filePath}:`, error.message)
    return false
  }
}

// Function to recursively find and clean files
function cleanDirectory(dirPath) {
    let cleanedCount = 0
  try {
    const items = fs.readdirSync(dirPath)
    for (const item of items) {
      const fullPath = path.join(dirPath, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        // Skip node_modules and other directories we don't want to process
        if (item === 'node_modules' || item === '.git' || item === 'dist' || item === '.next') {
          continue
  }
        cleanedCount += cleanDirectory(fullPath)
      } else if (stat.isFile()) {
    // Only process certain file types
        const ext = path.extname(item)
        if (['.ts', '.tsx', '.js', '.jsx', '.json', '.md'].includes(ext)) {
          if (cleanMergeConflicts(fullPath)) {
            cleanedCount++
  }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message)
  }
  
  return cleanedCount
}

// Main execution
console.log('Starting merge conflict cleanup...')
const cleanedCount = cleanDirectory('/workspace')
console.log(`Cleaned ${cleanedCount} files`)
// Also clean specific problematic files
const criticalFiles = [
  '/workspace/App.tsx',
  '/workspace/jest.setup.js',
  '/workspace/package.json',
  '/workspace/vite.config.ts',
  '/workspace/tailwind.config.ts'
]
console.log('Cleaning critical files...')
for (const file of criticalFiles) {
  if (fs.existsSync(file)) {
    if (cleanMergeConflicts(file)) {
      console.log(`Cleaned critical file: ${file}`)
    }
  }
}

console.log('Merge conflict cleanup completed!')
>>>>>>> cursor/fix-errors-and-merge-to-main-e3f7
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
