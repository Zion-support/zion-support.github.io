const fs = require('fs');
const path = require('path');

function fixDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const seenImports = new Set();
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check if this is an import statement
      if (line.startsWith('import ')) {
        // Extract the import key (the part after 'import ' and before ' from')
        const importMatch = line.match(/^import\s+([^]+?)\s+from/);
        if (importMatch) {
          const importKey = importMatch[1];
          
          // If we've seen this import before, skip it
          if (seenImports.has(importKey)) {
            continue;
          }
          
          // Mark this import as seen
          seenImports.add(importKey);
        }
      }
      
      newLines.push(lines[i]);
    }
    
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed duplicate imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find all .tsx files in the app directory
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixDuplicateImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed duplicate imports in ${fixedCount} files`);