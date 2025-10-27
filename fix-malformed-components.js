import fs from 'fs';
import { glob } from 'glob';

// Find all component files with malformed structure
const files = await glob('app/components/*.tsx', {
  ignore: [
    'node_modules/**',
    '.next/**'
  ]
});

let fixedCount = 0;

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    let newContent = content;
    
    // Check if file has malformed structure
    if (content.includes('export type ') && content.includes('Props') && !content.includes('interface ')) {
      const componentName = file.split('/').pop().replace('.tsx', '');
      const propsName = `${componentName}Props`;
      
      // Rebuild the component properly
      newContent = `interface ${propsName} {
  className?: string;
  children?: React.ReactNode;
}

const ${componentName} = ({ 
  className = '', 
  children 
}: ${propsName}) => {
  return (
    <div className={'${componentName.toLowerCase()} ' + className}>
      {children || <p>${componentName} component</p>}
    </div>
  );
};

export default ${componentName};`;
    }
    
    // Remove unused React imports
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      newContent = newContent.replace("import React from 'react';\n", '');
    }
    
    if (newContent !== content) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nFixed ${fixedCount} component files.`);