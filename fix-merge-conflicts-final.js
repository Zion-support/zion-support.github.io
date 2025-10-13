import fs from 'fs';
import path from 'path';

// List of files with merge conflicts
const filesWithConflicts = [
  '/workspace/app/ai-mobile-app-builder/page.tsx',
  '/workspace/app/ai-mobile-builder/page.tsx',
  '/workspace/app/ai-website-builder/page.tsx',
  '/workspace/app/cloud-infrastructure-management/page.tsx',
  '/workspace/app/components/FuturisticText.tsx',
  '/workspace/app/components/ImageOptimizer.tsx',
  '/workspace/app/cybersecurity-solutions/page.tsx',
  '/workspace/app/landing-page-builder/page.tsx',
  '/workspace/app/micro-saas-services/ai-chatbot-builder/page.tsx',
  '/workspace/app/pricing/page.tsx',
  '/workspace/app/quantum-data-encryption-vault/page.tsx',
  '/workspace/app/zion-ai-analytics-pro/page.tsx',
  '/workspace/app/zion-ai-crm-pro/page.tsx',
  '/workspace/app/zion-ai-customer-churn-predictor-pro/page.tsx',
  '/workspace/app/zion-ai-email-marketing-pro/page.tsx',
  '/workspace/app/zion-ai-inventory-manager/page.tsx',
  '/workspace/app/zion-ai-inventory-optimizer-pro/page.tsx',
  '/workspace/app/zion-ai-survey-builder/page.tsx'
];

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/\n([\s\S]*?)([\s\S]*?)    
    // Remove any remaining conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed merge conflicts in: ${path.basename(filePath)}`);
    return true;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('🔧 Starting final merge conflict resolution...');

let fixedCount = 0;
filesWithConflicts.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (resolveMergeConflicts(filePath)) {
      fixedCount++;
    }
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log(`\n✅ Fixed merge conflicts in ${fixedCount} files`);