const fs = require('fs');
const path = require('path');

// Function to recursively find all files
function findFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      results = results.concat(findFiles(filePath, extensions));
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Function to clean merge conflicts
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n[\s\S]*?\n>>>>>>> [^\n]*\n?/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n?/g, '');
    
    // If content changed, write it back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting merge conflict cleanup...');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(__dirname, 'components');

let cleanedCount = 0;

// Clean src directory
if (fs.existsSync(srcDir)) {
  const srcFiles = findFiles(srcDir);
  srcFiles.forEach(file => {
    if (cleanMergeConflicts(file)) {
      cleanedCount++;
    }
  });
}

// Clean components directory
if (fs.existsSync(componentsDir)) {
  const componentFiles = findFiles(componentsDir);
  componentFiles.forEach(file => {
    if (cleanMergeConflicts(file)) {
      cleanedCount++;
    }
  });
}

console.log(`Cleanup complete! Cleaned ${cleanedCount} files.`);