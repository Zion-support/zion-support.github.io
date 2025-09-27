#!/usr/bin/env node

import fs from 'fs';

function fixDashboardDuplicates() {
  const content = fs.readFileSync('pages/dashboard.tsx', 'utf8');
  
  // Remove duplicate declarations by keeping only the first occurrence of each
  const lines = content.split('\n');
  const seen = new Set();
  const fixedLines = [];
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    // Check if this is a const declaration
    if (trimmed.startsWith('const ') && trimmed.includes(' = dynamic(')) {
      const varName = trimmed.split(' ')[1].split(' ')[0];
      
      if (seen.has(varName)) {
        // Skip duplicate declarations
        console.log(`Removing duplicate: ${varName}`);
        continue;
      } else {
        seen.add(varName);
      }
    }
    
    fixedLines.push(line);
  }
  
  const fixedContent = fixedLines.join('\n');
  fs.writeFileSync('pages/dashboard.tsx', fixedContent, 'utf8');
  console.log('Fixed duplicate declarations in dashboard.tsx');
}

fixDashboardDuplicates();