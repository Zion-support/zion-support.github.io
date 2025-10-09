#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to clean merge conflicts in a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/    
    // Clean up any duplicate lines that might have been created
    const lines = content.split('\n');
    const cleanedLines = [];
    let prevLine = '';
    
    for (const line of lines) {
      if (line.trim() !== prevLine.trim() || line.trim() === '') {
        cleanedLines.push(line);
        prevLine = line;
      }
    
    fs.writeFileSync(filePath, cleanedLines.join('\n'));
    console.log(`Cleaned merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict cleanup...');

const filesWithConflicts = findFilesWithConflicts('./app');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let successCount = 0;
for (const file of filesWithConflicts) {
  if (cleanMergeConflicts(file)) {
    successCount++;
  }

console.log(`Successfully cleaned ${successCount} out of ${filesWithConflicts.length} files`);

// Also clean any remaining conflicts in other directories
const allFiles = findFilesWithConflicts('.');
console.log(`Found ${allFiles.length} total files with merge conflicts`);

successCount = 0;
for (const file of allFiles) {
  if (cleanMergeConflicts(file)) {
    successCount++;
  }

console.log(`Successfully cleaned ${successCount} out of ${allFiles.length} total files`);
console.log('Merge conflict cleanup completed!');