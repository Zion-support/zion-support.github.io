#!/usr/bin/env node

import fs from 'fs';
      }
    }
  }
  
traverse(dir);
  return files;
}

// Main execution
const files = findFilesWithSyntaxErrors('/workspace');
console.log(`Checking ${files.length} files for syntax errors`);

let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
