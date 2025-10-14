const fs = require('fs');
const path = require('path');

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {
        results = results.concat(getAllFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Remove merge conflict markers and keep the HEAD version
      content = content.replace(/<<<<<<< HEAD\n?/g, '');
      content = content.replace(/=======\n?/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
      
      // Clean up any remaining empty lines
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed merge conflicts in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Fixing merge conflicts...');

const files = getAllFiles('./app');
files.forEach(file => {
  fixMergeConflicts(file);
});

// Fix other important files
const otherFiles = [
  './App.tsx',
  './main.tsx',
  './vite.config.ts'
];

otherFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fixMergeConflicts(file);
  }
});

console.log('Done fixing merge conflicts!');