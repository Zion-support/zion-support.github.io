import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
import './app/styles/futuristic-enhanced.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import ErrorBoundary from './app/components/ErrorBoundary';
// import SEOHead from './app/components/EnhancedSEOHead';
import Breadcrumb from './app/components/Breadcrumb';
import PerformanceOptimizer from './app/components/EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import FuturisticBackground from './app/components/FuturisticBackground';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const TutorialsPage = React.lazy(() => import('./app/tutorials/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const SitemapPage = React.lazy(() => import('./app/sitemap/page'));

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'));
const AiAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const AiChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
const AiCybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));
const AiCrmPage = React.lazy(() => import('./app/ai-crm/page'));
const AiDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AiHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
const AiFinancialServicesPage = React.lazy(() => import('./app/ai-financial-services/page'));
const AiComputerVisionPage = React.lazy(() => import('./app/ai-computer-vision/page'));
const AiVoiceSolutionsPage = React.lazy(() => import('./app/ai-voice-solutions/page'));
const AiEcommerceSolutionsPage = React.lazy(() => import('./app/ai-ecommerce-solutions/page'));
const AiHrSolutionsPage = React.lazy(() => import('./app/ai-hr-solutions/page'));
const AiContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'));
const AiWorkflowAutomationPage = React.lazy(() => import('./app/ai-workflow-automation/page'));
const AiDocumentProcessingPage = React.lazy(() => import('./app/ai-document-processing/page'));
const AiPredictiveAnalyticsPage = React.lazy(() => import('./app/ai-predictive-analytics/page'));
const AiEdgeComputingPage = React.lazy(() => import('./app/ai-edge-computing/page'));
const AiVideoAnalysisPage = React.lazy(() => import('./app/ai-video-analysis/page'));
const AiSpeechSynthesisPage = React.lazy(() => import('./app/ai-speech-synthesis/page'));
const AiRecommendationEnginePage = React.lazy(() => import('./app/ai-recommendation-engine/page'));
const AiSentimentAnalysisPage = React.lazy(() => import('./app/ai-sentiment-analysis/page'));
const AiChatbotEnterprisePage = React.lazy(() => import('./app/ai-chatbot-enterprise/page'));
const AiContentModerationPage = React.lazy(() => import('./app/ai-content-moderation/page'));
const AiPredictiveModelingPage = React.lazy(() => import('./app/ai-predictive-modeling/page'));
const AiDocumentIntelligencePage = React.lazy(() => import('./app/ai-document-intelligence/page'));
const AiConversationAnalyticsPage = React.lazy(() => import('./app/ai-conversation-analytics/page'));
const AiSupplyChainAiPage = React.lazy(() => import('./app/ai-supply-chain-ai/page'));
const AiHealthcareDiagnosticsPage = React.lazy(() => import('./app/ai-healthcare-diagnostics/page'));
const AiFinancialForecastingPage = React.lazy(() => import('./app/ai-financial-forecasting/page'));
const AiIotAnalyticsPage = React.lazy(() => import('./app/ai-iot-analytics/page'));
const AiConversationalAiPage = React.lazy(() => import('./app/ai-conversational-ai/page'));
const AiAutomatedTestingPage = React.lazy(() => import('./app/ai-automated-testing/page'));
const AiKnowledgeManagementPage = React.lazy(() => import('./app/ai-knowledge-management/page'));
const AiCustomerChurnPage = React.lazy(() => import('./app/ai-customer-churn/page'));
const AiAutomatedReportingPage = React.lazy(() => import('./app/ai-automated-reporting/page'));
const AiVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'));
const AiContentGenerationProPage = React.lazy(() => import('./app/ai-content-generation-pro/page'));
const AiAccountingAssistantPage = React.lazy(() => import('./app/ai-accounting-assistant/page'));
const AiCybersecurityMonitorProPage = React.lazy(() => import('./app/ai-cybersecurity-monitor-pro/page'));

// IT Service Pages
const CloudInfrastructurePage = React.lazy(() => import('./app/cloud-infrastructure/page'));
const CybersecuritySolutionsPage = React.lazy(() => import('./app/cybersecurity-solutions/page'));
const WebDevelopmentPage = React.lazy(() => import('./app/web-development/page'));
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'));
const ApiDevelopmentPage = React.lazy(() => import('./app/api-development/page'));
const DatabaseManagementPage = React.lazy(() => import('./app/database-management/page'));
const DevopsCicdPage = React.lazy(() => import('./app/devops-cicd/page'));
const ItSupportPage = React.lazy(() => import('./app/it-support/page'));
const DataAnalyticsBiPage = React.lazy(() => import('./app/data-analytics-bi/page'));
const CustomSoftwarePage = React.lazy(() => import('./app/custom-software/page'));
const NetworkInfrastructurePage = React.lazy(() => import('./app/network-infrastructure/page'));
const ItAssetManagementPage = React.lazy(() => import('./app/it-asset-management/page'));
const ItSecurityServicesPage = React.lazy(() => import('./app/it-security-services/page'));
const ItProjectManagementPage = React.lazy(() => import('./app/it-project-management/page'));
const CloudNativeDevelopmentPage = React.lazy(() => import('./app/cloud-native-development/page'));
const AiIntegrationServicesPage = React.lazy(() => import('./app/ai-integration-services/page'));
const BlockchainDevelopmentPage = React.lazy(() => import('./app/blockchain-development/page'));
const IotDevelopmentPage = React.lazy(() => import('./app/iot-development/page'));
const ECommerceDevelopmentPage = React.lazy(() => import('./app/e-commerce-development/page'));
const ApiDevelopmentAdvancedPage = React.lazy(() => import('./app/api-development-advanced/page'));
const DataEngineeringPage = React.lazy(() => import('./app/data-engineering/page'));
const CybersecurityAdvancedPage = React.lazy(() => import('./app/cybersecurity-advanced/page'));
const CloudMigrationAdvancedPage = React.lazy(() => import('./app/cloud-migration-advanced/page'));
const DevopsAdvancedPage = React.lazy(() => import('./app/devops-advanced/page'));
const MachineLearningOpsPage = React.lazy(() => import('./app/machine-learning-ops/page'));
const EnterpriseIntegrationPage = React.lazy(() => import('./app/enterprise-integration/page'));
const PerformanceOptimizationPage = React.lazy(() => import('./app/performance-optimization/page'));
const DisasterRecoveryAdvancedPage = React.lazy(() => import('./app/disaster-recovery-advanced/page'));
const ComplianceAutomationPage = React.lazy(() => import('./app/compliance-automation/page'));
const CloudCostOptimizationPage = React.lazy(() => import('./app/cloud-cost-optimization/page'));
const SecurityAutomationPage = React.lazy(() => import('./app/security-automation/page'));
const DataVisualizationPage = React.lazy(() => import('./app/data-visualization/page'));
const WorkflowAutomationPage = React.lazy(() => import('./app/workflow-automation/page'));
const CloudNativeSecurityPage = React.lazy(() => import('./app/cloud-native-security/page'));

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(() => import('./app/zion-analytics-pro/page'));
const ZionChatAiPage = React.lazy(() => import('./app/zion-chat-ai/page'));
const ZionSecurityShieldPage = React.lazy(() => import('./app/zion-security-shield/page'));
const ZionCloudVaultPage = React.lazy(() => import('./app/zion-cloud-vault/page'));
const ZionContentStudioPage = React.lazy(() => import('./app/zion-content-studio/page'));
const ZionCrmIntelligencePage = React.lazy(() => import('./app/zion-crm-intelligence/page'));
const ZionDataSyncPage = React.lazy(() => import('./app/zion-data-sync/page'));
const ZionLeadMagnetPage = React.lazy(() => import('./app/zion-lead-magnet/page'));
const ZionProjectMasterPage = React.lazy(() => import('./app/zion-project-master/page'));
const ZionEmailAutomationPage = React.lazy(() => import('./app/zion-email-automation/page'));
const ZionSocialSchedulerPage = React.lazy(() => import('./app/zion-social-scheduler/page'));
const ZionWorkflowAutomationPage = React.lazy(() => import('./app/zion-workflow-automation/page'));
const ZionAiContentModerationPage = React.lazy(() => import('./app/zion-ai-content-moderation/page'));
const ZionAiPredictiveMaintenancePage = React.lazy(() => import('./app/zion-ai-predictive-maintenance/page'));
const ZionAiFraudDetectorPage = React.lazy(() => import('./app/zion-ai-fraud-detector/page'));
const ZionAiSupplyChainOptimizerPage = React.lazy(() => import('./app/zion-ai-supply-chain-optimizer/page'));
const ZionAiDocumentAiPage = React.lazy(() => import('./app/zion-ai-document-ai/page'));
const ZionAiCustomerServiceProPage = React.lazy(() => import('./app/zion-ai-customer-service-pro/page'));
const ZionAiContractAnalyzerPage = React.lazy(() => import('./app/zion-ai-contract-analyzer/page'));
const ZionAiTranslatorProPage = React.lazy(() => import('./app/zion-ai-translator-pro/page'));
const ZionInvoiceGeniusPage = React.lazy(() => import('./app/zion-invoice-genius/page'));
const ZionInventorySmartPage = React.lazy(() => import('./app/zion-inventory-smart/page'));
const ZionComplianceManagerPage = React.lazy(() => import('./app/zion-compliance-manager/page'));
const ZionPerformanceMonitorPage = React.lazy(() => import('./app/zion-performance-monitor/page'));
const ZionAiCodeReviewerPage = React.lazy(() => import('./app/zion-ai-code-reviewer/page'));
const ZionAiSurveyBuilderPage = React.lazy(() => import('./app/zion-ai-survey-builder/page'));
const ZionAiMarketingAutomationPage = React.lazy(() => import('./app/zion-ai-marketing-automation/page'));
const ZionAiAccountingAssistantPage = React.lazy(() => import('./app/zion-ai-accounting-assistant/page'));
const ZionAiSeoOptimizerPage = React.lazy(() => import('./app/zion-ai-seo-optimizer/page'));
const ZionAiDataCleanerPage = React.lazy(() => import('./app/zion-ai-data-cleaner/page'));
const ZionCustomerInsightsPage = React.lazy(() => import('./app/zion-customer-insights/page'));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(() => import('./app/5g-data-analytics/page'));
const FiveGEdgeComputingPage = React.lazy(() => import('./app/5g-edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
const FiveGIotSolutionsPage = React.lazy(() => import('./app/5g-iot-solutions/page'));
const FiveGMobileApplicationsPage = React.lazy(() => import('./app/5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = React.lazy(() => import('./app/5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = React.lazy(() => import('./app/5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = React.lazy(() => import('./app/5g-smart-city-solutions/page'));
const FiveGSolutionsPage = React.lazy(() => import('./app/5g-solutions/page'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
  </div>
);

// Main App Component
function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <FuturisticBackground />
            <Navigation />
            <Breadcrumb />
            <Suspense fallback={<PageLoader />}>
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
                
                {/* AI Service Routes */}
                <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                <Route path="/ai-automation" element={<AiAutomationPage />} />
                <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                <Route path="/ai-crm" element={<AiCrmPage />} />
                <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                <Route path="/ai-financial-services" element={<AiFinancialServicesPage />} />
                <Route path="/ai-computer-vision" element={<AiComputerVisionPage />} />
                <Route path="/ai-voice-solutions" element={<AiVoiceSolutionsPage />} />
                <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
                <Route path="/ai-hr-solutions" element={<AiHrSolutionsPage />} />
                <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
                <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} />
                <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
                <Route path="/ai-edge-computing" element={<AiEdgeComputingPage />} />
                <Route path="/ai-video-analysis" element={<AiVideoAnalysisPage />} />
                <Route path="/ai-speech-synthesis" element={<AiSpeechSynthesisPage />} />
                <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
                <Route path="/ai-sentiment-analysis" element={<AiSentimentAnalysisPage />} />
                <Route path="/ai-chatbot-enterprise" element={<AiChatbotEnterprisePage />} />
                <Route path="/ai-content-moderation" element={<AiContentModerationPage />} />
                <Route path="/ai-predictive-modeling" element={<AiPredictiveModelingPage />} />
                <Route path="/ai-document-intelligence" element={<AiDocumentIntelligencePage />} />
                <Route path="/ai-conversation-analytics" element={<AiConversationAnalyticsPage />} />
                <Route path="/ai-supply-chain-ai" element={<AiSupplyChainAiPage />} />
                <Route path="/ai-healthcare-diagnostics" element={<AiHealthcareDiagnosticsPage />} />
                <Route path="/ai-financial-forecasting" element={<AiFinancialForecastingPage />} />
                <Route path="/ai-iot-analytics" element={<AiIotAnalyticsPage />} />
                <Route path="/ai-conversational-ai" element={<AiConversationalAiPage />} />
                <Route path="/ai-automated-testing" element={<AiAutomatedTestingPage />} />
                <Route path="/ai-knowledge-management" element={<AiKnowledgeManagementPage />} />
                <Route path="/ai-customer-churn" element={<AiCustomerChurnPage />} />
                <Route path="/ai-automated-reporting" element={<AiAutomatedReportingPage />} />
                <Route path="/ai-voice-assistant" element={<AiVoiceAssistantPage />} />
                <Route path="/ai-content-generation-pro" element={<AiContentGenerationProPage />} />
                <Route path="/ai-accounting-assistant" element={<AiAccountingAssistantPage />} />
                <Route path="/ai-cybersecurity-monitor-pro" element={<AiCybersecurityMonitorProPage />} />
                
                {/* IT Service Routes */}
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/api-development" element={<ApiDevelopmentPage />} />
                <Route path="/database-management" element={<DatabaseManagementPage />} />
                <Route path="/devops-cicd" element={<DevopsCicdPage />} />
                <Route path="/it-support" element={<ItSupportPage />} />
                <Route path="/data-analytics-bi" element={<DataAnalyticsBiPage />} />
                <Route path="/custom-software" element={<CustomSoftwarePage />} />
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                <Route path="/it-asset-management" element={<ItAssetManagementPage />} />
                <Route path="/it-security-services" element={<ItSecurityServicesPage />} />
                <Route path="/it-project-management" element={<ItProjectManagementPage />} />
                <Route path="/cloud-native-development" element={<CloudNativeDevelopmentPage />} />
                <Route path="/ai-integration-services" element={<AiIntegrationServicesPage />} />
                <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
                <Route path="/iot-development" element={<IotDevelopmentPage />} />
                <Route path="/e-commerce-development" element={<ECommerceDevelopmentPage />} />
                <Route path="/api-development-advanced" element={<ApiDevelopmentAdvancedPage />} />
                <Route path="/data-engineering" element={<DataEngineeringPage />} />
                <Route path="/cybersecurity-advanced" element={<CybersecurityAdvancedPage />} />
                <Route path="/cloud-migration-advanced" element={<CloudMigrationAdvancedPage />} />
                <Route path="/devops-advanced" element={<DevopsAdvancedPage />} />
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
                <Route path="/zion-chat-ai" element={<ZionChatAiPage />} />
                <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
                <Route path="/zion-crm-intelligence" element={<ZionCrmIntelligencePage />} />
                <Route path="/zion-data-sync" element={<ZionDataSyncPage />} />
                <Route path="/zion-lead-magnet" element={<ZionLeadMagnetPage />} />
                <Route path="/zion-project-master" element={<ZionProjectMasterPage />} />
                <Route path="/zion-email-automation" element={<ZionEmailAutomationPage />} />
                <Route path="/zion-social-scheduler" element={<ZionSocialSchedulerPage />} />
                <Route path="/zion-workflow-automation" element={<ZionWorkflowAutomationPage />} />
                <Route path="/zion-ai-content-moderation" element={<ZionAiContentModerationPage />} />
                <Route path="/zion-ai-predictive-maintenance" element={<ZionAiPredictiveMaintenancePage />} />
                <Route path="/zion-ai-fraud-detector" element={<ZionAiFraudDetectorPage />} />
                <Route path="/zion-ai-supply-chain-optimizer" element={<ZionAiSupplyChainOptimizerPage />} />
                <Route path="/zion-ai-document-ai" element={<ZionAiDocumentAiPage />} />
                <Route path="/zion-ai-customer-service-pro" element={<ZionAiCustomerServiceProPage />} />
                <Route path="/zion-ai-contract-analyzer" element={<ZionAiContractAnalyzerPage />} />
                <Route path="/zion-ai-translator-pro" element={<ZionAiTranslatorProPage />} />
                <Route path="/zion-invoice-genius" element={<ZionInvoiceGeniusPage />} />
                <Route path="/zion-inventory-smart" element={<ZionInventorySmartPage />} />
                <Route path="/zion-compliance-manager" element={<ZionComplianceManagerPage />} />
                <Route path="/zion-performance-monitor" element={<ZionPerformanceMonitorPage />} />
                <Route path="/zion-ai-code-reviewer" element={<ZionAiCodeReviewerPage />} />
                <Route path="/zion-ai-survey-builder" element={<ZionAiSurveyBuilderPage />} />
                <Route path="/zion-ai-marketing-automation" element={<ZionAiMarketingAutomationPage />} />
                <Route path="/zion-ai-accounting-assistant" element={<ZionAiAccountingAssistantPage />} />
                <Route path="/zion-ai-seo-optimizer" element={<ZionAiSeoOptimizerPage />} />
                <Route path="/zion-ai-data-cleaner" element={<ZionAiDataCleanerPage />} />
                <Route path="/zion-customer-insights" element={<ZionCustomerInsightsPage />} />
                
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
            <Footer />
            <PerformanceOptimizer />
            <AccessibilityEnhancer />
            <EnhancedAccessibility />
            <PerformanceMonitor />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
