#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const apiFiles = [
  'api/create-payment-intent.js',
  'api/error-report.js',
  'api/quotes.js',
  'api/shipping-rates.js',
  'api/subscribe.js',
  'api/wallet.js'
];

function fixApiFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file already has the function signature
    if (content.includes('export default function handler')) {
      console.log(`Skipping ${filePath} - already has function signature`);
      return;
    }
    
    // Add function signature at the beginning
    content = 'export default function handler(req, res) {\n' + content;
    
    // Add closing brace at the end if not present
    if (!content.trim().endsWith('}')) {
      content = content.trim() + '\n}';
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all API files
for (const file of apiFiles) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixApiFile(fullPath);
  } else {
    console.log(`File not found: ${file}`);
  }
}

console.log('API files fixed');