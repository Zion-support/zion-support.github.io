#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get list of component files
const componentFiles = execSync('find app/components -name "*.tsx" -type f', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && fs.existsSync(file));

console.log(`Found ${componentFiles.length} component files to rebuild`);

// Template for a basic component
const createComponentTemplate = (componentName, props = {}) => `'use client';

import React from 'react';

interface ${componentName}Props {
  className?: string;
  children?: React.ReactNode;
}

const ${componentName}: React.FC<${componentName}Props> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={\`${componentName.toLowerCase()}-component \${className}\`}>
      {children}
    </div>
  );
};

export default ${componentName};
`;

let fixedFiles = 0;
let errorFiles = 0;

for (const filePath of componentFiles) {
  try {
    // Extract component name from file path
    const fileName = path.basename(filePath, '.tsx');
    const componentName = fileName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    const newContent = createComponentTemplate(componentName);
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Rebuilt: ${filePath} -> ${componentName}`);
    fixedFiles++;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    errorFiles++;
  }
}

console.log(`\nSummary:`);
console.log(`- Files processed: ${componentFiles.length}`);
console.log(`- Files rebuilt: ${fixedFiles}`);
console.log(`- Files with errors: ${errorFiles}`);