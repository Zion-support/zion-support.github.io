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
const CareersPage = React.lazy(() => import("./app/careers/page"));
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));

// AI Services
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const AIDataAnalyticsProPage = React.lazy(() => import("./app/ai-data-analytics-pro/page"));
const AIFinancialAnalysisPage = React.lazy(() => import("./app/ai-financial-analysis/page"));
const AIHRRecruitmentProPage = React.lazy(() => import("./app/ai-hr-recruitment-pro/page"));
const AIImageRecognitionProPage = React.lazy(() => import("./app/ai-image-recognition-pro/page"));
const AIPoweredDevOpsPage = React.lazy(() => import("./app/ai-powered-devops/page"));
const AIQuantumComputingPage = React.lazy(() => import("./app/ai-quantum-computing/page"));
const AIHolographicWorkspacePage = React.lazy(() => import("./app/ai-holographic-workspace/page"));
const AIHealthcareDiagnosticsPage = React.lazy(() => import("./app/ai-healthcare-diagnostics/page"));
const AICustomerSentimentTrackerPage = React.lazy(() => import("./app/ai-customer-sentiment-tracker/page"));
const AIPoweredEmailAnalyzerPage = React.lazy(() => import("./app/ai-powered-email-analyzer/page"));
const AITranslationServicePage = React.lazy(() => import("./app/ai-translation-service/page"));
const AISupplyChainOptimizerPage = React.lazy(() => import("./app/ai-supply-chain-optimizer/page"));
const AIAutomationPlatformPage = React.lazy(() => import("./app/ai-automation-platform/page"));

// Zion Services
const ZionServicesPage = React.lazy(() => import("./app/zion-services/page"));
const ZionAIAnalyticsPage = React.lazy(() => import("./app/zion-ai-analytics/page"));
const ZionAIContentGenerationPage = React.lazy(() => import("./app/zion-ai-content-generation/page"));
const ZionAICyberSecurityPage = React.lazy(() => import("./app/zion-ai-cyber-security/page"));
const ZionAICustomerSupportPage = React.lazy(() => import("./app/zion-ai-customer-support/page"));

// 5G Services
const FiveGServicesPage = React.lazy(() => import("./app/5g-services/page"));
const FiveGNetworkOptimizationPage = React.lazy(() => import("./app/5g-network-optimization/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIoTConnectivityPage = React.lazy(() => import("./app/5g-iot-connectivity/page"));
const FiveGSmartCitiesPage = React.lazy(() => import("./app/5g-smart-cities/page"));

// IT Services
const ITServicesPage = React.lazy(() => import("./app/it-services/page"));
const DevOpsPage = React.lazy(() => import("./app/devops/page"));
const CloudComputingPage = React.lazy(() => import("./app/cloud-computing/page"));
const NetworkSecurityPage = React.lazy(() => import("./app/network-security/page"));
const SoftwareDevelopmentPage = React.lazy(() => import("./app/software-development/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));

// Micro SAAS
const MicroSAASPage = React.lazy(() => import("./app/micro-saas/page"));
const ProjectManagementPage = React.lazy(() => import("./app/project-management/page"));
const CustomerRelationshipPage = React.lazy(() => import("./app/customer-relationship/page"));
const InventoryManagementPage = React.lazy(() => import("./app/inventory-management/page"));
const FinancialManagementPage = React.lazy(() => import("./app/financial-management/page"));
const EmployeeManagementPage = React.lazy(() => import("./app/employee-management/page"));
const SocialMediaManagementPage = React.lazy(() => import("./app/social-media-management/page"));
const EmailMarketingPage = React.lazy(() => import("./app/email-marketing/page"));
const WebsiteBuilderPage = React.lazy(() => import("./app/website-builder/page"));
const TaskManagementPage = React.lazy(() => import("./app/task-management/page"));
const SmartHomePage = React.lazy(() => import("./app/smart-home/page"));
const AIPoweredAssistantPage = React.lazy(() => import("./app/ai-powered-assistant/page"));

// Other pages
const BlockchainWeb3Page = React.lazy(() => import("./app/blockchain-web3/page"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <AnalyticsProvider>
          <PerformanceMonitor>
            <WebVitalsTracker>
              <CoreWebVitals>
                <AccessibilityEnhancer>
                  <ImprovedAccessibility>
                    <ImprovedPerformanceMonitor>
                      <Router>
                        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                          <FuturisticBackground />
                          <Navigation onMenuClick={toggleSidebar} />
                          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                          <Breadcrumb />
                          
                          <main className="relative z-10">
                            <Suspense fallback={<LoadingPage />}>
                              <Routes>
                                {/* Main Pages */}
                                <Route path="/" element={<HomePage />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/services" element={<ServicesPage />} />
                                <Route path="/blog" element={<BlogPage />} />
                                <Route path="/careers" element={<CareersPage />} />
                                <Route path="/case-studies" element={<CaseStudiesPage />} />
                                <Route path="/privacy" element={<PrivacyPage />} />
                                <Route path="/terms" element={<TermsPage />} />

                                {/* AI Services */}
                                <Route path="/ai-services" element={<AIServicesPage />} />
                                <Route path="/ai-data-analytics-pro" element={<AIDataAnalyticsProPage />} />
                                <Route path="/ai-financial-analysis" element={<AIFinancialAnalysisPage />} />
                                <Route path="/ai-hr-recruitment-pro" element={<AIHRRecruitmentProPage />} />
                                <Route path="/ai-image-recognition-pro" element={<AIImageRecognitionProPage />} />
                                <Route path="/ai-powered-devops" element={<AIPoweredDevOpsPage />} />
                                <Route path="/ai-quantum-computing" element={<AIQuantumComputingPage />} />
                                <Route path="/ai-holographic-workspace" element={<AIHolographicWorkspacePage />} />
                                <Route path="/ai-healthcare-diagnostics" element={<AIHealthcareDiagnosticsPage />} />
                                <Route path="/ai-customer-sentiment-tracker" element={<AICustomerSentimentTrackerPage />} />
                                <Route path="/ai-powered-email-analyzer" element={<AIPoweredEmailAnalyzerPage />} />
                                <Route path="/ai-translation-service" element={<AITranslationServicePage />} />
                                <Route path="/ai-supply-chain-optimizer" element={<AISupplyChainOptimizerPage />} />
                                <Route path="/ai-automation-platform" element={<AIAutomationPlatformPage />} />

                                {/* Zion Services */}
                                <Route path="/zion-services" element={<ZionServicesPage />} />
                                <Route path="/zion-ai-analytics" element={<ZionAIAnalyticsPage />} />
                                <Route path="/zion-ai-content-generation" element={<ZionAIContentGenerationPage />} />
                                <Route path="/zion-ai-cyber-security" element={<ZionAICyberSecurityPage />} />
                                <Route path="/zion-ai-customer-support" element={<ZionAICustomerSupportPage />} />

                                {/* 5G Services */}
                                <Route path="/5g-services" element={<FiveGServicesPage />} />
                                <Route path="/5g-network-optimization" element={<FiveGNetworkOptimizationPage />} />
                                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                                <Route path="/5g-iot-connectivity" element={<FiveGIoTConnectivityPage />} />
                                <Route path="/5g-smart-cities" element={<FiveGSmartCitiesPage />} />

                                {/* IT Services */}
                                <Route path="/it-services" element={<ITServicesPage />} />
                                <Route path="/devops" element={<DevOpsPage />} />
                                <Route path="/cloud-computing" element={<CloudComputingPage />} />
                                <Route path="/network-security" element={<NetworkSecurityPage />} />
                                <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
                                <Route path="/web-development" element={<WebDevelopmentPage />} />

                                {/* Micro SAAS */}
                                <Route path="/micro-saas" element={<MicroSAASPage />} />
                                <Route path="/project-management" element={<ProjectManagementPage />} />
                                <Route path="/customer-relationship" element={<CustomerRelationshipPage />} />
                                <Route path="/inventory-management" element={<InventoryManagementPage />} />
                                <Route path="/financial-management" element={<FinancialManagementPage />} />
                                <Route path="/employee-management" element={<EmployeeManagementPage />} />
                                <Route path="/social-media-management" element={<SocialMediaManagementPage />} />
                                <Route path="/email-marketing" element={<EmailMarketingPage />} />
                                <Route path="/website-builder" element={<WebsiteBuilderPage />} />
                                <Route path="/task-management" element={<TaskManagementPage />} />
                                <Route path="/smart-home" element={<SmartHomePage />} />
                                <Route path="/ai-powered-assistant" element={<AIPoweredAssistantPage />} />

                                {/* Other Pages */}
                                <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
                              </Routes>
                            </Suspense>
                          </main>
                          
                          <Footer />
                          <EnhancedSEO />
                        </div>
                      </Router>
                    </ImprovedPerformanceMonitor>
                  </ImprovedAccessibility>
                </AccessibilityEnhancer>
              </CoreWebVitals>
            </WebVitalsTracker>
          </PerformanceMonitor>
        </AnalyticsProvider>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
}

export default App;