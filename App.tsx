import React, { Suspense, useEffect, useState, useCallback, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/accessibility-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import PerformanceOptimizer from "./app/components/PerformanceOptimizer";

// Lazy load pages for better performance
const AboutPage = lazy(() => import("./app/about/page"));
const ContactPage = lazy(() => import("./app/contact/page"));
const ServicesPage = lazy(() => import("./app/services/page"));
const BlogPage = lazy(() => import("./app/blog/page"));
const AIServicesPage = lazy(() => import("./app/ai-services/page"));
const MicroSaasPage = lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = lazy(() => import("./app/5g-solutions/page"));
const TutorialsPage = lazy(() => import("./app/tutorials/page"));
const DemoPage = lazy(() => import("./app/demo/page"));
const SupportPage = lazy(() => import("./app/support/page"));
const PrivacyPage = lazy(() => import("./app/privacy/page"));
const TermsPage = lazy(() => import("./app/terms/page"));

// AI Service Pages
const AiAnalyticsPage = lazy(() => import("./app/ai-analytics/page"));
const AiAutomationPage = lazy(() => import("./app/ai-automation/page"));
const AiBusinessIntelligencePage = lazy(() => import("./app/ai-business-intelligence/page"));
const AiContentGenerationPage = lazy(() => import("./app/ai-content-generation/page"));
const AiCustomerServicePage = lazy(() => import("./app/ai-customer-service/page"));
const AiDataAnalyticsPage = lazy(() => import("./app/ai-data-analytics/page"));
const AiEmailAutomationPage = lazy(() => import("./app/ai-email-automation/page"));
const AiFraudDetectionPage = lazy(() => import("./app/ai-fraud-detection/page"));
const AiHealthcarePage = lazy(() => import("./app/ai-healthcare/page"));
const AiMarketingPage = lazy(() => import("./app/ai-marketing/page"));
const AiPredictiveAnalyticsPage = lazy(() => import("./app/ai-predictive-analytics/page"));
const AiProjectManagementPage = lazy(() => import("./app/ai-project-management/page"));
const AiRecommendationEnginePage = lazy(() => import("./app/ai-recommendation-engine/page"));
const AiSalesAutomationPage = lazy(() => import("./app/ai-sales-automation/page"));
const AiWorkflowAutomationPage = lazy(() => import("./app/ai-workflow-automation/page"));

// IT Service Pages
const CloudInfrastructurePage = lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecuritySolutionsPage = lazy(() => import("./app/cybersecurity-solutions/page"));
const WebDevelopmentPage = lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = lazy(() => import("./app/database-management/page"));
const CustomSoftwarePage = lazy(() => import("./app/custom-software/page"));
const NetworkInfrastructurePage = lazy(() => import("./app/network-infrastructure/page"));

// Micro SAAS Pages
const ZionAnalyticsProPage = lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = lazy(() => import("./app/zion-cloud-vault/page"));
const ZionContentStudioPage = lazy(() => import("./app/zion-content-studio/page"));

// New Innovative Micro SAAS Services
const ZionAIVideoGeneratorPage = lazy(() => import("./app/zion-ai-video-generator/page"));
const ZionAIInvoiceGeneratorPage = lazy(() => import("./app/zion-ai-invoice-generator/page"));
const ZionAICustomerInsightsPage = lazy(() => import("./app/zion-ai-customer-insights/page"));
const ZionAIEmailAnalyzerPage = lazy(() => import("./app/zion-ai-email-analyzer/page"));
const ZionSmartInventoryOptimizerPage = lazy(() => import("./app/zion-smart-inventory-optimizer/page"));
const ZionAICustomerSentimentTrackerPage = lazy(() => import("./app/zion-ai-customer-sentiment-tracker/page"));
const ZionSmartExpenseCategorizerPage = lazy(() => import("./app/zion-smart-expense-categorizer/page"));
const ZionAIVoiceAssistantProPage = lazy(() => import("./app/zion-ai-voice-assistant-pro/page"));
const ZionAICodeReviewerPage = lazy(() => import("./app/zion-ai-code-reviewer/page"));
const ZionAISocialMediaManagerPage = lazy(() => import("./app/zion-ai-social-media-manager/page"));
const ZionAIContractAnalyzerPage = lazy(() => import("./app/zion-ai-contract-analyzer/page"));
const ZionAIPerformanceOptimizerPage = lazy(() => import("./app/zion-ai-performance-optimizer/page"));
const ZionAICustomerChurnPredictorPage = lazy(() => import("./app/zion-ai-customer-churn-predictor/page"));
const ZionAISupplyChainOptimizerPage = lazy(() => import("./app/zion-ai-supply-chain-optimizer/page"));
const ZionAIFinancialForecasterPage = lazy(() => import("./app/zion-ai-financial-forecaster/page"));
const ZionAIContentModeratorPage = lazy(() => import("./app/zion-ai-content-moderator/page"));
const ZionAITranslatorProPage = lazy(() => import("./app/zion-ai-translator-pro/page"));
const ZionAIDataCleanerPage = lazy(() => import("./app/zion-ai-data-cleaner/page"));
const ZionAITaskSchedulerPage = lazy(() => import("./app/zion-ai-task-scheduler/page"));
const ZionAICustomerSupportProPage = lazy(() => import("./app/zion-ai-customer-support-pro/page"));

// Latest Innovative Micro SAAS Services
const ZionAIMeetingTranscriberPage = lazy(() => import("./app/zion-ai-meeting-transcriber/page"));
const ZionAISalesPredictorPage = lazy(() => import("./app/zion-ai-sales-predictor/page"));
const ZionSmartExpenseTrackerPage = lazy(() => import("./app/zion-smart-expense-tracker/page"));
const ZionAIDocumentAnalyzerPage = lazy(() => import("./app/zion-ai-document-analyzer/page"));
const ZionCustomerSatisfactionMonitorPage = lazy(() => import("./app/zion-customer-satisfaction-monitor/page"));
const ZionAIWorkflowAutomatorPage = lazy(() => import("./app/zion-ai-workflow-automator/page"));

// 5G Solutions Pages (already declared above)
const FiveGDataAnalyticsPage = lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = lazy(() => import("./app/5g-edge-computing/page"));
const FiveGImplementationPage = lazy(() => import("./app/5g-implementation/page"));
const FiveGMobileApplicationsPage = lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGIotSolutionsPage = lazy(() => import("./app/5g-iot-solutions/page"));
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      // Add any global initialization logic here
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  return (
    <GlobalErrorBoundary>
      <EnhancedErrorBoundary>
        <HelmetProvider>
          <AnalyticsProvider>
            <PerformanceMonitor>
              <WebVitalsTracker>
                <EnhancedAccessibility>
                  <AccessibilityEnhancer>
                    <CoreWebVitals>
                      <BrowserRouter>
                        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                        <FuturisticBackground>
                          <PerformanceOptimizer />
                          <Navigation onSidebarToggle={toggleSidebar} />
                          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                          <Breadcrumb />
                            
                            <main className="relative z-10" id="main-content" role="main">
                              <Suspense fallback={<LoadingPage />}>
                                <Routes>
                                  {/* Main Pages */}
                                  <Route path="/" element={<HomePage />} />
                                  <Route path="/about" element={<AboutPage />} />
                                  <Route path="/contact" element={<ContactPage />} />
                                  <Route path="/services" element={<ServicesPage />} />
                                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                                  <Route path="/blog" element={<BlogPage />} />
                                  <Route path="/ai-services" element={<AIServicesPage />} />
                                  <Route path="/tutorials" element={<TutorialsPage />} />
                                  <Route path="/demo" element={<DemoPage />} />
                                  <Route path="/support" element={<SupportPage />} />
                                  <Route path="/privacy" element={<PrivacyPage />} />
                                  <Route path="/terms" element={<TermsPage />} />

                                  {/* AI Services */}
                                  <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                                  <Route path="/ai-automation" element={<AiAutomationPage />} />
                                  <Route path="/ai-business-intelligence" element={<AiBusinessIntelligencePage />} />
                                  <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                                  <Route path="/ai-customer-service" element={<AiCustomerServicePage />} />
                                  <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                                  <Route path="/ai-email-automation" element={<AiEmailAutomationPage />} />
                                  <Route path="/ai-fraud-detection" element={<AiFraudDetectionPage />} />
                                  <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                                  <Route path="/ai-marketing" element={<AiMarketingPage />} />
                                  <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
                                  <Route path="/ai-project-management" element={<AiProjectManagementPage />} />
                                  <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
                                  <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
                                  <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />

                                  {/* IT Services */}
                                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                                  <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                                  <Route path="/web-development" element={<WebDevelopmentPage />} />
                                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                                  <Route path="/database-management" element={<DatabaseManagementPage />} />
                                  <Route path="/custom-software" element={<CustomSoftwarePage />} />
                                  <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />

                                  {/* Micro SAAS Services */}
                                  <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                                  <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                                  <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                                  <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />

                                  {/* New Innovative Micro SAAS Services */}
                                  <Route path="/zion-ai-video-generator" element={<ZionAIVideoGeneratorPage />} />
                                  <Route path="/zion-ai-invoice-generator" element={<ZionAIInvoiceGeneratorPage />} />
                                  <Route path="/zion-ai-customer-insights" element={<ZionAICustomerInsightsPage />} />
                                  <Route path="/zion-ai-email-analyzer" element={<ZionAIEmailAnalyzerPage />} />
                                  <Route path="/zion-smart-inventory-optimizer" element={<ZionSmartInventoryOptimizerPage />} />
                                  <Route path="/zion-ai-customer-sentiment-tracker" element={<ZionAICustomerSentimentTrackerPage />} />
                                  <Route path="/zion-smart-expense-categorizer" element={<ZionSmartExpenseCategorizerPage />} />
                                  <Route path="/zion-ai-voice-assistant-pro" element={<ZionAIVoiceAssistantProPage />} />
                                  <Route path="/zion-ai-code-reviewer" element={<ZionAICodeReviewerPage />} />
                                  <Route path="/zion-ai-social-media-manager" element={<ZionAISocialMediaManagerPage />} />
                                  <Route path="/zion-ai-contract-analyzer" element={<ZionAIContractAnalyzerPage />} />
                                  <Route path="/zion-ai-performance-optimizer" element={<ZionAIPerformanceOptimizerPage />} />
                                  <Route path="/zion-ai-customer-churn-predictor" element={<ZionAICustomerChurnPredictorPage />} />
                                  <Route path="/zion-ai-supply-chain-optimizer" element={<ZionAISupplyChainOptimizerPage />} />
                                  <Route path="/zion-ai-financial-forecaster" element={<ZionAIFinancialForecasterPage />} />
                                  <Route path="/zion-ai-content-moderator" element={<ZionAIContentModeratorPage />} />
                                  <Route path="/zion-ai-translator-pro" element={<ZionAITranslatorProPage />} />
                                  <Route path="/zion-ai-data-cleaner" element={<ZionAIDataCleanerPage />} />
                                  <Route path="/zion-ai-task-scheduler" element={<ZionAITaskSchedulerPage />} />
                                  <Route path="/zion-ai-customer-support-pro" element={<ZionAICustomerSupportProPage />} />

                                  {/* Latest Innovative Micro SAAS Services */}
                                  <Route path="/zion-ai-meeting-transcriber" element={<ZionAIMeetingTranscriberPage />} />
                                  <Route path="/zion-ai-sales-predictor" element={<ZionAISalesPredictorPage />} />
                                  <Route path="/zion-smart-expense-tracker" element={<ZionSmartExpenseTrackerPage />} />
                                  <Route path="/zion-ai-document-analyzer" element={<ZionAIDocumentAnalyzerPage />} />
                                  <Route path="/zion-customer-satisfaction-monitor" element={<ZionCustomerSatisfactionMonitorPage />} />
                                  <Route path="/zion-ai-workflow-automator" element={<ZionAIWorkflowAutomatorPage />} />

                                  {/* 5G Services */}
                                  <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                                  <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                                  <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                                  <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                                  <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                                  <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                                  <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                                  <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />

                                  {/* Catch all route */}
                                  <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
                                    <div className="text-center">
                                      <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                                      <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                                      <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Go Home
                                      </a>
                                    </div>
                                  </div>} />
                                </Routes>
                              </Suspense>
                            </main>
                            
                            <Footer />
                          </FuturisticBackground>
                        </div>
                      </BrowserRouter>
                    </CoreWebVitals>
                  </AccessibilityEnhancer>
                </EnhancedAccessibility>
              </WebVitalsTracker>
            </PerformanceMonitor>
          </AnalyticsProvider>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
  );
}

export default App;