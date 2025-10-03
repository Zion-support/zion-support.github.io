const fs = require('fs');
const path = require('path');

const files = [
  'src/utils/enhancedPerformanceMonitoring.ts',
  'src/utils/performanceOptimizations.ts',
  'src/utils/seoOptimizer.ts',
  'src/utils/seoEnhancer.ts',
  'src/utils/testHelpers.ts',
  'src/utils/performance.ts',
  'src/utils/security.ts',
  'src/hooks/usePerformance.ts'
];

files.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping ${file} - does not exist`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let modified = false;
  
  // Fix common patterns
  const fixes = [
    // Fix unterminated template literals
    [/\$\{([^}]+)`/g, '${$1}'],
    // Fix unterminated strings with backquotes
    [/`([^`]*)"/g, '`$1`'],
    // Fix closing parentheses written as ')
    [/'\)/g, '})'],
    // Fix lone backquotes at end of lines
    [/`"\)/g, '`)'],
    // Fix missing closing braces in template literals
    [/\$\{([^}]+)"\]/g, '${$1}]'],
  ];
  
  fixes.forEach(([pattern, replacement]) => {
    const newContent = content.replace(pattern, replacement);
    if (newContent !== content) {
      modified = true;
      content = newContent;
    }
  });
  
  if (modified) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Fixed ${file}`);
  } else {
    console.log(`No fixes needed for ${file}`);
  }
});

console.log('All syntax fixes completed');
