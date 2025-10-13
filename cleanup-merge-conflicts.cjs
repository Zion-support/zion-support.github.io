const fs = require('fs');
const path = require('path');

function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+\n?/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned: ${filePath}`);
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

// Clean critical app files
const criticalFiles = [
  'app/page.tsx',
  'app/components/Navigation.tsx',
  'app/components/Footer.tsx',
  'app/components/PerformanceOptimizer.tsx',
  'app/components/ImprovedNavigation.tsx',
  'app/components/ImprovedFooter.tsx',
  'app/micro-saas/page.tsx'
];

criticalFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    cleanMergeConflicts(fullPath);
  }
});

console.log('Merge conflicts cleaned from critical files');