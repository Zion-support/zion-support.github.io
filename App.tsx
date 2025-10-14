import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import LoadingPage from "./app/components/EnhancedLoadingStates";
import AdvancedPerformanceOptimizer from "./app/components/AdvancedPerformanceOptimizer";
import EnhancedSEOOptimizer from "./app/components/EnhancedSEOOptimizer";
import EnhancedAccessibilityManager from "./app/components/EnhancedAccessibilityManager";
import GlobalErrorBoundary from "./app/components/EnhancedErrorFeedback";
import Breadcrumb from "./app/components/Breadcrumb";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import FuturisticBackground from "./app/components/FuturisticBackground";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
<<<<<<< HEAD
const CareersPage = React.lazy(() => import("./app/careers/page"));
const PartnersPage = React.lazy(() => import("./app/partners/page"));
const NewsPage = React.lazy(() => import("./app/news/page"));
const TeamPage = React.lazy(() => import("./app/team/page"));
const SolutionsPage = React.lazy(() => import("./app/solutions/page"));
const EnterprisePage = React.lazy(() => import("./app/enterprise/page"));
const CustomSoftwarePage = React.lazy(() => import("./app/custom-software/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const CybersecurityPage = React.lazy(() => import("./app/cybersecurity/page"));
const CloudServicesPage = React.lazy(() => import("./app/cloud-services/page"));
const CloudSolutionsPage = React.lazy(() => import("./app/cloud-solutions/page"));
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CloudInfrastructureManagementPage = React.lazy(() => import("./app/cloud-infrastructure-management/page"));
const CloudMigrationProPage = React.lazy(() => import("./app/cloud-migration-pro/page"));
const BusinessIntelligencePage = React.lazy(() => import("./app/business-intelligence/page"));
const AnalyticsToolsPage = React.lazy(() => import("./app/analytics-tools/page"));
const AutonomousSystemsPage = React.lazy(() => import("./app/autonomous-systems/page"));
const BlockchainPage = React.lazy(() => import("./app/blockchain/page"));
const BlockchainWeb3Page = React.lazy(() => import("./app/blockchain-web3/page"));
const QuantumComputingPage = React.lazy(() => import("./app/quantum-computing/page"));
const SupplyChainOptimizerPage = React.lazy(() => import("./app/supply-chain-optimizer/page"));
const PropertyManagementAIPage = React.lazy(() => import("./app/property-management-ai/page"));
const MedicalRecordsManagerPage = React.lazy(() => import("./app/medical-records-manager/page"));
const LegalDocumentManagerPage = React.lazy(() => import("./app/legal-document-manager/page"));
const EcommerceAnalyticsProPage = React.lazy(() => import("./app/ecommerce-analytics-pro/page"));
const OnlineLearningPlatformPage = React.lazy(() => import("./app/online-learning-platform/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const MicroSaasSolutionsPage = React.lazy(() => import("./app/micro-saas-solutions/page"));
const ItMicroSaasPage = React.lazy(() => import("./app/it-micro-saas/page"));
const ItServicesPage = React.lazy(() => import("./app/it-services/page"));
const ItSolutionsPage = React.lazy(() => import("./app/it-solutions/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const PenetrationTestingPage = React.lazy(() => import("./app/penetration-testing/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const GdprPage = React.lazy(() => import("./app/gdpr/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const IotEdgePage = React.lazy(() => import("./app/iot-edge/page"));
const IotEdgeComputingPage = React.lazy(() => import("./app/iot-edge-computing/page"));
const ApiDocsPage = React.lazy(() => import("./app/api-docs/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));
const OfflinePage = React.lazy(() => import("./app/offline/page"));

// AI Services Pages
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AIAutomationPlatformPage = React.lazy(() => import("./app/ai-automation-platform/page"));
const AIAutomationSuitePage = React.lazy(() => import("./app/ai-automation-suite/page"));
const AI3DGenerationPage = React.lazy(() => import("./app/ai-3d-generation/page"));
const AIAdManagementPage = React.lazy(() => import("./app/ad-management/page"));
const AIBotBuilderPage = React.lazy(() => import("./app/ai-chatbot-builder/page"));
const AIContentCreationPage = React.lazy(() => import("./app/ai-content-creation/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AIContentWriterPage = React.lazy(() => import("./app/ai-content-writer/page"));
const AICustomerSentimentTrackerPage = React.lazy(() => import("./app/ai-customer-sentiment-tracker/page"));
const AICustomerSupportChatbotPage = React.lazy(() => import("./app/ai-customer-support-chatbot/page"));
const AICustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsProPage = React.lazy(() => import("./app/ai-data-analytics-pro/page"));
const AIDataVisualizationPage = React.lazy(() => import("./app/ai-data-visualization/page"));
const AIDocumentProcessorPage = React.lazy(() => import("./app/ai-document-processor/page"));
const AIEcommerceSolutionsPage = React.lazy(() => import("./app/ai-ecommerce-solutions/page"));
const AIEducationPlatformPage = React.lazy(() => import("./app/ai-education-platform/page"));
const AIFinancialAnalysisPage = React.lazy(() => import("./app/ai-financial-analysis/page"));
const AIFintechPage = React.lazy(() => import("./app/ai-fintech/page"));
const AIFintechSolutionsPage = React.lazy(() => import("./app/ai-fintech-solutions/page"));
const AIFraudDetectionPage = React.lazy(() => import("./app/ai-fraud-detection/page"));
const AIHealthcarePage = React.lazy(() => import("./app/ai-healthcare/page"));
const AIHealthcareDiagnosticsPage = React.lazy(() => import("./app/ai-healthcare-diagnostics/page"));
const AIHolographicWorkspacePage = React.lazy(() => import("./app/ai-holographic-workspace/page"));
const AIHrRecruitmentProPage = React.lazy(() => import("./app/ai-hr-recruitment-pro/page"));
const AIImageRecognitionProPage = React.lazy(() => import("./app/ai-image-recognition-pro/page"));
const AIMarketingPage = React.lazy(() => import("./app/ai-marketing/page"));
const AIMobileAppBuilderPage = React.lazy(() => import("./app/ai-mobile-app-builder/page"));
const AIMobileBuilderPage = React.lazy(() => import("./app/ai-mobile-builder/page"));
const AIPoweredDevopsPage = React.lazy(() => import("./app/ai-powered-devops/page"));
const AIPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AIProjectManagementPage = React.lazy(() => import("./app/ai-project-management/page"));
const AIRecommendationEnginePage = React.lazy(() => import("./app/ai-recommendation-engine/page"));
const AISalesAutomationPage = React.lazy(() => import("./app/ai-sales-automation/page"));
const AISolutionsPage = React.lazy(() => import("./app/ai-solutions/page"));
const AITranslationServicePage = React.lazy(() => import("./app/ai-translation-service/page"));
const AIVoiceAssistantPage = React.lazy(() => import("./app/ai-voice-assistant/page"));
const AIWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// 5G Pages
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));

// Zion AI Pages
const ZionAIAccountingSuitePage = React.lazy(() => import("./app/zion-ai-accounting-suite/page"));
const ZionAIAnalyticsProPage = React.lazy(() => import("./app/zion-ai-analytics-pro/page"));
const ZionAICrmProPage = React.lazy(() => import("./app/zion-ai-crm-pro/page"));
const ZionAIEmailAnalyzerPage = React.lazy(() => import("./app/zion-ai-email-analyzer/page"));
const ZionAIInventoryManagerPage = React.lazy(() => import("./app/zion-ai-inventory-manager/page"));
const ZionAIPerformanceOptimizerPage = React.lazy(() => import("./app/zion-ai-performance-optimizer/page"));
const ZionAISocialMediaManagerPage = React.lazy(() => import("./app/zion-ai-social-media-manager/page"));
const ZionAITestingAutomationPage = React.lazy(() => import("./app/zion-ai-testing-automation/page"));
const ZionAIVoiceAssistantProPage = React.lazy(() => import("./app/zion-ai-voice-assistant-pro/page"));
const ZionHrAssistantProPage = React.lazy(() => import("./app/zion-hr-assistant-pro/page"));
const ZionSmartExpenseCategorizerPage = React.lazy(() => import("./app/zion-smart-expense-categorizer/page"));
const ZionSmartInventoryOptimizerPage = React.lazy(() => import("./app/zion-smart-inventory-optimizer/page"));
=======
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));

// Additional service pages
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const ItServicesPage = React.lazy(() => import("./app/it-services/page"));
const CloudServicesPage = React.lazy(() => import("./app/cloud-services/page"));
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const CustomDevelopmentPage = React.lazy(() => import("./app/custom-software/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1

const App = () => {
  return (
    <HelmetProvider>
<<<<<<< HEAD
      <GlobalErrorBoundary>
        <AnalyticsProvider>
          <PerformanceMonitor>
            <WebVitalsTracker>
              <Router>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                  <FuturisticBackground />
                  <Navigation />
                  <Sidebar />
                  <Breadcrumb />
                  <AccessibilityEnhancer />
                  <EnhancedAccessibility />
                  <AdvancedPerformanceEnhancer />
                  <AdvancedPerformanceOptimizer />
                  <EnhancedSEOOptimizer />
                  <EnhancedAccessibilityManager />
                  
                  <main className="relative z-10">
                    <Suspense fallback={<LoadingPage />}>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/ai-services" element={<AIServicesPage />} />
                        <Route path="/tutorials" element={<TutorialsPage />} />
                        <Route path="/demo" element={<DemoPage />} />
                        <Route path="/support" element={<SupportPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/terms" element={<TermsPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                        <Route path="/partners" element={<PartnersPage />} />
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/team" element={<TeamPage />} />
                        <Route path="/solutions" element={<SolutionsPage />} />
                        <Route path="/enterprise" element={<EnterprisePage />} />
                        <Route path="/custom-software" element={<CustomSoftwarePage />} />
                        <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                        <Route path="/database-management" element={<DatabaseManagementPage />} />
                        <Route path="/cybersecurity" element={<CybersecurityPage />} />
                        <Route path="/cloud-services" element={<CloudServicesPage />} />
                        <Route path="/cloud-solutions" element={<CloudSolutionsPage />} />
                        <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                        <Route path="/cloud-infrastructure-management" element={<CloudInfrastructureManagementPage />} />
                        <Route path="/cloud-migration-pro" element={<CloudMigrationProPage />} />
                        <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                        <Route path="/analytics-tools" element={<AnalyticsToolsPage />} />
                        <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
                        <Route path="/blockchain" element={<BlockchainPage />} />
                        <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
                        <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                        <Route path="/supply-chain-optimizer" element={<SupplyChainOptimizerPage />} />
                        <Route path="/property-management-ai" element={<PropertyManagementAIPage />} />
                        <Route path="/medical-records-manager" element={<MedicalRecordsManagerPage />} />
                        <Route path="/legal-document-manager" element={<LegalDocumentManagerPage />} />
                        <Route path="/ecommerce-analytics-pro" element={<EcommerceAnalyticsProPage />} />
                        <Route path="/online-learning-platform" element={<OnlineLearningPlatformPage />} />
                        <Route path="/micro-saas" element={<MicroSaasPage />} />
                        <Route path="/micro-saas-solutions" element={<MicroSaasSolutionsPage />} />
                        <Route path="/it-micro-saas" element={<ItMicroSaasPage />} />
                        <Route path="/it-services" element={<ItServicesPage />} />
                        <Route path="/it-solutions" element={<ItSolutionsPage />} />
                        <Route path="/web-development" element={<WebDevelopmentPage />} />
                        <Route path="/penetration-testing" element={<PenetrationTestingPage />} />
                        <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                        <Route path="/gdpr" element={<GdprPage />} />
                        <Route path="/cookies" element={<CookiesPage />} />
                        <Route path="/iot-edge" element={<IotEdgePage />} />
                        <Route path="/iot-edge-computing" element={<IotEdgeComputingPage />} />
                        <Route path="/api-docs" element={<ApiDocsPage />} />
                        <Route path="/sitemap" element={<SitemapPage />} />
                        <Route path="/offline" element={<OfflinePage />} />
                        
                        {/* AI Services Routes */}
                        <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                        <Route path="/ai-automation" element={<AIAutomationPage />} />
                        <Route path="/ai-automation-platform" element={<AIAutomationPlatformPage />} />
                        <Route path="/ai-automation-suite" element={<AIAutomationSuitePage />} />
                        <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
                        <Route path="/ad-management" element={<AIAdManagementPage />} />
                        <Route path="/ai-chatbot-builder" element={<AIBotBuilderPage />} />
                        <Route path="/ai-content-creation" element={<AIContentCreationPage />} />
                        <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                        <Route path="/ai-content-writer" element={<AIContentWriterPage />} />
                        <Route path="/ai-customer-sentiment-tracker" element={<AICustomerSentimentTrackerPage />} />
                        <Route path="/ai-customer-support-chatbot" element={<AICustomerSupportChatbotPage />} />
                        <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                        <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                        <Route path="/ai-data-analytics-pro" element={<AIDataAnalyticsProPage />} />
                        <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
                        <Route path="/ai-document-processor" element={<AIDocumentProcessorPage />} />
                        <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
                        <Route path="/ai-education-platform" element={<AIEducationPlatformPage />} />
                        <Route path="/ai-financial-analysis" element={<AIFinancialAnalysisPage />} />
                        <Route path="/ai-fintech" element={<AIFintechPage />} />
                        <Route path="/ai-fintech-solutions" element={<AIFintechSolutionsPage />} />
                        <Route path="/ai-fraud-detection" element={<AIFraudDetectionPage />} />
                        <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                        <Route path="/ai-healthcare-diagnostics" element={<AIHealthcareDiagnosticsPage />} />
                        <Route path="/ai-holographic-workspace" element={<AIHolographicWorkspacePage />} />
                        <Route path="/ai-hr-recruitment-pro" element={<AIHrRecruitmentProPage />} />
                        <Route path="/ai-image-recognition-pro" element={<AIImageRecognitionProPage />} />
                        <Route path="/ai-marketing" element={<AIMarketingPage />} />
                        <Route path="/ai-mobile-app-builder" element={<AIMobileAppBuilderPage />} />
                        <Route path="/ai-mobile-builder" element={<AIMobileBuilderPage />} />
                        <Route path="/ai-powered-devops" element={<AIPoweredDevopsPage />} />
                        <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                        <Route path="/ai-project-management" element={<AIProjectManagementPage />} />
                        <Route path="/ai-recommendation-engine" element={<AIRecommendationEnginePage />} />
                        <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
                        <Route path="/ai-solutions" element={<AISolutionsPage />} />
                        <Route path="/ai-translation-service" element={<AITranslationServicePage />} />
                        <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                        <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
                        
                        {/* 5G Routes */}
                        <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                        <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                        
                        {/* Zion AI Routes */}
                        <Route path="/zion-ai-accounting-suite" element={<ZionAIAccountingSuitePage />} />
                        <Route path="/zion-ai-analytics-pro" element={<ZionAIAnalyticsProPage />} />
                        <Route path="/zion-ai-crm-pro" element={<ZionAICrmProPage />} />
                        <Route path="/zion-ai-email-analyzer" element={<ZionAIEmailAnalyzerPage />} />
                        <Route path="/zion-ai-inventory-manager" element={<ZionAIInventoryManagerPage />} />
                        <Route path="/zion-ai-performance-optimizer" element={<ZionAIPerformanceOptimizerPage />} />
                        <Route path="/zion-ai-social-media-manager" element={<ZionAISocialMediaManagerPage />} />
                        <Route path="/zion-ai-testing-automation" element={<ZionAITestingAutomationPage />} />
                        <Route path="/zion-ai-voice-assistant-pro" element={<ZionAIVoiceAssistantProPage />} />
                        <Route path="/zion-hr-assistant-pro" element={<ZionHrAssistantProPage />} />
                        <Route path="/zion-smart-expense-categorizer" element={<ZionSmartExpenseCategorizerPage />} />
                        <Route path="/zion-smart-inventory-optimizer" element={<ZionSmartInventoryOptimizerPage />} />
                        
                        {/* 404 Route */}
                        <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                          <div className="text-center">
                            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                            <p className="text-gray-300 text-xl mb-8">Page not found</p>
                            <a href="/" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                              Go Home
                            </a>
                          </div>
                        </div>} />
                      </Routes>
                    </Suspense>
                  </main>
                  
                  <Footer />
                </div>
              </Router>
            </WebVitalsTracker>
          </PerformanceMonitor>
        </AnalyticsProvider>
      </GlobalErrorBoundary>
=======
      <Router>
        <GlobalErrorBoundary>
          <FuturisticBackground>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              <Navigation />
              <Sidebar />
              <Breadcrumb />
              
              <Suspense fallback={<LoadingPage />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/tutorials" element={<TutorialsPage />} />
                  <Route path="/demo" element={<DemoPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  <Route path="/sitemap" element={<SitemapPage />} />
                  
                  {/* Service pages */}
                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                  <Route path="/it-services" element={<ItServicesPage />} />
                  <Route path="/cloud-services" element={<CloudServicesPage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                  <Route path="/custom-software" element={<CustomDevelopmentPage />} />
                  <Route path="/web-development" element={<WebDevelopmentPage />} />
                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                  <Route path="/database-management" element={<DatabaseManagementPage />} />
                </Routes>
              </Suspense>
              
              <Footer />
              
              {/* Performance and SEO optimizations */}
              <AdvancedPerformanceOptimizer />
              <EnhancedSEOOptimizer />
              <EnhancedAccessibilityManager />
              <AnalyticsProvider />
              <PerformanceMonitor />
              <WebVitalsTracker />
            </div>
          </FuturisticBackground>
        </GlobalErrorBoundary>
      </Router>
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1
    </HelmetProvider>
  );
};

export default App;