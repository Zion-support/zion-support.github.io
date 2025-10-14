import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import ErrorBoundary from "./app/components/ErrorBoundary";
import SEOHead from "./app/components/EnhancedSEOHead";
import SkipLink from "./app/components/SkipLink";
import Breadcrumb from "./app/components/Breadcrumb";
import PerformanceOptimizer from "./app/components/PerformanceOptimizer";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import { usePerformanceMonitor } from "./app/hooks/usePerformanceMonitor";
import { AnalyticsProvider } from "./app/components/AnalyticsProvider";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const ITServicesPage = React.lazy(() => import("./app/it-services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const TeamPage = React.lazy(() => import("./app/team/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const DocsPage = React.lazy(() => import("./app/docs/page"));
const ApiDocsPage = React.lazy(() => import("./app/api-docs/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const StatusPage = React.lazy(() => import("./app/status/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const AIOpsPage = React.lazy(() => import("./app/ai-ops/page"));
const HealthcareITPage = React.lazy(() => import("./app/healthcare-it/page"));
const FinancialITPage = React.lazy(() => import("./app/financial-it/page"));
const EdgeComputingPage = React.lazy(() => import("./app/edge-computing/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const IoTPlatformPage = React.lazy(() => import("./app/iot-platform/page"));

// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <>{children}</>;
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900 flex">
            <div className="flex-1 flex flex-col">
              <Navigation onSidebarToggle={() => setSidebarOpen(true)} />
              <main className="relative z-10 flex-1" id="main-content" role="main">
                <ErrorBoundary>
                  <Suspense fallback={<LoadingPage />}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/ai-services" element={<AIServicesPage />} />
                      <Route path="/it-services" element={<ITServicesPage />} />
                      <Route path="/micro-saas" element={<MicroSaasPage />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/case-studies" element={<CaseStudiesPage />} />
                      <Route path="/team" element={<TeamPage />} />
                      <Route path="/careers" element={<CareersPage />} />
                      <Route path="/privacy" element={<PrivacyPage />} />
                      <Route path="/terms" element={<TermsPage />} />
                      <Route path="/cookies" element={<CookiesPage />} />
                      <Route path="/docs" element={<DocsPage />} />
                      <Route path="/api-docs" element={<ApiDocsPage />} />
                      <Route path="/support" element={<SupportPage />} />
                      <Route path="/status" element={<StatusPage />} />
                      <Route path="/demo" element={<DemoPage />} />
                      <Route path="/consultation" element={<ConsultationPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/ai-ops" element={<AIOpsPage />} />
                      <Route path="/healthcare-it" element={<HealthcareITPage />} />
                      <Route path="/financial-it" element={<FinancialITPage />} />
                      <Route path="/edge-computing" element={<EdgeComputingPage />} />
                      <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                      <Route path="/iot-platform" element={<IoTPlatformPage />} />
                    </Routes>
                  </Suspense>
                </ErrorBoundary>
              </main>
              <Footer />
            </div>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;