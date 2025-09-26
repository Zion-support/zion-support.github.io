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

// Function to fix React Router Link usage
function fixReactRouterLinks(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Replace href with to in Link components
    if (content.includes('<Link') && content.includes('href=')) {
      // Replace href with to in Link components
      content = content.replace(/<Link\s+([^>]*?)href=/g, '<Link $1to=');
      modified = true;
    }
    
    // Fix remaining Next.js imports
    const replacements = [
      {
        from: /import Link from 'next\/link';/g,
        to: "import { Link } from 'react-router-dom';"
      },
      {
        from: /import Head from 'next\/head';/g,
        to: "import { Helmet } from 'react-helmet-async';"
      },
      {
        from: /import type { Metadata } from 'next';/g,
        to: "// Removed Next.js Metadata import"
      },
      {
        from: /import { Metadata } from 'next';/g,
        to: "// Removed Next.js Metadata import"
      },
      {
        from: /import { MetadataRoute } from 'next'/g,
        to: "// Removed Next.js MetadataRoute import"
      },
      {
        from: /export const metadata: Metadata = {/g,
        to: "// Removed Next.js metadata export"
      },
      {
        from: /export default function sitemap\(\): MetadataRoute\.Sitemap {/g,
        to: "export default function sitemap() {"
      }
    ];
    
    replacements.forEach(({ from, to }) => {
      if (from.test(content)) {
        content = content.replace(from, to);
        modified = true;
      }
    });
    
    // Fix Inter font usage
    if (content.includes('Inter({')) {
      content = content.replace(/const inter = Inter\(\{ subsets: \['latin'\] \}\);/g, '// Removed Next.js font');
      modified = true;
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
console.log('Fixing React Router Link usage...');

const tsFiles = findTsFiles('./app');
let fixedCount = 0;

tsFiles.forEach(file => {
  if (fixReactRouterLinks(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);