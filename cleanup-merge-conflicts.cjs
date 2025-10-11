#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts to clean
    }
    
    console.log(`Cleaning merge conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let conflictType = null; // 'head', 'separator', 'main'
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.trim().startsWith('=======')) {
        conflictType = 'separator';
        continue;
      } else if (line.trim().startsWith('>>>>>>> ')) {
        inConflict = false;
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        // Keep HEAD content, skip origin/main content
        if (conflictType === 'head') {
          cleanedLines.push(line);
        }
        // Skip content between ======= and >>>>>>> (origin/main content)
      } else {
        cleanedLines.push(line);
      }
    }
    
    // Write cleaned content back
    const cleanedContent = cleanedLines.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    
    return true; // Conflicts were cleaned
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
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
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check if it's a source file
        const ext = path.extname(item);
        if (['.js', '.ts', '.tsx', '.jsx', '.json', '.md'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict cleanup...');

const workspaceDir = process.cwd();
const filesWithConflicts = findFilesWithConflicts(workspaceDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let cleanedCount = 0;
for (const filePath of filesWithConflicts) {
  if (cleanMergeConflicts(filePath)) {
    cleanedCount++;
  }
}

console.log(`Cleaned merge conflicts in ${cleanedCount} files`);

// Run a final check
console.log('Running final check...');
try {
  execSync('pnpm run type-check', { stdio: 'pipe' });
  console.log('✅ TypeScript check passed');
} catch (error) {
  console.log('❌ TypeScript check failed, but conflicts were cleaned');
}

console.log('Merge conflict cleanup completed!');