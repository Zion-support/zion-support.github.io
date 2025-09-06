#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep the first version
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*? [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Clean up any orphaned text
    content = content.replace(/^\s*origin\/[^\n]+\n/gm, '');
    content = content.replace(/^\s*cursor\/[^\n]+\n/gm, '');
    content = content.replace(/^\s*main\n/gm, '');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', '.next', 'backup', 'pages_backup_conflict'].includes(file)) {
        findAndFixFiles(filePath);
      }
    } else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<<<<<<< HEAD')) {
        fixMergeConflicts(filePath);
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      }
    } catch (error) {
      // Skip directories that can't be read
      console.log(`⚠️  Skipping directory ${currentPath}: ${error.message}`);
    }
  }
}

console.log('Fixing merge conflicts...');
findAndFixFiles('./pages');
findAndFixFiles('./components');
findAndFixFiles('./src');
console.log('Done!');
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
