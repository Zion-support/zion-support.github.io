#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Find all TSX files
const files = await glob('app/**/*.tsx', { ignore: ['node_modules/**', '.next/**'] });

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Fix duplicate interface/type declarations
    const lines = content.split('\n');
    const seenInterfaces = new Set();
    const seenTypes = new Set();
    const newLines = [];
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      // Check for interface declarations
      if (trimmedLine.startsWith('interface ')) {
        const match = trimmedLine.match(/^interface\s+(\w+)/);
        if (match) {
          const interfaceName = match[1];
          if (seenInterfaces.has(interfaceName)) {
            // Skip duplicate interface
            continue;
          }
          seenInterfaces.add(interfaceName);
        }
      }
      
      // Check for type declarations
      if (trimmedLine.startsWith('type ')) {
        const match = trimmedLine.match(/^type\s+(\w+)/);
        if (match) {
          const typeName = match[1];
          if (seenTypes.has(typeName)) {
            // Skip duplicate type
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
    
    // Fix duplicate function/component declarations
    const seenFunctions = new Set();
    const finalLines = [];
    
    for (const line of content.split('\n')) {
      const trimmedLine = line.trim();
      
      // Check for function/component declarations
      if (trimmedLine.includes('const ') && trimmedLine.includes(' = ') && trimmedLine.includes('(')) {
        const match = trimmedLine.match(/const\s+(\w+)\s*=/);
        if (match) {
          const funcName = match[1];
          if (seenFunctions.has(funcName)) {
            // Skip duplicate function
            continue;
          }
          seenFunctions.add(funcName);
        }
      }
      
      finalLines.push(line);
    }
    
    if (finalLines.length !== content.split('\n').length) {
      content = finalLines.join('\n');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Fixed remaining issues in: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Remaining issues fixes completed!');