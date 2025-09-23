const fs = require('fs');
const path = require('path');

function fixTestFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove malformed lines and fix imports
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      
      // Skip empty lines and malformed lines
      if (!line || line === "';" || line === "}from '@testing-library/react';") {
        continue;
      }
      
      // Fix import statements
      if (line.includes("import React from 'react'")) {
        fixedLines.push("import React from 'react';");
      } else if (line.includes("import {") && line.includes("render") && line.includes("screen")) {
        fixedLines.push("import { render, screen, fireEvent } from '@testing-library/react';");
      } else if (line.includes("import '@testing-library/jest-dom'")) {
        fixedLines.push("import '@testing-library/jest-dom';");
      } else if (line.includes("import") && line.includes("from '../components/")) {
        // Extract component name from path
        const match = line.match(/import\s+(\w+)\s+from\s+'\.\.\/components\/([^']+)'/);
        if (match) {
          const componentName = match[2].replace('.test', '');
          fixedLines.push(`import ${componentName} from '../components/${componentName}';`);
        }
      } else if (line.includes("describe") && line.includes("(")) {
        // Fix describe statements
        const match = line.match(/describe\s*\(\s*['"]([^'"]+)['"]\s*,\s*\(\)\s*=>\s*\{/);
        if (match) {
          const testName = match[1].replace(/test$/, '');
          fixedLines.push(`describe('${testName}', () => {`);
        }
      } else if (line.includes("test") && line.includes("(")) {
        // Fix test statements
        const match = line.match(/test\s*\(\s*['"]([^'"]+)['"]\s*,\s*\(\)\s*=>\s*\{/);
        if (match) {
          fixedLines.push(`  test('${match[1]}', () => {`);
        }
      } else if (line.includes("render") && line.includes("<")) {
        // Fix render statements
        const match = line.match(/render\s*\(\s*<(\w+)\s*\/\s*\/\s*\/\s*>\s*\)/);
        if (match) {
          fixedLines.push(`    render(<${match[1]} />);`);
        }
      } else if (line.includes("expect") && line.includes("getByTestId")) {
        // Fix expect statements
        const match = line.match(/expect\s*\(\s*screen\.getByTestId\s*\(\s*['"]([^'"]+)['"]\s*\)\s*\)\.toBeInTheDocument\s*\(\s*\)\s*;\s*['"]/);
        if (match) {
          fixedLines.push(`    expect(screen.getByTestId('${match[1]}')).toBeInTheDocument();`);
        }
      } else if (line.includes("})")) {
        fixedLines.push("  });");
      } else if (line.includes("});")) {
        fixedLines.push("});");
      }
    }
    
    // Ensure proper structure
    const finalContent = fixedLines.join('\n') + '\n';
    fs.writeFileSync(filePath, finalContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all test files
const testDir = path.join(__dirname, '__tests__');
const files = fs.readdirSync(testDir).filter(file => file.endsWith('.test.js'));

console.log(`Found ${files.length} test files to fix`);

files.forEach(file => {
  const filePath = path.join(testDir, file);
  fixTestFile(filePath);
});

console.log('Comprehensive test file fixing completed!');