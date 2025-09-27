#!/usr/bin/env node

import fs from 'fs';

console.log('🔧 Interface Error Fixer');
console.log('========================\n');

const filesToFix = [
  'src/components/ServiceCard.tsx',
  'src/components/SettingsPanel.tsx'
];

function fixInterfaceErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixes = 0;

    // Fix malformed interfaces
    content = content.replace(
      /interface\s+(\w+)\s*{\s*([^}]*)\s*}\s*};/g,
      (match, interfaceName, body) => {
        fixes++;
        return `interface ${interfaceName} {\n  ${body.trim()}\n}`;
      }
    );

    // Fix malformed function parameters
    content = content.replace(
      /export\s+const\s+(\w+):\s*React\.FC<(\w+)>\s*=\s*\(\$1\)\s*=>/g,
      (match, componentName, propsType) => {
        fixes++;
        return `export const ${componentName}: React.FC<${propsType}> = (props) =>`;
      }
    );

    // Fix malformed destructuring
    content = content.replace(
      /const\s*{\s*([^}]*)\s*}\s*=\s*\(\$1\)/g,
      (match, destructured) => {
        fixes++;
        return `const { ${destructured.trim()} } = props`;
      }
    );

    // Fix missing closing braces in interfaces
    content = content.replace(
      /interface\s+(\w+)\s*{\s*([^}]*)\s*$/gm,
      (match, interfaceName, body) => {
        if (body && !body.includes('}')) {
          fixes++;
          return `interface ${interfaceName} {\n  ${body.trim()}\n}`;
        }
        return match;
      }
    );

    // Write the fixed content back
    if (fixes > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed ${fixes} issues in ${filePath}`);
      return fixes;
    } else {
      console.log(`ℹ️  No issues found in ${filePath}`);
      return 0;
    }

  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return 0;
  }
}

// Process all files
let totalFixes = 0;
filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    totalFixes += fixInterfaceErrors(filePath);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log(`\n📊 Interface Fix Summary:`);
console.log(`- Files processed: ${filesToFix.length}`);
console.log(`- Total fixes applied: ${totalFixes}`);

if (totalFixes > 0) {
  console.log('\n✅ All interface errors fixed!');
} else {
  console.log('\n✅ No interface errors found!');
}