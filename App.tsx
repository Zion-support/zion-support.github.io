import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import { AnalyticsProvider } from './app/contexts/AnalyticsContext.tsx';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import EnhancedSEO from './app/components/EnhancedSEO';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import ErrorBoundary from './app/components/ErrorBoundary';
import LoadingSpinner from './app/components/LoadingSpinner';
import SEOOptimizer from './app/components/SEOEnhancer';

import PerformanceMonitor from './app/components/PerformanceMonitor';
import ErrorBoundary from './app/components/ErrorBoundary';

// Pages
import HomePage from './app/page';

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><div className="text-white text-xl">Loading page...</div></div>}>
      <PageComponent />
    </Suspense>
  );
};

// Main router component - removed as it's not used

// Router content component that has access to location
const RouterContent: React.FC = () => {
  const location = useLocation();
  
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <div className="cyber-loading mx-auto mb-4"></div>
          <div className="text-white text-xl">Loading application...</div>
        </div>
      </div>
    }>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<DynamicPageLoader pagePath={location.pathname} />} />
      </Routes>
    </Suspense>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading application...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <HelmetProvider>
        <Router>
          <AppWithPerformanceMonitoring>
            <AnalyticsProvider>
              <PerformanceMonitor />
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <Navigation />
                <main id="main-content" className="flex-1">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/case-studies" element={<CaseStudiesPage />} />
                      <Route path="/careers" element={<CareersPage />} />
                      <Route path="/partners" element={<PartnersPage />} />
                      <Route path="/support" element={<SupportPage />} />
                      <Route path="/faq" element={<FAQPage />} />
                      <Route path="/demo" element={<DemoPage />} />
                      <Route path="/consultation" element={<ConsultationPage />} />
                      <Route path="/micro-saas" element={<MicroSaasPage />} />
                      <Route path="/ai-services" element={<AiServicesPage />} />
                      <Route path="/it-services" element={<ItServicesPage />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </div>
            </AnalyticsProvider>
          </AppWithPerformanceMonitoring>
        </Router>
      </HelmetProvider>
    </div>
  );
};

export default App;