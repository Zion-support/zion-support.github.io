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
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import EnhancedSEO from "./app/components/EnhancedSEO";
import ImprovedErrorBoundary from "./app/components/ImprovedErrorBoundary";
import ImprovedAccessibility from "./app/components/ImprovedAccessibility";
import ImprovedPerformanceMonitor from "./app/components/ImprovedPerformanceMonitor";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));

// AI Services
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics-pro/page"));
const AIDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));
const AIMarketingAutomationPage = React.lazy(() => import("./app/ai-marketing-automation/page"));
const AIPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AIVoiceAssistantPage = React.lazy(() => import("./app/ai-voice-assistant/page"));
const AIWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// 5G Services
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGInfrastructurePage = React.lazy(() => import("./app/5g-infrastructure/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGNetworkOptimizationPage = React.lazy(() => import("./app/5g-network-optimization/page"));

// Other pages
const BlockchainWeb3Page = React.lazy(() => import("./app/blockchain-web3/page"));
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      // Preload critical resources
      const preloadCriticalResources = () => {
        const criticalImages = [
          '/images/hero-bg.jpg',
          '/images/logo.png',
        ];
        
        criticalImages.forEach(src => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = src;
          document.head.appendChild(link);
        });
      };

      preloadCriticalResources();
      
      // Simulate loading time
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <EnhancedErrorBoundary>
          <ImprovedErrorBoundary>
            <AnalyticsProvider>
              <PerformanceMonitor>
                <WebVitalsTracker>
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
                                <Route path="/tutorials" element={<TutorialsPage />} />
                                <Route path="/support" element={<SupportPage />} />
                                <Route path="/demo" element={<DemoPage />} />
                                <Route path="/careers" element={<CareersPage />} />

                                {/* AI Services */}
                                <Route path="/ai-services" element={<AIServicesPage />} />
                                <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                                <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                                <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                                <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                                <Route path="/ai-data-analytics-pro" element={<AIDataAnalyticsPage />} />
                                <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                                <Route path="/ai-marketing-automation" element={<AIMarketingAutomationPage />} />
                                <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                                <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                                <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />

                                {/* 5G Services */}
                                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                                <Route path="/5g-infrastructure" element={<FiveGInfrastructurePage />} />
                                <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                                <Route path="/5g-network-optimization" element={<FiveGNetworkOptimizationPage />} />

                                {/* Micro SAAS */}
                                <Route path="/micro-saas" element={<MicroSaasPage />} />

                                {/* Other pages */}
                                <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
                                <Route path="/case-studies" element={<CaseStudiesPage />} />
                              </Routes>
                            </Suspense>
                          </main>
                          
                          <Footer />
                        </FuturisticBackground>
                      </div>
                    </Router>
                  </CoreWebVitals>
                </WebVitalsTracker>
              </PerformanceMonitor>
            </AnalyticsProvider>
          </ImprovedErrorBoundary>
        </EnhancedErrorBoundary>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
}

export default App;