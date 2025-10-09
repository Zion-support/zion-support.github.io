#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split by merge conflict markers and keep the last version (usually the most recent)
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictStart = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictStart = i;
        continue;
      }
      
      if (line.startsWith('=======')) {
        // Skip the separator line
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictStart = -1;
        continue;
      }
      
      if (!inConflict) {
        resolvedLines.push(line);
      } else if (inConflict && conflictStart !== -1) {
        // We're in the second part of the conflict (after =======)
        // This is usually the version we want to keep
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    
    // Write the resolved content back to the file
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'out', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main function
function main() {
  const srcDir = path.join(__dirname, 'src');
  
  if (!fs.existsSync(srcDir)) {
    console.error('src directory not found');
    process.exit(1);
  }
  
  console.log('Finding source files...');
  const sourceFiles = findSourceFiles(srcDir);
  console.log(`Found ${sourceFiles.length} source files`);
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  for (const filePath of sourceFiles) {
    try {
      if (resolveMergeConflicts(filePath)) {
        resolvedCount++;
      }
    } catch (error) {
      console.error(`Failed to process ${filePath}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\nResolved conflicts in ${resolvedCount} files`);
  if (errorCount > 0) {
    console.log(`Errors in ${errorCount} files`);
  }
  
  // Also check for any remaining conflict markers
  console.log('\nChecking for remaining conflict markers...');
  const remainingConflicts = [];
  
  for (const filePath of sourceFiles) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
        remainingConflicts.push(filePath);
      }
    } catch (error) {
      // Ignore read errors
    }
  }
  
  if (remainingConflicts.length > 0) {
    console.log(`Warning: ${remainingConflicts.length} files still have conflict markers:`);
    remainingConflicts.forEach(file => console.log(`  - ${file}`));
  } else {
    console.log('All merge conflicts resolved successfully!');
  }
}

if (require.main === module) {
  main();
}

module.exports = { resolveMergeConflicts, findSourceFiles };