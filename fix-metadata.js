const fs = require('fs');
const path = require('path');

// Function to fix metadata syntax errors
function fixMetadataErrors(content) {
  // Fix double quotes in metadata declarations
  content = content.replace(/export const metadata: ''Metadata = \{/g, 'export const metadata: Metadata = {');
  
  // Fix triple quotes in string values
  content = content.replace(/'''(.*?)''',/g, "'$1',");
  content = content.replace(/'''(.*?)'''/g, "'$1'");
  
  // Fix double quotes in string values
  content = content.replace(/''(.*?)'',/g, "'$1',");
  content = content.replace(/''(.*?)''/g, "'$1'");
  
  // Fix escaped quotes
  content = content.replace(/\\'/g, "'");
  
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
    const fixedContent = fixMetadataErrors(content);
    
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
