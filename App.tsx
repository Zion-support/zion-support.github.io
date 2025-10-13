import React, { Suspense, useEffect, useState } from "react";
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
import ProductionErrorBoundary from "./app/components/ProductionErrorBoundary";
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
import EnhancedSEO from "./app/components/EnhancedSEO";

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

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AiAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AiBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AiContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AiCustomerServicePage = React.lazy(() => import("./app/ai-customer-service/page"));
const AiDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AiEmailAutomationPage = React.lazy(() => import("./app/ai-email-automation/page"));
const AiFraudDetectionPage = React.lazy(() => import("./app/ai-fraud-detection/page"));
const AiHealthcarePage = React.lazy(() => import("./app/ai-healthcare/page"));
const AiMarketingPage = React.lazy(() => import("./app/ai-marketing/page"));
const AiPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AiProjectManagementPage = React.lazy(() => import("./app/ai-project-management/page"));
const AiRecommendationEnginePage = React.lazy(() => import("./app/ai-recommendation-engine/page"));
const AiSalesAutomationPage = React.lazy(() => import("./app/ai-sales-automation/page"));
const AiWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// IT Service Pages
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const CustomSoftwarePage = React.lazy(() => import("./app/custom-software/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionContentStudioPage = React.lazy(() => import("./app/zion-content-studio/page"));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
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
                      </Router>
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