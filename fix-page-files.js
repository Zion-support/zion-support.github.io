#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to create a basic page template
function createPageTemplate(pageName, title, description) {
  return `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${pageName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" content="${description}"container mx-auto px-4 py-16"text-center"text-4 xl font-bold text-gray-900 mb-4"text-xl text-gray-600 mb-8"react";') && content.includes('export default function Page()')) {
      // Extract page name from file path
      const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 2]; // Get directory name
      const pageName = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('') + 'Page';
      
      const title = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      const description = `Advanced ${title.toLowerCase()} solutions by Zion Tech Group`;
      
      const newContent = createPageTemplate(pageName, title, description);
      fs.writeFileSync(filePath, newContent, 'utf8');
      
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
// Function to recursively find and fix page files
function fixPageFiles(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (['node_modules', '.git', 'dist', 'build', '.next', 'components', 'hooks', 'lib', 'utils'].includes(item)) {
        continue;
      }
      fixedCount += fixPageFiles(fullPath);
    } else if (stat.isFile() && item === 'page.tsx') {
      if (fixPageFile(fullPath)) {
        fixedCount++;
      }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting page file fixes...');
const fixedCount = fixPageFiles('/workspace/app');
console.log(`Fixed ${fixedCount} page files.`);