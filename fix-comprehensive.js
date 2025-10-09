#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix comprehensive syntax errors
function fixComprehensive(content) {
  let fixed = content;
  
  // Fix duplicate semicolons and brackets
  fixed = fixed.replace(/;\s*;\s*/g, ';');
  fixed = fixed.replace(/\]\s*;\s*\]\s*;/g, '];');
  fixed = fixed.replace(/\]\s*;\s*\]\s*$/gm, '];');
  
  // Fix missing closing brackets in arrays
  fixed = fixed.replace(/const\s+\w+\s*=\s*\[[^\]]*$/gm, (match) => {
    if (!match.includes('];')) {
      return match + '\n  ];';
    }
    return match;
  });
  
  // Fix missing semicolons after const declarations
  fixed = fixed.replace(/(const|let|var)\s+\w+\s*=\s*\[[^\]]*\]\s*\n\s*const/g, (match) => {
    return match.replace(/\]\s*\n\s*const/, '];\n\n  const');
  });
  
  // Fix missing semicolons after const declarations before return
  fixed = fixed.replace(/(const|let|var)\s+\w+\s*=\s*\[[^\]]*\]\s*\n\s*return/g, (match) => {
    return match.replace(/\]\s*\n\s*return/, '];\n\n  return');
  });
  
  // Fix missing semicolons after const declarations before export
  fixed = fixed.replace(/(const|let|var)\s+\w+\s*=\s*\[[^\]]*\]\s*\n\s*export/g, (match) => {
    return match.replace(/\]\s*\n\s*export/, '];\n\n  export');
  });
  
  // Fix missing semicolons after const declarations before export default
  fixed = fixed.replace(/(const|let|var)\s+\w+\s*=\s*\[[^\]]*\]\s*\n\s*export default/g, (match) => {
    return match.replace(/\]\s*\n\s*export default/, '];\n\n  export default');
  });
  
  // Fix malformed object structures in arrays
  fixed = fixed.replace(/\{\s*\/\/ TODO: Add content\s*\n\s*\}/g, '{\n    // TODO: Add content\n  }');
  
  // Fix missing closing brackets in function declarations
  fixed = fixed.replace(/(const|let|var)\s+\w+\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*\n\s*\/\/ TODO: Add content\s*\n\}/g, (match) => {
    return match.replace(/\{\s*\n\s*\/\/ TODO: Add content\s*\n\}/, '{\n  // TODO: Add content\n  ');
  });
  
  // Fix missing closing brackets in arrays that end with objects
  fixed = fixed.replace(/benefits: \[[^\]]+\]\s*\n\s*\}\s*$/gm, (match) => {
    return match.replace(/\]\s*\n\s*\}\s*$/, ']\n    }\n  ];');
  });
  
  // Fix missing closing brackets in arrays that end with objects (alternative pattern)
  fixed = fixed.replace(/benefits: \[[^\]]+\]\s*\n\s*\}\s*\n\s*$/gm, (match) => {
    return match.replace(/\]\s*\n\s*\}\s*\n\s*$/, ']\n    }\n  ];\n');
  });
  
  // Fix missing closing brackets in arrays that end with objects (another pattern)
  fixed = fixed.replace(/benefits: \[[^\]]+\]\s*\n\s*\}\s*\n\s*const/g, (match) => {
    return match.replace(/\]\s*\n\s*\}\s*\n\s*const/, ']\n    }\n  ];\n\n  const');
  });
  
  // Fix missing closing brackets in arrays that end with objects (return pattern)
  fixed = fixed.replace(/benefits: \[[^\]]+\]\s*\n\s*\}\s*\n\s*return/g, (match) => {
    return match.replace(/\]\s*\n\s*\}\s*\n\s*return/, ']\n    }\n  ];\n\n  return');
  });
  
  // Fix missing closing brackets in arrays that end with objects (export pattern)
  fixed = fixed.replace(/benefits: \[[^\]]+\]\s*\n\s*\}\s*\n\s*export/g, (match) => {
    return match.replace(/\]\s*\n\s*\}\s*\n\s*export/, ']\n    }\n  ];\n\n  export');
  });
  
  // Fix missing closing brackets in arrays that end with objects (default export pattern)
  fixed = fixed.replace(/benefits: \[[^\]]+\]\s*\n\s*\}\s*\n\s*export default/g, (match) => {
    return match.replace(/\]\s*\n\s*\}\s*\n\s*export default/, ']\n    }\n  ];\n\n  export default');
  });
  
  // Fix missing closing brackets in arrays that end with objects (another pattern)
  fixed = fixed.replace(/benefits: \[[^\]]+\]\s*\n\s*\}\s*\n\s*const/g, (match) => {
    return match.replace(/\]\s*\n\s*\}\s*\n\s*const/, ']\n    }\n  ];\n\n  const');
  });
  
  // Fix missing closing brackets in arrays that end with objects (return pattern)
  fixed = fixed.replace(/benefits: \[[^\]]+\]\s*\n\s*\}\s*\n\s*return/g, (match) => {
    return match.replace(/\]\s*\n\s*\}\s*\n\s*return/, ']\n    }\n  ];\n\n  return');
  });
  
  // Fix missing closing brackets in arrays that end with objects (export pattern)
  fixed = fixed.replace(/benefits: \[[^\]]+\]\s*\n\s*\}\s*\n\s*export/g, (match) => {
    return match.replace(/\]\s*\n\s*\}\s*\n\s*export/, ']\n    }\n  ];\n\n  export');
  });
  
  // Fix missing closing brackets in arrays that end with objects (default export pattern)
  fixed = fixed.replace(/benefits: \[[^\]]+\]\s*\n\s*\}\s*\n\s*export default/g, (match) => {
    return match.replace(/\]\s*\n\s*\}\s*\n\s*export default/, ']\n    }\n  ];\n\n  export default');
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixComprehensive(content);
    
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
    'src/**/*.tsx',
    'src/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixComprehensive, processFile };