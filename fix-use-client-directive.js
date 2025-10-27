#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Find all TSX files
const files = await glob('app/**/*.tsx', { ignore: ['node_modules/**', '.next/**'] });

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Check if file has 'use client' directive but not at the top
    if (content.includes("'use client'") || content.includes('"use client"')) {
      const lines = content.split('\n');
      const useClientIndex = lines.findIndex(line => 
        line.trim() === "'use client'" || line.trim() === '"use client"'
      );
      
      if (useClientIndex > 0) {
        // Move 'use client' to the top
        const useClientLine = lines[useClientIndex];
        const newLines = [useClientLine, ''];
        
        // Add all other lines except the 'use client' line
        for (let i = 0; i < lines.length; i++) {
          if (i !== useClientIndex) {
            newLines.push(lines[i]);
          }
        }
        
        content = newLines.join('\n');
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Fixed 'use client' directive in: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log("'use client' directive fixes completed!");