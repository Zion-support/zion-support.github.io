#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixJsxSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix stray > characters in JSX
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is a stray > character on its own line
      if (line.trim() === '>') {
        // Check if the previous line ends with a JSX tag opening
        if (i > 0 && lines[i-1].trim().endsWith('>')) {
          // Skip this line (it's a stray >)
          modified = true;
          continue;
        }
      }
      
      // Fix mismatched closing tags
      if (line.includes('</div>') && line.includes('</p>')) {
        // This looks like a malformed closing tag
        const fixedLine = line.replace(/<\/div>.*<\/p>/, '</p>');
        if (fixedLine !== line) {
          fixedLines.push(fixedLine);
          modified = true;
          continue;
        }
      }
      
      // Fix incomplete JSX attributes
      if (line.includes('className=') && line.includes('>') && !line.includes('</')) {
        // Check if this line has a proper JSX structure
        const openTags = (line.match(/</g) || []).length;
        const closeTags = (line.match(/>/g) || []).length;
        
        if (openTags > closeTags) {
          // This might be an incomplete JSX element
          const fixedLine = line.replace(/(className="[^"]*")>\s*>\s*/, '$1>');
          if (fixedLine !== line) {
            fixedLines.push(fixedLine);
            modified = true;
            continue;
          }
        }
      }
      
      fixedLines.push(line);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, fixedLines.join('\n'));
      console.log(`Fixed JSX syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix specific files that have JSX syntax errors
const filesToFix = [
  '/workspace/app/components/Footer.tsx',
  '/workspace/app/5g-implementation/page.tsx',
  '/workspace/app/App.tsx',
  '/workspace/app/about/page.tsx',
  '/workspace/app/accessibility/page.tsx'
];

let fixedCount = 0;

for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    if (fixJsxSyntax(file)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed JSX syntax in ${fixedCount} files.`);