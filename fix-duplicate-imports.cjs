const fs = require('fs');
const path = require('path');

// Function to fix duplicate imports in a file
function fixDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Split content into lines
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();
    const seenIcons = new Set();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for import statements
      if (line.startsWith('import ')) {
        // Check for lucide-react imports
        if (line.includes('from \'lucide-react\'')) {
          const match = line.match(/import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"]/);
          if (match) {
            const icons = match[1].split(',').map(icon => icon.trim());
            const uniqueIcons = [];
            
            for (const icon of icons) {
              if (!seenIcons.has(icon)) {
                seenIcons.add(icon);
                uniqueIcons.push(icon);
              }
            }
            
            if (uniqueIcons.length > 0) {
              newLines.push(`import { ${uniqueIcons.join(', ')} } from 'lucide-react';`);
              modified = true;
            }
            continue;
          }
        }
        
        // Check for other imports
        const importKey = line.trim();
        if (!seenImports.has(importKey)) {
          seenImports.add(importKey);
          newLines.push(line);
        } else {
          modified = true;
        }
      } else {
        newLines.push(line);
      }
    }
    
    if (modified) {
      content = newLines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed duplicate imports in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixDuplicateImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed duplicate imports in ${fixedCount} files`);