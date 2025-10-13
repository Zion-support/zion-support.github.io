import React, { useState, useCallback, useEffect, Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from './app/components/LoadingStates';
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

// Lazy load pages for better performance
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

function App() {
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
    </GlobalErrorBoundary>
  );
}

export default App;