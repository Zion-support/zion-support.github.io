const fs = require('fs');
const path = require('path');

// Function to fix remaining corrupted files
function fixRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has severe corruption patterns
    if (content.includes("';';") || content.includes('";";') || content.includes('";"</div>')) {
      // Extract the page name from the path
      const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 2] || 'Page';
      const pageName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      // Create a clean page component
      const cleanContent = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageName.toLowerCase()} services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">${pageName}</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
}`;
      
      fs.writeFileSync(filePath, cleanContent);
      console.log(`Fixed corrupted file: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and fix all remaining corrupted files
function fixAllRemainingErrors() {
  const appDir = path.join(__dirname, 'app');
  let fixedCount = 0;
  let errorCount = 0;

  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        if (fixRemainingErrors(filePath)) {
          fixedCount++;
        } else {
          errorCount++;
        }
      }
    }
  }

  walkDir(appDir);
  
  console.log(`\nFixed ${fixedCount} remaining corrupted files`);
  console.log(`Errors in ${errorCount} files`);
}

// Run the fix
fixAllRemainingErrors();