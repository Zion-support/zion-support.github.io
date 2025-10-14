#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix missing JSX fragment closing tags
function fixFragmentClosing(content) {
  let fixed = content;
  
  // Look for patterns where we have a return statement with <> but missing </>
  // Pattern: return ( <> ... </div> ); }
  const fragmentPattern = /return\s*\(\s*<>[\s\S]*?<\/div>\s*\);\s*}/g;
  
  fixed = fixed.replace(fragmentPattern, (match) => {
    // Check if there's already a closing fragment
    if (match.includes('</>')) {
      return match;
    }
    
    // Add the missing closing fragment
    return match.replace(/(<\/div>\s*\);\s*})/, '</div>\n    </>\n  );');
  });
  
  // More specific pattern for page components
  const pagePattern = /export default function Page\(\)\s*{[\s\S]*?return\s*\(\s*<>[\s\S]*?<\/div>\s*\);\s*}/g;
  
  fixed = fixed.replace(pagePattern, (match) => {
    if (match.includes('</>')) {
      return match;
    }
    
    return match.replace(/(<\/div>\s*\);\s*})/, '</div>\n    </>\n  );');
  });
  
  // Pattern for const Page = () => { ... }
  const constPagePattern = /const Page = \(\) => {[\s\S]*?return\s*\(\s*<>[\s\S]*?<\/div>\s*\);\s*}/g;
  
  fixed = fixed.replace(constPagePattern, (match) => {
    if (match.includes('</>')) {
      return match;
    }
    
    return match.replace(/(<\/div>\s*\);\s*})/, '</div>\n    </>\n  );');
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixFragmentClosing(content);
    
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
    '**/*.tsx'
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

export { fixFragmentClosing, processFile };