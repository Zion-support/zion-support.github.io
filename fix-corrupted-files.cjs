#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to create a basic page template
function createPageTemplate(title, description, keywords) {
  return `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>
            <p className="text-xl text-gray-300 mb-8">
              ${description}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}`;
}

// Function to check if a file is corrupted
function isCorrupted(content) {
  const corruptionIndicators = [
    /import.*';$/gm,  // Import statements ending with semicolon and quote
    /export.*';$/gm,  // Export statements ending with semicolon and quote
    /return.*';$/gm,  // Return statements ending with semicolon and quote
    /<.*>.*';$/gm,    // JSX elements ending with semicolon and quote
    /;\s*$/gm,        // Lines ending with semicolon
    /unterminated string literal/i,
    /unexpected token/i,
    /expression expected/i
  ];
  
  return corruptionIndicators.some(pattern => pattern.test(content));
}

// Function to extract page info from file path
function getPageInfo(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const dirName = path.dirname(filePath).split('/').pop();
  
  let title = fileName;
  let description = `Professional ${fileName} solutions and services`;
  let keywords = fileName.toLowerCase().replace(/-/g, ', ');
  
  // Special cases
  if (fileName === '404') {
    title = '404 - Page Not Found';
    description = 'The page you are looking for does not exist';
    keywords = '404, page not found, error';
  } else if (fileName === 'page') {
    title = dirName.charAt(0).toUpperCase() + dirName.slice(1).replace(/-/g, ' ');
    description = `Professional ${title} solutions and services`;
    keywords = title.toLowerCase().replace(/\s+/g, ', ');
  }
  
  return { title, description, keywords };
}

// Main function to process files
async function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalFiles++;
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        if (isCorrupted(content)) {
          const { title, description, keywords } = getPageInfo(file);
          const fixed = createPageTemplate(title, description, keywords);
          
          fs.writeFileSync(file, fixed, 'utf8');
          console.log(`Fixed corrupted file: ${file}`);
          fixedFiles++;
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} corrupted files`);
}

// Run the fix
processFiles();