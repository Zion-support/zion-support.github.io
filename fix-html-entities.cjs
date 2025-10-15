const fs = require('fs');
const path = require('path');

function fixHtmlEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has HTML entities
    if (!content.includes('&quot;') && !content.includes('&apos;') && !content.includes('&amp;') && !content.includes('&lt;') && !content.includes('&gt;')) {
      return;
    }
    
    console.log(`Fixing HTML entities in: ${filePath}`);
    
    // Replace HTML entities
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&apos;/g, "'");
    content = content.replace(/&amp;/g, '&');
    content = content.replace(/&lt;/g, '<');
    content = content.replace(/&gt;/g, '>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed HTML entities in ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Find all .tsx files in app directory
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Process all files
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

tsxFiles.forEach(file => {
  fixHtmlEntities(file);
});

console.log('HTML entity fixing complete!');
