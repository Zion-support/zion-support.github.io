#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Find all page.tsx files
const files = await glob('app/**/page.tsx', { ignore: ['node_modules/**', '.next/**'] });

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Fix stray function names without assignment
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check for stray function names (lines that are just function names without assignment)
      if (trimmedLine.match(/^Page[a-zA-Z0-9]+$/) && i < lines.length - 1) {
        const nextLine = lines[i + 1].trim();
        if (nextLine === '' || nextLine.startsWith('export')) {
          // Skip this stray line
          continue;
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
      console.log(`Fixed stray lines in: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Stray lines fixes completed!');