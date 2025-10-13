const fs = require('fs');
const path = require('path');

// Function to clean merge conflicts from a file
function cleanMergeConflicts(content) {
  // Remove merge conflict markers and keep the content after the last =======
  const lines = content.split('\n');
  const cleanedLines = [];
  let inConflict = false;
  let conflictDepth = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('<<<<<<< HEAD')) {
      inConflict = true;
      conflictDepth++;
      continue;
    }
    
    if (line.includes('=======')) {
      continue;
    }
    
    if (line.includes('>>>>>>>')) {
      inConflict = false;
      conflictDepth--;
      continue;
    }
    
    if (!inConflict) {
      cleanedLines.push(line);
    }
  }
  
  return cleanedLines.join('\n');
}

// Function to recursively find and fix merge conflicts
function fixMergeConflicts(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      fixMergeConflicts(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        
        if (content.includes('<<<<<<< HEAD')) {
          console.log(`Fixing merge conflicts in: ${fullPath}`);
          const cleanedContent = cleanMergeConflicts(content);
          fs.writeFileSync(fullPath, cleanedContent);
        }
      } catch (error) {
        console.error(`Error processing ${fullPath}:`, error.message);
      }
    }
  }
}

// Start fixing from the app directory
console.log('Starting merge conflict cleanup...');
fixMergeConflicts('./app');
console.log('Merge conflict cleanup completed!');