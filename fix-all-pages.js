#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
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

// Get all page files
const pageFiles = execSync('find ./app -name "page.tsx"', { encoding: 'utf8' }).trim().split('\n');

console.log(`Found ${pageFiles.length} page files to process`);

let createdCount = 0;
for (const file of pageFiles) {
  if (file && createMinimalPage(file)) {
    createdCount++;
  }
}

console.log(`Created ${createdCount} minimal pages`);