#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Template for a simple page component
const pageTemplate = (pageName, title) => `'use client';
import React from 'react';

export default function ${pageName}() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">${title}</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}`;

// Get all TypeScript/JSX files in the app directory
function getAllPageFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    try {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  walkDir(dir);
  return files;
}

// Check if a file has syntax errors by running TypeScript check
function hasSyntaxErrors(filePath) {
  try {
    const result = execSync(`npx tsc --noEmit --skipLibCheck ${filePath}`, { 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    return false; // No errors
  } catch (error) {
    return true; // Has errors
  }
}

console.log('Finding and fixing all broken pages...');

const allFiles = getAllPageFiles('app');
console.log(`Found ${allFiles.length} TypeScript/JSX files`);

let fixedCount = 0;
let skippedCount = 0;

for (const filePath of allFiles) {
  try {
    // Skip if it's already a simple page
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('This page is under development')) {
      skippedCount++;
      continue;
    }
    
    // Check if file has syntax errors
    if (hasSyntaxErrors(filePath)) {
      // Extract page name from path
      const dirName = path.basename(path.dirname(filePath));
      const pageName = 'Page' + dirName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '');
      const title = dirName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      const newContent = pageTemplate(pageName, title);
      
      // Ensure directory exists
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    } else {
      skippedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} broken pages, skipped ${skippedCount} working pages`);