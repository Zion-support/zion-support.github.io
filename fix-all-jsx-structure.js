#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix J SX structure issues
function fix JS XStructure(content) {
  let fixed = content;
  
  // Fix common patterns where closing tags are missing
  // Pattern: </d iv> followed by </> without proper nesting
  fixed = fixed.replace(/(\s*)<\/d iv>\s*<\/>/g, '$1</d iv>\n      </d iv>\n    </>');
  
  // Pattern: </d iv> followed by </> with different nesting
  fixed = fixed.replace(/(\s*)<\/d iv>\s*<\/d iv>\s*<\/>/g, '$1</d iv>\n        </d iv>\n      </d iv>\n    </>');
  
  // Pattern: missing closing divs before fragments
  fixed = fixed.replace(/(\s*)<\/d iv>\s*<\/>/g, '$1</d iv>\n      </d iv>\n    </>');
  
  // Fix specific patterns for different nesting levels
  fixed = fixed.replace(/(\s*)<\/d iv>\s*<\/d iv>\s*<\/>/g, '$1</d iv>\n        </d iv>\n      </d iv>\n    </>');
  
  // Fix patterns where there are too many closing divs
  fixed = fixed.replace(/(\s*)<\/d iv>\s*<\/d iv>\s*<\/d iv>\s*<\/>/g, '$1</d iv>\n          </d iv>\n        </d iv>\n      </d iv>\n    </>');
  
  // Fix patterns where there are too few closing divs
  fixed = fixed.replace(/(\s*)<\/d iv>\s*<\/>/g, '$1</d iv>\n      </d iv>\n    </>');
  
  // Fix patterns where the main container is missing its closing tag
  fixed = fixed.replace(/(\s*)<\/d iv>\s*<\/d iv>\s*<\/>/g, '$1</d iv>\n        </d iv>\n      </d iv>\n    </>');
  
  // Fix patterns where the content div is missing its closing tag
  fixed = fixed.replace(/(\s*)<\/d iv>\s*<\/>/g, '$1</d iv>\n      </d iv>\n    </>');
  
  // Fix patterns where the text-center div is missing its closing tag
  fixed = fixed.replace(/(\s*)<\/d iv>\s*<\/d iv>\s*<\/>/g, '$1</d iv>\n          </d iv>\n        </d iv>\n      </d iv>\n    </>');
  
  // Fix patterns where the max-w-7xl div is missing its closing tag
  fixed = fixed.replace(/(\s*)<\/d iv>\s*<\/>/g, '$1</d iv>\n        </d iv>\n      </d iv>\n    </>');
  
  // Fix patterns where the min-h-screen div is missing its closing tag
  fixed = fixed.replace(/(\s*)<\/d iv>\s*<\/>/g, '$1</d iv>\n      </d iv>\n    </>');
  
  return fixed;
}

// Function to process a single file
function process File(file Path) {
  try {
    const content = fs.read File Sync(file Path, 'utf8');
    const fixed = fix JS XStructure(content);
    
    if (content !== fixed) {
      fs.write File Sync(file Path, fixed, 'utf8');
      console.log(`Fixed J SX structure: ${file Path}`);
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
  console.log('Starting to fix all J SX structure issues...');
  
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
  
  console.log(`\n Fixed J SX structure in ${fixed Count} files out of ${files.length} total files.`);
}

main().catch(console.error);