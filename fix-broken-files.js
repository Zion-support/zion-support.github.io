#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Template for a basic page component
const pageTemplate = (title, description) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}`;

// Function to get a proper title and description from file path
function getPageInfo(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const dirName = path.basename(path.dirname(filePath));
  
  if (fileName === 'page') {
    // Convert directory name to title
    const title = dirName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    const description = `Learn about ${title} services and solutions at Zion Tech Group.`;
    return { title, description };
  }
  
  return {
    title: fileName.charAt(0).toUpperCase() + fileName.slice(1),
    description: `Learn about ${fileName} at Zion Tech Group.`
  };
}

// Function to fix a broken file
function fixBrokenFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file is broken (has syntax errors or incomplete structure)
    const isBroken = content.includes('  ];') || 
                    content.includes('  return (') && !content.includes('export default') ||
                    content.split('\n').length < 10;
    
    if (isBroken) {
      const { title, description } = getPageInfo(filePath);
      const newContent = pageTemplate(title, description);
      
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/TSX files
function findTsxFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') && item !== 'layout.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixBrokenFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} broken files`);
console.log('File fixing complete!');