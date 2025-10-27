#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Find all TSX files
const files = await glob('app/**/*.tsx', { ignore: ['node_modules/**', '.next/**'] });

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Remove duplicate React imports
    const lines = content.split('\n');
    const reactImportLines = lines.filter(line => line.trim().startsWith('import React'));
    
    if (reactImportLines.length > 1) {
      // Keep only the first React import
      const firstReactImportIndex = lines.findIndex(line => line.trim().startsWith('import React'));
      const filteredLines = lines.filter((line, index) => {
        if (line.trim().startsWith('import React')) {
          return index === firstReactImportIndex;
        }
        return true;
      });
      
      content = filteredLines.join('\n');
      modified = true;
    }
    
    // Remove duplicate type declarations
    const typeDeclarations = {};
    const newLines = [];
    
    for (const line of content.split('\n')) {
      const trimmedLine = line.trim();
      
      // Check for interface/type declarations
      if (trimmedLine.startsWith('interface ') || trimmedLine.startsWith('type ')) {
        const match = trimmedLine.match(/^(interface|type)\s+(\w+)/);
        if (match) {
          const typeName = match[2];
          if (typeDeclarations[typeName]) {
            // Skip duplicate declaration
            continue;
          }
          typeDeclarations[typeName] = true;
        }
      }
      
      newLines.push(line);
    }
    
    if (newLines.length !== content.split('\n').length) {
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

console.log('Duplicate import fixes completed!');