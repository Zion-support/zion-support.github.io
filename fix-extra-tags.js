import fs from 'fs';
import path from 'path';

// Function to fix extra closing tags and other issues
function fixExtraTags(content) {
  let fixed = content;
  
  // Remove extra closing p tags at the end of files
  fixed = fixed.replace(/\n\s*<\/p>\s*\n\s*<\/p>\s*$/gm, '');
  fixed = fixed.replace(/\n\s*<\/p>\s*$/gm, '');
  
  // Remove extra closing div tags at the end of files
  fixed = fixed.replace(/\n\s*<\/div>\s*\n\s*<\/div>\s*$/gm, '');
  fixed = fixed.replace(/\n\s*<\/div>\s*$/gm, '');
  
  // Fix unescaped apostrophes in JSX content
  fixed = fixed.replace(/(?<!&)(?<!&#)'(?![a-zA-Z0-9])/g, '&apos;');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixExtraTags(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed extra tags: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process all .tsx files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx')) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return processedCount;
}

// Main execution
console.log('Starting extra tags fixes...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files with extra tags fixes.`);

console.log('Extra tags fixes completed!');