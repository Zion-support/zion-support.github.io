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

// AI Services Pages
const AIServicesPage = lazy(() => import("./ai-services/page"));
const AIAnalyticsPage = lazy(() => import("./ai-analytics/page"));
const AIAutomationPage = lazy(() => import("./ai-automation/page"));
const AIContentGenerationPage = lazy(() => import("./ai-content-generation/page"));
const AICustomerSupportPage = lazy(() => import("./ai-customer-support/page"));
const AICybersecurityPage = lazy(() => import("./ai-cybersecurity/page"));
const AIMarketingAutomationPage = lazy(() => import("./ai-marketing-automation/page"));

// IT Services Pages
const ITServicesPage = lazy(() => import("./it-services/page"));
const CloudServicesPage = lazy(() => import("./cloud-services/page"));
const CybersecurityPage = lazy(() => import("./cybersecurity/page"));
const CustomDevelopmentPage = lazy(() => import("./custom-development/page"));
const WebDevelopmentPage = lazy(() => import("./web-development/page"));
const MobileDevelopmentPage = lazy(() => import("./mobile-development/page"));
const DatabaseManagementPage = lazy(() => import("./database-management/page"));
const NetworkInfrastructurePage = lazy(() => import("./network-infrastructure/page"));
const DataAnalyticsPage = lazy(() => import("./data-analytics/page"));
const CloudInfrastructurePage = lazy(() => import("./cloud-infrastructure/page"));
const CybersecuritySolutionsPage = lazy(() => import("./cybersecurity-solutions/page"));
const CustomSoftwarePage = lazy(() => import("./custom-software/page"));

// Micro SAAS Pages
const ZionAnalyticsProPage = lazy(() => import("./zion-analytics-pro/page"));
const ZionSecurityShieldPage = lazy(() => import("./zion-security-shield/page"));
const ZionCloudVaultPage = lazy(() => import("./zion-cloud-vault/page"));
const ZionContentStudioPage = lazy(() => import("./zion-content-studio/page"));
const ZionDataSyncPage = lazy(() => import("./zion-data-sync/page"));
const ZionLeadMagnetPage = lazy(() => import("./zion-lead-magnet/page"));
const ZionProjectMasterPage = lazy(() => import("./zion-project-master/page"));
const ZionEmailAutomationPage = lazy(() => import("./zion-email-automation/page"));

// Support Pages
const SupportPage = lazy(() => import("./support/page"));
const TutorialsPage = lazy(() => import("./tutorials/page"));
const DemoPage = lazy(() => import("./demo/page"));
const SitemapPage = lazy(() => import("./sitemap/page"));
const ConsultationPage = lazy(() => import("./consultation/page"));

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

              {/* AI Services Routes */}
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
              <Route path="/ai-automation" element={<AIAutomationPage />} />
              <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
              <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
              <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
              <Route path="/ai-marketing-automation" element={<AIMarketingAutomationPage />} />

              {/* IT Services Routes */}
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/cloud-services" element={<CloudServicesPage />} />
              <Route path="/cybersecurity" element={<CybersecurityPage />} />
              <Route path="/custom-development" element={<CustomDevelopmentPage />} />
              <Route path="/web-development" element={<WebDevelopmentPage />} />
              <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
              <Route path="/database-management" element={<DatabaseManagementPage />} />
              <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
              <Route path="/data-analytics" element={<DataAnalyticsPage />} />
              <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
              <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
              <Route path="/custom-software" element={<CustomSoftwarePage />} />

              {/* Micro SAAS Routes */}
              <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
              <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
              <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
              <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
              <Route path="/zion-data-sync" element={<ZionDataSyncPage />} />
              <Route path="/zion-lead-magnet" element={<ZionLeadMagnetPage />} />
              <Route path="/zion-project-master" element={<ZionProjectMasterPage />} />
              <Route path="/zion-email-automation" element={<ZionEmailAutomationPage />} />

              {/* Support Routes */}
              <Route path="/support" element={<SupportPage />} />
              <Route path="/tutorials" element={<TutorialsPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
            </Routes>
            </Suspense>
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
