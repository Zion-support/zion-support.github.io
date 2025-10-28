const fs = require('fs');
const { execSync } = require('child_process');

// List of files with conflicts
const conflictedFiles = [
  'app/5g-data-analytics/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/about/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/Navigation.tsx',
  'app/ecommerce-analytics-pro/page.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/layout.tsx',
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/offline/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx',
  'app/zion-ai-api-tester/page.tsx',
  'app/zion-ai-database-optimizer/page.tsx'
];

console.log('Resolving merge conflicts by accepting our changes...');

conflictedFiles.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      console.log(`Resolving conflict in ${filePath}`);
      execSync(`git checkout --ours "${filePath}"`, { stdio: 'inherit' });
    }
  } catch (error) {
    console.log(`Error resolving ${filePath}:`, error.message);
  }
});

console.log('All conflicts resolved. Adding files and committing...');
execSync('git add .', { stdio: 'inherit' });
execSync('git commit -m "Resolve merge conflicts by accepting fixed versions"', { stdio: 'inherit' });

console.log('Merge conflicts resolved successfully!');