'use client';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import all page components
import HomePage from './page';
import AIServicesPage from './ai-services/page';
import AIMarketingPage from './ai-marketing/page';
import AIAutomationPage from './ai-automation/page';
import AIHealthcarePage from './ai-healthcare/page';
import AIFintechPage from './ai-fintech/page';
import AIContentGenerationPage from './ai-content-generation/page';
import AIDataAnalyticsPage from './ai-data-analytics/page';
import AICybersecurityPage from './ai-cybersecurity/page';
import AICRMPage from './ai-crm/page';
import AIVoiceSolutionsPage from './ai-voice-solutions/page';
import AIEcommerceSolutionsPage from './ai-ecommerce-solutions/page';
import AIHRSolutionsPage from './ai-hr-solutions/page';
import AIWorkflowAutomationPage from './ai-workflow-automation/page';
import AIDocumentProcessingPage from './ai-document-processing/page';
import AIPredictiveAnalyticsPage from './ai-predictive-analytics/page';
import AIEdgeComputingPage from './ai-edge-computing/page';
import AIVideoAnalysisPage from './ai-video-analysis/page';
import AISpeechSynthesisPage from './ai-speech-synthesis/page';
import AIRecommendationEnginePage from './ai-recommendation-engine/page';
import AISentimentAnalysisPage from './ai-sentiment-analysis/page';
import AIChatbotEnterprisePage from './ai-chatbot-enterprise/page';
import AIContentModerationPage from './ai-content-moderation/page';
import AIPredictiveModelingPage from './ai-predictive-modeling/page';
import AIDocumentIntelligencePage from './ai-document-intelligence/page';
import AIConversationAnalyticsPage from './ai-conversation-analytics/page';
import AISupplyChainAIPage from './ai-supply-chain-ai/page';
import AIHealthcareDiagnosticsPage from './ai-healthcare-diagnostics/page';
import AIFinancialForecastingPage from './ai-financial-forecasting/page';
import AIIoTAnalyticsPage from './ai-iot-analytics/page';
import AIConversationalAIPage from './ai-conversational-ai/page';
import AIAutomatedTestingPage from './ai-automated-testing/page';
import AIKnowledgeManagementPage from './ai-knowledge-management/page';
import AICustomerChurnPage from './ai-customer-churn/page';
import AIAutomatedReportingPage from './ai-automated-reporting/page';
import AIVoiceAssistantPage from './ai-voice-assistant/page';
import AIContentGenerationProPage from './ai-content-generation-pro/page';
import AIAccountingAssistantPage from './ai-accounting-assistant/page';
import AICybersecurityMonitorProPage from './ai-cybersecurity-monitor-pro/page';

// IT Services Pages
import CloudInfrastructurePage from './cloud-infrastructure/page';
import CybersecuritySolutionsPage from './cybersecurity-solutions/page';
import WebDevelopmentPage from './web-development/page';
import MobileDevelopmentPage from './mobile-development/page';
import APIDevelopmentPage from './api-development/page';
import DatabaseManagementPage from './database-management/page';
import DevOpsCICDPage from './devops-cicd/page';
import ITSupportPage from './it-support/page';
import DataAnalyticsBIPage from './data-analytics-bi/page';
import CustomSoftwarePage from './custom-software/page';
import NetworkInfrastructurePage from './network-infrastructure/page';
import ITAssetManagementPage from './it-asset-management/page';
import ITSecurityServicesPage from './it-security-services/page';
import ITProjectManagementPage from './it-project-management/page';
import CloudNativeDevelopmentPage from './cloud-native-development/page';
import AIIntegrationServicesPage from './ai-integration-services/page';
import BlockchainDevelopmentPage from './blockchain-development/page';
import IoTDevelopmentPage from './iot-development/page';
import ECommerceDevelopmentPage from './e-commerce-development/page';
import APIDevelopmentAdvancedPage from './api-development-advanced/page';
import DataEngineeringPage from './data-engineering/page';
import CybersecurityAdvancedPage from './cybersecurity-advanced/page';
import CloudMigrationAdvancedPage from './cloud-migration-advanced/page';
import DevOpsAdvancedPage from './devops-advanced/page';
import MachineLearningOpsPage from './machine-learning-ops/page';
import EnterpriseIntegrationPage from './enterprise-integration/page';
import PerformanceOptimizationPage from './performance-optimization/page';
import DisasterRecoveryAdvancedPage from './disaster-recovery-advanced/page';
import ComplianceAutomationPage from './compliance-automation/page';
import CloudCostOptimizationPage from './cloud-cost-optimization/page';
import SecurityAutomationPage from './security-automation/page';
import DataVisualizationPage from './data-visualization/page';
import WorkflowAutomationPage from './workflow-automation/page';
import CloudNativeSecurityPage from './cloud-native-security/page';

// Micro SAAS Pages
import ZionAnalyticsProPage from './zion-analytics-pro/page';
import ZionChatAIPage from './zion-chat-ai/page';
import ZionSecurityShieldPage from './zion-security-shield/page';
import ZionCloudVaultPage from './zion-cloud-vault/page';
import ZionContentStudioPage from './zion-content-studio/page';
import ZionCRMIntelligencePage from './zion-crm-intelligence/page';
import ZionDataSyncPage from './zion-data-sync/page';
import ZionLeadMagnetPage from './zion-lead-magnet/page';
import ZionProjectMasterPage from './zion-project-master/page';
import ZionEmailAutomationPage from './zion-email-automation/page';
import ZionSocialSchedulerPage from './zion-social-scheduler/page';
import ZionWorkflowAutomationPage from './zion-workflow-automation/page';
import ZionAIContentModerationPage from './zion-ai-content-moderation/page';
import ZionAIPredictiveMaintenancePage from './zion-ai-predictive-maintenance/page';
import ZionAIFraudDetectorPage from './zion-ai-fraud-detector/page';
import ZionAISupplyChainOptimizerPage from './zion-ai-supply-chain-optimizer/page';
import ZionAIDocumentAIPage from './zion-ai-document-ai/page';
import ZionAICustomerServiceProPage from './zion-ai-customer-service-pro/page';
import ZionAIContractAnalyzerPage from './zion-ai-contract-analyzer/page';
import ZionAITranslatorProPage from './zion-ai-translator-pro/page';
import ZionInvoiceGeniusPage from './zion-invoice-genius/page';
import ZionInventorySmartPage from './zion-inventory-smart/page';
import ZionComplianceManagerPage from './zion-compliance-manager/page';
import ZionPerformanceMonitorPage from './zion-performance-monitor/page';
import ZionAICodeReviewerPage from './zion-ai-code-reviewer/page';
import ZionAISurveyBuilderPage from './zion-ai-survey-builder/page';
import ZionAIMarketingAutomationPage from './zion-ai-marketing-automation/page';
import ZionAIAccountingAssistantPage from './zion-ai-accounting-assistant/page';
import ZionAISEOOptimizerPage from './zion-ai-seo-optimizer/page';
import ZionAIDataCleanerPage from './zion-ai-data-cleaner/page';
import ZionCustomerInsightsPage from './zion-customer-insights/page';

// 5G Solutions Pages
import FiveGDataAnalyticsPage from './5g-data-analytics/page';
import FiveGEdgeComputingPage from './5g-edge-computing/page';
import FiveGImplementationPage from './5g-implementation/page';
import FiveGIoTSolutionsPage from './5g-iot-solutions/page';
import FiveGMobileApplicationsPage from './5g-mobile-applications/page';
import FiveGNetworkInfrastructurePage from './5g-network-infrastructure/page';
import FiveGPrivateNetworksPage from './5g-private-networks/page';
import FiveGSmartCitySolutionsPage from './5g-smart-city-solutions/page';
import FiveGSolutionsPage from './5g-solutions/page';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              {/* AI Services */}
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/ai-marketing" element={<AIMarketingPage />} />
              <Route path="/ai-automation" element={<AIAutomationPage />} />
              <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
              <Route path="/ai-fintech" element={<AIFintechPage />} />
              <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
              <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
              <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
              <Route path="/ai-crm" element={<AICRMPage />} />
              <Route path="/ai-voice-solutions" element={<AIVoiceSolutionsPage />} />
              <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
              <Route path="/ai-hr-solutions" element={<AIHRSolutionsPage />} />
              <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
              <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
              <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
              <Route path="/ai-edge-computing" element={<AIEdgeComputingPage />} />
              <Route path="/ai-video-analysis" element={<AIVideoAnalysisPage />} />
              <Route path="/ai-speech-synthesis" element={<AISpeechSynthesisPage />} />
              <Route path="/ai-recommendation-engine" element={<AIRecommendationEnginePage />} />
              <Route path="/ai-sentiment-analysis" element={<AISentimentAnalysisPage />} />
              <Route path="/ai-chatbot-enterprise" element={<AIChatbotEnterprisePage />} />
              <Route path="/ai-content-moderation" element={<AIContentModerationPage />} />
              <Route path="/ai-predictive-modeling" element={<AIPredictiveModelingPage />} />
              <Route path="/ai-document-intelligence" element={<AIDocumentIntelligencePage />} />
              <Route path="/ai-conversation-analytics" element={<AIConversationAnalyticsPage />} />
              <Route path="/ai-supply-chain-ai" element={<AISupplyChainAIPage />} />
              <Route path="/ai-healthcare-diagnostics" element={<AIHealthcareDiagnosticsPage />} />
              <Route path="/ai-financial-forecasting" element={<AIFinancialForecastingPage />} />
              <Route path="/ai-iot-analytics" element={<AIIoTAnalyticsPage />} />
              <Route path="/ai-conversational-ai" element={<AIConversationalAIPage />} />
              <Route path="/ai-automated-testing" element={<AIAutomatedTestingPage />} />
              <Route path="/ai-knowledge-management" element={<AIKnowledgeManagementPage />} />
              <Route path="/ai-customer-churn" element={<AICustomerChurnPage />} />
              <Route path="/ai-automated-reporting" element={<AIAutomatedReportingPage />} />
              <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
              <Route path="/ai-content-generation-pro" element={<AIContentGenerationProPage />} />
              <Route path="/ai-accounting-assistant" element={<AIAccountingAssistantPage />} />
              <Route path="/ai-cybersecurity-monitor-pro" element={<AICybersecurityMonitorProPage />} />
              {/* IT Services */}
              <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
              <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
              <Route path="/web-development" element={<WebDevelopmentPage />} />
              <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
              <Route path="/api-development" element={<APIDevelopmentPage />} />
              <Route path="/database-management" element={<DatabaseManagementPage />} />
              <Route path="/devops-cicd" element={<DevOpsCICDPage />} />
              <Route path="/it-support" element={<ITSupportPage />} />
              <Route path="/data-analytics-bi" element={<DataAnalyticsBIPage />} />
              <Route path="/custom-software" element={<CustomSoftwarePage />} />
              <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
              <Route path="/it-asset-management" element={<ITAssetManagementPage />} />
              <Route path="/it-security-services" element={<ITSecurityServicesPage />} />
              <Route path="/it-project-management" element={<ITProjectManagementPage />} />
              <Route path="/cloud-native-development" element={<CloudNativeDevelopmentPage />} />
              <Route path="/ai-integration-services" element={<AIIntegrationServicesPage />} />
              <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
              <Route path="/iot-development" element={<IoTDevelopmentPage />} />
              <Route path="/e-commerce-development" element={<ECommerceDevelopmentPage />} />
              <Route path="/api-development-advanced" element={<APIDevelopmentAdvancedPage />} />
              <Route path="/data-engineering" element={<DataEngineeringPage />} />
              <Route path="/cybersecurity-advanced" element={<CybersecurityAdvancedPage />} />
              <Route path="/cloud-migration-advanced" element={<CloudMigrationAdvancedPage />} />
              <Route path="/devops-advanced" element={<DevOpsAdvancedPage />} />
              <Route path="/machine-learning-ops" element={<MachineLearningOpsPage />} />
              <Route path="/enterprise-integration" element={<EnterpriseIntegrationPage />} />
              <Route path="/performance-optimization" element={<PerformanceOptimizationPage />} />
              <Route path="/disaster-recovery-advanced" element={<DisasterRecoveryAdvancedPage />} />
              <Route path="/compliance-automation" element={<ComplianceAutomationPage />} />
              <Route path="/cloud-cost-optimization" element={<CloudCostOptimizationPage />} />
              <Route path="/security-automation" element={<SecurityAutomationPage />} />
              <Route path="/data-visualization" element={<DataVisualizationPage />} />
              <Route path="/workflow-automation" element={<WorkflowAutomationPage />} />
              <Route path="/cloud-native-security" element={<CloudNativeSecurityPage />} />
              {/* Micro SAAS Pages */}
              <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
              <Route path="/zion-chat-ai" element={<ZionChatAIPage />} />
              <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
              <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
              <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
              <Route path="/zion-crm-intelligence" element={<ZionCRMIntelligencePage />} />
              <Route path="/zion-data-sync" element={<ZionDataSyncPage />} />
              <Route path="/zion-lead-magnet" element={<ZionLeadMagnetPage />} />
              <Route path="/zion-project-master" element={<ZionProjectMasterPage />} />
              <Route path="/zion-email-automation" element={<ZionEmailAutomationPage />} />
              <Route path="/zion-social-scheduler" element={<ZionSocialSchedulerPage />} />
              <Route path="/zion-workflow-automation" element={<ZionWorkflowAutomationPage />} />
              <Route path="/zion-ai-content-moderation" element={<ZionAIContentModerationPage />} />
              <Route path="/zion-ai-predictive-maintenance" element={<ZionAIPredictiveMaintenancePage />} />
              <Route path="/zion-ai-fraud-detector" element={<ZionAIFraudDetectorPage />} />
              <Route path="/zion-ai-supply-chain-optimizer" element={<ZionAISupplyChainOptimizerPage />} />
              <Route path="/zion-ai-document-ai" element={<ZionAIDocumentAIPage />} />
              <Route path="/zion-ai-customer-service-pro" element={<ZionAICustomerServiceProPage />} />
              <Route path="/zion-ai-contract-analyzer" element={<ZionAIContractAnalyzerPage />} />
              <Route path="/zion-ai-translator-pro" element={<ZionAITranslatorProPage />} />
              <Route path="/zion-invoice-genius" element={<ZionInvoiceGeniusPage />} />
              <Route path="/zion-inventory-smart" element={<ZionInventorySmartPage />} />
              <Route path="/zion-compliance-manager" element={<ZionComplianceManagerPage />} />
              <Route path="/zion-performance-monitor" element={<ZionPerformanceMonitorPage />} />
              <Route path="/zion-ai-code-reviewer" element={<ZionAICodeReviewerPage />} />
              <Route path="/zion-ai-survey-builder" element={<ZionAISurveyBuilderPage />} />
              <Route path="/zion-ai-marketing-automation" element={<ZionAIMarketingAutomationPage />} />
              <Route path="/zion-ai-accounting-assistant" element={<ZionAIAccountingAssistantPage />} />
              <Route path="/zion-ai-seo-optimizer" element={<ZionAISEOOptimizerPage />} />
              <Route path="/zion-ai-data-cleaner" element={<ZionAIDataCleanerPage />} />
              <Route path="/zion-customer-insights" element={<ZionCustomerInsightsPage />} />
              {/* 5G Solutions Pages */}
              <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
              <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
              <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
              <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
              <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
              <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
              <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
              <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
              <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
