'use client';

import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';

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

// IT Services
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
const CybersecuritySolutionsPage = lazy(() => import('./cybersecurity-solutions/page'));
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));
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

// Zion Solutions
const ZionAnalyticsProPage = lazy(() => import('./zion-analytics-pro/page'));
const ZionChatAIPage = lazy(() => import('./zion-chat-ai/page'));
const ZionSecurityShieldPage = lazy(() => import('./zion-security-shield/page'));
const ZionCloudVaultPage = lazy(() => import('./zion-cloud-vault/page'));
const ZionContentStudioPage = lazy(() => import('./zion-content-studio/page'));
const ZionCRMIntelligencePage = lazy(() => import('./zion-crm-intelligence/page'));
const ZionDataSyncPage = lazy(() => import('./zion-data-sync/page'));
const ZionLeadMagnetPage = lazy(() => import('./zion-lead-magnet/page'));
const ZionProjectMasterPage = lazy(() => import('./zion-project-master/page'));
const ZionEmailAutomationPage = lazy(() => import('./zion-email-automation/page'));
const ZionSocialSchedulerPage = lazy(() => import('./zion-social-scheduler/page'));
const ZionWorkflowAutomationPage = lazy(() => import('./zion-workflow-automation/page'));
const ZionAIContentModerationPage = lazy(() => import('./zion-ai-content-moderation/page'));
const ZionAIPredictiveMaintenancePage = lazy(() => import('./zion-ai-predictive-maintenance/page'));
const ZionAIFraudDetectorPage = lazy(() => import('./zion-ai-fraud-detector/page'));
const ZionAISupplyChainOptimizerPage = lazy(() => import('./zion-ai-supply-chain-optimizer/page'));
const ZionAIDocumentAIPage = lazy(() => import('./zion-ai-document-ai/page'));
const ZionAICustomerServiceProPage = lazy(() => import('./zion-ai-customer-service-pro/page'));
const ZionAIContractAnalyzerPage = lazy(() => import('./zion-ai-contract-analyzer/page'));
const ZionAITranslatorProPage = lazy(() => import('./zion-ai-translator-pro/page'));
const ZionInvoiceGeniusPage = lazy(() => import('./zion-invoice-genius/page'));
const ZionInventorySmartPage = lazy(() => import('./zion-inventory-smart/page'));
const ZionComplianceManagerPage = lazy(() => import('./zion-compliance-manager/page'));
const ZionPerformanceMonitorPage = lazy(() => import('./zion-performance-monitor/page'));
const ZionAICodeReviewerPage = lazy(() => import('./zion-ai-code-reviewer/page'));
const ZionAISurveyBuilderPage = lazy(() => import('./zion-ai-survey-builder/page'));
const ZionAIMarketingAutomationPage = lazy(() => import('./zion-ai-marketing-automation/page'));
const ZionAIAccountingAssistantPage = lazy(() => import('./zion-ai-accounting-assistant/page'));
const ZionAISEOOptimizerPage = lazy(() => import('./zion-ai-seo-optimizer/page'));
const ZionAIDataCleanerPage = lazy(() => import('./zion-ai-data-cleaner/page'));
const ZionCustomerInsightsPage = lazy(() => import('./zion-customer-insights/page'));

// 5G Solutions
const FiveGDataAnalyticsPage = lazy(() => import('./5g-data-analytics/page'));
const FiveGEdgeComputingPage = lazy(() => import('./5g-edge-computing/page'));
const FiveGImplementationPage = lazy(() => import('./5g-implementation/page'));
const FiveGIoTSolutionsPage = lazy(() => import('./5g-iot-solutions/page'));
const FiveGMobileApplicationsPage = lazy(() => import('./5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = lazy(() => import('./5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = lazy(() => import('./5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = lazy(() => import('./5g-smart-city-solutions/page'));
const FiveGSolutionsPage = lazy(() => import('./5g-solutions/page'));

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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

                {/* AI Services Routes */}
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

                {/* IT Services Routes */}
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

                {/* Zion Solutions Routes */}
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

                {/* 5G Solutions Routes */}
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
            <PerformanceMonitor />
            <AccessibilityEnhancer />
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;