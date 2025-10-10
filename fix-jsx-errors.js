#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to process a file
function processFile(filePath) {
  try {

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

    if (openDivs > closeDivs) {
      // Add missing closing divs before the last closing brace
      if (lastBraceIndex > 0) {
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

      return true;
    }

    return false;
  } catch (error) {

    return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/JavaScript files in app directory

  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });

}

main().catch(console.error);
