#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Cleaning up app directory...');

// Function to clean a file
function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======/g, '');
    content = content.replace(/^<<<<<<< [^\n]+$/gm, '');
    content = content.replace(/^=======$/gm, '');
    content = content.replace(/^>>>>>>> [^\n]+$/gm, '');
    
    // Fix unterminated strings
    content = content.replace(/'([^']*)$/gm, "'$1'");
    content = content.replace(/"([^"]*)$/gm, '"$1"');
    content = content.replace(/`([^`]*)$/gm, '`$1`');
    
    // Fix malformed JSX attributes
    content = content.replace(/=}([^}]+)}/g, '="$1"');
    content = content.replace(/=}([^}]+)}/g, '="$1"');
    content = content.replace(/=}([^}]+)}/g, '="$1"');
    
    // Fix extra quotes and semicolons
    content = content.replace(/;'/g, ';');
    content = content.replace(/;"/g, ';');
    content = content.replace(/;`/g, ';');
    content = content.replace(/'}/g, '}');
    content = content.replace(/"/g, '}');
    content = content.replace(/`}/g, '}');
    
    // Fix object syntax
    content = content.replace(/,}/g, '}');
    content = content.replace(/,]/g, ']');
    
    // Remove empty lines and clean up
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.trim();
    
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.log(`❌ Error cleaning ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to find all files in a directory
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          traverse(fullPath);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.log(`Error reading directory ${currentDir}: ${error.message}`);
    }
  }
  
  traverse(dir);
  return files;
}

// Clean all files in app directory
const appDir = 'app';
const files = findFiles(appDir);

console.log(`📁 Found ${files.length} files to clean...`);

let cleanedCount = 0;
for (const file of files) {
  if (cleanFile(file)) {
    cleanedCount++;
  }
}

console.log(`🎉 Cleaned ${cleanedCount} files!`);

// Create missing directories and files
const directories = [
  'app/ai-solutions',
  'app/it-solutions',
  'app/cloud-solutions',
  'app/micro-saas-solutions'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// Create simple page files for missing routes
const simplePageTemplate = `import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page = () => {
  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Advanced AI and IT Solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Page</h1>
            <p className="text-xl text-gray-600">
              This page is under development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;`;

const pageFiles = [
  'app/ai-solutions/page.tsx',
  'app/it-solutions/page.tsx',
  'app/cloud-solutions/page.tsx',
  'app/micro-saas-solutions/page.tsx'
];

pageFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, simplePageTemplate);
    console.log(`✅ Created ${file}`);
  }
});

console.log('🎉 App directory cleanup completed!');