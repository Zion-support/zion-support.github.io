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

function cleanImports(content) {
  const lines = content.split('\n');
  const seenImports = new Map(); // Use Map to store import info
  const cleanedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    // Check if this is an import statement
    if (trimmedLine.startsWith('import ')) {
      // Extract the import key and path
      const importMatch = trimmedLine.match(/import\s+([^from]+)\s+from\s+['"]([^'"]+)['"]/);
      if (importMatch) {
        const importKey = importMatch[1].trim();
        const importPath = importMatch[2].trim();
        const fullKey = `${importKey}::${importPath}`;
        
        // Check if we've seen this exact import before
        if (seenImports.has(fullKey)) {
          console.log(`Removing duplicate import: ${importKey} from ${importPath}`);
          continue; // Skip this duplicate import
        } else {
          seenImports.set(fullKey, true);
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
      const cleanedContent = cleanImports(content);
      
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