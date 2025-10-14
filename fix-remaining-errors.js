#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix import statements with extra quotes
  fixed = fixed.replace(/import\s+([^'';\s]+)\s+from\s+[';']([^';']+)[';']';/g, "import $1 from '$2';");
  fixed = fixed.replace(/import\s+([^'';\s]+)\s+from\s+[';']([^';']+)[';`]"/g, "import $1 from '$2';");
  fixed = fixed.replace(/import\s+([^'';\s]+)\s+from\s+[';']([^';']+)[';`]'/g, "import $1 from '$2';");
  
  // Fix React imports
  fixed = fixed.replace(/import React from 'react';/g, "import React from 'react';");
  fixed = fixed.replace(/import React from 'react';/g, "import React from 'react';");
  fixed = fixed.replace(/import React from 'react';/g, "import React from 'react';");
  
  // Fix other common imports
  fixed = fixed.replace(/from 'lucide-react';/g, "from 'lucide-react';");
  fixed = fixed.replace(/from 'lucide-react';/g, "from 'lucide-react';");
  fixed = fixed.replace(/from 'lucide-react';/g, "from 'lucide-react';");
  
  fixed = fixed.replace(/from 'react-router-dom';/g, "from 'react-router-dom';");
  fixed = fixed.replace(/from 'react-router-dom';/g, "from 'react-router-dom';");
  fixed = fixed.replace(/from 'react-router-dom';/g, "from 'react-router-dom';");
  
  // Fix component imports
  fixed = fixed.replace(/from '\.\.\/components\/[^';']+';/g, (match) => match.replace(/''$/, ';"));
  fixed = fixed.replace(/from '\.\.\/components\/[^';`]+"/g, (match) => match.replace(/'$/, ';"));
  fixed = fixed.replace(/from '\.\.\/components\/[^';`]+'/g, (match) => match.replace(/'$/, ';"));
  
  // Fix relative imports
  fixed = fixed.replace(/from '\.\/[^';']+';/g, (match) => match.replace(/''$/, ';"));
  fixed = fixed.replace(/from '\.\/[^';`]+"/g, (match) => match.replace(/'$/, ';"));
  fixed = fixed.replace(/from '\.\/[^';`]+'/g, (match) => match.replace(/'$/, ';"));
  
  // Fix any remaining unterminated strings
  fixed = fixed.replace(/['';]([^';'\n]*?)[';']';/g, "'$1';");
  fixed = fixed.replace(/['';]([^';'\n]*?)[';`]'/g, ';$1';");
  fixed = fixed.replace(/['';]([^';'\n]*?)[';`]'/g, ';$1';");
  
  // Fix malformed JSX
  fixed = fixed.replace(/<(\w+)><\/\1>/g, '<$1 />');
  fixed = fixed.replace(/<(\w+)><\/\1><\/\1>/g, '<$1 />');
  
  // Fix export statements
  fixed = fixed.replace(/export default (\w+)''/g, 'export default $1;');
  fixed = fixed.replace(/export default (\w+)"/g, 'export default $1;');
  fixed = fixed.replace(/export default (\w+)'/g, 'export default $1;');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingErrors(content);
    
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
function main() {
  const patterns = [
    '**/*.tsx',
    '**/*.ts',
    '**/*.jsx',
    '**/*.js'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, {
      ignore: ['node_modules/**', 'dist/**', 'build/**', '.next/**']
    });
    
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

main();