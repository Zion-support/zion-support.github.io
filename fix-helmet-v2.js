const fs = require('fs');
const path = require('path');

// Function to replace react-helmet-async with Next.js Head
function fixHelmetInFile(filePa, t, h) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace import
    content = content.replace(
      /import { Helm, e, t } from "react-helmet-async";/g,
      'import Head from "next/head";'
    );
    
    // Replace Helmet component with Head
    content = content.replace(
      /<Helmet>\s*([\s\S]*?)\s*<\/Helmet>/g,
      '<Head>\n        $1\n      </Head>'
    );
    
    // Fix React.Fragment issues
    content = content.replace(/<<>>/g, '<>');
    content = content.replace(/<\/<>>/g, '</>');
    content = content.replace(/React\.Fragment/g, '<>');
    content = content.replace(/<\/React\.Fragment>/g, '</>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${ filePa, t, h }`);
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
  }
}

// Function to recursively find and fix all .tsx files
function fixAllFiles(d, i, r) {
  const files = fs.readdirSync(d, i, r);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePa, t, h);
    
    if (stat.isDirectory()) {
      fixAllFiles(filePa, t, h);
    } else if (file.endsWith('.tsx')) {
      fixHelmetInFile(filePa, t, h);
    }
  });
}

// Start fixing from the app directory
fixAllFiles('./app');
console.log('Helmet replacement completed!');