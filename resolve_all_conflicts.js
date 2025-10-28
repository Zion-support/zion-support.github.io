#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
        separatorFound = true;
        continue;
      }
      
        endMarkerFound = true;
        inConflict = false;
        
        // If no separator found, use HEAD content
        if (separatorFound && headContent.length > 0) {
          resolvedLines.push(...headContent);
        }
    // Check if file has merge conflict markers
        conflictType = 'separator';
        continue;
        inConflict = false;
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        continue;
      }
      
      resolvedLines.push(line);
    }
    
    // Write resolved content back to file
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
        if (conflictType === 'separator') {
          resolvedLines.push(line);
        }
      } else {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
