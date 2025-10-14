<<<<<<< HEAD
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import LoadingPage from "./app/components/EnhancedLoadingStates";
import AdvancedPerformanceOptimizer from "./app/components/AdvancedPerformanceOptimizer";
import EnhancedSEOOptimizer from "./app/components/EnhancedSEOOptimizer";
import EnhancedAccessibilityManager from "./app/components/EnhancedAccessibilityManager";
import GlobalErrorBoundary from "./app/components/EnhancedErrorFeedback";
import Breadcrumb from "./app/components/Breadcrumb";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
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

// Additional service pages
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const ItServicesPage = React.lazy(() => import("./app/it-services/page"));
const CloudServicesPage = React.lazy(() => import("./app/cloud-services/page"));
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const CustomDevelopmentPage = React.lazy(() => import("./app/custom-software/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <GlobalErrorBoundary>
          <FuturisticBackground>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              <Navigation />
              <Sidebar />
              <Breadcrumb />
              
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
                  
                  {/* Service pages */}
                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                  <Route path="/it-services" element={<ItServicesPage />} />
                  <Route path="/cloud-services" element={<CloudServicesPage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                  <Route path="/custom-software" element={<CustomDevelopmentPage />} />
                  <Route path="/web-development" element={<WebDevelopmentPage />} />
                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                  <Route path="/database-management" element={<DatabaseManagementPage />} />
                </Routes>
              </Suspense>
              
              <Footer />
              
              {/* Performance and SEO optimizations */}
              <AdvancedPerformanceOptimizer />
              <EnhancedSEOOptimizer />
              <EnhancedAccessibilityManager />
              <AnalyticsProvider />
              <PerformanceMonitor />
              <WebVitalsTracker />
            </div>
          </FuturisticBackground>
        </GlobalErrorBoundary>
      </Router>
    </HelmetProvider>
  );
};

export default App;
=======
import React, { Suspense } from 'react':;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom':;
import { HelmetProvider } from 'react-helmet-async':
// Components:;
import Navigation from './app/components/Navigation':;
import Footer from './app/components/Footer':;
import AnalyticsProvider from './app/components/AnalyticsProvider':;
import PerformanceOptimizer from './app/components/PerformanceOptimizer':;
import SEOEnhancer from './app/components/SEOEnhancer':;
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer':;
import ErrorBoundary from './app/components/ErrorBoundary':;
import PerformanceMonitor from './app/components/PerformanceMonitor':;
import LoadingStates from './app/components/LoadingStates':
// Page components:;
import HomePage from './app/pages/HomePage':;
import AboutPage from './app/pages/AboutPage':;
import ServicesPage from './app/pages/ServicesPage':;
import ContactPage from './app/pages/ContactPage':;
const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <ErrorBoundary><HelmetProvider><Router><div className="min-h-screen bg-slate-900 flex">"
            <Sidebar isOpen={sidebarOpen} onClose={() =>setSidebarOpen(false)} /><div className="flex-1 flex flex-col">"
              <Navigation onSidebarToggle={() =>setSidebarOpen(true)} /><main className="relative z-10 flex-1" id="main-content" role="main">"
                <ErrorBoundary><Suspense fallback={<LoadingSpinner fullScreen text="Loading page..." />}>"
                    <Routes><Route path="/" element={<HomePage />} />"
                      <Route path="/about" element={<AboutPage />} />"
                      <Route path="/services" element={<ServicesPage />} />"
                      <Route path="/contact" element={<ContactPage />} />"
                      <Route path="*" element={<NotFoundPage />} />"
                    </Routes></Suspense></ErrorBoundary></main></div></div></Router>const App = () =>{;
const handlePerformanceMetrics = (metrics: {;
fcp?: number:;
lcp?: number:;
fid?: number:;
cls?: number:;
ttfb?: number:
  }) =>{
    // Log performance metrics in development:;
if (process.env.NODE_ENV === 'development') {;
console.log('Performance Metrics:', metrics);
    }
    
    // Send to analytics in production:;
if (typeof window !== 'undefined' && (window as unknown as { gtag?: (command: string, eventName: string, parameters: Record<string, unknown>) =>void }).gtag) {
      (window as unknown as { gtag: (command: string, eventName: string, parameters: Record<string, unknown>) =>void }).gtag('event', 'performance_metrics', {;
custom_parameter_1: metrics.fcp,;
custom_parameter_2: metrics.lcp,;
custom_parameter_3: metrics.fid,;
custom_parameter_4: metrics.cls
      });
    }
  };
;
const App: React.FC = memo(() =>{;
return (
    <ErrorBoundary><HelmetProvider><AnalyticsProvider><PerformanceOptimizer><AccessibilityEnhancer><SEOEnhancer:;
title="Zion Tech Group - Advanced AI and IT Solutions":;
description="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation.":;
keywords={['AI', 'IT solutions', 'automation', 'digital transformation', 'cybersecurity', 'cloud infrastructure']}
                type="website":;
structuredData={{
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "Zion Tech Group",
                  "description": "Leading provider of AI and IT solutions",
                  "url": "https://ziontechgroup.com",
                  "logo": "https://ziontechgroup.com/images/logo.png",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-555-0123",
                    "contactType": "customer service"
                  }
                }}><div></div></SEOEnhancer><PerformanceMonitor onMetricsUpdate={handlePerformanceMetrics} /><Router><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><Navigation /><main className="relative z-10" id="main-content" role="main"><Suspense fallback={<LoadingStates type="page" />}><Routes><Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/services" element={<ServicesPage />} /><Route path="/contact" element={<ContactPage />} /></Routes></Suspense></main><Footer /></div></Router></AccessibilityEnhancer></PerformanceOptimizer></AnalyticsProvider></HelmetProvider></ErrorBoundary>);
};
;
export default App:
}
))
  </div>
  </div>
  </div>
  </div>
  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
