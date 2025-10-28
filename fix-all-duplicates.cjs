const fs = require('fs');
const path = require('path');

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

function removeAllDuplicates(content) {
  const lines = content.split('\n');
  const seenImports = new Set();
  const cleanedLines = [];
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Check if this is an import statement
    if (trimmedLine.startsWith('import ')) {
      // Extract the import key (the part after 'import' and before 'from')
      const importMatch = trimmedLine.match(/import\s+([^from]+)\s+from/);
      if (importMatch) {
        const importKey = importMatch[1].trim();
        
        // Check if we've seen this import before
        if (seenImports.has(importKey)) {
          console.log(`Removing duplicate import: ${importKey}`);
          continue; // Skip this duplicate import
        } else {
          seenImports.add(importKey);
        }
      }
    }
    
    cleanedLines.push(line);
  }
  
  return cleanedLines.join('\n');
}

function main() {
  const appDir = './app';
  const files = findTsxFiles(appDir);
  let fixedCount = 0;
  
  console.log(`Found ${files.length} .tsx files to process`);
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const cleanedContent = removeAllDuplicates(content);
      
      if (cleanedContent !== content) {
        fs.writeFileSync(file, cleanedContent);
        fixedCount++;
        console.log(`Fixed duplicates in: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\nFixed duplicate imports in ${fixedCount} files`);
}

main();