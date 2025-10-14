#!/usr/bin/env node

import fs from 'fs';

// Function to fix JSX Fragment closing tag issues
function fixJSXFragmentClosingTags() {
  const filesToFix = [
    '/workspace/app/it-infrastructure/page.tsx',
    '/workspace/app/legal-document-manager/page.tsx',
    '/workspace/app/medical-records-manager/page.tsx',
    '/workspace/app/offline/page.tsx',
    '/workspace/app/online-learning-platform/page.tsx',
    '/workspace/app/property-management-ai/page.tsx',
    '/workspace/app/supply-chain-optimizer/page.tsx',
    '/workspace/app/webinars/page.tsx',
    '/workspace/app/whitepapers/page.tsx',
    '/workspace/app/zion-ai-accounting-suite/page.tsx',
    '/workspace/app/zion-ai-api-manager/page.tsx',
    '/workspace/app/zion-ai-chatbot-builder/page.tsx',
    '/workspace/app/zion-ai-data-warehouse/page.tsx',
    '/workspace/app/zion-ai-document-processor/page.tsx',
    '/workspace/app/zion-ai-email-optimizer/page.tsx',
    '/workspace/app/zion-ai-expense-tracker/page.tsx',
    '/workspace/app/zion-ai-lead-scoring/page.tsx',
    '/workspace/app/zion-ai-mobile-app-builder/page.tsx',
    '/workspace/app/zion-ai-social-listener/page.tsx',
    '/workspace/app/zion-ai-testing-automation/page.tsx',
    '/workspace/app/zion-ai-workflow-automation/page.tsx',
    '/workspace/app/zion-ecommerce-optimizer/page.tsx',
    '/workspace/app/zion-hr-assistant-pro/page.tsx'
  ];

  for (const file of filesToFix) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Fix the JSX fragment closing tag issue
      // Look for the pattern where React.Fragment is opened but not properly closed
      content = content.replace(/<React\.Fragment>\s*<Helmet>[\s\S]*?<\/Helmet>\s*<div[\s\S]*?<\/div>\s*<\/React\.Fragment>/g, (match) => {
        // Replace the entire pattern with a proper structure
        return match.replace(/<React\.Fragment>/, '<>').replace(/<\/React\.Fragment>/, '</>');
      });
      
      fs.writeFileSync(file, content);
      console.log(`✅ Fixed JSX fragment closing in: ${file}`);
    } catch (error) {
      console.error(`❌ Error fixing ${file}:`, error.message);
    }
  }
}

// Function to fix other specific issues
function fixOtherSpecificIssues() {
  // Fix 5g-solutions/page.tsx - export the Page component
  try {
    let content = fs.readFileSync('/workspace/app/5g-solutions/page.tsx', 'utf8');
    content = content.replace(/const Page = \(\) => \{/, 'export default function Page() {');
    content = content.replace(/export default Page;/, '}');
    fs.writeFileSync('/workspace/app/5g-solutions/page.tsx', content);
    console.log('✅ Fixed 5g-solutions/page.tsx - proper export');
  } catch (error) {
    console.error('❌ Error fixing 5g-solutions/page.tsx:', error.message);
  }

  // Fix AnalyticsProvider.tsx - remove unused imports
  try {
    let content = fs.readFileSync('/workspace/app/components/AnalyticsProvider.tsx', 'utf8');
    content = content.replace(/import { trackEvent, trackPageView } from '\.\.\/utils\/analytics';\n/, '');
    fs.writeFileSync('/workspace/app/components/AnalyticsProvider.tsx', content);
    console.log('✅ Fixed AnalyticsProvider.tsx - removed unused imports');
  } catch (error) {
    console.error('❌ Error fixing AnalyticsProvider.tsx:', error.message);
  }

  // Fix AnalyticsContext.tsx - remove unused variable
  try {
    let content = fs.readFileSync('/workspace/app/contexts/AnalyticsContext.tsx', 'utf8');
    content = content.replace(/const userId = [^;]+;/g, '');
    fs.writeFileSync('/workspace/app/contexts/AnalyticsContext.tsx', content);
    console.log('✅ Fixed AnalyticsContext.tsx - removed unused variable');
  } catch (error) {
    console.error('❌ Error fixing AnalyticsContext.tsx:', error.message);
  }

  // Fix AccessibilityEnhancer.tsx - check for syntax error
  try {
    let content = fs.readFileSync('/workspace/app/components/AccessibilityEnhancer.tsx', 'utf8');
    // Look for any syntax issues around line 125
    const lines = content.split('\n');
    if (lines[124] && lines[124].includes('}, []);')) {
      // This looks correct, let's check if there's a missing comma or bracket
      console.log('✅ AccessibilityEnhancer.tsx syntax appears correct');
    } else {
      console.log('⚠️  AccessibilityEnhancer.tsx may have syntax issues');
    }
  } catch (error) {
    console.error('❌ Error checking AccessibilityEnhancer.tsx:', error.message);
  }
}

// Main execution
console.log('🔧 Starting final issue resolution...');

fixJSXFragmentClosingTags();
fixOtherSpecificIssues();

console.log('\n✅ Final issue resolution completed!');