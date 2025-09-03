const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers and keep the HEAD version
    const mergeConflictRegex = /\n([\s\S]*?)\n\n([\s\S]*?)\n    const matches = content.match(mergeConflictRegex);    
    if (matches) {
      content = content.replace(mergeConflictRegex, (match, headContent, otherContent) => {
        modified = true;
        return headContent;
      });
    }

    // Fix common syntax issues
    // Fix unterminated strings
    content = content.replace(/export default [^;]*';\s*$/, 'export default {};');
    content = content.replace(/export const [^=]*= [^;]*';\s*$/, 'export const placeholder = {};');
    
    // Fix malformed JSX/TSX
    content = content.replace(/import [^;]*';\s*$/, 'import React from "react";');
    
    // Fix common syntax errors
    content = content.replace(/,\s*$/, '');
    content = content.replace(/;\s*;\s*$/, ';');
    content = content.replace(/\s+$/, '');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        fixedCount += walkDirectory(filePath);
      }
    } else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if file has merge conflict markers
    if (!content.includes('')) {
      return false; // No conflicts to resolve;
}

    console.log(`Resolving conflicts in: ${filePath}`);

    // Split content by conflict markers and keep HEAD version
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepLines = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.includes('')) {
        inConflict = true;
        keepLines = true;
        continue;
      } else if (line.includes('')) {
        keepLines = false;
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepLines = false;
        continue;
      }

      if (!inConflict || keepLines) {
        resolvedLines.push(line);
      }
    }

    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let totalFixed = 0;

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      findFilesWithConflicts(fullPath, files);
    } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.json'))) {
      const content = fs.readFileSync(fullPath, 'utf8`);
      if (content.includes(`        files.push(fullPath);

    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (item === 'node_modules' || item === '.git') {
        continue;
      }
      totalFixed += processDirectory(fullPath);
    } else if (stat.isFile()) {
      // Process JavaScript, TypeScript, and JSX files
      if (/\.(js|jsx|ts|tsx|json)$/.test(item)) {
        if (resolveMergeConflicts(fullPath)) {
          totalFixed++;
        }
      }
    }
  }

  return fixedCount;
}

console.log('Starting merge conflict resolution...');
const fixedCount = walkDirectory('./src');
console.log(`Fixed ${fixedCount} files with merge conflicts.`);
