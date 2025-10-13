#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n([\s\S]*?)([\s\S]*?)    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('')) {
        conflictType = 'separator';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (!inConflict) {
        fixedLines.push(line);
      } else if (inConflict && conflictType === 'head') {
        fixedLines.push(line);
console.log('🔧 Starting merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Count merge conflict markers
    const conflictCount = (content.match(/^<<<<<<< /gm) || []).length;
    if (conflictCount === 0) return false;
    
    console.log(`  📝 Resolving ${conflictCount} conflicts in ${filePath}`);
    
    // Strategy: Keep the last (most recent) version in each conflict
    // This handles nested conflicts by processing from innermost to outermost
    
    let changed = true;
    let iterations = 0;
    const maxIterations = 10; // Prevent infinite loops
    
    while (changed && iterations < maxIterations) {
      changed = false;
      iterations++;
      
      // Find the last occurrence of  and >>>>>>> 
      const lastEqualIndex = content.lastIndexOf('');
      const lastGreaterIndex = content.lastIndexOf('>>>>>>>');
      
      if (lastEqualIndex !== -1 && lastGreaterIndex !== -1 && lastGreaterIndex > lastEqualIndex) {
        // Find the corresponding <<<<<<< 
        const beforeEqual = content.substring(0, lastEqualIndex);
        const lastLessIndex = beforeEqual.lastIndexOf('<<<<<<<');
        
        if (lastLessIndex !== -1) {
          // Extract the "ours" version (after  and before >>>>>>>)
          const afterEqual = content.substring(lastEqualIndex + 7, lastGreaterIndex);
          const beforeLess = content.substring(0, lastLessIndex);
          const afterGreater = content.substring(lastGreaterIndex + 7);
          
          // Keep the "theirs" version (after )
          content = beforeLess + afterEqual + afterGreater;
          changed = true;
        }
      }
    }
    // Remove any remaining merge conflict markers
    content = content.replace(/\n/g, '');
    content = content.replace(/\n/g, '');
    content = content.replace(/    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
        searchDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules, .git, and other irrelevant directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  searchDir(dir);
  scanDirectory(dir);
  return files;
}

// Main execution
const workspaceDir = '/workspace';
const conflictedFiles = findFilesWithConflicts(workspaceDir);

console.log(`Found ${conflictedFiles.length} files with merge conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

let fixedCount = 0;
conflictedFiles.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed merge conflicts in ${fixedCount} out of ${conflictedFiles.length} files.`);
try {
  const workspaceDir = process.cwd();
  console.log(`📁 Scanning workspace: ${workspaceDir}`);
  
  const conflictedFiles = findFilesWithConflicts(workspaceDir);
  console.log(`🔍 Found ${conflictedFiles.length} files with merge conflicts`);
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    process.exit(0);
  }
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  for (const file of conflictedFiles) {
    try {
      if (resolveMergeConflicts(file)) {
        resolvedCount++;
      }
    } catch (error) {
      console.error(`❌ Failed to resolve ${file}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n📊 Resolution Summary:`);
  console.log(`  ✅ Successfully resolved: ${resolvedCount} files`);
  console.log(`  ❌ Failed to resolve: ${errorCount} files`);
  console.log(`  📁 Total files processed: ${conflictedFiles.length}`);
  
  if (resolvedCount > 0) {
    console.log('\n🎉 Merge conflicts resolved! Running type check...');
    try {
      execSync('pnpm run type-check', { stdio: 'inherit' });
      console.log('✅ Type check passed!');
    } catch (error) {
      console.log('⚠️  Type check failed, but conflicts were resolved');
    }
  }
  
} catch (error) {
  console.error('💥 Script failed:', error.message);
  process.exit(1);
}
