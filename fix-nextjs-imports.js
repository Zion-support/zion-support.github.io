#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to recursively find all TypeScript/TSX files
function findTsFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findTsFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix Next.js imports
function fixNextJsImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Replace Next.js imports with React Router equivalents
    const replacements = [
      {
        from: /import Link from 'next\/link';/g,
        to: "import { Link } from 'react-router-dom';"
      },
      {
        from: /import Image from 'next\/image'/g,
        to: "import { useState } from 'react'; // Replaced next/image with useState for now"
      },
      {
        from: /import Head from 'next\/head';/g,
        to: "import { Helmet } from 'react-helmet-async';"
      },
      {
        from: /import { Metadata } from 'next';/g,
        to: "// Removed Next.js Metadata import"
      },
      {
        from: /import { Inter } from 'next\/font\/google';/g,
        to: "// Removed Next.js font import"
      },
      {
        from: /import { MetadataRoute } from 'next'/g,
        to: "// Removed Next.js MetadataRoute import"
      }
    ];
    
    replacements.forEach(({ from, to }) => {
      if (from.test(content)) {
        content = content.replace(from, to);
        modified = true;
      }
    });
    
    // Fix useEffect import issues
    if (content.includes('useEffect') && !content.includes("import { useEffect }")) {
      if (content.includes("import React")) {
        content = content.replace(
          /import React from 'react';/g,
          "import React, { useEffect } from 'react';"
        );
        modified = true;
      }
    }
    
    // Fix useState import issues
    if (content.includes('useState') && !content.includes("import { useState }")) {
      if (content.includes("import React")) {
        content = content.replace(
          /import React from 'react';/g,
          "import React, { useState } from 'react';"
        );
        modified = true;
      }
    }
    
    if (modified) {
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
console.log('Fixing Next.js imports in TypeScript files...');

const tsFiles = findTsFiles('./app');
let fixedCount = 0;

tsFiles.forEach(file => {
  if (fixNextJsImports(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);