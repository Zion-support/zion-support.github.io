"use client";

import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import PerformanceMonitor from "./components/PerformanceMonitor";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import LoadingSpinner from "./components/LoadingSpinner";
import CriticalResourcePreloader from "./components/CriticalResourcePreloader";
import CacheManager from "./components/CacheManager";
import AdvancedPerformanceMonitor from "./components/AdvancedPerformanceMonitor";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./page"));
const AboutPage = lazy(() => import("./about/page"));
const ContactPage = lazy(() => import("./contact/page"));
const ServicesPage = lazy(() => import("./services/page"));
const PricingPage = lazy(() => import("./pricing/page"));
const CaseStudiesPage = lazy(() => import("./case-studies/page"));
const BlogPage = lazy(() => import("./blog/page"));
const TeamPage = lazy(() => import("./team/page"));
const CareersPage = lazy(() => import("./careers/page"));
const PrivacyPage = lazy(() => import("./privacy/page"));
const TermsPage = lazy(() => import("./terms/page"));
const CookiesPage = lazy(() => import("./cookies/page"));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = lazy(() => import("./5g-data-analytics/page"));
const FiveGEdgeComputingPage = lazy(() => import("./5g-edge-computing/page"));
const FiveGImplementationPage = lazy(() => import("./5g-implementation/page"));
const FiveGIoTSolutionsPage = lazy(() => import("./5g-iot-solutions/page"));
const FiveGMobileApplicationsPage = lazy(
  () => import("./5g-mobile-applications/page"),
);
const FiveGNetworkInfrastructurePage = lazy(
  () => import("./5g-network-infrastructure/page"),
);
const FiveGPrivateNetworksPage = lazy(
  () => import("./5g-private-networks/page"),
);
const FiveGSmartCitySolutionsPage = lazy(
  () => import("./5g-smart-city-solutions/page"),
);
const FiveGSolutionsPage = lazy(() => import("./5g-solutions/page"));

// Micro SAAS Pages
const MicroSAASPage = lazy(() => import("./micro-saas/page"));
const ZionAnalyticsProPage = lazy(() => import("./zion-analytics-pro/page"));
const ZionSecurityShieldPage = lazy(() => import("./zion-security-shield/page"));
const ZionCloudVaultPage = lazy(() => import("./zion-cloud-vault/page"));
const ZionAIContentStudioPage = lazy(() => import("./zion-ai-content-studio/page"));
const ZionCustomerAIPage = lazy(() => import("./zion-customer-ai/page"));
const ZionMarketingAutomationPage = lazy(() => import("./zion-marketing-automation/page"));
const ZionCodeAssistantPage = lazy(() => import("./zion-code-assistant/page"));
const ZionDataPipelinePage = lazy(() => import("./zion-data-pipeline/page"));
const ZionFinancialAIPage = lazy(() => import("./zion-financial-ai/page"));
const ZionIoTManagerPage = lazy(() => import("./zion-iot-manager/page"));
const ZionWorkflowEnginePage = lazy(() => import("./zion-workflow-engine/page"));
const ZionPerformanceMonitorPage = lazy(() => import("./zion-performance-monitor/page"));

// IT Services Pages
const ITServicesPage = lazy(() => import("./it-services/page"));
const CloudInfrastructurePage = lazy(() => import("./cloud-infrastructure/page"));
const CybersecuritySolutionsPage = lazy(() => import("./cybersecurity-solutions/page"));
const NetworkInfrastructurePage = lazy(() => import("./network-infrastructure/page"));
const DatabaseManagementPage = lazy(() => import("./database-management/page"));
const ServerManagementPage = lazy(() => import("./server-management/page"));
const ITSupportPage = lazy(() => import("./it-support/page"));
const MobileDeviceManagementPage = lazy(() => import("./mobile-device-management/page"));
const BackupDisasterRecoveryPage = lazy(() => import("./backup-disaster-recovery/page"));
const ITConsultingPage = lazy(() => import("./it-consulting/page"));
const SoftwareDevelopmentPage = lazy(() => import("./software-development/page"));
const ITProjectManagementPage = lazy(() => import("./it-project-management/page"));
const ITTrainingPage = lazy(() => import("./it-training/page"));

// AI Services Pages
const AIServicesPage = lazy(() => import("./ai-services/page"));
const AIBusinessIntelligencePage = lazy(() => import("./ai-business-intelligence/page"));
const AICustomerSupportPage = lazy(() => import("./ai-customer-support/page"));
const AIContentGenerationPage = lazy(() => import("./ai-content-generation/page"));
const AICybersecurityPage = lazy(() => import("./ai-cybersecurity/page"));
const AIDataAnalyticsPage = lazy(() => import("./ai-data-analytics/page"));
const AICodeAssistantPage = lazy(() => import("./ai-code-assistant/page"));
const AIMarketingAutomationPage = lazy(() => import("./ai-marketing-automation/page"));
const AIDocumentProcessingPage = lazy(() => import("./ai-document-processing/page"));
const AICRMAssistantPage = lazy(() => import("./ai-crm-assistant/page"));
const AIFinancialAnalyticsPage = lazy(() => import("./ai-financial-analytics/page"));

// Main App Component
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer>
            <CriticalResourcePreloader />
            <CacheManager />
            <AdvancedPerformanceMonitor />
            <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/cookies" element={<CookiesPage />} />

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
                path="/5g-iot-solutions"
                element={<FiveGIoTSolutionsPage />}
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
              <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />

              {/* Micro SAAS Routes */}
              <Route path="/micro-saas" element={<MicroSAASPage />} />
              <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
              <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
              <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
              <Route path="/zion-ai-content-studio" element={<ZionAIContentStudioPage />} />
              <Route path="/zion-customer-ai" element={<ZionCustomerAIPage />} />
              <Route path="/zion-marketing-automation" element={<ZionMarketingAutomationPage />} />
              <Route path="/zion-code-assistant" element={<ZionCodeAssistantPage />} />
              <Route path="/zion-data-pipeline" element={<ZionDataPipelinePage />} />
              <Route path="/zion-financial-ai" element={<ZionFinancialAIPage />} />
              <Route path="/zion-iot-manager" element={<ZionIoTManagerPage />} />
              <Route path="/zion-workflow-engine" element={<ZionWorkflowEnginePage />} />
              <Route path="/zion-performance-monitor" element={<ZionPerformanceMonitorPage />} />

              {/* IT Services Routes */}
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
              <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
              <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
              <Route path="/database-management" element={<DatabaseManagementPage />} />
              <Route path="/server-management" element={<ServerManagementPage />} />
              <Route path="/it-support" element={<ITSupportPage />} />
              <Route path="/mobile-device-management" element={<MobileDeviceManagementPage />} />
              <Route path="/backup-disaster-recovery" element={<BackupDisasterRecoveryPage />} />
              <Route path="/it-consulting" element={<ITConsultingPage />} />
              <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
              <Route path="/it-project-management" element={<ITProjectManagementPage />} />
              <Route path="/it-training" element={<ITTrainingPage />} />

              {/* AI Services Routes */}
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/ai-business-intelligence" element={<AIBusinessIntelligencePage />} />
              <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
              <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
              <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
              <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
              <Route path="/ai-code-assistant" element={<AICodeAssistantPage />} />
              <Route path="/ai-marketing-automation" element={<AIMarketingAutomationPage />} />
              <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
              <Route path="/ai-crm-assistant" element={<AICRMAssistantPage />} />
              <Route path="/ai-financial-analytics" element={<AIFinancialAnalyticsPage />} />
            </Routes>
            </Suspense>
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
