const fs = require('fs');
const path = require('path');

function resolveConflicts(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file has merge conflicts
  if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
    return; // No conflicts
  }
  
  console.log(`Resolving conflicts in ${filePath}`);
  
  // For page.tsx files, we want to keep our cleaned version
  // Remove all conflict markers and keep the HEAD version (our cleaned version)
  content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
  
  // Clean up any remaining conflict markers
  content = content.replace(/<<<<<<< HEAD\n/g, '');
  content = content.replace(/=======\n/g, '');
  content = content.replace(/>>>>>>> [^\n]+\n/g, '');
  
  // Clean up empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  fs.writeFileSync(filePath, content);
}

// Find all page.tsx files with conflicts
const findConflictedFiles = (dir) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findConflictedFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
};

const pageFiles = findConflictedFiles('./app');
let resolvedCount = 0;

pageFiles.forEach(file => {
  try {
    resolveConflicts(file);
    resolvedCount++;
  } catch (error) {
    console.error(`Error resolving ${file}:`, error.message);
  }
});

console.log(`Resolved conflicts in ${resolvedCount} files`);
