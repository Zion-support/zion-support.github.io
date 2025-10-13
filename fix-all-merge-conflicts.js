<<<<<<< HEAD
    if (!content.includes('') && !content.includes('>>>>>>>')) {
      const line = lines[i];
      
      if (line.startsWith('')) {
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('') && !content.includes('') && !content.includes('>>>>>>>')) {
      return false; // No conflicts
    }
    
    console.log(`📝 Resolving conflicts in: ${filePath}`);
    
    // Split content by conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = '';
    let headContent = [];
    let separatorFound = false;
    let branchContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('')) {
        inConflict = true;
        conflictType = 'head';
        headContent = [];
        separatorFound = false;
        branchContent = [];
        continue;
      }
      
      if (line.startsWith('')) {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
        separatorFound = true;
        conflictType = 'separator';
        continue;
          const content = fs.readFileSync(fullPath, 'utf8');
<<<<<<< HEAD
          if (content.includes('') || content.includes('>>>>>>>')) {
=======
          if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
            files.push(fullPath);
