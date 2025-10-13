#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common JSX syntax errors
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix unclosed JSX elements by adding proper closing tags
  // This is a simplified approach - in practice, you'd want more sophisticated parsing
  
  // Fix common patterns like unclosed divs, sections, etc.
  const openTags = ['div', 'section', 'h1', 'h2', 'h3', 'p', 'span', 'ul', 'li', 'article', 'main', 'header', 'footer'];
  
  for (const tag of openTags) {
    // Look for unclosed tags and try to close them
    const openTagRegex = new RegExp(`<${tag}([^>]*)>`, 'g');
    const closeTagRegex = new RegExp(`</${tag}>`, 'g');
    
    const openMatches = [...fixed.matchAll(openTagRegex)];
    const closeMatches = [...fixed.matchAll(closeTagRegex)];
    
    if (openMatches.length > closeMatches.length) {
      // Add missing closing tags at the end
      const missing = openMatches.length - closeMatches.length;
      for (let i = 0; i < missing; i++) {
        fixed += `</${tag}>`;
      }
    }
  }
  
  // Fix JSX fragments
  fixed = fixed.replace(/<>/g, '<React.Fragment>');
  fixed = fixed.replace(/<\/>/g, '</React.Fragment>');
  
  // Fix common syntax issues
  fixed = fixed.replace(/\{\s*>\s*\}/g, '>');
  fixed = fixed.replace(/\{\s*<\s*\}/g, '<');
  fixed = fixed.replace(/\{\s*\/\s*\}/g, '/');
  
  return fixed;
}

// Function to fix a specific file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all problematic files
function findProblematicFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
const files = findProblematicFiles(workspaceDir);

console.log(`Found ${files.length} JSX files to check for syntax errors...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files.`);