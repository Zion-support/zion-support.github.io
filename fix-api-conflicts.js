#!/usr/bin/env node

import fs from 'fs';

const apiFiles = [
  'api/create-checkout-session.js',
  'api/create-payment-intent.js',
  'api/error-report.js',
  'api/newsletter/subscribe.js',
  'api/onsite-request.js',
  'api/quotes.js',
  'api/shipping-rates.js',
  'api/subscribe.js'
];

function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolved = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<<') || line.startsWith('=======') || line.startsWith('>>>>>>>')) {
      // Skip all conflict markers until we find the end
      while (i < lines.length && (lines[i].startsWith('<<<<<<<') || lines[i].startsWith('=======') || lines[i].startsWith('>>>>>>>'))) {
        i++;
      }
    } else {
      resolved.push(line);
      i++;
    }
  }
  
  return resolved.join('\n');
}

function fixApiFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const resolved = resolveMergeConflicts(content);
    
    if (content !== resolved) {
      fs.writeFileSync(filePath, resolved);
      console.log(`Fixed merge conflicts in: ${filePath}`);
    } else {
      console.log(`No conflicts found in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log('Fixing API files merge conflicts...');
apiFiles.forEach(fixApiFile);
console.log('API files merge conflict resolution completed!');