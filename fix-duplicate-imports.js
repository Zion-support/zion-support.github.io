import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix duplicate imports in a file
function fixDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('import ')) {
        // Check if this import has been seen before
        const importKey = line.trim();
        if (seenImports.has(importKey)) {
          // Skip duplicate import
          modified = true;
          continue;
        }
        seenImports.add(importKey);
      }
      
      newLines.push(line);
    }
    
    if (modified) {
      content = newLines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');
            return true;
    }
    
    return false;
  } catch (error) {
        return false;
  }
}

// Function to fix specific files with known issues
function fixSpecificFiles() {
    
  let fixedCount = 0;
  
  for (const file of filesToFix) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      if (fixDuplicateImports(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Run the fix
const fixedCount = fixSpecificFiles();
