#!/usr/bin/env node

const _fs = require('fs');
const _path = require('path');
const { execSync } = require('child_process');

// //Function to find all files with merge conflicts
function findConflictFiles(_dir) {
  const _conflictFiles = [];
  
  function searchDirectory(currentDir) {
//     const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
//       const filePath = path.join(currentDir, file);
      const _stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'dist') {
        searchDirectory(filePath);
      } else if (stat.isFile() && (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx'))) {
        try {
          const _content = fs.readFileSync(filePath, 'utf8');
          if (content.includes('            conflictFiles.push(filePath);
    if (content.includes('      //Split into sections
      const sections = content.split(/      
    if (content.includes('      //Split into sections
      const sections = content.split(/
