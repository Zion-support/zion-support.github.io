import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files with merge conflicts
const filesWithConflicts = [
  'app/ai-automation/page.tsx',
  'app/ai-customer-support/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/ar-vr-solutions/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/consultation/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/it-support/page.tsx',
  'app/micro-saas/page.tsx',
  'app/quantum-computing/page.tsx',
  'app/status/page.tsx'
];

function resolveMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      console.log(`No merge conflicts found in ${filePath}`);
      return;
    }
    
    // Split by merge conflict markers
    const parts = content.split('=======');
    
    if (parts.length !== 2) {
      console.log(`Unexpected merge conflict format in ${filePath}`);
      return;
    }
    
    // Get the part after ======= and before >>>>>>>
    let resolvedContent = parts[1];
    
    // Remove the >>>>>> line and everything after it
    const endMarkerIndex = resolvedContent.indexOf('>>>>>>>');
    if (endMarkerIndex !== -1) {
      resolvedContent = resolvedContent.substring(0, endMarkerIndex);
    }
    
    // Write the resolved content back to the file
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`Resolved merge conflicts in ${filePath}`);
    
  } catch (error) {
    console.error(`Error resolving merge conflicts in ${filePath}:`, error.message);
  }
}

// Resolve conflicts in all files
filesWithConflicts.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    resolveMergeConflicts(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Merge conflict resolution completed!');