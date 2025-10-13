import React, { useState, useCallback, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { GlobalErrorBoundary } from './app/components/EnhancedErrorFeedback';
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

// Import pages directly instead of lazy loading for now
import AboutPage from "./app/about/page";
import ContactPage from "./app/contact/page";
import ServicesPage from "./app/services/page";
import BlogPage from "./app/blog/page";
import AIServicesPage from "./app/ai-services/page";
import MicroSaasPage from "./app/micro-saas-services/page";
import FiveGSolutionsPage from "./app/5g-solutions/page";
import TutorialsPage from "./app/tutorials/page";
import DemoPage from "./app/demo/page";
import SupportPage from "./app/support/page";
import PrivacyPage from "./app/privacy/page";
import TermsPage from "./app/terms/page";

// AI Service Pages
import AiAnalyticsPage from "./app/ai-analytics/page";
import AiAutomationPage from "./app/ai-automation/page";
import AiBusinessIntelligencePage from "./app/ai-business-intelligence/page";
import AiContentGenerationPage from "./app/ai-content-generation/page";
import AiCustomerServicePage from "./app/ai-customer-service/page";
import AiDataAnalyticsPage from "./app/ai-data-analytics/page";
import AiEmailAutomationPage from "./app/ai-email-automation/page";
import AiFraudDetectionPage from "./app/ai-fraud-detection/page";
import AiHealthcarePage from "./app/ai-healthcare/page";
import AiMarketingPage from "./app/ai-marketing/page";
import AiPredictiveAnalyticsPage from "./app/ai-predictive-analytics/page";
import AiProjectManagementPage from "./app/ai-project-management/page";
import AiRecommendationEnginePage from "./app/ai-recommendation-engine/page";
import AiSalesAutomationPage from "./app/ai-sales-automation/page";
import AiWorkflowAutomationPage from "./app/ai-workflow-automation/page";

// IT Service Pages
import CloudInfrastructurePage from "./app/cloud-infrastructure/page";
import WebDevelopmentPage from "./app/web-development/page";
import MobileDevelopmentPage from "./app/mobile-development/page";
import DatabaseManagementPage from "./app/database-management/page";
import CustomSoftwarePage from "./app/custom-software/page";
import NetworkInfrastructurePage from "./app/network-infrastructure/page";

// Micro SAAS Pages
import ZionAnalyticsProPage from "./app/zion-analytics-pro/page";
import ZionSecurityShieldPage from "./app/zion-security-shield/page";
import ZionCloudVaultPage from "./app/zion-cloud-vault/page";
import ZionContentStudioPage from "./app/zion-content-studio/page";

// New Innovative Micro SAAS Services
import ZionAIVideoGeneratorPage from "./app/zion-ai-video-generator/page";
import ZionAIInvoiceGeneratorPage from "./app/zion-ai-invoice-generator/page";
import ZionAICustomerInsightsPage from "./app/zion-ai-customer-insights/page";
import ZionAIEmailAnalyzerPage from "./app/zion-ai-email-analyzer/page";
import ZionSmartInventoryOptimizerPage from "./app/zion-smart-inventory-optimizer/page";
import ZionAICustomerSentimentTrackerPage from "./app/zion-ai-customer-sentiment-tracker/page";
import ZionSmartExpenseCategorizerPage from "./app/zion-smart-expense-categorizer/page";
import ZionAIVoiceAssistantProPage from "./app/zion-ai-voice-assistant-pro/page";
import ZionAICodeReviewerPage from "./app/zion-ai-code-reviewer/page";
import ZionAISocialMediaManagerPage from "./app/zion-ai-social-media-manager/page";
import ZionAIContractAnalyzerPage from "./app/zion-ai-contract-analyzer/page";
import ZionAIPerformanceOptimizerPage from "./app/zion-ai-performance-optimizer/page";
import ZionAICustomerChurnPredictorPage from "./app/zion-ai-customer-churn-predictor/page";
import ZionAISupplyChainOptimizerPage from "./app/zion-ai-supply-chain-optimizer/page";
import ZionAIFinancialForecasterPage from "./app/zion-ai-financial-forecaster/page";
import ZionAIContentModeratorPage from "./app/zion-ai-content-moderator/page";
import ZionAITranslatorProPage from "./app/zion-ai-translator-pro/page";
import ZionAIDataCleanerPage from "./app/zion-ai-data-cleaner/page";
import ZionAITaskSchedulerPage from "./app/zion-ai-task-scheduler/page";
import ZionAICustomerSupportProPage from "./app/zion-ai-customer-support-pro/page";

// Latest Innovative Micro SAAS Services
import ZionAIMeetingTranscriberPage from "./app/zion-ai-meeting-transcriber/page";
import ZionAISalesPredictorPage from "./app/zion-ai-sales-predictor/page";
import ZionSmartExpenseTrackerPage from "./app/zion-smart-expense-tracker/page";
import ZionAIDocumentAnalyzerPage from "./app/zion-ai-document-analyzer/page";
import ZionCustomerSatisfactionMonitorPage from "./app/zion-customer-satisfaction-monitor/page";
import ZionAIWorkflowAutomatorPage from "./app/zion-ai-workflow-automator/page";

// 5G Solutions Pages
import FiveGDataAnalyticsPage from "./app/5g-data-analytics/page";
import FiveGEdgeComputingPage from "./app/5g-edge-computing/page";
import FiveGImplementationPage from "./app/5g-implementation/page";
import FiveGMobileApplicationsPage from "./app/5g-mobile-applications/page";
import FiveGNetworkInfrastructurePage from "./app/5g-network-infrastructure/page";
import FiveGPrivateNetworksPage from "./app/5g-private-networks/page";
import FiveGSmartCitySolutionsPage from "./app/5g-smart-city-solutions/page";
import FiveGIotSolutionsPage from "./app/5g-iot-solutions/page";

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
