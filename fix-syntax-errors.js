#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix duplicate </Helmet> closing tags
  fixed = fixed.replace(/<\/Helmet>\s*<\/Helmet>/g, '</Helmet>');
  
  // Fix missing closing tags for JSX fragments
  // Look for patterns like: </div>\n    </>\n  );\n}
  fixed = fixed.replace(/(<\/div>)\s*<\/>\s*\);\s*}/g, '$1\n      </div>\n    </>\n  );\n}');
  
  // Fix missing closing tags for fragments in general
  // Look for patterns where we have </div> followed by </> but missing the outer div
  fixed = fixed.replace(/(<\/div>)\s*<\/>\s*\);\s*}/g, (match, closingDiv) => {
    // Count opening divs vs closing divs to determine if we need to add more closing tags
    const beforeMatch = fixed.substring(0, fixed.indexOf(match));
    const openDivs = (beforeMatch.match(/<div/g) || []).length;
    const closeDivs = (beforeMatch.match(/<\/div>/g) || []).length;
    
    if (openDivs > closeDivs) {
      return closingDiv + '\n      </div>\n    </>\n  );\n}';
    }
    return match;
  });
  
  // Fix unterminated string literals in JSX
  fixed = fixed.replace(/content="([^"]*?)\s*$/gm, (match, content) => {
    if (!content.endsWith('"')) {
      return `content="${content}"`;
    }
    return match;
  });
  
  // Fix malformed className attributes
  fixed = fixed.replace(/className="([^"]*?)\s*$/gm, (match, className) => {
    if (!className.endsWith('"')) {
      return `className="${className}"`;
    }
    return match;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '**/*.tsx',
    '**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**'] 
    });
    
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { fixSyntaxErrors, processFile };