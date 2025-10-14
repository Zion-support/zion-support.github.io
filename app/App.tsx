import React,{ Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { HelmetProvider  } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';

// Main Pages
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

// AI Services
const AIServicesPage = lazy(() => import('./ai-services/page'));
const AIAnalyticsDashboardProPage = lazy(() => import('./ai-analytics-dashboard-pro/page'));
const AICybersecuritySuiteProPage = lazy(() => import('./ai-cybersecurity-suite-pro/page'));
const AIContentGenerationProPage = lazy(() => import('./ai-content-generation-pro/page'));
const AICustomerSupportChatbotPage = lazy(() => import('./ai-customer-support-chatbot/page'));
const AICodeAssistantProPage = lazy(() => import('./ai-code-assistant-pro/page'));
const AIBusinessIntelligenceProPage = lazy(() => import('./ai-business-intelligence-pro/page'));
const AIAutomationPlatformPage = lazy(() => import('./ai-automation-platform/page'));
const AIDataAnalyticsProPage = lazy(() => import('./ai-data-analytics-pro/page'));
const AIMarketingAutomationPage = lazy(() => import('./ai-marketing-automation/page'));
const AIHRRecruitmentProPage = lazy(() => import('./ai-hr-recruitment-pro/page'));
const AIFinancialAnalysisPage = lazy(() => import('./ai-financial-analysis/page'));
const AISupplyChainOptimizerPage = lazy(() => import('./ai-supply-chain-optimizer/page'));
const AIVoiceAssistantProPage = lazy(() => import('./ai-voice-assistant-pro/page'));
const AIImageRecognitionProPage = lazy(() => import('./ai-image-recognition-pro/page'));
const AIPredictiveMaintenancePage = lazy(() => import('./ai-predictive-maintenance/page'));
const AISentimentAnalysisProPage = lazy(() => import('./ai-sentiment-analysis-pro/page'));
const AIRecommendationEnginePage = lazy(() => import('./ai-recommendation-engine/page'));
const AIFraudDetectionProPage = lazy(() => import('./ai-fraud-detection-pro/page'));
const AILanguageTranslationPage = lazy(() => import('./ai-language-translation/page'));
const AIChatbotEnterprisePage = lazy(() => import('./ai-chatbot-enterprise/page'));
const AIDataMiningProPage = lazy(() => import('./ai-data-mining-pro/page'));
const AIVideoAnalysisPage = lazy(() => import('./ai-video-analysis/page'));
const AITimeSeriesForecastingPage = lazy(() => import('./ai-time-series-forecasting/page'));
const AINLPTextAnalysisPage = lazy(() => import('./ai-nlp-text-analysis/page'));

// IT Services
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

// Micro SAAS
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

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer>
            <Suspense fallback ={<LoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
                <Route path ="/" elemen t ={<HomePage />} />
                <Route path ="/about" elemen t ={<AboutPage />} />
                <Route path ="/contact" elemen t ={<ContactPage />} />
                <Route path ="/services" elemen t ={<ServicesPage />} />
                <Route path ="/pricing" elemen t ={<PricingPage />} />
                <Route path ="/case-studies" elemen t ={<CaseStudiesPage />} />
                <Route path ="/blog" elemen t ={<BlogPage />} />
                <Route path ="/team" elemen t ={<TeamPage />} />
                <Route path ="/careers" elemen t ={<CareersPage />} />
                <Route path ="/privacy" elemen t ={<PrivacyPage />} />
                <Route path ="/terms" elemen t ={<TermsPage />} />
                <Route path ="/cookies" elemen t ={<CookiesPage />} />
                <Route path ="/demo" elemen t ={<DemoPage />} />
                <Route path ="/support" elemen t ={<SupportPage />} />
                <Route path ="/consultation" elemen t ={<ConsultationPage />} />
                <Route path ="/news" elemen t ={<NewsPage />} />
                <Route path ="/press" elemen t ={<PressPage />} />
                <Route path ="/partners" elemen t ={<PartnersPage />} />
                <Route path ="/docs" elemen t ={<DocsPage />} />
                <Route path ="/api" elemen t ={<ApiPage />} />
                <Route path ="/tutorials" elemen t ={<TutorialsPage />} />
                <Route path ="/webinars" elemen t ={<WebinarsPage />} />
                <Route path ="/whitepapers" elemen t ={<WhitepapersPage />} />
                <Route path ="/accessibility" elemen t ={<AccessibilityPage />} />
                <Route path ="/security" elemen t ={<SecurityPage />} />
                <Route path ="/sitemap" elemen t ={<SitemapPage />} />

                {/* AI Services Routes */}
                <Route path ="/ai-services" elemen t ={<AIServicesPage />} />
                <Route path ="/ai-analytics-dashboard-pro" elemen t ={<AIAnalyticsDashboardProPage />} />
                <Route path ="/ai-cybersecurity-suite-pro" elemen t ={<AICybersecuritySuiteProPage />} />
                <Route path ="/ai-content-generation-pro" elemen t ={<AIContentGenerationProPage />} />
                <Route path ="/ai-customer-support-chatbot" elemen t ={<AICustomerSupportChatbotPage />} />
                <Route path ="/ai-code-assistant-pro" elemen t ={<AICodeAssistantProPage />} />
                <Route path ="/ai-business-intelligence-pro" elemen t ={<AIBusinessIntelligenceProPage />} />
                <Route path ="/ai-automation-platform" elemen t ={<AIAutomationPlatformPage />} />
                <Route path ="/ai-data-analytics-pro" elemen t ={<AIDataAnalyticsProPage />} />
                <Route path ="/ai-marketing-automation" elemen t ={<AIMarketingAutomationPage />} />
                <Route path ="/ai-hr-recruitment-pro" elemen t ={<AIHRRecruitmentProPage />} />
                <Route path ="/ai-financial-analysis" elemen t ={<AIFinancialAnalysisPage />} />
                <Route path ="/ai-supply-chain-optimizer" elemen t ={<AISupplyChainOptimizerPage />} />
                <Route path ="/ai-voice-assistant-pro" elemen t ={<AIVoiceAssistantProPage />} />
                <Route path ="/ai-image-recognition-pro" elemen t ={<AIImageRecognitionProPage />} />
                <Route path ="/ai-predictive-maintenance" elemen t ={<AIPredictiveMaintenancePage />} />
                <Route path ="/ai-sentiment-analysis-pro" elemen t ={<AISentimentAnalysisProPage />} />
                <Route path ="/ai-recommendation-engine" elemen t ={<AIRecommendationEnginePage />} />
                <Route path ="/ai-fraud-detection-pro" elemen t ={<AIFraudDetectionProPage />} />
                <Route path ="/ai-language-translation" elemen t ={<AILanguageTranslationPage />} />
                <Route path ="/ai-chatbot-enterprise" elemen t ={<AIChatbotEnterprisePage />} />
                <Route path ="/ai-data-mining-pro" elemen t ={<AIDataMiningProPage />} />
                <Route path ="/ai-video-analysis" elemen t ={<AIVideoAnalysisPage />} />
                <Route path ="/ai-time-series-forecasting" elemen t ={<AITimeSeriesForecastingPage />} />
                <Route path ="/ai-nlp-text-analysis" elemen t ={<AINLPTextAnalysisPage />} />

                {/* IT Services Routes */}
                <Route path ="/cloud-infrastructure" elemen t ={<CloudInfrastructurePage />} />
                <Route path ="/blockchain-development" elemen t ={<BlockchainDevelopmentPage />} />
                <Route path ="/iot-solutions" elemen t ={<IoTSolutionsPage />} />
                <Route path ="/ar-vr-development" elemen t ={<ARVRDevelopmentPage />} />
                <Route path ="/devops-solutions" elemen t ={<DevOpsSolutionsPage />} />
                <Route path ="/mobile-development" elemen t ={<MobileDevelopmentPage />} />
                <Route path ="/web-development" elemen t ={<WebDevelopmentPage />} />
                <Route path ="/it-support" elemen t ={<ITSupportPage />} />
                <Route path ="/network-infrastructure" elemen t ={<NetworkInfrastructurePage />} />
                <Route path ="/it-consulting" elemen t ={<ITConsultingPage />} />
                <Route path ="/cybersecurity-audit" elemen t ={<CybersecurityAuditPage />} />
                <Route path ="/data-center-services" elemen t ={<DataCenterServicesPage />} />
                <Route path ="/asset-management" elemen t ={<AssetManagementPage />} />

                {/* Micro SAAS Routes */}
                <Route path ="/micro-saas" elemen t ={<MicroSAASPage />} />
                <Route path ="/zion-analytics-pro" elemen t ={<ZionAnalyticsProPage />} />
                <Route path ="/zion-security-shield" elemen t ={<ZionSecurityShieldPage />} />
                <Route path ="/zion-cloud-vault" elemen t ={<ZionCloudVaultPage />} />
                <Route path ="/zion-ai-inventory-manager" elemen t ={<ZionAIInventoryManagerPage />} />
                <Route path ="/zion-hr-assistant-pro" elemen t ={<ZionHRAssistantProPage />} />
                <Route path ="/zion-ai-accounting-suite" elemen t ={<ZionAIAccountingSuitePage />} />
                <Route path ="/zion-ecommerce-optimizer" elemen t ={<ZionEcommerceOptimizerPage />} />
                <Route path ="/zion-ai-customer-insights" elemen t ={<ZionAICustomerInsightsPage />} />
                <Route path ="/zion-ai-lead-scoring" elemen t ={<ZionAILeadScoringPage />} />
                <Route path ="/zion-ai-document-processor" elemen t ={<ZionAIDocumentProcessorPage />} />
                <Route path ="/zion-ai-social-listener" elemen t ={<ZionAISocialListenerPage />} />
                <Route path ="/zion-ai-email-optimizer" elemen t ={<ZionAIEmailOptimizerPage />} />
                <Route path ="/zion-ai-meeting-assistant" elemen t ={<ZionAIMeetingAssistantPage />} />
                <Route path ="/zion-ai-expense-tracker" elemen t ={<ZionAIExpenseTrackerPage />} />
                <Route path ="/zion-ai-survey-builder" elemen t ={<ZionAISurveyBuilderPage />} />
                <Route path ="/zion-ai-chatbot-builder" elemen t ={<ZionAIChatbotBuilderPage />} />
                <Route path ="/zion-ai-workflow-automation" elemen t ={<ZionAIWorkflowAutomationPage />} />
                <Route path ="/zion-ai-seo-optimizer" elemen t ={<ZionAISEOOptimizerPage />} />
                <Route path ="/zion-ai-data-warehouse" elemen t ={<ZionAIDataWarehousePage />} />
                <Route path ="/zion-ai-mobile-app-builder" elemen t ={<ZionAIMobileAppBuilderPage />} />
                <Route path ="/zion-ai-api-manager" elemen t ={<ZionAIAPIManagerPage />} />
                <Route path ="/zion-ai-backup-manager" elemen t ={<ZionAIBackupManagerPage />} />
                <Route path ="/zion-ai-testing-automation" elemen t ={<ZionAITestingAutomationPage />} />

                {/* 5G Solutions Routes */}
                <Route path ="/5g-data-analytics" elemen t ={<FiveGDataAnalyticsPage />} />
                <Route path ="/5g-edge-computing" elemen t ={<FiveGEdgeComputingPage />} />
                <Route path ="/5g-implementation" elemen t ={<FiveGImplementationPage />} />
                <Route path ="/5g-iot-solutions" elemen t ={<FiveGIoTSolutionsPage />} />
                <Route path ="/5g-mobile-applications" elemen t ={<FiveGMobileApplicationsPage />} />
                <Route path ="/5g-network-infrastructure" elemen t ={<FiveGNetworkInfrastructurePage />} />
                <Route path ="/5g-private-networks" elemen t ={<FiveGPrivateNetworksPage />} />
                <Route path ="/5g-smart-city-solutions" elemen t ={<FiveGSmartCitySolutionsPage />} />
                <Route path ="/5g-solutions" elemen t ={<FiveGSolutionsPage />} />
              </Routes>
            </Suspense>
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
