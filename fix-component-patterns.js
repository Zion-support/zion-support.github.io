#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Find all TSX files
const files = await glob('app/**/*.tsx', { ignore: ['node_modules/**', '.next/**'] });

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Fix duplicate function declarations pattern
    const lines = content.split('\n');
    const seenFunctions = new Set();
    const newLines = [];
    let skipNext = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      if (skipNext) {
        skipNext = false;
        continue;
      }
      
      // Check for const function declarations
      if (trimmedLine.startsWith('const ') && trimmedLine.includes(' = ') && trimmedLine.includes('(')) {
        const match = trimmedLine.match(/const\s+(\w+)\s*=/);
        if (match) {
          const funcName = match[1];
          
          // Check if there's a duplicate export default function with the same name
          let hasDuplicate = false;
          for (let j = i + 1; j < lines.length; j++) {
            const nextLine = lines[j].trim();
            if (nextLine.includes(`export default function ${funcName}`) || 
                nextLine.includes(`function ${funcName}`)) {
              hasDuplicate = true;
              break;
            }
          }
          
          if (hasDuplicate) {
            // Skip this const declaration
            continue;
          }
        }
      }
      
      newLines.push(line);
    }
    
    if (newLines.length !== lines.length) {
      content = newLines.join('\n');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Fixed component patterns in: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Component pattern fixes completed!');