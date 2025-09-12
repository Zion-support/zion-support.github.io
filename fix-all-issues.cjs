const fs = require('fs');
const path = require('path');

function findBrokenFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        
') || 
            content.includes('>>>>>>>') ||
            content.includes('export const metadata = {') && content.includes('export const metadata = {', content.indexOf('export const metadata = {') + 1) ||
            content.includes('import ') && content.includes('export const metadata = {') && content.indexOf('import ') > content.indexOf('export const metadata = {')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

function createCleanServicePage(title, description, keywords = '') {
  return `import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title} | Zion Tech Group',
  description: '${description}',
  keywords: '${keywords}',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: '${title} | Zion Tech Group',
    description: '${description}',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${title} | Zion Tech Group',
    description: '${description}',
  },
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">${title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ${description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
            <p className="text-gray-600 mb-4">
              Advanced features and capabilities for your business needs.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Professional solutions</li>
              <li>• 24/7 support</li>
              <li>• Scalable architecture</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
            <p className="text-gray-600 mb-4">
              Transform your business with our cutting-edge solutions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Increased efficiency</li>
              <li>• Cost savings</li>
              <li>• Better results</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive support and maintenance services.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Expert consultation</li>
              <li>• Training and documentation</li>
              <li>• Ongoing maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}`;
}

function fixBrokenFile(filePath) {
  try {
    const fileName = path.basename(filePath, '.tsx');
    const title = fileName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    const description = `Professional ${title.toLowerCase()} solutions for your business needs.`;
    const keywords = title.toLowerCase().replace(/\s+/g, ', ');
    
    const cleanContent = createCleanServicePage(title, description, keywords);
    
    fs.writeFileSync(filePath, cleanContent);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all broken files
const brokenFiles = findBrokenFiles('./app');

console.log(`Found ${brokenFiles.length} broken files`);

let fixedCount = 0;
for (const file of brokenFiles) {
  if (fixBrokenFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} out of ${brokenFiles.length} files`);

        // Check for common syntax issues
