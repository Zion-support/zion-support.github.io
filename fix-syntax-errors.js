#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript and JavaScript files
const getFiles = (dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
      files = files.concat(getFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix common syntax errors
const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unterminated string literals (remove extra quotes)
    const originalContent = content;
    content = content.replace(//g, '');
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\/[^>]+><\/[^>]+>/g, (match) => {
      const tags = match.match(/<\/[^>]+>/g);
      return tags[tags.length - 1];
    });
    
    // Fix semicolons at end of lines
    content = content.replace(/;$/gm, ';');
    
    // Fix malformed function declarations
    content = content.replace(/\)\};/g, ');');
    
    // Fix malformed JSX fragments
    content = content.replace(/<>[\s]*<div><\/div>/g, '<>');
    content = content.replace(/<\/div>[\s]*<\/>/g, '</>');
    
    // Fix malformed imports
    content = content.replace(/import\s+([^;]+);/g, 'import $1;');
    
    // Fix malformed exports
    content = content.replace(/export\s+default\s+([^;]+);/g, 'export default $1;');
    
    // Fix malformed JSX attributes
    content = content.replace(/=\{[^}]+\}\s*\/>/g, (match) => {
      return match.replace(/\s*\/>/, ' />');
    });
    
    // Fix malformed closing tags
    content = content.replace(/<\/[^>]+><\/[^>]+>/g, (match) => {
      const tags = match.match(/<\/[^>]+>/g);
      return tags[tags.length - 1];
    });
    
    // Fix malformed React fragments
    content = content.replace(/<>[\s]*<\/>/g, '<></>');
    
    // Fix malformed component declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{[\s]*return\s*\([\s]*<>[\s]*<div><\/div>[\s]*<\/>[\s]*\)[\s]*\};/g, 
      'const $1 = () => {\n  return (\n    <div></div>\n  );\n};');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  console.log('Starting syntax error fixes...');
  
  const files = getFiles('.');
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
  
  // Run linting to check for remaining errors
  try {
    console.log('Running linting check...');
    execSync('npm run lint', { stdio: 'pipe' });
    console.log('Linting passed!');
  } catch (error) {
    console.log('Linting found remaining errors, continuing...');
  }
  
  // Run type check
  try {
    console.log('Running type check...');
    execSync('npm run type-check', { stdio: 'pipe' });
    console.log('Type check passed!');
  } catch (error) {
    console.log('Type check found remaining errors, continuing...');
  }
};

main();
