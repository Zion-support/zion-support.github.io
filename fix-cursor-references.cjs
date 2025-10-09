const fs = require('fs');

// List of pages to fix
const pagesToFix = [
  'app/gdpr/page.tsx',
  'app/support/page.tsx',
  'app/docs/page.tsx',
  'app/developer-tools/page.tsx',
  'app/system-status/page.tsx',
  'app/status/page.tsx',
  'app/security/page.tsx',
  'app/news/page.tsx'
];

function fixPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove cursor references
    content = content.replace(/cursor\/[^\s]*/g, '');
    
    // Clean up any empty lines that might be left
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all pages
pagesToFix.forEach(fixPage);

console.log('All cursor references fixed!');
