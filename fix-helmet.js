const fs = require('fs');
const path = require('path');

// Function to replace Helmet with Next.js Head
function fixHelmet(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Replace Helmet import with Next.js Head
    if (content.includes("import { Helmet } from 'react-helmet-async';")) {
      content = content.replace(
        "import { Helmet } from 'react-helmet-async';",
        "import Head from 'next/head';"
      );
      fixed = true;
    }
    
    // Replace Helmet component with Head
    if (content.includes('<Helmet>')) {
      content = content.replace(/<Helmet>/g, '<Head>');
      content = content.replace(/<\/Helmet>/g, '</Head>');
      fixed = true;
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed Helmet: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to find all page files
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix all page files
const appDir = './app';
const files = findPageFiles(appDir);

console.log(`Found ${files.length} page files to fix...`);

files.forEach(fixHelmet);

console.log('Done fixing Helmet!');