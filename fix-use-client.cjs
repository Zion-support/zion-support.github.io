const fs = require('fs');
const path = require('path');

// Find all .tsx files that import react-helmet-async but don't have 'use client'
const findFiles = (dir) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
};

const files = findFiles('/workspace/app');
const filesToFix = [];

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('react-helmet-async') && !content.includes("'use client'")) {
      filesToFix.push(file);
    }
  } catch (error) {
    console.log(`Error reading ${file}:`, error.message);
  }
}

console.log(`Found ${filesToFix.length} files to fix:`);
filesToFix.forEach(file => console.log(file));

// Fix each file
for (const file of filesToFix) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    // Find the first import line
    let insertIndex = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('import ')) {
        insertIndex = i;
        break;
      }
    }
    
    // Insert 'use client' before the first import
    lines.splice(insertIndex, 0, "'use client';", "");
    
    const newContent = lines.join('\n');
    fs.writeFileSync(file, newContent);
    console.log(`Fixed: ${file}`);
  } catch (error) {
    console.log(`Error fixing ${file}:`, error.message);
  }
}

console.log('Done!');