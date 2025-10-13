import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";

// Core components - keep static imports for critical path
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/EnhancedLoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import FuturisticBackground from "./app/components/FuturisticBackground";

// Performance and SEO components - lazy load these
const AdvancedPerformanceEnhancer = React.lazy(() => import("./app/components/AdvancedPerformanceEnhancer"));
const AdvancedPerformanceOptimizer = React.lazy(() => import("./app/components/AdvancedPerformanceOptimizer"));
const EnhancedSEOOptimizer = React.lazy(() => import("./app/components/EnhancedSEOOptimizer"));
const EnhancedAccessibilityManager = React.lazy(() => import("./app/components/EnhancedAccessibilityManager"));
const AccessibilityEnhancer = React.lazy(() => import("./app/components/AccessibilityEnhancer"));
const EnhancedAccessibility = React.lazy(() => import("./app/components/EnhancedAccessibility"));
const EnhancedSEO = React.lazy(() => import("./app/components/EnhancedSEO"));
const AnalyticsProvider = React.lazy(() => import("./app/components/EnhancedAnalytics").then(module => ({ default: module.AnalyticsProvider })));
const PerformanceMonitor = React.lazy(() => import("./app/components/PerformanceMonitor"));
const WebVitalsTracker = React.lazy(() => import("./app/components/WebVitalsTracker"));

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
          <Suspense fallback={<div />}>
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
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                  <Suspense fallback={<div />}>
                    <AdvancedPerformanceOptimizer 
                      enableImageOptimization={true}
                      enablePreloading={true}
                      enableCaching={true}
                      enableCompression={true}
                    />
                  </Suspense>
                  <Suspense fallback={<div />}>
                    <AdvancedPerformanceEnhancer 
                      enableImageOptimization={true}
                      enablePreloading={true}
                      enableCaching={true}
                      enableCompression={true}
                    />
                  </Suspense>
                  <Suspense fallback={<div />}>
                    <EnhancedAccessibilityManager
                      enableKeyboardNavigation={true}
                      enableScreenReader={true}
                      enableHighContrast={true}
                      enableFocusManagement={true}
                      enableVoiceNavigation={true}
                      enableReducedMotion={true}
                    />
                  </Suspense>
                  <Suspense fallback={<div />}>
                    <EnhancedAccessibility>
                      <div></div>
                    </EnhancedAccessibility>
                  </Suspense>
                </FuturisticBackground>
                <Suspense fallback={<div />}>
                  <AnalyticsProvider>
                    <div>
                      <Suspense fallback={<div />}>
                        <PerformanceMonitor />
                      </Suspense>
                      <Suspense fallback={<div />}>
                        <WebVitalsTracker />
                      </Suspense>
                      <Suspense fallback={<div />}>
                        <EnhancedSEO />
                      </Suspense>
                      <Suspense fallback={<div />}>
                        <EnhancedSEOOptimizer />
                      </Suspense>
                    </div>
                  </AnalyticsProvider>
                </Suspense>
              </div>
            </Router>
            </AccessibilityEnhancer>
          </Suspense>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
  );
}

export default App;
