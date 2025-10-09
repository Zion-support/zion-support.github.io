const fs = require('fs');
const path = require('path');

// Get all files with unused imports from the lint output
const filesToFix = [
  'src/ai-edge-computing/page.tsx',
  'src/ai-email-marketing/page.tsx',
  'src/ai-hr-assistant/page.tsx',
  'src/ai-inventory-manager/page.tsx',
  'src/ai-invoice-generator/page.tsx',
  'src/ai-lead-generation/page.tsx',
  'src/ai-lead-scoring/page.tsx',
  'src/ai-ml-platform/page.tsx',
  'src/ai-mobile-app-development/page.tsx',
  'src/ai-mobile-builder/page.tsx',
  'src/ai-nlp/page.tsx',
  'src/ai-performance-tracker/page.tsx',
  'src/ai-predictive-analytics/page.tsx',
  'src/ai-project-manager/page.tsx',
  'src/ai-research-development/page.tsx',
  'src/ai-robotics/page.tsx',
  'src/ai-sales-forecasting/page.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Find the import line with lucide-react
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (importMatch) {
      // For now, just remove the entire lucide-react import since most are unused
      content = content.replace(importMatch[0], '');
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  fixFile(file);
});

console.log('All remaining import fixing completed!');