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
import AdvancedPerformanceEnhancer from "./app/components/AdvancedPerformanceEnhancer";
import AdvancedPerformanceOptimizer from "./app/components/AdvancedPerformanceOptimizer";
import EnhancedSEOOptimizer from "./app/components/EnhancedSEOOptimizer";
import EnhancedAccessibilityManager from "./app/components/EnhancedAccessibilityManager";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import EnhancedSEO from "./app/components/EnhancedSEO";
import { AnalyticsProvider } from "./app/components/EnhancedAnalytics";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import FuturisticBackground from "./app/components/FuturisticBackground";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));

// Main App Component
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  return (
    <GlobalErrorBoundary>
      <EnhancedErrorBoundary>
        <HelmetProvider>
<AccessibilityEnhancer>
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <FuturisticBackground>
                  <Navigation />
                  <Breadcrumb />
                  <main id="main-content" role="main">
                    <Suspense fallback={<LoadingPage />}>
                      <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/it-services" element={<ServicesPage />} />
                  <Route path="/micro-saas" element={<ServicesPage />} />
                  <Route path="/tutorials" element={<TutorialsPage />} />
                  <Route path="/consultation" element={<ConsultationPage />} />
                  <Route path="/demo" element={<DemoPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  <Route path="/sitemap" element={<SitemapPage />} />

                  {/* AI Service Routes */}
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
                  <Route path="/ai-marketing-automation" element={<AiMarketingPage />} />

                  {/* IT Service Routes */}
                  <Route
                    path="/cloud-infrastructure"
                    element={<CloudInfrastructurePage />}
                  />
                  <Route
                    path="/cybersecurity-solutions"
                    element={<CybersecuritySolutionsPage />}
                  />
                  <Route
                    path="/web-development"
                    element={<WebDevelopmentPage />}
                  />
                  <Route
                    path="/mobile-development"
                    element={<MobileDevelopmentPage />}
                  />
                  <Route
                    path="/database-management"
                    element={<DatabaseManagementPage />}
                  />
                  <Route
                    path="/custom-software"
                    element={<CustomSoftwarePage />}
                  />
                  <Route
                    path="/network-infrastructure"
                    element={<NetworkInfrastructurePage />}
                  />
                  <Route
                    path="/cloud-native-development"
                    element={<CloudNativeDevelopmentPage />}
                  />
                  <Route
                    path="/blockchain-development"
                    element={<BlockchainDevelopmentPage />}
                  />
                  <Route
                    path="/e-commerce-development"
                    element={<ECommerceDevelopmentPage />}
                  />
                  <Route
                    path="/data-engineering"
                    element={<DataEngineeringPage />}
                  />
                  <Route
                    path="/cybersecurity-advanced"
                    element={<CybersecurityAdvancedPage />}
                  />
                  <Route
                    path="/cloud-migration-advanced"
                    element={<CloudMigrationAdvancedPage />}
                  />
                  <Route
                    path="/machine-learning-ops"
                    element={<MachineLearningOpsPage />}
                  />
                  <Route
                    path="/enterprise-integration"
                    element={<EnterpriseIntegrationPage />}
                  />
                  <Route
                    path="/performance-optimization"
                    element={<PerformanceOptimizationPage />}
                  />
                  <Route
                    path="/disaster-recovery-advanced"
                    element={<DisasterRecoveryAdvancedPage />}
                  />
                  <Route
                    path="/compliance-automation"
                    element={<ComplianceAutomationPage />}
                  />
                  <Route
                    path="/cloud-cost-optimization"
                    element={<CloudCostOptimizationPage />}
                  />
                  <Route
                    path="/security-automation"
                    element={<SecurityAutomationPage />}
                  />
                  <Route
                    path="/data-visualization"
                    element={<DataVisualizationPage />}
                  />
                  <Route
                    path="/workflow-automation"
                    element={<WorkflowAutomationPage />}
                  />
                  <Route
                    path="/cloud-native-security"
                    element={<CloudNativeSecurityPage />}
                  />
                  <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                  <Route path="/iot-solutions" element={<IotSolutionsPage />} />
                  <Route path="/devops-solutions" element={<DevopsSolutionsPage />} />
                  <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
                  <Route path="/machine-learning" element={<MachineLearningPage />} />
                  <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                  <Route path="/robotics" element={<RoboticsPage />} />

                  {/* Additional Service Routes */}
                  <Route path="/cloud-services" element={<CloudInfrastructurePage />} />
                  <Route path="/cybersecurity" element={<CybersecuritySolutionsPage />} />
                  <Route path="/custom-development" element={<CustomSoftwarePage />} />

                  {/* Micro SAAS Routes */}
                  <Route
                    path="/zion-analytics-pro"
                    element={<ZionAnalyticsProPage />}
                  />
                  <Route
                    path="/zion-security-shield"
                    element={<ZionSecurityShieldPage />}
                  />
                  <Route
                    path="/zion-cloud-vault"
                    element={<ZionCloudVaultPage />}
                  />
                  <Route
                    path="/zion-content-studio"
                    element={<ZionContentStudioPage />}
                  />
                  <Route
                    path="/zion-data-sync"
                    element={<ZionDataSyncPage />}
                  />
                  <Route
                    path="/zion-lead-magnet"
                    element={<ZionLeadMagnetPage />}
                  />
                  <Route
                    path="/zion-project-master"
                    element={<ZionProjectMasterPage />}
                  />
                  <Route
                    path="/zion-email-automation"
                    element={<ZionEmailAutomationPage />}
                  />
                  <Route
                    path="/zion-social-scheduler"
                    element={<ZionSocialSchedulerPage />}
                  />
                  <Route
                    path="/zion-workflow-automation"
                    element={<ZionWorkflowAutomationPage />}
                  />
                  <Route
                    path="/zion-invoice-genius"
                    element={<ZionInvoiceGeniusPage />}
                  />
                  <Route
                    path="/zion-inventory-smart"
                    element={<ZionInventorySmartPage />}
                  />
                  <Route
                    path="/zion-compliance-manager"
                    element={<ZionComplianceManagerPage />}
                  />
                  <Route
                    path="/zion-performance-monitor"
                    element={<ZionPerformanceMonitorPage />}
                  />

                  {/* 5G Solutions Routes */}
                  <Route
                    path="/5g-data-analytics"
                    element={<FiveGDataAnalyticsPage />}
                  />
                  <Route
                    path="/5g-edge-computing"
                    element={<FiveGEdgeComputingPage />}
                  />
                  <Route
                    path="/5g-implementation"
                    element={<FiveGImplementationPage />}
                  />
                  <Route
                    path="/5g-mobile-applications"
                    element={<FiveGMobileApplicationsPage />}
                  />
                  <Route
                    path="/5g-network-infrastructure"
                    element={<FiveGNetworkInfrastructurePage />}
                  />
                  <Route
                    path="/5g-private-networks"
                    element={<FiveGPrivateNetworksPage />}
                  />
                  <Route
                    path="/5g-smart-city-solutions"
                    element={<FiveGSmartCitySolutionsPage />}
                  />
                  <Route
                    path="/5g-solutions"
                    element={<FiveGSolutionsPage />}
                  />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />

                  <AdvancedPerformanceOptimizer 
                    enableImageOptimization={true}
                    enablePreloading={true}
                    enableCaching={true}
                    enableCompression={true}
                  />
                  <AdvancedPerformanceEnhancer 
                    enableImageOptimization={true}
                    enablePreloading={true}
                    enableCaching={true}
                    enableCompression={true}
                  />
                  <EnhancedAccessibilityManager
                    enableKeyboardNavigation={true}
                    enableScreenReader={true}
                    enableHighContrast={true}
                    enableFocusManagement={true}
                    enableVoiceNavigation={true}
                    enableReducedMotion={true}
                  />
                  <EnhancedAccessibility>
                    <div></div>
                  </EnhancedAccessibility>
                </FuturisticBackground>
                <AnalyticsProvider>
                  <div>
                    <PerformanceMonitor />
                    <WebVitalsTracker />
                    <PerformanceEnhancer />
                    <SEOOptimizer />
                    <EnhancedSEO />
                    <EnhancedSEOOptimizer />
                  </div>
                </AnalyticsProvider>
              </div>
            </Router>
          </AccessibilityEnhancer>

        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
  );
}

export default App;
