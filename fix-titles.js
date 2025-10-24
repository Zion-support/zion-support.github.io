const fs = require('fs');
const path = require('path');

// Function to fix page titles
function fixPageTitles(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix extra spaces in titles
    content = content.replace(/<title>([^|]+)\s+\|\s+([^<]+)<\/title>/g, '<title>$1 | $2</title>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed title: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Find and fix all page files
const appDir = path.join(__dirname, 'app');
const pageFiles = findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files to fix titles`);

pageFiles.forEach(fixPageTitles);

console.log('All titles fixed!');