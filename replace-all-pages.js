const fs = require('fs');
const path = require('path');

// Read the clean template
const cleanTemplate = fs.readFileSync('/workspace/clean-page-template.tsx', 'utf8');

// Function to create a page with custom title and description
function createPage(title, description) {
  return cleanTemplate
    .replace(/Service Page/g, title)
    .replace(/Professional services and solutions for modern businesses\./g, description);
}

// Function to process a single file
function processFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      console.log(`Replacing file: ${filePath}`);
      
      // Extract title from the file path
      const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 2]; // Get the directory name
      const title = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      const description = `Professional ${fileName.replace(/-/g, ' ')} services and solutions for modern businesses.`;
      
      const newContent = createPage(title, description);
      
      fs.writeFileSync(filePath, newContent);
      console.log(`✓ Replaced: ${filePath}`);
      return true;
    } else {
      console.log(`File not found: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process all page.tsx files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          processedCount += processDirectory(fullPath);
        }
      } else if (item === 'page.tsx') {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Main execution
console.log('Starting replacement of all page files...');
const processedCount = processDirectory('/workspace/app');
console.log(`\n✓ Replaced ${processedCount} page files`);

console.log('\nAll page replacement completed!');