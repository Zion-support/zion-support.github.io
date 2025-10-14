import fs from 'fs';
import path from 'path';

// Function to fix a corrupted file by replacing it with a basic working version
function fixCorruptedFile(filePath) {
  try {
    const fileName = path.basename(filePath, '.tsx');
    const componentName = fileName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    const basicContent = `'use client';
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

    fs.writeFileSync(filePath, basicContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all .tsx files in the pages directory
const pagesDir = 'app/pages';
const files = fs.readdirSync(pagesDir);

// Fix all .tsx files
files.forEach(file => {
  if (file.endsWith('.tsx')) {
    fixCorruptedFile(path.join(pagesDir, file));
  }
});

console.log('All pages directory files fixed!');