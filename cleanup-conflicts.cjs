const fs = require('fs');
const path = require('path');

// Files that need conflict resolution
const files = [
  'api-documentation.tsx',
  'app/App.tsx',
  'app/components/AccessibilityEnhancer.tsx',
  'app/components/NewestContent2025Banner.tsx',
  'app/components/PerformanceMonitor.tsx',
  'app/components/UltimateBusinessIntelligence2025Banner.tsx',
  'app/components/UltimateBusinessIntelligenceShowcase2025.tsx',
  'app/setupTests.tsx',
  'app/utils/performanceOptimizer.ts'
];

function resolveConflicts(filePath) {
  const fullPath = path.join(__dirname, filePath);
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');

  // Remove conflict markers and keep the origin/main version (theirs)
  content = content.replace(/\n([\s\S]*?)>>>>>>> origin\/main\n/g, '$1');

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Resolved conflicts in: ${filePath}`);
}

// Resolve conflicts in all files
files.forEach(file => {
  resolveConflicts(file);
});

console.log('\nAll conflicts resolved!');