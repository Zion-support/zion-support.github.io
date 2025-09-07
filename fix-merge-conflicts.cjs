<<<<<<< HEAD
#!/usr/bin/env node

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
#!/usr/bin/env node
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452

const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
<<<<<<< HEAD
=======
// Function to fix merge conflicts in a file
>>>>>>> main
=======
const fs = require('fs');
const path = require('path');

>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
function fixMergeConflicts(filePath) {
  try {
<<<<<<< HEAD
=======
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
<<<<<<< HEAD
<<<<<<< HEAD
    // Remove merge conflict markers and keep the second version (after =======)
=======
<<<<<<< HEAD
    // Remove merge conflict markers and keep the content after the last =======
>>>>>>> main
=======
    // Remove merge conflict markers and keep the second version (after =======)
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
=======

function fixMergeConflicts(filePath) {
  try {

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepContent = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
<<<<<<< HEAD
      
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepVersion = false;
        continue;
      }
      
      if (line.includes('=======')) {
        keepVersion = true;
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepVersion = false;
        continue;
      }
      
      if (!inConflict || keepVersion) {
        fixedLines.push(line);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
<<<<<<< HEAD
=======
=======
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+.*?\n?/g, '');
    
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< .*?\n?/g, '');
    content = content.replace(/
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> main
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    return false;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
=======
<<<<<<< HEAD
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
// Function to recursively find and fix files
function fixFilesInDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
>>>>>>> main
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
  let fixedCount = 0;

      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

  }
  
  scanDirectory(dir);
  return files;
}

    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read

        }
<<<<<<< HEAD
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> main
        }
<<<<<<< HEAD
=======
function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
>>>>>>> main
=======
function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
      }
    }
  }
  
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  traverse(dir);
=======
<<<<<<< HEAD
  walkDir(dir);
=======
  traverse(dir);
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======

      }
    }
  }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
  return files;
}

// Main execution

console.log('🔍 Scanning for files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts(process.cwd());

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {

  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
console.log('🎉 Merge conflict resolution complete!');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
>>>>>>> main
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
  return fixedCount;
}

// Fix conflicts in src/pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');
if (fs.existsSync(pagesDir)) {
  const fixedCount = findAndFixConflicts(pagesDir);
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
} else {
  console.log('src/pages directory not found');
}

// Also fix other common directories
const otherDirs = ['src/components', 'src'];
for (const dir of otherDirs) {
  const fullPath = path.join(__dirname, dir);
  if (fs.existsSync(fullPath)) {
    const fixedCount = findAndFixConflicts(fullPath);
    if (fixedCount > 0) {
      console.log(`Fixed merge conflicts in ${fixedCount} files in ${dir}`);
    }
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
console.log('Merge conflict fixing completed!');
=======
console.log('Merge conflict fixing completed!');
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
<<<<<<< HEAD
console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Try to build after fixing conflicts
console.log('Attempting build after fixing conflicts...');
try {
  execSync('npm run build', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Build successful!');
} catch (error) {
  console.error('Build failed:', error.message);
}
  return fixedCount;
=======
<<<<<<< HEAD
  scanDirectory(dir);
=======
  walkDir(dir);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return files;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
}

// Main execution

}

<<<<<<< HEAD
<<<<<<< HEAD
console.log('Merge conflict fix completed.');
=======
console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Try to build after fixing conflicts
console.log('Attempting build after fixing conflicts...');
try {
  execSync('npm run build', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Build successful!');
} catch (error) {
  console.error('Build failed:', error.message);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
console.log('🎉 Merge conflict resolution complete!');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
=======
console.log('Merge conflict fixing completed!');
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
