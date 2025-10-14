#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix extra closing div tags
function fixExtraDivs(content) {
  let fixed = content;
  
  // Pattern to find and fix extra closing div tags before fragment closing
  // Look for: </div>\n      </div>\n      </div>\n    </>
  const extraDivPattern = /(\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/>)/g;
  
  fixed = fixed.replace(extraDivPattern, (match) => {
    // Count the number of closing divs
    const divCount = (match.match(/<\/div>/g) || []).length;
    
    // If we have more than 2 closing divs, remove the extras
    if (divCount > 2) {
      return '\n      </div>\n    </>';
    }
    
    return match;
  });
  
  // More specific pattern for the common case
  const specificPattern = /(\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/>)/g;
  
  fixed = fixed.replace(specificPattern, (match) => {
    return '\n      </div>\n    </>';
  });
  
  // Pattern for 3 extra closing divs
  const threeExtraPattern = /(\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/>)/g;
  
  fixed = fixed.replace(threeExtraPattern, (match) => {
    return '\n      </div>\n    </>';
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixExtraDivs(content);
    
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

export { fixExtraDivs, processFile };