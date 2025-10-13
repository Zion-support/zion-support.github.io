import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "./app/components/Navigation";
import Sidebar from "./app/components/Sidebar";
import Footer from "./app/components/Footer";
import LoadingPage from "./app/components/Loading";
import HomePage from "./app/page";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import PerformanceOptimizer from "./app/components/PerformanceOptimizer";
import EnhancedAnalytics from "./app/components/EnhancedAnalytics";

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
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const NotFoundPage = React.lazy(() => import("./app/404/page"));

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
const ZionAIAnalyticsProPage = React.lazy(() => import("./app/zion-ai-analytics-pro/page"));
const ZionAICRMProPage = React.lazy(() => import("./app/zion-ai-crm-pro/page"));
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

// New Innovative Services
const ZionAIDocumentAnalyzerPage = React.lazy(() => import("./app/zion-ai-document-analyzer/page"));
const ZionAIProjectManagerProPage = React.lazy(() => import("./app/zion-ai-project-manager-pro/page"));
const ZionAICybersecuritySuiteProPage = React.lazy(() => import("./app/zion-ai-cybersecurity-suite-pro/page"));

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
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  return (
    <HelmetProvider>
      <EnhancedErrorBoundary>
        <AnalyticsProvider>
          <EnhancedAnalytics>
            <PerformanceOptimizer>
              <PerformanceMonitor showDetails={process.env.NODE_ENV === 'development'} />
              <WebVitalsTracker>
                <AccessibilityEnhancer>
                  <Router>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                      {/* Skip to main content link */}
                      <a href="#main-content" className="skip-link">
                        Skip to main content
                      </a>
                      
                      <FuturisticBackground>
                        <Navigation onSidebarToggle={toggleSidebar} />
                        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                        <Breadcrumb />
                        
                        <main id="main-content" role="main" className="relative z-10">
                          <Suspense fallback={<LoadingPage message="Loading Zion Tech Group..." />}>
                            <Routes>
                            {/* Main Pages */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/ai-services" element={<AIServicesPage />} />
                            <Route path="/micro-saas" element={<MicroSaasPage />} />
                            <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                            <Route path="/tutorials" element={<TutorialsPage />} />
                            <Route path="/demo" element={<DemoPage />} />
                            <Route path="/consultation" element={<ConsultationPage />} />
                            <Route path="/support" element={<SupportPage />} />

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

                            {/* IT Services Routes */}
                            <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                            <Route path="/devops" element={<DevOpsServicesPage />} />
                            <Route path="/it-consulting" element={<ITConsultingPage />} />
                            <Route path="/network-security" element={<NetworkSecurityPage />} />
                            <Route path="/custom-software" element={<SoftwareDevelopmentPage />} />
                            <Route path="/system-integration" element={<SystemIntegrationPage />} />
                            <Route path="/web-development" element={<WebDevelopmentPage />} />

                            {/* 5G Services Routes */}
                            <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                            <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                            <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                            <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                            <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                            <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                            <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                            <Route path="/5g-implementation" element={<FiveGImplementationPage />} />

                            {/* Micro SAAS Services Routes */}
                            <Route path="/zion-content-studio" element={<MicroSaaSServicesPage />} />
                            <Route path="/project-management-pro" element={<ProjectManagementToolPage />} />
                            <Route path="/zion-ai-crm-pro" element={<CustomerRelationshipManagerPage />} />
                            <Route path="/zion-inventory-smart" element={<InventoryManagementSystemPage />} />
                            <Route path="/ai-financial-analytics-pro" element={<FinancialReportingToolPage />} />
                            <Route path="/zion-performance-monitor" element={<EmployeeTimeTrackerPage />} />
                            <Route path="/zion-ai-marketing-automation" element={<SocialMediaSchedulerPage />} />
                            <Route path="/zion-email-automation" element={<EmailMarketingPlatformPage />} />
                            <Route path="/data-analytics" element={<WebsiteAnalyticsToolPage />} />
                            <Route path="/ai-workflow-automation" element={<TaskAutomationWorkflowPage />} />

                            {/* New Innovative Micro SAAS Services Routes */}
                            <Route path="/zion-ai-analytics-pro" element={<ZionAIAnalyticsProPage />} />
                            <Route path="/zion-ai-crm-pro" element={<ZionAICRMProPage />} />
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

                            {/* New Innovative Services Routes */}
                            <Route path="/zion-ai-document-analyzer" element={<ZionAIDocumentAnalyzerPage />} />
                            <Route path="/zion-ai-project-manager-pro" element={<ZionAIProjectManagerProPage />} />
                            <Route path="/zion-ai-cybersecurity-suite-pro" element={<ZionAICybersecuritySuiteProPage />} />
                            
                            {/* 404 Route - Must be last */}
                            <Route path="*" element={<NotFoundPage />} />
                          </Routes>
                          </Suspense>
                        </main>
                        
                        <Footer />
                      </FuturisticBackground>
                    </div>
                  </Router>
                </AccessibilityEnhancer>
              </WebVitalsTracker>
            </PerformanceOptimizer>
          </EnhancedAnalytics>
        </AnalyticsProvider>
      </EnhancedErrorBoundary>
    </HelmetProvider>
  );
}

export default App;