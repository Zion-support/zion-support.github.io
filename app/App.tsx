<<<<<<< HEAD
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';
<<<<<<< HEAD
=======
export default App;

<<<<<<< HEAD
>>>>>>> origin/main
// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const PricingPage = lazy(() => import('./pricing/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const BlogPage = lazy(() => import('./blog/page'));
const TeamPage = lazy(() => import('./team/page'));
const CareersPage = lazy(() => import('./careers/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));

// AI Services
<<<<<<< HEAD
const AiServicesPage = lazy(() => import('./ai-services/page'));
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./ai-fintech/page'));
const AiContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AiCybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const AiCrmPage = lazy(() => import('./ai-crm/page'));
const AiVoiceSolutionsPage = lazy(() => import('./ai-voice-solutions/page'));
const AiEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const AiHrSolutionsPage = lazy(() => import('./ai-hr-solutions/page'));
const AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const AiDocumentProcessingPage = lazy(() => import('./ai-document-processing/page'));
const AiPredictiveAnalyticsPage = lazy(() => import('./ai-predictive-analytics/page'));
const AiEdgeComputingPage = lazy(() => import('./ai-edge-computing/page'));
const AiVideoAnalysisPage = lazy(() => import('./ai-video-analysis/page'));
const AiSpeechSynthesisPage = lazy(() => import('./ai-speech-synthesis/page'));
const AiRecommendationEnginePage = lazy(() => import('./ai-recommendation-engine/page'));
const AiSentimentAnalysisPage = lazy(() => import('./ai-sentiment-analysis/page'));
const AiChatbotEnterprisePage = lazy(() => import('./ai-chatbot-enterprise/page'));
const AiContentModerationPage = lazy(() => import('./ai-content-moderation/page'));
const AiPredictiveModelingPage = lazy(() => import('./ai-predictive-modeling/page'));
const AiDocumentIntelligencePage = lazy(() => import('./ai-document-intelligence/page'));
const AiConversationAnalyticsPage = lazy(() => import('./ai-conversation-analytics/page'));
const AiSupplyChainAiPage = lazy(() => import('./ai-supply-chain-ai/page'));
const AiHealthcareDiagnosticsPage = lazy(() => import('./ai-healthcare-diagnostics/page'));
const AiFinancialForecastingPage = lazy(() => import('./ai-financial-forecasting/page'));
const AiIotAnalyticsPage = lazy(() => import('./ai-iot-analytics/page'));
const AiConversationalAiPage = lazy(() => import('./ai-conversational-ai/page'));
const AiAutomatedTestingPage = lazy(() => import('./ai-automated-testing/page'));
const AiKnowledgeManagementPage = lazy(() => import('./ai-knowledge-management/page'));
const AiCustomerChurnPage = lazy(() => import('./ai-customer-churn/page'));
const AiAutomatedReportingPage = lazy(() => import('./ai-automated-reporting/page'));
const AiVoiceAssistantPage = lazy(() => import('./ai-voice-assistant/page'));
const AiContentGenerationProPage = lazy(() => import('./ai-content-generation-pro/page'));
const AiAccountingAssistantPage = lazy(() => import('./ai-accounting-assistant/page'));
const AiCybersecurityMonitorProPage = lazy(() => import('./ai-cybersecurity-monitor-pro/page'));
=======
const AIServicesPage = lazy(() => import('./ai-services/page'));
const AIMarketingPage = lazy(() => import('./ai-marketing/page'));
const AIAutomationPage = lazy(() => import('./ai-automation/page'));
const AIHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AIFintechPage = lazy(() => import('./ai-fintech/page'));
const AIContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AIDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AICybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const AICRMPage = lazy(() => import('./ai-crm/page'));
const AIVoiceSolutionsPage = lazy(() => import('./ai-voice-solutions/page'));
const AIEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const AIHRSolutionsPage = lazy(() => import('./ai-hr-solutions/page'));
const AIWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const AIDocumentProcessingPage = lazy(() => import('./ai-document-processing/page'));
const AIPredictiveAnalyticsPage = lazy(() => import('./ai-predictive-analytics/page'));
const AIEdgeComputingPage = lazy(() => import('./ai-edge-computing/page'));
const AIVideoAnalysisPage = lazy(() => import('./ai-video-analysis/page'));
const AISpeechSynthesisPage = lazy(() => import('./ai-speech-synthesis/page'));
const AIRecommendationEnginePage = lazy(() => import('./ai-recommendation-engine/page'));
const AISentimentAnalysisPage = lazy(() => import('./ai-sentiment-analysis/page'));
const AIChatbotEnterprisePage = lazy(() => import('./ai-chatbot-enterprise/page'));
const AIContentModerationPage = lazy(() => import('./ai-content-moderation/page'));
const AIPredictiveModelingPage = lazy(() => import('./ai-predictive-modeling/page'));
const AIDocumentIntelligencePage = lazy(() => import('./ai-document-intelligence/page'));
const AIConversationAnalyticsPage = lazy(() => import('./ai-conversation-analytics/page'));
const AISupplyChainAIPage = lazy(() => import('./ai-supply-chain-ai/page'));
const AIHealthcareDiagnosticsPage = lazy(() => import('./ai-healthcare-diagnostics/page'));
const AIFinancialForecastingPage = lazy(() => import('./ai-financial-forecasting/page'));
const AIIoTAnalyticsPage = lazy(() => import('./ai-iot-analytics/page'));
const AIConversationalAIPage = lazy(() => import('./ai-conversational-ai/page'));
const AIAutomatedTestingPage = lazy(() => import('./ai-automated-testing/page'));
const AIKnowledgeManagementPage = lazy(() => import('./ai-knowledge-management/page'));
const AICustomerChurnPage = lazy(() => import('./ai-customer-churn/page'));
const AIAutomatedReportingPage = lazy(() => import('./ai-automated-reporting/page'));
const AIVoiceAssistantPage = lazy(() => import('./ai-voice-assistant/page'));
const AIContentGenerationProPage = lazy(() => import('./ai-content-generation-pro/page'));
const AIAccountingAssistantPage = lazy(() => import('./ai-accounting-assistant/page'));
const AICybersecurityMonitorProPage = lazy(() => import('./ai-cybersecurity-monitor-pro/page'));
>>>>>>> cursor/fix-errors-and-merge-to-main-7dfe

// IT Services
<<<<<<< HEAD
<<<<<<< HEAD
 import('./cloud-infrastructure/page'));

 import('./cybersecurity-solutions/page'));
 import('./web-development/page'));
 import('./mobile-development/page'));
 import('./api-development/page'));
 import('./database-management/page'));
 import('./devops-cicd/page'));
 import('./it-support/page'));
 import('./data-analytics-bi/page'));
 import('./custom-software/page'));
 import('./network-infrastructure/page'));
 import('./it-asset-management/page'));
 import('./it-security-services/page'));
 import('./it-project-management/page'));
 import('./cloud-native-development/page'));
 import('./ai-integration-services/page'));
 import('./blockchain-development/page'));
 import('./iot-development/page'));
 import('./e-commerce-development/page'));
 import('./api-development-advanced/page'));
 import('./data-engineering/page'));
 import('./cybersecurity-advanced/page'));
 import('./cloud-migration-advanced/page'));
 import('./devops-advanced/page'));
 import('./machine-learning-ops/page'));
 import('./enterprise-integration/page'));
 import('./performance-optimization/page'));
 import('./disaster-recovery-advanced/page'));
 import('./compliance-automation/page'));
 import('./cloud-cost-optimization/page'));
 import('./security-automation/page'));
 import('./data-visualization/page'));
 import('./workflow-automation/page'));
 import('./cloud-native-security/page'));
=======
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
const CybersecuritySolutionsPage = lazy(() => import('./cybersecurity-solutions/page'));
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));
<<<<<<< HEAD
const ApiDevelopmentPage = lazy(() => import('./api-development/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const DevopsCicdPage = lazy(() => import('./devops-cicd/page'));
const ItSupportPage = lazy(() => import('./it-support/page'));
const DataAnalyticsBiPage = lazy(() => import('./data-analytics-bi/page'));
const CustomSoftwarePage = lazy(() => import('./custom-software/page'));
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'));
const ItAssetManagementPage = lazy(() => import('./it-asset-management/page'));
const ItSecurityServicesPage = lazy(() => import('./it-security-services/page'));
const ItProjectManagementPage = lazy(() => import('./it-project-management/page'));
const CloudNativeDevelopmentPage = lazy(() => import('./cloud-native-development/page'));
const AiIntegrationServicesPage = lazy(() => import('./ai-integration-services/page'));
const BlockchainDevelopmentPage = lazy(() => import('./blockchain-development/page'));
const IotDevelopmentPage = lazy(() => import('./iot-development/page'));
const EcommerceDevelopmentPage = lazy(() => import('./e-commerce-development/page'));
const ApiDevelopmentAdvancedPage = lazy(() => import('./api-development-advanced/page'));
const DataEngineeringPage = lazy(() => import('./data-engineering/page'));
const CybersecurityAdvancedPage = lazy(() => import('./cybersecurity-advanced/page'));
const CloudMigrationAdvancedPage = lazy(() => import('./cloud-migration-advanced/page'));
const DevopsAdvancedPage = lazy(() => import('./devops-advanced/page'));
=======
const APIDevelopmentPage = lazy(() => import('./api-development/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const DevOpsCICDPage = lazy(() => import('./devops-cicd/page'));
const ITSupportPage = lazy(() => import('./it-support/page'));
const DataAnalyticsBIPage = lazy(() => import('./data-analytics-bi/page'));
const CustomSoftwarePage = lazy(() => import('./custom-software/page'));
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'));
const ITAssetManagementPage = lazy(() => import('./it-asset-management/page'));
const ITSecurityServicesPage = lazy(() => import('./it-security-services/page'));
const ITProjectManagementPage = lazy(() => import('./it-project-management/page'));
const CloudNativeDevelopmentPage = lazy(() => import('./cloud-native-development/page'));
const AIIntegrationServicesPage = lazy(() => import('./ai-integration-services/page'));
const BlockchainDevelopmentPage = lazy(() => import('./blockchain-development/page'));
const IoTDevelopmentPage = lazy(() => import('./iot-development/page'));
const ECommerceDevelopmentPage = lazy(() => import('./e-commerce-development/page'));
const APIDevelopmentAdvancedPage = lazy(() => import('./api-development-advanced/page'));
const DataEngineeringPage = lazy(() => import('./data-engineering/page'));
const CybersecurityAdvancedPage = lazy(() => import('./cybersecurity-advanced/page'));
const CloudMigrationAdvancedPage = lazy(() => import('./cloud-migration-advanced/page'));
const DevOpsAdvancedPage = lazy(() => import('./devops-advanced/page'));
>>>>>>> cursor/fix-errors-and-merge-to-main-7dfe
const MachineLearningOpsPage = lazy(() => import('./machine-learning-ops/page'));
const EnterpriseIntegrationPage = lazy(() => import('./enterprise-integration/page'));
const PerformanceOptimizationPage = lazy(() => import('./performance-optimization/page'));
const DisasterRecoveryAdvancedPage = lazy(() => import('./disaster-recovery-advanced/page'));
const ComplianceAutomationPage = lazy(() => import('./compliance-automation/page'));
const CloudCostOptimizationPage = lazy(() => import('./cloud-cost-optimization/page'));
const SecurityAutomationPage = lazy(() => import('./security-automation/page'));
const DataVisualizationPage = lazy(() => import('./data-visualization/page'));
const WorkflowAutomationPage = lazy(() => import('./workflow-automation/page'));
const CloudNativeSecurityPage = lazy(() => import('./cloud-native-security/page'));
>>>>>>> origin/main

// Micro SAAS Pages
const ZionAnalyticsProPage = lazy(() => import('./zion-analytics-pro/page'));
<<<<<<< HEAD
const ZionChatAiPage = lazy(() => import('./zion-chat-ai/page'));
const ZionSecurityShieldPage = lazy(() => import('./zion-security-shield/page'));
const ZionCloudVaultPage = lazy(() => import('./zion-cloud-vault/page'));
const ZionContentStudioPage = lazy(() => import('./zion-content-studio/page'));
const ZionCrmIntelligencePage = lazy(() => import('./zion-crm-intelligence/page'));
=======
const ZionChatAIPage = lazy(() => import('./zion-chat-ai/page'));
const ZionSecurityShieldPage = lazy(() => import('./zion-security-shield/page'));
const ZionCloudVaultPage = lazy(() => import('./zion-cloud-vault/page'));
const ZionContentStudioPage = lazy(() => import('./zion-content-studio/page'));
const ZionCRMIntelligencePage = lazy(() => import('./zion-crm-intelligence/page'));
>>>>>>> cursor/fix-errors-and-merge-to-main-7dfe
const ZionDataSyncPage = lazy(() => import('./zion-data-sync/page'));
const ZionLeadMagnetPage = lazy(() => import('./zion-lead-magnet/page'));
const ZionProjectMasterPage = lazy(() => import('./zion-project-master/page'));
const ZionEmailAutomationPage = lazy(() => import('./zion-email-automation/page'));
const ZionSocialSchedulerPage = lazy(() => import('./zion-social-scheduler/page'));
const ZionWorkflowAutomationPage = lazy(() => import('./zion-workflow-automation/page'));
<<<<<<< HEAD
const ZionAiContentModerationPage = lazy(() => import('./zion-ai-content-moderation/page'));
const ZionAiPredictiveMaintenancePage = lazy(() => import('./zion-ai-predictive-maintenance/page'));
const ZionAiFraudDetectorPage = lazy(() => import('./zion-ai-fraud-detector/page'));
const ZionAiSupplyChainOptimizerPage = lazy(() => import('./zion-ai-supply-chain-optimizer/page'));
const ZionAiDocumentAiPage = lazy(() => import('./zion-ai-document-ai/page'));
const ZionAiCustomerServiceProPage = lazy(() => import('./zion-ai-customer-service-pro/page'));
const ZionAiContractAnalyzerPage = lazy(() => import('./zion-ai-contract-analyzer/page'));
const ZionAiTranslatorProPage = lazy(() => import('./zion-ai-translator-pro/page'));
=======
const ZionAIContentModerationPage = lazy(() => import('./zion-ai-content-moderation/page'));
const ZionAIPredictiveMaintenancePage = lazy(() => import('./zion-ai-predictive-maintenance/page'));
const ZionAIFraudDetectorPage = lazy(() => import('./zion-ai-fraud-detector/page'));
const ZionAISupplyChainOptimizerPage = lazy(() => import('./zion-ai-supply-chain-optimizer/page'));
const ZionAIDocumentAIPage = lazy(() => import('./zion-ai-document-ai/page'));
const ZionAICustomerServiceProPage = lazy(() => import('./zion-ai-customer-service-pro/page'));
const ZionAIContractAnalyzerPage = lazy(() => import('./zion-ai-contract-analyzer/page'));
const ZionAITranslatorProPage = lazy(() => import('./zion-ai-translator-pro/page'));
>>>>>>> cursor/fix-errors-and-merge-to-main-7dfe
const ZionInvoiceGeniusPage = lazy(() => import('./zion-invoice-genius/page'));
const ZionInventorySmartPage = lazy(() => import('./zion-inventory-smart/page'));
const ZionComplianceManagerPage = lazy(() => import('./zion-compliance-manager/page'));
const ZionPerformanceMonitorPage = lazy(() => import('./zion-performance-monitor/page'));
<<<<<<< HEAD
const ZionAiCodeReviewerPage = lazy(() => import('./zion-ai-code-reviewer/page'));
const ZionAiSurveyBuilderPage = lazy(() => import('./zion-ai-survey-builder/page'));
const ZionAiMarketingAutomationPage = lazy(() => import('./zion-ai-marketing-automation/page'));
const ZionAiAccountingAssistantPage = lazy(() => import('./zion-ai-accounting-assistant/page'));
const ZionAiSeoOptimizerPage = lazy(() => import('./zion-ai-seo-optimizer/page'));
const ZionAiDataCleanerPage = lazy(() => import('./zion-ai-data-cleaner/page'));
=======
const ZionAICodeReviewerPage = lazy(() => import('./zion-ai-code-reviewer/page'));
const ZionAISurveyBuilderPage = lazy(() => import('./zion-ai-survey-builder/page'));
const ZionAIMarketingAutomationPage = lazy(() => import('./zion-ai-marketing-automation/page'));
const ZionAIAccountingAssistantPage = lazy(() => import('./zion-ai-accounting-assistant/page'));
const ZionAISEOOptimizerPage = lazy(() => import('./zion-ai-seo-optimizer/page'));
const ZionAIDataCleanerPage = lazy(() => import('./zion-ai-data-cleaner/page'));
>>>>>>> cursor/fix-errors-and-merge-to-main-7dfe
const ZionCustomerInsightsPage = lazy(() => import('./zion-customer-insights/page'));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = lazy(() => import('./5g-data-analytics/page'));
const FiveGEdgeComputingPage = lazy(() => import('./5g-edge-computing/page'));
const FiveGImplementationPage = lazy(() => import('./5g-implementation/page'));
<<<<<<< HEAD
const FiveGIotSolutionsPage = lazy(() => import('./5g-iot-solutions/page'));
=======
const FiveGIoTSolutionsPage = lazy(() => import('./5g-iot-solutions/page'));
>>>>>>> cursor/fix-errors-and-merge-to-main-7dfe
const FiveGMobileApplicationsPage = lazy(() => import('./5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = lazy(() => import('./5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = lazy(() => import('./5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = lazy(() => import('./5g-smart-city-solutions/page'));
const FiveGSolutionsPage = lazy(() => import('./5g-solutions/page'));
=======
'use client';


// Lazy load pages for better performance;
=======
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/futuristic.css';
import './styles/futuristic-enhanced.css';

// Lazy load pages for better performance
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
const HomePage = React.lazy(() => import('./page'));
const AboutPage = React.lazy(() => import('./about/page'));
const ContactPage = React.lazy(() => import('./contact/page'));
const ServicesPage = React.lazy(() => import('./services/page'));
const PricingPage = React.lazy(() => import('./pricing/page'));
const BlogPage = React.lazy(() => import('./blog/page'));
const CaseStudiesPage = React.lazy(() => import('./case-studies/page'));
const CareersPage = React.lazy(() => import('./careers/page'));
const AIServicesPage = React.lazy(() => import('./ai-services/page'));
const ItServicesPage = React.lazy(() => import('./it-services/page'));
const MicroSaasPage = React.lazy(() => import('./micro-saas/page'));
const TutorialsPage = React.lazy(() => import('./tutorials/page'));
const ConsultationPage = React.lazy(() => import('./consultation/page'));
const DemoPage = React.lazy(() => import('./demo/page'));
const SupportPage = React.lazy(() => import('./support/page'));
const PrivacyPage = React.lazy(() => import('./privacy/page'));
const TermsPage = React.lazy(() => import('./terms/page'));
const CookiesPage = React.lazy(() => import('./cookies/page'));
const SitemapPage = React.lazy(() => import('./sitemap/page'));

// 5G Solutions Pages
const Page5gDataAnalytics = React.lazy(() => import('./5g-data-analytics/page'));
const Page5gEdgeComputing = React.lazy(() => import('./5g-edge-computing/page'));
const Page5gImplementation = React.lazy(() => import('./5g-implementation/page'));
const Page5gIotSolutions = React.lazy(() => import('./5g-iot-solutions/page'));
const Page5gMobileApplications = React.lazy(() => import('./5g-mobile-applications/page'));
const Page5gNetworkInfrastructure = React.lazy(() => import('./5g-network-infrastructure/page'));
const Page5gPrivateNetworks = React.lazy(() => import('./5g-private-networks/page'));
const Page5gSmartCitySolutions = React.lazy(() => import('./5g-smart-city-solutions/page'));
const Page5gSolutions = React.lazy(() => import('./5g-solutions/page'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

// Main App Component
function App() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
            <Suspense fallback={<LoadingSpinner />}>
=======
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const ItSupportPage = lazy(() => import('./it-support/page'));
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
// Emerging Technologies
const BlockchainPage = lazy(() => import('./blockchain/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const ARVRSolutionsPage = lazy(() => import('./ar-vr-solutions/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
// Micro SaaS
const MicroSaasPage = lazy(() => import('./micro-saas/page'));
const AIContentWriterProPage = lazy(() => import('./micro-saas/ai-content-writer-pro/page'));
// Support Pages
const DocsPage = lazy(() => import('./docs/page'));
const ApiDocsPage = lazy(() => import('./api-docs/page'));
const SupportPage = lazy(() => import('./support/page'));
const StatusPage = lazy(() => import('./status/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));
// Loading component
const AppLoadingSpinner = () => <LoadingSpinner />;
function App() {
  return (
    <>
      <ErrorBoundary>
        <HelmetProvider>
          <BrowserRouter>
            <div className="App">
              <PerformanceMonitor />
              <AccessibilityEnhancer />
              <Suspense fallback={<AppLoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
<<<<<<< HEAD
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <PerformanceMonitor />
          <AccessibilityEnhancer />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
<<<<<<< HEAD
>>>>>>> origin/main
                <Route path="/" element={<HomePage />} />
=======
              <Route path="/" element={<HomePage />} />
>>>>>>> cursor/fix-errors-and-merge-to-main-7dfe
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
<<<<<<< HEAD
                
=======
    <BrowserRouter&gt;</BrowserRouter></BrowserRouter>
      <Suspense fallback={<LoadingSpinner /&gt;}></BrowserRouter>
        <Routes></Routes>
                <Route path="/" element={<HomePage /&gt;} /></Route>
                <Route path="/about" element={<AboutPage /&gt;} /></Route>
                <Route path="/contact" element={<ContactPage /&gt;} /></Route>
                <Route path="/services" element={<ServicesPage /&gt;} /></Route>
                <Route path="/pricing" element={<PricingPage /&gt;} /></Route>
                <Route path="/case-studies" element={<CaseStudiesPage /&gt;} /></Route>
                <Route path="/blog" element={<BlogPage /&gt;} /></Route>
                <Route path="/team" element={<TeamPage /&gt;} /></Route>
                <Route path="/careers" element={<CareersPage /&gt;} /></Route>
                <Route path="/privacy" element={<PrivacyPage /&gt;} /></Route>
                <Route path="/terms" element={<TermsPage /&gt;} /></Route>
                <Route path="/cookies" element={<CookiesPage /&gt;} /></Route>
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
                {/* AI Service Routes */}
                <Route path="/ai-services" element={<AIServicesPage /&gt;} /></Route>
                <Route path="/ai-marketing" element={<AIMarketingPage /&gt;} /></Route>
                <Route path="/ai-automation" element={<AIAutomationPage /&gt;} /></Route>
                <Route path="/ai-healthcare" element={<AIHealthcarePage /&gt;} /></Route>
                <Route path="/ai-fintech" element={<AIFintechPage /&gt;} /></Route>
                <Route path="/ai-content-generation" element={<AIContentGenerationPage /&gt;} /></Route>
                <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage /&gt;} /></Route>
                <Route path="/ai-cybersecurity" element={<AICybersecurityPage /&gt;} /></Route>
                <Route path="/ai-crm" element={<AICRMPage /&gt;} /></Route>
                <Route path="/ai-voice-solutions" element={<AIVoiceSolutionsPage /&gt;} /></Route>
                <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage /&gt;} /></Route>
                <Route path="/ai-hr-solutions" element={<AIHRSolutionsPage /&gt;} /></Route>
                <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage /&gt;} /></Route>
                <Route path="/ai-document-processing" element={<AIDocumentProcessingPage /&gt;} /></Route>
                <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage /&gt;} /></Route>
                <Route path="/ai-edge-computing" element={<AIEdgeComputingPage /&gt;} /></Route>
                <Route path="/ai-video-analysis" element={<AIVideoAnalysisPage /&gt;} /></Route>
                <Route path="/ai-speech-synthesis" element={<AISpeechSynthesisPage /&gt;} /></Route>
                <Route path="/ai-recommendation-engine" element={<AIRecommendationEnginePage /&gt;} /></Route>
                <Route path="/ai-sentiment-analysis" element={<AISentimentAnalysisPage /&gt;} /></Route>
                <Route path="/ai-chatbot-enterprise" element={<AIChatbotEnterprisePage /&gt;} /></Route>
                <Route path="/ai-content-moderation" element={<AIContentModerationPage /&gt;} /></Route>
                <Route path="/ai-predictive-modeling" element={<AIPredictiveModelingPage /&gt;} /></Route>
                <Route path="/ai-document-intelligence" element={<AIDocumentIntelligencePage /&gt;} /></Route>
                <Route path="/ai-conversation-analytics" element={<AIConversationAnalyticsPage /&gt;} /></Route>
                <Route path="/ai-supply-chain-ai" element={<AISupplyChainAIPage /&gt;} /></Route>
                <Route path="/ai-healthcare-diagnostics" element={<AIHealthcareDiagnosticsPage /&gt;} /></Route>
                <Route path="/ai-financial-forecasting" element={<AIFinancialForecastingPage /&gt;} /></Route>
                <Route path="/ai-iot-analytics" element={<AIIoTAnalyticsPage /&gt;} /></Route>
                <Route path="/ai-conversational-ai" element={<AIConversationalAIPage /&gt;} /></Route>
                <Route path="/ai-automated-testing" element={<AIAutomatedTestingPage /&gt;} /></Route>
                <Route path="/ai-knowledge-management" element={<AIKnowledgeManagementPage /&gt;} /></Route>
                <Route path="/ai-customer-churn" element={<AICustomerChurnPage /&gt;} /></Route>
                <Route path="/ai-automated-reporting" element={<AIAutomatedReportingPage /&gt;} /></Route>
                <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage /&gt;} /></Route>
                <Route path="/ai-content-generation-pro" element={<AIContentGenerationProPage /&gt;} /></Route>
                <Route path="/ai-accounting-assistant" element={<AIAccountingAssistantPage /&gt;} /></Route>
                <Route path="/ai-cybersecurity-monitor-pro" element={<AICybersecurityMonitorProPage /&gt;} /></Route>
                {/* IT Service Routes */}
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage /&gt;} /></Route>
                <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage /&gt;} /></Route>
                <Route path="/web-development" element={<WebDevelopmentPage /&gt;} /></Route>
                <Route path="/mobile-development" element={<MobileDevelopmentPage /&gt;} /></Route>
                <Route path="/api-development" element={<APIDevelopmentPage /&gt;} /></Route>
                <Route path="/database-management" element={<DatabaseManagementPage /&gt;} /></Route>
                <Route path="/devops-cicd" element={<DevOpsCICDPage /&gt;} /></Route>
                <Route path="/it-support" element={<ITSupportPage /&gt;} /></Route>
                <Route path="/data-analytics-bi" element={<DataAnalyticsBIPage /&gt;} /></Route>
                <Route path="/custom-software" element={<CustomSoftwarePage /&gt;} /></Route>
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage /&gt;} /></Route>
                <Route path="/it-asset-management" element={<ITAssetManagementPage /&gt;} /></Route>
                <Route path="/it-security-services" element={<ITSecurityServicesPage /&gt;} /></Route>
                <Route path="/it-project-management" element={<ITProjectManagementPage /&gt;} /></Route>
                <Route path="/cloud-native-development" element={<CloudNativeDevelopmentPage /&gt;} /></Route>
                <Route path="/ai-integration-services" element={<AIIntegrationServicesPage /&gt;} /></Route>
                <Route path="/blockchain-development" element={<BlockchainDevelopmentPage /&gt;} /></Route>
                <Route path="/iot-development" element={<IoTDevelopmentPage /&gt;} /></Route>
                <Route path="/e-commerce-development" element={<ECommerceDevelopmentPage /&gt;} /></Route>
                <Route path="/api-development-advanced" element={<APIDevelopmentAdvancedPage /&gt;} /></Route>
                <Route path="/data-engineering" element={<DataEngineeringPage /&gt;} /></Route>
                <Route path="/cybersecurity-advanced" element={<CybersecurityAdvancedPage /&gt;} /></Route>
                <Route path="/cloud-migration-advanced" element={<CloudMigrationAdvancedPage /&gt;} /></Route>
                <Route path="/devops-advanced" element={<DevOpsAdvancedPage /&gt;} /></Route>
                <Route path="/machine-learning-ops" element={<MachineLearningOpsPage /&gt;} /></Route>
                <Route path="/enterprise-integration" element={<EnterpriseIntegrationPage /&gt;} /></Route>
                <Route path="/performance-optimization" element={<PerformanceOptimizationPage /&gt;} /></Route>
                <Route path="/disaster-recovery-advanced" element={<DisasterRecoveryAdvancedPage /&gt;} /></Route>
                <Route path="/compliance-automation" element={<ComplianceAutomationPage /&gt;} /></Route>
                <Route path="/cloud-cost-optimization" element={<CloudCostOptimizationPage /&gt;} /></Route>
                <Route path="/security-automation" element={<SecurityAutomationPage /&gt;} /></Route>
                <Route path="/data-visualization" element={<DataVisualizationPage /&gt;} /></Route>
                <Route path="/workflow-automation" element={<WorkflowAutomationPage /&gt;} /></Route>
                <Route path="/cloud-native-security" element={<CloudNativeSecurityPage /&gt;} /></Route>
                {/* Micro SAAS Routes */}
                <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage /&gt;} /></Route>
                <Route path="/zion-chat-ai" element={<ZionChatAIPage /&gt;} /></Route>
                <Route path="/zion-security-shield" element={<ZionSecurityShieldPage /&gt;} /></Route>
                <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage /&gt;} /></Route>
                <Route path="/zion-content-studio" element={<ZionContentStudioPage /&gt;} /></Route>
                <Route path="/zion-crm-intelligence" element={<ZionCRMIntelligencePage /&gt;} /></Route>
                <Route path="/zion-data-sync" element={<ZionDataSyncPage /&gt;} /></Route>
                <Route path="/zion-lead-magnet" element={<ZionLeadMagnetPage /&gt;} /></Route>
                <Route path="/zion-project-master" element={<ZionProjectMasterPage /&gt;} /></Route>
                <Route path="/zion-email-automation" element={<ZionEmailAutomationPage /&gt;} /></Route>
                <Route path="/zion-social-scheduler" element={<ZionSocialSchedulerPage /&gt;} /></Route>
                <Route path="/zion-workflow-automation" element={<ZionWorkflowAutomationPage /&gt;} /></Route>
                <Route path="/zion-ai-content-moderation" element={<ZionAIContentModerationPage /&gt;} /></Route>
                <Route path="/zion-ai-predictive-maintenance" element={<ZionAIPredictiveMaintenancePage /&gt;} /></Route>
                <Route path="/zion-ai-fraud-detector" element={<ZionAIFraudDetectorPage /&gt;} /></Route>
                <Route path="/zion-ai-supply-chain-optimizer" element={<ZionAISupplyChainOptimizerPage /&gt;} /></Route>
                <Route path="/zion-ai-document-ai" element={<ZionAIDocumentAIPage /&gt;} /></Route>
                <Route path="/zion-ai-customer-service-pro" element={<ZionAICustomerServiceProPage /&gt;} /></Route>
                <Route path="/zion-ai-contract-analyzer" element={<ZionAIContractAnalyzerPage /&gt;} /></Route>
                <Route path="/zion-ai-translator-pro" element={<ZionAITranslatorProPage /&gt;} /></Route>
                <Route path="/zion-invoice-genius" element={<ZionInvoiceGeniusPage /&gt;} /></Route>
                <Route path="/zion-inventory-smart" element={<ZionInventorySmartPage /&gt;} /></Route>
                <Route path="/zion-compliance-manager" element={<ZionComplianceManagerPage /&gt;} /></Route>
                <Route path="/zion-performance-monitor" element={<ZionPerformanceMonitorPage /&gt;} /></Route>
                <Route path="/zion-ai-code-reviewer" element={<ZionAICodeReviewerPage /&gt;} /></Route>
                <Route path="/zion-ai-survey-builder" element={<ZionAISurveyBuilderPage /&gt;} /></Route>
                <Route path="/zion-ai-marketing-automation" element={<ZionAIMarketingAutomationPage /&gt;} /></Route>
                <Route path="/zion-ai-accounting-assistant" element={<ZionAIAccountingAssistantPage /&gt;} /></Route>
                <Route path="/zion-ai-seo-optimizer" element={<ZionAISEOOptimizerPage /&gt;} /></Route>
                <Route path="/zion-ai-data-cleaner" element={<ZionAIDataCleanerPage /&gt;} /></Route>
                <Route path="/zion-customer-insights" element={<ZionAICustomerInsightsPage /&gt;} /></Route>
                {/* 5G Solutions Routes */}
<<<<<<< HEAD
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
      </HelmetProvider>
    </ErrorBoundary>
=======
                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage /&gt;} /></Route>
                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage /&gt;} /></Route>
                <Route path="/5g-implementation" element={<FiveGImplementationPage /&gt;} /></Route>
                <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage /&gt;} /></Route>
                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage /&gt;} /></Route>
                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage /&gt;} /></Route>
                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage /&gt;} /></Route>
                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage /&gt;} /></Route>
                <Route path="/5g-solutions" element={<FiveGSolutionsPage /&gt;} /></Route>
=======
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/it-services" element={<ItServicesPage />} />
          <Route path="/micro-saas" element={<MicroSaasPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          
          {/* 5G Solutions Routes */}
          <Route path="/5g-data-analytics" element={<Page5gDataAnalytics />} />
          <Route path="/5g-edge-computing" element={<Page5gEdgeComputing />} />
          <Route path="/5g-implementation" element={<Page5gImplementation />} />
          <Route path="/5g-iot-solutions" element={<Page5gIotSolutions />} />
          <Route path="/5g-mobile-applications" element={<Page5gMobileApplications />} />
          <Route path="/5g-network-infrastructure" element={<Page5gNetworkInfrastructure />} />
          <Route path="/5g-private-networks" element={<Page5gPrivateNetworks />} />
          <Route path="/5g-smart-city-solutions" element={<Page5gSmartCitySolutions />} />
          <Route path="/5g-solutions" element={<Page5gSolutions />} />
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

<<<<<<< HEAD

=======
                {/* AI Services */}
                <Route path="/ai-services" element={<AiServicesPage />} />
                <Route path="/ai-marketing" element={<AiMarketingPage />} />
                <Route path="/ai-automation" element={<AiAutomationPage />} />
                <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                <Route path="/ai-fintech" element={<AiFintechPage />} />
                <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
                <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
                <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
                <Route path="/ai-data-visualization" element={<AiDataVisualizationPage />} />
                {/* IT Services */}
                <Route path="/it-services" element={<ItServicesPage />} />
                <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
                <Route path="/it-support" element={<ItSupportPage />} />
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/cybersecurity" element={<CybersecurityPage />} />
                {/* Emerging Technologies */}
                <Route path="/blockchain" element={<BlockchainPage />} />
                <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
                <Route path="/ar-vr-solutions" element={<ARVRSolutionsPage />} />
                <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
                {/* Micro SaaS */}
                <Route path="/micro-saas" element={<MicroSaasPage />} />
                <Route path="/micro-saas/ai-content-writer-pro" element={<AIContentWriterProPage />} />
                <Route path="/micro-saas/analytics-dashboard" element={<MicroSaasPage />} />
                <Route path="/micro-saas/appointment-scheduler" element={<MicroSaasPage />} />
                <Route path="/micro-saas/chat-analytics" element={<MicroSaasPage />} />
                <Route path="/micro-saas/content-generator" element={<MicroSaasPage />} />
                <Route path="/micro-saas/document-processor" element={<MicroSaasPage />} />
                <Route path="/micro-saas/email-marketing" element={<MicroSaasPage />} />
                <Route path="/micro-saas/expense-tracker" element={<MicroSaasPage />} />
                <Route path="/micro-saas/inventory-management" element={<MicroSaasPage />} />
                {/* AI Services Dropdown */}
                <Route path="/ai-content-generator" element={<AiContentGenerationPage />} />
                <Route path="/ai-chatbot-builder" element={<AiServicesPage />} />
                <Route path="/ai-analytics-dashboard" element={<AiDataAnalyticsPage />} />
                <Route path="/ai-email-assistant" element={<AiServicesPage />} />
                {/* Additional AI Services */}
                <Route path="/ai-voice-assistant" element={<AiServicesPage />} />
                <Route path="/ai-crm-assistant" element={<AiServicesPage />} />
                <Route path="/ai-social-media-manager" element={<AiServicesPage />} />
                <Route path="/ai-email-marketing-automation" element={<AiServicesPage />} />
                <Route path="/ai-project-manager" element={<AiServicesPage />} />
                <Route path="/ai-3d-generation" element={<AiServicesPage />} />
                <Route path="/ai-drug-discovery-pro" element={<AiServicesPage />} />
                <Route path="/ai-automated-reporting" element={<AiServicesPage />} />
                <Route path="/ai-password-manager" element={<AiServicesPage />} />
                <Route path="/ai-task-manager" element={<AiServicesPage />} />
                {/* IT Services Dropdown */}
                <Route path="/web-development" element={<ItServicesPage />} />
                <Route path="/mobile-development" element={<ItServicesPage />} />
                <Route path="/devops" element={<ItServicesPage />} />
                <Route path="/cloud-migration" element={<ItServicesPage />} />
                {/* Additional IT Services */}
                <Route path="/api-development" element={<ItServicesPage />} />
                <Route path="/database-management" element={<ItServicesPage />} />
                <Route path="/network-infrastructure" element={<ItServicesPage />} />
                <Route path="/system-integration" element={<ItServicesPage />} />
                <Route path="/data-analytics" element={<ItServicesPage />} />
                <Route path="/iot-solutions" element={<ItServicesPage />} />
                <Route path="/blockchain-development" element={<ItServicesPage />} />
                {/* 5G Services */}
                <Route path="/5g-network-infrastructure" element={<ItServicesPage />} />
                <Route path="/5g-iot-solutions" element={<ItServicesPage />} />
                <Route path="/5g-edge-computing" element={<ItServicesPage />} />
                <Route path="/5g-private-networks" element={<ItServicesPage />} />
                <Route path="/5g-mobile-applications" element={<ItServicesPage />} />
                <Route path="/5g-data-analytics" element={<ItServicesPage />} />
                {/* Additional Services */}
                <Route path="/business-intelligence" element={<ItServicesPage />} />
                <Route path="/5g-implementation" element={<ItServicesPage />} />
                {/* Company Pages */}
                <Route path="/team" element={<TeamPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                {/* Support Pages */}
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/api-docs" element={<ApiDocsPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/status" element={<StatusPage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
    </>
  );
};
export default App;
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
export default App;
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
