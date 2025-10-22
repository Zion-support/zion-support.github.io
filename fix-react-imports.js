import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all .tsx files in the app directory
function getAllTsxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllTsxFiles(filePath));
    } else if (file.endsWith('.tsx')) {
      results.push(filePath);
    }
  });
  
  return results;
}

function fixReactImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file uses React but doesn't import it
    if (content.includes('React.') && !content.includes("import React")) {
      // Add React import after 'use client'
      if (content.startsWith("'use client';\n")) {
        content = content.replace("'use client';\n", "'use client';\nimport React from 'react';\n");
      } else {
        content = "import React from 'react';\n" + content;
      }
      fs.writeFileSync(filePath, content);
      console.log(`Added React import to ${path.relative(__dirname, filePath)}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all .tsx files
const tsxFiles = getAllTsxFiles(path.join(__dirname, 'app'));

// Fix each file
tsxFiles.forEach(fixReactImport);

console.log('Fixed React imports!');