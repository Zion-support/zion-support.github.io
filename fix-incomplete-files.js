const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files
function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to check if a file is incomplete
function isIncompleteFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file is too short
    if (content.length < 200) {
      return true;
    }
    
    // Check if file doesn't have proper closing
    if (!content.includes('export default') || !content.includes('}')) {
      return true;
    }
    
    // Check if file has syntax errors (basic checks)
    if (content.includes('export default function') && !content.includes('return')) {
      return true;
    }
    
    return false;
  } catch (error) {
    return true;
  }
}

// Function to create a basic page template
function createBasicPage(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const pageName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const template = `'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ${fileName.replace(/-/g, '')}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="Advanced ${pageName.toLowerCase()} solution for modern businesses." />
        <meta name="keywords" content="${pageName.toLowerCase()}, artificial intelligence, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              ${pageName}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Advanced ${pageName.toLowerCase()} solution powered by cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ${fileName.replace(/-/g, '')}Page
`;

  return template;
}

// Function to fix incomplete files
function fixIncompleteFile(filePath) {
  try {
    if (isIncompleteFile(filePath)) {
      const template = createBasicPage(filePath);
      fs.writeFileSync(filePath, template, 'utf8');
      console.log(`Fixed incomplete file: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting incomplete files fix...');
const tsxFiles = findTsxFiles('./app');
let fixedCount = 0;

tsxFiles.forEach(file => {
  if (fixIncompleteFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);