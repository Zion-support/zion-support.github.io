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
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedSEO from "./app/components/EnhancedSEO";
import ImprovedAccessibility from "./app/components/ImprovedAccessibility";
import ImprovedPerformanceMonitor from "./app/components/ImprovedPerformanceMonitor";

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
<<<<<<< HEAD
=======
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
>>>>>>> cursor/analyze-improve-and-deploy-application-30da

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

// IT Services Pages
const CloudMigrationPage = React.lazy(() => import("./app/cloud-migration/page"));
const DevOpsServicesPage = React.lazy(() => import("./app/devops/page"));
const ITConsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const NetworkSecurityPage = React.lazy(() => import("./app/network-security/page"));
const SoftwareDevelopmentPage = React.lazy(() => import("./app/custom-software/page"));
const SystemIntegrationPage = React.lazy(() => import("./app/system-integration/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));

// 5G Services Pages
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));

// Micro SAAS Services Pages
const MicroSaaSServicesPage = React.lazy(() => import("./app/zion-content-studio/page"));
const ProjectManagementToolPage = React.lazy(() => import("./app/project-management-pro/page"));
const CustomerRelationshipManagerPage = React.lazy(() => import("./app/zion-ai-crm-pro/page"));
const InventoryManagementSystemPage = React.lazy(() => import("./app/zion-inventory-smart/page"));
const FinancialReportingToolPage = React.lazy(() => import("./app/ai-financial-analytics-pro/page"));
const EmployeeTimeTrackerPage = React.lazy(() => import("./app/zion-performance-monitor/page"));
const SocialMediaSchedulerPage = React.lazy(() => import("./app/zion-ai-marketing-automation/page"));
const EmailMarketingPlatformPage = React.lazy(() => import("./app/zion-email-automation/page"));
const WebsiteAnalyticsToolPage = React.lazy(() => import("./app/data-analytics/page"));
const TaskAutomationWorkflowPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// New Innovative Micro SAAS Services
<<<<<<< HEAD
const AIPoweredEmailAnalyzerPage = React.lazy(() => import("./app/zion-ai-email-assistant/page"));
const SmartInventoryOptimizerPage = React.lazy(() => import("./app/zion-inventory-smart/page"));
const AICustomerSentimentTrackerPage = React.lazy(() => import("./app/ai-customer-sentiment-tracker/page"));
const SmartExpenseCategorizerPage = React.lazy(() => import("./app/ai-financial-crime-detection-pro/page"));
=======
const ZionAIVideoGeneratorPage = React.lazy(() => import("./app/zion-ai-video-generator/page"));
const ZionAIInvoiceGeneratorPage = React.lazy(() => import("./app/zion-ai-invoice-generator/page"));
const ZionAICustomerInsightsPage = React.lazy(() => import("./app/zion-ai-customer-insights/page"));
const ZionAIVoiceAssistantProPage = React.lazy(() => import("./app/zion-ai-voice-assistant-pro/page"));
const ZionAICodeReviewerPage = React.lazy(() => import("./app/zion-ai-code-reviewer/page"));
const ZionAIContractAnalyzerPage = React.lazy(() => import("./app/zion-ai-contract-analyzer/page"));
const ZionAISupplyChainOptimizerPage = React.lazy(() => import("./app/zion-ai-supply-chain-optimizer/page"));
const ZionAITranslatorProPage = React.lazy(() => import("./app/zion-ai-translator-pro/page"));
const ZionAIDataCleanerPage = React.lazy(() => import("./app/zion-ai-data-cleaner/page"));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));

<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-c573
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-application-30da

  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <ImprovedErrorBoundary>
      <GlobalErrorBoundary>
        <EnhancedErrorBoundary>
          <HelmetProvider>
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
                              
                              <main id="main-content" role="main" className="relative z-10">
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
=======
    <HelmetProvider>
      <ImprovedErrorBoundary>
        <AnalyticsProvider>
          <ImprovedPerformanceMonitor showDetails={process.env.NODE_ENV === 'development'}>
            <WebVitalsTracker>
              <ImprovedAccessibility>
                <Router>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                    <FuturisticBackground>
                      <Navigation onSidebarToggle={toggleSidebar} />
                      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                      <Breadcrumb />
                      
                      <main className="relative z-10" id="main-content" role="main">
                        <Suspense fallback={<LoadingPage />}>
                          <Routes>
=======
    <GlobalErrorBoundary>
      <EnhancedErrorBoundary>
        <HelmetProvider>
          <AnalyticsProvider>
            <PerformanceMonitor>
              <WebVitalsTracker>
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
>>>>>>> cursor/analyze-improve-and-deploy-application-30da
                                {/* Main Pages */}
                                <Route path="/" element={<HomePage />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/services" element={<ServicesPage />} />
<<<<<<< HEAD
                                <Route path="/blog" element={<BlogPage />} />
                                <Route path="/demo" element={<DemoPage />} />
                                <Route path="/privacy" element={<PrivacyPage />} />
                                <Route path="/terms" element={<TermsPage />} />
                                <Route path="/ai-services" element={<AIServicesPage />} />
                                <Route path="/micro-saas" element={<MicroSaasPage />} />
                                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                                <Route path="/tutorials" element={<TutorialsPage />} />
                                <Route path="/demo" element={<DemoPage />} />
                                <Route path="/support" element={<SupportPage />} />
>>>>>>> cursor/analyze-improve-and-deploy-application-c573

                                    {/* AI Services */}
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

                                    {/* IT Services */}
                                    <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                                    <Route path="/devops-services" element={<DevOpsServicesPage />} />
                                    <Route path="/it-consulting" element={<ITConsultingPage />} />
                                    <Route path="/network-security" element={<NetworkSecurityPage />} />
                                    <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
                                    <Route path="/system-integration" element={<SystemIntegrationPage />} />
                                    <Route path="/web-development" element={<WebDevelopmentPage />} />

                                    {/* 5G Services */}
                                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                                    <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                                    <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                                    <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                                    <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                                    <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                                    <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                                    <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                                    <Route path="/5g-implementation" element={<FiveGImplementationPage />} />

                                    {/* Micro SAAS Services */}
                                    <Route path="/micro-saas-services" element={<MicroSaaSServicesPage />} />
                                    <Route path="/project-management-tool" element={<ProjectManagementToolPage />} />
                                    <Route path="/customer-relationship-manager" element={<CustomerRelationshipManagerPage />} />
                                    <Route path="/inventory-management-system" element={<InventoryManagementSystemPage />} />
                                    <Route path="/financial-reporting-tool" element={<FinancialReportingToolPage />} />
                                    <Route path="/employee-time-tracker" element={<EmployeeTimeTrackerPage />} />
                                    <Route path="/social-media-scheduler" element={<SocialMediaSchedulerPage />} />
                                    <Route path="/email-marketing-platform" element={<EmailMarketingPlatformPage />} />
                                    <Route path="/website-analytics-tool" element={<WebsiteAnalyticsToolPage />} />
                                    <Route path="/task-automation-workflow" element={<TaskAutomationWorkflowPage />} />

<<<<<<< HEAD
                                    {/* New Innovative Micro SAAS Services */}
                                    <Route path="/ai-powered-email-analyzer" element={<AIPoweredEmailAnalyzerPage />} />
                                    <Route path="/smart-inventory-optimizer" element={<SmartInventoryOptimizerPage />} />
                                    <Route path="/ai-customer-sentiment-tracker" element={<AICustomerSentimentTrackerPage />} />
                                    <Route path="/smart-expense-categorizer" element={<SmartExpenseCategorizerPage />} />

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
          </HelmetProvider>
        </EnhancedErrorBoundary>
      </GlobalErrorBoundary>
    </ImprovedErrorBoundary>
  );
=======
                                {/* 5G Services */}
=======
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
                                <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                                <Route path="/ai-automation" element={<AiAutomationPage />} />
                                <Route path="/ai-business-intelligence" element={<AiBusinessIntelligencePage />} />
                                <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                                <Route path="/ai-customer-service" element={<AiCustomerServicePage />} />
                                <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                                <Route path="/ai-email-automation" element={<AiEmailAutomationPage />} />
                                <Route path="/ai-fraud-detection" element={<AiFraudDetectionPage />} />
                                <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                                <Route path="/ai-marketing" element={<AiMarketingPage />} />
                                <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
                                <Route path="/ai-project-management" element={<AiProjectManagementPage />} />
                                <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
                                <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
                                <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
                                
                                {/* IT Services Routes */}
                                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                                <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                                <Route path="/web-development" element={<WebDevelopmentPage />} />
                                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                                <Route path="/database-management" element={<DatabaseManagementPage />} />
                                <Route path="/custom-software" element={<CustomSoftwarePage />} />
                                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                                
                                {/* Micro SAAS Routes */}
                                <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                                <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                                <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                                <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />

                                {/* New Innovative Micro SAAS Services */}
                                <Route path="/zion-ai-video-generator" element={<ZionAIVideoGeneratorPage />} />
                                <Route path="/zion-ai-invoice-generator" element={<ZionAIInvoiceGeneratorPage />} />
                                <Route path="/zion-ai-customer-insights" element={<ZionAICustomerInsightsPage />} />
                                <Route path="/zion-ai-voice-assistant-pro" element={<ZionAIVoiceAssistantProPage />} />
                                <Route path="/zion-ai-code-reviewer" element={<ZionAICodeReviewerPage />} />
                                <Route path="/zion-ai-contract-analyzer" element={<ZionAIContractAnalyzerPage />} />
                                <Route path="/zion-ai-supply-chain-optimizer" element={<ZionAISupplyChainOptimizerPage />} />
                                <Route path="/zion-ai-translator-pro" element={<ZionAITranslatorProPage />} />
                                <Route path="/zion-ai-data-cleaner" element={<ZionAIDataCleanerPage />} />
                                
                                {/* 5G Solutions Routes */}
>>>>>>> cursor/analyze-improve-and-deploy-application-30da
                                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                                <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />

<<<<<<< HEAD
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
                </ImprovedAccessibility>
              </WebVitalsTracker>
            </ImprovedPerformanceMonitor>
          </AnalyticsProvider>
        </ImprovedErrorBoundary>
      </HelmetProvider>
    );
>>>>>>> cursor/analyze-improve-and-deploy-application-c573
=======
                                {/* Additional AI Services Routes */}
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

                                {/* Additional IT Services Routes */}
                                <Route path="/cloud-consulting" element={<CloudConsultingPage />} />
                                <Route path="/data-center-solutions" element={<DataCenterSolutionsPage />} />
                                <Route path="/disaster-recovery" element={<DisasterRecoveryPage />} />
                                <Route path="/it-support" element={<ITSupportPage />} />
                                <Route path="/managed-services" element={<ManagedServicesPage />} />
                                <Route path="/security-audit" element={<SecurityAuditPage />} />
                                <Route path="/technology-consulting" element={<TechnologyConsultingPage />} />

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
                        </FuturisticBackground>
                      </div>
                    </Router>
                  </CoreWebVitals>
                </AccessibilityEnhancer>
              </WebVitalsTracker>
            </PerformanceMonitor>
          </AnalyticsProvider>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
  );
>>>>>>> cursor/analyze-improve-and-deploy-application-30da
}

export default App;
