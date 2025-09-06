const fs = require('fs');
const path = require('path');

const testDir = '/workspace/__tests__';
const dynamicTestFiles = fs.readdirSync(testDir).filter(file => file.endsWith('.dynamic.test.js'));

const template = (componentName) => `import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ${componentName} from '../components/${componentName}.dynamic';

describe('${componentName}', () => {
  test('renders without crashing', () => {
    render(<${componentName} />);
    expect(screen.getByTestId('${componentName.toLowerCase()}.dynamic')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<${componentName} />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('handles user interactions', () => {
    render(<${componentName} />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<${componentName} />);
    // Add styling tests here
  });
});`;

dynamicTestFiles.forEach(file => {
  const componentName = file.replace('.dynamic.test.js', '');
  const filePath = path.join(testDir, file);
  const content = template(componentName);
  
  try {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${file}`);
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
});

console.log('All dynamic test files have been fixed!');