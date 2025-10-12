import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the App.tsx file
const appPath = path.join(__dirname, 'App.tsx');
let content = fs.readFileSync(appPath, 'utf8');

// Define the mapping of incorrect names to correct names
const nameMappings = {
  'ZionAiPredictiveMaintenancePage': 'ZionAIPredictiveMaintenancePage',
  'ZionAiFraudDetectorPage': 'ZionAIFraudDetectorPage',
  'ZionAiSupplyChainOptimizerPage': 'ZionAISupplyChainOptimizerPage',
  'ZionAiDocumentAiPage': 'ZionAIDocumentAIPage',
  'ZionAiCustomerServiceProPage': 'ZionAICustomerServiceProPage',
  'ZionAiContractAnalyzerPage': 'ZionAIContractAnalyzerPage',
  'ZionAiTranslatorProPage': 'ZionAITranslatorProPage',
  'ZionAiCodeReviewerPage': 'ZionAICodeReviewerPage',
  'ZionAiSurveyBuilderPage': 'ZionAISurveyBuilderPage',
  'ZionAiMarketingAutomationPage': 'ZionAIMarketingAutomationPage',
  'ZionAiAccountingAssistantPage': 'ZionAIAccountingAssistantPage',
  'ZionAiSeoOptimizerPage': 'ZionAISEOOptimizerPage',
  'ZionAiDataCleanerPage': 'ZionAIDataCleanerPage',
  'ZionCustomerInsightsPage': 'ZionCustomerInsightsPage', // This one might be correct
  'FiveGIotSolutionsPage': 'FiveGIoTSolutionsPage'
};

// Apply the mappings
Object.entries(nameMappings).forEach(([incorrect, correct]) => {
  const regex = new RegExp(`const ${incorrect}`, 'g');
  content = content.replace(regex, `const ${correct}`);
});

// Write the fixed content back
fs.writeFileSync(appPath, content);
console.log('Fixed variable naming in App.tsx');