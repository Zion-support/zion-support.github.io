#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed JSX closing tags
    if (content.includes('< />')) {
      content = content.replace(/< \/>/g, '</div>');
      modified = true;
    }
    
    // Fix malformed JSX fragments
    if (content.includes('<>') && !content.includes('</>')) {
      content = content.replace(/<>/g, '<div>');
      content = content.replace(/<\/>/g, '</div>');
      modified = true;
    }
    
    // Fix missing closing tags by counting opening and closing divs
    const openDivs = (content.match(/<div/g) || []).length;
    const closeDivs = (content.match(/<\/div>/g) || []).length;
    
    if (openDivs > closeDivs) {
      const missingDivs = openDivs - closeDivs;
      // Add missing closing divs before the last closing brace
      const lastBraceIndex = content.lastIndexOf('}');
      if (lastBraceIndex > 0) {
        const beforeBrace = content.substring(0, lastBraceIndex);
        const afterBrace = content.substring(lastBraceIndex);
        const missingDivsStr = '</div>'.repeat(missingDivs);
        content = beforeBrace + missingDivsStr + afterBrace;
        modified = true;
      }
    }
    
    // Fix malformed Helmet tags
    if (content.includes('<Helmet>') && !content.includes('</Helmet>')) {
      content = content.replace(/<Helmet>/g, '<div>');
      content = content.replace(/<\/Helmet>/g, '</div>');
      modified = true;
    }
    
    // Fix other common JSX issues
    if (content.includes('</Helmet>') && !content.includes('<Helmet>')) {
      content = content.replace(/<\/Helmet>/g, '</div>');
      modified = true;
    }
    
    if (modified) {
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
  // Find all TypeScript/JavaScript files in app directory
  const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

  console.log(`Found ${files.length} files to process...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);