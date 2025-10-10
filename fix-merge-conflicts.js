#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('')) {
      return false}
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n([\s\S]*?)([\s\S]*?)    
    // Clean up any remaining merge conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Fix common syntax issues that might have been introduced
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/;\s*\)/g, ')');
    content = content.replace(/;\s*\]/g, ']');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}

// Function to recursively find and fix merge conflicts
function fixAllMergeConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        fixedCount += fixAllMergeConflicts(filePath)}
    } else if (stat.isFile()) {
      const ext = path.extname(file);
      if (['.js', '.ts', '.tsx', '.jsx'].includes(ext)) {
        if (fixMergeConflicts(filePath)) {
          fixedCount++}
      }
    }
  }
  
  return fixedCount}

// Main execution
console.log('Starting merge conflict resolution...');
const fixedCount = fixAllMergeConflicts('/workspace');
console.log(`Fixed merge conflicts in ${fixedCount} files.`);