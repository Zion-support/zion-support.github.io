import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
<<<<<<< HEAD
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-57fa

// Main Pages
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const CareersPage = lazy(() => import('./careers/page'));
const SupportPage = lazy(() => import('./support/page'));
const MicroSAASPage = lazy(() => import('./micro-saas/page'));
<<<<<<< HEAD
const DemoPage = lazy(() => import('./demo/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));
const DocsPage = lazy(() => import('./docs/page'));
const CommunityPage = lazy(() => import('./community/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const CookiePolicyPage = lazy(() => import('./cookie-policy/page'));
const CustomDevelopmentPage = lazy(() => import('./custom-development/page'));
const CustomSoftwarePage = lazy(() => import('./custom-software/page'));
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));
const DataCenterPage = lazy(() => import('./data-center/page'));
const DataCenterServicesPage = lazy(() => import('./data-center-services/page'));
const DataCenterSolutionsPage = lazy(() => import('./data-center-solutions/page'));
const DataEngineeringPage = lazy(() => import('./data-engineering/page'));
const DataProtectionPage = lazy(() => import('./data-protection/page'));
const DataVisualizationPage = lazy(() => import('./data-visualization/page'));
const DatabasePage = lazy(() => import('./database/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const DatabaseServicesPage = lazy(() => import('./database-services/page'));
const DevopsPage = lazy(() => import('./devops/page'));
const DevopsAdvancedPage = lazy(() => import('./devops-advanced/page'));
const DevopsCicdPage = lazy(() => import('./devops-cicd/page'));
const DevopsServicesPage = lazy(() => import('./devops-services/page'));
const DevopsSolutionsPage = lazy(() => import('./devops-solutions/page'));
const DigitalTransformationPage = lazy(() => import('./digital-transformation/page'));
const DisasterRecoveryPage = lazy(() => import('./disaster-recovery/page'));
const ECommerceDevelopmentPage = lazy(() => import('./e-commerce-development/page'));
const EdgeComputingPage = lazy(() => import('./edge-computing/page'));
const EmailMarketingAutomationPage = lazy(() => import('./email-marketing-automation/page'));
const EmailMarketingPlatformPage = lazy(() => import('./email-marketing-platform/page'));
const EmailMarketingSaasPage = lazy(() => import('./email-marketing-saas/page'));
const EmailOptimizerPage = lazy(() => import('./email-optimizer/page'));
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-57fa

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
<<<<<<< HEAD
        <ErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer />
          <Suspense fallback={<LoadingSpinner />}>
=======
        <Suspense fallback={<div>Loading...</div>}>
>>>>>>> cursor/fix-errors-and-merge-to-main-57fa
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
<<<<<<< HEAD
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/micro-saas" element={<MicroSAASPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/compliance" element={<CompliancePage />} />
                <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                <Route path="/custom-development" element={<CustomDevelopmentPage />} />
                <Route path="/custom-software" element={<CustomSoftwarePage />} />
                <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                <Route path="/data-center" element={<DataCenterPage />} />
                <Route path="/data-center-services" element={<DataCenterServicesPage />} />
                <Route path="/data-center-solutions" element={<DataCenterSolutionsPage />} />
                <Route path="/data-engineering" element={<DataEngineeringPage />} />
                <Route path="/data-protection" element={<DataProtectionPage />} />
                <Route path="/data-visualization" element={<DataVisualizationPage />} />
                <Route path="/database" element={<DatabasePage />} />
                <Route path="/database-management" element={<DatabaseManagementPage />} />
                <Route path="/database-services" element={<DatabaseServicesPage />} />
                <Route path="/devops" element={<DevopsPage />} />
                <Route path="/devops-advanced" element={<DevopsAdvancedPage />} />
                <Route path="/devops-cicd" element={<DevopsCicdPage />} />
                <Route path="/devops-services" element={<DevopsServicesPage />} />
                <Route path="/devops-solutions" element={<DevopsSolutionsPage />} />
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                <Route path="/disaster-recovery" element={<DisasterRecoveryPage />} />
                <Route path="/e-commerce-development" element={<ECommerceDevelopmentPage />} />
                <Route path="/edge-computing" element={<EdgeComputingPage />} />
                <Route path="/email-marketing-automation" element={<EmailMarketingAutomationPage />} />
                <Route path="/email-marketing-platform" element={<EmailMarketingPlatformPage />} />
                <Route path="/email-marketing-saas" element={<EmailMarketingSaasPage />} />
                <Route path="/email-optimizer" element={<EmailOptimizerPage />} />
                
                {/* AI Services - Add more as needed */}
                <Route path="/ai-services" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><div className="text-white text-xl">AI Services - Coming Soon</div></div>} />
                
                {/* 404 Page */}
                <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><div className="text-white text-xl">Page Not Found</div></div>} />
              </Routes>
            </Suspense>
        </ErrorBoundary>
=======
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
                <Route path ="/ai-services" element={<AIServicesPage />} />
                <Route path ="/ai-analytics-dashboard-pro" element={<AIAnalyticsDashboardProPage />} />
                <Route path ="/ai-cybersecurity-suite-pro" element={<AICybersecuritySuiteProPage />} />
                <Route path ="/ai-content-generation-pro" element={<AIContentGenerationProPage />} />
                <Route path ="/ai-customer-support-chatbot" element={<AICustomerSupportChatbotPage />} />
                <Route path ="/ai-code-assistant-pro" element={<AICodeAssistantProPage />} />
                <Route path ="/ai-business-intelligence-pro" element={<AIBusinessIntelligenceProPage />} />
                <Route path ="/ai-automation-platform" element={<AIAutomationPlatformPage />} />
                <Route path ="/ai-data-analytics-pro" element={<AIDataAnalyticsProPage />} />
                <Route path ="/ai-marketing-automation" element={<AIMarketingAutomationPage />} />
                <Route path ="/ai-hr-recruitment-pro" element={<AIHRRecruitmentProPage />} />
                <Route path ="/ai-financial-analysis" element={<AIFinancialAnalysisPage />} />
                <Route path ="/ai-supply-chain-optimizer" element={<AISupplyChainOptimizerPage />} />
                <Route path ="/ai-voice-assistant-pro" element={<AIVoiceAssistantProPage />} />
                <Route path ="/ai-image-recognition-pro" element={<AIImageRecognitionProPage />} />
                <Route path ="/ai-predictive-maintenance" element={<AIPredictiveMaintenancePage />} />
                <Route path ="/ai-sentiment-analysis-pro" element={<AISentimentAnalysisProPage />} />
                <Route path ="/ai-recommendation-engine" element={<AIRecommendationEnginePage />} />
                <Route path ="/ai-fraud-detection-pro" element={<AIFraudDetectionProPage />} />
                <Route path ="/ai-language-translation" element={<AILanguageTranslationPage />} />
                <Route path ="/ai-chatbot-enterprise" element={<AIChatbotEnterprisePage />} />
                <Route path ="/ai-data-mining-pro" element={<AIDataMiningProPage />} />
                <Route path ="/ai-video-analysis" element={<AIVideoAnalysisPage />} />
                <Route path ="/ai-time-series-forecasting" element={<AITimeSeriesForecastingPage />} />
                <Route path ="/ai-nlp-text-analysis" element={<AINLPTextAnalysisPage />} />

                {/* IT Services Routes */}
                <Route path ="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path ="/blockchain-development" element={<BlockchainDevelopmentPage />} />
                <Route path ="/iot-solutions" element={<IoTSolutionsPage />} />
                <Route path ="/ar-vr-development" element={<ARVRDevelopmentPage />} />
                <Route path ="/devops-solutions" element={<DevOpsSolutionsPage />} />
                <Route path ="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path ="/web-development" element={<WebDevelopmentPage />} />
                <Route path ="/it-support" element={<ITSupportPage />} />
                <Route path ="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                <Route path ="/it-consulting" element={<ITConsultingPage />} />
                <Route path ="/cybersecurity-audit" element={<CybersecurityAuditPage />} />
                <Route path ="/data-center-services" element={<DataCenterServicesPage />} />
                <Route path ="/asset-management" element={<AssetManagementPage />} />

                {/* Micro SAAS Routes */}
                <Route path ="/micro-saas" element={<MicroSAASPage />} />
                <Route path ="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                <Route path ="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                <Route path ="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                <Route path ="/zion-ai-inventory-manager" element={<ZionAIInventoryManagerPage />} />
                <Route path ="/zion-hr-assistant-pro" element={<ZionHRAssistantProPage />} />
                <Route path ="/zion-ai-accounting-suite" element={<ZionAIAccountingSuitePage />} />
                <Route path ="/zion-ecommerce-optimizer" element={<ZionEcommerceOptimizerPage />} />
                <Route path ="/zion-ai-customer-insights" element={<ZionAICustomerInsightsPage />} />
                <Route path ="/zion-ai-lead-scoring" element={<ZionAILeadScoringPage />} />
                <Route path ="/zion-ai-document-processor" element={<ZionAIDocumentProcessorPage />} />
                <Route path ="/zion-ai-social-listener" element={<ZionAISocialListenerPage />} />
                <Route path ="/zion-ai-email-optimizer" element={<ZionAIEmailOptimizerPage />} />
                <Route path ="/zion-ai-meeting-assistant" element={<ZionAIMeetingAssistantPage />} />
                <Route path ="/zion-ai-expense-tracker" element={<ZionAIExpenseTrackerPage />} />
                <Route path ="/zion-ai-survey-builder" element={<ZionAISurveyBuilderPage />} />
                <Route path ="/zion-ai-chatbot-builder" element={<ZionAIChatbotBuilderPage />} />
                <Route path ="/zion-ai-workflow-automation" element={<ZionAIWorkflowAutomationPage />} />
                <Route path ="/zion-ai-seo-optimizer" element={<ZionAISEOOptimizerPage />} />
                <Route path ="/zion-ai-data-warehouse" element={<ZionAIDataWarehousePage />} />
                <Route path ="/zion-ai-mobile-app-builder" element={<ZionAIMobileAppBuilderPage />} />
                <Route path ="/zion-ai-api-manager" element={<ZionAIAPIManagerPage />} />
                <Route path ="/zion-ai-testing-automation" element={<ZionAITestingAutomationPage />} />

                {/* 5G Solutions Routes */}
                <Route path ="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                <Route path ="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                <Route path ="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path ="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                <Route path ="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                <Route path ="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                <Route path ="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                <Route path ="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                <Route path ="/5g-solutions" element={<FiveGSolutionsPage />} />
              </Routes>
        </Suspense>
>>>>>>> cursor/fix-errors-and-merge-to-main-57fa
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;