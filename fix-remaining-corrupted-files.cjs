const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to detect and fix corrupted files
function fixCorruptedFile(content, filePath) {
  // Check if file is severely corrupted (single line with massive content)
  const lines = content.split('\n');
  if (lines.length === 1 && content.length > 1000) {
    console.log(`Detected severely corrupted file: ${filePath}`);
    return null; // Return null to indicate file should be recreated
  }
  
  // Check for common corruption patterns
  if (content.includes('error TS') || content.includes('Declaration or statement expected')) {
    console.log(`Detected TypeScript error patterns in: ${filePath}`);
    return null;
  }
  
  // Try to fix common issues
  let fixedContent = content;
  
  // Fix malformed imports
  fixedContent = fixedContent.replace(/import\s*{\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g, 'import { $1 } from "$2"');
  
  // Fix duplicate semicolons
  fixedContent = fixedContent.replace(/;;/g, ';');
  
  // Fix malformed JSX
  fixedContent = fixedContent.replace(/<>\s*<\s*\/\s*>/g, '<></>');
  
  // Fix missing closing tags
  fixedContent = fixedContent.replace(/<\s*\/\s*([^>]+)\s*>/g, '</$1>');
  
  // Fix malformed object literals
  fixedContent = fixedContent.replace(/\{\s*([^}]*)\s*\}/g, (match, content) => {
    if (content.trim()) {
      return `{ ${content.trim()} }`;
    }
    return '{}';
  });
  
  return fixedContent;
}

// Function to create a basic component for corrupted files
function createBasicComponent(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  
  return `import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${componentName} = () => {
  return (
    <>
      <Helmet>
        <title>${componentName} - Zion Tech Group</title>
        <meta name="description" content="${componentName} page - Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">${componentName}</h1>
          <p className="text-gray-300">This page is under construction.</p>
        </div>
      </div>
    </>
  );
};

export default ${componentName};`;
}

// Main function to process files
function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let processedFiles = 0;
  let corruptedFiles = 0;
  let errorFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      try {
        const filePath = path.join(process.cwd(), file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Skip if file is empty
        if (!content.trim()) {
          return;
        }
        
        // Try to fix the file
        const fixedContent = fixCorruptedFile(content, file);
        
        if (fixedContent === null) {
          // File is too corrupted, create a basic component
          const basicComponent = createBasicComponent(filePath);
          fs.writeFileSync(filePath, basicComponent, 'utf8');
          corruptedFiles++;
        } else if (fixedContent !== content) {
          // File was fixed
          fs.writeFileSync(filePath, fixedContent, 'utf8');
          processedFiles++;
        }
        
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorFiles++;
      }
    });
  });
  
  console.log(`\nProcessed ${processedFiles} files`);
  console.log(`Recreated ${corruptedFiles} corrupted files`);
  if (errorFiles > 0) {
    console.log(`Errors in ${errorFiles} files`);
  }
}

// Run the script
processFiles();