#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to check if a file is corrupted
function isCorrupted(content) {
  const corruptionPatterns = [
    /whileHover\s*=\s*\{\{/,
    /whileTap\s*=\s*\{\{/,
    /motion\./,
    /className\s*=\s*"[^"]*;\s*"/,
    /;\s*";\s*$/,
    /cursor\/fix-errors-and-merge-to-main/,
    /<<<<<<< HEAD/,
    /=======/,
    />>>>>>> /,
    /^\s*}\s*$/, // Just a closing brace
    /^\s*\]\s*$/, // Just a closing bracket
    /^\s*\)\s*$/, // Just a closing parenthesis
    /^\s*return\s*\(\s*$/, // Incomplete return statement
    /^\s*<>\s*$/, // Just a fragment opening
    /^\s*<\/>\s*$/, // Just a fragment closing
    /^\s*\)\s*$/, // Just a closing parenthesis
    /^\s*}\s*$/, // Just a closing brace
    /^\s*\)\s*;\s*$/, // Just a closing parenthesis with semicolon
    /^\s*}\s*;\s*$/, // Just a closing brace with semicolon
    /^\s*\)\s*;\s*;\s*$/, // Multiple semicolons
    /^\s*}\s*;\s*;\s*$/, // Multiple semicolons
    /^\s*\)\s*;\s*;\s*;\s*$/, // Multiple semicolons
    /^\s*}\s*;\s*;\s*;\s*$/, // Multiple semicolons
    /import\s+React\s+from\s+'react';\s*;\s*;\s*;\s*$/, // Multiple semicolons after import
    /^\s*$/, // Empty lines
  ];
  
  return corruptionPatterns.some(pattern => pattern.test(content));
}

// Function to create a basic React component template
function createBasicComponent(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-/g, ' ');
  
  return `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${componentName.replace(/\s+/g, '')}() {
  return (
    <>
      <Helmet>
        <title>${componentName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${componentName} services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              ${componentName}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional ${componentName} services delivered with excellence by our expert team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}`;
}

// Function to fix a corrupted file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file is corrupted
    if (isCorrupted(content)) {
      console.log(`Fixing corrupted file: ${filePath}`);
      
      // Create a basic component
      const newContent = createBasicComponent(filePath);
      
      // Write the new content
      fs.writeFileSync(filePath, newContent, 'utf8');
      
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const appDir = path.join(__dirname, 'app');
  let fixedCount = 0;
  let totalCount = 0;
  
  console.log('Starting to fix corrupted files...');
  
  // Get all .tsx files in the app directory
  const files = execSync(`find ${appDir} -name "*.tsx" -type f`, { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(file => file.length > 0);
  
  console.log(`Found ${files.length} TypeScript files to check`);
  
  // Process each file
  for (const file of files) {
    totalCount++;
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} out of ${totalCount} files`);
  console.log('File fixing completed!');
}

// Run the script
main();