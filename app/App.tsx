import React, { Suspense, useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./styles/futuristic.css";
import "./styles/futuristic-enhanced.css";
import "./styles/accessibility-enhanced.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import HomePage from "./page";
import { LoadingPage } from "./components/LoadingStates";
import { GlobalErrorBoundary } from "./components/EnhancedErrorFeedback";
import EnhancedAccessibility from "./components/EnhancedAccessibility";
import AnalyticsProvider from "./components/AnalyticsProvider";
import PerformanceMonitor from "./components/PerformanceMonitor";
import WebVitalsTracker from "./components/WebVitalsTracker";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import CoreWebVitals from "./components/CoreWebVitals";
import FuturisticBackground from "./components/FuturisticBackground";
import EnhancedErrorBoundary from "./components/EnhancedErrorBoundary";
import Breadcrumb from "./components/Breadcrumb";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./about/page"));
const ContactPage = React.lazy(() => import("./contact/page"));
const ServicesPage = React.lazy(() => import("./services/page"));
const BlogPage = React.lazy(() => import("./blog/page"));
const AIServicesPage = React.lazy(() => import("./ai-services/page"));
const MicroSaasPage = React.lazy(() => import("./micro-saas/page"));
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
const CybersecuritySolutionsPage = React.lazy(() => import("./cybersecurity-solutions/page"));
const WebDevelopmentPage = React.lazy(() => import("./web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./database-management/page"));
const CustomSoftwarePage = React.lazy(() => import("./custom-software/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./network-infrastructure/page"));

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
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <EnhancedErrorBoundary>
          <AnalyticsProvider>
            <PerformanceMonitor>
              <WebVitalsTracker>
                <AccessibilityEnhancer>
                  <CoreWebVitals>
                    <FuturisticBackground>
                      <EnhancedAccessibility>
                        <div className="min-h-screen bg-white">
                          <Navigation 
                            isSidebarOpen={isSidebarOpen}
                            toggleSidebar={toggleSidebar}
                          />
                          <Sidebar 
                            isOpen={isSidebarOpen}
                            onClose={closeSidebar}
                          />
                          <main className="main-content">
                            <Breadcrumb />
                            <Suspense fallback={<LoadingPage />}>
                              <Routes>
                                {/* Main Pages */}
                                <Route path="/" element={<HomePage />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/services" element={<ServicesPage />} />
                                <Route path="/blog" element={<BlogPage />} />
                                <Route path="/tutorials" element={<TutorialsPage />} />
                                <Route path="/demo" element={<DemoPage />} />
                                <Route path="/support" element={<SupportPage />} />
                                <Route path="/privacy" element={<PrivacyPage />} />
                                <Route path="/terms" element={<TermsPage />} />

                                {/* AI Services */}
                                <Route path="/ai-services" element={<AIServicesPage />} />
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

                                {/* 5G Solutions */}
                                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                                <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />

                                {/* Micro SaaS */}
                                <Route path="/micro-saas" element={<MicroSaasPage />} />
                              </Routes>
                            </Suspense>
                          </main>
                          <Footer />
                        </div>
                      </EnhancedAccessibility>
                    </FuturisticBackground>
                  </CoreWebVitals>
                </AccessibilityEnhancer>
              </WebVitalsTracker>
            </PerformanceMonitor>
          </AnalyticsProvider>
        </EnhancedErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;