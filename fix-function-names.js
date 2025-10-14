import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of page files that need function name fixes
const pageFiles = [
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/web-development/page.tsx',
  'app/zion-ai-accounting-suite/page.tsx',
  'app/zion-ai-api-manager/page.tsx',
  'app/zion-ai-chatbot-builder/page.tsx',
  'app/zion-ai-data-warehouse/page.tsx',
  'app/zion-ai-document-processor/page.tsx',
  'app/zion-ai-email-optimizer/page.tsx',
  'app/zion-ai-expense-tracker/page.tsx',
  'app/zion-ai-lead-scoring/page.tsx',
  'app/zion-ai-mobile-app-builder/page.tsx',
  'app/zion-ai-social-listener/page.tsx',
  'app/zion-ai-testing-automation/page.tsx',
  'app/zion-ai-workflow-automation/page.tsx',
  'app/zion-ecommerce-optimizer/page.tsx',
  'app/zion-hr-assistant-pro/page.tsx'
];

// Function to generate proper function name from file path
function getFunctionName(filePath) {
  const parts = filePath.split('/');
  const pageName = parts[parts.length - 2]; // Get the directory name before page.tsx
  return pageName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Page';
}

// Function to generate proper display name from file path
function getDisplayName(filePath) {
  const parts = filePath.split('/');
  const pageName = parts[parts.length - 2]; // Get the directory name before page.tsx
  return pageName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Template for page files
function generatePageContent(functionName, displayName) {
  return `"use client";

import React from "react";

export default function ${functionName}() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">${displayName}</h1>
      <p className="text-gray-300 text-lg">This page is under development.</p>
    </div>
  );
}`;
}

// Fix each page file
pageFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  const functionName = getFunctionName(filePath);
  const displayName = getDisplayName(filePath);
  const content = generatePageContent(functionName, displayName);
  
  try {
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath} -> ${functionName}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Function name fixing completed!');