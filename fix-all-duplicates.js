const fs = require('fs');

// Read the file
let content = fs.readFileSync('2025-cutting-edge-ai-services.ts', 'utf8');

// Split content into lines
const lines = content.split('\n');
const fixedLines = [];
let inServiceObject = false;
let serviceObjectStart = -1;
let seenProperties = new Set();

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmedLine = line.trim();
  
  // Check if we're starting a new service object
  if (trimmedLine === '{' && i > 0 && lines[i-1].trim().endsWith('{')) {
    inServiceObject = true;
    serviceObjectStart = i;
    seenProperties.clear();
    fixedLines.push(line);
    continue;
  }
  
  // Check if we're ending a service object
  if (inServiceObject && trimmedLine === '},') {
    inServiceObject = false;
    serviceObjectStart = -1;
    seenProperties.clear();
    fixedLines.push(line);
    continue;
  }
  
  // If we're in a service object, check for duplicate properties
  if (inServiceObject) {
    const propertyMatch = trimmedLine.match(/^(\w+):/);
    if (propertyMatch) {
      const propertyName = propertyMatch[1];
      if (seenProperties.has(propertyName)) {
        // Skip this duplicate property
        console.log(`Skipping duplicate property: ${propertyName} at line ${i + 1}`);
        continue;
      } else {
        seenProperties.add(propertyName);
      }
    }
  }
  
  fixedLines.push(line);
}

// Write the fixed content
const fixedContent = fixedLines.join('\n');
fs.writeFileSync('2025-cutting-edge-ai-services.ts', fixedContent);

console.log('Fixed duplicate properties in service objects');