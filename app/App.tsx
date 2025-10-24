'use client';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route     } from 'react-router-dom';
import { HelmetProvider     } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import { AccessibilityEnhancer     } from './components/AccessibilityEnhancer';
import { LoadingSpinner     } from './components/LoadingSpinner';
// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'))
const AboutPage = lazy(() => import('./about/page'))
const ContactPage = lazy(() => import('./contact/page'))
const ServicesPage = lazy(() => import('./services/page'))
const PricingPage = lazy(() => import('./pricing/page'))
const CaseStudiesPage = lazy(() => import('./case-studies/page'))
const BlogPage = lazy(() => import('./blog/page'))
const TeamPage = lazy(() => import('./team/page'))
const CareersPage = lazy(() => import('./careers/page'))
const PrivacyPage = lazy(() => import('./privacy/page'))
const TermsPage = lazy(() => import('./terms/page'))
const CookiesPage = lazy(() => import('./cookies/page'))
// AI Services
const AIServicesPage = lazy(() => import('./ai-services/page'))
const AIMarketingPage = lazy(() => import('./ai-marketing/page'))
const AIAutomationPage = lazy(() => import('./ai-automation/page'))
const AIHealthcarePage = lazy(() => import('./ai-healthcare/page'))
const AIFintechPage = lazy(() => import('./ai-fintech/page'))
const AIContentGenerationPage = lazy(() => import('./ai-content-generation/page'))
const AIDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'))
const AICybersecurityPage = lazy(() => import('./ai-cybersecurity/page'))
const AICRMPage = lazy(() => import('./ai-crm/page'))
const AIVoiceSolutionsPage = lazy(() => import('./ai-voice-solutions/page'))
const AIEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'))
const AIHRSolutionsPage = lazy(() => import('./ai-hr-solutions/page'))
const AIWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'))
const AIDocumentProcessingPage = lazy(() => import('./ai-document-processing/page'))
const AIPredictiveAnalyticsPage = lazy(() => import('./ai-predictive-analytics/page'))
const AIEdgeComputingPage = lazy(() => import('./ai-edge-computing/page'))
const AIVideoAnalysisPage = lazy(() => import('./ai-video-analysis/page'))
const AISpeechSynthesisPage = lazy(() => import('./ai-speech-synthesis/page'))
const AIRecommendationEnginePage = lazy(() => import('./ai-recommendation-engine/page'))
const AISentimentAnalysisPage = lazy(() => import('./ai-sentiment-analysis/page'))
const AIChatbotEnterprisePage = lazy(() => import('./ai-chatbot-enterprise/page'))
const AIContentModerationPage = lazy(() => import('./ai-content-moderation/page'))
const AIPredictiveModelingPage = lazy(() => import('./ai-predictive-modeling/page'))
const AIDocumentIntelligencePage = lazy(() => import('./ai-document-intelligence/page'))
const AIConversationAnalyticsPage = lazy(() => import('./ai-conversation-analytics/page'))
const AISupplyChainAIPage = lazy(() => import('./ai-supply-chain-ai/page'))
const AIHealthcareDiagnosticsPage = lazy(() => import('./ai-healthcare-diagnostics/page'))
const AIFinancialForecastingPage = lazy(() => import('./ai-financial-forecasting/page'))
const AIIoTAnalyticsPage = lazy(() => import('./ai-iot-analytics/page'))
const AIConversationalAIPage = lazy(() => import('./ai-conversational-ai/page'))
const AIAutomatedTestingPage = lazy(() => import('./ai-automated-testing/page'))
const AIKnowledgeManagementPage = lazy(() => import('./ai-knowledge-management/page'))
const AICustomerChurnPage = lazy(() => import('./ai-customer-churn/page'))
const AIAutomatedReportingPage = lazy(() => import('./ai-automated-reporting/page'))
const AIVoiceAssistantPage = lazy(() => import('./ai-voice-assistant/page'))
const AIContentGenerationProPage = lazy(() => import('./ai-content-generation-pro/page'))
const AIAccountingAssistantPage = lazy(() => import('./ai-accounting-assistant/page'))
const AICybersecurityMonitorProPage = lazy(() => import('./ai-cybersecurity-monitor-pro/page'))
// IT Services
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'))
const CybersecuritySolutionsPage = lazy(() => import('./cybersecurity-solutions/page'))
const WebDevelopmentPage = lazy(() => import('./web-development/page'))
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'))
const APIDevelopmentPage = lazy(() => import('./api-development/page'))
const DatabaseManagementPage = lazy(() => import('./database-management/page'))
const DevOpsCICDPage = lazy(() => import('./devops-cicd/page'))
const ITSupportPage = lazy(() => import('./it-support/page'))
const DataAnalyticsBIPage = lazy(() => import('./data-analytics-bi/page'))
const CustomSoftwarePage = lazy(() => import('./custom-software/page'))
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'))
const ITAssetManagementPage = lazy(() => import('./it-asset-management/page'))
const ITSecurityServicesPage = lazy(() => import('./it-security-services/page'))
const ITProjectManagementPage = lazy(() => import('./it-project-management/page'))
const CloudNativeDevelopmentPage = lazy(() => import('./cloud-native-development/page'))
const AIIntegrationServicesPage = lazy(() => import('./ai-integration-services/page'))
const BlockchainDevelopmentPage = lazy(() => import('./blockchain-development/page'))
const IoTDevelopmentPage = lazy(() => import('./iot-development/page'))
const ECommerceDevelopmentPage = lazy(() => import('./e-commerce-development/page'))
const APIDevelopmentAdvancedPage = lazy(() => import('./api-development-advanced/page'))
const DataEngineeringPage = lazy(() => import('./data-engineering/page'))
const CybersecurityAdvancedPage = lazy(() => import('./cybersecurity-advanced/page'))
const CloudMigrationAdvancedPage = lazy(() => import('./cloud-migration-advanced/page'))
const DevOpsAdvancedPage = lazy(() => import('./devops-advanced/page'))
const MachineLearningOpsPage = lazy(() => import('./machine-learning-ops/page'))
const EnterpriseIntegrationPage = lazy(() => import('./enterprise-integration/page'))
const PerformanceOptimizationPage = lazy(() => import('./performance-optimization/page'))
const DisasterRecoveryAdvancedPage = lazy(() => import('./disaster-recovery-advanced/page'))
const ComplianceAutomationPage = lazy(() => import('./compliance-automation/page'))
const CloudCostOptimizationPage = lazy(() => import('./cloud-cost-optimization/page'))
const SecurityAutomationPage = lazy(() => import('./security-automation/page'))
const DataVisualizationPage = lazy(() => import('./data-visualization/page'))
const WorkflowAutomationPage = lazy(() => import('./workflow-automation/page'))
const CloudNativeSecurityPage = lazy(() => import('./cloud-native-security/page'))
// Micro SAAS Pages
const ZionAnalyticsProPage = lazy(() => import('./zion-analytics-pro/page'))
const ZionChatAIPage = lazy(() => import('./zion-chat-ai/page'))
const ZionSecurityShieldPage = lazy(() => import('./zion-security-shield/page'))
const ZionCloudVaultPage = lazy(() => import('./zion-cloud-vault/page'))
const ZionContentStudioPage = lazy(() => import('./zion-content-studio/page'))
const ZionCRMIntelligencePage = lazy(() => import('./zion-crm-intelligence/page'))
const ZionDataSyncPage = lazy(() => import('./zion-data-sync/page'))
const ZionLeadMagnetPage = lazy(() => import('./zion-lead-magnet/page'))
const ZionProjectMasterPage = lazy(() => import('./zion-project-master/page'))
const ZionEmailAutomationPage = lazy(() => import('./zion-email-automation/page'))
const ZionSocialSchedulerPage = lazy(() => import('./zion-social-scheduler/page'))
const ZionWorkflowAutomationPage = lazy(() => import('./zion-workflow-automation/page'))
const ZionAIContentModerationPage = lazy(() => import('./zion-ai-content-moderation/page'))
const ZionAIPredictiveMaintenancePage = lazy(() => import('./zion-ai-predictive-maintenance/page'))
const ZionAIFraudDetectorPage = lazy(() => import('./zion-ai-fraud-detector/page'))
const ZionAISupplyChainOptimizerPage = lazy(() => import('./zion-ai-supply-chain-optimizer/page'))
const ZionAIDocumentAIPage = lazy(() => import('./zion-ai-document-ai/page'))
const ZionAICustomerServiceProPage = lazy(() => import('./zion-ai-customer-service-pro/page'))
const ZionAIContractAnalyzerPage = lazy(() => import('./zion-ai-contract-analyzer/page'))
const ZionAITranslatorProPage = lazy(() => import('./zion-ai-translator-pro/page'))
const ZionInvoiceGeniusPage = lazy(() => import('./zion-invoice-genius/page'))
const ZionInventorySmartPage = lazy(() => import('./zion-inventory-smart/page'))
const ZionComplianceManagerPage = lazy(() => import('./zion-compliance-manager/page'))
const ZionPerformanceMonitorPage = lazy(() => import('./zion-performance-monitor/page'))
const ZionAICodeReviewerPage = lazy(() => import('./zion-ai-code-reviewer/page'))
const ZionAISurveyBuilderPage = lazy(() => import('./zion-ai-survey-builder/page'))
const ZionAIMarketingAutomationPage = lazy(() => import('./zion-ai-marketing-automation/page'))
const ZionAIAccountingAssistantPage = lazy(() => import('./zion-ai-accounting-assistant/page'))
const ZionAISEOOptimizerPage = lazy(() => import('./zion-ai-seo-optimizer/page'))
const ZionAIDataCleanerPage = lazy(() => import('./zion-ai-data-cleaner/page'))
const ZionCustomerInsightsPage = lazy(() => import('./zion-customer-insights/page'))
// 5 G Solutions Pages
const FiveGDataAnalyticsPage = lazy(() => import('./5 g-data-analytics/page'))
const FiveGEdgeComputingPage = lazy(() => import('./5 g-edge-computing/page'))
const FiveGImplementationPage = lazy(() => import('./5 g-implementation/page'))
const FiveGIoTSolutionsPage = lazy(() => import('./5 g-iot-solutions/page'))
const FiveGMobileApplicationsPage = lazy(() => import('./5 g-mobile-applications/page'))
const FiveGNetworkInfrastructurePage = lazy(() => import('./5 g-network-infrastructure/page'))
const FiveGPrivateNetworksPage = lazy(() => import('./5 g-private-networks/page'))
const FiveGSmartCitySolutionsPage = lazy(() => import('./5 g-smart-city-solutions/page'))
const FiveGSolutionsPage = lazy(() => import('./5 g-solutions/page'))
// Test Page
const TestPage = lazy(() => import('./test/page'))
// Main App Component
function App() {
return (
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <Suspensefallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Pages */}
              <Routepath="/" element={<HomePage />} />
              <Routepath="/test" element={<TestPage />} />

              {/* AI Services */}
              <Routepath="/ai-services" element={<AIServicesPage />} />
              <Routepath="/ai-marketing" element={<AIMarketingPage />} />
              <Routepath="/ai-automation" element={<AIAutomationPage />} />
              <Routepath="/ai-healthcare" element={<AIHealthcarePage />} />
              <Routepath="/ai-fintech" element={<AIFintechPage />} />
              <Routepath="/ai-content-generation" element={<AIContentGenerationPage />} />
              <Routepath="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
              <Routepath="/ai-cybersecurity" element={<AICybersecurityPage />} />
              <Routepath="/ai-crm" element={<AICRMPage />} />
              <Routepath="/ai-voice-solutions" element={<AIVoiceSolutionsPage />} />
              <Routepath="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
              <Routepath="/ai-hr-solutions" element={<AIHRSolutionsPage />} />
              <Routepath="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
              <Routepath="/ai-document-processing" element={<AIDocumentProcessingPage />} />
              <Routepath="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
              <Routepath="/ai-edge-computing" element={<AIEdgeComputingPage />} />
              <Routepath="/ai-video-analysis" element={<AIVideoAnalysisPage />} />
              <Routepath="/ai-speech-synthesis" element={<AISpeechSynthesisPage />} />
              <Routepath="/ai-recommendation-engine" element={<AIRecommendationEnginePage />} />
              <Routepath="/ai-sentiment-analysis" element={<AISentimentAnalysisPage />} />
              <Routepath="/ai-chatbot-enterprise" element={<AIChatbotEnterprisePage />} />
              <Routepath="/ai-content-moderation" element={<AIContentModerationPage />} />
              <Routepath="/ai-predictive-modeling" element={<AIPredictiveModelingPage />} />
              <Routepath="/ai-document-intelligence" element={<AIDocumentIntelligencePage />} />
              <Routepath="/ai-conversation-analytics" element={<AIConversationAnalyticsPage />} />
              <Routepath="/ai-supply-chain-ai" element={<AISupplyChainAIPage />} />
              <Routepath="/ai-healthcare-diagnostics" element={<AIHealthcareDiagnosticsPage />} />
              <Routepath="/ai-financial-forecasting" element={<AIFinancialForecastingPage />} />
              <Routepath="/ai-iot-analytics" element={<AIIoTAnalyticsPage />} />
              <Routepath="/ai-conversational-ai" element={<AIConversationalAIPage />} />
              <Routepath="/ai-automated-testing" element={<AIAutomatedTestingPage />} />
              <Routepath="/ai-knowledge-management" element={<AIKnowledgeManagementPage />} />
              <Routepath="/ai-customer-churn" element={<AICustomerChurnPage />} />
              <Routepath="/ai-automated-reporting" element={<AIAutomatedReportingPage />} />
              <Routepath="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
              <Routepath="/ai-content-generation-pro" element={<AIContentGenerationProPage />} />
              <Routepath="/ai-accounting-assistant" element={<AIAccountingAssistantPage />} />
              <Routepath="/ai-cybersecurity-monitor-pro" element={<AICybersecurityMonitorProPage />} />

              {/* IT Services */}
              <Routepath="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
              <Routepath="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
              <Routepath="/web-development" element={<WebDevelopmentPage />} />
              <Routepath="/mobile-development" element={<MobileDevelopmentPage />} />
              <Routepath="/api-development" element={<APIDevelopmentPage />} />
              <Routepath="/database-management" element={<DatabaseManagementPage />} />
              <Routepath="/devops-cicd" element={<DevOpsCICDPage />} />
              <Routepath="/it-support" element={<ITSupportPage />} />
              <Routepath="/data-analytics-bi" element={<DataAnalyticsBIPage />} />
              <Routepath="/custom-software" element={<CustomSoftwarePage />} />
              <Routepath="/network-infrastructure" element={<NetworkInfrastructurePage />} />
              <Routepath="/it-asset-management" element={<ITAssetManagementPage />} />
              <Routepath="/it-security-services" element={<ITSecurityServicesPage />} />
              <Routepath="/it-project-management" element={<ITProjectManagementPage />} />
              <Routepath="/cloud-native-development" element={<CloudNativeDevelopmentPage />} />
              <Routepath="/ai-integration-services" element={<AIIntegrationServicesPage />} />
              <Routepath="/blockchain-development" element={<BlockchainDevelopmentPage />} />
              <Routepath="/iot-development" element={<IoTDevelopmentPage />} />
              <Routepath="/e-commerce-development" element={<ECommerceDevelopmentPage />} />
              <Routepath="/api-development-advanced" element={<APIDevelopmentAdvancedPage />} />
              <Routepath="/data-engineering" element={<DataEngineeringPage />} />
              <Routepath="/cybersecurity-advanced" element={<CybersecurityAdvancedPage />} />
              <Routepath="/cloud-migration-advanced" element={<CloudMigrationAdvancedPage />} />
              <Routepath="/devops-advanced" element={<DevOpsAdvancedPage />} />
              <Routepath="/machine-learning-ops" element={<MachineLearningOpsPage />} />
              <Routepath="/enterprise-integration" element={<EnterpriseIntegrationPage />} />
              <Routepath="/performance-optimization" element={<PerformanceOptimizationPage />} />
              <Routepath="/disaster-recovery-advanced" element={<DisasterRecoveryAdvancedPage />} />
              <Routepath="/compliance-automation" element={<ComplianceAutomationPage />} />
              <Routepath="/cloud-cost-optimization" element={<CloudCostOptimizationPage />} />
              <Routepath="/security-automation" element={<SecurityAutomationPage />} />
              <Routepath="/data-visualization" element={<DataVisualizationPage />} />
              <Routepath="/workflow-automation" element={<WorkflowAutomationPage />} />
              <Routepath="/cloud-native-security" element={<CloudNativeSecurityPage />} />

              {/* Micro SAAS Pages */}
              <Routepath="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
              <Routepath="/zion-chat-ai" element={<ZionChatAIPage />} />
              <Routepath="/zion-security-shield" element={<ZionSecurityShieldPage />} />
              <Routepath="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
              <Routepath="/zion-content-studio" element={<ZionContentStudioPage />} />
              <Routepath="/zion-crm-intelligence" element={<ZionCRMIntelligencePage />} />
              <Routepath="/zion-data-sync" element={<ZionDataSyncPage />} />
              <Routepath="/zion-lead-magnet" element={<ZionLeadMagnetPage />} />
              <Routepath="/zion-project-master" element={<ZionProjectMasterPage />} />
              <Routepath="/zion-email-automation" element={<ZionEmailAutomationPage />} />
              <Routepath="/zion-social-scheduler" element={<ZionSocialSchedulerPage />} />
              <Routepath="/zion-workflow-automation" element={<ZionWorkflowAutomationPage />} />
              <Routepath="/zion-ai-content-moderation" element={<ZionAIContentModerationPage />} />
              <Routepath="/zion-ai-predictive-maintenance" element={<ZionAIPredictiveMaintenancePage />} />
              <Routepath="/zion-ai-fraud-detector" element={<ZionAIFraudDetectorPage />} />
              <Routepath="/zion-ai-supply-chain-optimizer" element={<ZionAISupplyChainOptimizerPage />} />
              <Routepath="/zion-ai-document-ai" element={<ZionAIDocumentAIPage />} />
              <Routepath="/zion-ai-customer-service-pro" element={<ZionAICustomerServiceProPage />} />
              <Routepath="/zion-ai-contract-analyzer" element={<ZionAIContractAnalyzerPage />} />
              <Routepath="/zion-ai-translator-pro" element={<ZionAITranslatorProPage />} />
              <Routepath="/zion-invoice-genius" element={<ZionInvoiceGeniusPage />} />
              <Routepath="/zion-inventory-smart" element={<ZionInventorySmartPage />} />
              <Routepath="/zion-compliance-manager" element={<ZionComplianceManagerPage />} />
              <Routepath="/zion-performance-monitor" element={<ZionPerformanceMonitorPage />} />
              <Routepath="/zion-ai-code-reviewer" element={<ZionAICodeReviewerPage />} />
              <Routepath="/zion-ai-survey-builder" element={<ZionAISurveyBuilderPage />} />
              <Routepath="/zion-ai-marketing-automation" element={<ZionAIMarketingAutomationPage />} />
              <Routepath="/zion-ai-accounting-assistant" element={<ZionAIAccountingAssistantPage />} />
              <Routepath="/zion-ai-seo-optimizer" element={<ZionAISEOOptimizerPage />} />
              <Routepath="/zion-ai-data-cleaner" element={<ZionAIDataCleanerPage />} />
              <Routepath="/zion-customer-insights" element={<ZionCustomerInsightsPage />} />

              {/* 5 G Solutions Pages */}
              <Routepath="/5 g-data-analytics" element={<FiveGDataAnalyticsPage />} />
              <Routepath="/5 g-edge-computing" element={<FiveGEdgeComputingPage />} />
              <Routepath="/5 g-implementation" element={<FiveGImplementationPage />} />
              <Routepath="/5 g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
              <Routepath="/5 g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
              <Routepath="/5 g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
              <Routepath="/5 g-private-networks" element={<FiveGPrivateNetworksPage />} />
              <Routepath="/5 g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
              <Routepath="/5 g-solutions" element={<FiveGSolutionsPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  )
}
export default App;
}