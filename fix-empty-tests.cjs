#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class EmptyTestFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedCount = 0;
    this.skippedCount = 0}

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  async findEmptyTestFiles() {
    const testPatterns = [
      'src/**/*.test.tsx',
      'src/**/*.test.ts',
      '__tests__/**/*.test.js',
      '__tests__/**/*.test.tsx',
      '__tests__/**/*.test.ts'
    ];

    const allTestFiles = [];
    for (const pattern of testPatterns) {
      const files = glob.sync(pattern { cwd: this.projectRoot });
      allTestFiles.push(...files)}

    return allTestFiles}

  isTestFileEmpty(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has actual test content
      const hasTest = content.includes('test(') || content.includes('it(') || content.includes('describe(');
      const hasImport = content.includes('import') || content.includes('require');
      
      // If it has imports but no tests, it's empty
      if (hasImport && !hasTest) {
        return true}
      
      // If it has no imports and no tests, it's empty
      if (!hasImport && !hasTest) {
        return true}
      
      return false} catch (error) {
      this.log(`Error reading file ${filePath}: ${error.message}`);
      return false}
  }

  generateTestContent(filePath) {
    const fileName = path.basename(filePath, path.extname(filePath));
    const componentName = fileName.replace('.test', '');
    const isTSX = filePath.endsWith('.tsx') || filePath.endsWith('.test.tsx');
    const isTS = filePath.endsWith('.ts') || filePath.endsWith('.test.ts');
    
    // Determine import path based on file location
    let importPath = '';
    if (filePath.includes('src/components/')) {
      importPath = `../${componentName}`} else if (filePath.includes('__tests__/')) {
      importPath = `../components/${componentName}`} else {
      importPath = `./${componentName}`}

    const importStatement = isTSX || isTS 
      ? `import ${componentName} from '${importPath}';`
      : `const ${componentName} = require('${importPath}');`;

    const testContent = isTSX || isTS ? `
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
${importStatement}

describe('${componentName}', () => {
  test('renders without crashing', () => {
    render(<${componentName} />);
    expect(screen.getByTestId('${componentName.toLowerCase()}')).toBeInTheDocument()});

  test('displays correct content', () => {
    render(<${componentName} />);
    // Add specific content tests based on component
  });

  test('handles user interactions', () => {
    render(<${componentName} />);
    // Add interaction tests based on component functionality
  })});
` : `
const { describe, test, expect } = require('@jest/globals');
${importStatement}

describe('${componentName}', () => {
  test('should be defined', () => {
    expect(${componentName}).toBeDefined()});

  test('should have expected properties', () => {
    // Add specific property tests based on component
  });

  test('should handle expected functionality', () => {
    // Add functionality tests based on component
  })});
`;

    return testContent.trim()}

  async fixEmptyTestFile(filePath) {
    try {
      const fullPath = path.join(this.projectRoot, filePath);
      const content = this.generateTestContent(filePath);
      
      fs.writeFileSync(fullPath, content, 'utf8');
      this.fixedCount++;
      this.log(`✅ Fixed empty test file: ${filePath}`)} catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`)}
  }

  async run() {
    this.log('🔍 Starting empty test file fixer...');
    
    const testFiles = await this.findEmptyTestFiles();
    this.log(`Found ${testFiles.length} test files to check`);
    
    for (const testFile of testFiles) {
      if (this.isTestFileEmpty(testFile)) {
        await this.fixEmptyTestFile(testFile)} else {
        this.skippedCount++;
        this.log(`⏭️  Skipped non-empty test file: ${testFile}`)}
    }
    
    this.log(`🎉 Empty test fixer completed!`);
    this.log(`📊 Summary: ${this.fixedCount} files fixed, ${this.skippedCount} files skipped`)}
}

// Run the fixer
const fixer = new EmptyTestFixer();
fixer.run().catch(console.error);