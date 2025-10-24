const fs = require('fs');
const path = require('path');

// Function to create a proper page component
function createProperPageComponent(filePath, pageName) {
  const componentName = pageName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const displayName = pageName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return `'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ${componentName}Page() {
  return (
    <>
      <Head>
        <title>${displayName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${displayName.toLowerCase()} services by Zion Tech Group. Transform your business with our expert solutions." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            ${displayName}
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional ${displayName.toLowerCase()} services coming soon.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}`;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has severe structural issues
    const hasStructuralIssues = content.includes('</>') || 
                               content.includes('<><>') || 
                               content.includes('className="') && content.includes('</>') ||
                               content.includes('return (') && content.includes('<title>') && !content.includes('<Head>');
    
    if (hasStructuralIssues) {
      // Extract page name from file path
      const pathParts = filePath.split('/');
      const pageName = pathParts[pathParts.length - 2]; // Get the directory name
      
      const properContent = createProperPageComponent(filePath, pageName);
      fs.writeFileSync(filePath, properContent);
      console.log(`Rewrote: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
const pageFiles = findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page.tsx files`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Rewrote ${fixedCount} files with proper structure`);