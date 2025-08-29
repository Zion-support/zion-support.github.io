#!/usr/bin/env node
const fs = require('fs');
const componentName = process.argv[2];
if (!componentName) {
  console.error('Usage: node gen-component.cjs <ComponentName>');
  process.exit(1);
}

const componentsDir = path.join(__dirname, '..', 'src', 'components');
const componentFile = path.join(componentsDir, `${componentName}.tsx`);

const content = `import React from 'react';

export default function ${componentName}() {
  return (
    <div className="${componentName.toLowerCase()}-container">
      <h1>${componentName}</h1>
    </div>
  );
}`;

fs.writeFileSync(componentFile, content);
console.log(`✅ Component ${componentName} created`);