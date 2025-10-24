#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix empty lines in JSX that break the structure
    const originalContent = content;
    
    // Remove empty lines that are just whitespace
    content = content.replace(/^\s*$/gm, '');
    
    // Fix malformed JSX structure
    content = content.replace(/\s*<Head>\s*\n\s*<title>([^<]*)<\/title>\s*\n\s*<meta[^>]*\/>\s*\n\s*<meta[^>]*\/>\s*\n\s*<meta[^>]*\/>\s*\n\s*<meta[^>]*\/>\s*\n\s*<meta[^>]*\/>\s*\n\s*<\/Head>/g, 
      (match, title) => {
        return `<Head>
        <title>${title}</title>
        <meta name="description" content="Professional services and solutions for modern businesses." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="Professional services and solutions for modern businesses." />
      </Head>`;
      }
    );

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
}

function main() {
  console.log('Starting JSX structure fixes...');
  
  // Get all TypeScript/TSX files
  const files = glob.sync('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', '.next/**', 'dist/**']
  });

  let fixedCount = 0;
  let totalFiles = files.length;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
  console.log('JSX structure fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };