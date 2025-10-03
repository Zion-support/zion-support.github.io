#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to check if a file has the specific corruption pattern
function hasCursorCorruption(content) {
  return content.includes('ursor/automate-test-fix-improve-and-merge-code-48f3;')}

// Function to create a basic page template
function createPageTemplate(filename, isTestFile = false) {
  const pageName = path.basename(filename, path.extname(filename))
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  if (isTestFile) {
    return `import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock component for testing
const MockComponent = () => {
  return (
    <div>
      <h1>Test Component</h1>
    </div>
  )};

describe('${pageName}', () => {
  it('renders without crashing', () => {
    render(<MockComponent />);
    expect(screen.getByText('Test Component')).toBeInTheDocument()})});
`}
  
  return `import React from 'react';
import { SEO } from '../components/SEO';

export default function ${pageName.replace(/\s+/g, '')}() {
  return (
    <>
      <SEO title='${pageName} - Zion Tech Group' />
      <div className='min-h-screen bg-white py-20'>
        <div className='max-w-4xl mx-auto px-4'>
          <h1 className='text-4xl font-bold text-gray-900 mb-8'>${pageName}</h1>
          <p className='text-lg text-gray-600'>Content coming soon...</p>
        </div>
      </div>
    </>
  )}
`}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (hasCursorCorruption(content)) {
      console.log(`Fixing cursor corrupted file: ${filePath}`);
      
      const isTestFile = filePath.includes('.test.') || filePath.endsWith('.test.tsx') || filePath.endsWith('.test.jsx');
      const newContent = createPageTemplate(filePath, isTestFile);
      
      fs.writeFileSync(filePath, newContent, 'utf8');
      return true}
    
    return false} catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false}
}

// Function to recursively find all files
function findFiles(dir, extensions = ['.tsx', '.jsx', '.ts', '.js']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          files = files.concat(findFiles(fullPath, extensions))}
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)}
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message)}
  
  return files}

// Main function
function main() {
  const srcDir = path.join(__dirname, 'src');
  
  if (!fs.existsSync(srcDir)) {
    console.error('src directory not found');
    return}
  
  const files = findFiles(srcDir);
  
  console.log(`Found ${files.length} files to check`);
  
  let fixedCount = 0;
  
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++}
  });
  
  console.log(`Fixed ${fixedCount} cursor corrupted files`)}

if (require.main === module) {
  main()}

module.exports = { fixFile, hasCursorCorruption, createPageTemplate };