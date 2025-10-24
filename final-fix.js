const fs = require('fs');
const path = require('path');

// Function to fix all remaining syntax errors
function fixAllSyntaxErrors(content) {
  // Fix double quotes at end of strings
  content = content.replace(/''',/g, "',");
  content = content.replace(/''',/g, "',");
  content = content.replace(/''',/g, "',");
  content = content.replace(/''',/g, "',");
  content = content.replace(/''',/g, "',");
  content = content.replace(/''',/g, "',");
  content = content.replace(/''',/g, "',");
  content = content.replace(/''',/g, "',");
  content = content.replace(/''',/g, "',");
  content = content.replace(/''',/g, "',");
  
  // Fix double quotes in string values
  content = content.replace(/''(.*?)'',/g, "'$1',");
  content = content.replace(/''(.*?)''/g, "'$1'");
  
  // Fix triple quotes
  content = content.replace(/'''(.*?)''',/g, "'$1',");
  content = content.replace(/'''(.*?)'''/g, "'$1'");
  
  // Fix escaped quotes
  content = content.replace(/\\'/g, "'");
  
  // Fix missing commas in object properties
  content = content.replace(/(\w+):\s*'([^']*)'\s*(\w+):/g, '$1: \'$2\',\n  $3:');
  
  // Fix missing commas in arrays
  content = content.replace(/\]\s*(\w+):/g, '],\n  $1:');
  
  // Fix missing commas in objects
  content = content.replace(/}\s*(\w+):/g, '},\n  $1:');
  
  // Fix JSX syntax errors - remove semicolons in JSX
  content = content.replace(/<(\w+)[^>]*>\s*([^<]+)\s*;\s*<\/\1>/g, '<$1>$2</$1>');
  
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
    const fixedContent = fixAllSyntaxErrors(content);
    
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
