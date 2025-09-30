#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Common syntax fixes for test files
const fixes = [
  // Fix unterminated string literals and malformed imports
  {
    pattern: /import\s+(\w+)\s+from\s+'([^']*);';/g,
    replacement: "import $1 from '$2';"
  }, {
    pattern: /describe\('([^']*);',\s*\(\)\s*=>\s*{';/g,
    replacement: "describe('$1', () => {"
  }, {
    pattern: /test\('([^']*);',\s*\(\)\s*=>\s*{';/g,
    replacement: "test('$1', () => {"
  }, {
    pattern: /expect\(([^)]*)\)\.toBeInTheDocument\(\)\}\);
/g,
    replacement: "expect($1).toBeInTheDocument();"
  }, {
    pattern: /}\);/g,
    replacement: "});"
  }, {
    pattern: /}\);'/g,
    replacement: "});"
  },
  // Fix malformed JSX
  {
    pattern: /<(\w+)\s+(\w+)\s*\/>/g,
    replacement: "<$1 $2 />"
  },
  // Fix trailing semicolons in wrong places
  {
    pattern: /;\s*$/gm,
    replacement: ""
  }, {
    pattern: /,\s*$/gm,
    replacement: ""
  }

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement)});
    
    // Additional specific fixes
    content = content
      .replace(/';/g, "'")
      .replace(/";/g, '")
      .replace(/,\s*}/g, '}')
      .replace(/,\s*]/g, ']')
      .replace(/,\s*\)/g, ')')
      .replace(/\s+from\s+'([^']*);';/g, " from '$1';")
      .replace(/import\s+(\w+)\s+from\s+'([^']*);';/g, "import $1 from '$2';");
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true}
    return false} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`⚠️ File not found: ${filePath}`);
        return false;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;

      // Fix trailing commas in import statements
      content = content.replace(/import\s+([^;]+),\s*;/g, 'import $1;');
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        traverse(filePath)} else if (file.endsWith('.test.js') || file.endsWith('.test.tsx') || file.endsWith('.test.ts')) {
        testFiles.push(filePath)}
    }
  }
  
  traverse(dir);
  return testFiles}

// Run the fixer
if (require.main === module) {
  const fixer = new TestSyntaxFixer();
  fixer.run().catch(console.error);
}

const testFiles = findTestFiles(__dirname);
let fixedCount = 0;

testFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++}
});

console.log(`✅ Fixed ${fixedCount} out of ${testFiles.length} test files`);
console.log('🎉 Test syntax error fixes completed!');