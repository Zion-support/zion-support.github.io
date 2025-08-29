#!/usr/bin/env node

/**
 * Zion Development Enhancement Script
 * 
 * Provides development workflow improvements
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Zion Development Enhancement');

// Create useful development scripts
const scriptsDir = path.join(__dirname);
const packageJsonPath = path.join(__dirname, '..', 'package.json');

// Quick build check script
const quickBuildScript = path.join(scriptsDir, 'quick-build.js');
const quickBuildContent = `#!/usr/bin/env node
const { execSync } = require('child_process');
console.log('🔍 Quick build check...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful');
} catch (error) {
  console.error('❌ Build failed');
  process.exit(1);
}`;

fs.writeFileSync(quickBuildScript, quickBuildContent);

// Component generator
const componentGenScript = path.join(scriptsDir, 'gen-component.js');
const componentGenContent = `#!/usr/bin/env node
const fs = require('fs');
const componentName = process.argv[2];
if (!componentName) {
  console.error('Usage: node gen-component.js <ComponentName>');
  process.exit(1);
}

const componentsDir = path.join(__dirname, '..', 'src', 'components');
const componentFile = path.join(componentsDir, \`\${componentName}.tsx\`);

const content = \`import React from 'react';

export default function \${componentName}() {
  return (
    <div className="\${componentName.toLowerCase()}-container">
      <h1>\${componentName}</h1>
    </div>
  );
}\`;

fs.writeFileSync(componentFile, content);
console.log(\`✅ Component \${componentName} created\`);`;

fs.writeFileSync(componentGenScript, componentGenContent);

console.log('✅ Development scripts created');
console.log('📝 Available commands:');
console.log('  node scripts/quick-build.js');
console.log('  node scripts/gen-component.js <Name>');
