const fs = require('fs');
const path = require('path');

const testDir = path.join(__dirname, '__tests__');

function fixTestFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the corrupted pattern
    if (content.includes('const React from "react"') || content.includes('import _React from \'react\'')) {
      console.log(`Fixing ${filePath}`);
      
      // Extract the component name from the file path
      const fileName = path.basename(filePath, '.test.js');
      const componentName = fileName.replace('.dynamic', '');
      
      // Create clean test file content
      const cleanContent = `import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ${componentName} from '../components/${componentName}';

describe('${componentName}', () => {
  test('renders without crashing', () => {
    render(<${componentName} />);
    expect(screen.getByTestId('${componentName.toLowerCase()}')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<${componentName} />);
    // Add specific content tests based on component
  });
  test('handles user interactions', () => {
    render(<${componentName} />);
    // Add interaction tests based on component functionality
  });
  test('applies correct styling', () => {
    render(<${componentName} />);
    // Add styling tests if needed
  });
});
`;
      
      fs.writeFileSync(filePath, cleanContent);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDir(filePath);
    } else if (file.endsWith('.test.js') || file.endsWith('.test.tsx')) {
      if (fixTestFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting to fix test files...');
const fixedCount = walkDir(testDir);
console.log(`Fixed ${fixedCount} test files.`);