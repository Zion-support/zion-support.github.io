<<<<<<< HEAD
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
>>>>>>> main
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
<<<<<<< HEAD
console.log('🔧 Starting merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
=======
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
<<<<<<< HEAD
    console.log(`📝 Resolving conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const parts = content.split(/<<<<<<< HEAD\n?/);
    let resolved = parts[0]; // Content before first conflict
    
    for (let i = 1; i < parts.length; i++) {
      const conflictPart = parts[i];
      const conflictSections = conflictPart.split(/=======\n?/);
      
      if (conflictSections.length >= 2) {
        const headContent = conflictSections[0];
        const remaining = conflictSections.slice(1).join('=======');
        const endMarker = remaining.split(/>>>>>>> [a-f0-9]+\n?/);
        
        // Choose HEAD content (first part) and remove conflict markers
        resolved += headContent;
        if (endMarker.length > 1) {
          resolved += endMarker.slice(1).join('>>>>>>> ');
        }
      }
    }
    
    // Clean up any remaining conflict markers
    resolved = resolved.replace(/<<<<<<< HEAD\n?/g, '');
    resolved = resolved.replace(/=======\n?/g, '');
    resolved = resolved.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
    
    // Write resolved content
    fs.writeFileSync(filePath, resolved, 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
=======
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
<<<<<<< HEAD
    // Remove merge conflict markers and keep the content after the last =======
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepContent = false;

    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
=======
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+.*?\n?/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< .*?\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/>>>>>>> .*?\n?/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    return false;
  }
}

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
  let fixedCount = 0;
=======
// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  
<<<<<<< HEAD
  function scanDirectory(currentDir) {
=======
console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
<<<<<<< HEAD
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
    }
=======
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the latest version
    // Patter: n:  ... 
    content = content.replace(/([\s\S]*?)
    
    // Also handle cases where there might be multiple conflict sections
    content = content.replace(//g, '');
    content = content.replace(/
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts: in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
  }
  
  scanDirectory(dir);
  return files;
}

<<<<<<< HEAD
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
=======
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
>>>>>>> main
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
<<<<<<< HEAD
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.css'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD')) {
=======
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check if file contains merge conflict markers
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
>>>>>>> main
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> main
        }
      }
    }
  }
  
<<<<<<< HEAD
<<<<<<< HEAD
  walkDir(dir);
=======
  traverse(dir);
>>>>>>> main
  return files;
}

// Main execution
<<<<<<< HEAD
console.log('Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
=======
console.log('🔍 Scanning for files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts(process.cwd());

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
>>>>>>> main
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

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
}

// Main execution
<<<<<<< HEAD
try {
  const srcDir = path.join(__dirname, 'src');
  const filesWithConflicts = findFilesWithConflicts(srcDir);
  
  console.log(`🔍 Found ${filesWithConflicts.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  for (const filePath of filesWithConflicts) {
    if (resolveMergeConflicts(filePath)) {
      resolvedCount++;
    }
  }
  
  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);
  
  // Verify no more conflicts
  const remainingConflicts = findFilesWithConflicts(srcDir);
  if (remainingConflicts.length === 0) {
    console.log('🎉 All merge conflicts resolved successfully!');
  } else {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.forEach(file => console.log(`   - ${file}`));
  }
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
=======
console.log('Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

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
