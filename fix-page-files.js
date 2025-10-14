import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix import statements with extra semicolons and quotes
    content = content.replace(/import React from 'react';';';/g, "import React from 'react';");
    content = content.replace(/import { Helmet } from 'react-helmet-async';';';/g, "import { Helmet } from 'react-helmet-async';");
    
    // Fix JSX with extra quotes and semicolons
    content = content.replace(/\/>";";/g, ' />');
    content = content.replace(/>";";/g, '>');
    content = content.replace(/className="[^"]*">";";/g, (match) => {
      return match.replace(/>";";$/, '>');
    });
    
    // Fix any remaining stray quotes and semicolons
    content = content.replace(/";";/g, '');
    content = content.replace(/";/g, '');
    
    // Fix any merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix all page files
function fixAllPages(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixAllPages(filePath);
    } else if (file.endsWith('.tsx') && file === 'page.tsx') {
      fixFile(filePath);
    }
  }
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
if (fs.existsSync(appDir)) {
  fixAllPages(appDir);
  console.log('All page files have been processed.');
} else {
  console.log('App directory not found.');
}