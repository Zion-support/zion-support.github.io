"use client";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import EnhancedPerformanceOptimizer from "./app/components/EnhancedPerformanceOptimizer";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import EnhancedSEO from "./app/components/EnhancedSEO";
import { AnalyticsProvider } from "./app/components/EnhancedAnalytics";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import FuturisticBackground from "./app/components/FuturisticBackground";
import PerformanceEnhancer from "./app/components/PerformanceEnhancer";
import SEOOptimizer from "./app/components/SEOOptimizer";
import ErrorHandler from "./app/components/ErrorHandler";
import { usePerformanceOptimization } from "./hooks/usePerformanceOptimization";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));

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

// New AI Service Pages
const AIVoiceAssistantPage = React.lazy(() => import("./app/ai-voice-assistant/page"));
const AIPredictiveMaintenancePage = React.lazy(() => import("./app/ai-predictive-maintenance/page"));

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

// New IT Service Pages
const EdgeComputingSolutionsPage = React.lazy(() => import("./app/edge-computing-solutions/page"));

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

// New Micro SAAS Pages
const ZionAIMeetingTranscriberPage = React.lazy(
  () => import("./app/zion-ai-meeting-transcriber/page"),
);
const ZionAIExpenseTrackerPage = React.lazy(
  () => import("./app/zion-ai-expense-tracker/page"),
);
const ZionAISocialMediaSchedulerPage = React.lazy(
  () => import("./app/zion-ai-social-media-scheduler/page"),
);
const ZionAICustomerInsightsPage = React.lazy(
  () => import("./app/zion-ai-customer-insights/page"),
);
const ZionAIInventoryManagerPage = React.lazy(
  () => import("./app/zion-ai-inventory-manager/page"),
);
const ZionAIContentWriterPage = React.lazy(
  () => import("./app/zion-ai-content-writer/page"),
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
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));

// Main App Component
function App() {
  // Initialize performance optimizations
  usePerformanceOptimization({
    enableLazyLoading: true,
    enablePreloading: true,
    enableImageOptimization: true,
    enableCodeSplitting: true,
    enableCaching: true,
  });

  return (
    <ErrorHandler>
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

                  {/* New AI Service Routes */}
                  <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                  <Route path="/ai-predictive-maintenance" element={<AIPredictiveMaintenancePage />} />

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

                  {/* New IT Service Routes */}
                  <Route path="/edge-computing-solutions" element={<EdgeComputingSolutionsPage />} />

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

                  {/* New Micro SAAS Routes */}
                  <Route
                    path="/zion-ai-meeting-transcriber"
                    element={<ZionAIMeetingTranscriberPage />}
                  />
                  <Route
                    path="/zion-ai-expense-tracker"
                    element={<ZionAIExpenseTrackerPage />}
                  />
                  <Route
                    path="/zion-ai-social-media-scheduler"
                    element={<ZionAISocialMediaSchedulerPage />}
                  />
                  <Route
                    path="/zion-ai-customer-insights"
                    element={<ZionAICustomerInsightsPage />}
                  />
                  <Route
                    path="/zion-ai-inventory-manager"
                    element={<ZionAIInventoryManagerPage />}
                  />
                  <Route
                    path="/zion-ai-content-writer"
                    element={<ZionAIContentWriterPage />}
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
                  <EnhancedPerformanceOptimizer />
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
                  </div>
                </AnalyticsProvider>
              </div>
            </Router>
          </AccessibilityEnhancer>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </ErrorHandler>
  );
}

export default App;
