import fs from 'fs';
import path from 'path';

// List of files that still need 'use client' directive fixes
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

function fixUseClient(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix 'use client' directive placement and add semicolon
    if (content.includes("'use client'") && !content.startsWith("'use client'")) {
      content = content
        .replace(/import.*?from.*?;\s*'use client'$/gm, "'use client';\n$&")
        .replace(/'use client'$/gm, "'use client';");
    }
    
    // If 'use client' is not at the top, move it there
    if (content.includes("'use client'") && !content.startsWith("'use client'")) {
      const lines = content.split('\n');
      const useClientIndex = lines.findIndex(line => line.includes("'use client'"));
      if (useClientIndex > 0) {
        const useClientLine = lines[useClientIndex];
        lines.splice(useClientIndex, 1);
        lines.unshift(useClientLine.endsWith(';') ? useClientLine : useClientLine + ';');
        content = lines.join('\n');
      }
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
    fixUseClient(fullPath);
  }
});

console.log('Remaining use client directive fixes completed!');