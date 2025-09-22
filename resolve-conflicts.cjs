<<<<<<< HEAD
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======




>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
const { execSync } = require('child_process');
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

// Function to resolve merge conflicts in a file;
function resolveMergeConflicts(filePath) {
  try {
  // TODO: Implement
}

    const originalContent = content;
    // Remove all merge conflict markers and keep the main branch version (after;
    content = content.replace(/
    )
    // Handle incomplete conflicts (missing closing markers)
    // Clean up any remaining conflict markers;
    // Remove any remaining conflict markers;
    // Clean up multiple newlines;)


    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictStart = -1;
<<<<<<< HEAD
    
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];


        inConflict = false;
        conflictStart = -1;
        continue;

<<<<<<< HEAD
      if (!inConflict) {
        resolvedLines.push(line);
      }
    }
    
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
<<<<<<< HEAD
    // Remove all merge conflict markers and keep the main branch version (after =======)
    
    // Clean up any remaining conflict markers
    
    // Remove any remaining conflict markers
    
    // Clean up multiple newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Resolved conflicts in: ${filePath}`);
=======
    const resolvedContent = resolvedLines.join('\n');
    
    if (content !== resolvedContent) {
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`Resolved conflicts in: ${filePath}`);
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      return true;
    return false;
  } catch (error) {
`;
    console.error(`❌ Error processing ${filePath}:`, error.message);
    console.error(`Error processing ${filePath}:`, error.message);




// Function to find all files with merge conflicts;
function findConflictedFiles() {
  // TODO: Implement

    console.log('No merge conflicts found or not in a merge state');
    return [];

// Function to find files with conflict markers;
function findFilesWithConflictMarkers() {
  const conflictedFiles = [];
  function searchDirectory(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories;

          // Skip files that can't be read;
// Find all files with merge conflicts;

function findFilesWithConflicts(dir) {
  const files = [];
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
      const fullPath = path.join(currentPath, item);
<<<<<<< HEAD
      const stat = fs.statSync(fullPath);
      
<<<<<<< HEAD
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          searchDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.jsx') || item.endsWith('.md') || item.endsWith('.json'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
=======
<<<<<<< HEAD

    
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


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

        }
      }
    }
  }

  )
  searchDirectory('.);

  return conflictedFiles;

// Main execution;
function main() {

  // First, try to get conflicted files from git;
  let conflictedFiles = findConflictedFiles();
  // If no git conflicts, search for files with conflict markers;
  if (conflictedFiles.length === 0) {
    conflictedFiles = findFilesWithConflictMarkers();

  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
  console.log(`\n🎉 Resolution complete!`);`;
  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);
  if (resolvedCount > 0) {

    console.log('1. Review the resolved files');
    console.log('2. Test the application');
    console.log('3. Commit the changes');
    console.log('4. Complete the merge');


// Run the script;
main();



  walkDir(dir);
  return files;

// Process all files;

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

for (const file of filesWithConflicts) {

<<<<<<< HEAD
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    // Clean up any remaining 
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
