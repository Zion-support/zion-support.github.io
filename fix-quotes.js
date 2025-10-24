const fs = require('fs');
const path = require('path');

// Function to fix quote issues
function fixQuoteIssues(content) {
  // Fix malformed strings with extra quotes
  content = content.replace(/''([^']*)',/g, "'$1',");
  content = content.replace(/''([^']*)'/g, "'$1'");
  
  // Fix malformed openGraph objects
  content = content.replace(/openGraph: ''{/g, 'openGraph: {');
  
  // Fix trailing commas in objects
  content = content.replace(/,;/g, ';');
  
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
    const fixedContent = fixQuoteIssues(content);
    
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
