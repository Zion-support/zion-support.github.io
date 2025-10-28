#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Resolving all merge conflicts...');

// Get list of files with conflicts
const conflictFiles = [];

function findConflictFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findConflictFiles(filePath);
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.json'))) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('<<<<<<< HEAD')) {
          conflictFiles.push(filePath);
        }
      } catch (err) {
        console.error(`Error reading ${filePath}:`, err.message);
      }
    }
  });
}

// Find all files with conflicts
findConflictFiles(process.cwd());

console.log(`Found ${conflictFiles.length} files with conflicts`);

// Resolve conflicts in each file
conflictFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        continue;
      } else if (line.includes('=======')) {
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        continue;
      }
      
      if (!inConflict) {
        resolvedLines.push(line);
      }
    }
    
    // Write the resolved content
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent);
    console.log(`Resolved conflicts in: ${filePath}`);
  } catch (err) {
    console.error(`Error resolving conflicts in ${filePath}:`, err.message);
  }
});

console.log('All conflicts resolved!');

console.log('🎉 Merge conflict resolution completed!');
