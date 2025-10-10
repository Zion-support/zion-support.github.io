#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Function to fix JSX syntax errors
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix empty self-closing tags that should have content
    content = content.replace(/<(\w+)([^>]*?)><\/\1>/g, '<$1$2>');
    
    // Fix malformed closing tags like </h> -> </h2>
    content = content.replace(/<\/h>/g, '</h2>');
    content = content.replace(/<\/p>/g, '</p>');
    content = content.replace(/<\/div>/g, '</div>');
    content = content.replace(/<\/section>/g, '</section>');
    
    // Fix tags that have content but are self-closing
    content = content.replace(/<(\w+)([^>]*?)><\/\1>/g, '<$1$2>');
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*<\/>/g, '<></>');
    
    // Fix empty tags with content
    content = content.replace(/<(\w+)([^>]*?)><\/\1>([^<]+)<\/\1>/g, '<$1$2>$3</$1>');
    
    // Fix self-closing tags that should have closing tags
    content = content.replace(/<(\w+)([^>]*?)\s*\/>([^<]+)<\/\1>/g, '<$1$2>$3</$1>');
    
    // Clean up extra whitespace
    content = content.replace(/\s+</g, '<');
    content = content.replace(/>\s+</g, '><');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed JSX syntax in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JSX files
function getTSXFiles() {
  try {
    const output = execSync('find . -name "*.tsx" -o -name "*.ts" | grep -v node_modules | grep -v dist | head -20', { encoding: 'utf8' });
    return output.split('\n').filter(file => file.trim() && fs.existsSync(file.trim()));
  } catch (error) {
    console.error('Error getting TSX files:', error.message);
    return [];
  }
}

console.log('Starting JSX syntax fixes...');

const tsxFiles = getTSXFiles();
console.log(`Found ${tsxFiles.length} TSX files`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  if (fixJSXSyntax(file)) {
    fixedCount++;
  }
});

console.log(`Fixed JSX syntax in ${fixedCount} files`);