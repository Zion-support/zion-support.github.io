#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files with Next.js imports
const files = glob.sync('app/**/*.tsx', { cwd: __dirname });

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has Next.js imports
    if (content.includes("from 'next'") || content.includes('from "next"')) {
      console.log(`Fixing: ${filePath}`);
      
      // Remove Next.js imports
      content = content.replace(/import.*from ['"]next['"];?\s*\n?/g, '');
      content = content.replace(/import.*from ['"]next\/[^'"]*['"];?\s*\n?/g, '');
      
      // Add React and React Router imports if not present
      if (!content.includes("import React")) {
        content = "import React from 'react';\n" + content;
      }
      
      if (!content.includes("from 'react-router-dom'") && !content.includes('from "react-router-dom"')) {
        // Find the first import line and add React Router import after it
        const lines = content.split('\n');
        let insertIndex = 0;
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].startsWith('import ')) {
            insertIndex = i + 1;
          }
        }
        lines.splice(insertIndex, 0, "import { Link } from 'react-router-dom';");
        content = lines.join('\n');
      }
      
      // Replace href with to in Link components
      content = content.replace(/<Link\s+href=/g, '<Link to=');
      
      // Remove metadata exports
      content = content.replace(/export const metadata[^;]*;?\s*\n?/g, '');
      
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all files
let fixedCount = 0;
for (const file of files) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  }
}

console.log(`\nFixed ${fixedCount} files`);