#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TSX files
const tsxFiles = execSync('find . -name "*.tsx" -not -path "./node_modules/*" -not -path "./dist/*" | head -100', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file);

console.log(`Found ${tsxFiles.length} TSX files to check`);

function fixJSXClosingTags(content) {
  let fixed = content;
  
  // Fix missing closing > in JSX tags
  // Pattern: <TagName followed by newline or whitespace without >
  fixed = fixed.replace(/<(\w+)([^>]*?)(?<!\s\/)\s*$/gm, '<$1$2>');
  
  // Fix specific common patterns
  fixed = fixed.replace(/<ErrorBoundary\s*$/gm, '<ErrorBoundary>');
  fixed = fixed.replace(/<HelmetProvider\s*$/gm, '<HelmetProvider>');
  fixed = fixed.replace(/<Router\s*$/gm, '<Router>');
  fixed = fixed.replace(/<Routes\s*$/gm, '<Routes>');
  fixed = fixed.replace(/<Suspense\s*$/gm, '<Suspense>');
  fixed = fixed.replace(/<main\s*$/gm, '<main>');
  fixed = fixed.replace(/<div\s*$/gm, '<div>');
  fixed = fixed.replace(/<section\s*$/gm, '<section>');
  fixed = fixed.replace(/<h1\s*$/gm, '<h1>');
  fixed = fixed.replace(/<h2\s*$/gm, '<h2>');
  fixed = fixed.replace(/<h3\s*$/gm, '<h3>');
  fixed = fixed.replace(/<h4\s*$/gm, '<h4>');
  fixed = fixed.replace(/<h5\s*$/gm, '<h5>');
  fixed = fixed.replace(/<h6\s*$/gm, '<h6>');
  fixed = fixed.replace(/<p\s*$/gm, '<p>');
  fixed = fixed.replace(/<span\s*$/gm, '<span>');
  fixed = fixed.replace(/<button\s*$/gm, '<button>');
  fixed = fixed.replace(/<ul\s*$/gm, '<ul>');
  fixed = fixed.replace(/<li\s*$/gm, '<li>');
  fixed = fixed.replace(/<React\.Fragment\s*$/gm, '<React.Fragment>');
  
  // Fix missing closing > in self-closing tags
  fixed = fixed.replace(/<(\w+)([^>]*?)\s*$/gm, (match, tagName, attributes) => {
    if (attributes.includes('/')) return match; // Already self-closing
    if (tagName.toLowerCase() === 'img' || tagName.toLowerCase() === 'br' || tagName.toLowerCase() === 'hr') {
      return match + '/>'; // Self-closing tags
    }
    return match + '>'; // Regular tags
  });
  
  return fixed;
}

let processedCount = 0;
let errorCount = 0;

for (const filePath of tsxFiles) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      continue;
    }
    
    const originalContent = fs.readFileSync(filePath, 'utf8');
    let fixedContent = fixJSXClosingTags(originalContent);
    
    // Only write if content changed
    if (fixedContent !== originalContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      processedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    errorCount++;
  }
}

console.log(`\nProcessed ${processedCount} files, ${errorCount} errors`);