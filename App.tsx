import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import FuturisticBackground from "./app/components/FuturisticBackground";
<<<<<<< HEAD
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import PerformanceEnhancer from "./app/components/PerformanceEnhancer";
import SEOOptimizer from "./app/components/SEOOptimizer";
import EnhancedSEO from "./app/components/EnhancedSEO";
import EnhancedSEOOptimizer from "./app/components/EnhancedSEOOptimizer";
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-102c
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";

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

// Additional pages
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));
const ITServicesPage = React.lazy(() => import("./app/it-services/page"));
const CloudServicesPage = React.lazy(() => import("./app/cloud-services/page"));
const CybersecurityPage = React.lazy(() => import("./app/cybersecurity/page"));
const CustomDevelopmentPage = React.lazy(() => import("./app/custom-development/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));
const DataAnalyticsPage = React.lazy(() => import("./app/data-analytics/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));

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
                  <Navigation onSidebarToggle={toggleSidebar} />
                  <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
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
                        <Route path="/ai-services" element={<AIServicesPage />} />
                        <Route path="/tutorials" element={<TutorialsPage />} />
                        <Route path="/demo" element={<DemoPage />} />
                        <Route path="/support" element={<SupportPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/terms" element={<TermsPage />} />
                        <Route path="/cookies" element={<CookiesPage />} />
                        <Route path="/sitemap" element={<SitemapPage />} />
                        
                        {/* Additional routes */}
                        <Route path="/case-studies" element={<CaseStudiesPage />} />
                        <Route path="/consultation" element={<ConsultationPage />} />
                        <Route path="/it-services" element={<ITServicesPage />} />
                        <Route path="/cloud-services" element={<CloudServicesPage />} />
                        <Route path="/cybersecurity" element={<CybersecurityPage />} />
                        <Route path="/custom-development" element={<CustomDevelopmentPage />} />
                        <Route path="/web-development" element={<WebDevelopmentPage />} />
                        <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                        <Route path="/database-management" element={<DatabaseManagementPage />} />
                        <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                        <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                </FuturisticBackground>
<<<<<<< HEAD
                <EnhancedAccessibility>
                  <div></div>
                </EnhancedAccessibility>
                <AnalyticsProvider>
                  <div>
                    <PerformanceMonitor />
                    <WebVitalsTracker />
                    <PerformanceEnhancer />
                    <SEOOptimizer />
                    <EnhancedSEO title="Zion Tech Group" description="Advanced AI and IT Solutions" />
                    <EnhancedSEOOptimizer />
                  </div>
                </AnalyticsProvider>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-102c
              </div>
            </Router>
          </AccessibilityEnhancer>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
  );
}

export default App;
