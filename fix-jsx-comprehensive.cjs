const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common JSX syntax issues
    content = content
      // Fix broken class names (missing spaces)
      .replace(/className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g, 'className="$1$2 $3$4"')
      .replace(/className="([^"]*?)([a-z])([0-9])([^"]*?)"/g, 'className="$1$2 $3$4"')
      .replace(/className="([^"]*?)([0-9])([a-zA-Z])([^"]*?)"/g, 'className="$1$2 $3$4"')
      
      // Fix broken array syntax
      .replace(/const\s+(\w+)\s*=\s*\[\s*$/gm, 'const $1 = [')
      .replace(/}\s*,\s*$/gm, '},')
      .replace(/}\s*\]\s*$/gm, '}]')
      
      // Fix malformed JSX elements
      .replace(/<(\w+)([^>]*?)([a-z])([A-Z])([^>]*?)>/g, '<$1$2$3 $4$5>')
      .replace(/<(\w+)([^>]*?)([a-z])([0-9])([^>]*?)>/g, '<$1$2$3 $4$5>')
      
      // Fix broken object syntax
      .replace(/{\s*title:\s*'([^']*)',\s*description:\s*'([^']*)'\s*},/g, '{ title: \'$1\', description: \'$2\' },')
      
      // Fix malformed regex patterns in JSX
      .replace(/className="\[[^\]]*\]"/g, 'className="flex items-center"')
      
      // Fix broken closing tags
      .replace(/<\/\s*(\w+)\s*>/g, '</$1>')
      
      // Fix missing spaces in JSX attributes
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([a-z])([0-9])/g, '$1 $2')
      .replace(/([0-9])([a-zA-Z])/g, '$1 $2')
      
      // Fix broken array declarations
      .replace(/const\s+(\w+)\s*=\s*\[\s*$/gm, 'const $1 = [')
      .replace(/}\s*,\s*$/gm, '},')
      .replace(/}\s*\]\s*$/gm, '}]')
      
      // Fix broken JSX elements with missing spaces
      .replace(/<div([^>]*?)([a-z])([A-Z])([^>]*?)>/g, '<div$1$2 $3$4>')
      .replace(/<div([^>]*?)([a-z])([0-9])([^>]*?)>/g, '<div$1$2 $3$4>')
      
      // Fix broken className attributes
      .replace(/className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g, 'className="$1$2 $3$4"')
      .replace(/className="([^"]*?)([a-z])([0-9])([^"]*?)"/g, 'className="$1$2 $3$4"')
      
      // Fix malformed regex patterns
      .replace(/className="\[[^\]]*\]"/g, 'className="flex items-center"')
      
      // Fix broken closing tags
      .replace(/<\/\s*(\w+)\s*>/g, '</$1>')
      
      // Fix missing spaces in JSX attributes
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([a-z])([0-9])/g, '$1 $2')
      .replace(/([0-9])([a-zA-Z])/g, '$1 $2');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  try {
    // Find all TypeScript/JavaScript files in the app directory
    const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });
    
    console.log(`Found ${files.length} files to process...`);
    
    let fixedCount = 0;
    for (const file of files) {
      if (await fixFile(file)) {
        fixedCount++;
      }
    }
    
    console.log(`Fixed ${fixedCount} files.`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();