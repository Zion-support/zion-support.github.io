const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const filesWithConflicts = [
  './scripts/performance-analysis.js',
  './scripts/generate-sitemap.js',
  './scripts/accessibility-audit.js',
  './jest.config.js',
  './jest.setup.js',
  './app/services/page.tsx',
  './app/support/page.tsx',
  './app/pages/AboutPage.tsx',
  './app/pages/HomePage.tsx',
  './app/micro-saas-solutions/page.tsx',
  './app/it-solutions/page.tsx',
  './app/demo/page.tsx',
  './app/components/LoadingSpinner.tsx',
  './app/contact/page.tsx',
  './app/blog/page.tsx',
  './app/components/AccessibilityEnhancer.tsx',
  './app/ai-services/page.tsx',
  './app/ai-solutions/page.tsx',
  './app/ai-automation-platform/page.tsx',
  './api/wallet.js',
  './api/subscribe.js',
  './app/5g-solutions/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the content after =======
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepContent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        continue;
      }
      
      if (line.includes('=======')) {
        keepContent = true;
        continue;
      }
      
      if (line.includes('>>>>>>> cursor/analyze-improve-and-merge-code-b7b5')) {
        inConflict = false;
        keepContent = false;
        continue;
      }
      
      if (!inConflict || keepContent) {
        fixedLines.push(line);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log(`Fixed merge conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesWithConflicts.forEach(fixMergeConflicts);

console.log('All merge conflicts fixed!');