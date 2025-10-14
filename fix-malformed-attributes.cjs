const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix malformed attributes
function fixMalformedAttributes(content) {
  // Fix "class name=" to "className="
  content = content.replace(/class\s+name\s*=/g, 'className=');
  
  // Fix "Name=" to "name=" in JSX attributes
  content = content.replace(/Name\s*=/g, 'name=');
  
  // Fix other malformed patterns
  content = content.replace(/gridMd:\s*grid-cols/g, 'md:grid-cols');
  content = content.replace(/gridLg:\s*grid-cols/g, 'lg:grid-cols');
  content = content.replace(/gridSm:\s*grid-cols/g, 'sm:grid-cols');
  content = content.replace(/gridXl:\s*grid-cols/g, 'xl:grid-cols');
  
  // Fix any remaining "class " patterns
  content = content.replace(/\bclass\s+/g, 'className ');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixMalformedAttributes(content);
    
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
console.log('Starting malformed attributes fixes...');

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
console.log('Malformed attributes fixes completed!');