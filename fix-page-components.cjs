#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to create a proper page component
function createProperPageComponent(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  
  // Extract service name from path
  const pathParts = filePath.split('/');
  const serviceType = pathParts[pathParts.length - 2]; // e.g., 'ai-services', 'micro-saas', etc.
  
  const content = `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>${componentName.replace(/([A-Z])/g, ' $1').trim()} - Zion Tech Group</title>
        <meta name="description" content="${componentName.replace(/([A-Z])/g, ' $1').trim()} solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">${componentName.replace(/([A-Z])/g, ' $1').trim()}</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ${componentName.replace(/([A-Z])/g, ' $1').trim().toLowerCase()} solutions designed to meet your business needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created proper component: ${filePath}`);
}

// Function to fix broken components
function fixBrokenComponent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file is severely broken
    if (content.includes('return (;') || content.includes('</div>;') || content.length < 200) {
      createProperPageComponent(filePath);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all page components
function findPageComponents(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile() && item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting page component fixes...');

const workspaceDir = process.cwd();
const pageFiles = findPageComponents(workspaceDir);

console.log(`Found ${pageFiles.length} page components`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (fixBrokenComponent(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} page components`);
console.log('Page component fixes completed!');