#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by conflict markers
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let conflictType = null;
    let headContent = [];
    let otherContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'other';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        // End of conflict - choose the better content
        if (headContent.length > 0 && otherContent.length > 0) {
          // Choose the longer content or the one with more meaningful content
          const headText = headContent.join('\n');
          const otherText = otherContent.join('\n');
          
          // Prefer content with more lines or more meaningful content
          if (otherContent.length > headContent.length || 
              otherText.includes('export') || 
              otherText.includes('function') ||
              otherText.includes('const') ||
              otherText.includes('import')) {
            result.push(...otherContent);
          } else {
            result.push(...headContent);
          }
        } else if (headContent.length > 0) {
          result.push(...headContent);
        } else if (otherContent.length > 0) {
          result.push(...otherContent);
        }
        
        inConflict = false;
        conflictType = null;
        headContent = [];
        otherContent = [];
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headContent.push(line);
        } else if (conflictType === 'other') {
          otherContent.push(line);
        }
      } else {
        result.push(line);
      }
    }
    
    // Write the fixed content
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix merge conflicts
function fixAllMergeConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllMergeConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting merge conflict resolution...');
const fixedCount = fixAllMergeConflicts('./app');
console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Also check components directory
const componentsFixed = fixAllMergeConflicts('./components');
console.log(`Fixed merge conflicts in ${componentsFixed} components files`);

console.log('Merge conflict resolution complete!');