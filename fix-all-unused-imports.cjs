const fs = require('fs');
const path = require('path');

// Find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused React imports
    if (content.includes("import React from 'react'") && !content.includes('React.')) {
      content = content.replace(/import React from 'react'\n\n/g, '');
      content = content.replace(/import React from 'react'\n/g, '');
      modified = true;
    }
    
    // Remove unused named imports from React
    if (content.includes("import React, {") && !content.includes('memo') && !content.includes('useState') && !content.includes('useEffect')) {
      content = content.replace(/import React, { [^}]+ } from 'react'\n/g, '');
      modified = true;
    }
    
    // Remove unused icon imports
    if (content.includes("from 'lucide-react'")) {
      content = content.replace(/import { [^}]+ } from 'lucide-react'\n/g, '');
      modified = true;
    }
    
    // Remove unused ErrorBoundary imports
    if (content.includes("import ErrorBoundary") && !content.includes('<ErrorBoundary')) {
      content = content.replace(/import ErrorBoundary[^\n]+\n/g, '');
      modified = true;
    }
    
    // Remove empty lines at the end
    content = content.replace(/\n+$/, '\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find and fix all page files
const pageFiles = findPageFiles('app');
pageFiles.forEach(fixFile);

console.log(`Processed ${pageFiles.length} files`);
