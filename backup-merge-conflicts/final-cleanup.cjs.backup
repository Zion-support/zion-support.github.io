const fs = require('fs');
const path = require('path');

// Function to recursively find all files with merge conflicts
function findConflictedFiles(dir, conflictedFiles = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findConflictedFiles(filePath, conflictedFiles);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
        conflictedFiles.push(filePath);
      }
    }
  }
  
  return conflictedFiles;
}

// Function to clean up merge conflicts
function cleanConflicts(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove merge conflict markers and keep HEAD version
  content = content.replace(/<<<<<<< HEAD\n?/g, '');
  content = content.replace(/=======.*?\n?/g, '');
  content = content.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
  content = content.replace(/>>>>>>> origin\/[^\n]+\n?/g, '');
  content = content.replace(/>>>>>>> cursor\/[^\n]+\n?/g, '');
  
  // Clean up any remaining artifacts
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  // Remove any remaining conflict markers
  content = content.replace(/<<<<<<< HEAD|=======|>>>>>>> [^\n]+/g, '');
  
  // Clean up specific artifacts
  content = content.replace(/ursor\/[^\n]+\n?/g, '');
  content = content.replace(/origin\/[^\n]+\n?/g, '');
  
  fs.writeFileSync(filePath, content);
  console.log(`Cleaned ${filePath}`);
}

// Find all conflicted files
const conflictedFiles = findConflictedFiles('.');
console.log(`Found ${conflictedFiles.length} files with conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

// Clean up all conflicts
conflictedFiles.forEach(cleanConflicts);

console.log('All merge conflicts cleaned!');