#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
      }
    }
    
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
    }
    
    return false;
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

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
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
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