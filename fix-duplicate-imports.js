import fs from 'fs';
import path from 'path';

function fixDuplicateImports(content) {
  // Remove duplicate CheckCircle imports
  const lines = content.split('\n');
  const seenImports = new Set();
  const cleanedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('import {') && line.includes('} from')) {
      // Check if this import line has already been seen
      const importKey = line.trim();
      if (seenImports.has(importKey)) {
        continue; // Skip duplicate import
      }
      seenImports.add(importKey);
    }
    
    cleanedLines.push(line);
  }
  
  return cleanedLines.join('\n');
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixDuplicateImports(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed duplicates: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

// Process the app directory
processDirectory('./app');
console.log('Duplicate imports fixed');