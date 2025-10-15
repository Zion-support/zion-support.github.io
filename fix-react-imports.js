import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files that have unused React imports
const filesToFix = [
  'app/zion-ai-content-moderator/page.tsx',
  'app/zion-ai-customer-churn-predictor/page.tsx',
  'app/zion-ai-customer-sentiment-tracker/page.tsx',
  'app/zion-ai-document-analyzer/page.tsx',
  'app/zion-ai-financial-forecaster/page.tsx',
  'app/zion-ai-meeting-transcriber/page.tsx',
  'app/zion-ai-sales-predictor/page.tsx',
  'app/zion-ai-workflow-automator/page.tsx',
  'app/zion-smart-expense-tracker/page.tsx'
];

function removeUnusedReactImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused React import
    content = content.replace(/^import React from 'react';\n/, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Removed unused React import from ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    removeUnusedReactImport(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Unused React imports fixed!');