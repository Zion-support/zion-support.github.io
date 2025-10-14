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
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import EnhancedSEO from "./app/components/EnhancedSEO";
import ImprovedErrorBoundary from "./app/components/ImprovedErrorBoundary";
import ImprovedAccessibility from "./app/components/ImprovedAccessibility";
import ImprovedPerformanceMonitor from "./app/components/ImprovedPerformanceMonitor";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));

// AI Services
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics-pro/page"));
const AIDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));
const AIMarketingAutomationPage = React.lazy(() => import("./app/ai-marketing-automation/page"));
const AIPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AIVoiceAssistantPage = React.lazy(() => import("./app/ai-voice-assistant/page"));
const AIWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// IT Services
const CloudMigrationPage = React.lazy(() => import("./app/cloud-migration/page"));
const DevOpsServicesPage = React.lazy(() => import("./app/devops-services/page"));
const ITConsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const NetworkSecurityPage = React.lazy(() => import("./app/network-security/page"));
const SoftwareDevelopmentPage = React.lazy(() => import("./app/software-development/page"));
const SystemIntegrationPage = React.lazy(() => import("./app/system-integration/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));

// Zion Services
const ZionAnalyticsPage = React.lazy(() => import("./app/zion-analytics/page"));
const ZionAIPlatformPage = React.lazy(() => import("./app/zion-ai-platform/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudInfrastructurePage = React.lazy(() => import("./app/zion-cloud-infrastructure/page"));

// 5G Solutions
const FiveGNetworkOptimizationPage = React.lazy(() => import("./app/5g-network-optimization/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIoTIntegrationPage = React.lazy(() => import("./app/5g-iot-integration/page"));

// Micro SAAS
const ProjectManagementPage = React.lazy(() => import("./app/project-management/page"));
const CustomerRelationshipPage = React.lazy(() => import("./app/customer-relationship/page"));
const InventoryManagementPage = React.lazy(() => import("./app/inventory-management/page"));
const FinancialManagementPage = React.lazy(() => import("./app/financial-management/page"));
const EmployeeManagementPage = React.lazy(() => import("./app/employee-management/page"));
const SocialMediaManagementPage = React.lazy(() => import("./app/social-media-management/page"));
const EmailMarketingPage = React.lazy(() => import("./app/email-marketing/page"));
const WebsiteBuilderPage = React.lazy(() => import("./app/website-builder/page"));
const TaskManagementPage = React.lazy(() => import("./app/task-management/page"));

// Additional AI Services
const AIAutomationPlatformPage = React.lazy(() => import("./app/ai-automation-platform/page"));
const AICustomerSentimentTrackerPage = React.lazy(() => import("./app/ai-customer-sentiment-tracker/page"));
const AIFinancialAnalysisPage = React.lazy(() => import("./app/ai-financial-analysis/page"));
const AIHealthcareDiagnosticsPage = React.lazy(() => import("./app/ai-healthcare-diagnostics/page"));
const AIHolographicWorkspacePage = React.lazy(() => import("./app/ai-holographic-workspace/page"));
const AIHRRecruitmentProPage = React.lazy(() => import("./app/ai-hr-recruitment-pro/page"));
const AIImageRecognitionProPage = React.lazy(() => import("./app/ai-image-recognition-pro/page"));
const AIPoweredDevOpsPage = React.lazy(() => import("./app/ai-powered-devops/page"));
const AIPoweredEmailAnalyzerPage = React.lazy(() => import("./app/ai-powered-email-analyzer/page"));
const AIQuantumComputingPage = React.lazy(() => import("./app/ai-quantum-computing/page"));
const AISupplyChainOptimizerPage = React.lazy(() => import("./app/ai-supply-chain-optimizer/page"));
const AITranslationServicePage = React.lazy(() => import("./app/ai-translation-service/page"));

// Other pages
const BlockchainWeb3Page = React.lazy(() => import("./app/blockchain-web3/page"));
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));

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
      // Preload critical resources
      const preloadCriticalResources = () => {
        const criticalImages = [
          '/images/hero-bg.jpg',
          '/images/logo.png',
        ];
        
        criticalImages.forEach(src => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = src;
          document.head.appendChild(link);
        });
      };

      preloadCriticalResources();
    }
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <EnhancedErrorBoundary>
          <ImprovedErrorBoundary>
            <AnalyticsProvider>
              <PerformanceMonitor>
                <WebVitalsTracker>
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
                                {/* Main Pages */}
                                <Route path="/" element={<HomePage />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/services" element={<ServicesPage />} />
                                <Route path="/blog" element={<BlogPage />} />
                                <Route path="/privacy" element={<PrivacyPage />} />
                                <Route path="/terms" element={<TermsPage />} />
                                <Route path="/micro-saas" element={<MicroSaasPage />} />
                                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                                <Route path="/tutorials" element={<TutorialsPage />} />
                                <Route path="/support" element={<SupportPage />} />

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

                                {/* Zion Services */}
                                <Route path="/zion-analytics" element={<ZionAnalyticsPage />} />
                                <Route path="/zion-ai-platform" element={<ZionAIPlatformPage />} />
                                <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                                <Route path="/zion-cloud-infrastructure" element={<ZionCloudInfrastructurePage />} />

                                {/* 5G Solutions */}
                                <Route path="/5g-network-optimization" element={<FiveGNetworkOptimizationPage />} />
                                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                                <Route path="/5g-iot-integration" element={<FiveGIoTIntegrationPage />} />

                                {/* Micro SAAS */}
                                <Route path="/project-management" element={<ProjectManagementPage />} />
                                <Route path="/customer-relationship" element={<CustomerRelationshipPage />} />
                                <Route path="/inventory-management" element={<InventoryManagementPage />} />
                                <Route path="/financial-management" element={<FinancialManagementPage />} />
                                <Route path="/employee-management" element={<EmployeeManagementPage />} />
                                <Route path="/social-media-management" element={<SocialMediaManagementPage />} />
                                <Route path="/email-marketing" element={<EmailMarketingPage />} />
                                <Route path="/website-builder" element={<WebsiteBuilderPage />} />
                                <Route path="/task-management" element={<TaskManagementPage />} />

                                {/* Additional AI Services */}
                                <Route path="/ai-automation-platform" element={<AIAutomationPlatformPage />} />
                                <Route path="/ai-customer-sentiment-tracker" element={<AICustomerSentimentTrackerPage />} />
                                <Route path="/ai-financial-analysis" element={<AIFinancialAnalysisPage />} />
                                <Route path="/ai-healthcare-diagnostics" element={<AIHealthcareDiagnosticsPage />} />
                                <Route path="/ai-holographic-workspace" element={<AIHolographicWorkspacePage />} />
                                <Route path="/ai-hr-recruitment-pro" element={<AIHRRecruitmentProPage />} />
                                <Route path="/ai-image-recognition-pro" element={<AIImageRecognitionProPage />} />
                                <Route path="/ai-powered-devops" element={<AIPoweredDevOpsPage />} />
                                <Route path="/ai-powered-email-analyzer" element={<AIPoweredEmailAnalyzerPage />} />
                                <Route path="/ai-quantum-computing" element={<AIQuantumComputingPage />} />
                                <Route path="/ai-supply-chain-optimizer" element={<AISupplyChainOptimizerPage />} />
                                <Route path="/ai-translation-service" element={<AITranslationServicePage />} />

                                {/* Other pages */}
                                <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
                                <Route path="/case-studies" element={<CaseStudiesPage />} />
                                <Route path="/careers" element={<CareersPage />} />
                              </Routes>
                            </Suspense>
                          </main>
                          
                          <Footer />
                        </FuturisticBackground>
                      </div>
                    </Router>
                  </CoreWebVitals>
                </WebVitalsTracker>
              </PerformanceMonitor>
            </AnalyticsProvider>
          </ImprovedErrorBoundary>
        </EnhancedErrorBoundary>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
}

export default App;