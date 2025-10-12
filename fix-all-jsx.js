#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix all remaining J SX issues
function fix All JS X(content) {
  let fixed = content;
  
  // Fix missing closing div tags - look for patterns where divs are not properly closed
  // This is a more aggressive approach to fix J SX structure
  
  // Fix common patterns where closing divs are missing
  fixed = fixed.replace(/(\s*)<\/L ink>\s*<\/d iv>\s*<\/d iv>\s*\);/g, '$1</L ink>\n      </d iv>\n    </d iv>\n  );');
  
  // Fix patterns where the main container div is missing its closing tag
  fixed = fixed.replace(/(\s*)<\/d iv>\s*\);/g, '$1</d iv>\n  );');
  
  // Fix patterns where multiple divs are missing closing tags
  fixed = fixed.replace(/(\s*)<\/d iv>\s*<\/d iv>\s*\);/g, '$1</d iv>\n    </d iv>\n  );');
  
  // Fix specific patterns for 5 G pages
  fixed = fixed.replace(/(\s*)<\/L ink>\s*<\/d iv>\s*\);/g, '$1</L ink>\n      </d iv>\n    </d iv>\n  );');
  
  // Fix footer patterns
  fixed = fixed.replace(/(\s*)<\/d iv>\s*<\/f ooter>/g, '$1</d iv>\n      </d iv>\n    </f ooter>');
  
  // Fix patterns where the grid container is missing closing div
  fixed = fixed.replace(/(\s*)<\/d iv>\s*<\/d iv>\s*<\/d iv>\s*<\/f ooter>/g, '$1</d iv>\n          </d iv>\n        </d iv>\n      </d iv>\n    </f ooter>');
  
  // Fix patterns where contact section is missing closing div
  fixed = fixed.replace(/(\s*)<\/d iv>\s*<\/d iv>\s*<\/d iv>\s*<\/d iv>\s*<\/f ooter>/g, '$1</d iv>\n            </d iv>\n          </d iv>\n        </d iv>\n      </d iv>\n    </f ooter>');
  
  return fixed;
}

// Function to process a single file
function process File(file Path) {
  try {
    const content = fs.read File Sync(file Path, 'utf8');
    const fixed = fix All JS X(content);
    
    if (content !== fixed) {
      fs.write File Sync(file Path, fixed, 'utf8');
      console.log(`Fixed all J SX: ${file Path}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${file Path}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('Starting to fix all remaining J SX issues...');
  
  // Get all Type Script/T SX files
  const files = await glob('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**']
  });
  
  let fixed Count = 0;
  
  files.for Each(file => {
    if (process File(file)) {
      fixed Count++;
    }
  });
  
  console.log(`\n Fixed all J SX issues in ${fixed Count} files out of ${files.length} total files.`);
}

main().catch(console.error);