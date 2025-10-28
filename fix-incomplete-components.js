#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Find all TypeScript/TSX files in the components directory
const files = await glob('./app/components/*.{ts,tsx}');

function fixIncompleteComponent(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it's just an export without definition
    const exportOnlyRegex = /^export\s+default\s+(\w+);?\s*$/;
    const match = content.match(exportOnlyRegex);
    
    if (match) {
      const componentName = match[1];
      console.log(`Fixing incomplete component: ${componentName} in ${filePath}`);
      
      // Create a proper component
      const newContent = `import React from 'react';

interface ${componentName}Props {
  className?: string;
  children?: React.ReactNode;
}

const ${componentName}: React.FC<${componentName}Props> = ({ className, children }) => {
  return (
    <div className={\`${componentName.toLowerCase()}-component \${className || ''}\`}>
      {children || <p>${componentName} Component</p>}
    </div>
  );
};

export default ${componentName};
`;
      
      fs.writeFileSync(filePath, newContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all files
let successCount = 0;
let totalCount = files.length;

console.log(`Checking ${totalCount} component files for incomplete definitions...`);

for (const filePath of files) {
  if (fixIncompleteComponent(filePath)) {
    successCount++;
  }
}

console.log(`\nCompleted: ${successCount} components fixed`);