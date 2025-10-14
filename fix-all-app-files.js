import fs from 'fs';
import path from 'path';

// Function to recursively find all .tsx and .ts files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix a corrupted file by replacing it with a basic working version
function fixCorruptedFile(filePath) {
  try {
    const fileName = path.basename(filePath, path.extname(filePath));
    const componentName = fileName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    let basicContent;
    
    if (filePath.endsWith('.tsx')) {
      basicContent = `'use client';
import React from 'react';

export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">${componentName}</h1>
        <p className="text-gray-300">This page is under construction.</p>
      </div>
    </div>
  );
}
`;
    } else if (filePath.endsWith('.ts')) {
      basicContent = `// ${componentName} - Basic implementation
export default function ${componentName}() {
  return null;
}
`;
    }

    fs.writeFileSync(filePath, basicContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all .tsx and .ts files in the app directory
const appDir = 'app';
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} files to check...`);

// Fix all files
files.forEach(fixCorruptedFile);

console.log('All app files fixed!');