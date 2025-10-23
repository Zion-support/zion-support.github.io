const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files
function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix React.Fragment in a file
function fixReactFragment(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Replace React.Fragment with <>
    if (content.includes('<React.Fragment>')) {
      content = content.replace(/<React\.Fragment>/g, '<>');
      modified = true;
    }
    
    // Replace </React.Fragment> with </>
    if (content.includes('</React.Fragment>')) {
      content = content.replace(/<\/React\.Fragment>/g, '</>');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting React.Fragment fix...');
const tsxFiles = findTsxFiles('./app');
let fixedCount = 0;

tsxFiles.forEach(file => {
  if (fixReactFragment(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);