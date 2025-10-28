#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix malformed JSX structure
function fixMalformedJSX(content) {
  let fixed = content;
  
  // Fix patterns like </section></div> followed by malformed content
  fixed = fixed.replace(
    /<\/section><\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g,
    '</section>'
  );
  
  // Fix patterns like </main></div> followed by malformed content
  fixed = fixed.replace(
    /<\/main><\/div>\s*<\/div>\s*<\/div>\s*<\/main>/g,
    '</main>'
  );
  
  // Fix patterns with malformed closing tags
  fixed = fixed.replace(
    /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g,
    '</div>\n        </div>\n      </section>'
  );
  
  // Fix patterns with extra closing braces
  fixed = fixed.replace(
    /\}\s*\}/g,
    '}'
  );
  
  // Fix patterns with malformed JSX structure
  fixed = fixed.replace(
    /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g,
    '</div>\n        </div>\n      </section>'
  );
  
  return fixed;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    content = fixMalformedJSX(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/TSX files
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} TypeScript files to process...`);

  let fixedCount = 0;
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);