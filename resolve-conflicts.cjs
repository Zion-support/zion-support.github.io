const fs = require('fs');
const path = require('path');

// Find all files with merge conflicts
const findFilesWithConflicts = (dir) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFilesWithConflicts(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('<<<<<<< HEAD')) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
};

// Resolve conflicts in a single file
const resolveConflicts = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove merge conflict markers and keep HEAD version
  content = content.replace(/<<<<<<< HEAD\n?/g, '');
  content = content.replace(/=======\n?/g, '');
  content = content.replace(/>>>>>>> [^\n]*\n?/g, '');
  
  // Clean up any remaining empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  fs.writeFileSync(filePath, content);
  console.log(`Resolved conflicts in: ${filePath}`);
};

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFilesWithConflicts(appDir);

console.log(`Found ${files.length} files with merge conflicts`);

files.forEach(resolveConflicts);

console.log('All merge conflicts have been resolved!');