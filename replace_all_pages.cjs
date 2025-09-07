const fs = require('fs');
const path = require('path');

const pageTemplate = `import React from 'react';
import Head from 'next/head';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Page by Zion Tech Group" />
      </Head>
      <main>
        <h1>Page</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  );
}`;

function replaceAllPages(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      replaceAllPages(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      // Skip API files and specific files we want to keep
      if (filePath.includes('/api/') || 
          filePath.includes('_app.tsx') || 
          filePath.includes('_document.tsx') ||
          filePath.includes('index.tsx') ||
          filePath.includes('404.tsx') ||
          filePath.includes('500.tsx')) {
        continue;
      }
      
      console.log(`Replacing: ${filePath}`);
      fs.writeFileSync(filePath, pageTemplate);
    }
  }
}

console.log('Replacing all pages...');
replaceAllPages('./pages');
console.log('All pages replaced!');