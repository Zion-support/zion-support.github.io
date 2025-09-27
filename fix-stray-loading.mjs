#!/usr/bin/env node

import fs from 'fs';

function fixStrayLoading() {
  const content = fs.readFileSync('pages/dashboard.tsx', 'utf8');
  
  // Remove stray loading lines that are not part of dynamic imports
  const lines = content.split('\n');
  const fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Check if this is a stray loading line (not preceded by a dynamic import)
    if (trimmed.startsWith('loading: () =>') && !trimmed.includes('const ')) {
      // Check if the previous line is a closing brace of a dynamic import
      const prevLine = i > 0 ? lines[i-1].trim() : '';
      if (prevLine === '});') {
        // This is a stray loading line, skip it
        console.log(`Removing stray loading line: ${trimmed}`);
        continue;
      }
    }
    
    fixedLines.push(line);
  }
  
  const fixedContent = fixedLines.join('\n');
  fs.writeFileSync('pages/dashboard.tsx', fixedContent, 'utf8');
  console.log('Fixed stray loading lines in dashboard.tsx');
}

fixStrayLoading();