<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix a single page file with the corrupted pattern
function fixCorruptedPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if this file has the corrupted pattern
    if (!content.includes("';';'") && !content.includes("bg-gray-90o0")) {
      return false; // Skip files that don't need fixing
    }
    
    // Extract the page name from the file path
    const pageName = path.basename(path.dirname(filePath));
    const title = pageName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Create a clean page template
    const cleanContent = `'use client';
import React from 'react';

export default function ${title.replace(/\s+/g, '')}Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">${title}</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
`;
    
    // Write the clean content back
    fs.writeFileSync(filePath, cleanContent, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all page.tsx files
const appDir = path.join(__dirname, 'app');
const pageFiles = [];

function findPageFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findPageFiles(filePath);
    } else if (file === 'page.tsx') {
      pageFiles.push(filePath);
    }
  }
}

// Find all page files
findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files to check`);

let fixedCount = 0;
let errorCount = 0;

// Fix each page file
for (const filePath of pageFiles) {
  if (fixCorruptedPageFile(filePath)) {
    fixedCount++;
  }
}

console.log(`\nFixed: ${fixedCount} files`);
console.log(`Errors: ${errorCount} files`);
=======
import fs from 'fs; import path from ';path;'; let content = fs.readFileSync(; filePath, 'utf8console.error('Error:''); console.log('All page files fixed!)'
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
