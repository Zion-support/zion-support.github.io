#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function fixDuplicateImports() {
  console.log('Fixing duplicate React imports...');
  
  const patterns = [
    'app/**/*.{ts,tsx,js,jsx}',
    'components/**/*.{ts,tsx,js,jsx}',
    'hooks/**/*.{ts,tsx,js,jsx}',
    'contexts/**/*.{ts,tsx,js,jsx}',
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Remove duplicate React imports
        const lines = content.split('\n');
        const newLines = [];
        let hasReactImport = false;
        let hasOtherImports = false;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          // Check if this is a React import
          if (line.includes("import React from 'react'") || line.includes('import React from "react"')) {
            if (!hasReactImport) {
              newLines.push(line);
              hasReactImport = true;
            }
            // Skip duplicate React imports
            modified = true;
          } else if (line.trim().startsWith('import ') && !line.includes('React')) {
            hasOtherImports = true;
            newLines.push(line);
          } else if (line.trim() === '' || line.trim().startsWith('//') || line.trim().startsWith('/*')) {
            newLines.push(line);
          } else if (line.trim().startsWith('import React')) {
            // Handle other React imports like import React, { useState } from 'react'
            if (!hasReactImport) {
              newLines.push(line);
              hasReactImport = true;
            } else {
              // Merge with existing React import
              const existingReactLine = newLines.find(l => l.includes("import React from 'react'") || l.includes('import React from "react"'));
              if (existingReactLine && line.includes('{')) {
                // Extract the destructured imports
                const destructured = line.match(/\{([^}]+)\}/);
                if (destructured) {
                  const newLine = existingReactLine.replace('}', `, ${destructured[1]}}`);
                  const index = newLines.indexOf(existingReactLine);
                  newLines[index] = newLine;
                }
              }
            }
            modified = true;
          } else {
            newLines.push(line);
          }
        }
        
        if (modified) {
          const newContent = newLines.join('\n');
          fs.writeFileSync(file, newContent, 'utf8');
          console.log(`Fixed: ${file}`);
          totalFixed++;
        }
      } catch (error) {
        console.error(`Error fixing ${file}:`, error.message);
      }
    }
  }
  
  console.log(`Fixed ${totalFixed} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  fixDuplicateImports();
}

export { fixDuplicateImports };