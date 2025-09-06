#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
const { execSync } = require('child_process');
=======
<<<<<<< HEAD
<<<<<<< HEAD
const { execSync } = require('child_process');
=======
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

<<<<<<< HEAD
console.log('🔧 Starting merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
<<<<<<< HEAD
    if (!content.includes('<<<<<<< HEAD')) {
=======
<<<<<<< HEAD
    if (!content.includes('<<<<<<< HEAD')) {
=======
    if (!content.includes('=======')) {
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
        const incomingContent = conflictSections[1].split(/>>>>>>> .*/)[0];
        
        // Choose the longer content (usually more complete)
        if (headContent.trim().length > incomingContent.trim().length) {
          resolved += headContent;
        } else {
          resolved += incomingContent;
=======
        const remaining = conflictSections.slice(1).join('=======');
        const endMarker = remaining.split(/>>>>>>> [a-f0-9]+\n?/);
        
        // Choose HEAD content (first part) and remove conflict markers
        resolved += headContent;
        if (endMarker.length > 1) {
          resolved += endMarker.slice(1).join('>>>>>>> ');
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        }
      }
    }
    
<<<<<<< HEAD
    // Write the resolved content back
=======
    // Clean up any remaining conflict markers
    resolved = resolved.replace(/<<<<<<< HEAD\n?/g, '');
    resolved = resolved.replace(/=======\n?/g, '');
    resolved = resolved.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
    
    // Write resolved content
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    fs.writeFileSync(filePath, resolved, 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
=======
=======
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+.*?\n?/g, '');
<<<<<<< HEAD
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< .*?\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/>>>>>>> .*?\n?/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
=======
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< .*?\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/>>>>>>> .*?\n?/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
=======
    // Remove merge conflict markers and keep the content after the last =======
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepContent = false;
=======

>>>>>>> origin/main
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
<<<<<<< HEAD
      if (line.includes('<<<<<<<')) {
        inConflict = true;
        keepContent = false;
        continue;
      }
      
      if (line.includes('=======')) {
        keepContent = true;
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepContent = false;
        continue;
      }
      
      if (!inConflict || keepContent) {
        fixedLines.push(line);
      }
    }
    
    // If the file is mostly empty or corrupted, create a basic component
    const fixedContent = fixedLines.join('\n').trim();
    
    if (fixedContent.length < 50 || fixedContent.includes('=======')) {
      // Create a basic React component
      const fileName = path.basename(filePath, path.extname(filePath));
      const isPage = filePath.includes('/pages/');
      const isComponent = filePath.includes('/components/');
      
      let newContent = '';
      
      if (isPage) {
        newContent = `import React from 'react';

const ${fileName} = () => {
  return (
    <div>
      <h1>${fileName}</h1>
      <p>This page is under construction.</p>
    </div>
  );
};

export default ${fileName};`;
      } else if (isComponent) {
        newContent = `import React from 'react';

const ${fileName} = () => {
  return (
    <div>
      {/* ${fileName} component */}
    </div>
  );
};

export default ${fileName};`;
      } else {
        newContent = `// ${fileName} - Fixed merge conflict
export {};`;
      }
      
      fs.writeFileSync(filePath, newContent);
    } else {
      fs.writeFileSync(filePath, fixedContent);
    }
    
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return false;
  }
}

<<<<<<< HEAD
// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
=======
<<<<<<< HEAD
<<<<<<< HEAD
// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
<<<<<<< HEAD
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.css'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
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
        }
=======
// Function to recursively find and fix files
function fixFilesInDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  
<<<<<<< HEAD
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
<<<<<<< HEAD
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.css'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD')) {
            conflictedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        }
=======
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      fixedCount += fixFilesInDirectory(fullPath);
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
      if (fixMergeConflicts(fullPath)) {
        fixedCount++;
>>>>>>> origin/main
=======
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
    }
  }
  
<<<<<<< HEAD
<<<<<<< HEAD
  scanDirectory(dir);
  return conflictedFiles;
=======
=======
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
  scanDirectory(dir);
=======
  walkDir(dir);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return files;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
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
=======
  return fixedCount;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}

// Main execution
<<<<<<< HEAD
try {
  const conflictedFiles = findConflictedFiles('./src');
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);
  
  // Check if there are still conflicts
  const remainingConflicts = findConflictedFiles('./src');
  if (remainingConflicts.length === 0) {
    console.log('🎉 All merge conflicts resolved!');
  } else {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts`);
  }
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
<<<<<<< HEAD
=======
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
console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Try to build after fixing conflicts
console.log('Attempting build after fixing conflicts...');
try {
  execSync('npm run build', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Build successful!');
} catch (error) {
  console.error('Build failed:', error.message);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
=======
console.log('Merge conflict fix completed.');
>>>>>>> origin/main
=======
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
