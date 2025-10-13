import React, { useState, useCallback, useEffect, Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import HomePage from "./page";
import { LoadingPage } from './components/LoadingStates';
import { GlobalErrorBoundary } from './components/EnhancedErrorFeedback';
import EnhancedAccessibility from "./components/EnhancedAccessibility";
import AnalyticsProvider from "./components/AnalyticsProvider";
import PerformanceMonitor from "./components/PerformanceMonitor";
import WebVitalsTracker from "./components/WebVitalsTracker";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import CoreWebVitals from "./components/CoreWebVitals";
import FuturisticBackground from "./components/FuturisticBackground";
import EnhancedErrorBoundary from "./components/EnhancedErrorBoundary";
import Breadcrumb from "./components/Breadcrumb";
import PerformanceOptimizer from "./components/PerformanceOptimizer";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./about/page"));
const ContactPage = React.lazy(() => import("./contact/page"));
const ServicesPage = React.lazy(() => import("./services/page"));
const BlogPage = React.lazy(() => import("./blog/page"));
const AIServicesPage = React.lazy(() => import("./ai-services/page"));
const MicroSaasPage = React.lazy(() => import("./micro-saas-services/page"));
const FiveGSolutionsPage = React.lazy(() => import("./5g-solutions/page"));
const TutorialsPage = React.lazy(() => import("./tutorials/page"));
const DemoPage = React.lazy(() => import("./demo/page"));
const SupportPage = React.lazy(() => import("./support/page"));
const PrivacyPage = React.lazy(() => import("./privacy/page"));
const TermsPage = React.lazy(() => import("./terms/page"));

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import("./ai-analytics/page"));
const AiAutomationPage = React.lazy(() => import("./ai-automation/page"));
const AiBusinessIntelligencePage = React.lazy(() => import("./ai-business-intelligence/page"));
const AiContentGenerationPage = React.lazy(() => import("./ai-content-generation/page"));
const AiCustomerServicePage = React.lazy(() => import("./ai-customer-service/page"));
const AiDataAnalyticsPage = React.lazy(() => import("./ai-data-analytics/page"));
const AiEmailAutomationPage = React.lazy(() => import("./ai-email-automation/page"));
const AiFraudDetectionPage = React.lazy(() => import("./ai-fraud-detection/page"));
const AiHealthcarePage = React.lazy(() => import("./ai-healthcare/page"));
const AiMarketingPage = React.lazy(() => import("./ai-marketing/page"));
const AiPredictiveAnalyticsPage = React.lazy(() => import("./ai-predictive-analytics/page"));
const AiProjectManagementPage = React.lazy(() => import("./ai-project-management/page"));
const AiRecommendationEnginePage = React.lazy(() => import("./ai-recommendation-engine/page"));
const AiSalesAutomationPage = React.lazy(() => import("./ai-sales-automation/page"));
const AiWorkflowAutomationPage = React.lazy(() => import("./ai-workflow-automation/page"));

// IT Service Pages
const CloudInfrastructurePage = React.lazy(() => import("./cloud-infrastructure/page"));
const WebDevelopmentPage = React.lazy(() => import("./web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./database-management/page"));
const CustomSoftwarePage = React.lazy(() => import("./custom-software/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./network-infrastructure/page"));

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(() => import("./zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./zion-cloud-vault/page"));
const ZionContentStudioPage = React.lazy(() => import("./zion-content-studio/page"));

// New Innovative Micro SAAS Services
const ZionAIVideoGeneratorPage = React.lazy(() => import("./zion-ai-video-generator/page"));
const ZionAIInvoiceGeneratorPage = React.lazy(() => import("./zion-ai-invoice-generator/page"));
const ZionAICustomerInsightsPage = React.lazy(() => import("./zion-ai-customer-insights/page"));
const ZionAIEmailAnalyzerPage = React.lazy(() => import("./zion-ai-email-analyzer/page"));
const ZionSmartInventoryOptimizerPage = React.lazy(() => import("./zion-smart-inventory-optimizer/page"));
const ZionAICustomerSentimentTrackerPage = React.lazy(() => import("./zion-ai-customer-sentiment-tracker/page"));
const ZionSmartExpenseCategorizerPage = React.lazy(() => import("./zion-smart-expense-categorizer/page"));
const ZionAIVoiceAssistantProPage = React.lazy(() => import("./zion-ai-voice-assistant-pro/page"));
const ZionAICodeReviewerPage = React.lazy(() => import("./zion-ai-code-reviewer/page"));
const ZionAISocialMediaManagerPage = React.lazy(() => import("./zion-ai-social-media-manager/page"));
const ZionAIContractAnalyzerPage = React.lazy(() => import("./zion-ai-contract-analyzer/page"));
const ZionAIPerformanceOptimizerPage = React.lazy(() => import("./zion-ai-performance-optimizer/page"));
const ZionAICustomerChurnPredictorPage = React.lazy(() => import("./zion-ai-customer-churn-predictor/page"));
const ZionAISupplyChainOptimizerPage = React.lazy(() => import("./zion-ai-supply-chain-optimizer/page"));
const ZionAIFinancialForecasterPage = React.lazy(() => import("./zion-ai-financial-forecaster/page"));
const ZionAIContentModeratorPage = React.lazy(() => import("./zion-ai-content-moderator/page"));
const ZionAITranslatorProPage = React.lazy(() => import("./zion-ai-translator-pro/page"));
const ZionAIDataCleanerPage = React.lazy(() => import("./zion-ai-data-cleaner/page"));
const ZionAITaskSchedulerPage = React.lazy(() => import("./zion-ai-task-scheduler/page"));
const ZionAICustomerSupportProPage = React.lazy(() => import("./zion-ai-customer-support-pro/page"));

// Latest Innovative Micro SAAS Services
const ZionAIMeetingTranscriberPage = React.lazy(() => import("./zion-ai-meeting-transcriber/page"));
const ZionAISalesPredictorPage = React.lazy(() => import("./zion-ai-sales-predictor/page"));
const ZionSmartExpenseTrackerPage = React.lazy(() => import("./zion-smart-expense-tracker/page"));
const ZionAIDocumentAnalyzerPage = React.lazy(() => import("./zion-ai-document-analyzer/page"));
const ZionCustomerSatisfactionMonitorPage = React.lazy(() => import("./zion-customer-satisfaction-monitor/page"));
const ZionAIWorkflowAutomatorPage = React.lazy(() => import("./zion-ai-workflow-automator/page"));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(() => import("./5g-data-analytics/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./5g-edge-computing/page"));
const FiveGImplementationPage = React.lazy(() => import("./5g-implementation/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./5g-smart-city-solutions/page"));
const FiveGIotSolutionsPage = React.lazy(() => import("./5g-iot-solutions/page"));

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
                      <Router>
                        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                        <FuturisticBackground>
                          <PerformanceOptimizer>
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
                          </PerformanceOptimizer>
                        </FuturisticBackground>
                        </div>
                      </Router>
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