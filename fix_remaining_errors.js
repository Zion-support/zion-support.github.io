import fs from 'fs';
import { glob } from 'glob';

// More comprehensive fixes for TypeScript/JSX syntax errors
const fixes = [
  // Fix unterminated string literals in object properties
  {
    pattern: /(\w+):\s*"([^"]*)\n\s+(\w+):/g,
    replacement: '$1: "$2",\n      $3:'
  },
  // Fix unterminated string literals with single quotes
  {
    pattern: /(\w+):\s*'([^']*)\n\s+(\w+):/g,
    replacement: "$1: '$2',\n      $3:"
  },
  // Fix malformed JSX with missing closing tags
  {
    pattern: /<br <span className="([^"]*)"([^>]*)>([^<]*)<\/span>/g,
    replacement: '<br /> <span className="$1"$2>$3</span>'
  },
  // Fix JSX expressions with missing closing tags
  {
    pattern: /<br <span className="([^"]*)"([^>]*)>([^<]*)<\/span>/g,
    replacement: '<br /> <span className="$1"$2>$3</span>'
  },
  // Fix malformed object properties with missing commas
  {
    pattern: /(\w+):\s*"([^"]*)"\n\s+(\w+):/g,
    replacement: '$1: "$2",\n      $3:'
  },
  // Fix malformed object properties with single quotes
  {
    pattern: /(\w+):\s*'([^']*)'\n\s+(\w+):/g,
    replacement: "$1: '$2',\n      $3:"
  },
  // Fix JSX with missing closing tags in complex structures
  {
    pattern: /<br <span className="([^"]*)"([^>]*)>([^<]*)<\/span>/g,
    replacement: '<br /> <span className="$1"$2>$3</span>'
  },
  // Fix malformed JSX expressions
  {
    pattern: /<br <span className="([^"]*)"([^>]*)>([^<]*)<\/span>/g,
    replacement: '<br /> <span className="$1"$2>$3</span>'
  },
  // Fix object properties with missing commas after strings
  {
    pattern: /(\w+):\s*"([^"]*)"\n\s+(\w+):/g,
    replacement: '$1: "$2",\n      $3:'
  },
  // Fix object properties with missing commas after single quotes
  {
    pattern: /(\w+):\s*'([^']*)'\n\s+(\w+):/g,
    replacement: "$1: '$2',\n      $3:"
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