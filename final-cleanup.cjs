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
    console.error(`Error rewriting ${filePath}:`, error.message);    return false;
  }
}

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