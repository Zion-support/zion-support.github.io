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
import ImprovedErrorBoundary from "./app/components/ImprovedErrorBoundary";
import ImprovedAccessibility from "./app/components/ImprovedAccessibility";
import ImprovedPerformanceMonitor from "./app/components/ImprovedPerformanceMonitor";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));

// AI Services Pages
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AIDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));
const AIMarketingAutomationPage = React.lazy(() => import("./app/ai-marketing-automation/page"));
const AIPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AIVoiceAssistantPage = React.lazy(() => import("./app/ai-voice-assistant/page"));
const AIWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// Zion Services
const ZionAnalyticsPage = React.lazy(() => import("./app/zion-analytics/page"));
const ZionAIPlatformPage = React.lazy(() => import("./app/zion-ai-platform/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));

// 5G Services
const FiveGNetworkOptimizationPage = React.lazy(() => import("./app/5g-network-optimization/page"));
const FiveGInfrastructurePage = React.lazy(() => import("./app/5g-infrastructure/page"));

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
// New Innovative Micro SAAS Services
const AIPoweredEmailAnalyzerPage = React.lazy(() => import("./app/zion-ai-email-assistant/page"));
const AICustomerSentimentTrackerPage = React.lazy(() => import("./app/ai-customer-sentiment-tracker/page"));
const SmartExpenseCategorizerPage = React.lazy(() => import("./app/ai-financial-crime-detection-pro/page"));
const ZionAIVideoGeneratorPage = React.lazy(() => import("./app/zion-ai-video-generator/page"));
const ZionAIInvoiceGeneratorPage = React.lazy(() => import("./app/zion-ai-invoice-generator/page"));
const ZionAICustomerInsightsPage = React.lazy(() => import("./app/zion-ai-customer-insights/page"));
const ZionAIVoiceAssistantProPage = React.lazy(() => import("./app/zion-ai-voice-assistant-pro/page"));
const ZionAICodeReviewerPage = React.lazy(() => import("./app/zion-ai-code-reviewer/page"));
const ZionAIContractAnalyzerPage = React.lazy(() => import("./app/zion-ai-contract-analyzer/page"));
const ZionAISupplyChainOptimizerPage = React.lazy(() => import("./app/zion-ai-supply-chain-optimizer/page"));
const ZionAITranslatorProPage = React.lazy(() => import("./app/zion-ai-translator-pro/page"));
const ZionAIDataCleanerPage = React.lazy(() => import("./app/zion-ai-data-cleaner/page"));

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
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <ImprovedErrorBoundary>
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
                                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                                  <Route path="/careers" element={<CareersPage />} />

                                  {/* AI Services */}
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
                                  <Route path="/devops" element={<DevOpsServicesPage />} />
                                  <Route path="/it-consulting" element={<ITConsultingPage />} />
                                  <Route path="/network-security" element={<NetworkSecurityPage />} />
                                  <Route path="/custom-software" element={<SoftwareDevelopmentPage />} />
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
                                  <Route path="/zion-content-studio" element={<MicroSaaSServicesPage />} />
                                  <Route path="/project-management-pro" element={<ProjectManagementToolPage />} />
                                  <Route path="/zion-ai-crm-pro" element={<CustomerRelationshipManagerPage />} />
                                  <Route path="/zion-inventory-smart" element={<InventoryManagementSystemPage />} />
                                  <Route path="/ai-financial-analytics-pro" element={<FinancialReportingToolPage />} />
                                  <Route path="/zion-performance-monitor" element={<EmployeeTimeTrackerPage />} />
                                  <Route path="/zion-ai-marketing-automation" element={<SocialMediaSchedulerPage />} />
                                  <Route path="/zion-email-automation" element={<EmailMarketingPlatformPage />} />
                                  <Route path="/data-analytics" element={<WebsiteAnalyticsToolPage />} />

                                  {/* New Innovative Micro SAAS Services */}
                                  <Route path="/zion-ai-email-assistant" element={<AIPoweredEmailAnalyzerPage />} />
                                  <Route path="/ai-customer-sentiment-tracker" element={<AICustomerSentimentTrackerPage />} />
                                  <Route path="/ai-financial-crime-detection-pro" element={<SmartExpenseCategorizerPage />} />
                                  <Route path="/zion-ai-video-generator" element={<ZionAIVideoGeneratorPage />} />
                                  <Route path="/zion-ai-invoice-generator" element={<ZionAIInvoiceGeneratorPage />} />
                                  <Route path="/zion-ai-customer-insights" element={<ZionAICustomerInsightsPage />} />
                                  <Route path="/zion-ai-voice-assistant-pro" element={<ZionAIVoiceAssistantProPage />} />
                                  <Route path="/zion-ai-code-reviewer" element={<ZionAICodeReviewerPage />} />
                                  <Route path="/zion-ai-contract-analyzer" element={<ZionAIContractAnalyzerPage />} />
                                  <Route path="/zion-ai-supply-chain-optimizer" element={<ZionAISupplyChainOptimizerPage />} />
                                  <Route path="/zion-ai-translator-pro" element={<ZionAITranslatorProPage />} />
                                  <Route path="/zion-ai-data-cleaner" element={<ZionAIDataCleanerPage />} />

                                  {/* Additional AI Services */}
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

                                  {/* Additional IT Services */}
                                  <Route path="/cloud-consulting" element={<CloudConsultingPage />} />
                                  <Route path="/data-center-solutions" element={<DataCenterSolutionsPage />} />
                                  <Route path="/disaster-recovery" element={<DisasterRecoveryPage />} />
                                  <Route path="/it-support" element={<ITSupportPage />} />
                                  <Route path="/managed-services" element={<ManagedServicesPage />} />
                                  <Route path="/security-audit" element={<SecurityAuditPage />} />
                                  <Route path="/technology-consulting" element={<TechnologyConsultingPage />} />
                                </Routes>
                              </Suspense>
                            </main>
                            
                            <Footer />
                            <EnhancedSEO />
                            <ImprovedAccessibility />
                            <ImprovedPerformanceMonitor />
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
    </ImprovedErrorBoundary>
  );
}

export default App;