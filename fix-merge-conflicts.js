#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all files with merge conflicts
const filesWithConflicts = execSync('grep -l "^<<<<<<<" -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'));

function resolveMergeConflict(content) {
  const lines = content.split('\n');
  const resolved = [];
  let inConflict = false;
  let conflictBuffer = [];
  let currentBranch = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<<')) {
      inConflict = true;
      currentBranch = line.replace('<<<<<<<', '').trim();
      conflictBuffer = [];
      continue;
    }
    
    if (line.startsWith('=======')) {
      continue;
    }
    
    if (line.startsWith('>>>>>>>')) {
      inConflict = false;
      
      // Choose the most complete version (longest non-empty content)
      const branches = conflictBuffer.reduce((acc, branch) => {
        const content = branch.content.trim();
        if (content.length > 0) {
          acc.push({ name: branch.name, content, length: content.length });
        }
        return acc;
      }, []);
      
      if (branches.length > 0) {
        // Sort by length and take the longest
        branches.sort((a, b) => b.length - a.length);
        const chosen = branches[0];
        console.log(`  Chose branch: ${chosen.name} (${chosen.length} chars)`);
        resolved.push(...chosen.content.split('\n'));
      }
      
      conflictBuffer = [];
      currentBranch = '';
      continue;
    }
    
    if (inConflict) {
      if (!conflictBuffer.find(b => b.name === currentBranch)) {
        conflictBuffer.push({ name: currentBranch, content: '' });
      }
      const branchIndex = conflictBuffer.findIndex(b => b.name === currentBranch);
      conflictBuffer[branchIndex].content += (conflictBuffer[branchIndex].content ? '\n' : '') + line;
    } else {
      resolved.push(line);
    }
  }
  
  return resolved.join('\n');
}

function fixFile(filePath) {
  try {

    const content = fs.readFileSync(filePath, 'utf8');
    const resolved = resolveMergeConflict(content);
    fs.writeFileSync(filePath, resolved);

  } catch (error) {

  }
}

// Fix all files
filesWithConflicts.forEach(fixFile);
