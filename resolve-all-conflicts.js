#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Resolving all merge conflicts...');

// Function to check if file has merge conflicts
function hasConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.includes('<<<<<<< HEAD') || 
           content.includes('=======') || 
           content.includes('>>>>>>>');
  } catch (error) {
    return false;
  }
}

// Function to resolve conflicts by accepting the remote version
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove conflict markers and keep only the remote version
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const appDir = '/workspace/app';
  let resolvedCount = 0;
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        processDirectory(filePath);
      } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js'))) {
        if (hasConflicts(filePath)) {
          if (resolveConflicts(filePath)) {
            resolvedCount++;
          }
        }
      }
    }
  }
  
  processDirectory(appDir);
  console.log(`🎉 Resolved conflicts in ${resolvedCount} files`);
}

main();