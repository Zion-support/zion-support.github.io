const fs = require('fs');
const path = require('path');

// Function to fix JSX fragment syntax
function fixJSXFragment(content) {
  let fixed = content;
  
  // Fix the specific pattern where JSX fragment is missing opening <
  // Pattern: return ( followed by <> (which should be <>)
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
    console.log(`Processing ${file}...`);
    const content = fs.readFileSync(file, 'utf8');
    
    // Check if the file has the problematic pattern
    if (content.includes('return (\n    <>')) {
      console.log(`Found problematic pattern in ${file}`);
      
      // Fix the pattern
      const fixed = content.replace(/return\s*\(\s*<>\s*$/gm, 'return (\n    <>');
      
      if (content !== fixed) {
        fs.writeFileSync(file, fixed);
        console.log(`Fixed JSX fragment in: ${file}`);
      } else {
        console.log(`No changes needed for ${file}`);
      }
    } else {
      console.log(`No problematic pattern found in ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log('JSX fragment fixing completed!');