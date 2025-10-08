import fs from 'fs';
import path from 'path';

const filesWithConflicts = [
  'app/utils/healthCheck.ts',
  'app/utils/securityEnhancer.ts',
  'app/utils/performanceUtils.ts',
  'app/utils/performanceMonitor.ts',
  'app/utils/advancedPerformanceOptimizer.ts',
  'app/utils/structuredData.ts',
  'app/utils/monitoring.ts',
  'app/utils/performanceOptimizer.ts',
  'app/utils/accessibilityEnhancer.ts',
  'app/utils/registerServiceWorker.ts',
  'app/utils/logger.ts'
];

filesWithConflicts.forEach(filePath => {
  try {
    const fullPath = path.join('/workspace', filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/^<<<<<<< HEAD$/gm, '');
    content = content.replace(/^=======$/gm, '');
    content = content.replace(/^>>>>>>> [^\n]+$/gm, '');
    
    // Clean up any double newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Merge conflict fixes completed');