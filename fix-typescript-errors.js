#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix malformed onClick handlers
function fixOnClickHandlers(content) {
  // Fix patterns like onClick={() = aria-label="Button"> ...}
  return content.replace(
    /onClick=\{\(\)\s*=\s*aria-label="[^"]*">\s*([^}]+)\}/g,
    (match, handler) => {
      return `onClick={() => ${handler.trim()}}`;
    }
  );
}

// Function to fix malformed component exports
function fixComponentExports(content) {
  // Fix patterns like < {...props} />
  return content.replace(
    /<\s*\{\s*\.\.\.props\s*\}\s*\/>/g,
    '<Component {...props} />'
  );
}

// Function to fix broken JSX structure
function fixJSXStructure(content) {
  // Fix patterns where JSX is broken in the middle of components
  const lines = content.split('\n');
  let fixed = [];
  let inBrokenExport = false;
  let braceCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detect start of broken export
    if (line.includes('export default function Wrapped') && !line.includes('{')) {
      inBrokenExport = true;
      continue; // Skip this line
    }
    
    if (inBrokenExport) {
      // Count braces to detect end of broken export
      for (const char of line) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
      }
      
      // If we've closed all braces, we're done with the broken export
      if (braceCount <= 0 && line.includes('}')) {
        inBrokenExport = false;
        braceCount = 0;
        continue; // Skip this line
      }
      
      // Skip all lines in the broken export
      continue;
    }
    
    fixed.push(line);
  }
  
  return fixed.join('\n');
}

// Function to fix specific syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix malformed aria-label attributes
  fixed = fixed.replace(
    /aria-label="[^"]*">\s*([^}]+)\}/g,
    (match, handler) => {
      return `aria-label="Button" onClick={() => ${handler.trim()}}`;
    }
  );
  
  // Fix missing closing tags
  fixed = fixed.replace(/(<div[^>]*>)(?!.*<\/div>)/g, (match) => {
    if (!match.includes('</div>')) {
      return match + '</div>';
    }
    return match;
  });
  
  return fixed;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    content = fixOnClickHandlers(content);
    content = fixComponentExports(content);
    content = fixJSXStructure(content);
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