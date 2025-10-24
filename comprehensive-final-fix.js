const fs = require('fs');
const path = require('path');

// Function to fix all remaining syntax errors
function fixAllRemainingErrors(content) {
  // Fix malformed description strings
  content = content.replace(/description: '([^']*)', ([^']*), ([^']*)',/g, "description: '$1, $2, $3',");
  
  // Fix semicolons in object properties
  content = content.replace(/  };/g, '  },');
  
  // Fix duplicate Page declarations
  content = content.replace(/const PagePage = \(\) => {/g, 'const Page = () => {');
  
  // Fix missing commas in arrays
  content = content.replace(/keywords: \[([^\]]*)\],/g, (match, keywords) => {
    const items = keywords.split(',').map(item => item.trim());
    return `keywords: [${items.map(item => `'${item}'`).join(', ')}],`;
  });
  
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
    const fixedContent = fixAllRemainingErrors(content);
    
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
