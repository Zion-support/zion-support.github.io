import React, { Suspense, useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/accessibility-enhanced.css";
import Navigation from "./app/components/ImprovedNavigation";
import Footer from "./app/components/ImprovedFooter";
import Sidebar from "./app/components/ImprovedSidebar";
import HomePage from "./app/page";

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

// AI Services Pages
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AIDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));
const AIMarketingAutomationPage = React.lazy(() => import("./app/ai-marketing-automation/page"));
const AIPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AIVoiceAssistantPage = React.lazy(() => import("./app/ai-voice-assistant/page"));
const AIWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));
const AIMedicalDiagnosisProPage = React.lazy(() => import("./app/ai-medical-diagnosis-pro/page"));

// IT Services Pages
const CloudMigrationPage = React.lazy(() => import("./app/cloud-migration/page"));
const DevOpsServicesPage = React.lazy(() => import("./app/devops/page"));
const ITConsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const NetworkSecurityPage = React.lazy(() => import("./app/network-security/page"));
const SoftwareDevelopmentPage = React.lazy(() => import("./app/custom-software/page"));
const SystemIntegrationPage = React.lazy(() => import("./app/system-integration/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));

// 5G Services Pages
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));

// Micro SAAS Services Pages
const ZionAIVoiceAssistantProPage = React.lazy(() => import("./app/zion-ai-voice-assistant-pro/page"));
const ZionAIBlockchainAnalyticsProPage = React.lazy(() => import("./app/zion-ai-blockchain-analytics-pro/page"));
const ZionAIContentStudioProPage = React.lazy(() => import("./app/zion-ai-content-studio-pro/page"));
const ZionAIQuantumOptimizerProPage = React.lazy(() => import("./app/zion-ai-quantum-optimizer-pro/page"));
const ZionAICyberDefenseMatrixProPage = React.lazy(() => import("./app/zion-ai-cyber-defense-matrix-pro/page"));

// Loading component
const LoadingPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          
          <main className="relative z-10" id="main-content" role="main">
            <Suspense fallback={<LoadingPage />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/micro-saas" element={<MicroSaasPage />} />
                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/tutorials" element={<TutorialsPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />

                {/* AI Services Routes */}
                <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                <Route path="/ai-marketing-automation" element={<AIMarketingAutomationPage />} />
                <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
                <Route path="/ai-medical-diagnosis-pro" element={<AIMedicalDiagnosisProPage />} />

                {/* IT Services Routes */}
                <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                <Route path="/devops-services" element={<DevOpsServicesPage />} />
                <Route path="/it-consulting" element={<ITConsultingPage />} />
                <Route path="/network-security" element={<NetworkSecurityPage />} />
                <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
                <Route path="/system-integration" element={<SystemIntegrationPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />

                {/* 5G Solutions Routes */}
                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />

                {/* Micro SAAS Services Routes */}
                <Route path="/zion-ai-voice-assistant-pro" element={<ZionAIVoiceAssistantProPage />} />
                <Route path="/zion-ai-blockchain-analytics-pro" element={<ZionAIBlockchainAnalyticsProPage />} />
                <Route path="/zion-ai-content-studio-pro" element={<ZionAIContentStudioProPage />} />
                <Route path="/zion-ai-quantum-optimizer-pro" element={<ZionAIQuantumOptimizerProPage />} />
                <Route path="/zion-ai-cyber-defense-matrix-pro" element={<ZionAICyberDefenseMatrixProPage />} />

                {/* Catch all route */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                      <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                      <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Go Home
                      </a>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;