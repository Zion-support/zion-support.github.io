import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixDuplicateImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Split content into lines
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line
      if (line.trim().startsWith('import ')) {
        const importKey = line.trim();
        
        // If we've seen this exact import before, skip it
        if (seenImports.has(importKey)) {
          modified = true;
          continue;
        }
        
        // Add to seen imports and keep the line
        seenImports.add(importKey);
        newLines.push(line);
      } else {
        newLines.push(line);
      }
    }

    if (modified) {
      const newContent = newLines.join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed duplicate imports: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let totalFixed = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      totalFixed += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixDuplicateImports(filePath)) {
        totalFixed++;
      }
    }
  }

  return totalFixed;
}

console.log('Starting duplicate import fixes...');
const appDir = path.join(__dirname, 'app');
const totalFixed = processDirectory(appDir);
console.log(`Fixed duplicate imports in ${totalFixed} files`);
console.log('Duplicate import fixes completed!');