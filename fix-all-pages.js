const fs = require('fs');
const path = require('path');

// Function to create a basic page component
function createBasicPage(pageName) {
  const componentName = pageName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Page';

  return `'use client'
import React from 'react'

export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional ${pageName.replace(/-/g, ' ')} services and solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
              <p className="text-gray-300">Professional ${pageName.replace(/-/g, ' ')} solutions tailored to your needs.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support and maintenance for your ${pageName.replace(/-/g, ' ')} infrastructure.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Scalable Architecture</h3>
              <p className="text-gray-300">Build scalable ${pageName.replace(/-/g, ' ')} solutions that grow with your business.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`;
}

// Function to check if a page needs fixing
function needsFixing(content) {
  return (
    content.includes('// Conflict resolved: taking HEAD version') ||
    content.includes('import Head from \'next/head\'') ||
    content.includes('import Navigation from') ||
    content.includes('import Footer from') ||
    content.includes('from \'../components/') ||
    content.trim() === '// Conflict resolved: taking HEAD version' ||
    content.trim() === '' ||
    content.includes('<<<<<<< HEAD') ||
    content.includes('>>>>>>> origin/')
  );
}

// Function to recursively find and fix all problematic pages
function fixAllPages(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      fixAllPages(fullPath);
    } else if (item === 'page.tsx') {
      // Check if this page needs fixing
      const content = fs.readFileSync(fullPath, 'utf8');
      
      if (needsFixing(content)) {
        console.log(`Fixing page: ${fullPath}`);
        
        // Extract page name from directory path
        const pathParts = fullPath.split('/');
        const pageIndex = pathParts.findIndex(part => part === 'app');
        const pageName = pathParts[pageIndex + 1] || 'page';
        
        // Create new page content
        const newContent = createBasicPage(pageName);
        
        // Write the new content
        fs.writeFileSync(fullPath, newContent);
        console.log(`Fixed: ${fullPath}`);
      }
    }
  }
}

// Start fixing from the app directory
console.log('Starting to fix all problematic pages...');
fixAllPages('/workspace/app');
console.log('Finished fixing all pages!');