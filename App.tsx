import React, { useState, useEffect, useCallback, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "./app/components/Navigation";
import Sidebar from "./app/components/Sidebar";
import Footer from "./app/components/Footer";
import LoadingPage from "./app/components/Loading";
import HomePage from "./app/page";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import ErrorBoundary from "./app/components/ErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import EnhancedSEO from "./app/components/EnhancedSEO";
import PerformanceOptimizer from "./app/components/PerformanceOptimizer";
import EnhancedAnalytics from "./app/components/EnhancedAnalytics";

// Page Components
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';
import ServicesPage from './app/services/page';
import BlogPage from './app/blog/page';
import DemoPage from './app/demo/page';
import SupportPage from './app/support/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import PricingPage from './app/pricing/page';
import SolutionsPage from './app/solutions/page';
import AISolutionsPage from './app/ai-solutions/page';
import ITSolutionsPage from './app/it-solutions/page';
import AIServicesPage from './app/ai-services/page';
import ITServicesPage from './app/it-services/page';
import CloudInfrastructurePage from './app/cloud-infrastructure/page';
import DigitalTransformationPage from './app/digital-transformation/page';
import CaseStudiesPage from './app/case-studies/page';
import CareersPage from './app/careers/page';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);
  
  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  useEffect(() => {
// Performance monitoring
if (typeof window !== 'undefined') {
  // Monitor Core Web Vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  });

  // Monitor bundle size
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'navigation') {
        console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart, 'ms');
      }
    }
  });
  observer.observe({ entryTypes: ['navigation'] });
}

    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900 flex">
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <div className="flex-1 flex flex-col">
              <Navigation onSidebarToggle={toggleSidebar} />
              <main className="relative z-10 flex-1" id="main-content" role="main">
                <ErrorBoundary>
                  <Suspense fallback={<LoadingPage />}>
                    <Routes>
                      {/* Main Pages */}
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/ai-solutions" element={<AISolutionsPage />} />
                      <Route path="/it-solutions" element={<ITSolutionsPage />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/demo" element={<DemoPage />} />
                      <Route path="/support" element={<SupportPage />} />
                      <Route path="/privacy" element={<PrivacyPage />} />
                      <Route path="/terms" element={<TermsPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/solutions" element={<SolutionsPage />} />
                      
                      {/* Service Pages */}
                      <Route path="/ai-services" element={<AIServicesPage />} />
                      <Route path="/it-services" element={<ITServicesPage />} />
                      <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                      <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                      <Route path="/case-studies" element={<CaseStudiesPage />} />
                      <Route path="/careers" element={<CareersPage />} />
                    </Routes>
                  </Suspense>
                </ErrorBoundary>
              </main>
              <Footer />
            </div>
          </div>
          
          {/* Performance and Analytics Components */}
          <PerformanceMonitor />
          <WebVitalsTracker />
          <AccessibilityEnhancer />
          <CoreWebVitals />
          <FuturisticBackground />
          <Breadcrumb />
          <EnhancedSEO />
          <PerformanceOptimizer />
          <EnhancedAnalytics />
          <AnalyticsProvider />
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;