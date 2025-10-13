const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const conflictFiles = [
  'api/create-payment-intent.js',
  'api/error-report.js',
  'api/newsletter/subscribe.js',
  'api/onsite-request.js',
  'api/quotes.js',
  'api/shipping-rates.js',
  'api/subscribe.js',
  'api/wallet.js',
  'app/cloud-infrastructure/page.tsx',
  'app/components/AccessibilityEnhancer.tsx',
  'app/components/PerformanceMonitor.tsx',
  'app/zion-ai-email-analyzer/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-smart-expense-categorizer/page.tsx',
  'app/zion-smart-inventory-optimizer/page.tsx',
  'fix-merge-conflicts.cjs',
  'fix-merge-conflicts.js',
  'tsconfig.tsbuildinfo'
];

function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version (current branch)
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> main\n/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> main\n/g, '');
    
    // Clean up extra newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Resolved conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error resolving ${filePath}:`, error.message);
  }
}

// Resolve all conflicts
conflictFiles.forEach(resolveConflicts);

console.log('All merge conflicts resolved!');