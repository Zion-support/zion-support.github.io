const fs = require('fs');
const path = require('path');

// Function to fix JSX fragment syntax
function fixFragmentSyntax(content) {
  let fixed = content;
  
  // Fix malformed JSX fragments - the issue is missing opening <
  fixed = fixed.replace(/return\s*\(\s*<>\s*$/gm, 'return (\n    <>');
  
  // Fix any other malformed JSX patterns
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  
  return fixed;
}

// List of problematic files
const problematicFiles = [
  'app/ai-audio-processor/page.tsx',
  'app/ai-code-assistant/page.tsx',
  'app/ai-legal-assistant/page.tsx',
  'app/ai-medical-assistant/page.tsx',
  'app/ai-translator/page.tsx'
];

// Fix each problematic file
for (const file of problematicFiles) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixed = fixFragmentSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(file, fixed);
      console.log(`Fixed fragment syntax in: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log('Fragment syntax fixing completed!');