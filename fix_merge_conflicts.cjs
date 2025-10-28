const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const filesToFix = [
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/zion-ai-api-tester/page.tsx',
  'app/ecommerce-analytics-pro/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the better version
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> cursor\/fix-errors-and-merge-to-main-ad1a/g, '');
    
    // Clean up any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/^<<<<<<<.*$/gm, '');
    content = content.replace(/^=======.*$/gm, '');
    content = content.replace(/^>>>>>>>.*$/gm, '');
    
    // Clean up extra whitespace and empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '\n');
    
    // Fix common issues
    content = content.replace(/import React from 'react'\n\n;/g, "import React from 'react';");
    content = content.replace(/import { [^}]+ }\n\nfrom 'lucide-react'\n\n;/g, (match) => {
      return match.replace(/\n\n/g, ' ').replace(/; /g, ';');
    });
    content = content.replace(/import [^;]+;\n\nimport [^;]+;\n\nimport [^;]+;\n\nimport [^;]+;/g, (match) => {
      return match.replace(/\n\n/g, '\n');
    });
    
    // Fix function names to be consistent
    content = content.replace(/function AianalyticsdashboardPage/g, 'function AIAnalyticsDashboard');
    content = content.replace(/function AichatbotbuilderPage/g, 'function AIChatbotBuilder');
    content = content.replace(/function AicontentgeneratorPage/g, 'function AIContentGenerator');
    content = content.replace(/function AiemailassistantPage/g, 'function AIEmailAssistant');
    content = content.replace(/function AileadgenerationPage/g, 'function AILeadGeneration');
    content = content.replace(/function AipowereddevopsPage/g, 'function AIPoweredDevOps');
    content = content.replace(/function AipoweredemailanalyzerPage/g, 'function AIPoweredEmailAnalyzer');
    content = content.replace(/function LegaldocumentmanagerPage/g, 'function LegalDocumentManager');
    content = content.replace(/function CybersecurityauditPage/g, 'function CybersecurityAudit');
    content = content.replace(/function ZionaiapitesterPage/g, 'function ZionAIApiTester');
    content = content.replace(/function EcommerceanalyticsproPage/g, 'function EcommerceAnalyticsPro');
    
    // Fix component references
    content = content.replace(/<AianalyticsdashboardPage/g, '<AIAnalyticsDashboard');
    content = content.replace(/<AichatbotbuilderPage/g, '<AIChatbotBuilder');
    content = content.replace(/<AicontentgeneratorPage/g, '<AIContentGenerator');
    content = content.replace(/<AiemailassistantPage/g, '<AIEmailAssistant');
    content = content.replace(/<AileadgenerationPage/g, '<AILeadGeneration');
    content = content.replace(/<AipowereddevopsPage/g, '<AIPoweredDevOps');
    content = content.replace(/<AipoweredemailanalyzerPage/g, '<AIPoweredEmailAnalyzer');
    content = content.replace(/<LegaldocumentmanagerPage/g, '<LegalDocumentManager');
    content = content.replace(/<CybersecurityauditPage/g, '<CybersecurityAudit');
    content = content.replace(/<ZionaiapitesterPage/g, '<ZionAIApiTester');
    content = content.replace(/<EcommerceanalyticsproPage/g, '<EcommerceAnalyticsPro');
    
    // Ensure proper imports
    if (!content.includes("import Navigation from") && content.includes("<Navigation")) {
      content = content.replace(/import React from 'react';/, `import React from 'react';\nimport Navigation from '../components/Navigation';`);
    }
    if (!content.includes("import Footer from") && content.includes("<Footer")) {
      content = content.replace(/import React from 'react';/, `import React from 'react';\nimport Footer from '../components/Footer';`);
    }
    if (!content.includes("import ErrorBoundary from") && content.includes("<ErrorBoundary")) {
      content = content.replace(/import React from 'react';/, `import React from 'react';\nimport ErrorBoundary from '../components/ErrorBoundary';`);
    }
    
    // Ensure proper structure
    if (content.includes('function ') && !content.includes('export default function Wrapped')) {
      const functionMatch = content.match(/function (\w+)/);
      if (functionMatch) {
        const functionName = functionMatch[1];
        content += `\n\nexport default function Wrapped(props: { [key: string]: unknown }) {\n  return (\n    <ErrorBoundary>\n      <${functionName} {...props} />\n    </ErrorBoundary>\n  );\n}`;
      }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixMergeConflicts(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Merge conflict fixing completed!');