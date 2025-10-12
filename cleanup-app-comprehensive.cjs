const fs = require('fs');

// Read the App.tsx file
const appTsxPath = './App.tsx';
let content = fs.readFileSync(appTsxPath, 'utf8');

// Remove all the unused lazy imports and their corresponding routes
const lines = content.split('\n');
const cleanedLines = [];
let skipNextLines = false;
let braceCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Skip lines that contain unused lazy imports
  if (line.includes('const ') && line.includes('React.lazy') && (
    line.includes('ItServicesPage') ||
    line.includes('MicroSaasPage') ||
    line.includes('AiAnalyticsPage') ||
    line.includes('AiAutomationPage') ||
    line.includes('AiChatbotBuilderPage') ||
    line.includes('AiCybersecurityPage') ||
    line.includes('AiCrmPage') ||
    line.includes('AiDataAnalyticsPage') ||
    line.includes('AiHealthcarePage') ||
    line.includes('AiFinancialServicesPage') ||
    line.includes('AiComputerVisionPage') ||
    line.includes('AiVoiceSolutionsPage') ||
    line.includes('AiEcommerceSolutionsPage') ||
    line.includes('AiHrSolutionsPage') ||
    line.includes('AiContentGenerationPage') ||
    line.includes('AiWorkflowAutomationPage') ||
    line.includes('AiDocumentProcessingPage') ||
    line.includes('AiPredictiveAnalyticsPage') ||
    line.includes('AiEdgeComputingPage') ||
    line.includes('AiVideoAnalysisPage') ||
    line.includes('AiSpeechSynthesisPage') ||
    line.includes('AiRecommendationEnginePage') ||
    line.includes('AiSentimentAnalysisPage') ||
    line.includes('AiChatbotEnterprisePage') ||
    line.includes('AiContentModerationPage') ||
    line.includes('AiPredictiveModelingPage') ||
    line.includes('AiDocumentIntelligencePage') ||
    line.includes('AiConversationAnalyticsPage') ||
    line.includes('AiSupplyChainAiPage') ||
    line.includes('AiHealthcareDiagnosticsPage') ||
    line.includes('AiFinancialForecastingPage') ||
    line.includes('AiIotAnalyticsPage') ||
    line.includes('AiConversationalAiPage') ||
    line.includes('AiAutomatedTestingPage') ||
    line.includes('AiKnowledgeManagementPage') ||
    line.includes('AiCustomerChurnPage') ||
    line.includes('AiAutomatedReportingPage') ||
    line.includes('AiVoiceAssistantPage') ||
    line.includes('AiContentGenerationProPage') ||
    line.includes('AiAccountingAssistantPage') ||
    line.includes('AiCybersecurityMonitorProPage') ||
    line.includes('ApiDevelopmentPage') ||
    line.includes('DevopsCicdPage') ||
    line.includes('ItSupportPage') ||
    line.includes('DataAnalyticsBiPage') ||
    line.includes('ItAssetManagementPage') ||
    line.includes('ItSecurityServicesPage') ||
    line.includes('ItProjectManagementPage') ||
    line.includes('AiIntegrationServicesPage') ||
    line.includes('IotDevelopmentPage') ||
    line.includes('ApiDevelopmentAdvancedPage') ||
    line.includes('DevopsAdvancedPage') ||
    line.includes('ZionChatAiPage') ||
    line.includes('ZionCrmIntelligencePage') ||
    line.includes('ZionAiContentModerationPage') ||
    line.includes('ZionAiPredictiveMaintenancePage') ||
    line.includes('ZionAiFraudDetectorPage') ||
    line.includes('ZionAiSupplyChainOptimizerPage') ||
    line.includes('ZionAiDocumentAiPage') ||
    line.includes('ZionAiCustomerServiceProPage') ||
    line.includes('ZionAiContractAnalyzerPage') ||
    line.includes('ZionAiTranslatorProPage') ||
    line.includes('ZionAiCodeReviewerPage') ||
    line.includes('ZionAiSurveyBuilderPage') ||
    line.includes('ZionAiMarketingAutomationPage') ||
    line.includes('ZionAiAccountingAssistantPage') ||
    line.includes('ZionAiSeoOptimizerPage') ||
    line.includes('ZionAiDataCleanerPage') ||
    line.includes('ZionCustomerInsightsPage') ||
    line.includes('FiveGIotSolutionsPage')
  )) {
    console.log(`Removing unused lazy import: ${line.trim()}`);
    continue;
  }
  
  // Skip corresponding route definitions
  if (line.includes('<Route path=') && (
    line.includes('ai-analytics') ||
    line.includes('ai-automation') ||
    line.includes('ai-chatbot-builder') ||
    line.includes('ai-cybersecurity') ||
    line.includes('ai-crm') ||
    line.includes('ai-data-analytics') ||
    line.includes('ai-healthcare') ||
    line.includes('ai-financial-services') ||
    line.includes('ai-computer-vision') ||
    line.includes('ai-voice-solutions') ||
    line.includes('ai-ecommerce-solutions') ||
    line.includes('ai-hr-solutions') ||
    line.includes('ai-content-generation') ||
    line.includes('ai-workflow-automation') ||
    line.includes('ai-document-processing') ||
    line.includes('ai-predictive-analytics') ||
    line.includes('ai-edge-computing') ||
    line.includes('ai-video-analysis') ||
    line.includes('ai-speech-synthesis') ||
    line.includes('ai-recommendation-engine') ||
    line.includes('ai-sentiment-analysis') ||
    line.includes('ai-chatbot-enterprise') ||
    line.includes('ai-content-moderation') ||
    line.includes('ai-predictive-modeling') ||
    line.includes('ai-document-intelligence') ||
    line.includes('ai-conversation-analytics') ||
    line.includes('ai-supply-chain-ai') ||
    line.includes('ai-healthcare-diagnostics') ||
    line.includes('ai-financial-forecasting') ||
    line.includes('ai-iot-analytics') ||
    line.includes('ai-conversational-ai') ||
    line.includes('ai-automated-testing') ||
    line.includes('ai-knowledge-management') ||
    line.includes('ai-customer-churn') ||
    line.includes('ai-automated-reporting') ||
    line.includes('ai-voice-assistant') ||
    line.includes('ai-content-generation-pro') ||
    line.includes('ai-accounting-assistant') ||
    line.includes('ai-cybersecurity-monitor-pro') ||
    line.includes('api-development') ||
    line.includes('devops-cicd') ||
    line.includes('it-support') ||
    line.includes('data-analytics-bi') ||
    line.includes('it-asset-management') ||
    line.includes('it-security-services') ||
    line.includes('it-project-management') ||
    line.includes('ai-integration-services') ||
    line.includes('iot-development') ||
    line.includes('api-development-advanced') ||
    line.includes('devops-advanced') ||
    line.includes('zion-chat-ai') ||
    line.includes('zion-crm-intelligence') ||
    line.includes('zion-ai-content-moderation') ||
    line.includes('zion-ai-predictive-maintenance') ||
    line.includes('zion-ai-fraud-detector') ||
    line.includes('zion-ai-supply-chain-optimizer') ||
    line.includes('zion-ai-document-ai') ||
    line.includes('zion-ai-customer-service-pro') ||
    line.includes('zion-ai-contract-analyzer') ||
    line.includes('zion-ai-translator-pro') ||
    line.includes('zion-ai-code-reviewer') ||
    line.includes('zion-ai-survey-builder') ||
    line.includes('zion-ai-marketing-automation') ||
    line.includes('zion-ai-accounting-assistant') ||
    line.includes('zion-ai-seo-optimizer') ||
    line.includes('zion-ai-data-cleaner') ||
    line.includes('zion-customer-insights') ||
    line.includes('5g-iot-solutions')
  )) {
    console.log(`Removing unused route: ${line.trim()}`);
    continue;
  }
  
  cleanedLines.push(line);
}

// Write the cleaned content back
const cleanedContent = cleanedLines.join('\n');
fs.writeFileSync(appTsxPath, cleanedContent, 'utf8');

console.log('Comprehensively cleaned up App.tsx - removed unused imports and routes');