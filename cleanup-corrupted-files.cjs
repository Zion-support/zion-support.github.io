const fs = require('fs');
const path = require('path');

// Function to check if a file has merge conflict markers
function hasMergeConflicts(content) {
  return content.includes('<<<<<<< HEAD') || 
         content.includes('=======') || 
         content.includes('>>>>>>> main') ||
         content.includes('>>>>>>> ') ||
         content.includes('<<<<<<< ');
}

// Function to clean merge conflicts by keeping the HEAD version
function cleanMergeConflicts(content) {
  // Remove merge conflict markers and keep HEAD version
  return content
    .replace(/<<<<<<< HEAD\n?/g, '')
    .replace(/=======\n?/g, '')
    .replace(/>>>>>>> main\n?/g, '')
    .replace(/>>>>>>> .*\n?/g, '')
    .replace(/<<<<<<< .*\n?/g, '');
}

// Function to recursively process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (['node_modules', '.git', 'dist', '.next', 'backup', 'backup-problematic', 'corrupted-src-backup', 'app-broken', 'app-disabled'].includes(item)) {
        continue;
      }
      processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        
        if (hasMergeConflicts(content)) {
          console.log(`Cleaning merge conflicts in: ${fullPath}`);
          const cleanedContent = cleanMergeConflicts(content);
          fs.writeFileSync(fullPath, cleanedContent, 'utf8');
        }
      } catch (error) {
        console.log(`Error processing ${fullPath}: ${error.message}`);
      }
    }
  }
}

// Start processing from the workspace root
console.log('Starting cleanup of corrupted files...');
processDirectory('/workspace');
console.log('Cleanup completed!');
