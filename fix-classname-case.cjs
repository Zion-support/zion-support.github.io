const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix className case
function fixClassNameCase(content) {
  // Fix classname to className
  content = content.replace(/classname\s*=/g, 'className=');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixClassNameCase(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
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
console.log('Starting className case fixes...');

// Find all TypeScript/JSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

let fixedCount = 0;
let totalFiles = files.length;

console.log(`Found ${totalFiles} files to process...`);

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (processFile(fullPath)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} out of ${totalFiles} files.`);
console.log('className case fixes completed!');