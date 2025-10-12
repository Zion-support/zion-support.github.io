const fs = require('fs');

// Read the App.tsx file
const appTsxPath = './App.tsx';
let content = fs.readFileSync(appTsxPath, 'utf8');

// Remove unused imports and variables
const lines = content.split('\n');
const cleanedLines = [];
let inImportSection = true;
let braceCount = 0;
let inComponentDefinition = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check if we're still in the import section
  if (inImportSection && line.trim() && !line.trim().startsWith('import') && !line.trim().startsWith("'use client'") && !line.trim().startsWith('//')) {
    inImportSection = false;
  }
  
  // Skip unused imports - these are the ones that are imported but never used in the JSX
  if (inImportSection && line.includes('import')) {
    const importMatch = line.match(/import\s+.*?\s+from\s+['"]([^'"]+)['"]/);
    if (importMatch) {
      const importPath = importMatch[1];
      
      // Skip these specific unused imports
      const unusedImports = [
        'SEOHead',
        'ItServicesPage',
        'MicroSaasPage',
        'AiAnalyticsPage',
        'AiAutomationPage',
        'AiChatbotBuilderPage',
        'AiCybersecurityPage',
        'AiCrmPage',
        'AiDataAnalyticsPage',
        'AiHealthcarePage',
        'AiFinancialServicesPage',
        'AiComputerVisionPage',
        'AiVoiceSolutionsPage',
        'AiEcommerceSolutionsPage',
        'AiHrSolutionsPage',
        'AiContentGenerationPage',
        'AiWorkflowAutomationPage',
        'AiDocumentProcessingPage',
        'AiPredictiveAnalyticsPage',
        'AiEdgeComputingPage',
        'AiVideoAnalysisPage',
        'AiSpeechSynthesisPage',
        'AiRecommendationEnginePage',
        'AiSentimentAnalysisPage',
        'AiChatbotEnterprisePage',
        'AiContentModerationPage',
        'AiPredictiveModelingPage',
        'AiDocumentIntelligencePage',
        'AiConversationAnalyticsPage',
        'AiSupplyChainAiPage',
        'AiHealthcareDiagnosticsPage',
        'AiFinancialForecastingPage',
        'AiIotAnalyticsPage',
        'AiConversationalAiPage',
        'AiAutomatedTestingPage',
        'AiKnowledgeManagementPage',
        'AiCustomerChurnPage',
        'AiAutomatedReportingPage',
        'AiVoiceAssistantPage',
        'AiContentGenerationProPage',
        'AiAccountingAssistantPage',
        'AiCybersecurityMonitorProPage',
        'ApiDevelopmentPage',
        'DevopsCicdPage',
        'ItSupportPage',
        'DataAnalyticsBiPage',
        'ItAssetManagementPage',
        'ItSecurityServicesPage',
        'ItProjectManagementPage',
        'AiIntegrationServicesPage',
        'IotDevelopmentPage',
        'ApiDevelopmentAdvancedPage',
        'DevopsAdvancedPage',
        'ZionChatAiPage',
        'ZionCrmIntelligencePage',
        'ZionAiContentModerationPage',
        'ZionAiPredictiveMaintenancePage',
        'ZionAiFraudDetectorPage',
        'ZionAiSupplyChainOptimizerPage',
        'ZionAiDocumentAiPage',
        'ZionAiCustomerServiceProPage',
        'ZionAiContractAnalyzerPage',
        'ZionAiTranslatorProPage',
        'ZionAiCodeReviewerPage',
        'ZionAiSurveyBuilderPage',
        'ZionAiMarketingAutomationPage',
        'ZionAiAccountingAssistantPage',
        'ZionAiSeoOptimizerPage',
        'ZionAiDataCleanerPage',
        'ZionCustomerInsightsPage',
        'FiveGIotSolutionsPage'
      ];
      
      const isUnused = unusedImports.some(unused => line.includes(unused));
      if (isUnused) {
        console.log(`Removing unused import: ${line.trim()}`);
        continue;
      }
    }
  }
  
  cleanedLines.push(line);
}

// Write the cleaned content back
const cleanedContent = cleanedLines.join('\n');
fs.writeFileSync(appTsxPath, cleanedContent, 'utf8');

console.log('Cleaned up App.tsx - removed unused imports');