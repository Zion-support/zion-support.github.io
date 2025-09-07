




<<<<<<< HEAD
=======
<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
console.log('🔧 Starting comprehensive merge conflict resolution...');
=======
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD




const fs = require('fs');
const path = require('path');

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Split by lines and process
// Function to resolve merge conflicts by choosing the newer version (after =======)
function resolveConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      return false; // No conflicts in this file
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split by conflict markers and keep the newer version (after =======)


=======
const { execSync } = require('child_process');
console.log('🔧 Starting comprehensive merge conflict resolution...);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
// Function to resolve merge conflicts in a file;
function resolveMergeConflicts(filePath) {
  try {
  // TODO: Implement
}
<<<<<<< HEAD
    let content = fs.readFileSync(filePath, 'utf8');
=======
    let content = fs.readFileSync(filePath,utf8);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    const originalContent = content;
    
    // Remove all merge conflict markers and keep the main branch version (after;
    content = content.replace(/
    )
    // Handle incomplete conflicts (missing closing markers)
    
    // Clean up any remaining conflict markers;
    
    // Remove any remaining conflict markers;
    
    // Clean up multiple newlines;)
<<<<<<< HEAD
    content = content.replace(/\n{3,}/g, '\n\n');
=======
    content = content.replace(/\n{3}/g,\n\n');
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictStart = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
<<<<<<< HEAD
      
if (line.trim().startsWith('<<<<<<<')) {

      if (line.includes('<<<<<<< HEAD')) {


      if (line.includes('')) {

        inConflict = true;
        conflictStart = i;
        continue;
      }
      

      if (line.includes('=======')) {

      if (line.includes('')) {

        // Skip everything until we find the end marker
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
if (line.trim().startsWith('=======')) {
        continue; // Skip the separator line
      }
      
      if (line.trim().startsWith('>>>>>>>')) {

=======
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4

        inConflict = false;
        conflictStart = -1;
        continue;
<<<<<<< HEAD
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
=======

      if (!inConflict) {
        resolvedLines.push(line);

    
    if (content !== originalContent) {
<<<<<<< HEAD
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Resolved conflicts in: ${filePath}`);
=======
      fs.writeFileSync(filePath, content,utf8);
      console.log(`✅ Resolved conflicts in: ${filePath});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      return true;
    
    return false;
  } catch (error) {
`;
    console.error(`❌ Error processing ${filePath}:`, error.message);
    console.error(`Error processing ${filePath}:`, error.message);




// Function to find all files with merge conflicts;
function findConflictedFiles() {
  // TODO: Implement
<<<<<<< HEAD
    const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
=======
}
    const result = execSync('git diff --name-only --diff-filter=U, { encoding: utf8});
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
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
<<<<<<< HEAD
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.jsx') || item.endsWith('.md') || item.endsWith('.json'))) {
  // TODO: Implement
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes()
            conflictedFiles.push(fullPath);
=======
        if (![node_modules,.git,dist,build,.next].includes(item)) {
          searchDirectory(fullPath);
        }} else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.jsx') || item.endsWith('.md') || item.endsWith('.json'))) {
        try {
  // TODO: Implement
}
          const content = fs.readFileSync(fullPath,utf8);
          if (content.includes()
            conflictedFiles.push(fullPath);
          }
        } catch (error) {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
          // Skip files that can't be read;
// Find all files with merge conflicts;
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
      const fullPath = path.join(currentPath, item);
<<<<<<< HEAD
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
<<<<<<< HEAD
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


=======
        if (content.includes(

  searchDirectory('.');
=======
      const stat = fs.statSync(fullPath);
      '
      if (stat.isDirectory() && !item.startsWith('.) && item !==node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath,utf8);
        if (content.includes(
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
        }
      }
    }
  }

  )
  searchDirectory('.);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  return conflictedFiles;

// Main execution;
function main() {
<<<<<<< HEAD
  console.log('🔍 Searching for files with merge conflicts...');
=======
  console.log('🔍 Searching for files with merge conflicts...);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  // First, try to get conflicted files from git;
  let conflictedFiles = findConflictedFiles();
  
  // If no git conflicts, search for files with conflict markers;
  if (conflictedFiles.length === 0) {
    conflictedFiles = findFilesWithConflictMarkers();
  
<<<<<<< HEAD
=======
<<<<<<< HEAD
    console.log('✅ No merge conflicts found!');
    return;
  console.log(`📁 Found ${conflictedFiles.length} files with conflicts:`);`;
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
=======
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!);
    return;
  }
  
  console.log(`📁 Found ${conflictedFiles.length} files with conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}));
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  
  let resolvedCount = 0;
  
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
  console.log(`\n🎉 Resolution complete!`);`;
  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);
  
  if (resolvedCount > 0) {
<<<<<<< HEAD
    console.log('\n📝 Next steps:');
=======
    console.log('\n📝 Next steps: );
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    console.log('1. Review the resolved files');
    console.log('2. Test the application');
    console.log('3. Commit the changes');
    console.log('4. Complete the merge');
<<<<<<< HEAD
=======
  }
}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

// Run the script;
main();

>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4

  walkDir(dir);
  return files;

// Process all files;
<<<<<<< HEAD
const filesWithConflicts = findFilesWithConflicts('.');`;
=======
const filesWithConflicts = findFilesWithConflicts('.);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

for (const file of filesWithConflicts) {
<<<<<<< HEAD
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
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n?/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
    
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




=======

console.log(`Resolved conflicts in ${resolvedCount} files`);

>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
