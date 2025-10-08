const fs = require('fs');

const file = '__tests__/advanced-components.test.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace all NODE_ENV assignments with Object.defineProperty
content = content.replace(
  /process\.env\.NODE_ENV = '([^']+)';/g,
  "Object.defineProperty(process.env, 'NODE_ENV', { value: '$1', writable: true });"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed NODE_ENV assignments in test file');