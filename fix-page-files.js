import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix import statements with extra semicolons and quotes
    content = content.replace(/import React from 'react';';';/g, "import React from 'react';");
    content = content.replace(/import { Helmet } from 'react-helmet-async';';';/g, "import { Helmet } from 'react-helmet-async';");
    
    // Fix JSX attributes with extra quotes and semicolons
    content = content.replace(/content="([^"]*)" \/>";";/g, 'content="$1" />');
    content = content.replace(/className="([^"]*)" \/>";";/g, 'className="$1" />');
    content = content.replace(/className="([^"]*)" \/>";"/g, 'className="$1" />');
    
    // Fix closing tags with extra quotes and semicolons
    content = content.replace(/<\/div>";"/g, '</div>');
    content = content.replace(/<\/h1>";"/g, '</h1>');
    content = content.replace(/<\/p>";"/g, '</p>');
    content = content.replace(/<\/div>";"<\/div>/g, '</div></div>');
    
    // Fix any remaining stray quotes and semicolons in JSX
    content = content.replace(/";"/g, '');
    content = content.replace(/";/g, '');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all page.tsx files
const appDir = path.join(__dirname, 'app');
const pageFiles = [];

function findPageFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findPageFiles(filePath);
    } else if (file === 'page.tsx') {
      pageFiles.push(filePath);
    }
  }
}

// Find all page files
findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files to fix`);

let fixedCount = 0;
let errorCount = 0;

// Fix each page file
for (const filePath of pageFiles) {
  if (fixPageFile(filePath)) {
    fixedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\nFixed: ${fixedCount} files`);
console.log(`Errors: ${errorCount} files`);