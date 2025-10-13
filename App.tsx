import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import "./app/styles/accessibility-enhanced.css";
import EnhancedNavigation from "./app/components/EnhancedNavigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
// const BlogPage = React.lazy(() => import("./app/blog/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));

// AI Service Pages - Only include working ones
// const AiAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
// const AiAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
// const AiBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
// const AiContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
// const AiCustomerServicePage = React.lazy(() => import("./app/ai-customer-service/page"));
// const AiDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
// const AiEmailAutomationPage = React.lazy(() => import("./app/ai-email-automation/page"));
// const AiFraudDetectionPage = React.lazy(() => import("./app/ai-fraud-detection/page"));
// const AiHealthcarePage = React.lazy(() => import("./app/ai-healthcare/page"));
// const AiMarketingPage = React.lazy(() => import("./app/ai-marketing/page"));
// const AiPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
// const AiProjectManagementPage = React.lazy(() => import("./app/ai-project-management/page"));
// const AiRecommendationEnginePage = React.lazy(() => import("./app/ai-recommendation-engine/page"));
// const AiSalesAutomationPage = React.lazy(() => import("./app/ai-sales-automation/page"));
// const AiWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// IT Service Pages - Only include working ones
// const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
// const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
// const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
// const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
// const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
// const CustomSoftwarePage = React.lazy(() => import("./app/custom-software/page"));
// const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));

// Micro SAAS Pages - Only include working ones
// const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
// const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
// const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
// const ZionContentStudioPage = React.lazy(() => import("./app/zion-content-studio/page"));
const ZionAIBlockchainAnalyticsPage = React.lazy(() => import("./app/zion-ai-blockchain-analytics/page"));
const ZionAIQuantumComputingPage = React.lazy(() => import("./app/zion-ai-quantum-computing/page"));
const ZionAISpaceTechnologyPage = React.lazy(() => import("./app/zion-ai-space-technology/page"));

// 5G Solutions Pages - Only include working ones
// const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
// const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
// const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
// const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
// const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
// const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
// const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
// const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
// const FiveGIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));

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
          <WebVitalsTracker>
            <EnhancedAccessibility>
              <CoreWebVitals>
                <Router>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                    <FuturisticBackground>
                      <EnhancedNavigation />
                      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                      
                      <main className="relative z-10" id="main-content" role="main">
                        <Suspense fallback={<LoadingPage />}>
                          <Routes>
                            {/* Main Pages */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            {/* <Route path="/blog" element={<BlogPage />} /> */}
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />

                            {/* Micro SAAS Services - Only working ones */}
                            <Route path="/zion-ai-blockchain-analytics" element={<ZionAIBlockchainAnalyticsPage />} />
                            <Route path="/zion-ai-quantum-computing" element={<ZionAIQuantumComputingPage />} />
                            <Route path="/zion-ai-space-technology" element={<ZionAISpaceTechnologyPage />} />

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
            </EnhancedAccessibility>
          </WebVitalsTracker>
        </AnalyticsProvider>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
}

export default App;