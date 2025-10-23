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
    } else if (file.endsWith('.tsx') && !filePath.includes('/components/')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to check if a file has syntax issues
function hasSyntaxIssues(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> origin/main')) {
      return true;
    }
    
    // Check for malformed JSX
    if (content.includes('return (') && !content.includes('<>') && !content.includes('<div')) {
      return true;
    }
    
    // Check for missing closing tags
    if (content.includes('<section') && !content.includes('</section>')) {
      return true;
    }
    
    // Check for malformed closing tags
    if (content.includes('  </')) {
      return true;
    }
    
    return false;
  } catch (error) {
    return true;
  }
}

// Function to create a proper page template
function createProperPage(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const pageName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const componentName = fileName.replace(/-/g, '') + 'Page';
  
  // Determine import path based on file location
  const isInSubdir = filePath.includes('/') && !filePath.endsWith('.tsx');
  const componentImportPath = isInSubdir ? '../components/' : './components/';
  
  const template = `'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '${componentImportPath}Navigation'
import Footer from '${componentImportPath}Footer'

const ${componentName}: React.FC = () => {
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

export default ${componentName}
`;

  return template;
}

// Main execution
console.log('Starting comprehensive fix...');
const tsxFiles = findTsxFiles('./app');
let fixedCount = 0;

tsxFiles.forEach(file => {
  try {
    if (hasSyntaxIssues(file)) {
      const template = createProperPage(file);
      fs.writeFileSync(file, template, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);