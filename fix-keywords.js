const fs = require('fs');
const path = require('path');

// Function to fix keywords formatting
function fixKeywordsFormatting(content) {
  // Fix keywords that are not properly formatted as arrays
  content = content.replace(/keywords: '([^']*)', ([^']*), ([^']*)',/g, "keywords: ['$1', '$2', '$3'],");
  content = content.replace(/keywords: '([^']*)', ([^']*)',/g, "keywords: ['$1', '$2'],");
  content = content.replace(/keywords: '([^']*)',/g, "keywords: ['$1'],");
  
  // Fix openGraph that should be an object, not a string
  content = content.replace(/openGraph: '{/g, 'openGraph: {');
  
  return content;
}

// Function to find all TypeScript/TSX files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Get all TSX files
const tsxFiles = findTsxFiles('./app');
tsxFiles.push(...findTsxFiles('./src'));
tsxFiles.push(...findTsxFiles('./components'));

console.log(`Found ${tsxFiles.length} TypeScript/TSX files to process`);

// Process each file
let fixedCount = 0;
tsxFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixKeywordsFormatting(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);
