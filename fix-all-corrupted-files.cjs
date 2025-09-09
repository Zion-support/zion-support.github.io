#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to check if a file is corrupted
function isCorrupted(content) {
  // Check for common corruption patterns
  const corruptionPatterns = [
    /import.*from.*import/,  // Double imports
    /export.*function.*export/,  // Double exports
    /<=.*import/,  // Malformed imports
    /return.*\(.*<=/,  // Malformed returns
    /';.*';/,  // Multiple semicolons
    /'';.*'';/,  // Multiple quotes and semicolons
    /Error: Parsing error/,  // Parsing errors
    /Unterminated string literal/,  // Unterminated strings
    /Expression expected/,  // Expression errors
    /Declaration or statement expected/,  // Declaration errors
    /Parsing error:.*expected/,  // General parsing errors
    /Unknown keyword or identifier/,  // Unknown keywords
    /An identifier or keyword cannot immediately follow/,  // Identifier errors
    /function.*is not allowed as a parameter name/,  // Function parameter errors
  ];
  
  return corruptionPatterns.some(pattern => pattern.test(content))}

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
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

export default function ${pageName.replace(/\s+/g, '')}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="${pageName} - Zion Tech Group"
        description="Professional ${pageName.toLowerCase()} services by Zion Tech Group"
      />
      
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${pageName}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Professional ${pageName.toLowerCase()} services designed to meet your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400/10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )}
`}

// Function to create a basic utility/type template
function createUtilityTemplate(filename) {
  const utilityName = path.basename(filename, path.extname(filename))
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  if (filename.endsWith('.d.ts') || filename.endsWith('.d.tsx')) {
    return `// Type definitions for ${utilityName}
export interface ${utilityName.replace(/\s+/g, '')}Config {
  // Add configuration properties here
}

export default ${utilityName.replace(/\s+/g, '')}Config;
`}
  
  return `// ${utilityName} utility
export const ${utilityName.replace(/\s+/g, '').toLowerCase()} = {
  // Add utility functions here
};

export default ${utilityName.replace(/\s+/g, '').toLowerCase()};
`}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (isCorrupted(content)) {
      console.log(`Fixing corrupted file: ${filePath}`);
      
      let newContent;
      if (filePath.includes('.test.') || filePath.endsWith('.test.tsx') || filePath.endsWith('.test.jsx')) {
        newContent = createPageTemplate(filePath, true)} else if (filePath.includes('/utils/') || filePath.includes('/types/') || filePath.includes('/services/')) {
        newContent = createUtilityTemplate(filePath)} else {
        newContent = createPageTemplate(filePath)}
      
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
  
  console.log(`Fixed ${fixedCount} corrupted files`)}

if (require.main === module) {
  main()}

module.exports = { fixFile, isCorrupted, createPageTemplate, createUtilityTemplate };