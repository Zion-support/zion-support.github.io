import React, { Suspense, useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/accessibility-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));

// AI Services Pages
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AIDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));
const AIMarketingAutomationPage = React.lazy(() => import("./app/ai-marketing-automation/page"));
const AIPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AIVoiceAssistantPage = React.lazy(() => import("./app/ai-voice-assistant/page"));
const AIWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500">
          {error.message || 'An unexpected error occurred'}
        </p>
      </div>
      <div className="flex space-x-3">
        <button
          onClick={resetErrorBoundary}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Try again
        </button>
        <button
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.location.href = '/';
            }
          }}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Go home
        </button>
      </div>
    </div>
  </div>
);

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <GlobalErrorBoundary>
      <EnhancedErrorBoundary>
        <HelmetProvider>
          <AnalyticsProvider>
            <PerformanceMonitor>
              <WebVitalsTracker>
                <AccessibilityEnhancer>
                  <CoreWebVitals>
                    <Router>
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                        <FuturisticBackground>
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
                                <Route path="/blog" element={<BlogPage />} />
                                <Route path="/privacy" element={<PrivacyPage />} />
                                <Route path="/terms" element={<TermsPage />} />
                                <Route path="/ai-services" element={<AIServicesPage />} />
                                <Route path="/micro-saas" element={<MicroSaasPage />} />
                                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                                <Route path="/tutorials" element={<TutorialsPage />} />
                                <Route path="/demo" element={<DemoPage />} />
                                <Route path="/support" element={<SupportPage />} />

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
                                <Route path="/ai-computer-vision" element={<AIComputerVisionPage />} />
                                <Route path="/ai-conversational-ai" element={<AIConversationalAIPage />} />
                                <Route path="/ai-crm" element={<AICRMPage />} />
                                <Route path="/ai-customer-insights" element={<AICustomerInsightsPage />} />
                                <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
                                <Route path="/ai-devops-automation" element={<AIDevOpsAutomationPage />} />
                                <Route path="/ai-document-intelligence" element={<AIDocumentIntelligencePage />} />

                                {/* IT Services Routes */}
                                <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                                <Route path="/devops-services" element={<DevOpsServicesPage />} />
                                <Route path="/it-consulting" element={<ITConsultingPage />} />
                                <Route path="/network-security" element={<NetworkSecurityPage />} />
                                <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
                                <Route path="/system-integration" element={<SystemIntegrationPage />} />
                                <Route path="/web-development" element={<WebDevelopmentPage />} />

                                {/* Additional IT Services Routes */}
                                <Route path="/cloud-consulting" element={<CloudConsultingPage />} />
                                <Route path="/data-center-solutions" element={<DataCenterSolutionsPage />} />
                                <Route path="/disaster-recovery" element={<DisasterRecoveryPage />} />
                                <Route path="/it-support" element={<ITSupportPage />} />
                                <Route path="/managed-services" element={<ManagedServicesPage />} />
                                <Route path="/security-audit" element={<SecurityAuditPage />} />
                                <Route path="/technology-consulting" element={<TechnologyConsultingPage />} />

                                {/* 5G Services Routes */}
                                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                                <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />

                                {/* Micro SAAS Services Routes */}
                                <Route path="/micro-saas-services" element={<MicroSaaSServicesPage />} />
                                <Route path="/project-management-tool" element={<ProjectManagementToolPage />} />
                                <Route path="/customer-relationship-manager" element={<CustomerRelationshipManagerPage />} />
                                <Route path="/inventory-management-system" element={<InventoryManagementSystemPage />} />
                                <Route path="/financial-reporting-tool" element={<FinancialReportingToolPage />} />
                                <Route path="/employee-time-tracker" element={<EmployeeTimeTrackerPage />} />
                                <Route path="/social-media-scheduler" element={<SocialMediaSchedulerPage />} />
                                <Route path="/email-marketing-platform" element={<EmailMarketingPlatformPage />} />
                                <Route path="/website-analytics-tool" element={<WebsiteAnalyticsToolPage />} />
                                <Route path="/task-automation-workflow" element={<TaskAutomationWorkflowPage />} />

                                {/* Catch all route */}
                                <Route path="*" element={
                                  <div className="min-h-screen flex items-center justify-center">
                                    <div className="text-center">
                                      <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                                      <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                                      <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Go Home
                                      </a>
                                    </div>
                                  </div>
                                } />
                              </Routes>
                            </Suspense>
                          </main>
                          
                          <Footer />
                        </FuturisticBackground>
                      </div>
                    </Router>
                  </CoreWebVitals>
                </AccessibilityEnhancer>
              </WebVitalsTracker>
            </PerformanceMonitor>
          </AnalyticsProvider>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
  );
}

export default App;