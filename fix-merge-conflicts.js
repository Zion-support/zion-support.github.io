import fs from 'fs';
import path from 'path';

// List of files with merge conflicts
const filesWithConflicts = [
  './src/components/PerformanceDashboard.tsx',
  './app/utils/accessibilityEnhancer.ts',
  './app/utils/accessibilityChecker.ts',
  './app/types/next.d.ts',
  './app/partners/page.tsx',
  './app/pricing/page.tsx',
  './app/consultation/page.tsx',
  './app/blog/page.tsx',
  './app/careers/page.tsx',
  './app/case-studies/page.tsx',
  './app/ar-vr-platform/page.tsx',
  './app/analytics-tools/page.tsx',
  './app/ai-code-assistant/page.tsx',
  './app/ai-code-security-auditor/page.tsx',
  './app/ai-crm-assistant/page.tsx',
  './app/ai-blockchain-solutions/page.tsx',
  './app/ai-cloud-infrastructure/page.tsx',
  './app/ai-content-generation/page.tsx',
  './app/ai-api-manager/page.tsx',
  './app/ai-content-studio/page.tsx',
  './app/ai-computer-vision/page.tsx',
  './app/ai-analytics/page.tsx',
  './app/ai-api-management/page.tsx',
  './app/ai-blockchain-analytics/page.tsx',
  './app/ai-content-writer/page.tsx',
  './app/ai-content-delivery-network/page.tsx',
  './app/ai-autonomous-systems/page.tsx',
  './app/ai-climate-solutions-pro/page.tsx'
];

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Split by merge conflict markers
    const parts = content.split(/^<<<<<<< HEAD$/m);
    
    if (parts.length <= 1) {
      console.log(`No merge conflicts found in ${filePath}`);
      return;
    }
    
    let resolvedContent = parts[0]; // Content before first conflict
    
    for (let i = 1; i < parts.length; i++) {
      const part = parts[i];
      const conflictParts = part.split(/^=======$/m);
      
      if (conflictParts.length === 2) {
        const afterConflict = conflictParts[1].split(/^>>>>>>> .+$/m);
        if (afterConflict.length >= 2) {
          // Use the version after ======= (the newer version)
          resolvedContent += afterConflict[0];
          if (afterConflict.length > 1) {
            resolvedContent += afterConflict.slice(1).join('');
          }
        } else {
          // Fallback: use the part after =======
          resolvedContent += conflictParts[1];
        }
      } else {
        // No ======= found, keep the original part
        resolvedContent += part;
      }
    }
    
    // Write the resolved content back
    fs.writeFileSync(filePath, resolvedContent);
    console.log(`Resolved merge conflicts in ${filePath}`);
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all files
console.log('Starting merge conflict resolution...');
filesWithConflicts.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    resolveMergeConflicts(filePath);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Merge conflict resolution completed!');