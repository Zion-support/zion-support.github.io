#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix complex syntax errors
function fixComplexErrors(content) {
  let fixed = content;
  
  // Fix double semicolons
  fixed = fixed.replace(/;/g, ';');
  
  // Fix malformed import statements
  fixed = fixed.replace(/import\s+([^'"`\s]+)\s+from\s+['"`]([^'"`]+)['"`];/g, "import $1 from '$2';");
  fixed = fixed.replace(/import\s+([^'"`\s]+)\s+from\s+['"`]([^'"`]+)['"`];/g, "import $1 from '$2';");
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className=';([^']*)'/, "className='$1'");
  fixed = fixed.replace(/className=";([^"]*)"/, 'className="$1"');
  fixed = fixed.replace(/className='([^']*)'>,/g, "className='$1' />");
  fixed = fixed.replace(/className="([^"]*)">,/g, 'className="$1" />');
  
  // Fix malformed object properties
  fixed = fixed.replace(/title: '([^']*)',/g, "    title: '$1',");
  fixed = fixed.replace(/    description: '([^'
  }]*)'/g, "    description: '$1'
  }");
  
  // Fix malformed JSX elements
  fixed = fixed.replace(/<(\w+)\s+className="([^"]*)"\s*>,/g, '<$1 className="$2" />');
  fixed = fixed.replace(/<(\w+)\s+className='([^']*)'\s*>,/g, "<$1 className='$2' />");
  
  // Fix empty JSX fragments
  fixed = fixed.replace(/<><\/>/g, '<div></div>');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\n\s*<><\/>/g, 'return (\n    <div></div>\n  );');
  
  // Fix unterminated strings in object properties
  fixed = fixed.replace(/title: '([^']*)$/gm, "    title: '$1',");
  fixed = fixed.replace(/    description: '([^'
  }]*)$/gm, "    description: '$1'
  },");
  
  // Fix malformed array elements
  fixed = fixed.replace(/{\s*icon: <([^>]+)>\s*,/g, '{\n    icon: <$1 />,');
  fixed = fixed.replace(/title: '([^']*)',/g, "        title: '$1',");
  fixed = fixed.replace(/    description: '([^'
  }]*)'/g, "        description: '$1'
  }\n  }");
  
  // Fix missing closing braces
  fixed = fixed.replace(/}\s*];\s*return\s*\(/g, '}\n  ];\n\n  return (');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<(\w+)\s+className="([^"]*)"\s*>\s*,/g, '<$1 className="$2" />');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixComplexErrors(content);
    
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