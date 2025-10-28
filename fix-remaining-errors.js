#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix malformed onClick handlers
function fixOnClickHandlers(content) {
  let fixed = content;
  
  // Fix patterns like onClick={() => Get Started
  fixed = fixed.replace(
    /onClick=\{\(\)\s*=>\s*([^}]+?)(?=\s*<|$)/g,
    (match, handler) => {
      // If the handler doesn't end with a closing brace, add it
      if (!handler.trim().endsWith('}')) {
        return `onClick={() => { ${handler.trim()} }}`;
      }
      return match;
    }
  );
  
  // Fix patterns like aria-label="Button" onClick={() => Get Started
  fixed = fixed.replace(
    /aria-label="[^"]*"\s*onClick=\{\(\)\s*=>\s*([^}]+?)(?=\s*<|$)/g,
    (match, handler) => {
      return `aria-label="Button" onClick={() => { ${handler.trim()} }}`;
    }
  );
  
  return fixed;
}

// Function to fix broken JSX structure
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix patterns where JSX elements are not properly closed
  fixed = fixed.replace(
    /<div([^>]*?)>\s*<div([^>]*?)>\s*([^<]+?)(?=<div|<\/div>|$)/gs,
    (match, outerAttrs, innerAttrs, content) => {
      return `<div${outerAttrs}>\n        <div${innerAttrs}>\n          ${content.trim()}\n        </div>`;
    }
  );
  
  // Fix patterns where content is outside of divs
  fixed = fixed.replace(
    /<div([^>]*?)>\s*([^<]+?)\s*<div([^>]*?)>\s*([^<]+?)(?=<div|<\/div>|$)/gs,
    (match, outerAttrs, outerContent, innerAttrs, innerContent) => {
      return `<div${outerAttrs}>\n        ${outerContent.trim()}\n        <div${innerAttrs}>\n          ${innerContent.trim()}\n        </div>`;
    }
  );
  
  return fixed;
}

// Function to fix missing closing tags
function fixMissingClosingTags(content) {
  let fixed = content;
  
  // Fix patterns where divs are not properly closed
  const lines = fixed.split('\n');
  let result = [];
  let openTags = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Count opening and closing div tags
    const openDivs = (line.match(/<div[^>]*>/g) || []).length;
    const closeDivs = (line.match(/<\/div>/g) || []).length;
    
    // Track open tags
    for (let j = 0; j < openDivs; j++) {
      openTags.push('div');
    }
    
    // Remove closed tags
    for (let j = 0; j < closeDivs; j++) {
      if (openTags.length > 0) {
        openTags.pop();
      }
    }
    
    result.push(line);
    
    // If we're at the end of a section and have open tags, close them
    if (i === lines.length - 1 || lines[i + 1].trim().startsWith('</section>') || lines[i + 1].trim().startsWith('</main>')) {
      while (openTags.length > 0) {
        result.push('          </div>');
        openTags.pop();
      }
    }
  }
  
  return result.join('\n');
}

// Function to fix specific syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix patterns where JSX is broken
  fixed = fixed.replace(
    /<button[^>]*>\s*([^<]+?)\s*<ArrowRight[^>]*\/>\s*<\/button>/g,
    (match, buttonText) => {
      return `<button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center" aria-label="Button">\n                ${buttonText.trim()}\n                <ArrowRight className="ml-2 h-5 w-5" />\n              </button>`;
    }
  );
  
  // Fix patterns where content is outside of proper JSX structure
  fixed = fixed.replace(
    /<div([^>]*?)>\s*([^<]+?)\s*<button/g,
    (match, attrs, content) => {
      return `<div${attrs}>\n          ${content.trim()}\n          <button`;
    }
  );
  
  return fixed;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    content = fixOnClickHandlers(content);
    content = fixJSXStructure(content);
    content = fixMissingClosingTags(content);
    content = fixSyntaxErrors(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/TSX files
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} TypeScript files to process...`);

  let fixedCount = 0;
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);