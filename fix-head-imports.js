const fs = require('fs');
const path = require('path');

function fixHeadImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file uses Head from next/head
    if (content.includes('import Head from "next/head"') || content.includes("import Head from 'next/head'")) {
      console.log(`Fixing ${filePath}`);
      
      // Remove "use client" if present
      content = content.replace(/^"use client"\n/, '');
      
      // Remove Head import
      content = content.replace(/import Head from ["']next\/head["'];\n?/g, '');
      
      // Extract title and description from Head component
      const titleMatch = content.match(/<title>([^<]*)<\/title>/);
      const descMatch = content.match(/<meta name="description" content="([^"]*)" \/>/);
      const ogTitleMatch = content.match(/<meta property="og:title" content="([^"]*)" \/>/);
      const ogDescMatch = content.match(/<meta property="og:description" content="([^"]*)" \/>/);
      
      const title = titleMatch ? titleMatch[1].replace(/\|/g, '|').trim() : 'Zion Tech Group';
      const description = descMatch ? descMatch[1] : 'Professional services and solutions for modern businesses.';
      const ogTitle = ogTitleMatch ? ogTitleMatch[1].replace(/\|/g, '|').trim() : title;
      const ogDescription = ogDescMatch ? ogDescMatch[1] : description;
      
      // Remove the entire Head component and its content
      content = content.replace(/<Head>[\s\S]*?<\/Head>/g, '');
      
      // Add metadata export after imports
      const metadataExport = `\nexport const metadata = {
  title: "${title}",
  description: "${description}",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "${ogTitle}",
    description: "${ogDescription}",
  },
};

`;
      
      // Find the position after the last import
      const lastImportIndex = content.lastIndexOf('import ');
      const nextLineAfterImport = content.indexOf('\n', lastImportIndex);
      const insertPosition = nextLineAfterImport + 1;
      
      content = content.slice(0, insertPosition) + metadataExport + content.slice(insertPosition);
      
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      fixedCount += processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixHeadImports(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting to fix Head imports...');
const fixedCount = processDirectory('./app');
console.log(`Fixed ${fixedCount} files`);