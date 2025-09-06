#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      fixedCount += findAndFixConflicts(filePath);
    } else if (file.name.endsWith('.ts') || file.name.endsWith('.js') || file.name.endsWith('.tsx') || file.name.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<<<<<<< HEAD')) {
        if (fixMergeConflicts(filePath)) {
          fixedCount++;
        }
      }
    }
  }
  
  return fixedCount;
}

console.log('🔧 Fixing merge conflicts...');
const fixedCount = findAndFixConflicts('.');
console.log(`✅ Fixed ${fixedCount} files with merge conflicts`);