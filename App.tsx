<<<<<<< HEAD
import React, { useState, useCallback, useEffect, Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
=======
'use client';
import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
import { HelmetProvider } from 'react-helmet-async';
import './app/globals.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import { PageLoader } from './app/components/LoadingStates';
import ErrorBoundary from './app/components/ErrorBoundary';

// Lazy load pages for better performance
<<<<<<< HEAD
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
// const MicroSAASPage = React.lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));

// AI Services Pages - only include existing ones
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AIBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerServicePage = React.lazy(() => import("./app/ai-customer-service/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AIEmailAutomationPage = React.lazy(() => import("./app/ai-email-automation/page"));
const AIFraudDetectionPage = React.lazy(() => import("./app/ai-fraud-detection/page"));
const AIHealthcarePage = React.lazy(() => import("./app/ai-healthcare/page"));
const AIMarketingPage = React.lazy(() => import("./app/ai-marketing/page"));
const AIPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AIProjectManagementPage = React.lazy(() => import("./app/ai-project-management/page"));

// 5G Solutions Pages - only include existing ones
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGSmartCitiesPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
=======
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(() => import('./app/5g-data-analytics/page'));
const FiveGEdgeComputingPage = React.lazy(() => import('./app/5g-edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
const FiveGIoTSolutionsPage = React.lazy(() => import('./app/5g-iot-solutions/page'));
const FiveGMobileApplicationsPage = React.lazy(() => import('./app/5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = React.lazy(() => import('./app/5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = React.lazy(() => import('./app/5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = React.lazy(() => import('./app/5g-smart-city-solutions/page'));
const FiveGSolutionsPage = React.lazy(() => import('./app/5g-solutions/page'));
>>>>>>> cursor/fix-errors-and-merge-to-main-c832

// Main App Component
function App() {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Performance optimization: useCallback for event handlers
  // const toggleSidebar = useCallback(() => {
  //   setSidebarOpen(prev => !prev);
  // }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <PerformanceMonitor>
            <WebVitalsTracker>
              <AccessibilityEnhancer>
                <CoreWebVitals>
                  <Router>
                    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                      <FuturisticBackground>
                        <EnhancedErrorBoundary>
                          <Navigation />
                          <Sidebar 
                            isOpen={sidebarOpen} 
                            onClose={closeSidebar}
                          />
                        <main className="relative z-10">
                          <Breadcrumb />
                          <Suspense fallback={<LoadingPage />}>
                            <Routes>
                              <Route path="/" element={<HomePage />} />
                              <Route path="/about" element={<AboutPage />} />
                              <Route path="/contact" element={<ContactPage />} />
                              <Route path="/services" element={<ServicesPage />} />
                              <Route path="/privacy" element={<PrivacyPage />} />
                              <Route path="/terms" element={<TermsPage />} />
                              <Route path="/ai-services" element={<AIServicesPage />} />
                              {/* <Route path="/micro-saas" element={<MicroSAASPage />} /> */}
                              <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                              <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                              <Route path="/tutorials" element={<TutorialsPage />} />
                              <Route path="/demo" element={<DemoPage />} />
                              <Route path="/support" element={<SupportPage />} />
                              <Route path="/blog" element={<BlogPage />} />
                              
                              {/* AI Services Routes */}
                              <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                              <Route path="/ai-automation" element={<AIAutomationPage />} />
                              <Route path="/ai-business-intelligence" element={<AIBusinessIntelligencePage />} />
                              <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                              <Route path="/ai-customer-service" element={<AICustomerServicePage />} />
                              <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                              <Route path="/ai-email-automation" element={<AIEmailAutomationPage />} />
                              <Route path="/ai-fraud-detection" element={<AIFraudDetectionPage />} />
                              <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                              <Route path="/ai-marketing" element={<AIMarketingPage />} />
                              <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                              <Route path="/ai-project-management" element={<AIProjectManagementPage />} />
                              
                              {/* 5G Solutions Routes */}
                              <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                              <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                              <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                              <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                              <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitiesPage />} />
                            </Routes>
                          </Suspense>
                        </main>
                        <Footer />
                        <PerformanceOptimizer>
                          <EnhancedAccessibility />
                        </PerformanceOptimizer>
                        </EnhancedErrorBoundary>
                      </FuturisticBackground>
                    </div>
                  </Router>
                </CoreWebVitals>
              </AccessibilityEnhancer>
            </WebVitalsTracker>
          </PerformanceMonitor>
        </AnalyticsProvider>
      </HelmetProvider>
>>>>>>> cursor/fix-errors-and-merge-to-main-48ac
    </GlobalErrorBoundary>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> cursor/fix-errors-and-merge-to-main-48ac
=======
  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            <main>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  
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
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
