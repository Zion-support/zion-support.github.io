#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all component files that only have an export statement
const emptyComponents = execSync('find app/components -name "*.tsx" -exec sh -c \'if [ $(wc -l < "$1") -le 2 ] && grep -q "export default" "$1"; then echo "$1"; fi\' _ {} \\;', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && file.trim());

console.log(`Found ${emptyComponents.length} empty component files`);

function fixEmptyComponent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract component name from file path
    const componentName = filePath.split('/').pop().replace('.tsx', '');
    const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    
    // Create proper component content
    const newContent = `import React from 'react';

interface ${capitalizedName}Props {
  className?: string;
  children?: React.ReactNode;
}

const ${capitalizedName}: React.FC<${capitalizedName}Props> = ({ className = '', children }) => {
  return (
    <div className={\`${componentName.toLowerCase()}-component \${className}\`}>
      {children}
    </div>
  );
};

${capitalizedName}.displayName = '${capitalizedName}';

export default ${capitalizedName};
`;
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✓ Fixed ${filePath}`);
    return true;
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all empty components
let fixedCount = 0;
let errorCount = 0;

emptyComponents.forEach(file => {
  if (fixEmptyComponent(file)) {
    fixedCount++;
  } else {
    errorCount++;
  }
});

console.log(`\nFix complete:`);
console.log(`✓ Successfully fixed: ${fixedCount} files`);
console.log(`✗ Errors: ${errorCount} files`);