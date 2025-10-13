const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep the latest version
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all files with merge conflicts
const files = [
  '/workspace/__tests__/loading-spinner.test.tsx',
  '/workspace/app/components/ContactForm.tsx',
  '/workspace/app/components/AdvancedErrorBoundary.tsx',
  '/workspace/app/components/AdvancedPerformanceMonitor.tsx',
  '/workspace/app/components/CacheManager.tsx',
  '/workspace/app/components/ContentNewsletterSignup.tsx',
  '/workspace/app/consultation/page.tsx',
  '/workspace/app/case-studies/page.tsx',
  '/workspace/app/careers/page.tsx',
  '/workspace/app/partners/page.tsx',
  '/workspace/app/compliance/page.tsx',
  '/workspace/app/community/page.tsx',
  '/workspace/app/cloud-services/page.tsx',
  '/workspace/app/blog/page.tsx'
];

files.forEach(fixMergeConflicts);
console.log('All merge conflicts fixed!');