#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix broken JSX structure
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix self-closing divs that should contain content
  fixed = fixed.replace(
    /<div([^>]*?)><\/div>\s*([^<]+)/g,
    (match, attributes, content) => {
      return `<div${attributes}>${content}`;
    }
  );
  
  // Fix broken component structure - remove malformed exports
  fixed = fixed.replace(
    /export default function Wrapped\(props\) \{\s*return \(\s*<ErrorBoundary>\s*<Component \{\s*\.\.\.props\s*\} \/>\s*<\/ErrorBoundary>\s*\);\s*\}/g,
    ''
  );
  
  // Fix broken JSX where elements are outside their containers
  const lines = fixed.split('\n');
  let result = [];
  let inBrokenStructure = false;
  let braceCount = 0;
  let currentComponent = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip empty lines and comments
    if (line.trim() === '' || line.trim().startsWith('//') || line.trim().startsWith('/*')) {
      result.push(line);
      continue;
    }
    
    // Detect start of component
    if (line.includes('function Page()') || line.includes('export default function')) {
      inBrokenStructure = true;
      currentComponent = line;
      result.push(line);
      continue;
    }
    
    if (inBrokenStructure) {
      // Count braces to detect end of component
      for (const char of line) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
      }
      
      // If we've closed all braces, we're done with the component
      if (braceCount <= 0 && line.includes('}')) {
        inBrokenStructure = false;
        braceCount = 0;
        result.push(line);
        continue;
      }
      
      // Fix JSX structure within component
      if (line.includes('<div') && line.includes('></div>') && i + 1 < lines.length) {
        const nextLine = lines[i + 1];
        if (nextLine.trim() && !nextLine.trim().startsWith('<')) {
          // This div should contain the next line
          const fixedLine = line.replace('></div>', '>');
          result.push(fixedLine);
          continue;
        }
      }
      
      // Fix misplaced closing tags
      if (line.includes('</div>') && !line.includes('<div')) {
        // This might be a misplaced closing tag, check if it should be moved
        if (i > 0 && result[result.length - 1].includes('<div') && !result[result.length - 1].includes('</div>')) {
          // Move this closing tag to the previous line
          result[result.length - 1] += '</div>';
          continue;
        }
      }
      
      result.push(line);
    } else {
      result.push(line);
    }
  }
  
  return result.join('\n');
}

// Function to fix specific JSX patterns
function fixJSXPatterns(content) {
  let fixed = content;
  
  // Fix patterns like <div></div> followed by content
  fixed = fixed.replace(
    /<div([^>]*?)><\/div>\s*([^<]+?)(?=<div|<section|<main|<footer|$)/gs,
    (match, attributes, content) => {
      return `<div${attributes}>${content.trim()}`;
    }
  );
  
  // Fix patterns where closing tags are on separate lines
  fixed = fixed.replace(
    /<div([^>]*?)>\s*\n\s*([^<]+?)\s*\n\s*<\/div>/gs,
    (match, attributes, content) => {
      return `<div${attributes}>${content.trim()}</div>`;
    }
  );
  
  // Fix broken component returns
  fixed = fixed.replace(
    /return\s*\(\s*<div[^>]*><\/div>\s*([^)]+)/g,
    (match, content) => {
      return `return (\n    <div className="min-h-screen bg-white">\n      ${content.trim()}\n    </div>\n  )`;
    }
  );
  
  return fixed;
}

// Function to clean up malformed exports
function cleanExports(content) {
  let fixed = content;
  
  // Remove malformed export statements
  fixed = fixed.replace(
    /export default function Wrapped[^}]+}/g,
    ''
  );
  
  // Fix broken component structure
  fixed = fixed.replace(
    /<Component \{\s*\.\.\.props\s*\} \/>/g,
    '<Component {...props} />'
  );
  
  return fixed;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    content = fixJSXStructure(content);
    content = fixJSXPatterns(content);
    content = cleanExports(content);
    
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