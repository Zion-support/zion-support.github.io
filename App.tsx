import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/globals.css';

// Components
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import EnhancedErrorBoundary from './app/components/EnhancedErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import LoadingSpinner from './app/components/LoadingSpinner';

// Pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import BlogPage from './app/blog/page';
import CareersPage from './app/careers/page';

// Service Pages
import AiAnalyticsDashboardProPage from './app/ai-analytics-dashboard-pro/page';
import AiContentGenerationProPage from './app/ai-content-generation-pro/page';
import AiAutomationSuitePage from './app/ai-automation-suite/page';
import AiBusinessIntelligenceProPage from './app/ai-business-intelligence-pro/page';
import AiCodeAssistantProPage from './app/ai-code-assistant-pro/page';
import AiChatbotEnterprisePage from './app/ai-chatbot-enterprise/page';
import AiCloudInfrastructurePage from './app/ai-cloud-infrastructure/page';
import AiApiManagementPage from './app/ai-api-management/page';
import DatabaseSolutionsPage from './app/database-solutions/page';
import AdvancedSecuritySuitePage from './app/advanced-security-suite/page';
import PerformanceMonitoringPage from './app/performance-monitoring/page';
import DevOpsSolutionsPage from './app/devops-solutions/page';
import FiveGImplementationPage from './app/5g-implementation/page';
import FiveGNetworkInfrastructurePage from './app/5g-network-infrastructure/page';
import FiveGIotSolutionsPage from './app/5g-iot-solutions/page';
import FiveGSmartCitySolutionsPage from './app/5g-smart-city-solutions/page';
import FiveGEdgeComputingPage from './app/5g-edge-computing/page';
import FiveGPrivateNetworksPage from './app/5g-private-networks/page';
import AiAccountingAssistantPage from './app/ai-accounting-assistant/page';
import AiContentModerationProPage from './app/ai-content-moderation-pro/page';
import AiClimateSolutionsProPage from './app/ai-climate-solutions-pro/page';
import AiAgriculturalIntelligenceProPage from './app/ai-agricultural-intelligence-pro/page';
import Ai3DGenerationPage from './app/ai-3d-generation/page';
import AiBlockchainSolutionsPage from './app/ai-blockchain-solutions/page';
import AiVoiceAssistantProPage from './app/ai-voice-assistant-pro/page';
import AiDocumentProcessorProPage from './app/ai-document-processor-pro/page';
import AiSocialMediaManagerProPage from './app/ai-social-media-manager-pro/page';
import AiCybersecurityMonitorProPage from './app/ai-cybersecurity-monitor-pro/page';
import AiCloudOptimizationProPage from './app/ai-cloud-optimization-pro/page';
import FiveGSmartManufacturingProPage from './app/5g-smart-manufacturing-pro/page';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <EnhancedErrorBoundary>
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
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  
                  {/* AI Services */}
                  <Route path="/ai-analytics-dashboard-pro" element={<AiAnalyticsDashboardProPage />} />
                  <Route path="/ai-content-generation-pro" element={<AiContentGenerationProPage />} />
                  <Route path="/ai-automation-suite" element={<AiAutomationSuitePage />} />
                  <Route path="/ai-business-intelligence-pro" element={<AiBusinessIntelligenceProPage />} />
                  <Route path="/ai-code-assistant-pro" element={<AiCodeAssistantProPage />} />
                  <Route path="/ai-chatbot-enterprise" element={<AiChatbotEnterprisePage />} />
                  
                  {/* IT Services */}
                  <Route path="/ai-cloud-infrastructure" element={<AiCloudInfrastructurePage />} />
                  <Route path="/ai-api-management" element={<AiApiManagementPage />} />
                  <Route path="/database-solutions" element={<DatabaseSolutionsPage />} />
                  <Route path="/advanced-security-suite" element={<AdvancedSecuritySuitePage />} />
                  <Route path="/performance-monitoring" element={<PerformanceMonitoringPage />} />
                  <Route path="/devops-solutions" element={<DevOpsSolutionsPage />} />
                  
                  {/* 5G Solutions */}
                  <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                  <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                  <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />
                  <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                  <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                  <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                  
                  {/* Micro SAAS */}
                  <Route path="/ai-accounting-assistant" element={<AiAccountingAssistantPage />} />
                  <Route path="/ai-content-moderation-pro" element={<AiContentModerationProPage />} />
                  <Route path="/ai-climate-solutions-pro" element={<AiClimateSolutionsProPage />} />
                  <Route path="/ai-agricultural-intelligence-pro" element={<AiAgriculturalIntelligenceProPage />} />
                  <Route path="/ai-3d-generation" element={<Ai3DGenerationPage />} />
                  <Route path="/ai-blockchain-solutions" element={<AiBlockchainSolutionsPage />} />
                  
                  {/* New AI Services */}
                  <Route path="/ai-voice-assistant-pro" element={<AiVoiceAssistantProPage />} />
                  <Route path="/ai-document-processor-pro" element={<AiDocumentProcessorProPage />} />
                  <Route path="/ai-social-media-manager-pro" element={<AiSocialMediaManagerProPage />} />
                  <Route path="/ai-cybersecurity-monitor-pro" element={<AiCybersecurityMonitorProPage />} />
                  <Route path="/ai-cloud-optimization-pro" element={<AiCloudOptimizationProPage />} />
                  
                  {/* New 5G Services */}
                  <Route path="/5g-smart-manufacturing-pro" element={<FiveGSmartManufacturingProPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <PerformanceMonitor />
          </div>
        </Router>
      </HelmetProvider>
    </EnhancedErrorBoundary>
  );
};

export default App;