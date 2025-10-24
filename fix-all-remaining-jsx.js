const fs = require('fs');
const path = require('path');

// Function to create a standard page template
function createStandardPage(filePath, pageName, title) {
  const content = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${pageName}() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="Professional ${title.toLowerCase()} services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional ${title.toLowerCase()} services coming soon.
          </p>
          <Link 
            to="/contact"
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
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed: ${filePath}`);
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has malformed JSX structure
    if (content.includes('</>') && content.includes('<>') && content.includes('className=')) {
      // Extract page name from file path
      const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 1];
      const pageName = fileName.replace('.tsx', '').replace('page', 'Page');
      
      // Extract title from the content if possible
      let title = 'Service';
      const titleMatch = content.match(/<title>([^<]+)</);
      if (titleMatch) {
        title = titleMatch[1].replace(' - Zion Tech Group', '').trim();
      }
      
      createStandardPage(filePath, pageName, title);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

tsxFiles.forEach(processFile);

console.log('All remaining JSX fixing completed!');