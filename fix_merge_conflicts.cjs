const fs = require('fs');
const path = require('path');

// Files with merge conflicts
const filesToFix = [
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/zion-ai-api-tester/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the newer version (after =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n([\s\S]*?)>>>>>>> cursor\/fix-errors-and-merge-to-main-ad1a/g, '$1');
    
    // Fix any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Fix common issues
    content = content.replace(/import ErrorBoundary from "\.\.\/\.\.\/components\/ErrorBoundary"/g, "import ErrorBoundary from '../../components/ErrorBoundary'");
    content = content.replace(/import Navigation from "\.\.\/\.\.\/components\/Navigation"/g, "import Navigation from '../../components/Navigation'");
    content = content.replace(/import Footer from "\.\.\/\.\.\/components\/Footer"/g, "import Footer from '../../components/Footer'");
    
    // Fix JSX closing tags
    content = content.replace(/<ErrorBoundary>\s*<AianalyticsdashboardPage/g, '<ErrorBoundary>\n      <AianalyticsdashboardPage');
    content = content.replace(/<ErrorBoundary>\s*<AichatbotbuilderPage/g, '<ErrorBoundary>\n      <AichatbotbuilderPage');
    content = content.replace(/<ErrorBoundary>\s*<AicontentgeneratorPage/g, '<ErrorBoundary>\n      <AicontentgeneratorPage');
    content = content.replace(/<ErrorBoundary>\s*<AiemailassistantPage/g, '<ErrorBoundary>\n      <AiemailassistantPage');
    content = content.replace(/<ErrorBoundary>\s*<AileadgenerationPage/g, '<ErrorBoundary>\n      <AileadgenerationPage');
    
    // Fix function names to be consistent
    content = content.replace(/function AianalyticsdashboardPage/g, 'function AIAnalyticsDashboardPage');
    content = content.replace(/function AichatbotbuilderPage/g, 'function AIChatbotBuilderPage');
    content = content.replace(/function AicontentgeneratorPage/g, 'function AIContentGeneratorPage');
    content = content.replace(/function AiemailassistantPage/g, 'function AIEmailAssistantPage');
    content = content.replace(/function AileadgenerationPage/g, 'function AILeadGenerationPage');
    
    // Fix component references
    content = content.replace(/<AianalyticsdashboardPage/g, '<AIAnalyticsDashboardPage');
    content = content.replace(/<AichatbotbuilderPage/g, '<AIChatbotBuilderPage');
    content = content.replace(/<AicontentgeneratorPage/g, '<AIContentGeneratorPage');
    content = content.replace(/<AiemailassistantPage/g, '<AIEmailAssistantPage');
    content = content.replace(/<AileadgenerationPage/g, '<AILeadGenerationPage');
    
    // Fix props type
    content = content.replace(/props: any/g, 'props: { [key: string]: unknown }');
    
    // Ensure proper closing tags
    content = content.replace(/<\/AianalyticsdashboardPage>/g, '</AIAnalyticsDashboardPage>');
    content = content.replace(/<\/AichatbotbuilderPage>/g, '</AIChatbotBuilderPage>');
    content = content.replace(/<\/AicontentgeneratorPage>/g, '</AIContentGeneratorPage>');
    content = content.replace(/<\/AiemailassistantPage>/g, '</AIEmailAssistantPage>');
    content = content.replace(/<\/AileadgenerationPage>/g, '</AILeadGenerationPage>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixMergeConflicts);
console.log('All merge conflicts fixed!');