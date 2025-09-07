#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+\n/g, '');
    
    // Clean up extra whitespace
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error resolving ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      try {
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and .git
          if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {
            processDirectory(fullPath);
          }
        } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.json'))) {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
            resolveConflicts(fullPath);
          }
        }
      } catch (error) {
        console.log(`Skipping ${fullPath}: ${error.message}`);
      }
    }
  } catch (error) {
    console.log(`Skipping directory ${dirPath}: ${error.message}`);
  }
}

console.log('Starting conflict resolution...');
processDirectory('/workspace');
console.log('Conflict resolution completed!');