#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createMinimalPage(filePath) {
  try {
    const fileName = path.basename(filePath, '.tsx');
    const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1) + 'Page';
    
    const content = `'use client'
import React from 'react'

const ${componentName}: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${componentName.replace('Page', '')}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ${componentName.replace('Page', '')} solutions for your business.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ${componentName}`;

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Created minimal page: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error creating ${filePath}:`, error.message);
    return false;
  }
}

function findPageFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'components') {
        walkDir(fullPath);
      } else if (stat.isFile() && item === 'page.tsx' && currentPath.includes('/app/')) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const files = findPageFiles('./app');
console.log(`Found ${files.length} page files to process`);

let createdCount = 0;
for (const file of files) {
  if (createMinimalPage(file)) {
    createdCount++;
  }
}

console.log(`Created ${createdCount} minimal pages`);