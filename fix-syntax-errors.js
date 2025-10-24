const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const filesWithConflicts = [
  './src/business-intelligence/page.tsx',
  './src/analytics-tools/page.tsx',
  './src/ai-marketing/page.tsx',
  './src/marketing-tools/page.tsx',
  './src/blog/ai-2026-february-mega-breakthrough-revolution/page.tsx',
  './src/blog/ai-enterprise-transformation-2025/page.tsx',
  './src/blog/ai-2026-hyperconscious-computing-revolution/page.tsx',
  './src/blog/ai-2026-february-ultimate-consciousness-breakthrough/page.tsx',
  './src/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  './src/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx',
  './src/blog/ai-2026-enterprise-breakthrough/page.tsx',
  './src/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page.tsx'
];

// Function to clean merge conflicts
function cleanMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
  content = content.replace(/=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
  
  return content;
}

// Process each file
filesWithConflicts.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Clean merge conflicts
      content = cleanMergeConflicts(content);
      
      // Write back the cleaned content
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Merge conflict cleaning completed!');
