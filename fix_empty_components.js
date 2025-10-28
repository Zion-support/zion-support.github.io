#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all component files that are just empty exports
const componentFiles = execSync('find ./app/components -name "*.tsx" -exec sh -c \'if [ $(wc -l < "$1") -le 3 ] && grep -q "export default" "$1"; then echo "$1"; fi\' _ {} \\;', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file);

console.log(`Found ${componentFiles.length} empty component files`);

componentFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const componentName = filePath.split('/').pop().replace('.tsx', '');
    
    // Extract the component name from the export
    const exportMatch = content.match(/export default (\w+);/);
    const actualComponentName = exportMatch ? exportMatch[1] : componentName;
    
    console.log(`Fixing: ${filePath} (${actualComponentName})`);
    
    const newContent = `import React from 'react';

interface ${actualComponentName}Props {
  className?: string;
  children?: React.ReactNode;
}

const ${actualComponentName}: React.FC<${actualComponentName}Props> = ({ className = '', children }) => {
  return (
    <div className={\`${componentName.toLowerCase().replace(/([A-Z])/g, '-$1').replace(/^-/, '')}-component \${className}\`}>
      {children}
    </div>
  );
};

${actualComponentName}.displayName = '${actualComponentName}';

export default ${actualComponentName};`;

    fs.writeFileSync(filePath, newContent);
    console.log(`✓ Fixed: ${filePath}`);
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${componentFiles.length} empty component files`);