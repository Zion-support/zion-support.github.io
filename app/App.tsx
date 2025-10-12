
'use client';

import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./page'));
const AboutPage = React.lazy(() => import('./about/page'));
const ContactPage = React.lazy(() => import('./contact/page'));
const ServicesPage = React.lazy(() => import('./services/page'));
const PricingPage = React.lazy(() => import('./pricing/page'));
const CaseStudiesPage = React.lazy(() => import('./case-studies/page'));
const BlogPage = React.lazy(() => import('./blog/page'));
const TeamPage = React.lazy(() => import('./team/page'));
const CareersPage = React.lazy(() => import('./careers/page'));
const PrivacyPage = React.lazy(() => import('./privacy/page'));
const TermsPage = React.lazy(() => import('./terms/page'));
const CookiesPage = React.lazy(() => import('./cookies/page'));

// AI Services
const AIServicesPage = React.lazy(() => import('./ai-services/page'));
const AIMarketingPage = React.lazy(() => import('./ai-marketing/page'));
const AIAutomationPage = React.lazy(() => import('./ai-automation/page'));
const AIHealthcarePage = React.lazy(() => import('./ai-healthcare/page'));
const AIFintechPage = React.lazy(() => import('./ai-fintech/page'));
const AIContentGenerationPage = React.lazy(() => import('./ai-content-generation/page'));
const AIDataAnalyticsPage = React.lazy(() => import('./ai-data-analytics/page'));
const AICybersecurityPage = React.lazy(() => import('./ai-cybersecurity/page'));
const AICRMPage = React.lazy(() => import('./ai-crm/page'));
const AIVoiceSolutionsPage = React.lazy(() => import('./ai-voice-solutions/page'));
const AIEcommerceSolutionsPage = React.lazy(() => import('./ai-ecommerce-solutions/page'));
const AIHRSolutionsPage = React.lazy(() => import('./ai-hr-solutions/page'));
const AIWorkflowAutomationPage = React.lazy(() => import('./ai-workflow-automation/page'));
const AIDocumentProcessingPage = React.lazy(() => import('./ai-document-processing/page'));
const AIPredictiveAnalyticsPage = React.lazy(() => import('./ai-predictive-analytics/page'));
const AIEdgeComputingPage = React.lazy(() => import('./ai-edge-computing/page'));
const AIVideoAnalysisPage = React.lazy(() => import('./ai-video-analysis/page'));
const AISpeechSynthesisPage = React.lazy(() => import('./ai-speech-synthesis/page'));
const AIRecommendationEnginePage = React.lazy(() => import('./ai-recommendation-engine/page'));
const AISentimentAnalysisPage = React.lazy(() => import('./ai-sentiment-analysis/page'));
const AIChatbotEnterprisePage = React.lazy(() => import('./ai-chatbot-enterprise/page'));
const AIContentModerationPage = React.lazy(() => import('./ai-content-moderation/page'));
const AIPredictiveModelingPage = React.lazy(() => import('./ai-predictive-modeling/page'));
const AIDocumentIntelligencePage = React.lazy(() => import('./ai-document-intelligence/page'));
const AIConversationAnalyticsPage = React.lazy(() => import('./ai-conversation-analytics/page'));
const AISupplyChainAIPage = React.lazy(() => import('./ai-supply-chain-ai/page'));
const AIHealthcareDiagnosticsPage = React.lazy(() => import('./ai-healthcare-diagnostics/page'));
const AIFinancialForecastingPage = React.lazy(() => import('./ai-financial-forecasting/page'));
const AIIoTAnalyticsPage = React.lazy(() => import('./ai-iot-analytics/page'));
const AIConversationalAIPage = React.lazy(() => import('./ai-conversational-ai/page'));
const AIAutomatedTestingPage = React.lazy(() => import('./ai-automated-testing/page'));
const AIKnowledgeManagementPage = React.lazy(() => import('./ai-knowledge-management/page'));
const AICustomerChurnPage = React.lazy(() => import('./ai-customer-churn/page'));
const AIAutomatedReportingPage = React.lazy(() => import('./ai-automated-reporting/page'));
const AIVoiceAssistantPage = React.lazy(() => import('./ai-voice-assistant/page'));
const AIContentGenerationProPage = React.lazy(() => import('./ai-content-generation-pro/page'));
const AIAccountingAssistantPage = React.lazy(() => import('./ai-accounting-assistant/page'));
const AICybersecurityMonitorProPage = React.lazy(() => import('./ai-cybersecurity-monitor-pro/page'));

// IT Services
const CloudInfrastructurePage = React.lazy(() => import('./cloud-infrastructure/page'));
const CybersecuritySolutionsPage = React.lazy(() => import('./cybersecurity-solutions/page'));
const WebDevelopmentPage = React.lazy(() => import('./web-development/page'));
const MobileDevelopmentPage = React.lazy(() => import('./mobile-development/page'));
const APIDevelopmentPage = React.lazy(() => import('./api-development/page'));
const DatabaseManagementPage = React.lazy(() => import('./database-management/page'));
const DevOpsCICDPage = React.lazy(() => import('./devops-cicd/page'));
const ITSupportPage = React.lazy(() => import('./it-support/page'));
const DataAnalyticsBIPage = React.lazy(() => import('./data-analytics-bi/page'));
const CustomSoftwarePage = React.lazy(() => import('./custom-software/page'));
const NetworkInfrastructurePage = React.lazy(() => import('./network-infrastructure/page'));
const ITAssetManagementPage = React.lazy(() => import('./it-asset-management/page'));
const ITSecurityServicesPage = React.lazy(() => import('./it-security-services/page'));
const ITProjectManagementPage = React.lazy(() => import('./it-project-management/page'));
const CloudNativeDevelopmentPage = React.lazy(() => import('./cloud-native-development/page'));
const AIIntegrationServicesPage = React.lazy(() => import('./ai-integration-services/page'));
const BlockchainDevelopmentPage = React.lazy(() => import('./blockchain-development/page'));
const IoTDevelopmentPage = React.lazy(() => import('./iot-development/page'));
const ECommerceDevelopmentPage = React.lazy(() => import('./e-commerce-development/page'));
const APIDevelopmentAdvancedPage = React.lazy(() => import('./api-development-advanced/page'));
const DataEngineeringPage = React.lazy(() => import('./data-engineering/page'));
const CybersecurityAdvancedPage = React.lazy(() => import('./cybersecurity-advanced/page'));
const CloudMigrationAdvancedPage = React.lazy(() => import('./cloud-migration-advanced/page'));
const DevOpsAdvancedPage = React.lazy(() => import('./devops-advanced/page'));
const MachineLearningOpsPage = React.lazy(() => import('./machine-learning-ops/page'));
const EnterpriseIntegrationPage = React.lazy(() => import('./enterprise-integration/page'));
const PerformanceOptimizationPage = React.lazy(() => import('./performance-optimization/page'));
const DisasterRecoveryAdvancedPage = React.lazy(() => import('./disaster-recovery-advanced/page'));
const ComplianceAutomationPage = React.lazy(() => import('./compliance-automation/page'));
const CloudCostOptimizationPage = React.lazy(() => import('./cloud-cost-optimization/page'));
const SecurityAutomationPage = React.lazy(() => import('./security-automation/page'));
const DataVisualizationPage = React.lazy(() => import('./data-visualization/page'));
const WorkflowAutomationPage = React.lazy(() => import('./workflow-automation/page'));
const CloudNativeSecurityPage = React.lazy(() => import('./cloud-native-security/page'));

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(() => import('./zion-analytics-pro/page'));
const ZionChatAIPage = React.lazy(() => import('./zion-chat-ai/page'));
const ZionSecurityShieldPage = React.lazy(() => import('./zion-security-shield/page'));
const ZionCloudVaultPage = React.lazy(() => import('./zion-cloud-vault/page'));
const ZionContentStudioPage = React.lazy(() => import('./zion-content-studio/page'));
const ZionCRMIntelligencePage = React.lazy(() => import('./zion-crm-intelligence/page'));
const ZionDataSyncPage = React.lazy(() => import('./zion-data-sync/page'));
const ZionLeadMagnetPage = React.lazy(() => import('./zion-lead-magnet/page'));
const ZionProjectMasterPage = React.lazy(() => import('./zion-project-master/page'));
const ZionEmailAutomationPage = React.lazy(() => import('./zion-email-automation/page'));
const ZionSocialSchedulerPage = React.lazy(() => import('./zion-social-scheduler/page'));
const ZionWorkflowAutomationPage = React.lazy(() => import('./zion-workflow-automation/page'));
const ZionAIContentModerationPage = React.lazy(() => import('./zion-ai-content-moderation/page'));
const ZionAIPredictiveMaintenancePage = React.lazy(() => import('./zion-ai-predictive-maintenance/page'));
const ZionAIFraudDetectorPage = React.lazy(() => import('./zion-ai-fraud-detector/page'));
const ZionAISupplyChainOptimizerPage = React.lazy(() => import('./zion-ai-supply-chain-optimizer/page'));
const ZionAIDocumentAIPage = React.lazy(() => import('./zion-ai-document-ai/page'));
const ZionAICustomerServiceProPage = React.lazy(() => import('./zion-ai-customer-service-pro/page'));
const ZionAIContractAnalyzerPage = React.lazy(() => import('./zion-ai-contract-analyzer/page'));
const ZionAITranslatorProPage = React.lazy(() => import('./zion-ai-translator-pro/page'));
const ZionInvoiceGeniusPage = React.lazy(() => import('./zion-invoice-genius/page'));
const ZionInventorySmartPage = React.lazy(() => import('./zion-inventory-smart/page'));
const ZionComplianceManagerPage = React.lazy(() => import('./zion-compliance-manager/page'));
const ZionPerformanceMonitorPage = React.lazy(() => import('./zion-performance-monitor/page'));
const ZionAICodeReviewerPage = React.lazy(() => import('./zion-ai-code-reviewer/page'));
const ZionAISurveyBuilderPage = React.lazy(() => import('./zion-ai-survey-builder/page'));
const ZionAIMarketingAutomationPage = React.lazy(() => import('./zion-ai-marketing-automation/page'));
const ZionAIAccountingAssistantPage = React.lazy(() => import('./zion-ai-accounting-assistant/page'));
const ZionAISeoOptimizerPage = React.lazy(() => import('./zion-ai-seo-optimizer/page'));
const ZionAIDataCleanerPage = React.lazy(() => import('./zion-ai-data-cleaner/page'));
const ZionCustomerInsightsPage = React.lazy(() => import('./zion-customer-insights/page'));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(() => import('./5g-data-analytics/page'));
const FiveGEdgeComputingPage = React.lazy(() => import('./5g-edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./5g-implementation/page'));
const FiveGIotSolutionsPage = React.lazy(() => import('./5g-iot-solutions/page'));
const FiveGMobileApplicationsPage = React.lazy(() => import('./5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = React.lazy(() => import('./5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = React.lazy(() => import('./5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = React.lazy(() => import('./5g-smart-city-solutions/page'));
const FiveGSolutionsPage = React.lazy(() => import('./5g-solutions/page'));

// Main App Component

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiesPage />} />
                
                {/* AI Service Routes */}
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
                
                {/* IT Service Routes */}
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
                
                {/* Micro SAAS Routes */}
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
                <Route path="/zion-customer-insights" element={<ZionAICustomerInsightsPage />} />

                {/* 5G Solutions Routes */}
                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />
                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );

export default App;

