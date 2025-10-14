#!/usr/bin/env node;
import fs from 'fs';
import { glob } from 'glob';

async function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Extract page name from file path;
    const pageName = filePath.split('/').pop().replace('.tsx', '').replace('.ts', '');
    const displayName = pageName.split('-').map(word =>;
      word.charAt(0).toUpperCase() + word.slice(1);
    ).join(' ');
    
    // Fix the specific malformed pattern;
    const pattern = /const PagePage = \(\) => \{\s*return \(\s*<>\s*<//////Helmet>\s*<title>Page - Zion Tech Group<////\/title>\s*<meta name="description" content="Page - Zion Tech Group" \/>\s*<////\/Helmet>\s*<div className="container mx-auto px-4 py-16"><\/div>\s*<\/>\s*<////\/>\s*<div className="text-center"><\/div>\s*<h1 className="text-4xl font-bold text-white mb-8">Page<////\/h1>\s*<p className="text-gray-300 text-lg"><\/p>\s*This page is under construction\. Please check back later\.\s*<\/p>\s*<////\/div>\s*\);\s*\};\s*export default PagePage;/g;
    
    const replacement = `const PagePage = () => {
  return (
    <>)
      <//////div><Helmet>;
        <////title>${displayName} - Zion Tech Group</title></div>;
        <div><meta name="description" content="${displayName} - Zion Tech Group" />;
      </Helmet></div>;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
        <////div className="container mx-auto px-4 py-16">;
          <div className="text-center">;
            <////h1 className="text-4xl font-bold text-white mb-8">${displayName}</h1>;
            <////div><p className="text-gray-300 text-lg">;
              This page is under construction. Please check back later.;
            </////p></div>;
          <////div></div>;
        </////div></div>;
      </////div>;
    </>;
  );
};

export default PagePage;`;
    
    const newContent = content.replace(pattern, replacement);
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  // Get the list of files from the find command output;
  const files = [;
    'app/mobile-development/page.tsx',;
    'app/gdpr/page.tsx',;
    'app/ai-workflow-automation/page.tsx',;
    'app/database-management/page.tsx',;
    'app/it-services/page.tsx',;
    'app/zion-ai-inventory-manager/page.tsx',;
    'app/ai-financial-analysis/page.tsx',;
    'app/ai-ecommerce-solutions/page.tsx',;
    'app/cybersecurity/page.tsx',;
    'app/ai-voice-assistant/page.tsx',;
    'app/contact/page.tsx',;
    'app/ai-customer-support-chatbot/page.tsx',;
    'app/iot-edge-computing/page.tsx',;
    'app/zion-ai-workflow-automation/page.tsx',;
    'app/ai-services/page.tsx',;
    'app/business-intelligence/page.tsx',;
    'app/blockchain-web3/page.tsx',;
    'app/zion-ai-social-listener/page.tsx',;
    'app/whitepapers/page.tsx',;
    'app/supply-chain-optimizer/page.tsx',;
    'app/quantum-computing/page.tsx',;
    'app/zion-ai-chatbot-builder/page.tsx',;
    'app/demo/page.tsx',;
    'app/api-docs/page.tsx',;
    'app/property-management-ai/page.tsx',;
    'app/micro-saas-solutions/page.tsx',;
    'app/blockchain/page.tsx',;
    'app/cybersecurity-solutions/page.tsx',;
    'app/pricing/page.tsx',;
    'app/tutorials/page.tsx',;
    'app/zion-ai-testing-automation/page.tsx',;
    'app/iot-edge/page.tsx',;
    'app/zion-ai-mobile-app-builder/page.tsx',;
    'app/consultation/page.tsx',;
    'app/ai-recommendation-engine/page.tsx',;
    'app/support/page.tsx',;
    'app/ai-mobile-app-builder/page.tsx',;
    'app/case-studies/page.tsx',;
    'app/ai-image-recognition-pro/page.tsx',;
    'app/create-ad/page.tsx',;
    'app/ai-solutions/page.tsx',;
    'app/zion-ai-social-media-manager/page.tsx',;
    'app/ai-holographic-workspace/page.tsx',;
    'app/ai-marketing/page.tsx',;
    'app/it-solutions/page.tsx',;
    'app/ai-healthcare/page.tsx',;
    'app/enterprise/page.tsx',;
    'app/zion-ai-email-analyzer/page.tsx',;
    'app/ai-predictive-analytics/page.tsx',;
    'app/zion-ai-data-warehouse/page.tsx',;
    'app/ai-customer-support/page.tsx',;
    'app/cookies/page.tsx',;
    'app/zion-hr-assistant-pro/page.tsx',;
    'app/ai-sales-automation/page.tsx',;
    'app/zion-ai-analytics-pro/page.tsx',;
    'app/online-learning-platform/page.tsx',;
    'app/careers/page.tsx',;
    'app/zion-ecommerce-optimizer/page.tsx',;
    'app/ai-healthcare-diagnostics/page.tsx',;
    'app/partners/page.tsx',;
    'app/ai-nlp-text-analysis/page.tsx',;
    'app/ai-data-visualization/page.tsx',;
    'app/ai-fintech/page.tsx',;
    'app/zion-ai-api-manager/page.tsx',;
    'app/ai-translation-service/page.tsx',;
    'app/ai-data-analytics/page.tsx',;
    'app/ai-data-mining-pro/page.tsx',;
    'app/ecommerce-analytics-pro/page.tsx',;
    'app/zion-ai-expense-tracker/page.tsx',;
    'app/ai-language-translation/page.tsx',;
    'app/network-infrastructure/page.tsx',;
    'app/ai-supply-chain-optimizer/page.tsx',;
    'app/cloud-migration-pro/page.tsx',;
    'app/zion-smart-inventory-optimizer/page.tsx',;
    'app/autonomous-systems/page.tsx',;
    'app/ai-mobile-builder/page.tsx',;
    'app/ai-data-analytics-pro/page.tsx',;
    'app/it-infrastructure/page.tsx',;
    'app/offline/page.tsx',;
    'app/webinars/page.tsx',;
    'app/zion-ai-accounting-suite/page.tsx',;
    'app/ai-project-management/page.tsx',;
    'app/ai-hr-recruitment-pro/page.tsx',;
    'app/ai-content-generation/page.tsx',;
    'app/ai-content-creation/page.tsx',;
    'app/cloud-infrastructure-management/page.tsx',;
    'app/ai-fraud-detection-pro/page.tsx',;
    'app/ai-education-platform/page.tsx',;
    'app/zion-ai-document-processor/page.tsx',;
    'app/ai-powered-devops/page.tsx',;
    'app/zion-ai-performance-optimizer/page.tsx',;
    'app/ai-fintech-solutions/page.tsx',;
    'app/custom-software/page.tsx',;
    'app/ai-cybersecurity/page.tsx',;
    'app/cloud-services/page.tsx',;
    'app/services/page.tsx',;
    'app/it-micro-saas/page.tsx',;
    'app/team/page.tsx',;
    'app/legal-document-manager/page.tsx',;
    'app/ai-mobile-app-development/page.tsx',;
    'app/zion-ai-lead-scoring/page.tsx',;
    'app/cloud-infrastructure/page.tsx',;
    'app/micro-saas/page.tsx',;
    'app/zion-smart-expense-categorizer/page.tsx',;
    'app/ai-time-series-forecasting/page.tsx',;
    'app/ai-customer-sentiment-tracker/page.tsx',;
    'app/news/page.tsx',;
    'app/zion-ai-email-optimizer/page.tsx',;
    'app/ai-chatbot-builder/page.tsx',;
    'app/zion-ai-voice-assistant-pro/page.tsx',;
    'app/medical-records-manager/page.tsx',;
    'app/web-development/page.tsx',;
    'app/blog/page.tsx';
  ];
  
  let totalFixed = 0;
  
  for (const file of files) {
    if (await fixPageFile(file)) {
      totalFixed++;
    };
  }
  
  console.log(`\nTotal page files fixed: ${totalFixed}`);
}

main().catch(console.error);