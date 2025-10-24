const fs = require('fs');
const path = require('path');

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't use Head from next/head
    if (!content.includes("import Head from 'next/head'")) {
      return false;
    }
    
    // Extract title and description from Head component
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const descriptionMatch = content.match(/<meta name="description" content="([^"]+)" \/>/);
    const robotsMatch = content.match(/<meta name="robots" content="([^"]+)" \/>/);
    const ogTitleMatch = content.match(/<meta property="og:title" content="([^"]+)" \/>/);
    const ogDescriptionMatch = content.match(/<meta property="og:description" content="([^"]+)" \/>/);
    
    const title = titleMatch ? titleMatch[1] : 'Zion Tech Group';
    const description = descriptionMatch ? descriptionMatch[1] : 'Professional technology solutions';
    const robots = robotsMatch ? robotsMatch[1] : 'index, follow';
    const ogTitle = ogTitleMatch ? ogTitleMatch[1] : title;
    const ogDescription = ogDescriptionMatch ? ogDescriptionMatch[1] : description;
    
    // Remove 'use client' directive if present
    let newContent = content.replace(/'use client'\n/, '');
    
    // Remove Head import
    newContent = newContent.replace(/import Head from 'next\/head'\n/, '');
    
    // Add Metadata import
    if (!newContent.includes("import { Metadata } from 'next'")) {
      newContent = newContent.replace(/import React from 'react'\n/, "import React from 'react'\nimport { Metadata } from 'next'\n");
    }
    
    // Add metadata export
    const metadataExport = `export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
  robots: '${robots}',
  openGraph: {
    type: 'website',
    title: '${ogTitle}',
    description: '${ogDescription}',
  },
}

`;
    
    // Find the export default function line and add metadata before it
    const exportMatch = newContent.match(/(export default function)/);
    if (exportMatch) {
      newContent = newContent.replace(/(export default function)/, metadataExport + '$1');
    }
    
    // Remove the entire Head component and its content
    newContent = newContent.replace(/<Head>[\s\S]*?<\/Head>\s*/, '');
    
    // Remove the React fragment wrapper if it only contains the div
    newContent = newContent.replace(/<>\s*<div/, '<div');
    newContent = newContent.replace(/<\/div>\s*<\/>/, '</div>');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, newContent);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = '/workspace/app';
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
let totalCount = 0;

console.log(`Found ${tsxFiles.length} .tsx files to check...`);

for (const file of tsxFiles) {
  totalCount++;
  if (fixFile(file)) {
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`\nFixed ${fixedCount} out of ${totalCount} files.`);