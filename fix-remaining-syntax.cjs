const fs = require('fs');
const path = require('path');

function fixFile(filepath) {
  let content = fs.readFileSync(filepath, 'utf8');
  let originalContent = content;
  
  // Fix unterminated strings and template literals at line ends
  content = content.replace(/^(\s*)(.+)(['"]);$/gm, '$1$2$3;');
  
  // Fix template literal syntax issues  
  content = content.replace(/\$\{([^}]+)`/g, '${$1}');
  content = content.replace(/`([^`]*)"\]/g, '`$1`]');
  content = content.replace(/`([^`]*)"\)/g, '`$1`)');
  
  // Fix missing closing braces
  content = content.replace(/}\s*'/g, '}');
  content = content.replace(/}\s*"/g, '}');
  content = content.replace(/;\s*'/g, ';');
  
  // Fix method declarations
  content = content.replace(/(\s+private\s+\w+\([^)]*\):[^{]+);\s*$/gm, '$1 {');
  content = content.replace(/(\s+public\s+\w+\([^)]*\):[^{]+);\s*$/gm, '$1 {');
  
  // Fix closing parens
  content = content.replace(/'\)/g, '})');
  content = content.replace(/"\)/g, '})');
  
  // Fix template literal closures
  content = content.replace(/`\s*'\s*\)/g, '`)');
  content = content.replace(/`\s*"\s*\)/g, '`)');
  
  // Fix object type definitions
  content = content.replace(/\s+'\s*\|\s*null>/g, ' } | null>');
  content = content.replace(/\s+"\s*\|\s*null>/g, ' } | null>');
  
  if (content !== originalContent) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Fixed: ${filepath}`);
    return true;
  }
  return false;
}

const files = [
  'src/utils/enhancedAccessibility.ts',
  'src/utils/enhancedPerformanceMonitoring.ts',
  'src/utils/performanceOptimizations.ts',
  'src/utils/seoOptimizer.ts',
  'src/utils/seoEnhancer.ts',
  'src/utils/testHelpers.ts',
  'src/utils/performance.ts',
  'src/utils/security.ts',
  'src/hooks/usePerformance.ts'
];

let fixedCount = 0;
files.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log(`\nTotal files fixed: ${fixedCount}/${files.length}`);
