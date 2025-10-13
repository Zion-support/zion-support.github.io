import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/EnhancedLoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import FuturisticBackground from "./app/components/FuturisticBackground";
import PerformanceEnhancer from "./app/components/PerformanceEnhancer";
import SEOOptimizer from "./app/components/SEOOptimizer";
import EnhancedSEO from "./app/components/EnhancedSEO";
import EnhancedSEOOptimizer from "./app/components/EnhancedSEOOptimizer";
import PerformanceOptimizer from "./app/components/PerformanceOptimizer";
import SEOEnhancer from "./app/components/SEOEnhancer";
import ErrorBoundary from "./app/components/ErrorBoundary";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const AIHealthcareDiagnosticsPage = React.lazy(() => import("./app/ai-healthcare-diagnostics/page"));
const AISupplyChainOptimizerPage = React.lazy(() => import("./app/ai-supply-chain-optimizer/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));

// Additional service pages
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const ItServicesPage = React.lazy(() => import("./app/it-services/page"));
const CloudServicesPage = React.lazy(() => import("./app/cloud-services/page"));
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecurityPage = React.lazy(() => import("./app/security/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const CustomDevelopmentPage = React.lazy(() => import("./app/custom-software/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));

// AI Service pages
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
const CloudInfrastructurePage = React.lazy(
  () => import("./app/cloud-infrastructure/page"),
);
const CybersecuritySolutionsPage = React.lazy(
  () => import("./app/cybersecurity-solutions/page"),
);
const WebDevelopmentPage = React.lazy(
  () => import("./app/web-development/page"),
);
const MobileDevelopmentPage = React.lazy(
  () => import("./app/mobile-development/page"),
);
const DatabaseManagementPage = React.lazy(
  () => import("./app/database-management/page"),
);
const CustomSoftwarePage = React.lazy(
  () => import("./app/custom-software/page"),
);
const NetworkInfrastructurePage = React.lazy(
  () => import("./app/network-infrastructure/page"),
);
const CloudNativeDevelopmentPage = React.lazy(
  () => import("./app/cloud-native-development/page"),
);
const BlockchainDevelopmentPage = React.lazy(
  () => import("./app/blockchain-development/page"),
);
const ECommerceDevelopmentPage = React.lazy(
  () => import("./app/e-commerce-development/page"),
);
const DataEngineeringPage = React.lazy(
  () => import("./app/data-engineering/page"),
);
const CybersecurityAdvancedPage = React.lazy(
  () => import("./app/cybersecurity-advanced/page"),
);
const CloudMigrationAdvancedPage = React.lazy(
  () => import("./app/cloud-migration-advanced/page"),
);
const MachineLearningOpsPage = React.lazy(
  () => import("./app/machine-learning-ops/page"),
);
const EnterpriseIntegrationPage = React.lazy(
  () => import("./app/enterprise-integration/page"),
);
const PerformanceOptimizationPage = React.lazy(
  () => import("./app/performance-optimization/page"),
);
const DisasterRecoveryAdvancedPage = React.lazy(
  () => import("./app/disaster-recovery-advanced/page"),
);
const ComplianceAutomationPage = React.lazy(
  () => import("./app/compliance-automation/page"),
);
const CloudCostOptimizationPage = React.lazy(
  () => import("./app/cloud-cost-optimization/page"),
);
const SecurityAutomationPage = React.lazy(
  () => import("./app/security-automation/page"),
);
const DataVisualizationPage = React.lazy(
  () => import("./app/data-visualization/page"),
);
const WorkflowAutomationPage = React.lazy(
  () => import("./app/workflow-automation/page"),
);
const CloudNativeSecurityPage = React.lazy(
  () => import("./app/cloud-native-security/page"),
);
const DataAnalyticsPage = React.lazy(() => import("./app/data-analytics/page"));
const IotSolutionsPage = React.lazy(() => import("./app/iot-solutions/page"));
const DevopsSolutionsPage = React.lazy(() => import("./app/devops-solutions/page"));
const MachineLearningPage = React.lazy(() => import("./app/machine-learning/page"));
const QuantumComputingPage = React.lazy(() => import("./app/quantum-computing/page"));
const RoboticsPage = React.lazy(() => import("./app/robotics/page"));

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(
  () => import("./app/zion-analytics-pro/page"),
);
const ZionSecurityShieldPage = React.lazy(
  () => import("./app/zion-security-shield/page"),
);
const ZionCloudVaultPage = React.lazy(
  () => import("./app/zion-cloud-vault/page"),
);
const ZionAiCrmProPage = React.lazy(
  () => import("./app/zion-ai-crm-pro/page"),
);
const ZionAiMarketingAutomationProPage = React.lazy(
  () => import("./app/zion-ai-marketing-automation-pro/page"),
);
const ZionAiProjectManagerProPage = React.lazy(
  () => import("./app/zion-ai-project-manager-pro/page"),
);
const ZionContentStudioPage = React.lazy(
  () => import("./app/zion-content-studio/page"),
);
const ZionDataSyncPage = React.lazy(() => import("./app/zion-data-sync/page"));
const ZionLeadMagnetPage = React.lazy(
  () => import("./app/zion-lead-magnet/page"),
);
const ZionProjectMasterPage = React.lazy(
  () => import("./app/zion-project-master/page"),
);
const ZionEmailAutomationPage = React.lazy(
  () => import("./app/zion-email-automation/page"),
);
const ZionSocialSchedulerPage = React.lazy(
  () => import("./app/zion-social-scheduler/page"),
);
const ZionWorkflowAutomationPage = React.lazy(
  () => import("./app/zion-workflow-automation/page"),
);
const ZionInvoiceGeniusPage = React.lazy(
  () => import("./app/zion-invoice-genius/page"),
);
const ZionInventorySmartPage = React.lazy(
  () => import("./app/zion-inventory-smart/page"),
);
const ZionComplianceManagerPage = React.lazy(
  () => import("./app/zion-compliance-manager/page"),
);
const ZionPerformanceMonitorPage = React.lazy(
  () => import("./app/zion-performance-monitor/page"),
);

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(
  () => import("./app/5g-data-analytics/page"),
);
const FiveGEdgeComputingPage = React.lazy(
  () => import("./app/5g-edge-computing/page"),
);
const FiveGImplementationPage = React.lazy(
  () => import("./app/5g-implementation/page"),
);
const FiveGMobileApplicationsPage = React.lazy(
  () => import("./app/5g-mobile-applications/page"),
);
const FiveGNetworkInfrastructurePage = React.lazy(
  () => import("./app/5g-network-infrastructure/page"),
);
const FiveGPrivateNetworksPage = React.lazy(
  () => import("./app/5g-private-networks/page"),
);
const FiveGSmartCitySolutionsPage = React.lazy(
  () => import("./app/5g-smart-city-solutions/page"),
);
const FiveG5gIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));

// Additional pages
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));

// Main App Component
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = React.useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <ErrorBoundary>
      <GlobalErrorBoundary>
        <EnhancedErrorBoundary>
          <HelmetProvider>
            <AccessibilityEnhancer>
              <PerformanceOptimizer>
                <SEOEnhancer>
                  <Router>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                      <FuturisticBackground>
                        <Navigation onSidebarToggle={toggleSidebar} />
                        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                        <Breadcrumb />
                        <main id="main-content" role="main">
                          <Suspense fallback={<LoadingPage message="Loading Zion Tech Group..." />}>
                            <Routes>
                              <Route path="/" element={<HomePage />} />
                              <Route path="/about" element={<AboutPage />} />
                              <Route path="/contact" element={<ContactPage />} />
                              <Route path="/services" element={<ServicesPage />} />
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
                              
                              {/* Additional pages */}
                              <Route path="/case-studies" element={<CaseStudiesPage />} />
                              <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                              <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                              <Route path="/consultation" element={<ConsultationPage />} />
                              <Route path="/careers" element={<CareersPage />} />
                              
                              {/* Service Pages */}
                              <Route path="/micro-saas" element={<MicroSaasPage />} />
                              <Route path="/it-services" element={<ItServicesPage />} />
                              <Route path="/cloud-services" element={<CloudServicesPage />} />
                              <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                              <Route path="/cybersecurity" element={<CybersecurityPage />} />
                              <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                              <Route path="/custom-development" element={<CustomDevelopmentPage />} />
                              <Route path="/web-development" element={<WebDevelopmentPage />} />
                              <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                              <Route path="/database-management" element={<DatabaseManagementPage />} />
                              
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
                              
                              {/* Micro SAAS Routes */}
                              <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                              <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                              <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                              <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
                              <Route path="/zion-data-sync" element={<ZionDataSyncPage />} />
                              <Route path="/zion-lead-magnet" element={<ZionLeadMagnetPage />} />
                              <Route path="/zion-project-master" element={<ZionProjectMasterPage />} />
                              <Route path="/zion-email-automation" element={<ZionEmailAutomationPage />} />
                              <Route path="/zion-social-scheduler" element={<ZionSocialSchedulerPage />} />
                              <Route path="/zion-workflow-automation" element={<ZionWorkflowAutomationPage />} />
                              <Route path="/zion-invoice-genius" element={<ZionInvoiceGeniusPage />} />
                              <Route path="/zion-inventory-smart" element={<ZionInventorySmartPage />} />
                              <Route path="/zion-compliance-manager" element={<ZionComplianceManagerPage />} />
                              <Route path="/zion-performance-monitor" element={<ZionPerformanceMonitorPage />} />
                              
                              {/* 5G Solutions Routes */}
                              <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                              <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                              <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                              <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                              <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                              <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                              <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                              <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                              <Route path="/5g-iot-solutions" element={<FiveG5gIotSolutionsPage />} />
                            </Routes>
                          </Suspense>
                        </main>
                        <Footer />
                        <EnhancedAccessibility>
                          <div></div>
                        </EnhancedAccessibility>
                      </FuturisticBackground>
                    </div>
                    <AnalyticsProvider>
                      <PerformanceMonitor />
                      <WebVitalsTracker />
                      <PerformanceEnhancer />
                      <SEOOptimizer />
                      <EnhancedSEO />
                      <EnhancedSEOOptimizer />
                    </AnalyticsProvider>
                  </Router>
                </SEOEnhancer>
              </PerformanceOptimizer>
            </AccessibilityEnhancer>
          </HelmetProvider>
        </EnhancedErrorBoundary>
      </GlobalErrorBoundary>
    </ErrorBoundary>
  );
}

export default App;
