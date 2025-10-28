#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix unused imports in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check if this is an import line
      if (trimmedLine.startsWith('import ')) {
        // Extract the import name
        const importMatch = trimmedLine.match(/import\s+([^}]+)\s+from/);
        if (importMatch) {
          const importName = importMatch[1].trim();
          
          // Check if this import is used in the file
          const isUsed = content.includes(importName) && 
                        !trimmedLine.includes(importName); // Don't count the import line itself
          
          if (!isUsed) {
            console.log(`Removing unused import: ${trimmedLine}`);
            continue; // Skip this line
          }
        }
      }
      
      newLines.push(line);
    }
    
    const newContent = newLines.join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process files
async function main() {
  // Process all files in the app directory
  const pattern = 'app/**/*.{ts,tsx,js,jsx}';
  const files = await glob(pattern, { cwd: process.cwd() });

  console.log(`Processing ${files.length} files...`);

  let fixedCount = 0;
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);