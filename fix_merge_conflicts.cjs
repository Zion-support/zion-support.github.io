#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the content after =======
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]*/g, '$1');
    
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    content = content.replace(/>>>>>>> [^\n]*/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find all TypeScript/JavaScript files with merge conflicts
const { execSync } = require('child_process');

try {
  const files = execSync('find /workspace/app -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | head -50', { encoding: 'utf8' }).trim().split('\n');
  
  files.forEach(file => {
    if (file && fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
        fixMergeConflicts(file);
      }
    }
  });
  
  console.log('Merge conflicts fixed!');
} catch (error) {
  console.error('Error:', error.message);
}