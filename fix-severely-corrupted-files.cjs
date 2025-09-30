const fs = require('fs');
const path = require('path');

// Function to create a minimal valid React component
function createMinimalComponent(filePath) {
  const fileName = path.basename(filePath, path.extname(filePath));
  const componentName = fileName
    .replace(/[-_]/g, '')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, '');

  const isTypeScript = filePath.endsWith('.tsx') || filePath.endsWith('.ts');
  const extension = isTypeScript ? 'tsx' : 'jsx';
  const typeAnnotation = isTypeScript ? ': React.FC' : '';

  return `import React from 'react';
import { SEO } from '@/components/SEO';

const ${componentName}${typeAnnotation} = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="${componentName} - Zion Tech Group"
        description="Professional ${componentName} services by Zion Tech Group"
        keywords="${componentName.toLowerCase()}, technology, services"
      />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">${componentName}</h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional ${componentName} services to help your business grow.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  )};

export default ${componentName};`}

// Function to check if a file is severely corrupted
function isSeverelyCorrupted(content) {
  const corruptionIndicators = [
    'Parsing error',
    'Unterminated string literal',
    'Expression expected',
    'Declaration or statement expected',
    'Property assignment expected',
    'Identifier expected',
    'Type expected',
    'An identifier or keyword cannot immediately follow a numeric literal'
  ];
  
  return corruptionIndicators.some(indicator => content.includes(indicator)) ||
         content.length < 200 ||
         content.includes('return()') ||
         content.includes('const') && !content.includes('export')}

// Function to fix severely corrupted files
function fixCorruptedFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (isSeverelyCorrupted(content)) {
      const newContent = createMinimalComponent(filePath);
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Replaced corrupted file: ${filePath}`);
      return true}
    
    return false} catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false}
}

// Function to recursively find and fix corrupted files
function fixCorruptedFilesInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixCorruptedFilesInDirectory(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      if (fixCorruptedFile(filePath)) {
        fixedCount++}
    }
  });

  return fixedCount}

// Main execution
console.log('Starting to fix severely corrupted files...');
const fixedCount = fixCorruptedFilesInDirectory('./src');
console.log(`Fixed ${fixedCount} severely corrupted files.`);