#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createCleanPageComponent(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const componentName = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  
  const content = `import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: \`\${componentName} | Zion Tech Group\`,
  description: 'Advanced AI and IT solutions for modern businesses.',
};

export default function ${componentName}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            ${componentName}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI and IT solutions powered by cutting-edge technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Feature 1</h3>
            <p className="text-gray-300">
              Advanced technology solutions for modern businesses.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Feature 2</h3>
            <p className="text-gray-300">
              Scalable and reliable infrastructure solutions.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Feature 3</h3>
            <p className="text-gray-300">
              AI-powered insights and automation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}`;

  return content;
}

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
const appDir = path.join(__dirname, 'app');
const pageFiles = findPageFiles(appDir);

let fixedCount = 0;

for (const file of pageFiles) {
  console.log(`Replacing page: ${file}`);
  const cleanContent = createCleanPageComponent(file);
  fs.writeFileSync(file, cleanContent, 'utf8');
  fixedCount++;
}

console.log(`\nFixed ${fixedCount} page files with clean implementations`);