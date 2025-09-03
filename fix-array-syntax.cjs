#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixArraySyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed array syntax - missing opening bracket
    const arrayFixPattern = /const\s+(\w+)\s*=\s*\[\s*\]\s*,\s*\{/g;
    if (arrayFixPattern.test(content)) {
      content = content.replace(arrayFixPattern, 'const $1 = [\n    {');
      modified = true;
    }

    // Fix missing closing bracket for arrays
    const missingBracketPattern = /(\s*\}\s*\]\s*,\s*export\s+default)/g;
    if (missingBracketPattern.test(content)) {
      content = content.replace(missingBracketPattern, '\n  ];\n\nexport default');
      modified = true;
    }

    // Fix missing closing brace for function
    if (content.includes('export default') && !content.includes('}')) {
      content = content.replace(/(\s*\)\s*;\s*export\s+default)/g, '\n  );\n}\n\nexport default');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Get all service files with errors
const serviceDir = './src/pages/services';
const files = fs.readdirSync(serviceDir);
let fixedCount = 0;

files.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
    const filePath = path.join(serviceDir, file);
    if (fixArraySyntax(filePath)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed ${fixedCount} service files.`);