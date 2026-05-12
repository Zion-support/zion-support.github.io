const fs = require('fs');
const path = require('path');

// Parse coverage report and suggest files needing tests
const coverageReport = fs.readFileSync('coverage/lcov.info', 'utf8');
const blocks = coverageReport.split('\n\n').filter(b => b.trim());

const suggestions = blocks.map(block => {
  const fileMatch = block.match(/SF:(.*)/);
  if (!fileMatch) return null;
  const fileName = fileMatch[1];
  const lines = block.split('\n');
  const missingLines = lines.filter(line => 
    line.startsWith('DA:') && !line.includes(',1')
  ).length;
  return { file: fileName, missing: missingLines };
}).filter(Boolean);

// Write suggestions to file for PR comment
fs.writeFileSync('.hermes/memory/test-suggestions.json', JSON.stringify(suggestions, null, 2));
console.log('Test coverage suggestions written to .hermes/memory/test-suggestions.json');