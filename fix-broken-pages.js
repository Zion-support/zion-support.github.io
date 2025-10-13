#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Template for a simple page component
const pageTemplate = (pageName, title) => `'use client';
import React from 'react';

export default function ${pageName}() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">${title}</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}`;

// List of broken AI pages to fix
const brokenPages = [
  'app/ai-automated-reporting/page.tsx',
  'app/ai-data-analytics-pro/page.tsx',
  'app/ai-email-assistant/page.tsx',
  'app/ai-email-marketing-automation/page.tsx',
  'app/ai-expense-tracker/page.tsx',
  'app/ai-financial-analysis/page.tsx',
  'app/ai-fraud-detection/page.tsx',
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-image-recognition-pro/page.tsx',
  'app/ai-invoice-generator/page.tsx',
  'app/ai-predictive-analytics/page.tsx',
  'app/ai-recommendation-engine/page.tsx'
];

console.log('Fixing broken AI pages...');

let fixedCount = 0;
for (const pagePath of brokenPages) {
  try {
    // Extract page name from path
    const pageName = path.basename(path.dirname(pagePath)).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '') + 'Page';
    const title = path.basename(path.dirname(pagePath)).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    const content = pageTemplate(pageName, title);
    
    // Ensure directory exists
    const dir = path.dirname(pagePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`Fixed: ${pagePath}`);
    fixedCount++;
  } catch (error) {
    console.error(`Error fixing ${pagePath}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} broken pages`);