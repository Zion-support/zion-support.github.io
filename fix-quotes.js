#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all TypeScript/JSX files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix quotes in a file
function fixQuotes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if it's a script file
    if (filePath.includes('scripts/') || filePath.includes('.js') || filePath.includes('.cjs')) {
      return;
    }
    
    // Only fix if the file has HTML entities
    if (!content.includes('&apos;') && !content.includes('&quot;')) {
      return;
    }
    
    // Fix HTML entities back to normal quotes
    content = content.replace(/&apos;/g, "'");
    content = content.replace(/&quot;/g, '"');
    
    // Fix double semicolons
    content = content.replace(/;;/g, ';');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed quotes in: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting quote fix...');

const appDir = path.join(__dirname, 'app');
const files = getAllTsxFiles(appDir);

console.log(`Found ${files.length} files to process`);

files.forEach(file => {
  fixQuotes(file);
});

console.log('Quote fixing completed!');