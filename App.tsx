import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import "./app/styles/accessibility-enhanced.css";
import EnhancedFuturisticNavigation from "./app/components/EnhancedFuturisticNavigation";
import EnhancedFuturisticFooter from "./app/components/EnhancedFuturisticFooter";
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
import EnhancedFuturisticBackground from "./app/components/EnhancedFuturisticBackground";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import EnhancedSEO from "./app/components/EnhancedSEO";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));

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
const AIBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AIAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AIComputerVisionPage = React.lazy(() => import("./app/ai-computer-vision/page"));
const AIConversationalAIPage = React.lazy(() => import("./app/ai-conversational-ai/page"));
const AICRMPage = React.lazy(() => import("./app/ai-crm/page"));
const AICustomerInsightsPage = React.lazy(() => import("./app/ai-customer-insights/page"));
const AIDataVisualizationPage = React.lazy(() => import("./app/ai-data-visualization/page"));
const AIDevOpsAutomationPage = React.lazy(() => import("./app/ai-devops-automation/page"));
const AIDocumentIntelligencePage = React.lazy(() => import("./app/ai-document-intelligence/page"));

// IT Services Pages
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const CustomSoftwarePage = React.lazy(() => import("./app/custom-software/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));

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
const MicroSaaSServicesPage = React.lazy(() => import("./app/micro-saas/page"));
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

// Zion Branded Micro SAAS Services
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionContentStudioPage = React.lazy(() => import("./app/zion-content-studio/page"));

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
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.log('Zion Tech Group App initialized with enhanced features');
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
                      <EnhancedFuturisticBackground theme="cyber" intensity="medium">
                        <EnhancedFuturisticNavigation />
                        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                        <Breadcrumb />
                        
                        <main className="relative z-10" id="main-content" role="main">
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
                              <Route path="/ai-business-intelligence" element={<AIBusinessIntelligencePage />} />
                              <Route path="/ai-automation" element={<AIAutomationPage />} />
                              <Route path="/ai-computer-vision" element={<AIComputerVisionPage />} />
                              <Route path="/ai-conversational-ai" element={<AIConversationalAIPage />} />
                              <Route path="/ai-crm" element={<AICRMPage />} />
                              <Route path="/ai-customer-insights" element={<AICustomerInsightsPage />} />
                              <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
                              <Route path="/ai-devops-automation" element={<AIDevOpsAutomationPage />} />
                              <Route path="/ai-document-intelligence" element={<AIDocumentIntelligencePage />} />

                              {/* IT Services */}
                              <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                              <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                              <Route path="/web-development" element={<WebDevelopmentPage />} />
                              <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                              <Route path="/database-management" element={<DatabaseManagementPage />} />
                              <Route path="/custom-software" element={<CustomSoftwarePage />} />
                              <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />

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
                              <Route path="/micro-saas" element={<MicroSaaSServicesPage />} />
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

                              {/* Zion Branded Micro SAAS Services */}
                              <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                              <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                              <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                              <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
                            </Routes>
                          </Suspense>
                        </main>
                        
                        <EnhancedFuturisticFooter />
                      </EnhancedFuturisticBackground>
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