const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const filesToFix = [
  'app/components/AccessibilityComponents.tsx',
  'app/components/AccessibilityUtils.tsx',
  'app/components/EnhancedAccessibility.tsx',
  'app/components/Footer.tsx',
  'app/components/LazyImage.tsx',
  'app/components/OptimizedImage.tsx',
  'app/components/PerformanceDashboard.tsx',
  'app/components/PerformanceImage.tsx',
  'app/components/SEOHead.tsx',
  'app/components/Sidebar.tsx',
  'app/pages/AdminPage.tsx',
  'app/pages/ContactPage.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version (first part)
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/    
    // Clean up extra newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all files
let fixedCount = 0;
filesToFix.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed merge conflicts in ${fixedCount}/${filesToFix.length} files`);