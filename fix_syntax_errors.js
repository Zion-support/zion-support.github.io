import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common fixes for TypeScript/JSX syntax errors
const fixes = [
  // Fix missing commas after icon property
  {
    pattern: /icon: '🚀'\n\s+link:/g,
    replacement: "icon: '🚀',\n      link:"
  },
  // Fix malformed br tags
  {
    pattern: /<br <span/g,
    replacement: '<br /> <span'
  },
  // Fix missing commas in object properties
  {
    pattern: /(\w+):\s*'([^']+)'\n\s+(\w+):/g,
    replacement: "$1: '$2',\n      $3:"
  },
  // Fix unterminated string literals in JSX
  {
    pattern: /"([^"]*)\n\s+(\w+):/g,
    replacement: '"$1",\n      $2:'
  },
  // Fix JSX expressions with missing closing tags
  {
    pattern: /<br <span className="([^"]*)"([^>]*)>([^<]*)<\/span>/g,
    replacement: '<br /> <span className="$1"$2>$3</span>'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
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

// Main execution
async function main() {
  // Find all TypeScript/JSX files in components directory
  const files = await glob('/workspace/src/components/**/*.{tsx,ts}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);