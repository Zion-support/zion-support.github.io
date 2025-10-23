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

// Function to clean extra closing tags at the end of files
function cleanExtraTags(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Find the last proper closing of the component
    const lines = content.split('\n');
    let lastValidLine = -1;
    
    // Look for the export default line
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].includes('export default')) {
        lastValidLine = i;
        break;
      }
    }
    
    if (lastValidLine !== -1) {
      // Remove everything after the export default line
      const cleanLines = lines.slice(0, lastValidLine + 1);
      const newContent = cleanLines.join('\n');
      
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Cleaned extra tags in: ${filePath}`);
        modified = true;
      }
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting extra tags cleanup...');
const tsxFiles = findTsxFiles('./app');
let cleanedCount = 0;

tsxFiles.forEach(file => {
  if (cleanExtraTags(file)) {
    cleanedCount++;
  }
});

console.log(`Cleaned ${cleanedCount} files`);