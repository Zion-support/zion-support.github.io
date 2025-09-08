const fs = require('fs');
const path = require('path');

// Files that need React import fixes
const filesToFix = [
  'src/components/DynamicListingPage.tsx',
  'src/components/EnhancedContactForm.tsx',
  'src/components/EnhancedServicesShowcase.tsx',
  'src/components/FeaturesShowcase.tsx',
  'src/components/ProductListingCard.tsx',
  'src/components/analytics/AnalyticsSummary.tsx',
  'src/components/analytics/UserBehaviorStats.tsx',
  'src/components/talent/TalentCard.tsx',
  'src/components/ui/sonner.tsx',
  'src/utils/performance-monitor.ts',
  'src/utils/performance.ts',
  'src/utils/pwa.ts',
  'src/types/app.ts'
];

function fixReactImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if React is already imported
    if (content.includes('import React')) {
      return false;
    }

    // Check if file uses React (JSX or React.*)
    if (content.includes('<') || content.includes('React.')) {
      // Add React import at the top
      const lines = content.split('\n');
      let insertIndex = 0;
      
      // Find the first import statement
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          insertIndex = i;
          break;
        }
      }

      // Insert React import
      lines.splice(insertIndex, 0, "import React from 'react';");
      content = lines.join('\n');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed React import in ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Fix all files
let fixedCount = 0;
filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixReactImports(file)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log(`Fixed React imports in ${fixedCount} files`);