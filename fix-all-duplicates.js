#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Find all TSX files
const files = await glob('app/**/*.tsx', { ignore: ['node_modules/**', '.next/**'] });

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Remove duplicate type/interface declarations
    const lines = content.split('\n');
    const seenTypes = new Set();
    const newLines = [];
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      // Check for type declarations
      if (trimmedLine.startsWith('export type ') || trimmedLine.startsWith('type ')) {
        const match = trimmedLine.match(/^(export\s+)?type\s+(\w+)/);
        if (match) {
          const typeName = match[2];
          if (seenTypes.has(typeName)) {
            // Skip duplicate type
            continue;
          }
          seenTypes.add(typeName);
        }
      }
      
      // Check for interface declarations
      if (trimmedLine.startsWith('interface ')) {
        const match = trimmedLine.match(/^interface\s+(\w+)/);
        if (match) {
          const typeName = match[1];
          if (seenTypes.has(typeName)) {
            // Skip duplicate interface
            continue;
          }
          seenTypes.add(typeName);
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
      console.log(`Fixed duplicates in: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('All duplicate fixes completed!');