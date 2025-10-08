#!/usr/bin/env node

import fs from 'fs';

// List of files that need type error fixes
const filesToFix = [
  '/workspace/app/blog/ai-autonomous-business-systems-2026/page.tsx',
  '/workspace/app/blog/ai-cost-optimization-breakthrough-2026/page.tsx',
  '/workspace/app/components/OptimizedImage.tsx',
  '/workspace/app/components/UnifiedContentPromotion.tsx',
  '/workspace/app/not-found.tsx',
  '/workspace/app/page-optimized.tsx'
];

// console.log(`Fixing ${filesToFix.length} files with type errors`);

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix <a> tags with 'to' prop to use Link components
    if (content.includes('<a') && content.includes('to=')) {
      // Add Link import if not present
      if (!content.includes("import { Link } from 'react-router-dom';")) {
        content = content.replace(/import React from 'react';/, "import React from 'react';\nimport { Link } from 'react-router-dom';");
        modified = true;
      }
      
      // Replace <a> tags with to prop to <Link> components
      content = content.replace(/<a\s+to=/g, '<Link to=');
      content = content.replace(/<\/a>/g, '</Link>');
      modified = true;
    }
    
    // Fix href to to for Link components
    if (content.includes('<Link') && content.includes('href=')) {
      content = content.replace(/href=/g, 'to=');
      modified = true;
    }
    
    // Fix dynamic imports from Next.js to React lazy
    if (content.includes('dynamic(')) {
      // Add lazy import if not present
      if (!content.includes("import { lazy } from 'react';")) {
        content = content.replace(/import React from 'react';/, "import React, { lazy } from 'react';");
        modified = true;
      }
      
      // Replace dynamic() with lazy()
      content = content.replace(/dynamic\(/g, 'lazy(');
      modified = true;
    }
    
    // Fix Image component issues
    if (content.includes('next/image')) {
      // Replace Next.js Image with regular img tag
      content = content.replace(/import Image from 'next\/image';/g, '');
      content = content.replace(/<Image/g, '<img');
      content = content.replace(/<\/Image>/g, '</img>');
      content = content.replace(/src={/g, 'src={');
      content = content.replace(/alt={/g, 'alt={');
      content = content.replace(/width={/g, 'width={');
      content = content.replace(/height={/g, 'height={');
      content = content.replace(/className={/g, 'className={');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      // console.log(`✓ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    // console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Process all files
let fixedCount = 0;
filesToFix.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

// console.log(`\nFixed ${fixedCount} out of ${filesToFix.length} files`);