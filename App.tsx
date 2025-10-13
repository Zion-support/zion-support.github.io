import React, { Suspense, useEffect } from "react";
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
=======
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
>>>>>>> cursor/analyze-improve-and-deploy-application-8b3d
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import AdvancedPerformanceMonitor from "./app/components/AdvancedPerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
<<<<<<< HEAD
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import LoadingPageEnhanced from "./app/components/EnhancedLoading";
<<<<<<< HEAD
=======
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import ImprovedErrorBoundary from "./app/components/ImprovedErrorBoundary";
import ImprovedLoading from "./app/components/ImprovedLoading";
import PerformanceOptimizer from "./app/components/PerformanceOptimizer";
import Breadcrumb from "./app/components/Breadcrumb";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedSEO from "./app/components/EnhancedSEO";
import { performanceOptimizer } from "./utils/performanceUtils";
import { accessibilityManager } from "./utils/accessibilityUtils";
>>>>>>> cursor/analyze-improve-and-deploy-application-2b18
=======
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedSEO from "./app/components/EnhancedSEO";
>>>>>>> cursor/analyze-improve-and-deploy-application-da10
=======
import LoadingState from "./app/components/EnhancedLoading";
>>>>>>> cursor/analyze-improve-and-deploy-application-0571
=======
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedSEO from "./app/components/EnhancedSEO";
>>>>>>> cursor/analyze-improve-and-deploy-application-8b3d

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
<<<<<<< HEAD
=======
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
>>>>>>> cursor/analyze-improve-and-deploy-application-da10
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
const DevOpsServicesPage = React.lazy(() => import("./app/devops-services/page"));
const ITConsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const NetworkSecurityPage = React.lazy(() => import("./app/network-security/page"));
const SoftwareDevelopmentPage = React.lazy(() => import("./app/software-development/page"));
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
const MicroSaaSServicesPage = React.lazy(() => import("./app/micro-saas-services/page"));
const ProjectManagementToolPage = React.lazy(() => import("./app/project-management-tool/page"));
const CustomerRelationshipManagerPage = React.lazy(() => import("./app/customer-relationship-manager/page"));
const InventoryManagementSystemPage = React.lazy(() => import("./app/inventory-management-system/page"));
const FinancialReportingToolPage = React.lazy(() => import("./app/financial-reporting-tool/page"));
const EmployeeTimeTrackerPage = React.lazy(() => import("./app/employee-time-tracker/page"));
const SocialMediaSchedulerPage = React.lazy(() => import("./app/social-media-scheduler/page"));
const EmailMarketingPlatformPage = React.lazy(() => import("./app/email-marketing-platform/page"));
const WebsiteAnalyticsToolPage = React.lazy(() => import("./app/website-analytics-tool/page"));
const TaskAutomationWorkflowPage = React.lazy(() => import("./app/task-automation-workflow/page"));

// New Innovative Micro SAAS Services
const AIPoweredEmailAnalyzerPage = React.lazy(() => import("./app/ai-powered-email-analyzer/page"));
const SmartInventoryOptimizerPage = React.lazy(() => import("./app/smart-inventory-optimizer/page"));
const AICustomerSentimentTrackerPage = React.lazy(() => import("./app/ai-customer-sentiment-tracker/page"));
const SmartExpenseCategorizerPage = React.lazy(() => import("./app/smart-expense-categorizer/page"));

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-da10
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-8b3d
// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AiAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AiBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AiContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AiCustomerServicePage = React.lazy(() => import("./app/ai-customer-service/page"));
const AiDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AiEmailAutomationPage = React.lazy(() => import("./app/ai-email-automation/page"));
const AiFraudDetectionPage = React.lazy(() => import("./app/ai-fraud-detection/page"));
const AiHealthcarePage = React.lazy(() => import("./app/ai-healthcare/page"));
const AiMarketingPage = React.lazy(() => import("./app/ai-marketing/page"));
const AiPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AiProjectManagementPage = React.lazy(() => import("./app/ai-project-management/page"));
const AiRecommendationEnginePage = React.lazy(() => import("./app/ai-recommendation-engine/page"));
const AiSalesAutomationPage = React.lazy(() => import("./app/ai-sales-automation/page"));
const AiWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// IT Service Pages
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const CustomSoftwarePage = React.lazy(() => import("./app/custom-software/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionAiCrmProPage = React.lazy(() => import("./app/zion-ai-crm-pro/page"));
const ZionAiMarketingAutomationProPage = React.lazy(() => import("./app/zion-ai-marketing-automation-pro/page"));
const ZionAiProjectManagerProPage = React.lazy(() => import("./app/zion-ai-project-manager-pro/page"));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
<<<<<<< HEAD
<<<<<<< HEAD
const FiveGIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
=======
const FiveG5gIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
>>>>>>> cursor/analyze-improve-and-deploy-application-da10
=======
const FiveG5gIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
>>>>>>> cursor/analyze-improve-and-deploy-application-8b3d

// Main App Component
>>>>>>> cursor/analyze-improve-and-deploy-application-2b18
=======
// Additional AI Services Pages
const AIChatbotBuilderPage = React.lazy(() => import("./app/ai-chatbot-builder/page"));
const AICodeAssistantPage = React.lazy(() => import("./app/ai-code-assistant/page"));
const AIDesignStudioPage = React.lazy(() => import("./app/ai-design-studio/page"));
const AIBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AIAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
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

// Additional 5G Services Pages (these are already defined above, but adding for completeness)

>>>>>>> cursor/analyze-improve-and-deploy-application-0571
function App() {
<<<<<<< HEAD
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      // Add any global initialization logic here
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  return (
<<<<<<< HEAD
    <HelmetProvider>
      <EnhancedErrorBoundary>
        <AnalyticsProvider>
          <AdvancedPerformanceMonitor showInProduction={false} enableReporting={true}>
            <WebVitalsTracker>
              <EnhancedAccessibility>
                <AccessibilityEnhancer>
                  <CoreWebVitals>
                    <Router>
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                        <FuturisticBackground />
                        <Navigation />
                        <Sidebar />
                        <Breadcrumb />
                        
                        <main className="relative z-10">
                          <Suspense fallback={<LoadingState type="loading" message="Loading page..." size="lg" />}>
                            <Routes>
                              {/* Main Pages */}
                              <Route path="/" element={<HomePage />} />
                              <Route path="/about" element={<AboutPage />} />
                              <Route path="/contact" element={<ContactPage />} />
                              <Route path="/services" element={<ServicesPage />} />
                              <Route path="/blog" element={<BlogPage />} />
                              <Route path="/privacy" element={<PrivacyPage />} />
                              <Route path="/terms" element={<TermsPage />} />

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

                              {/* New Innovative Micro SAAS Services */}
                              <Route path="/ai-powered-email-analyzer" element={<AIPoweredEmailAnalyzerPage />} />
                              <Route path="/smart-inventory-optimizer" element={<SmartInventoryOptimizerPage />} />
                              <Route path="/ai-customer-sentiment-tracker" element={<AICustomerSentimentTrackerPage />} />
                              <Route path="/smart-expense-categorizer" element={<SmartExpenseCategorizerPage />} />

                              {/* Additional AI Services Routes */}
                              <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                              <Route path="/ai-code-assistant" element={<AICodeAssistantPage />} />
                              <Route path="/ai-design-studio" element={<AIDesignStudioPage />} />
                              <Route path="/ai-business-intelligence" element={<AIBusinessIntelligencePage />} />
                              <Route path="/ai-automation" element={<AIAutomationPage />} />
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

                              {/* Additional 5G Services Routes */}
                              <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                              <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                              <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                              <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                              <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                              <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                              <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                              <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />

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
                      </div>
                    </Router>
                  </CoreWebVitals>
                </AccessibilityEnhancer>
              </EnhancedAccessibility>
            </WebVitalsTracker>
          </AdvancedPerformanceMonitor>
        </AnalyticsProvider>
      </EnhancedErrorBoundary>
    </HelmetProvider>
=======
    <ImprovedErrorBoundary>
      <GlobalErrorBoundary>
        <EnhancedErrorBoundary>
          <HelmetProvider>
            <AccessibilityEnhancer>
              <Router>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                  <FuturisticBackground>
                    <Navigation onSidebarToggle={toggleSidebar} />
                    <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                    <Breadcrumb />
                    <main id="main-content" role="main">
                      <Suspense fallback={<ImprovedLoading message="Loading Zion Tech Group..." variant="futuristic" />}>
=======
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = React.useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <GlobalErrorBoundary>
      <EnhancedErrorBoundary>
        <HelmetProvider>
          <AccessibilityEnhancer>
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <FuturisticBackground>
                  <Navigation onSidebarToggle={toggleSidebar} />
                  <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                  <Breadcrumb />
                  <main id="main-content" role="main">
                    <Suspense fallback={<LoadingPage />}>
>>>>>>> cursor/analyze-improve-and-deploy-application-da10
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/micro-saas" element={<MicroSaasPage />} />
                        <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/ai-services" element={<AIServicesPage />} />
                        <Route path="/tutorials" element={<TutorialsPage />} />
                        <Route path="/demo" element={<DemoPage />} />
                        <Route path="/support" element={<SupportPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/terms" element={<TermsPage />} />
                        <Route path="/cookies" element={<CookiesPage />} />
                        <Route path="/sitemap" element={<SitemapPage />} />
                        
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
                        <Route path="/zion-ai-crm-pro" element={<ZionAiCrmProPage />} />
                        <Route path="/zion-ai-marketing-automation-pro" element={<ZionAiMarketingAutomationProPage />} />
                        <Route path="/zion-ai-project-manager-pro" element={<ZionAiProjectManagerProPage />} />
                        
                        {/* 5G Solutions Routes */}
                        <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                        <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                        <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                        <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                        <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                        <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                        <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
<<<<<<< HEAD
<<<<<<< HEAD
                        <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />
=======
                        <Route path="/5g-iot-solutions" element={<FiveG5gIotSolutionsPage />} />
>>>>>>> cursor/analyze-improve-and-deploy-application-da10
=======
                        <Route path="/5g-iot-solutions" element={<FiveG5gIotSolutionsPage />} />
>>>>>>> cursor/analyze-improve-and-deploy-application-8b3d
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                </FuturisticBackground>
                <PerformanceMonitor />
                <WebVitalsTracker />
                <CoreWebVitals />
<<<<<<< HEAD
<<<<<<< HEAD
                <PerformanceOptimizer 
                  enableImageOptimization={true}
                  enablePreloading={true}
                  enableCaching={true}
                  enableCompression={true}
                  enableLazyLoading={true}
                />
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-da10
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-8b3d
                <EnhancedSEO 
                  title="Zion Tech Group - Advanced AI and IT Solutions"
                  description="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses."
                  keywords="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology"
                />
              </div>
              <AnalyticsProvider>
                <div>
                  <PerformanceMonitor />
                  <WebVitalsTracker />
                </div>
              </AnalyticsProvider>
            </Router>
          </AccessibilityEnhancer>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
<<<<<<< HEAD
<<<<<<< HEAD
    </ImprovedErrorBoundary>
>>>>>>> cursor/analyze-improve-and-deploy-application-2b18
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-da10
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-8b3d
  );
}

export default App;