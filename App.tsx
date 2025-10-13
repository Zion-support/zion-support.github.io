"use client";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import FuturisticNavigation from "./app/components/FuturisticNavigation";
import Footer from "./app/components/Footer";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import ErrorBoundary from "./app/components/ErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import PerformanceOptimizer from "./app/components/EnhancedPerformanceOptimizer";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import { AnalyticsProvider } from "./app/components/EnhancedAnalytics";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import FuturisticBackgroundEnhanced from "./app/components/FuturisticBackgroundEnhanced";
import PerformanceEnhancer from "./app/components/PerformanceEnhancer";
import SEOOptimizer from "./app/components/SEOOptimizer";

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
const AIAnalyticsDashboardProPage = React.lazy(() => import("./app/ai-analytics-dashboard-pro/page"));
const AIContentGenerationProPage = React.lazy(() => import("./app/ai-content-generation-pro/page"));
const AICybersecuritySuiteProPage = React.lazy(() => import("./app/ai-cybersecurity-suite-pro/page"));
const AIBusinessIntelligenceProPage = React.lazy(() => import("./app/ai-business-intelligence-pro/page"));
const AICodeAssistantProPage = React.lazy(() => import("./app/ai-code-assistant-pro/page"));
const AICustomerSupportChatbotPage = React.lazy(() => import("./app/ai-customer-support-chatbot/page"));

// IT Service Pages
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const CustomSoftwarePage = React.lazy(() => import("./app/custom-software/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));
const CloudNativeDevelopmentPage = React.lazy(() => import("./app/cloud-native-development/page"));
const BlockchainDevelopmentPage = React.lazy(() => import("./app/blockchain-development/page"));
const ECommerceDevelopmentPage = React.lazy(() => import("./app/e-commerce-development/page"));
const DataEngineeringPage = React.lazy(() => import("./app/data-engineering/page"));
const CybersecurityAdvancedPage = React.lazy(() => import("./app/cybersecurity-advanced/page"));
const CloudMigrationAdvancedPage = React.lazy(() => import("./app/cloud-migration-advanced/page"));
const MachineLearningOpsPage = React.lazy(() => import("./app/machine-learning-ops/page"));
const EnterpriseIntegrationPage = React.lazy(() => import("./app/enterprise-integration/page"));
const PerformanceOptimizationPage = React.lazy(() => import("./app/performance-optimization/page"));
const DisasterRecoveryAdvancedPage = React.lazy(() => import("./app/disaster-recovery-advanced/page"));
const ComplianceAutomationPage = React.lazy(() => import("./app/compliance-automation/page"));
const CloudCostOptimizationPage = React.lazy(() => import("./app/cloud-cost-optimization/page"));
const SecurityAutomationPage = React.lazy(() => import("./app/security-automation/page"));
const DataVisualizationPage = React.lazy(() => import("./app/data-visualization/page"));
const WorkflowAutomationPage = React.lazy(() => import("./app/workflow-automation/page"));
const CloudNativeSecurityPage = React.lazy(() => import("./app/cloud-native-security/page"));

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionContentStudioPage = React.lazy(() => import("./app/zion-content-studio/page"));
const ZionDataSyncPage = React.lazy(() => import("./app/zion-data-sync/page"));
const ZionLeadMagnetPage = React.lazy(() => import("./app/zion-lead-magnet/page"));
const ZionProjectMasterPage = React.lazy(() => import("./app/zion-project-master/page"));
const ZionEmailAutomationPage = React.lazy(() => import("./app/zion-email-automation/page"));
const ZionSocialSchedulerPage = React.lazy(() => import("./app/zion-social-scheduler/page"));
const ZionWorkflowAutomationPage = React.lazy(() => import("./app/zion-workflow-automation/page"));
const ZionInvoiceGeniusPage = React.lazy(() => import("./app/zion-invoice-genius/page"));
const ZionInventorySmartPage = React.lazy(() => import("./app/zion-inventory-smart/page"));
const ZionComplianceManagerPage = React.lazy(() => import("./app/zion-compliance-manager/page"));
const ZionPerformanceMonitorPage = React.lazy(() => import("./app/zion-performance-monitor/page"));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));

// Main App Component
function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <FuturisticBackgroundEnhanced>
            <FuturisticNavigation />
            <Breadcrumb />
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
                <Route path="/ai-analytics-dashboard-pro" element={<AIAnalyticsDashboardProPage />} />
                <Route path="/ai-content-generation-pro" element={<AIContentGenerationProPage />} />
                <Route path="/ai-cybersecurity-suite-pro" element={<AICybersecuritySuiteProPage />} />
                <Route path="/ai-business-intelligence-pro" element={<AIBusinessIntelligenceProPage />} />
                <Route path="/ai-code-assistant-pro" element={<AICodeAssistantProPage />} />
                <Route path="/ai-customer-support-chatbot" element={<AICustomerSupportChatbotPage />} />

                {/* IT Service Routes */}
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/database-management" element={<DatabaseManagementPage />} />
                <Route path="/custom-software" element={<CustomSoftwarePage />} />
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                <Route path="/cloud-native-development" element={<CloudNativeDevelopmentPage />} />
                <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
                <Route path="/e-commerce-development" element={<ECommerceDevelopmentPage />} />
                <Route path="/data-engineering" element={<DataEngineeringPage />} />
                <Route path="/cybersecurity-advanced" element={<CybersecurityAdvancedPage />} />
                <Route path="/cloud-migration-advanced" element={<CloudMigrationAdvancedPage />} />
                <Route path="/machine-learning-ops" element={<MachineLearningOpsPage />} />
                <Route path="/enterprise-integration" element={<EnterpriseIntegrationPage />} />
                <Route path="/performance-optimization" element={<PerformanceOptimizationPage />} />
                <Route path="/disaster-recovery-advanced" element={<DisasterRecoveryAdvancedPage />} />
                <Route path="/compliance-automation" element={<ComplianceAutomationPage />} />
                <Route path="/cloud-cost-optimization" element={<CloudCostOptimizationPage />} />
                <Route path="/security-automation" element={<SecurityAutomationPage />} />
                <Route path="/data-visualization" element={<DataVisualizationPage />} />
                <Route path="/workflow-automation" element={<WorkflowAutomationPage />} />
                <Route path="/cloud-native-security" element={<CloudNativeSecurityPage />} />

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
                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
              </Routes>
            </Suspense>
            <Footer />
            <PerformanceOptimizer />
            <AccessibilityEnhancer />
            <EnhancedAccessibility>
              <div></div>
            </EnhancedAccessibility>
          </FuturisticBackgroundEnhanced>
          <AnalyticsProvider>
            <div>
              <PerformanceMonitor />
              <PerformanceEnhancer />
              <SEOOptimizer />
            </div>
          </AnalyticsProvider>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
