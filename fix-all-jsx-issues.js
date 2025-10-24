#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to completely fix JSX issues in a file
function fixAllJSXIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove any BOM or hidden characters
    content = content.replace(/^\uFEFF/, '');
    
    // Ensure proper line endings
    content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    
    // Fix the file structure completely
    if (content.includes('export default function')) {
      // Extract the function name
      const functionMatch = content.match(/export default function (\w+)/);
      if (functionMatch) {
        const functionName = functionMatch[1];
        
        // Create a proper file structure
        let newContent = '';
        
        // Add 'use client' if not present
        if (!content.includes("'use client';")) {
          newContent += "'use client';\n";
        } else {
          newContent += "'use client';\n";
        }
        
        // Add React import
        newContent += "import React from 'react';\n";
        
        // Add other necessary imports
        if (content.includes('<Head>') && !content.includes("import Head from 'next/head'")) {
          newContent += "import Head from 'next/head';\n";
        }
        if (content.includes('<Link') && !content.includes("import Link from 'next/link'")) {
          newContent += "import Link from 'next/link';\n";
        }
        if (content.includes('ArrowRight') && !content.includes("import { ArrowRight }")) {
          newContent += "import { ArrowRight } from 'lucide-react';\n";
        }
        if (content.includes('Footer') && !content.includes("import Footer from")) {
          newContent += "import Footer from '../components/Footer';\n";
        }
        
        newContent += "\n";
        
        // Extract the function body
        const functionStart = content.indexOf('export default function');
        const functionBody = content.substring(functionStart);
        
        // Clean up the function body
        let cleanFunctionBody = functionBody
          .replace(/export default function \w+\(\)\s*{/, `export default function ${functionName}() {`)
          .replace(/\s*return\s*\(\s*/, '\n  return (\n    ')
          .replace(/\s*\);\s*}\s*$/, '\n  );\n}');
        
        // Fix JSX structure
        cleanFunctionBody = cleanFunctionBody
          .replace(/<div>\s*<\/>/g, '<div></div>')
          .replace(/<\/div>\s*<\/>/g, '</div>')
          .replace(/<>(\s*<div[^>]*>)/g, '$1')
          .replace(/(<\/div>)\s*<\/>/g, '$1');
        
        newContent += cleanFunctionBody;
        
        // Only replace if there are actual changes
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TSX files in the app directory
const pattern = 'app/**/*.tsx';
const files = glob.sync(pattern);

console.log(`Found ${files.length} TSX files to process`);

let fixedCount = 0;
files.forEach(file => {
  if (fixAllJSXIssues(file)) {
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`Fixed ${fixedCount} files`);