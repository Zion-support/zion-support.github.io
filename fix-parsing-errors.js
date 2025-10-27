#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Find all TSX files
const files = await glob('app/**/*.tsx', { ignore: ['node_modules/**', '.next/**'] });

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Fix corrupted interface declarations
    const lines = content.split('\n');
    const newLines = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check for corrupted type/interface declarations
      if (trimmedLine.startsWith('export type ') && trimmedLine.includes('{') && !trimmedLine.includes('}')) {
        // This is a corrupted type declaration, skip it and the next few lines until we find the closing brace
        i++;
        while (i < lines.length && !lines[i].trim().includes('}')) {
          i++;
        }
        i++; // Skip the closing brace line
        continue;
      }
      
      // Check for orphaned interface properties
      if (trimmedLine.match(/^\s*\w+\??:\s*\w+/) && !trimmedLine.includes('interface') && !trimmedLine.includes('type')) {
        // This looks like orphaned interface properties, skip it
        i++;
        continue;
      }
      
      newLines.push(line);
      i++;
    }
    
    if (newLines.length !== lines.length) {
      content = newLines.join('\n');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Fixed parsing errors in: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Parsing error fixes completed!');