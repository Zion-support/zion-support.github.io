const fs = require('fs');

// Read the current page.tsx file
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');

// Remove duplicate imports and fix import issues
const lines = content.split('\n');
const seenImports = new Set();
const cleanedLines = [];
let inImports = true;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check if we're still in the imports section
  if (inImports && line.trim() && !line.startsWith('import ') && !line.startsWith('//') && !line.startsWith('/*')) {
    inImports = false;
  }
  
  // Handle import lines
  if (inImports && line.startsWith('import ')) {
    // Extract the component name from the import
    const match = line.match(/import\s+(\w+)\s+from/);
    if (match) {
      const componentName = match[1];
      if (seenImports.has(componentName)) {
        // Skip duplicate imports
        continue;
      }
      seenImports.add(componentName);
    }
    
    // Fix React imports
    if (line.includes("import React, { Suspense, lazy } from 'react'")) {
      cleanedLines.push("import React from 'react';");
      cleanedLines.push("import { Suspense, lazy } from 'react';");
      continue;
    }
    
    // Fix Next.js imports
    if (line.includes("import Link from 'next/link'")) {
      cleanedLines.push("import Link from 'next/link';");
      continue;
    }
  }
  
  cleanedLines.push(line);
}

// Write the cleaned content back
fs.writeFileSync('/workspace/app/page.tsx', cleanedLines.join('\n'));

console.log('Fixed imports and removed duplicates');