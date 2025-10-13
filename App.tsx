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
import PerformanceOptimizer from "./app/components/PerformanceOptimizer";
import EnhancedSEO from "./app/components/EnhancedSEO";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));

// AI Services Pages - only include existing ones
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AICodeAssistantPage = React.lazy(() => import("./app/ai-code-assistant/page"));
const AIMarketingAutomationPage = React.lazy(() => import("./app/ai-marketing-automation/page"));
const AIDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));
const AICRMAssistantPage = React.lazy(() => import("./app/ai-crm-assistant/page"));

// Micro SAAS Pages
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionAICRMProPage = React.lazy(() => import("./app/zion-ai-crm-pro/page"));
const ZionAIMarketingAutomationProPage = React.lazy(() => import("./app/zion-ai-marketing-automation-pro/page"));
const ZionAIProjectManagerProPage = React.lazy(() => import("./app/zion-ai-project-manager-pro/page"));
const ZionAIVoiceAssistantProPage = React.lazy(() => import("./app/zion-ai-voice-assistant-pro/page"));
const ZionAIBlockchainAnalyticsProPage = React.lazy(() => import("./app/zion-ai-blockchain-analytics-pro/page"));

// 5G Solutions Pages
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));

// Accessibility Page
const AccessibilityPage = React.lazy(() => import("./app/accessibility/page"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPageEnhanced />;
  }

  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <AnalyticsProvider>
          <PerformanceMonitor>
            <WebVitalsTracker>
              <AccessibilityEnhancer>
                <CoreWebVitals>
                  <Router>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                      <FuturisticBackground />
                      <Navigation onMenuClick={() => setSidebarOpen(true)} />
                      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                      
                      <main className="relative z-10">
                        <Breadcrumb />
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
                            <Route path="/accessibility" element={<AccessibilityPage />} />

                            {/* AI Services */}
                            <Route path="/ai-services" element={<AIAnalyticsPage />} />
                            <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                            <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                            <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                            <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                            <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                            <Route path="/ai-code-assistant" element={<AICodeAssistantPage />} />
                            <Route path="/ai-marketing-automation" element={<AIMarketingAutomationPage />} />
                            <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                            <Route path="/ai-crm-assistant" element={<AICRMAssistantPage />} />

                            {/* Micro SAAS */}
                            <Route path="/micro-saas" element={<MicroSaasPage />} />
                            <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                            <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                            <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                            <Route path="/zion-ai-crm-pro" element={<ZionAICRMProPage />} />
                            <Route path="/zion-ai-marketing-automation-pro" element={<ZionAIMarketingAutomationProPage />} />
                            <Route path="/zion-ai-project-manager-pro" element={<ZionAIProjectManagerProPage />} />
                            <Route path="/zion-ai-voice-assistant-pro" element={<ZionAIVoiceAssistantProPage />} />
                            <Route path="/zion-ai-blockchain-analytics-pro" element={<ZionAIBlockchainAnalyticsProPage />} />

                            {/* 5G Solutions */}
                            <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
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
                      <EnhancedAccessibility />
                      <PerformanceOptimizer />
                    </div>
                  </Router>
                </CoreWebVitals>
              </AccessibilityEnhancer>
            </WebVitalsTracker>
          </PerformanceMonitor>
        </AnalyticsProvider>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
