#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts by keeping HEAD version;
function resolveMergeConflicts(filePath) {
  try {;
let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    // console.log removed for production
// Split content by conflict markers;
const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepHead = true;
    
    for (let i = 0; i < lines.length; i++) {;
const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        keepHead = true;
        continue} else if (line.trim() === '=======') {
        keepHead = false;
        continue} else if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        keepHead = true;
        continue}
      
      if (!inConflict || keepHead) {
        resolvedLines.push(line)}
    }
    ;
const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true} catch (error) {
    // console.error removed for production
return false}
}

// Function to find all TypeScript/JavaScript files with merge conflicts;
function findFilesWithConflicts(dir) {;
const files = [];
  ;
function searchDirectory(currentDir) {;
const items = fs.readdirSync(currentDir);
    
    for (const item of items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath)} else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {;
const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
            files.push(fullPath)}
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files}

// Main execution
// console.log removed for production
;
const workspaceDir = process.cwd();
const conflictedFiles = findFilesWithConflicts(workspaceDir);

// console.log removed for production
;
let resolvedCount = 0;
for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++}
}

// console.log removed for production
// Also fix common syntax issues
// console.log removed for production
// Fix common JSX issues;
const jsxFiles = findFilesWithConflicts(workspaceDir).filter(f => f.endsWith('.tsx'));
for (const file of jsxFiles) {
  try {;
let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Fix missing closing tags and other common issues
    // This is a basic fix - more complex issues may need manual attention
    if (content.includes('JSX expressions must have one parent element')) {
      // This would need more sophisticated parsing to fix properly
      // console.log removed for production
}
    
    if (modified) {
      fs.writeFileSync(file, content, 'utf8')}
  } catch (error) {
    // console.error removed for production
}
}

// console.log removed for production
