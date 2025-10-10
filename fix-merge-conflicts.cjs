const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find all TypeScript files
const files = findTsxFiles('/workspace/app');

// Fix merge conflicts in each file
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
    fixMergeConflicts(file);
  }
});

console.log('Merge conflict fixing completed!');