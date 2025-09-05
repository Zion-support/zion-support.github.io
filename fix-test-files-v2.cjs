<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in test files
function fixTestFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix unterminated strings and syntax errors
    content = content
      // Fix unterminated import strings - more comprehensive
      .replace(/from 'react";$/gm, "from 'react';")
      .replace(/from '@testing-library\/react";$/gm, "from '@testing-library/react';")
      .replace(/from '@testing-library\/jest-dom$/gm, "from '@testing-library/jest-dom';")
      .replace(/from '\.\.\/components\/[^"]*";$/gm, (match) => match.replace('";', "';"))
      
      // Fix unterminated describe and test strings
      .replace(/describe\('([^']*)"$/gm, "describe('$1', () => {")
      .replace(/test\('([^']*)"$/gm, "test('$1', () => {")
      
      // Fix JSX syntax errors
      .replace(/<([A-Za-z]+)\s+\/\s+\/>/g, '<$1 />')
      .replace(/<([A-Za-z]+)\s+\/\s+\/>/g, '<$1 />')
      
      // Fix unterminated expect statements
      .replace(/expect\([^)]*\)\.toBeInTheDocument\(\);'$/gm, 'expect($1).toBeInTheDocument();')
      
      // Fix missing semicolons and closing braces
      .replace(/}\)$/gm, '});')
      .replace(/}\)$/gm, '});')
      
      // Fix missing closing braces for describe blocks
      .replace(/}\)$/gm, '});')
      .replace(/}\)$/gm, '});')
      
      // Fix specific patterns that are causing issues
      .replace(/import '@testing-library\/jest-dom$/gm, "import '@testing-library/jest-dom';")
      .replace(/describe\('([^']*)"$/gm, "describe('$1', () => {")
      .replace(/test\('([^']*)"$/gm, "test('$1', () => {")
      .replace(/render\(<([A-Za-z]+)\s+\/\s+\/>\)$/gm, 'render(<$1 />);')
      .replace(/expect\([^)]*\)\.toBeInTheDocument\(\);'$/gm, 'expect($1).toBeInTheDocument();')
      .replace(/}\)$/gm, '});')
      .replace(/}\)$/gm, '});');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
=======
const fs = require("fs");
const path = require("path");
console.log("🔧 Fixing test files syntax errors - v2...");
// Find all test files with syntax errors;
const testDirs = ["__tests__"];
const fixedFiles = [];
function fixTestFile(filePath) {;
  let content = fs.readFileSync(filePath, "utf8");
  let originalContent = content;
  // Fix unterminated strings in describe and test blocks;
  content = content.replace(/describe\("([^"]*)", \(\) => \{";/g, "describe("$1", () => {");
  content = content.replace(/test\("([^"]*)", \(\) => \{";/g, "test("$1", () => {");
  content = content.replace(/expect\(([^)]*)\)\.([^]*);";/g, "expect($1).$2;");
  // Fix malformed JSX render statements;
  content = content.replace(/render\(<([^>]+) \/>\);";/g, "render(<$1 />);");
  // Fix malformed closing braces and parentheses;
  content = content.replace(/\}\)\);";$/gm, "});");
  content = content.replace(/\}\}";$/gm, "});");
  // Fix describe blocks with extra quotes;
  content = content.replace(/describe\("([^"]*)", \(\) => \{";/g, "describe("$1", () => {");
  return { content, changed: content !== originalContent }
}

testDirs.forEach(dir => {;
  if (fs.existsSync(dir)) {;
  const files = fs.readdirSync(dir, { recursive: true });
    files.forEach(file => {;
  if (file.endsWith(".js") || file.endsWith(".jsx") || file.endsWith(".ts") || file.endsWith(".tsx")) {;
  const filePath = path.join(dir, file);
        if (fs.existsSync(filePath)) {;
  const { content, changed } = fixTestFile(filePath);
          if (changed) {;
  fs.writeFileSync(filePath, content, "utf8");
            fixedFiles.push(filePath);
            console.log(`✅ Fixed ${filePath}`);,
}
        }
      }
    });,
>>>>>>> origin/automation-fixes
}

// Get all test files in __tests__ directory
const testDir = path.join(__dirname, '__tests__');
const files = fs.readdirSync(testDir).filter(file => file.endsWith('.test.js'));

console.log(`Found ${files.length} test files to fix`);

let fixedCount = 0;
files.forEach(file => {
  const filePath = path.join(testDir, file);
  if (fixTestFile(filePath)) {
    fixedCount++;
  }
});
<<<<<<< HEAD

console.log(`Fixed ${fixedCount} out of ${files.length} test files`);
=======
console.log(`✅ Fixed ${fixedFiles.length} test files`);
if (fixedFiles.length > 0) {;
  console.log("Fixed files:");
  fixedFiles.forEach(file => console.log(`  - ${file}`));,
}

console.log("🎉 Test file fixing v2 completed!")})
>>>>>>> origin/automation-fixes
