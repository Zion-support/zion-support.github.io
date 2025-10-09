const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const filesToFix = [
  'app/page.tsx',
  'app/services/page.tsx',
  'app/marketing-tools/page.tsx',
  'app/micro-saas/page.tsx',
  'app/it-services/page.tsx',
  'app/api-docs/page.tsx',
  'app/components/ContentPromotionBanner.tsx',
  'app/components/ContentNewsletterSignup.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/components/ContentStatistics.tsx',
  'app/components/AccessibilityEnhancer.tsx',
  'app/components/ContentCarousel.tsx',
  'app/compliance/page.tsx',
  'app/components/DynamicContentShowcase.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the newer version (after =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixMergeConflicts(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Merge conflict fixing completed!');