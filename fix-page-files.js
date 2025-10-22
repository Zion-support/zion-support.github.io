#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all page.tsx files
const pageFiles = await glob('app/**/page.tsx', { cwd: import.meta.url.replace('file://', '').replace('/fix-page-files.js', '') });

console.log(`Found ${pageFiles.length} page files to process...`);

let fixedCount = 0;

for (const filePath of pageFiles) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Fix pattern: import React from "react"; followed by 'use client';
    if (content.includes("import React from \"react\";\n'use client';")) {
      content = content.replace("import React from \"react\";\n'use client';", "'use client';\nimport React from \"react\";");
      modified = true;
    }
    
    // Fix pattern: standalone 'use client'; on line 2
    const lines = content.split('\n');
    if (lines.length >= 2 && lines[1].trim() === "'use client';" && lines[0].startsWith('import')) {
      // Move 'use client' to the top
      const newLines = [lines[1], ...lines.slice(0, 1), ...lines.slice(2)];
      content = newLines.join('\n');
      modified = true;
    }
    
    // Fix duplicate React imports
    const importLines = content.split('\n').filter(line => line.startsWith('import'));
    const reactImports = importLines.filter(line => line.includes('import React'));
    
    if (reactImports.length > 1) {
      // Keep only the first React import
      const firstReactImport = reactImports[0];
      const otherReactImports = reactImports.slice(1);
      
      otherReactImports.forEach(duplicate => {
        content = content.replace(duplicate + '\n', '');
      });
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`\nFixed ${fixedCount} files out of ${pageFiles.length} total files.`);