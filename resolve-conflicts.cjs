

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const fs = require('fs');
const path = require('path');

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
)
function resolveConflicts(filePath) {
=======
    // Remove all merge conflict markers and keep the main branch version (after =======)
    content = content.replace(/([\s\S]*?)
    
    // Handle incomplete conflicts (missing closing markers)
    content = content.replace(/([\s\S]*?)(?=\n|$)/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/[\s\S]*?
    content = content.replace(/[\s\S]*?
    
    // Remove any remaining conflict markers
    content = content.replace(/[\s\S]*?
    content = content.replace(/[\s\S]*?
    
    // Clean up multiple consecutive newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Resolved conflicts in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles() {
 (Resolve merge conflicts: clean up all conflict markers)
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      return false; // No conflicts in this file
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split by conflict markers and keep the newer version (after =======)

    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictStart = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
if (line.trim().startsWith('<<<<<<<')) {

      if (line.includes('')) {

      if (line.includes('')) {

        // Skip everything until we find the end marker
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
if (line.trim().startsWith('=======')) {
        continue; // Skip the separator line
      }
      
      if (line.trim().startsWith('>>>>>>>')) {

        inConflict = false;
        conflictStart = -1;
        continue;
      }
      

      if (!inConflict) {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    
    if (content !== resolvedContent) {
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`Resolved conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
if (inConflict) {
        // Skip lines before ======= (old version)
        if (conflictStart !== -1 && i > conflictStart) {
          continue;
        }
      }
      
      resolvedLines.push(line);
    }
    
    // Write the resolved content back to the file
    fs.writeFileSync(filePath, resolvedLines.join('\n'), 'utf8');
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);

    return false;
  }
}

// Find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('')) {
          files.push(fullPath);
// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check if file has merge conflicts
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<<') && content.includes('=======') && content.includes('>>>>>>>')) {
            conflictedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read

        }
      }
    }
  }
  

  walkDir(dir);
  return files;
}

// Process all files
const filesWithConflicts = findFilesWithConflicts('.');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of filesWithConflicts) {
  if (resolveMergeConflicts(file)) {
scanDirectory(dir);
  return conflictedFiles;
}

// Main execution
console.log('Starting merge conflict resolution...');

const conflictedFiles = findConflictedFiles('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of conflictedFiles) {
  if (resolveConflicts(file)) {

    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);

    // Remove all merge conflict markers and keep the content after =======
    content = content.replace(/\n?/g, '');
    content = content.replace(/
    
    // Clean up any remaining ======= markers
    content = content.replace(/=======\n?/g, '');

    // Remove all merge conflict markers and keep the content after     content = content.replace(/[\s\S]*?\n?/g, '');
    content = content.replace(/    
    // Clean up any remaining  markers
    content = content.replace(/\n?/g, '');

    
    // Clean up any double newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Resolved conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all .tsx and .ts files in pages directory
const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir, { recursive: true })
  .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'))
  .map(file => path.join(pagesDir, file));

files.forEach(file => {
  if (fs.existsSync(file)) {
    resolveMergeConflicts(file);
  }
});

console.log('Merge conflicts resolved!');
const { execSync } = require('child_process');

function resolveMergeConflicts() {
  try {
    // Get list of conflicted files
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(file => file.length > 0);

    console.log(`Found ${conflictedFiles.length} conflicted files`);

    // Accept our changes for all conflicted files
    for (const file of conflictedFiles) {
      try {
        execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
        execSync(`git add "${file}"`, { stdio: 'pipe' });
        console.log(`Resolved: ${file}`);
      } catch (error) {
        console.log(`Error resolving ${file}: ${error.message}`);
      }
    }

    console.log('All merge conflicts resolved');
  } catch (error) {
    console.error('Error resolving merge conflicts:', error.message);
  }
}

resolveMergeConflicts();
console.log('Merge conflict resolution completed!');

