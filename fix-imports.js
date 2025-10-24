const fs = require('fs');
const path = require('path');

// Function to clean up duplicate imports and exports
function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Split into lines
    let lines = content.split('\n');
    let cleanedLines = [];
    let seenImports = new Set();
    let seenExports = new Set();
    let inImportBlock = false;
    let inExportBlock = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if we're starting an import block
      if (line.trim().startsWith('import ')) {
        inImportBlock = true;
        inExportBlock = false;
        
        // Extract the import name (simplified)
        const importMatch = line.match(/import\s+.*?from\s+['"]([^'"]+)['"]/);
        if (importMatch) {
          const importPath = importMatch[1];
          if (!seenImports.has(importPath)) {
            seenImports.add(importPath);
            cleanedLines.push(line);
          }
        } else {
          cleanedLines.push(line);
        }
      }
      // Check if we're starting an export block
      else if (line.trim().startsWith('export ')) {
        inImportBlock = false;
        inExportBlock = true;
        
        // Only add if we haven't seen this export before
        if (!seenExports.has('default')) {
          seenExports.add('default');
          cleanedLines.push(line);
        }
      }
      // If we're in an import block and this line is empty or another import, continue
      else if (inImportBlock && (line.trim() === '' || line.trim().startsWith('import '))) {
        // Skip duplicate imports
        continue;
      }
      // If we're in an export block and this line is another export, skip
      else if (inExportBlock && line.trim().startsWith('export ')) {
        continue;
      }
      // Otherwise, add the line
      else {
        inImportBlock = false;
        inExportBlock = false;
        cleanedLines.push(line);
      }
    }
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, cleanedLines.join('\n'));
    console.log(`Cleaned: ${filePath}`);
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

// Function to find all TypeScript/JavaScript files in app directory
function findFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Clean all files in the app directory
const appDir = './app';
const files = findFiles(appDir);

console.log(`Found ${files.length} files to clean...`);

files.forEach(cleanFile);

console.log('Done cleaning files!');