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

// AI Service Pages

// IT Service Pages

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionContentStudioPage = React.lazy(() => import("./app/zion-content-studio/page"));

// New Innovative Micro SAAS Services
const ZionAIVideoGeneratorPage = React.lazy(() => import("./app/zion-ai-video-generator/page"));
const ZionAIInvoiceGeneratorPage = React.lazy(() => import("./app/zion-ai-invoice-generator/page"));
const ZionAICustomerInsightsPage = React.lazy(() => import("./app/zion-ai-customer-insights/page"));
const ZionAIEmailAssistantPage = React.lazy(() => import("./app/zion-ai-email-assistant/page"));
const ZionInventorySmartPage = React.lazy(() => import("./app/zion-inventory-smart/page"));
const ZionAIVoiceAssistantProPage = React.lazy(() => import("./app/zion-ai-voice-assistant-pro/page"));
const ZionAICodeReviewerPage = React.lazy(() => import("./app/zion-ai-code-reviewer/page"));
const ZionAIContractAnalyzerPage = React.lazy(() => import("./app/zion-ai-contract-analyzer/page"));
const ZionAISupplyChainOptimizerPage = React.lazy(() => import("./app/zion-ai-supply-chain-optimizer/page"));
const ZionAITranslatorProPage = React.lazy(() => import("./app/zion-ai-translator-pro/page"));
const ZionAIDataCleanerPage = React.lazy(() => import("./app/zion-ai-data-cleaner/page"));

// 5G Solutions Pages
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
    if (typeof window !== 'undefined') {
      // Add any global initialization logic here
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  return (
    <HelmetProvider>
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
                                                                                                                                                                                                                                                                
                                {/* AI Services */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                {/* IT Services */}
                                                                                                                                                                                                                                
                                {/* Micro SAAS Services */}
                                <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                                <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                                <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                                <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />

                                {/* New Innovative Micro SAAS Services */}
                                <Route path="/zion-ai-video-generator" element={<ZionAIVideoGeneratorPage />} />
                                <Route path="/zion-ai-invoice-generator" element={<ZionAIInvoiceGeneratorPage />} />
                                <Route path="/zion-ai-customer-insights" element={<ZionAICustomerInsightsPage />} />
                                <Route path="/zion-ai-email-assistant" element={<ZionAIEmailAssistantPage />} />
                                <Route path="/zion-inventory-smart" element={<ZionInventorySmartPage />} />
                                                                <Route path="/zion-ai-voice-assistant-pro" element={<ZionAIVoiceAssistantProPage />} />
                                <Route path="/zion-ai-code-reviewer" element={<ZionAICodeReviewerPage />} />
                                <Route path="/zion-ai-contract-analyzer" element={<ZionAIContractAnalyzerPage />} />
                                <Route path="/zion-ai-supply-chain-optimizer" element={<ZionAISupplyChainOptimizerPage />} />
                                                                <Route path="/zion-ai-translator-pro" element={<ZionAITranslatorProPage />} />
                                <Route path="/zion-ai-data-cleaner" element={<ZionAIDataCleanerPage />} />
                                
                                {/* 5G Services */}
                                                                                                                                                                                                                                                                                                
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
    </HelmetProvider>
  );
}

export default App;