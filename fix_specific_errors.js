import fs from 'fs';
import { glob } from 'glob';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed string literals with extra quotes and commas
    const malformedStringPattern = /(\w+):\s*'([^']*)',",\s*\n\s*(\w+):/g;
    const malformedStringReplacement = "$1: '$2',\n      $3:";
    
    if (content.match(malformedStringPattern)) {
      content = content.replace(malformedStringPattern, malformedStringReplacement);
      modified = true;
    }
    
    // Fix malformed string literals with extra quotes
    const extraQuotePattern = /(\w+):\s*"([^"]*)",",\s*\n\s*(\w+):/g;
    const extraQuoteReplacement = '$1: "$2",\n      $3:';
    
    if (content.match(extraQuotePattern)) {
      content = content.replace(extraQuotePattern, extraQuoteReplacement);
      modified = true;
    }
    
    // Fix malformed JSX with missing closing tags
    const malformedJSXPattern = /<br <span className="([^"]*)"([^>]*)>([^<]*)<\/span>/g;
    const malformedJSXReplacement = '<br /> <span className="$1"$2>$3</span>';
    
    if (content.match(malformedJSXPattern)) {
      content = content.replace(malformedJSXPattern, malformedJSXReplacement);
      modified = true;
    }
    
    // Fix unterminated string literals in object properties
    const unterminatedStringPattern = /(\w+):\s*"([^"]*)\n\s+(\w+):/g;
    const unterminatedStringReplacement = '$1: "$2",\n      $3:';
    
    if (content.match(unterminatedStringPattern)) {
      content = content.replace(unterminatedStringPattern, unterminatedStringReplacement);
      modified = true;
    }
    
    // Fix unterminated string literals with single quotes
    const unterminatedSingleQuotePattern = /(\w+):\s*'([^']*)\n\s+(\w+):/g;
    const unterminatedSingleQuoteReplacement = "$1: '$2',\n      $3:";
    
    if (content.match(unterminatedSingleQuotePattern)) {
      content = content.replace(unterminatedSingleQuotePattern, unterminatedSingleQuoteReplacement);
      modified = true;
    }
    
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