#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all component files in the app/components directory
const componentFiles = execSync('find app/components -name "*.tsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && file.trim());

console.log(`Found ${componentFiles.length} component files`);

function fixComponent(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract component name from file path
    const componentName = filePath.split('/').pop().replace('.tsx', '');
    const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    const interfaceName = `${capitalizedName}Props`;
    
    // Skip if it's already properly formatted
    if (content.includes(`interface ${interfaceName}`) && content.includes('import React')) {
      return true;
    }
    
    // Check if it's an empty file or just export
    if (content.trim() === `export default ${capitalizedName};` || content.trim() === '') {
      content = `import React from 'react';

interface ${interfaceName} {
  className?: string;
  children?: React.ReactNode;
}

const ${capitalizedName}: React.FC<${interfaceName}> = ({ className = '', children }) => {
  return (
    <div className={\`${componentName.toLowerCase()}-component \${className}\`}>
      {children}
    </div>
  );
};

${capitalizedName}.displayName = '${capitalizedName}';

export default ${capitalizedName};
`;
    } else {
      // Fix existing component
      let lines = content.split('\n');
      
      // Add React import if missing
      if (!content.includes('import React')) {
        lines.unshift('import React from \'react\';', '');
      }
      
      // Add interface if missing
      if (!content.includes(`interface ${interfaceName}`)) {
        // Find the component definition line
        let insertIndex = 0;
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes(`React.FC<${interfaceName}>`) || lines[i].includes(`: React.FC<${interfaceName}>`)) {
            insertIndex = i;
            break;
          }
        }
        
        const interfaceDef = `interface ${interfaceName} {
  className?: string;
  children?: React.ReactNode;
}

`;
        
        lines.splice(insertIndex, 0, interfaceDef);
      }
      
      content = lines.join('\n');
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed ${filePath}`);
    return true;
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all components
let fixedCount = 0;
let errorCount = 0;

componentFiles.forEach(file => {
  if (fixComponent(file)) {
    fixedCount++;
  } else {
    errorCount++;
  }
});

console.log(`\nFix complete:`);
console.log(`✓ Successfully fixed: ${fixedCount} files`);
console.log(`✗ Errors: ${errorCount} files`);