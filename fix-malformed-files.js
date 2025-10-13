#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate React imports
    if (content.includes("import React from 'react';") && content.includes("import React, {")) {
      content = content.replace(/import React from 'react';\s*import React, {([^}]+)} from '([^']+)';/g, "import React, { $1 } from '$2';");
      modified = true;
    }

    // Fix malformed component structure
    if (content.includes('export default function') && content.includes('const Component = () => {')) {
      // Remove the duplicate component declaration
      content = content.replace(/const Component = \(\) => \{\s*/, '');
      content = content.replace(/^\s*return\s*\(\s*$/, '  return (');
      modified = true;
    }

    // Fix incomplete JSX returns
    if (content.includes('return (') && content.includes('</div>') && content.includes(')')) {
      // Fix the structure
      content = content.replace(/return\s*\(\s*<div>\s*\)\s*<\/div>\s*\)\s*<div/g, 'return (\n    <div');
      modified = true;
    }

    // Fix missing semicolons
    if (content.includes('return (') && !content.includes(';')) {
      content = content.replace(/return\s*\(\s*$/, 'return (');
      modified = true;
    }

    // Fix JSX structure issues
    if (content.includes('<div>') && content.includes('</div>') && content.includes('return (')) {
      // Ensure proper JSX structure
      const lines = content.split('\n');
      let inReturn = false;
      let braceCount = 0;
      let newLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('return (')) {
          inReturn = true;
          newLines.push(line);
          continue;
        }
        
        if (inReturn) {
          if (line.includes('<div')) {
            braceCount++;
          }
          if (line.includes('</div>')) {
            braceCount--;
          }
          
          newLines.push(line);
          
          if (braceCount === 0 && line.includes('</div>')) {
            newLines.push('  );');
            inReturn = false;
          }
        } else {
          newLines.push(line);
        }
      }
      
      content = newLines.join('\n');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main function
async function main() {
  // Find all TypeScript/JSX files
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);