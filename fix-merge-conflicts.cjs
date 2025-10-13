#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
<<<<<<< HEAD
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]*\n/g, '$1');
=======
    // Remove merge conflict markers and keep the HEAD version (first part)
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = '';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
    
<<<<<<< HEAD
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
<<<<<<< HEAD
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'separator';
=======
      if (line.startsWith('        inConflict = true;
        conflictStart = i;
        continue;
      }
      
      if (line.startsWith('')) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
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
=======
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
      
      // Find the last occurrence of ======= and >>>>>>> 
      const lastEqualIndex = content.lastIndexOf('=======');
      const lastGreaterIndex = content.lastIndexOf('>>>>>>>');
      
      if (lastEqualIndex !== -1 && lastGreaterIndex !== -1 && lastGreaterIndex > lastEqualIndex) {
        // Find the corresponding <<<<<<< 
        const beforeEqual = content.substring(0, lastEqualIndex);
        const lastLessIndex = beforeEqual.lastIndexOf('<<<<<<<');
        
        if (lastLessIndex !== -1) {
          // Extract the "ours" version (after ======= and before >>>>>>>)
          const afterEqual = content.substring(lastEqualIndex + 7, lastGreaterIndex);
          const beforeLess = content.substring(0, lastLessIndex);
          const afterGreater = content.substring(lastGreaterIndex + 7);
          
          // Keep the "theirs" version (after =======)
          content = beforeLess + afterEqual + afterGreater;
          changed = true;
        }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
      }
    }
=======
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n/g, '');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
    
<<<<<<< HEAD
<<<<<<< HEAD
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
=======
    const fixedContent = fixedLines.join('\n');
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      modified = true;
      console.log(`Fixed merge conflicts in: ${filePath}`);
=======
    // Clean up any remaining conflict markers
    content = content.replace(/^<<<<<<< .*$/gm, '');
    content = content.replace(/^=======.*$/gm, '');
    content = content.replace(/^>>>>>>> .*$/gm, '');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove any remaining orphaned markers
    content = content.replace(/^<<<<<<<|^=======|^>>>>>>>/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
    }
    
    return modified;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
  } catch (error) {
<<<<<<< HEAD
    console.error(`Error fixing ${filePath}:`, error.message);
=======
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
    return false;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
// Find all TypeScript/JavaScript files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDir(currentDir) {
=======
// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
<<<<<<< HEAD
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
        searchDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
=======
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
=======
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
            if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
<<<<<<< HEAD
<<<<<<< HEAD
  searchDir(dir);
=======
  scanDirectory(dir);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======
  scanDirectory(dir);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  return files;
}

// Main execution
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
console.log('Starting merge conflict resolution...');

const workspaceDir = process.cwd();
const conflictFiles = findFilesWithConflicts(workspaceDir);

console.log(`Found ${conflictFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Also fix some common syntax issues
console.log('Fixing common syntax issues...');

// Fix common JSX issues
const jsxFiles = conflictFiles.filter(f => f.endsWith('.tsx') || f.endsWith('.jsx'));

for (const file of jsxFiles) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Fix unclosed JSX tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
    
    // Fix missing closing tags in simple cases
    if (content.includes('<div') && !content.includes('</div>')) {
      content = content.replace(/(<div[^>]*>)([^<]*)$/gm, '$1$2</div>');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed JSX syntax in: ${file}`);
    }
  } catch (error) {
    console.error(`Error fixing JSX in ${file}:`, error.message);
  }
}

console.log('Merge conflict resolution completed!');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
