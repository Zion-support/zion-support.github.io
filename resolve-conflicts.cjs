const fs = require('fs');
const path = require('path');

// List of files with conflicts to resolve
const conflictFiles = [
  'app/ai-cybersecurity/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/components/AccessibilityEnhancer.tsx',
  'app/components/AdvancedSEOOptimizer.tsx',
  'app/components/EnhancedErrorBoundary.tsx',
  'app/components/SEOEnhancer.tsx',
  'app/components/SEOHead.tsx',
  'app/utils/accessibilityChecker.ts',
  'app/utils/link.tsx',
  'src/page-minimal.tsx',
  'src/utils/enhanced-performance.ts'
];

function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove conflict markers and keep the version from our branch (after =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n?/g, '');
    content = content.replace(/>>>>>>> cursor\/fix-errors-and-merge-to-main-2f6a\n?/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> cursor\/fix-errors-and-merge-to-main-2f6a\n?/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Resolved conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error resolving ${filePath}:`, error.message);
  }
}

// Resolve conflicts in all files
conflictFiles.forEach(resolveConflicts);

console.log('Conflict resolution completed!');