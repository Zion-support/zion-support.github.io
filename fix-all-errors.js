#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts
function fixMergeConflicts(content) {
  // Remove merge conflict markers and choose the first version
  return content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix object property syntax errors (remove extra semicolons)
  content = content.replace(/(\w+):\s*(\w+),;/g, '$1: $2,');
  content = content.replace(/(\w+):\s*(\w+);/g, '$1: $2,');
  
  // Fix array syntax errors
  content = content.replace(/\[\s*{\s*([^}]+)\s*}\s*,;\s*{/g, '[{ $1 }, {');
  content = content.replace(/\[\s*{\s*([^}]+)\s*}\s*,;\s*]/g, '[{ $1 }]');
  
  // Fix JSX syntax errors
  content = content.replace(/<meta([^>]*)>/g, '<meta$1 />');
  content = content.replace(/<Helmet([^>]*)>/g, '<Helmet$1>');
  
  // Fix missing closing tags
  content = content.replace(/<feature([^>]*)>/g, '<div$1>');
  content = content.replace(/<\/feature>/g, '</div>');
  
  // Fix malformed return statements
  content = content.replace(/return\s*\(\s*<>\s*<\/>\s*\)/g, 'return (\n    <>\n      <Helmet>\n        <title>Page Title</title>\n      </Helmet>\n      <div>Content</div>\n    </>\n  )');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    
    // Fix merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
      fixedContent = fixMergeConflicts(fixedContent);
    }
    
    // Fix syntax errors
    fixedContent = fixSyntaxErrors(fixedContent);
    
    // Only write if content changed
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting error fixing process...');

const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

let fixedCount = 0;
let totalFiles = files.length;

console.log(`Found ${totalFiles} TypeScript/JSX files to process...`);

for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} out of ${totalFiles} files.`);

// Run linting to check for remaining errors
console.log('\nRunning linting to check for remaining errors...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('✅ Linting passed!');
} catch (error) {
  console.log('⚠️  Some linting errors remain, but many have been fixed.');
}

console.log('\nError fixing process completed!');