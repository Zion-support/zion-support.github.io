#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively find all files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

// Function to fix next/link imports
function fixNextLinkImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix import statements
    if (content.includes("import Link from 'next/link'")) {
      content = content.replace(/import Link from 'next\/link';/g, "import { Link } from 'react-router-dom';");
      modified = true;
    }
    
    if (content.includes('import Link from "next/link"')) {
      content = content.replace(/import Link from "next\/link";/g, 'import { Link } from "react-router-dom";');
      modified = true;
    }

    // Fix default imports
    if (content.includes("import { Link } from 'next/link'")) {
      content = content.replace(/import { Link } from 'next\/link';/g, "import { Link } from 'react-router-dom';");
      modified = true;
    }
    
    if (content.includes('import { Link } from "next/link"')) {
      content = content.replace(/import { Link } from "next\/link";/g, 'import { Link } from "react-router-dom";');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// Main execution
const startDir = process.cwd();
console.log('Fixing next/link imports...');

const allFiles = getAllFiles(startDir);
let fixedCount = 0;

allFiles.forEach(file => {
  if (fixNextLinkImports(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files.`);
console.log('Done!');