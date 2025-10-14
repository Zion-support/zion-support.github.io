import React, { useState, useEffect, useCallback, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingPage from './app/components/Loading';

// Page Components
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';
import ServicesPage from './app/services/page';
import BlogPage from './app/blog/page';
import DemoPage from './app/demo/page';
import SupportPage from './app/support/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import PricingPage from './app/pricing/page';
import SolutionsPage from './app/solutions/page';
import MicroSaaSSolutionsPage from './app/micro-saas-solutions/page';
import AISolutionsPage from './app/ai-solutions/page';
import ITSolutionsPage from './app/it-solutions/page';

// Service Pages
import AIServicesPage from './app/ai-services/page';
import ITServicesPage from './app/it-services/page';
import CloudInfrastructurePage from './app/cloud-infrastructure/page';
import DigitalTransformationPage from './app/digital-transformation/page';
import CaseStudiesPage from './app/case-studies/page';
import CareersPage from './app/careers/page';

// Additional Pages
import MicroSaaSPage from './app/micro-saas/page';
import FiveGSolutionsPage from './app/5g-solutions/page';
import TeamPage from './app/team/page';
import DocumentationPage from './app/docs/page';

// New Innovative Micro SAAS Services
const ZionAIVideoGeneratorPage = React.lazy(() => import("./app/zion-ai-video-generator/page"));
const ZionAIInvoiceGeneratorPage = React.lazy(() => import("./app/zion-ai-invoice-generator/page"));
const ZionAICustomerInsightsPage = React.lazy(() => import("./app/zion-ai-customer-insights/page"));
const ZionAIEmailAnalyzerPage = React.lazy(() => import("./app/zion-ai-email-analyzer/page"));
const ZionSmartInventoryOptimizerPage = React.lazy(() => import("./app/zion-smart-inventory-optimizer/page"));
const ZionAICustomerSentimentTrackerPage = React.lazy(() => import("./app/zion-ai-customer-sentiment-tracker/page"));
const ZionSmartExpenseCategorizerPage = React.lazy(() => import("./app/zion-smart-expense-categorizer/page"));
const ZionAIVoiceAssistantProPage = React.lazy(() => import("./app/zion-ai-voice-assistant-pro/page"));
const ZionAICodeReviewerPage = React.lazy(() => import("./app/zion-ai-code-reviewer/page"));
const ZionAISocialMediaManagerPage = React.lazy(() => import("./app/zion-ai-social-media-manager/page"));
const ZionAIContractAnalyzerPage = React.lazy(() => import("./app/zion-ai-contract-analyzer/page"));
const ZionAIPerformanceOptimizerPage = React.lazy(() => import("./app/zion-ai-performance-optimizer/page"));
const ZionAICustomerChurnPredictorPage = React.lazy(() => import("./app/zion-ai-customer-churn-predictor/page"));
const ZionAISupplyChainOptimizerPage = React.lazy(() => import("./app/zion-ai-supply-chain-optimizer/page"));
const ZionAIFinancialForecasterPage = React.lazy(() => import("./app/zion-ai-financial-forecaster/page"));
const ZionAIContentModeratorPage = React.lazy(() => import("./app/zion-ai-content-moderator/page"));
const ZionAITranslatorProPage = React.lazy(() => import("./app/zion-ai-translator-pro/page"));
const ZionAIDataCleanerPage = React.lazy(() => import("./app/zion-ai-data-cleaner/page"));
const ZionAITaskSchedulerPage = React.lazy(() => import("./app/zion-ai-task-scheduler/page"));
const ZionAICustomerSupportProPage = React.lazy(() => import("./app/zion-ai-customer-support-pro/page"));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));

// Additional AI Services Pages
const AIChatbotBuilderPage = React.lazy(() => import("./app/ai-chatbot-builder/page"));
const AICodeAssistantPage = React.lazy(() => import("./app/ai-code-assistant/page"));
const AIDesignStudioPage = React.lazy(() => import("./app/ai-design-studio/page"));
const AIComputerVisionPage = React.lazy(() => import("./app/ai-computer-vision/page"));
const AIConversationalAIPage = React.lazy(() => import("./app/ai-conversational-ai/page"));
const AICRMPage = React.lazy(() => import("./app/ai-crm/page"));
const AICustomerInsightsPage = React.lazy(() => import("./app/ai-customer-insights/page"));
const AIDataVisualizationPage = React.lazy(() => import("./app/ai-data-visualization/page"));
const AIDevOpsAutomationPage = React.lazy(() => import("./app/ai-devops-automation/page"));
const AIDocumentIntelligencePage = React.lazy(() => import("./app/ai-document-intelligence/page"));

// Additional IT Services Pages
const CloudConsultingPage = React.lazy(() => import("./app/cloud-consulting/page"));
const DataCenterSolutionsPage = React.lazy(() => import("./app/data-center-solutions/page"));
const DisasterRecoveryPage = React.lazy(() => import("./app/disaster-recovery/page"));
const ITSupportPage = React.lazy(() => import("./app/it-support/page"));
const ManagedServicesPage = React.lazy(() => import("./app/managed-services/page"));
const SecurityAuditPage = React.lazy(() => import("./app/security-audit/page"));
const TechnologyConsultingPage = React.lazy(() => import("./app/technology-consulting/page"));

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
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900 flex">
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <div className="flex-1 flex flex-col">
              <Navigation onSidebarToggle={toggleSidebar} />
              <main className="relative z-10 flex-1" id="main-content" role="main">
                <ErrorBoundary>
                  <Suspense fallback={<LoadingPage />}>
                    <Routes>
                      {/* Main Pages */}
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/micro-saas-solutions" element={<MicroSaaSSolutionsPage />} />
                      <Route path="/ai-solutions" element={<AISolutionsPage />} />
                      <Route path="/it-solutions" element={<ITSolutionsPage />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/demo" element={<DemoPage />} />
                      <Route path="/support" element={<SupportPage />} />
                      <Route path="/privacy" element={<PrivacyPage />} />
                      <Route path="/terms" element={<TermsPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/solutions" element={<SolutionsPage />} />
                      
                      {/* Service Pages */}
                      <Route path="/ai-services" element={<AIServicesPage />} />
                      <Route path="/it-services" element={<ITServicesPage />} />
                      <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                      <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                      <Route path="/case-studies" element={<CaseStudiesPage />} />
                      <Route path="/careers" element={<CareersPage />} />
                      
                      {/* 5G Solutions */}
                      <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                      <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                      <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                      <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                      <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                      <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                      <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                      <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                      <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />

                      {/* AI Services */}
                      <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                      <Route path="/ai-code-assistant" element={<AICodeAssistantPage />} />
                      <Route path="/ai-design-studio" element={<AIDesignStudioPage />} />
                      <Route path="/ai-computer-vision" element={<AIComputerVisionPage />} />
                      <Route path="/ai-conversational-ai" element={<AIConversationalAIPage />} />
                      <Route path="/ai-crm" element={<AICRMPage />} />
                      <Route path="/ai-customer-insights" element={<AICustomerInsightsPage />} />
                      <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
                      <Route path="/ai-devops-automation" element={<AIDevOpsAutomationPage />} />
                      <Route path="/ai-document-intelligence" element={<AIDocumentIntelligencePage />} />

                      {/* IT Services */}
                      <Route path="/cloud-consulting" element={<CloudConsultingPage />} />
                      <Route path="/data-center-solutions" element={<DataCenterSolutionsPage />} />
                      <Route path="/disaster-recovery" element={<DisasterRecoveryPage />} />
                      <Route path="/it-support" element={<ITSupportPage />} />
                      <Route path="/managed-services" element={<ManagedServicesPage />} />
                      <Route path="/security-audit" element={<SecurityAuditPage />} />
                      <Route path="/technology-consulting" element={<TechnologyConsultingPage />} />

                      {/* Zion AI Micro SAAS Services */}
                      <Route path="/zion-ai-video-generator" element={<ZionAIVideoGeneratorPage />} />
                      <Route path="/zion-ai-invoice-generator" element={<ZionAIInvoiceGeneratorPage />} />
                      <Route path="/zion-ai-customer-insights" element={<ZionAICustomerInsightsPage />} />
                      <Route path="/zion-ai-email-analyzer" element={<ZionAIEmailAnalyzerPage />} />
                      <Route path="/zion-smart-inventory-optimizer" element={<ZionSmartInventoryOptimizerPage />} />
                      <Route path="/zion-ai-customer-sentiment-tracker" element={<ZionAICustomerSentimentTrackerPage />} />
                      <Route path="/zion-smart-expense-categorizer" element={<ZionSmartExpenseCategorizerPage />} />
                      <Route path="/zion-ai-voice-assistant-pro" element={<ZionAIVoiceAssistantProPage />} />
                      <Route path="/zion-ai-code-reviewer" element={<ZionAICodeReviewerPage />} />
                      <Route path="/zion-ai-social-media-manager" element={<ZionAISocialMediaManagerPage />} />
                      <Route path="/zion-ai-contract-analyzer" element={<ZionAIContractAnalyzerPage />} />
                      <Route path="/zion-ai-performance-optimizer" element={<ZionAIPerformanceOptimizerPage />} />
                      <Route path="/zion-ai-customer-churn-predictor" element={<ZionAICustomerChurnPredictorPage />} />
                      <Route path="/zion-ai-supply-chain-optimizer" element={<ZionAISupplyChainOptimizerPage />} />
                      <Route path="/zion-ai-financial-forecaster" element={<ZionAIFinancialForecasterPage />} />
                      <Route path="/zion-ai-content-moderator" element={<ZionAIContentModeratorPage />} />
                      <Route path="/zion-ai-translator-pro" element={<ZionAITranslatorProPage />} />
                      <Route path="/zion-ai-data-cleaner" element={<ZionAIDataCleanerPage />} />
                      <Route path="/zion-ai-task-scheduler" element={<ZionAITaskSchedulerPage />} />
                      <Route path="/zion-ai-customer-support-pro" element={<ZionAICustomerSupportProPage />} />

                      {/* Catch all route */}
                      <Route path="*" element={
                        <div className="min-h-screen flex items-center justify-center bg-slate-900">
                          <div className="text-center">
                            <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                            <p className="text-gray-300 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
                            <a href="/" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                              Go Home
                            </a>
                          </div>
                        </div>
                      } />
                    </Routes>
                  </Suspense>
                </ErrorBoundary>
              </main>
              <Footer />
            </div>
            <PerformanceMonitor />
            <AccessibilityEnhancer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;