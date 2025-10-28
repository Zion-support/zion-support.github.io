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
    } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixMetadataImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has metadata export but no Metadata import
    if (content.includes('export const metadata: Metadata') && !content.includes("import { Metadata }")) {
      // Find the first import statement
      const lines = content.split('\n');
      let insertIndex = 0;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          insertIndex = i + 1;
        } else if (lines[i].trim() === '' && insertIndex > 0) {
          break;
        }
      }
      
      // Insert Metadata import
      lines.splice(insertIndex, 0, "import { Metadata } from 'next';");
      content = lines.join('\n');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  
  return false;
}

// Find all .tsx files
const tsxFiles = findTsxFiles('./app');
let fixedCount = 0;

console.log(`Found ${tsxFiles.length} .tsx files`);

for (const file of tsxFiles) {
  if (fixMetadataImport(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);