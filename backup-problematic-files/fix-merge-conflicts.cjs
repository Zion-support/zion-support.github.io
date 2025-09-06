<<<<<<< HEAD:backup-problematic-files/fix-merge-conflicts.cjs
#!/usr/bin/env node

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
=======
#!/usr/bin/env node

>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:fix-merge-conflicts.cjs
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
        inConflict = true;
        conflictType = 'head';
        continue;
      }
      
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (!inConflict) {
        fixedLines.push(line);
      } else if (conflictType === 'head') {
        // Keep the HEAD version (first part)
        fixedLines.push(line);
      }
      // Skip the other branch content
    }
    
    // Write the fixed content
    fs.writeFileSync(filePath, fixedLines.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
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
        if (!['node_modules', '.git', '.next', 'dist', 'build', 'out', 'coverage'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript, JavaScript, and other relevant files
        if (/\.(ts|tsx|js|jsx|cjs|mjs)$/.test(item)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
try {
  const filesWithConflicts = findFilesWithConflicts('/workspace');
  console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
  
  let fixedCount = 0;
  for (const file of filesWithConflicts) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
  
  // Run a quick syntax check
  console.log('🔍 Running syntax check...');
  try {
    execSync('npm run type-check', { stdio: 'pipe' });
    console.log('✅ TypeScript check passed');
  } catch (error) {
    console.log('⚠️  TypeScript check failed, but merge conflicts are resolved');
  }
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
}