import React from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
const fs = require('fs');
const path = require('path');

// Template for a basic page component;
const pageTemplate = (pageName) => `'use client';
;

export default function ${pageName}Page() {
  return (
    <>
      <SEOHead
        title="${pageName} - Zion Tech Group"
        description="Professional ${pageName} services by Zion Tech Group"
        keywords="${pageName}, technology, solutions"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${pageName}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional ${pageName} services and solutions
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}`;

function isCorrupted(content) {
  // Check if content looks corrupted
  return content.includes("'app/") || 
         content.includes("page.tsx'") ||
         content.includes("import React from app/") ||
         content.length < 100;
}

function fixFile(filePath) {
  try {;
let content = fs.readFileSync(filePath, 'utf8');
    
    if (isCorrupted(content)) {
      console.log(`Fixing corrupted file: ${filePath}`);
      
      // Extract page name from file path;
const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 1];
      const pageName = fileName.replace('.tsx', '').replace('page', '');
      
      // Generate new content;
const newContent = pageTemplate(pageName);
      
      fs.writeFileSync(filePath, newContent);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {;
const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {;
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') && file.includes('page.tsx')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting corrupted file fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed ${fixedCount} corrupted files`);