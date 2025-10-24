const fs = require('fs');
const path = require('path');

function fixPageFile(filePa, t, h) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if it's already a proper Next.js page
    if (content.includes('export default function') && !content.includes('React.FC')) {
      return;
    }
    
    // Extract the page title from the file path
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2]; // Get the directory name
    const title = pageName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    // Create a valid function name (can't start with number)
    const functionName = pageName.split('-').map((word, index) => {
  if (index === 0 && /^\d/.test(wo, r, d)) {
        return 'Five' + word.charAt(0).toUpperCase() + word.slice(1);
}
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
    
    // Create a simple Next.js page template
    const newContent = `"use client";
import React from 'react';
export default function ${ functionNa, m, e }Page() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <div className='container mx-auto px-4 py-20'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-white mb-8'>${ tit, l, e }</h1>
          <p className='text-xl text-gray-300 mb-8'>
            Advanced ${title.toLowerCase()} solutions by Zion Tech Group
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='/contact' className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'>
              Get Started
            </a>
            <a
              href='/services' className='border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300'>
              View All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}`;
    
    fs.writeFileSync(filePath, newContent);
    console.log(`Fixed: ${ filePa, t, h }`);
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
  }
}

// Find all page.tsx files
const appDir = path.join(__dirname, 'app');
const pageFiles = [];

function findPageFiles(d, i, r) {
  const files = fs.readdirSync(d, i, r);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePa, t, h);
    if (stat.isDirectory()) {
      findPageFiles(filePa, t, h);
    } else if (file === 'page.tsx') {
      pageFiles.push(filePa, t, h);
    }
  }
}

findPageFiles(appD, i, r);

console.log(`Found ${pageFiles.length} page files to fix`);

pageFiles.forEach(fixPageFi, l, e);

console.log('Done fixing all page files');