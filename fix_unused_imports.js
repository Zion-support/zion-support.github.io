import fs from 'fs';
import path from 'path';

function findFiles(dir, extensions = ['.tsx', '.ts']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix React imports - remove unused Component, ErrorInfo, ReactNode
    content = content.replace(
      /import React, \{ Component, ErrorInfo, ReactNode \} from 'react';/g,
      "import React from 'react';"
    );
    content = content.replace(
      /import React, \{ Component, ReactNode, ErrorInfo \} from 'react';/g,
      "import React from 'react';"
    );
    content = content.replace(
      /import React, \{ Component, ReactNode \} from 'react';/g,
      "import React from 'react';"
    );
    content = content.replace(
      /import React, \{ Component, ErrorInfo \} from 'react';/g,
      "import React from 'react';"
    );
    content = content.replace(
      /import React, \{ ErrorInfo, ReactNode \} from 'react';/g,
      "import React from 'react';"
    );
    content = content.replace(
      /import React, \{ Component \} from 'react';/g,
      "import React from 'react';"
    );
    content = content.replace(
      /import React, \{ ErrorInfo \} from 'react';/g,
      "import React from 'react';"
    );
    content = content.replace(
      /import React, \{ ReactNode \} from 'react';/g,
      "import React from 'react';"
    );
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed unused imports: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// Find all relevant files
const files = findFiles('./app');
let fixedCount = 0;

console.log('Fixing unused imports in files...');

for (const file of files) {
  if (fixUnusedImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);
