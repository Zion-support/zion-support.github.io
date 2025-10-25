#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files with known issues
const filesToFix = [
  'app/ai-automation/page.tsx',
  'app/ai-invoice-generator/page.tsx',
  'app/components/ContentStatistics.tsx',
  'app/components/CookieConsent.tsx',
  'app/components/EnhancedAccessibility.tsx',
  'app/components/EnhancedServicesShowcase.tsx',
  'app/components/Footer.tsx',
  'app/components/ImageOptimizer.tsx',
  'app/components/LoadingOptimizer.tsx',
  'app/components/Navigation.tsx',
  'app/consultation/page.tsx',
  'app/contexts/AccessibilityContext.tsx',
  'app/database-services/page.tsx',
  'app/demo/page.tsx',
  'app/error.tsx',
  'app/global-error.tsx',
  'app/layout.tsx',
  'app/micro-saas/page.tsx',
  'app/security-automation/page.tsx',
  'app/security-monitoring-suite/page.tsx',
  'app/security-monitoring/page.tsx',
  'app/security/page.tsx',
  'app/services/page.tsx',
  'app/smart-city-infrastructure/page.tsx',
  'app/smart-contract-security-audit/page.tsx',
  'app/system-administration/page.tsx',
  'app/system-integration/page.tsx',
  'app/system-status/page.tsx'
];

// Add all zion-ai pages
const zionAIPages = [
  'app/zion-ai-chatbot-builder/page.tsx',
  'app/zion-ai-code-assistant/page.tsx',
  'app/zion-ai-code-reviewer/page.tsx',
  'app/zion-ai-content-moderation/page.tsx',
  'app/zion-ai-content-moderator/page.tsx',
  'app/zion-ai-contract-analyzer/page.tsx',
  'app/zion-ai-crm-optimizer/page.tsx',
  'app/zion-ai-customer-churn-predictor-pro/page.tsx',
  'app/zion-ai-customer-churn-predictor/page.tsx',
  'app/zion-ai-customer-sentiment-tracker/page.tsx',
  'app/zion-ai-customer-service-pro/page.tsx',
  'app/zion-ai-customer-support-pro/page.tsx',
  'app/zion-ai-data-cleaner/page.tsx',
  'app/zion-ai-data-visualizer/page.tsx',
  'app/zion-ai-document-ai/page.tsx',
  'app/zion-ai-document-analyzer/page.tsx',
  'app/zion-ai-document-processor/page.tsx',
  'app/zion-ai-email-assistant/page.tsx',
  'app/zion-ai-email-marketing-pro/page.tsx',
  'app/zion-ai-email-optimizer/page.tsx',
  'app/zion-ai-energy-manager/page.tsx',
  'app/zion-ai-financial-forecaster/page.tsx',
  'app/zion-ai-form-builder/page.tsx',
  'app/zion-ai-fraud-detection/page.tsx',
  'app/zion-ai-fraud-detector/page.tsx',
  'app/zion-ai-image-generator/page.tsx',
  'app/zion-ai-image-recognition/page.tsx',
  'app/zion-ai-inventory-optimizer-pro/page.tsx',
  'app/zion-ai-lead-scoring/page.tsx',
  'app/zion-ai-marketing-automation/page.tsx',
  'app/zion-ai-meeting-assistant/page.tsx',
  'app/zion-ai-meeting-transcriber/page.tsx',
  'app/zion-ai-predictive-analytics/page.tsx',
  'app/zion-ai-predictive-maintenance/page.tsx',
  'app/zion-ai-price-optimizer/page.tsx',
  'app/zion-ai-recruitment-pro/page.tsx',
  'app/zion-ai-sales-predictor/page.tsx',
  'app/zion-ai-scheduling-assistant/page.tsx',
  'app/zion-ai-seo-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-social-scheduler-pro/page.tsx',
  'app/zion-ai-supply-chain-optimizer/page.tsx',
  'app/zion-ai-survey-builder/page.tsx',
  'app/zion-ai-task-scheduler/page.tsx',
  'app/zion-ai-translation-service/page.tsx',
  'app/zion-ai-translator-pro/page.tsx',
  'app/zion-ai-video-editor/page.tsx',
  'app/zion-ai-video-generator/page.tsx',
  'app/zion-ai-voice-assistant/page.tsx',
  'app/zion-ai-voice-synthesis/page.tsx',
  'app/zion-ai-website-analyzer/page.tsx',
  'app/zion-ai-workflow-automator-pro/page.tsx',
  'app/zion-ai-workflow-automator/page.tsx',
  'app/zion-analytics-pro/page.tsx',
  'app/zion-api-development/page.tsx',
  'app/zion-blockchain-solutions/page.tsx',
  'app/zion-chat-ai/page.tsx',
  'app/zion-cloud-vault/page.tsx',
  'app/zion-compliance-manager/page.tsx',
  'app/zion-content-studio/page.tsx',
  'app/zion-crm-intelligence/page.tsx',
  'app/zion-customer-insights/page.tsx',
  'app/zion-customer-satisfaction-monitor/page.tsx',
  'app/zion-cybersecurity-audit/page.tsx',
  'app/zion-data-sync/page.tsx',
  'app/zion-devops-automation/page.tsx',
  'app/zion-email-automation/page.tsx',
  'app/zion-inventory-smart/page.tsx',
  'app/zion-invoice-genius/page.tsx',
  'app/zion-iot-solutions/page.tsx',
  'app/zion-lead-magnet/page.tsx',
  'app/zion-performance-monitor/page.tsx',
  'app/zion-project-master/page.tsx',
  'app/zion-security-shield/page.tsx',
  'app/zion-smart-analytics-dashboard/page.tsx',
  'app/zion-smart-crm-automation/page.tsx',
  'app/zion-smart-expense-tracker/page.tsx',
  'app/zion-smart-inventory-manager/page.tsx',
  'app/zion-social-scheduler/page.tsx',
  'app/zion-workflow-automation/page.tsx'
];

const allFiles = [...filesToFix, ...zionAIPages];

function fixFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  let modified = false;

  // Fix Footer import path
  if (content.includes("import Footer from '../../components/Footer'")) {
    content = content.replace("import Footer from '../../components/Footer'", "import Footer from '../components/Footer'");
    modified = true;
  }

  // Remove unused imports - common patterns
  const unusedImports = [
    'Workflow',
    'Cloud', 
    'Database',
    'Server',
    'Settings',
    'Shield',
    'React',
    'Image',
    'as',
    'useEffect',
    'AccessibilitySettings',
    'Navigation',
    'Footer'
  ];

  // Remove unused imports from lucide-react
  unusedImports.forEach(importName => {
    const regex = new RegExp(`\\b${importName}\\s*,?`, 'g');
    if (content.includes(importName)) {
      // Check if it's in an import statement
      const importRegex = new RegExp(`import\\s*{[^}]*\\b${importName}\\b[^}]*}\\s*from\\s*['"][^'"]+['"]`, 'g');
      if (importRegex.test(content)) {
        content = content.replace(importRegex, (match) => {
          // Remove the import name and clean up commas
          let cleaned = match.replace(new RegExp(`\\s*${importName}\\s*,?`, 'g'), '');
          cleaned = cleaned.replace(/,(\s*})/, '$1'); // Remove trailing comma
          cleaned = cleaned.replace(/,(\s*,)/, '$1'); // Remove double commas
          return cleaned;
        });
        modified = true;
      }
    }
  });

  // Remove unused error parameter in error.tsx and global-error.tsx
  if (filePath.includes('error.tsx') || filePath.includes('global-error.tsx')) {
    content = content.replace(/error: Error/g, '_error: Error');
    modified = true;
  }

  // Remove unused Footer imports from pages that don't use it
  if (filePath.includes('page.tsx') && !filePath.includes('micro-saas')) {
    if (content.includes("import Footer from '../components/Footer';")) {
      content = content.replace("import Footer from '../components/Footer';\n", '');
      modified = true;
    }
  }

  // Clean up empty import statements
  content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];\n/g, '');
  content = content.replace(/import\s*{\s*,?\s*}\s*from\s*['"][^'"]+['"];\n/g, '');

  if (modified) {
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } else {
    console.log(`No changes needed: ${filePath}`);
  }
}

console.log('Fixing TypeScript errors...');

allFiles.forEach(fixFile);

console.log('Done!');