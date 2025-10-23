#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to process a file
function processFile(filePath) {
  try {
    let _content = fs.readFileSync(filePath, 'utf8');
    let _modified = false;

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
    const _openDivs = (content.match(/<div/g) || []).length;
    const _closeDivs = (content.match(/<\/div>/g) || []).length;

    if (openDivs > closeDivs) {
      const _missingDivs = openDivs - closeDivs;
      // Add missing closing divs before the last closing brace
      const _lastBraceIndex = content.lastIndexOf('}');
      if (lastBraceIndex > 0) {
        const _beforeBrace = content.substring(0, lastBraceIndex);
        const _afterBrace = content.substring(lastBraceIndex);
        const _missingDivsStr = '</div>'.repeat(missingDivs);
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
  const _files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

  let _fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });

}

main().catch(console.error);
