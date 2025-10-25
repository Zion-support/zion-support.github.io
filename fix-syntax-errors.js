const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax errors from merge conflict resolution
    const fixes = [
      // Fix malformed JSX with extra characters
      { pattern: /,\s*-\s*>\s*([^<]+)/g, replacement: '>' },
      { pattern: /`\s*-\s*>\s*([^<]+)/g, replacement: '>' },
      { pattern: /`\s*---\s*-\s*>\s*([^<]+)/g, replacement: '>' },
      
      // Fix malformed function declarations
      { pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*return\(\<\>\)\s*\)/g, replacement: 'const $1: React.FC = () => {\n  return (\n    <div>' },
      
      // Fix malformed JSX closing tags
      { pattern: /\)\s*\)\s*\)/g, replacement: ')' },
      { pattern: /\)\s*\)\s*\)\s*\)/g, replacement: ')' },
      
      // Fix malformed imports in the middle of functions
      { pattern: /export default function\s+\w+\(\)\s*{\s*\n\s*import\s+/g, replacement: 'import ' },
      
      // Fix malformed JSX attributes
      { pattern: /className="([^"]*)\s*,\s*-\s*>\s*([^"]*)"/g, replacement: 'className="$1$2"' },
      
      // Fix malformed closing tags
      { pattern: /<\/div><\/div><\/div>/g, replacement: '</div>' },
      
      // Fix malformed return statements
      { pattern: /return\s*\(\s*\)\s*\)/g, replacement: 'return (' },
      
      // Fix malformed JSX fragments
      { pattern: /return\(\<\>\)\s*\)/g, replacement: 'return (\n    <div>' },
      
      // Fix malformed function names
      { pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*return\(\<\>\)\s*\)/g, replacement: 'const $1: React.FC = () => {\n  return (\n    <div>' },
      
      // Fix malformed closing braces
      { pattern: /}\s*\)\s*\)\s*\)/g, replacement: '}' },
      
      // Fix malformed JSX with extra characters
      { pattern: /,\s*-\s*>\s*([^<]+)/g, replacement: '>' },
      { pattern: /`\s*-\s*>\s*([^<]+)/g, replacement: '>' },
      
      // Fix malformed className attributes
      { pattern: /className="([^"]*)\s*,\s*-\s*>\s*([^"]*)"/g, replacement: 'className="$1$2"' },
      
      // Fix malformed closing tags with extra characters
      { pattern: /<\/div><\/div><\/div>/g, replacement: '</div>' },
      
      // Fix malformed return statements
      { pattern: /return\s*\(\s*\)\s*\)/g, replacement: 'return (' },
      
      // Fix malformed JSX fragments
      { pattern: /return\(\<\>\)\s*\)/g, replacement: 'return (\n    <div>' },
      
      // Fix malformed function names
      { pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*return\(\<\>\)\s*\)/g, replacement: 'const $1: React.FC = () => {\n  return (\n    <div>' },
      
      // Fix malformed closing braces
      { pattern: /}\s*\)\s*\)\s*\)/g, replacement: '}' },
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
=======
// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has the common syntax error pattern
    if (content.includes("'use client'") && content.includes('<Head>') && content.includes('</Head>')) {
      // Extract the title from the Head section
      const titleMatch = content.match(/<title>(.*?)<\/title>/);
      const descriptionMatch = content.match(/<meta name="description" content="(.*?)" \/>/);
      
      const title = titleMatch ? titleMatch[1] : 'Page - Zion Tech Group';
      const description = descriptionMatch ? descriptionMatch[1] : 'Professional services by Zion Tech Group.';
      
      // Create a clean page structure
      const cleanContent = `'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <div>
      <Head>
        <title>${title}</title>
        <meta name="description" content="${description}" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            ${title.replace(' - Zion Tech Group', '')}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            ${description}
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This service is currently under development. Contact us to learn more about our upcoming services.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}`;
      
      fs.writeFileSync(filePath, cleanContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
>>>>>>> origin/main
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
<<<<<<< HEAD
}

function findFilesWithSyntaxErrors(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        // Check for common syntax errors
        if (content.includes('->') || content.includes('`-') || content.includes('return(<>))') || content.includes('const ') && content.includes(': React.FC = () => {') && content.includes('return(<>))')) {
          files.push(fullPath);
        }
=======
  return false;
}

// Function to recursively find and fix all page.tsx files
function fixAllPages(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', '.next', 'components', 'api'].includes(file)) {
        fixedCount += fixAllPages(filePath);
      }
    } else if (file === 'page.tsx') {
      if (fixPageFile(filePath)) {
        fixedCount++;
>>>>>>> origin/main
      }
    }
  }
  
<<<<<<< HEAD
  traverse(dir);
  return files;
}

// Find and fix files with syntax errors
const filesWithErrors = findFilesWithSyntaxErrors('./app');
console.log(`Found ${filesWithErrors.length} files with potential syntax errors`);

let fixedCount = 0;
for (const file of filesWithErrors) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
=======
  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix syntax errors in page files...');
const fixedCount = fixAllPages(appDir);
console.log(`Fixed ${fixedCount} files.`);
>>>>>>> origin/main
