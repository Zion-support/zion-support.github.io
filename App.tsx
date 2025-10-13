import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
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
import LoadingPageEnhanced from "./app/components/EnhancedLoading";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/it-services/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));

// AI Services Pages - only include existing ones
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AIDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));
const AIMarketingAutomationPage = React.lazy(() => import("./app/ai-marketing-automation/page"));
const AIPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AIVoiceAssistantPage = React.lazy(() => import("./app/ai-voice-assistant/page"));
const AIWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// Additional AI Services Pages
const AIChatbotBuilderPage = React.lazy(() => import("./app/ai-chatbot-builder/page"));
const AICodeAssistantPage = React.lazy(() => import("./app/ai-code-assistant/page"));
const AIDesignStudioPage = React.lazy(() => import("./app/ai-design-studio/page"));
const AIBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AIAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AIComputerVisionPage = React.lazy(() => import("./app/ai-computer-vision/page"));
const AIConversationalAIPage = React.lazy(() => import("./app/ai-conversational-ai/page"));
const AICRMPage = React.lazy(() => import("./app/ai-crm/page"));
const AICustomerInsightsPage = React.lazy(() => import("./app/ai-customer-insights/page"));
const AIDataVisualizationPage = React.lazy(() => import("./app/ai-data-visualization/page"));

// IT Services Pages
const CloudMigrationPage = React.lazy(() => import("./app/it-services/cloud-migration/page"));
const DevOpsServicesPage = React.lazy(() => import("./app/devops/page"));
const ITConsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const NetworkSecurityPage = React.lazy(() => import("./app/network-security/page"));
const SoftwareDevelopmentPage = React.lazy(() => import("./app/custom-software/page"));
const SystemIntegrationPage = React.lazy(() => import("./app/system-integration/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));

// 5G Services Pages
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));

// Micro SAAS Services Pages
const MicroSaaSServicesPage = React.lazy(() => import("./app/micro-saas-services/page"));

// Additional AI Services Pages (continued)
const AIDevOpsAutomationPage = React.lazy(() => import("./app/ai-devops-automation/page"));
const AIDocumentIntelligencePage = React.lazy(() => import("./app/ai-document-intelligence/page"));

function App() {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      // Add any global initialization logic here
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <PerformanceMonitor>
            <WebVitalsTracker>
              <AccessibilityEnhancer>
                <CoreWebVitals>
                  <Router>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                      <FuturisticBackground />
                      <Navigation />
                      <Sidebar />
                      <Breadcrumb />
                      
                      <main className="relative z-10">
                        <Suspense fallback={<LoadingPageEnhanced />}>
                          <Routes>
                            {/* Main Pages */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/privacy" element={<PrivacyPage />} />

                            {/* AI Services Routes */}
                            <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                            <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                            <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                            <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                            <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                            <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                            <Route path="/ai-marketing-automation" element={<AIMarketingAutomationPage />} />
                            <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                            <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                            <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />

                            {/* Additional AI Services Routes */}
                            <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                            <Route path="/ai-code-assistant" element={<AICodeAssistantPage />} />
                            <Route path="/ai-design-studio" element={<AIDesignStudioPage />} />
                            <Route path="/ai-business-intelligence" element={<AIBusinessIntelligencePage />} />
                            <Route path="/ai-automation" element={<AIAutomationPage />} />
                            <Route path="/ai-computer-vision" element={<AIComputerVisionPage />} />
                            <Route path="/ai-conversational-ai" element={<AIConversationalAIPage />} />
                            <Route path="/ai-crm" element={<AICRMPage />} />
                            <Route path="/ai-customer-insights" element={<AICustomerInsightsPage />} />
                            <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
                            <Route path="/ai-devops-automation" element={<AIDevOpsAutomationPage />} />
                            <Route path="/ai-document-intelligence" element={<AIDocumentIntelligencePage />} />

                            {/* IT Services Routes */}
                            <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                            <Route path="/devops" element={<DevOpsServicesPage />} />
                            <Route path="/it-consulting" element={<ITConsultingPage />} />
                            <Route path="/network-security" element={<NetworkSecurityPage />} />
                            <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
                            <Route path="/system-integration" element={<SystemIntegrationPage />} />
                            <Route path="/web-development" element={<WebDevelopmentPage />} />

                            {/* 5G Services Routes */}
                            <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                            <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                            <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                            <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                            <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                            <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                            <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                            <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                            <Route path="/5g-implementation" element={<FiveGImplementationPage />} />

                            {/* Micro SAAS Services Routes */}
                            <Route path="/micro-saas" element={<MicroSaaSServicesPage />} />

                            {/* Catch all route */}
                            <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
                              <div className="text-center">
                                <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                                <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                                <a href="/" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                                  Go Home
                                </a>
                              </div>
                            </div>} />
                          </Routes>
                        </Suspense>
                      </main>
                      
                      <Footer />
                      <EnhancedAccessibility />
                    </div>
                  </Router>
                </CoreWebVitals>
              </AccessibilityEnhancer>
            </WebVitalsTracker>
          </PerformanceMonitor>
        </AnalyticsProvider>
      </HelmetProvider>
    </GlobalErrorBoundary>
  );
}

export default App;