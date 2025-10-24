const fs = require('fs');
const path = require('path');

// Function to fix JSX fragments
function fixJSXFragments(content) {
  let fixed = content;
  
  // Replace JSX fragments with div elements
  fixed = fixed.replace(/<>\s*/g, '<div>\n      ');
  fixed = fixed.replace(/\s*<\/>/g, '\n    </div>');
  
  // Fix any remaining JSX structure issues
  fixed = fixed.replace(/<div>\s*<div>/g, '<div>');
  fixed = fixed.replace(/<\/div>\s*<\/div>/g, '</div>');
  
  // Fix indentation
  fixed = fixed.replace(/^      <div>/gm, '    <div>');
  fixed = fixed.replace(/^    <\/div>$/gm, '  </div>');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXFragments(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed JSX fragments in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          fixedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting JSX fragments fix...');
const fixedCount = processDirectory('./app');
console.log(`Fixed JSX fragments in ${fixedCount} files`);