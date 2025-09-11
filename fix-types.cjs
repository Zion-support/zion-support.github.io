const fs = require('fs');

// Fix common TypeScript type issues
function fixTypes(content) {
  // Fix any types to more specific types
  content = content.replace(/:\s*any\b/g, ': unknown');
  content = content.replace(/<any>/g, '<unknown>');

  // Fix console statements
  content = content.replace(/console\.(log|warn|error)\(/g, '// console.$1(');

  return content;
}

// Files with type issues
const files = [
  'src/components/Analytics.tsx',
  'src/components/AIMatchmaker.tsx',
  'src/components/PerformanceMonitor.tsx',
  'src/components/PerformanceWrapper.tsx',
  'src/components/ProductCard.tsx',
  'src/components/ProductListingCard.tsx',
  'src/components/ProductSubmissionForm.tsx',
  'src/components/transactions/TransactionHistory.tsx',
  'src/context/AnalyticsContext.tsx',
  'src/context/RequestQuoteWizard.tsx',
  'src/context/WalletContext.tsx',
  'src/hooks/usePerformance.ts',
  'src/integrations/slack/bot.ts',
  'src/utils/errorHandler.ts',
  'src/utils/errorReporting.ts',
  'src/utils/healthCheck.ts',
  'src/utils/lazyLoad.tsx',
  'src/utils/performance-monitor.ts',
  'src/utils/performance.ts',
  'src/utils/security.ts',
  'src/utils/seo.ts',
  'src/types/components.ts',
  'src/vite-env.d.ts',
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;
    content = fixTypes(content);
    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log(`Fixed types in ${file}`);
    }
  }
});

console.log('Type fixes complete');
