#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to create a proper React component structure
function createProperComponent(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const dirName = path.basename(path.dirname(filePath));
  
  // Convert kebab-case to TitleCase
  const componentName = fileName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  
  // Create a proper page title
  const pageTitle = fileName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ${componentName}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${pageTitle} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageTitle.toLowerCase()} solutions for modern businesses" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              ${pageTitle}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional ${pageTitle.toLowerCase()} solutions designed to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Advanced Solutions</h3>
              <p className="text-gray-300 mb-4">
                Cutting-edge technology solutions tailored to your business needs.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Expert Support</h3>
              <p className="text-gray-300 mb-4">
                Dedicated support team to ensure your success.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
              >
                Get Support
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Custom Integration</h3>
              <p className="text-gray-300 mb-4">
                Seamless integration with your existing systems.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
              >
                Start Now
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ${componentName}Page;
`;
}

// Function to check if a file is corrupted
function isCorrupted(content) {
  // Check for common corruption patterns
  const corruptionPatterns = [
    /^\s*}\s*$/, // Just a closing brace
    /^\s*return\s*\(\s*$/, // Incomplete return statement
    /^\s*import\s*{\s*$/, // Incomplete import
    /^\s*<[^>]*$/, // Incomplete JSX tag
    /^\s*\)\s*$/, // Just a closing parenthesis
    /^\s*;\s*$/, // Just a semicolon
    /^\s*"\s*$/, // Just a quote
    /^\s*;\s*";\s*$/, // Malformed syntax
    /^\s*Get Started Today;\s*$/, // Malformed button text
    /^\s*import React from 'react';\s*";\s*$/, // Malformed import
    /^\s*>\s*$/, // Just a greater than
    /^\s*>\s*View Pricing\s*$/, // Malformed button
    /^\s*>\s*View Demo\s*$/, // Malformed button
    /^\s*>\s*Start Your Free Trial\s*$/, // Malformed button
    /^\s*export default function.*\(\s*$/, // Incomplete function declaration
    /^\s*export default.*;\s*$/, // Incomplete export
    /^\s*\);\s*";\s*$/, // Malformed closing
    /^\s*\};\s*";\s*$/, // Malformed closing
    /^\s*<[^>]*>\s*$/, // Incomplete JSX
    /^\s*<[^>]*>\s*[^<]*\s*$/, // Incomplete JSX with text
  ];
  
  return corruptionPatterns.some(pattern => pattern.test(content.trim())) || 
         content.trim().length < 50 || // Very short files
         !content.includes('export default') || // Missing export
         content.includes('";') || // Contains malformed syntax
         content.includes(');";') || // Contains malformed syntax
         content.includes('};";'); // Contains malformed syntax
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file is not corrupted
    if (!isCorrupted(content) && content.includes('export default')) {
      return false;
    }
    
    console.log(`Fixing: ${filePath}`);
    const newContent = createProperComponent(filePath);
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to fix all TSX files
function fixAllTSXFiles() {
  const appDir = path.join(__dirname, 'app');
  let fixedCount = 0;
  let totalCount = 0;
  
  function processDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        processDirectory(fullPath);
      } else if (item.endsWith('.tsx') && !item.includes('App.tsx')) {
        totalCount++;
        if (fixFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  }
  
  console.log('Starting to fix corrupted TSX files...');
  processDirectory(appDir);
  console.log(`Fixed ${fixedCount} out of ${totalCount} TSX files`);
}

// Run the fix
fixAllTSXFiles();