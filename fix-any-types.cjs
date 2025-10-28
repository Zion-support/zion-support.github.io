const fs = require('fs');
const path = require('path');

// Find all page.tsx files that have the any type warning
const glob = require('glob');

const files = glob.sync('app/**/page.tsx');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace any type with proper interface
    if (content.includes('props: any')) {
      content = content.replace(
        'props: any',
        'props: Record<string, any>'
      );
    }
    
    // Also fix the function signature
    if (content.includes('function Wrapped(props: any)')) {
      content = content.replace(
        'function Wrapped(props: any)',
        'function Wrapped(props: Record<string, any>)'
      );
    }
    
    if (content.includes('export default function Wrapped(props: any)')) {
      content = content.replace(
        'export default function Wrapped(props: any)',
        'export default function Wrapped(props: Record<string, any>)'
      );
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

console.log('Fixing any types...');
files.forEach(fixFile);
console.log('Done!');