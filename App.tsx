"use client";

import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ProductionErrorBoundary from "./app/components/ProductionErrorBoundary";

// Lazy load pages for better performance
const AboutPage = lazy(() => import("./app/about/page"));
const ContactPage = lazy(() => import("./app/contact/page"));
const ServicesPage = lazy(() => import("./app/services/page"));
const BlogPage = lazy(() => import("./app/blog/page"));
const PrivacyPage = lazy(() => import("./app/privacy/page"));
const TermsPage = lazy(() => import("./app/terms/page"));

// AI Services Pages
const AIAnalyticsPage = lazy(() => import("./app/ai-analytics/page"));
const AIContentGenerationPage = lazy(() => import("./app/ai-content-generation/page"));
const AICustomerSupportPage = lazy(() => import("./app/ai-customer-support/page"));
const AICybersecurityPage = lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsPage = lazy(() => import("./app/ai-data-analytics/page"));
const AIDocumentProcessingPage = lazy(() => import("./app/ai-document-processing/page"));
const AIMarketingAutomationPage = lazy(() => import("./app/ai-marketing-automation/page"));
const AIPredictiveAnalyticsPage = lazy(() => import("./app/ai-predictive-analytics/page"));
const AIVoiceAssistantPage = lazy(() => import("./app/ai-voice-assistant/page"));
const AIWorkflowAutomationPage = lazy(() => import("./app/ai-workflow-automation/page"));

// IT Services Pages
const CloudMigrationPage = lazy(() => import("./app/cloud-migration/page"));
const DevOpsServicesPage = lazy(() => import("./app/devops-services/page"));
const ITConsultingPage = lazy(() => import("./app/it-consulting/page"));
const NetworkSecurityPage = lazy(() => import("./app/network-security/page"));
const SoftwareDevelopmentPage = lazy(() => import("./app/software-development/page"));
const SystemIntegrationPage = lazy(() => import("./app/system-integration/page"));
const WebDevelopmentPage = lazy(() => import("./app/web-development/page"));

// 5G Services Pages
const FiveGSolutionsPage = lazy(() => import("./app/5g-solutions/page"));
const FiveGNetworkInfrastructurePage = lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGEdgeComputingPage = lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIoTSolutionsPage = lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGSmartCitySolutionsPage = lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGPrivateNetworksPage = lazy(() => import("./app/5g-private-networks/page"));
const FiveGMobileApplicationsPage = lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGDataAnalyticsPage = lazy(() => import("./app/5g-data-analytics/page"));
const FiveGImplementationPage = lazy(() => import("./app/5g-implementation/page"));

// Micro SAAS Services Pages
const MicroSaaSServicesPage = lazy(() => import("./app/micro-saas-services/page"));
const ProjectManagementToolPage = lazy(() => import("./app/project-management-tool/page"));
const CustomerRelationshipManagerPage = lazy(() => import("./app/customer-relationship-manager/page"));
const InventoryManagementSystemPage = lazy(() => import("./app/inventory-management-system/page"));
const FinancialReportingToolPage = lazy(() => import("./app/financial-reporting-tool/page"));
const EmployeeTimeTrackerPage = lazy(() => import("./app/employee-time-tracker/page"));
const SocialMediaSchedulerPage = lazy(() => import("./app/social-media-scheduler/page"));
const EmailMarketingPlatformPage = lazy(() => import("./app/email-marketing-platform/page"));
const WebsiteAnalyticsToolPage = lazy(() => import("./app/website-analytics-tool/page"));
const TaskAutomationWorkflowPage = lazy(() => import("./app/task-automation-workflow/page"));

// New Innovative Micro SAAS Services
const AIPoweredEmailAnalyzerPage = lazy(() => import("./app/ai-powered-email-analyzer/page"));
const SmartInventoryOptimizerPage = lazy(() => import("./app/smart-inventory-optimizer/page"));
const AICustomerSentimentTrackerPage = lazy(() => import("./app/ai-customer-sentiment-tracker/page"));
const SmartExpenseCategorizerPage = lazy(() => import("./app/smart-expense-categorizer/page"));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      // Add any global initialization logic here
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  return (
    <HelmetProvider>
      <ProductionErrorBoundary>
        <GlobalErrorBoundary>
          <AnalyticsProvider>
            <PerformanceMonitor>
              <WebVitalsTracker>
                <EnhancedAccessibility>
                  <AccessibilityEnhancer>
                    <CoreWebVitals>
                      <BrowserRouter>
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

                                  {/* AI Services */}
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

                                  {/* IT Services */}
                                  <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                                  <Route path="/devops-services" element={<DevOpsServicesPage />} />
                                  <Route path="/it-consulting" element={<ITConsultingPage />} />
                                  <Route path="/network-security" element={<NetworkSecurityPage />} />
                                  <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
                                  <Route path="/system-integration" element={<SystemIntegrationPage />} />
                                  <Route path="/web-development" element={<WebDevelopmentPage />} />

                                  {/* 5G Services */}
                                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                                  <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                                  <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                                  <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                                  <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                                  <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                                  <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                                  <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                                  <Route path="/5g-implementation" element={<FiveGImplementationPage />} />

                                  {/* Micro SAAS Services */}
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

                                  {/* New Innovative Micro SAAS Services */}
                                  <Route path="/ai-powered-email-analyzer" element={<AIPoweredEmailAnalyzerPage />} />
                                  <Route path="/smart-inventory-optimizer" element={<SmartInventoryOptimizerPage />} />
                                  <Route path="/ai-customer-sentiment-tracker" element={<AICustomerSentimentTrackerPage />} />
                                  <Route path="/smart-expense-categorizer" element={<SmartExpenseCategorizerPage />} />

                                  {/* Additional AI Services Routes */}
                                  <Route path="/ai-chatbot-builder" element={React.createElement(React.lazy(() => import("./app/ai-chatbot-builder/page")))} />
                                  <Route path="/ai-code-assistant" element={React.createElement(React.lazy(() => import("./app/ai-code-assistant/page")))} />
                                  <Route path="/ai-design-studio" element={React.createElement(React.lazy(() => import("./app/ai-design-studio/page")))} />
                                  <Route path="/ai-business-intelligence" element={React.createElement(React.lazy(() => import("./app/ai-business-intelligence/page")))} />
                                  <Route path="/ai-automation" element={React.createElement(React.lazy(() => import("./app/ai-automation/page")))} />
                                  <Route path="/ai-computer-vision" element={React.createElement(React.lazy(() => import("./app/ai-computer-vision/page")))} />
                                  <Route path="/ai-conversational-ai" element={React.createElement(React.lazy(() => import("./app/ai-conversational-ai/page")))} />
                                  <Route path="/ai-crm" element={React.createElement(React.lazy(() => import("./app/ai-crm/page")))} />
                                  <Route path="/ai-customer-insights" element={React.createElement(React.lazy(() => import("./app/ai-customer-insights/page")))} />
                                  <Route path="/ai-data-visualization" element={React.createElement(React.lazy(() => import("./app/ai-data-visualization/page")))} />
                                  <Route path="/ai-devops-automation" element={React.createElement(React.lazy(() => import("./app/ai-devops-automation/page")))} />
                                  <Route path="/ai-document-intelligence" element={React.createElement(React.lazy(() => import("./app/ai-document-intelligence/page")))} />
                                  <Route path="/ai-marketing-automation" element={React.createElement(React.lazy(() => import("./app/ai-marketing-automation/page")))} />
                                  <Route path="/ai-predictive-analytics" element={React.createElement(React.lazy(() => import("./app/ai-predictive-analytics/page")))} />
                                  <Route path="/ai-voice-assistant" element={React.createElement(React.lazy(() => import("./app/ai-voice-assistant/page")))} />
                                  <Route path="/ai-workflow-automation" element={React.createElement(React.lazy(() => import("./app/ai-workflow-automation/page")))} />

                                  {/* Additional IT Services Routes */}
                                  <Route path="/cloud-consulting" element={React.createElement(React.lazy(() => import("./app/cloud-consulting/page")))} />
                                  <Route path="/data-center-solutions" element={React.createElement(React.lazy(() => import("./app/data-center-solutions/page")))} />
                                  <Route path="/disaster-recovery" element={React.createElement(React.lazy(() => import("./app/disaster-recovery/page")))} />
                                  <Route path="/it-support" element={React.createElement(React.lazy(() => import("./app/it-support/page")))} />
                                  <Route path="/managed-services" element={React.createElement(React.lazy(() => import("./app/managed-services/page")))} />
                                  <Route path="/security-audit" element={React.createElement(React.lazy(() => import("./app/security-audit/page")))} />
                                  <Route path="/technology-consulting" element={React.createElement(React.lazy(() => import("./app/technology-consulting/page")))} />

                                  {/* Additional 5G Services Routes */}
                                  <Route path="/5g-data-analytics" element={React.createElement(React.lazy(() => import("./app/5g-data-analytics/page")))} />
                                  <Route path="/5g-edge-computing" element={React.createElement(React.lazy(() => import("./app/5g-edge-computing/page")))} />
                                  <Route path="/5g-implementation" element={React.createElement(React.lazy(() => import("./app/5g-implementation/page")))} />
                                  <Route path="/5g-iot-solutions" element={React.createElement(React.lazy(() => import("./app/5g-iot-solutions/page")))} />
                                  <Route path="/5g-mobile-applications" element={React.createElement(React.lazy(() => import("./app/5g-mobile-applications/page")))} />
                                  <Route path="/5g-network-infrastructure" element={React.createElement(React.lazy(() => import("./app/5g-network-infrastructure/page")))} />
                                  <Route path="/5g-private-networks" element={React.createElement(React.lazy(() => import("./app/5g-private-networks/page")))} />
                                  <Route path="/5g-smart-city-solutions" element={React.createElement(React.lazy(() => import("./app/5g-smart-city-solutions/page")))} />

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
        </GlobalErrorBoundary>
      </ProductionErrorBoundary>
    </HelmetProvider>
  );
}

export default App;