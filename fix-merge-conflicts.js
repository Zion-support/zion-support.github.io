#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/\n?/g, '');
    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/    
    // Clean up any remaining conflict artifacts
    content = content.replace(/    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/    
    // Remove any duplicate newlines that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.match(/\.(tsx?|jsx?)$/)) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('')) {
        if (fixMergeConflicts(filePath)) {
          fixedCount++;
        }
  
  return fixedCount;
}

console.log('Starting merge conflict resolution...');
const fixedCount = findAndFixFiles('.');
console.log(`Fixed merge conflicts in ${fixedCount} files.`);