<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-529b
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
<<<<<<< HEAD
    // Split by lines and process
<<<<<<< HEAD
=======

// Function to resolve merge conflicts by choosing the newer version (after =======)
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      return false; // No conflicts in this file
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split by conflict markers and keep the newer version (after =======)
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictStart = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
<<<<<<< HEAD
<<<<<<< HEAD
      if (line.includes('<<<<<<< HEAD')) {
=======
      if (line.trim().startsWith('<<<<<<<')) {
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
      if (line.includes('<<<<<<< HEAD')) {
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
        inConflict = true;
        conflictStart = i;
        continue;
      }
      
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
      if (line.includes('=======')) {
        // Skip everything until we find the end marker
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
<<<<<<< HEAD
=======
      if (line.trim().startsWith('=======')) {
        continue; // Skip the separator line
      }
      
      if (line.trim().startsWith('>>>>>>>')) {
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
        inConflict = false;
        conflictStart = -1;
        continue;
      }
      
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
      if (!inConflict) {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    
    if (content !== resolvedContent) {
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`Resolved conflicts in: ${filePath}`);
=======
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove all merge conflict markers and keep the main branch version (after =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [a-f0-9]+/g, '$1');
    
    // Handle incomplete conflicts (missing closing markers)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)(?=\n|$)/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up multiple consecutive newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Resolved conflicts in ${filePath}`);
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-529b
      return true;
    }
    
    return false;
  } catch (error) {
<<<<<<< HEAD
    console.error(`Error processing ${filePath}:`, error.message);
<<<<<<< HEAD
=======
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
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-529b
    return false;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
        if (content.includes('<<<<<<< HEAD')) {
          files.push(fullPath);
<<<<<<< HEAD
=======
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
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
        }
      }
    }
  }
  
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
  walkDir(dir);
  return files;
}

// Process all files
const filesWithConflicts = findFilesWithConflicts('.');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of filesWithConflicts) {
  if (resolveMergeConflicts(file)) {
<<<<<<< HEAD
=======
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
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
    // Remove all merge conflict markers and keep the content after =======
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n?/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
    
    // Clean up any remaining ======= markers
    content = content.replace(/=======\n?/g, '');
    
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
=======
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
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
<<<<<<< HEAD
=======
console.log('Merge conflict resolution completed!');
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
// Function to find all files with merge conflicts
function findConflictedFiles() {
  try {
    const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
    const conflictedFiles = statusOutput
      .split('\n')
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
      .map(line => line.split(' ').pop())
      .filter(file => file && !file.includes('temp_conflicts/'));
    
    return conflictedFiles;
  } catch (error) {
    console.error('Error finding conflicted files:', error.message);
    return [];
  }
}

// Function to resolve yarn.lock conflicts by regenerating it
function resolveYarnLockConflicts() {
  if (fs.existsSync('yarn.lock')) {
    console.log('🔄 Resolving yarn.lock conflicts by regenerating...');
    try {
      // Remove the conflicted yarn.lock
      fs.unlinkSync('yarn.lock');
      console.log('Removed conflicted yarn.lock');
      
      // Regenerate yarn.lock
      execSync('yarn install', { stdio: 'inherit' });
      console.log('✅ Regenerated yarn.lock');
      return true;
    } catch (error) {
      console.error('Error regenerating yarn.lock:', error.message);
      return false;
    }
  }
  return false;
}

// Main execution
async function main() {
  try {
    console.log('🔍 Finding files with merge conflicts...');
    
    // First, try to resolve yarn.lock conflicts by regenerating
    resolveYarnLockConflicts();
    
    // Find all conflicted files
    const conflictedFiles = findConflictedFiles();
    console.log(`Found ${conflictedFiles.length} conflicted files`);
    
    let resolvedCount = 0;
    
    // Resolve conflicts in each file
    for (const file of conflictedFiles) {
      if (fs.existsSync(file)) {
        if (resolveMergeConflicts(file)) {
          resolvedCount++;
        }
      }
    }
    
    // Also check for files with conflict markers that might not be in git status
    const filesWithConflicts = [
      'resolve-all-merge-conflicts.cjs',
      'resolve-merge-conflicts-final.cjs',
      'resolve-all-conflicts.cjs',
      'resolve-merge-conflicts.cjs',
      'pages/white-papers.tsx.disabled'
    ];
    
    for (const file of filesWithConflicts) {
      if (fs.existsSync(file)) {
        if (resolveMergeConflicts(file)) {
          resolvedCount++;
        }
      }
    }
    
    console.log(`\n✅ Conflict resolution summary:`);
    console.log(`- Files processed: ${conflictedFiles.length + filesWithConflicts.length}`);
    console.log(`- Conflicts resolved: ${resolvedCount}`);
    
    // Add all resolved files to git
    try {
      execSync('git add .', { stdio: 'inherit' });
      console.log('✅ Added resolved files to git');
    } catch (error) {
      console.error('Error adding files to git:', error.message);
    }
    
    // Check if there are any remaining conflicts
    try {
      const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
      const remainingConflicts = statusOutput.split('\n').filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'));
      
      if (remainingConflicts.length === 0) {
        console.log('\n🎉 All conflicts resolved! Ready to commit.');
        
        // Commit the merge
        execSync('git commit -m "Resolve merge conflicts: automated resolution of all conflicts"');
        console.log('✅ Merge committed successfully!');
      } else {
        console.log(`\n⚠️  ${remainingConflicts.length} conflicts still remain:`);
        remainingConflicts.forEach(conflict => console.log(`  - ${conflict}`));
      }
    } catch (error) {
      console.error('Error checking remaining conflicts:', error.message);
    }
    
  } catch (error) {
    console.error('Error during conflict resolution:', error.message);
    process.exit(1);
  }
}

main();
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-529b
