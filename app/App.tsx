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

// Additional Pages
const DemoPage = lazy(() => import("./demo/page"));
const SupportPage = lazy(() => import("./support/page"));
const ConsultationPage = lazy(() => import("./consultation/page"));
const NewsPage = lazy(() => import("./news/page"));
const PressPage = lazy(() => import("./press/page"));
const PartnersPage = lazy(() => import("./partners/page"));
const DocsPage = lazy(() => import("./docs/page"));
const ApiPage = lazy(() => import("./api/page"));
const TutorialsPage = lazy(() => import("./tutorials/page"));
const WebinarsPage = lazy(() => import("./webinars/page"));
const WhitepapersPage = lazy(() => import("./whitepapers/page"));
const SitemapPage = lazy(() => import("./sitemap/page"));
const SecurityPage = lazy(() => import("./security/page"));
const AccessibilityPage = lazy(() => import("./accessibility/page"));

// AI Services Pages
const AIServicesPage = lazy(() => import("./ai-services/page"));
const MicroSAASPage = lazy(() => import("./micro-saas/page"));

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

              {/* Additional Pages */}
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/press" element={<PressPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/api" element={<ApiPage />} />
              <Route path="/tutorials" element={<TutorialsPage />} />
              <Route path="/webinars" element={<WebinarsPage />} />
              <Route path="/whitepapers" element={<WhitepapersPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />

              {/* AI Services */}
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/micro-saas" element={<MicroSAASPage />} />

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
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
