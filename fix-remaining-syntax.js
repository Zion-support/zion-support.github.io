import fs from 'fs';

const filesToFix = [
  'app/utils/advancedPerformanceOptimizer.ts',
  'app/utils/analytics.ts',
  'app/utils/enhancedErrorMonitoring.ts',
  'app/utils/envValidator.ts',
  'app/utils/errorHandlerEnhanced.ts',
  'app/utils/healthCheck.ts',
  'app/utils/logger.ts',
  'app/utils/monitoring.ts',
  'app/utils/performanceOptimizer.ts',
  'app/utils/performanceReporter.ts',
  'app/utils/preloadOptimizer.ts',
  'app/utils/securityEnhancer.ts',
  'app/utils/seoOptimizer.ts'
];

filesToFix.forEach(filePath => {
  try {
    const fullPath = `/workspace/${filePath}`;
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove extra semicolons after every line
    content = content.replace(/;$/gm, '');
    
    // Fix common syntax issues
    content = content.replace(/,\s*$/gm, '');
    content = content.replace(/{\s*$/gm, '{');
    content = content.replace(/}\s*$/gm, '}');
    
    // Fix specific patterns
    content = content.replace(/export\s+const\s+(\w+)\s*=\s*{\s*$/gm, 'export const $1 = {');
    content = content.replace(/const\s+(\w+)\s*=\s*{\s*$/gm, 'const $1 = {');
    
    // Fix function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {');
    
    // Fix try-catch blocks
    content = content.replace(/try\s*{\s*$/gm, 'try {');
    content = content.replace(/catch\s*\(\s*(\w+)\s*\)\s*{\s*$/gm, 'catch ($1) {');
    
    // Fix object property assignments
    content = content.replace(/(\w+):\s*(\w+),?\s*$/gm, '$1: $2,');
    
    // Clean up multiple newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Remaining syntax fixes completed');