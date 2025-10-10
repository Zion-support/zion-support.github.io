#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts
    }
    
    console.log(`📝 Resolving conflicts in: ${filePath}`);
    
    // Strategy: Keep the newer version (after =======) and remove conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepNewer = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepNewer = false;
        continue;
      }
      
      if (line.includes('=======')) {
        keepNewer = true;
        continue;
      }
      
      if (line.includes('>>>>>>> ')) {
        inConflict = false;
        keepNewer = false;
        continue;
      }
      
      if (!inConflict || keepNewer) {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
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
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
            conflictedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory(dir);
  return conflictedFiles;
}

// Main execution
try {
  const workspaceDir = '/workspace';
  const conflictedFiles = findConflictedFiles(workspaceDir);
  
  console.log(`🔍 Found ${conflictedFiles.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`✅ Successfully resolved conflicts in ${resolvedCount} files`);
  
  // Try to build after resolving conflicts
  console.log('🔨 Attempting build after conflict resolution...');
  try {
    execSync('npm run build', { cwd: workspaceDir, stdio: 'inherit' });
    console.log('✅ Build successful after conflict resolution!');
  } catch (buildError) {
    console.log('⚠️  Build still has issues, but conflicts resolved');
  }
  
} catch (error) {
  console.error('❌ Error during conflict resolution:', error.message);
  process.exit(1);
}