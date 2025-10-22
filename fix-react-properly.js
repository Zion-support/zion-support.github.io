#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TSX files
const pageFiles = await glob('app/**/*.tsx', { cwd: process.cwd() });

console.log(`Found ${pageFiles.length} TSX files to process...`);

let fixedCount = 0;

for (const filePath of pageFiles) {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Fix the structure: ensure 'use client' is first, then React import
    const lines = content.split('\n');
    const newLines = [];
    let useClientFound = false;
    let reactImportFound = false;
    let hasJSX = false;
    
    // Check if file has JSX
    if (content.includes('<') && content.includes('>')) {
      hasJSX = true;
    }
    
    // Process each line
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Handle 'use client' directive
      if (line.trim() === "'use client';" || line.trim() === "'use client'") {
        if (!useClientFound) {
          newLines.push("'use client';");
          useClientFound = true;
        }
        continue;
      }
      
      // Handle React import
      if (line.trim().startsWith('import React')) {
        if (!reactImportFound) {
          newLines.push("import React from 'react';");
          reactImportFound = true;
        }
        continue;
      }
      
      // Skip duplicate React imports
      if (line.trim().startsWith('import React') && reactImportFound) {
        continue;
      }
      
      // Add other lines
      newLines.push(line);
    }
    
    // Add missing imports if needed
    if (hasJSX && !reactImportFound) {
      if (useClientFound) {
        newLines.splice(1, 0, "import React from 'react';");
      } else {
        newLines.unshift("'use client';", "import React from 'react';");
      }
      modified = true;
    }
    
    // Fix React.Fragment usage
    if (content.includes('React.Fragment')) {
      content = content.replace(/React\.Fragment/g, 'React.Fragment');
      modified = true;
    }
    
    // Fix React.FC usage
    if (content.includes(': React.FC')) {
      content = content.replace(/: React\.FC/g, '');
      modified = true;
    }
    
    if (modified) {
      const newContent = newLines.join('\n');
      fs.writeFileSync(fullPath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`\nFixed ${fixedCount} files out of ${pageFiles.length} total files.`);