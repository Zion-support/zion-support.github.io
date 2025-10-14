import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Components
import Header from './app/components/Header';
import Footer from './app/components/Footer';

// Pages
import HomePage from "./app/page";
import AboutPage from "./app/about/page";
import ServicesPage from "./app/services/page";
import ContactPage from "./app/contact/page";

// Main Service Pages
import AiServicesPage from "./app/ai-services/page";
import ItServicesPage from "./app/it-services/page";
import FiveGSolutionsPage from "./app/5g-solutions/page";
import MicroSaasPage from "./app/micro-saas/page";

// AI Service Pages
import AiAnalyticsDashboardPage from "./app/ai-analytics-dashboard/page";
import AiContentGenerationPage from "./app/ai-content-generation/page";
import AiAutomationPlatformPage from "./app/ai-automation-platform/page";
import AiChatbotEnterprisePage from "./app/ai-chatbot-enterprise/page";
import AiCodeAssistantProPage from "./app/ai-code-assistant-pro/page";
import AiBusinessIntelligenceProPage from "./app/ai-business-intelligence-pro/page";

// IT Service Pages
import AiCloudInfrastructurePage from "./app/ai-cloud-infrastructure/page";
import AiApiManagementPage from "./app/ai-api-management/page";
import DatabaseSolutionsPage from "./app/database-solutions/page";
import AdvancedSecuritySuitePage from "./app/advanced-security-suite/page";
import PerformanceMonitoringPage from "./app/performance-monitoring/page";
import DevOpsSolutionsPage from "./app/devops-solutions/page";

// 5G Service Pages
import FiveGImplementationPage from "./app/5g-implementation/page";
import FiveGNetworkInfrastructurePage from "./app/5g-network-infrastructure/page";
import FiveGIotSolutionsPage from "./app/5g-iot-solutions/page";
import FiveGSmartCitySolutionsPage from "./app/5g-smart-city-solutions/page";
import FiveGEdgeComputingPage from "./app/5g-edge-computing/page";
import FiveGPrivateNetworksPage from "./app/5g-private-networks/page";

// Micro SAAS Pages
import AiAccountingAssistantPage from "./app/ai-accounting-assistant/page";
import AiContentModerationProPage from "./app/ai-content-moderation-pro/page";
import AiClimateSolutionsProPage from "./app/ai-climate-solutions-pro/page";
import AiAgriculturalIntelligenceProPage from "./app/ai-agricultural-intelligence-pro/page";
import Ai3DGenerationPage from "./app/ai-3d-generation/page";
import AiBlockchainSolutionsPage from "./app/ai-blockchain-solutions/page";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
// Performance monitoring
if (typeof window !== 'undefined') {
  // Monitor Core Web Vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.warn);
    getFID(console.warn);
    getFCP(console.warn);
    getLCP(console.warn);
    getTTFB(console.warn);
  });

  // Monitor bundle size
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'navigation') {
        console.warn('Page load time:', entry.loadEventEnd - entry.loadEventStart, 'ms');
      }
    }
  });
  observer.observe({ entryTypes: ['navigation'] });
}

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-white text-xl">Loading application...</div>
      </div>
    );
  }

  return (
    <div>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Header />
            <main className="relative z-10 pt-20" id="main-content" role="main">
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                  <div className="text-center">
                    <div className="cyber-loading mx-auto mb-4"></div>
                    <div className="text-white text-xl">Loading application...</div>
                  </div>
                </div>
              }>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  
                  {/* Main Service Pages */}
                  <Route path="/ai-services" element={<AiServicesPage />} />
                  <Route path="/it-services" element={<ItServicesPage />} />
                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                  
                  {/* AI Service Pages */}
                  <Route path="/ai-analytics-dashboard" element={<AiAnalyticsDashboardPage />} />
                  <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                  <Route path="/ai-automation-platform" element={<AiAutomationPlatformPage />} />
                  <Route path="/ai-chatbot-enterprise" element={<AiChatbotEnterprisePage />} />
                  <Route path="/ai-code-assistant-pro" element={<AiCodeAssistantProPage />} />
                  <Route path="/ai-business-intelligence-pro" element={<AiBusinessIntelligenceProPage />} />
                  
                  {/* IT Service Pages */}
                  <Route path="/ai-cloud-infrastructure" element={<AiCloudInfrastructurePage />} />
                  <Route path="/ai-api-management" element={<AiApiManagementPage />} />
                  <Route path="/database-solutions" element={<DatabaseSolutionsPage />} />
                  <Route path="/advanced-security-suite" element={<AdvancedSecuritySuitePage />} />
                  <Route path="/performance-monitoring" element={<PerformanceMonitoringPage />} />
                  <Route path="/devops-solutions" element={<DevOpsSolutionsPage />} />
                  
                  {/* 5G Service Pages */}
                  <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                  <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                  <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />
                  <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                  <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                  <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                  
                  {/* Micro SAAS Pages */}
                  <Route path="/ai-accounting-assistant" element={<AiAccountingAssistantPage />} />
                  <Route path="/ai-content-moderation-pro" element={<AiContentModerationProPage />} />
                  <Route path="/ai-climate-solutions-pro" element={<AiClimateSolutionsProPage />} />
                  <Route path="/ai-agricultural-intelligence-pro" element={<AiAgriculturalIntelligenceProPage />} />
                  <Route path="/ai-3d-generation" element={<Ai3DGenerationPage />} />
                  <Route path="/ai-blockchain-solutions" element={<AiBlockchainSolutionsPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </div>
  );
};

export default App;
