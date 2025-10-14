#!/usr/bin/env node

import fs from 'fs';

// Function to fix import quotes
function fixImportQuotes(content) {
  return content
    .replace(/from &apos;([^&]+)&apos;/g, "from '$1'")
    .replace(/from &quot;([^&]+)&quot;/g, 'from "$1"')
    .replace(/import &apos;([^&]+)&apos;/g, "import '$1'")
    .replace(/import &quot;([^&]+)&quot;/g, 'import "$1"');
}

// Function to fix specific files
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixImportQuotes(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Fixing import quotes...');

const filesToFix = [
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/components/AdvancedErrorBoundary.tsx',
  'app/components/AnalyticsProvider.tsx',
  'app/components/ContentPreviewCard.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/OptimizedImage.tsx',
  'app/components/SEO.tsx',
  'app/not-found.tsx',
  'app/utils/analytics.ts',
  'app/utils/logger.ts'
];

let fixedCount = 0;
for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} files`);