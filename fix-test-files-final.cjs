const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in test files
function fixTestFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the specific patterns we see in the files
    content = content
      // Fix import statements
      .replace(/import React\s+from 'react';/g, "import React from 'react';")
      .replace(/import { render, screen, fireEvent }\s+from '@testing-library\/react';/g, "import { render, screen, fireEvent } from '@testing-library/react';")
      .replace(/import '@testing-library\/jest-dom';/g, "import '@testing-library/jest-dom';")
      .replace(/import ([A-Za-z]+)\s+from '\.\.\/components\/[^']*';/g, "import $1 from '../components/$1';")
      
      // Fix describe and test statements
      .replace(/describe\('([^']*)', \(\) => \{'/g, "describe('$1', () => {")
      .replace(/test\('([^']*)', \(\) => \{'/g, "test('$1', () => {")
      
      // Fix JSX syntax
      .replace(/<([A-Za-z]+)\s+\/\s+\/>/g, '<$1 />')
      
      // Fix expect statements
      .replace(/expect\(screen\.getByTestId\("([^"]*)"\)\)\.toBeInTheDocument\(\);'/g, "expect(screen.getByTestId('$1')).toBeInTheDocument();")
      
      // Fix closing braces
      .replace(/}\);'/g, '});')
      .replace(/}\);'/g, '});')
      .replace(/}\);'/g, '});')
      .replace(/}\);'/g, '});');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
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

console.log(`Fixed ${fixedCount} out of ${files.length} test files`);