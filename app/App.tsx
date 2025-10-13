import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';

// Lazy load pages
const HomePage = lazy(() => import('./home/page'));
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
const DemoPage = lazy(() => import('./demo/page'));
const SupportPage = lazy(() => import('./support/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));
const NewsPage = lazy(() => import('./news/page'));
const PressPage = lazy(() => import('./press/page'));
const PartnersPage = lazy(() => import('./partners/page'));
const DocsPage = lazy(() => import('./docs/page'));
const ApiPage = lazy(() => import('./api/page'));
const TutorialsPage = lazy(() => import('./tutorials/page'));
const WebinarsPage = lazy(() => import('./webinars/page'));
const WhitepapersPage = lazy(() => import('./whitepapers/page'));
const AccessibilityPage = lazy(() => import('./accessibility/page'));
const SecurityPage = lazy(() => import('./security/page'));
const SitemapPage = lazy(() => import('./sitemap/page'));

// AI Services Pages
const AiServicesPage = lazy(() => import('./ai-services/page'));
const AiAnalyticsDashboardProPage = lazy(() => import('./ai-analytics-dashboard-pro/page'));
const AiCybersecuritySuiteProPage = lazy(() => import('./ai-cybersecurity-suite-pro/page'));
const AiContentGenerationProPage = lazy(() => import('./ai-content-generation-pro/page'));
const AiCustomerSupportChatbotPage = lazy(() => import('./ai-customer-support-chatbot/page'));
const AiCodeAssistantProPage = lazy(() => import('./ai-code-assistant-pro/page'));
const AiBusinessIntelligenceProPage = lazy(() => import('./ai-business-intelligence-pro/page'));
const AiAutomationPlatformPage = lazy(() => import('./ai-automation-platform/page'));
const AiDataAnalyticsProPage = lazy(() => import('./ai-data-analytics-pro/page'));
const AiMarketingAutomationPage = lazy(() => import('./ai-marketing-automation/page'));
const AiHrRecruitmentProPage = lazy(() => import('./ai-hr-recruitment-pro/page'));
const AiFinancialAnalysisPage = lazy(() => import('./ai-financial-analysis/page'));
const AiSupplyChainOptimizerPage = lazy(() => import('./ai-supply-chain-optimizer/page'));
const AiVoiceAssistantProPage = lazy(() => import('./ai-voice-assistant-pro/page'));
const AiImageRecognitionProPage = lazy(() => import('./ai-image-recognition-pro/page'));
const AiPredictiveMaintenancePage = lazy(() => import('./ai-predictive-maintenance/page'));
const AiSentimentAnalysisProPage = lazy(() => import('./ai-sentiment-analysis-pro/page'));
const AiRecommendationEnginePage = lazy(() => import('./ai-recommendation-engine/page'));
const AiFraudDetectionProPage = lazy(() => import('./ai-fraud-detection-pro/page'));
const AiLanguageTranslationPage = lazy(() => import('./ai-language-translation/page'));
const AiChatbotEnterprisePage = lazy(() => import('./ai-chatbot-enterprise/page'));
const AiDataMiningProPage = lazy(() => import('./ai-data-mining-pro/page'));
const AiVideoAnalysisPage = lazy(() => import('./ai-video-analysis/page'));
const AiTimeSeriesForecastingPage = lazy(() => import('./ai-time-series-forecasting/page'));
const AiNlpTextAnalysisPage = lazy(() => import('./ai-nlp-text-analysis/page'));

// IT Services Pages
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
const BlockchainDevelopmentPage = lazy(() => import('./blockchain-development/page'));
const IoTSolutionsPage = lazy(() => import('./iot-solutions/page'));
const ARVRDevelopmentPage = lazy(() => import('./ar-vr-development/page'));
const DevOpsSolutionsPage = lazy(() => import('./devops-solutions/page'));
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const ITSupportPage = lazy(() => import('./it-support/page'));
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'));
const ITConsultingPage = lazy(() => import('./it-consulting/page'));
const CybersecurityAuditPage = lazy(() => import('./cybersecurity-audit/page'));
const DataCenterServicesPage = lazy(() => import('./data-center-services/page'));
const AssetManagementPage = lazy(() => import('./asset-management/page'));

// Micro SAAS Pages
const MicroSAASPage = lazy(() => import('./micro-saas/page'));
const ZionAnalyticsProPage = lazy(() => import('./zion-analytics-pro/page'));
const ZionSecurityShieldPage = lazy(() => import('./zion-security-shield/page'));
const ZionCloudVaultPage = lazy(() => import('./zion-cloud-vault/page'));
const ZionAIInventoryManagerPage = lazy(() => import('./zion-ai-inventory-manager/page'));
const ZionHRAssistantProPage = lazy(() => import('./zion-hr-assistant-pro/page'));
const ZionAIAccountingSuitePage = lazy(() => import('./zion-ai-accounting-suite/page'));
const ZionEcommerceOptimizerPage = lazy(() => import('./zion-ecommerce-optimizer/page'));
const ZionAICustomerInsightsPage = lazy(() => import('./zion-ai-customer-insights/page'));
const ZionAILeadScoringPage = lazy(() => import('./zion-ai-lead-scoring/page'));
const ZionAIDocumentProcessorPage = lazy(() => import('./zion-ai-document-processor/page'));
const ZionAISocialListenerPage = lazy(() => import('./zion-ai-social-listener/page'));
const ZionAIEmailOptimizerPage = lazy(() => import('./zion-ai-email-optimizer/page'));
const ZionAIMeetingAssistantPage = lazy(() => import('./zion-ai-meeting-assistant/page'));
const ZionAIExpenseTrackerPage = lazy(() => import('./zion-ai-expense-tracker/page'));
const ZionAISurveyBuilderPage = lazy(() => import('./zion-ai-survey-builder/page'));
const ZionAIChatbotBuilderPage = lazy(() => import('./zion-ai-chatbot-builder/page'));
const ZionAIWorkflowAutomationPage = lazy(() => import('./zion-ai-workflow-automation/page'));
const ZionAISEOOptimizerPage = lazy(() => import('./zion-ai-seo-optimizer/page'));
const ZionAIDataWarehousePage = lazy(() => import('./zion-ai-data-warehouse/page'));
const ZionAIMobileAppBuilderPage = lazy(() => import('./zion-ai-mobile-app-builder/page'));
const ZionAIAPIManagerPage = lazy(() => import('./zion-ai-api-manager/page'));
const ZionAIBackupManagerPage = lazy(() => import('./zion-ai-backup-manager/page'));
const ZionAITestingAutomationPage = lazy(() => import('./zion-ai-testing-automation/page'));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = lazy(() => import('./5g-data-analytics/page'));
const FiveGEdgeComputingPage = lazy(() => import('./5g-edge-computing/page'));
const FiveGImplementationPage = lazy(() => import('./5g-implementation/page'));
const FiveGIoTSolutionsPage = lazy(() => import('./5g-iot-solutions/page'));
const FiveGMobileApplicationsPage = lazy(() => import('./5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = lazy(() => import('./5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = lazy(() => import('./5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = lazy(() => import('./5g-smart-city-solutions/page'));
const FiveGSolutionsPage = lazy(() => import('./5g-solutions/page'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            <PerformanceMonitor />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
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
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/press" element={<PressPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/api" element={<ApiPage />} />
                <Route path="/tutorials" element={<TutorialsPage />} />
                <Route path="/webinars" element={<WebinarsPage />} />
                <Route path="/whitepapers" element={<WhitepapersPage />} />
                <Route path="/accessibility" element={<AccessibilityPage />} />
                <Route path="/security" element={<SecurityPage />} />
                <Route path="/sitemap" element={<SitemapPage />} />

                {/* AI Services Routes */}
                <Route path="/ai-services" element={<AiServicesPage />} />
                <Route path="/ai-analytics-dashboard-pro" element={<AiAnalyticsDashboardProPage />} />
                <Route path="/ai-cybersecurity-suite-pro" element={<AiCybersecuritySuiteProPage />} />
                <Route path="/ai-content-generation-pro" element={<AiContentGenerationProPage />} />
                <Route path="/ai-customer-support-chatbot" element={<AiCustomerSupportChatbotPage />} />
                <Route path="/ai-code-assistant-pro" element={<AiCodeAssistantProPage />} />
                <Route path="/ai-business-intelligence-pro" element={<AiBusinessIntelligenceProPage />} />
                <Route path="/ai-automation-platform" element={<AiAutomationPlatformPage />} />
                <Route path="/ai-data-analytics-pro" element={<AiDataAnalyticsProPage />} />
                <Route path="/ai-marketing-automation" element={<AiMarketingAutomationPage />} />
                <Route path="/ai-hr-recruitment-pro" element={<AiHrRecruitmentProPage />} />
                <Route path="/ai-financial-analysis" element={<AiFinancialAnalysisPage />} />
                <Route path="/ai-supply-chain-optimizer" element={<AiSupplyChainOptimizerPage />} />
                <Route path="/ai-voice-assistant-pro" element={<AiVoiceAssistantProPage />} />
                <Route path="/ai-image-recognition-pro" element={<AiImageRecognitionProPage />} />
                <Route path="/ai-predictive-maintenance" element={<AiPredictiveMaintenancePage />} />
                <Route path="/ai-sentiment-analysis-pro" element={<AiSentimentAnalysisProPage />} />
                <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
                <Route path="/ai-fraud-detection-pro" element={<AiFraudDetectionProPage />} />
                <Route path="/ai-language-translation" element={<AiLanguageTranslationPage />} />
                <Route path="/ai-chatbot-enterprise" element={<AiChatbotEnterprisePage />} />
                <Route path="/ai-data-mining-pro" element={<AiDataMiningProPage />} />
                <Route path="/ai-video-analysis" element={<AiVideoAnalysisPage />} />
                <Route path="/ai-time-series-forecasting" element={<AiTimeSeriesForecastingPage />} />
                <Route path="/ai-nlp-text-analysis" element={<AiNlpTextAnalysisPage />} />

                {/* IT Services Routes */}
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
                <Route path="/iot-solutions" element={<IoTSolutionsPage />} />
                <Route path="/ar-vr-development" element={<ARVRDevelopmentPage />} />
                <Route path="/devops-solutions" element={<DevOpsSolutionsPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                <Route path="/it-support" element={<ITSupportPage />} />
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                <Route path="/it-consulting" element={<ITConsultingPage />} />
                <Route path="/cybersecurity-audit" element={<CybersecurityAuditPage />} />
                <Route path="/data-center-services" element={<DataCenterServicesPage />} />
                <Route path="/asset-management" element={<AssetManagementPage />} />

                {/* Micro SAAS Routes */}
                <Route path="/micro-saas" element={<MicroSAASPage />} />
                <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                <Route path="/zion-ai-inventory-manager" element={<ZionAIInventoryManagerPage />} />
                <Route path="/zion-hr-assistant-pro" element={<ZionHRAssistantProPage />} />
                <Route path="/zion-ai-accounting-suite" element={<ZionAIAccountingSuitePage />} />
                <Route path="/zion-ecommerce-optimizer" element={<ZionEcommerceOptimizerPage />} />
                <Route path="/zion-ai-customer-insights" element={<ZionAICustomerInsightsPage />} />
                <Route path="/zion-ai-lead-scoring" element={<ZionAILeadScoringPage />} />
                <Route path="/zion-ai-document-processor" element={<ZionAIDocumentProcessorPage />} />
                <Route path="/zion-ai-social-listener" element={<ZionAISocialListenerPage />} />
                <Route path="/zion-ai-email-optimizer" element={<ZionAIEmailOptimizerPage />} />
                <Route path="/zion-ai-meeting-assistant" element={<ZionAIMeetingAssistantPage />} />
                <Route path="/zion-ai-expense-tracker" element={<ZionAIExpenseTrackerPage />} />
                <Route path="/zion-ai-survey-builder" element={<ZionAISurveyBuilderPage />} />
                <Route path="/zion-ai-chatbot-builder" element={<ZionAIChatbotBuilderPage />} />
                <Route path="/zion-ai-workflow-automation" element={<ZionAIWorkflowAutomationPage />} />
                <Route path="/zion-ai-seo-optimizer" element={<ZionAISEOOptimizerPage />} />
                <Route path="/zion-ai-data-warehouse" element={<ZionAIDataWarehousePage />} />
                <Route path="/zion-ai-mobile-app-builder" element={<ZionAIMobileAppBuilderPage />} />
                <Route path="/zion-ai-api-manager" element={<ZionAIAPIManagerPage />} />
                <Route path="/zion-ai-backup-manager" element={<ZionAIBackupManagerPage />} />
                <Route path="/zion-ai-testing-automation" element={<ZionAITestingAutomationPage />} />

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
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
