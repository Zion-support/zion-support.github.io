import fs from 'fs';
import path from 'path';

// Common patterns to fix
const fixes = [
  {
    pattern: /description: 'Scale effortlessly across multiple regions with automatic load balancing\.'\s*\}\s*description: 'Scale effortlessly across multiple regions with automatic load balancing\.'\s*\}\s*\]/g,
    replacement: `description: 'Scale effortlessly across multiple regions with automatic load balancing.'
    }
  ];`
  },
  {
    pattern: /description: 'Scale effortlessly across multiple regions with automatic load balancing\.'\s*\}\s*description: 'Scale effortlessly across multiple regions with automatic load balancing\.'\s*\}\s*\]/g,
    replacement: `description: 'Scale effortlessly across multiple regions with automatic load balancing.'
    }
  ];`
  }
];

// Files to process
const filesToFix = [
  'app/ai-content-generation-pro/page.tsx',
  'app/ai-content-moderation/page.tsx',
  'app/ai-conversation-analytics/page.tsx',
  'app/ai-conversational-ai/page.tsx',
  'app/ai-customer-churn/page.tsx',
  'app/ai-document-intelligence/page.tsx',
  'app/ai-financial-forecasting/page.tsx',
  'app/ai-healthcare-diagnostics/page.tsx',
  'app/ai-integration-services/page.tsx',
  'app/ai-iot-analytics/page.tsx',
  'app/ai-knowledge-management/page.tsx',
  'app/ai-lead-scoring/page.tsx',
  'app/ai-predictive-modeling/page.tsx',
  'app/ai-sentiment-analysis/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-speech-synthesis/page.tsx',
  'app/ai-supply-chain-ai/page.tsx',
  'app/ai-video-analysis/page.tsx',
  'app/api-development-advanced/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Process all files
filesToFix.forEach(fixFile);
console.log('JSX fixes completed');