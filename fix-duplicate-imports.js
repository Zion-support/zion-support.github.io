const fs = require('fs');
const path = require('path');

function fixDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');
    let fixedLines = [];
    let seenImports = new Set();
    let inImportBlock = false;
    let importBlockEnded = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line
      if (line.trim().startsWith('import ')) {
        if (!inImportBlock) {
          inImportBlock = true;
        }
        
        // Extract the import statement
        const importMatch = line.match(/import\s+.*?from\s+['"]([^'"]+)['"]/);
        if (importMatch) {
          const importPath = importMatch[1];
          const importKey = line.trim();
          
          if (!seenImports.has(importKey)) {
            seenImports.add(importKey);
            fixedLines.push(line);
          }
          // Skip duplicate imports
        } else {
          fixedLines.push(line);
        }
      } else if (inImportBlock && line.trim() === '') {
        // Empty line in import block - keep it
        fixedLines.push(line);
      } else if (inImportBlock && !line.trim().startsWith('import ') && line.trim() !== '') {
        // Non-import line - end of import block
        inImportBlock = false;
        importBlockEnded = true;
        fixedLines.push(line);
      } else {
        // Regular line
        fixedLines.push(line);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent);
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
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = './app';
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (fixDuplicateImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed duplicate imports in ${fixedCount} files.`);