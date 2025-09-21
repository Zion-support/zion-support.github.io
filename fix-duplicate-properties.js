const fs = require('fs');

// Read the file
let content = fs.readFileSync('2025-cutting-edge-ai-services.ts', 'utf8');

// Find and fix duplicate properties in service objects
// Look for patterns like "property: value,\n    property: value," and remove duplicates
const duplicatePropertyRegex = /(\w+):\s*[^,\n]+,\s*\n\s*\1:/g;

let match;
let replacements = 0;

while ((match = duplicatePropertyRegex.exec(content)) !== null) {
  // Find the full duplicate property block
  const start = match.index;
  const firstPropertyEnd = content.indexOf(',', start) + 1;
  const secondPropertyStart = content.indexOf(match[1] + ':', firstPropertyEnd);
  const secondPropertyEnd = content.indexOf(',', secondPropertyStart) + 1;
  
  // Remove the duplicate property
  content = content.substring(0, secondPropertyStart) + content.substring(secondPropertyEnd);
  
  // Reset regex position
  duplicatePropertyRegex.lastIndex = start;
  replacements++;
}

if (replacements > 0) {
  fs.writeFileSync('2025-cutting-edge-ai-services.ts', content);
  console.log(`Fixed ${replacements} duplicate properties`);
} else {
  console.log('No duplicate properties found');
}