const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
function resolveMergeConflicts(content) {
  // Remove all merge conflict markers and keep the HEAD version
  return content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)    .replace(/<<<<<<< HEAD\n([\s\S]*?)    .replace(/<<<<<<< HEAD\n/g, '')
    .replace(/=======\n([\s\S]*?)    .replace(/}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Processing: ${filePath}`);
      const resolvedContent = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git directories
        if (item !== 'node_modules' && item !== '.git' && item !== 'app-broken') {
          traverse(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

function main() {
  const workspaceDir = '/workspace';
  console.log('Starting merge conflict resolution...');
  
  const files = findFilesWithConflicts(workspaceDir);
  console.log(`Found ${files.length} files to check`);
  
  let processedCount = 0;
  let conflictCount = 0;
  
  for (const file of files) {
    if (processFile(file)) {
      conflictCount++;
    }
    processedCount++;
  }
  
  console.log(`\nResolution complete!`);
  console.log(`Processed ${processedCount} files`);
  console.log(`Resolved conflicts in ${conflictCount} files`);
}

main();
=======
function resolveMergeConflicts(conte, n, t) {
  // Remove all merge conflict markers and keep the HEAD version
  return content

function processFile(filePa, t, h) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
