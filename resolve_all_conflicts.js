#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('      return false; // No conflicts to fix
    }
    
    console.log(`Resolving merge conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = null; // 'head', 'other', or 'base'
    let headLines = [];
    let otherLines = [];
    let baseLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('        inConflict = true;
        if (line.includes('.our')) {
          conflictType = 'head';
        } else if (line.includes('.their')) {
          conflictType = 'other';
        } else if (line.includes('HEAD')) {
          conflictType = 'head';
        } else {
          conflictType = 'base';
        }
        continue;
      } else if (line.trim() === '') {
        if (conflictType === 'head') {
          conflictType = 'other';
        } else if (conflictType === 'base') {
          conflictType = 'other';
        }
        continue;
      } else if (line.trim().startsWith('        inConflict = false;
        
        // Resolve conflict by choosing the most complete version
        let chosenLines = [];
        
        if (headLines.length > 0 && otherLines.length > 0) {
          // If both sides have content, choose the longer/more complete version
          const headContent = headLines.join('\n').trim();
          const otherContent = otherLines.join('\n').trim();
          
          if (headContent.length > otherContent.length) {
            chosenLines = headLines;
          } else {
            chosenLines = otherLines;
          }
        } else if (headLines.length > 0) {
          chosenLines = headLines;
        } else if (otherLines.length > 0) {
          chosenLines = otherLines;
        } else if (baseLines.length > 0) {
          chosenLines = baseLines;
        }
        
        fixedLines.push(...chosenLines);
        
        // Reset for next conflict
        headLines = [];
        otherLines = [];
        baseLines = [];
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headLines.push(line);
        } else if (conflictType === 'other') {
          otherLines.push(line);
        } else if (conflictType === 'base') {
          baseLines.push(line);
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    // Join lines and clean up
    let fixedContent = fixedLines.join('\n');
    
    // Remove duplicate empty lines
    fixedContent = fixedContent.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove any remaining conflict markers
    fixedContent = fixedContent.replace(/    fixedContent = fixedContent.replace(/\n?/g, '');
    fixedContent = fixedContent.replace(/    
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    
    return true; // Conflicts were fixed
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
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
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (file === 'node_modules' || file === '.git' || file === 'dist' || file === '.next' || file === 'build') {
        continue;
      }
      fixedCount += fixAllMergeConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (resolveMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive merge conflict resolution...');
const fixedCount = fixAllMergeConflicts('/workspace');
console.log(`Resolved merge conflicts in ${fixedCount} files.`);