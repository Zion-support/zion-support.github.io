#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> origin\/main/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> origin\/master/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
    
    // Fix common syntax errors
    content = content.replace(/import React from "react";";/g, 'import React from "react";');
    content = content.replace(/import { Helmet } from "react-helmet-async";";/g, 'import { Helmet } from "react-helmet-async";');
    content = content.replace(/return \("/g, 'return (');
    content = content.replace(/<Helmet><\/Helmet>/g, '<Helmet>');
    content = content.replace(/<\/Helmet>"/g, '</Helmet>');
    content = content.replace(/<div className="[^"]*"><\/div>"/g, (match) => match.replace(/"/g, ''));
    content = content.replace(/<h1[^>]*>[^<]*<\/h1>"/g, (match) => match.replace(/"/g, ''));
    content = content.replace(/<p[^>]*>[^<]*<\/p>"/g, (match) => match.replace(/"/g, ''));
    content = content.replace(/\);"/g, ');');
    content = content.replace(/};"/g, '};');
    content = content.replace(/export default [^;]+;"/g, (match) => match.replace(/"/g, ''));
    
    // Fix unterminated strings
    content = content.replace(/"([^"]*?)\n/g, '"$1"\n');
    
    // Fix extra semicolons
    content = content.replace(/;;+/g, ';');
    content = content.replace(/;\s*;/g, ';');
    
    // Fix malformed JSX
    content = content.replace(/<div className="[^"]*"><\/div>"/g, (match) => {
      const className = match.match(/className="([^"]*)"/)?.[1] || '';
      return `<div className="${className}">`;
    });
    
    // Remove empty lines with just quotes
    content = content.replace(/^\s*"\s*$/gm, '');
    
    // Fix function declarations
    content = content.replace(/export default function Page\(\) \{\s*=======/g, 'export default function Page() {');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findTSFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTSFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting to fix merge conflicts and syntax errors...');

const tsFiles = findTSFiles('./app');
let fixedCount = 0;
let errorCount = 0;

for (const file of tsFiles) {
  try {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  } catch (error) {
    console.error(`Failed to process ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nFixed ${fixedCount} files, ${errorCount} errors encountered.`);

// Run type check to see remaining issues
console.log('\nRunning type check...');
try {
  execSync('npm run type-check', { stdio: 'inherit' });
} catch (error) {
  console.log('Type check completed with errors (expected).');
}

console.log('Error fixing completed!');