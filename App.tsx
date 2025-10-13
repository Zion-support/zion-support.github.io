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
import AdvancedPerformanceMonitor from "./app/components/AdvancedPerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import LoadingPageEnhanced from "./app/components/EnhancedLoading";
import EnhancedSEO from "./app/components/EnhancedSEO";
import { performanceOptimizer } from "./utils/performanceUtils";
import { accessibilityManager } from "./utils/accessibilityUtils";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));

// Individual service pages
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionAICRMProPage = React.lazy(() => import("./app/zion-ai-crm-pro/page"));
const ZionAIMarketingAutomationProPage = React.lazy(() => import("./app/zion-ai-marketing-automation-pro/page"));
const ZionAIProjectManagerProPage = React.lazy(() => import("./app/zion-ai-project-manager-pro/page"));

// AI Service pages
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));

// 5G Service pages
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  useEffect(() => {
    // Initialize performance monitoring
    performanceOptimizer.init();
    
    // Initialize accessibility features
    accessibilityManager.init();
    
    // Track page load performance
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        performanceOptimizer.trackPageLoad();
      });
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <EnhancedAccessibility>
          <AnalyticsProvider>
            <PerformanceMonitor>
              <AdvancedPerformanceMonitor>
                <WebVitalsTracker>
                  <CoreWebVitals>
                    <Router>
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                        <FuturisticBackground />
                        <Navigation onSidebarToggle={toggleSidebar} />
                        <Breadcrumb />
                        
                        <main className="relative z-10">
                          <Suspense fallback={<LoadingPage />}>
                            <Routes>
                              <Route path="/" element={<HomePage />} />
                              <Route path="/about" element={<AboutPage />} />
                              <Route path="/services" element={<ServicesPage />} />
                              <Route path="/micro-saas" element={<MicroSaasPage />} />
                              <Route path="/contact" element={<ContactPage />} />
                              <Route path="/ai-services" element={<AIServicesPage />} />
                              <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                              
                              {/* Micro SAAS Service Pages */}
                              <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                              <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                              <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                              <Route path="/zion-ai-crm-pro" element={<ZionAICRMProPage />} />
                              <Route path="/zion-ai-marketing-automation-pro" element={<ZionAIMarketingAutomationProPage />} />
                              <Route path="/zion-ai-project-manager-pro" element={<ZionAIProjectManagerProPage />} />
                              
                              {/* AI Service Pages */}
                              <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                              <Route path="/ai-automation" element={<AIAutomationPage />} />
                              <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                              <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                              <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                              <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                              
                              {/* 5G Service Pages */}
                              <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                              <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                              <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                              <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                              <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                              <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                              <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                              <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                            </Routes>
                          </Suspense>
                        </main>
                        
                        <Footer />
                        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                        <AccessibilityEnhancer />
                      </div>
                    </Router>
                  </CoreWebVitals>
                </WebVitalsTracker>
              </AdvancedPerformanceMonitor>
            </PerformanceMonitor>
          </AnalyticsProvider>
        </EnhancedAccessibility>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
}

export default App;