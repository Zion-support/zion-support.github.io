#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = null; // 'head' or 'incoming'
    let headLines = [];
    let incomingLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.trim() === '=======') {
        conflictType = 'incoming';
        continue;
      } else if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        
        // Resolve conflict by choosing the appropriate version
        // For most cases, prefer the HEAD version (current branch)
        // But for specific patterns, choose the incoming version
        
        let chosenLines = headLines;
        
        // Special cases where we prefer the incoming version
        if (filePath.includes('App.tsx') && headLines.some(l => l.includes('_HomePage'))) {
          chosenLines = incomingLines;
        } else if (filePath.includes('page.tsx') && headLines.some(l => l.includes('import { Link }'))) {
          chosenLines = incomingLines;
        } else if (headLines.length === 0 && incomingLines.length > 0) {
          chosenLines = incomingLines;
        } else if (headLines.some(l => l.includes('// TODO') || l.includes('// FIXME'))) {
          chosenLines = incomingLines;
        }
        
        resolvedLines.push(...chosenLines);
        headLines = [];
        incomingLines = [];
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headLines.push(line);
        } else if (conflictType === 'incoming') {
          incomingLines.push(line);
        }
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content back to file
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
function main() {
  console.log('Starting merge conflict resolution...');
  
  const srcDir = path.join(process.cwd(), 'src');
  const filesWithConflicts = findFilesWithConflicts(srcDir);
  
  console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  for (const filePath of filesWithConflicts) {
    if (resolveMergeConflicts(filePath)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`\nResolution complete:`);
  console.log(`- Files resolved: ${resolvedCount}`);
  console.log(`- Files with errors: ${errorCount}`);
  
  if (resolvedCount > 0) {
    console.log('\nRunning lint check to verify fixes...');
    try {
      execSync('pnpm run lint', { stdio: 'inherit' });
      console.log('Lint check passed!');
    } catch (error) {
      console.log('Lint check failed, but conflicts were resolved.');
    }
  }
}

if (require.main === module) {
  main();
}

module.exports = { resolveMergeConflicts, findFilesWithConflicts };