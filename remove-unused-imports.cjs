const fs = require('fs');
const path = require('path');

// Find all .tsx files in the app directory
const appDir = './app';
const files = [];

function findTsxFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findTsxFiles(fullPath);
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
}

findTsxFiles(appDir);

let fixedCount = 0;

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if it's an import line
      if (line.trim().startsWith('import ')) {
        // Extract the imported name
        const match = line.match(/import\s+(\w+)\s+from/);
        if (match) {
          const importedName = match[1];
          // Check if this import is used in the file
          const remainingContent = lines.slice(i + 1).join('\n');
          if (!remainingContent.includes(importedName)) {
            console.log(`Removing unused import: ${importedName} from ${file}`);
            continue; // Skip this line
          }
        }
      }
      
      newLines.push(line);
    }
    
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(file, newContent);
      fixedCount++;
      console.log(`Fixed: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);
