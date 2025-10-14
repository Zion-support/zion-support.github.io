import fs from 'fs';
import path from 'path';

// List of files that might have duplicate 'use client' directives
const filesToFix = [
  'app/ai-analytics/page.tsx',
  'app/ai-automation-suite/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-content-creation/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-content-writer/page.tsx',
  'app/ai-customer-support-chatbot/page.tsx',
  'app/ai-customer-support/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-data-mining-pro/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-document-processor/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-education-platform/page.tsx',
  'app/ai-financial-analysis/page.tsx'
];

function fixDuplicateUseClient(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove duplicate 'use client' directives
    const lines = content.split('\n');
    const useClientLines = lines.filter(line => line.includes("'use client'"));
    
    if (useClientLines.length > 1) {
      // Keep only the first 'use client' directive
      let foundFirst = false;
      const filteredLines = lines.filter(line => {
        if (line.includes("'use client'")) {
          if (!foundFirst) {
            foundFirst = true;
            return true;
          }
          return false;
        }
        return true;
      });
      content = filteredLines.join('\n');
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  if (fs.existsSync(fullPath)) {
    fixDuplicateUseClient(fullPath);
  }
});

console.log('Duplicate use client directive fixes completed!');