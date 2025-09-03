#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("🔧 Resolving merge conflicts...");

// Function to resolve merge conflicts by keeping our version (HEAD)
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    
    // Check if file has merge conflicts
    if (!content.includes("<<<<<<< HEAD") && !content.includes("=======") && !content.includes(">>>>>>>")) {
      return false; // No conflicts
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split content by conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepCurrent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        keepCurrent = true;
        continue;
      } else if (line.startsWith('=======')) {
        keepCurrent = false;
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        keepCurrent = false;
        continue;
      }
      
      if (!inConflict || keepCurrent) {
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content
    fs.writeFileSync(filePath, resolvedLines.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles() {
  try {
    const result = execSync('git status --porcelain', { encoding: 'utf8' });
    const conflictedFiles = [];
    
    result.split('\n').forEach(line => {
      if (line.startsWith('UU') || line.startsWith('AA') || line.startsWith('DD')) {
        const filePath = line.substring(3);
        if (fs.existsSync(filePath)) {
          conflictedFiles.push(filePath);
        }
      }
    });
    
    return conflictedFiles;
  } catch (error) {
    console.error('Error finding conflicted files:', error.message);
    return [];
  }
}

// Main execution
function main() {
  const conflictedFiles = findConflictedFiles();
  
  if (conflictedFiles.length === 0) {
    console.log("No merge conflicts found.");
    return;
  }
  
  console.log(`Found ${conflictedFiles.length} files with merge conflicts.`);
  
  let resolvedCount = 0;
  conflictedFiles.forEach(filePath => {
    if (resolveMergeConflicts(filePath)) {
      resolvedCount++;
    }
  });
  
  console.log(`Resolved conflicts in ${resolvedCount} files.`);
  
  if (resolvedCount > 0) {
    console.log("Adding resolved files to git...");
    try {
      execSync('git add .', { stdio: 'inherit' });
      console.log("✅ All conflicts resolved and files staged.");
    } catch (error) {
      console.error("Error adding files to git:", error.message);
    }
  }
}

main();