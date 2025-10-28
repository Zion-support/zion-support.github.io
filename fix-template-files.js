#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix malformed template files
function fixTemplateFile(content, filePath) {
  // Check if this is a malformed template file
  if (content.includes('</div></div></div><div className="text-center">') && 
      content.includes('Professional  services and solutions.')) {
    
    // Extract the filename to create a proper component name
    const fileName = path.basename(filePath, '.tsx');
    const componentName = fileName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'Page';
    
    return `'use client';

export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          ${componentName.replace('Page', '')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional services and solutions.
        </p>
      </div>
    </div>
  );
}`;
  }
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    content = fixTemplateFile(content, filePath);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/TSX files
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} TypeScript files to process...`);

  let fixedCount = 0;
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);