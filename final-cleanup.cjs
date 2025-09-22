<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to completely rewrite a file with a simple structure
function rewriteFile(filePath) {
  try {
    const filename = path.basename(filePath, path.extname(filePath));
    const dirname = path.dirname(filePath);
    const isContent = dirname.includes('/content/');
    const isBlog = dirname.includes('/blog/');
    
    // Generate title from filename
    const title = filename
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Simple page content
    const content = `import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: '${title}',
  description: '${title} - Professional ${isContent ? 'content' : 'blog'} page with comprehensive information and insights.'
};

export default function ${filename.charAt(0).toUpperCase() + filename.slice(1)}Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-6 text-sm text-purple-700 font-semibold">${isContent ? 'Content' : 'Blog'}</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">${title}</h1>
      <p className="text-gray-600 mb-8">
        ${title} - Professional ${isContent ? 'content' : 'blog'} page with comprehensive information and insights.
      </p>

      <div className="prose prose-lg max-w-none">
        <h2>Overview</h2>
        <p>
          This page provides comprehensive information about ${title.toLowerCase()} with 
          detailed insights and practical guidance.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Comprehensive coverage</li>
          <li>Professional insights</li>
          <li>Practical guidance</li>
          <li>Industry best practices</li>
        </ul>
      </div>

      <div className="mt-10 flex gap-4">
        <Link href="/contact" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Get Started</Link>
        <Link href="/resources" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Learn More</Link>
      </div>
    </main>
  );
}`;

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Rewrote: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error rewriting ${filePath}:`, error.message);
=======

.replace(/<<<<<<< [^\n]+[\s\S]*?
}

// Function to clean common syntax errors;)
function cleanSyntaxErrors(content) {
  return content;
    // Remove invalid characters at start of files;
    .replace(/^[^\w\s<]/gm, )
    // Fix common parsing issues;
    .replace(/export\s+default\s+export\s+default/g, 'export default')
    .replace(/import\s+import/g, 'import')
    .replace(/const\s+const/g, 'const')
    .replace(/let\s+let/g, 'let')
    .replace(/var\s+var/g, 'var')
    // Fix unterminated strings;
    .replace(/"[^"]*$/gm, '"')
    .replace(/'[^']*$/gm, "'")"
    // Fix unterminated regex;"
    .replace(/\/[^\/]*$/gm, '/')
    // Remove invalid characters;
    .replace(/[^\x20-\x7E\n\r\t]/g, )
    // Fix common JSX issues;
    .replace(/<[^>]*$/gm, )
    // Fix common TypeScript issues;
    .replace(/:\s*[^=,;{}()[\]]*$/gm, ': any')
    // Remove empty lines with only special characters;
    .replace(/^[^\w\s]*$/gm, );

// Function to process a file;
function processFile(filePath) {
  try {
  // TODO: Implement
    const content = fs.readFileSync(filePath, 'utf8');
    let cleaned = cleanMergeConflicts(content);
    cleaned = cleanSyntaxErrors(cleaned);

    if (cleaned !== content) {
      fs.writeFileSync(filePath, cleaned);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
>>>>>>> da3c549c14ad0d2a580007f3c8b06256cb24f4aa
    return false;
  }
}

<<<<<<< HEAD
// List of all problematic files to rewrite
const problematicFiles = [
  'app/content/ai-2026-evaluation-harness-blueprint/page.tsx',
  'app/content/ai-2026-evaluation-hub/page.tsx',
  'app/content/ai-2026-executive-guide-to-agent-adoption/page.tsx',
  'app/content/ai-2026-go-to-market-agents-blueprint/page.tsx',
  'app/content/ai-2026-operational-excellence-handbook/page.tsx'
];

console.log('Starting final cleanup...');
let fixedCount = 0;

for (const file of problematicFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    if (rewriteFile(filePath)) {
      fixedCount++;
    }
  }
}

console.log(`Final cleanup completed: ${fixedCount} files rewritten.`);
=======
// Function to recursively process directory
function processDirectory(dirPath) {
  let processedCount = 0;
// Function to recursively find all files with merge conflicts
function findConflictedFiles(dir, conflictedFiles = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findConflictedFiles(filePath, conflictedFiles);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/[a-f0-9]+\n?/g, '');
  content = content.replace(/origin\/[^\n]+\n?/g, '');
  content = content.replace(/ursor\/[^\n]+\n?/g, '');

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

  content = content.replace(/
content = content.replace(/

  // Clean up any remaining artifacts
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  // Remove any remaining conflict markers;
>>>>>>> da3c549c14ad0d2a580007f3c8b06256cb24f4aa
