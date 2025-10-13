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
import Layout from "./components/Layout";

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

// Additional pages
const ConsultationPage = lazy(() => import("./consultation/page"));
const DemoPage = lazy(() => import("./demo/page"));
const SupportPage = lazy(() => import("./support/page"));
const TutorialsPage = lazy(() => import("./tutorials/page"));
const SitemapPage = lazy(() => import("./sitemap/page"));
const AiServicesPage = lazy(() => import("./ai-services/page"));
const CloudServicesPage = lazy(() => import("./cloud-services/page"));
const CybersecurityPage = lazy(() => import("./cybersecurity/page"));
const WebDevelopmentPage = lazy(() => import("./web-development/page"));
const CustomDevelopmentPage = lazy(() => import("./custom-development/page"));
const DataAnalyticsPage = lazy(() => import("./data-analytics/page"));
const AiAnalyticsPage = lazy(() => import("./ai-analytics/page"));
const AiAutomationPage = lazy(() => import("./ai-automation/page"));
const AiContentGenerationPage = lazy(() => import("./ai-content-generation/page"));
const AiCustomerServicePage = lazy(() => import("./ai-customer-service/page"));
const AiMarketingPage = lazy(() => import("./ai-marketing/page"));
const MicroSaasPage = lazy(() => import("./micro-saas/page"));

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
            <Layout>
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
              
              {/* Additional Routes */}
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/tutorials" element={<TutorialsPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              
              {/* Service Routes */}
              <Route path="/ai-services" element={<AiServicesPage />} />
              <Route path="/cloud-services" element={<CloudServicesPage />} />
              <Route path="/cybersecurity" element={<CybersecurityPage />} />
              <Route path="/web-development" element={<WebDevelopmentPage />} />
              <Route path="/custom-development" element={<CustomDevelopmentPage />} />
              <Route path="/data-analytics" element={<DataAnalyticsPage />} />
              <Route path="/micro-saas" element={<MicroSaasPage />} />
              
              {/* AI Service Routes */}
              <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
              <Route path="/ai-automation" element={<AiAutomationPage />} />
              <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
              <Route path="/ai-customer-service" element={<AiCustomerServicePage />} />
              <Route path="/ai-marketing" element={<AiMarketingPage />} />

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
              </Routes>
              </Suspense>
            </Layout>
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
