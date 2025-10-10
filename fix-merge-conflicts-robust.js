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
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      console.log(`No merge conflicts found in ${filePath}`);
      return;
    }
    
    console.log(`Processing merge conflicts in ${filePath}`);
    
    // Split by merge conflict markers and process each section
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = null; // 'head' or 'incoming'
    let conflictContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<<')) {
        inConflict = true;
        conflictType = 'head';
        conflictContent = [];
        continue;
      } else if (line.trim().startsWith('=======')) {
        if (inConflict && conflictType === 'head') {
          conflictType = 'incoming';
          conflictContent = [];
          continue;
        }
      } else if (line.trim().startsWith('>>>>>>>')) {
        if (inConflict) {
          // Use the incoming version (after =======)
          if (conflictType === 'incoming') {
            resolvedLines.push(...conflictContent);
          }
          inConflict = false;
          conflictType = null;
          conflictContent = [];
          continue;
        }
      }
      
      if (inConflict) {
        conflictContent.push(line);
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write the resolved content back
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent);
    console.log(`Resolved merge conflicts in ${filePath}`);
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all files
console.log('Starting robust merge conflict resolution...');
filesWithConflicts.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    resolveMergeConflicts(filePath);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Robust merge conflict resolution completed!');