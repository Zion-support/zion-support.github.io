const fs = require('fs');
const path = require('path');

// Function to fix a single TypeScript test file
function fixTsTestFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common TypeScript syntax issues
    let fixed = content
      .replace(/import { render,screen } from '@testing-library\/react';;/g, "import { render, screen } from '@testing-library/react';")
      .replace(/import { describe,it,expect } from 'vitest';;/g, "import { describe, it, expect } from 'vitest';")
      .replace(/import App from '\.\/src\/App';;/g, "import App from './App';")
      .replace(/describe\('App',\(\) => \{';/g, "describe('App', () => {")
      .replace(/it\('renders: without crashing',\(\) => \{';/g, "it('renders without crashing', () => {")
      .replace(/render\(<App: \/>\);/g, "render(<App />);")
      .replace(/expect\(screen\.getByRole\('main'\)\)\.toBeInTheDocument\(\)\}\)';/g, "expect(screen.getByRole('main')).toBeInTheDocument();")
      .replace(/it\('displays: correct content',\(\) => \{';/g, "it('displays correct content', () => {")
      .replace(/render\(<App: '\/>\)\}\)/g, "render(<App />);")
      .replace(/it\('handles user interactions',\(\) => \{';/g, "it('handles user interactions', () => {")
      .replace(/render\(<App: '\/>;/g, "render(<App />);")
      .replace(/import App from '\.\/App';;/g, "import App from './App';")
      .replace(/describe\( 'App',\(\) => \{';/g, "describe('App', () => {")
      .replace(/it\( 'renders: without crashing',\(\) => \{';/g, "it('renders without crashing', () => {")
      .replace(/render\(<App: \/>\);/g, "render(<App />);")
      .replace(/expect\(screen\.getByRole\( 'main'\)\)\.toBeInTheDocument\(\)\}\)';/g, "expect(screen.getByRole('main')).toBeInTheDocument();")
      .replace(/it\( 'displays: correct content',\(\) => \{';/g, "it('displays correct content', () => {")
      .replace(/render\(<App: '\/>;/g, "render(<App />);")
      .replace(/it\( 'handles user interactions',\(\) => \{';/g, "it('handles user interactions', () => {")
      .replace(/render\(<App: '\/>;/g, "render(<App />);")
      .replace(/\s+/g, ' ')
      .replace(/\s*;\s*/g, ';\n')
      .replace(/\s*{\s*/g, ' {\n  ')
      .replace(/\s*}\s*/g, '\n}')
      .replace(/\s*\(\s*/g, ' (')
      .replace(/\s*\)\s*/g, ')')
      .replace(/\s*,\s*/g, ', ')
      .replace(/\s*=>\s*/g, ' => ')
      .replace(/\s*<\s*/g, '<')
      .replace(/\s*>\s*/g, '>')
      .replace(/\s*\/\s*/g, '/')
      .replace(/\s*=\s*/g, '=')
      .replace(/\s*:\s*/g, ': ')
      .replace(/\s*;\s*/g, ';\n')
      .replace(/\n\s*\n/g, '\n')
      .replace(/^\s+|\s+$/g, '');
    
    // Add proper formatting
    const lines = fixed.split('\n');
    let formatted = [];
    let indentLevel = 0;
    
    for (let line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      
      if (trimmed.includes('}')) indentLevel = Math.max(0, indentLevel - 1);
      
      formatted.push('  '.repeat(indentLevel) + trimmed);
      
      if (trimmed.includes('{')) indentLevel++;
    }
    
    fs.writeFileSync(filePath, formatted.join('\n') + '\n');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all TypeScript test files
const testDir = path.join(__dirname, '__tests__');
const files = fs.readdirSync(testDir).filter(file => file.endsWith('.test.ts') || file.endsWith('.test.tsx'));

console.log(`Found ${files.length} TypeScript test files to fix`);

files.forEach(file => {
  const filePath = path.join(testDir, file);
  fixTsTestFile(filePath);
});

console.log('TypeScript test file fixing completed!');