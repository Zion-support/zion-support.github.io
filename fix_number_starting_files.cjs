const fs = require('fs');
const path = require('path');

// Find all files that start with numbers
const pagesDir = 'pages';
const numberStartingFiles = [];

function findNumberStartingFiles(dir) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        findNumberStartingFiles(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        // Check if it starts with a number
        if (/^[0-9]/.test(file)) {
          numberStartingFiles.push(filePath);
        }
      }
    });
  } catch (error) {
    // Directory doesn't exist or can't be read
  }
}

findNumberStartingFiles(pagesDir);

// Template for number-starting files
const numberStartTemplate = (fileName) => `import React from 'react';
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>${fileName} | Zion Tech Group</title>
        <meta name="description" content="${fileName} page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              ${fileName}
            </h1>
            <p className="text-xl text-gray-600">
              This is the ${fileName} page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}`;

// Fix each number-starting file
let fixedCount = 0;
numberStartingFiles.forEach(filePath => {
  try {
    const fileName = path.basename(filePath, path.extname(filePath));
    const content = numberStartTemplate(fileName);
    fs.writeFileSync(filePath, content);
    console.log(`Fixed number-starting file: ${filePath}`);
    fixedCount++;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} number-starting files successfully!`);