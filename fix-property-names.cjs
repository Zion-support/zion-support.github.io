#!/usr/bin/env node
const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/data/2025-advanced-innovative-services-expansion-v3.js', 'utf8');

// Fix split property names and values
content = content
  // Fix property names that were split
  .replace(/(\w+)\s+(\w+):/g, (match, p1, p2) => {
    const combined = p1 + p2;
    // Only fix if it looks like a camelCase property
    if (p2[0] === p2[0].toUpperCase()) {
      return combined + ':';
    }
    return match;
  })
  // Fix array values that were split
  .replace(/'([^']*)\s+([^']*)'/g, (match, p1, p2) => {
    // Only combine if both parts look like words
    if (p1 && p2 && !p1.includes(' ') && !p2.includes(' ')) {
      return `'${p1}${p2}'`;
    }
    return match;
  })
  // Fix specific known issues
  .replace(/Legal Tech &  Compliance/g, 'Legal Tech & Compliance')
  .replace(/real Service/g, 'realService')
  .replace(/use Cases/g, 'useCases')
  .replace(/Docu Sign/g, 'DocuSign')
  .replace(/Microsoft  Office/g, 'Microsoft Office')
  .replace(/Google  Workspace/g, 'Google Workspace')
  .replace(/Natural Language  Processing/g, 'Natural Language Processing')
  .replace(/Machine  Learning/g, 'Machine Learning')
  .replace(/Cloud  Computing/g, 'Cloud Computing');

// Write the fixed content back
fs.writeFileSync('/workspace/data/2025-advanced-innovative-services-expansion-v3.js', content);

console.log('Fixed split property names and values in data file');