const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const filesWithConflicts = [
  './app/ai-workflow-automation/page.tsx',
  './app/ai-chatbot-builder/page.tsx',
  './app/ai-code-security-auditor/page.tsx',
  './app/ai-crm-assistant/page.tsx',
  './app/ai-content-generation/page.tsx',
  './app/ai-content-studio/page.tsx',
  './app/ai-computer-vision/page.tsx',
  './app/ai-content-delivery-network/page.tsx',
  './app/ai-blockchain-solutions/page.tsx',
  './app/ai-blockchain-analytics/page.tsx',
  './app/ai-autonomous-systems/page.tsx',
  './app/analytics-tools/page.tsx',
  './app/api-docs/page.tsx',
  './app/backup-recovery/page.tsx',
  './app/blockchain-integration-services/page.tsx',
  './app/blockchain/page.tsx',
  './app/business-apps/page.tsx',
  './app/cloud-infrastructure/page.tsx',
  './app/cloud-services/page.tsx',
  './app/cloud-security/page.tsx',
  './app/cloud-migration/page.tsx',
  './app/components/ContentPromotionBanner.tsx',
  './app/components/DynamicContentShowcase.tsx',
  './app/components/ContentStatistics.tsx',
  './app/layout.tsx',
  './app/globals.css',
  './app/support/page.tsx',
  './app/terms/page.tsx',
  './app/types/next.d.ts',
  './app/partners/page.tsx',
  './app/privacy/page.tsx',
  './app/micro-saas/page.tsx',
  './app/cookies/page.tsx',
  './app/consultation/page.tsx',
  './app/components/Sidebar.tsx',
  './jest.config.js',
  './src/components/PerformanceDashboard.tsx',
  './app/utils/accessibilityChecker.ts',
  './app/utils/accessibilityEnhancer.ts'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers
    content = content.replace(/^<<<<<<< HEAD\n/gm, '');
    content = content.replace(/^=======\n/gm, '');
    content = content.replace(/^>>>>>>> .*\n/gm, '');
    
    // Fix common syntax issues
    content = content.replace(/;\s*;/g, ';'); // Remove double semicolons
    content = content.replace(/,\s*,/g, ','); // Remove double commas
    content = content.replace(/}\s*}/g, '}'); // Remove double closing braces
    
    // Fix JSX issues
    content = content.replace(/<meta>\s*<meta>/g, '<meta name="description" content="Page description" />');
    content = content.replace(/<meta>\s*<\/meta>/g, '<meta name="description" content="Page description" />');
    
    // Fix malformed JSX tags
    content = content.replace(/<(\w+)>\s*<\/(\w+)>/g, (match, openTag, closeTag) => {
      if (openTag === closeTag) return match;
      return `<${openTag}></${openTag}>`;
    });
    
    // Fix missing closing tags for common elements
    content = content.replace(/<h1>([^<]*);\s*<\/h1>/g, '<h1>$1</h1>');
    content = content.replace(/<h2>([^<]*);\s*<\/h2>/g, '<h2>$1</h2>');
    content = content.replace(/<button>([^<]*);\s*<\/button>/g, '<button>$1</button>');
    content = content.replace(/<p>([^<]*);\s*<\/p>/g, '<p>$1</p>');
    
    // Fix array syntax issues
    content = content.replace(/\[\s*;\s*\]/g, '[]');
    content = content.replace(/,\s*;\s*\]/g, ']');
    content = content.replace(/,\s*;\s*,/g, ',');
    
    // Fix function declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');
    
    // Fix return statements
    content = content.replace(/return\s*\(\s*<>\s*<Helmet>/g, 'return (\n    <>\n      <Helmet>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Process all files
filesWithConflicts.forEach(file => {
  if (fs.existsSync(file)) {
    fixMergeConflicts(file);
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log('Merge conflict fixing completed!');