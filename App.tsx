import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import { AnalyticsProvider } from './app/contexts/AnalyticsProvider';
// import PerformanceOptimizer from './app/components/PerformanceOptimizer';
// import EnhancedSEO from './app/components/EnhancedSEO';
// import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
// import ErrorBoundary from './app/components/ErrorBoundary';
// import LoadingStates from './app/components/LoadingStates';

import PerformanceMonitor from './app/components/PerformanceMonitor';
import MetaManager from './app/components/MetaManager';
import EnhancedAnalytics from './app/components/EnhancedAnalytics';
// import AdvancedLoadingStates from './app/components/AdvancedLoadingStates';

// Pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';

// ErrorBoundary is imported from components

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Sidebar state management (currently unused)
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined') {
      // Monitor Core Web Vitals
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
        onCLS((metric) => {
          if (process.env.NODE_ENV === 'development') {
            console.warn('CLS:', metric);
          }
        });
        onFCP((metric) => {
          if (process.env.NODE_ENV === 'development') {
            console.warn('FCP:', metric);
          }
        });
        onLCP((metric) => {
          if (process.env.NODE_ENV === 'development') {
            console.warn('LCP:', metric);
          }
        });
        onTTFB((metric) => {
          if (process.env.NODE_ENV === 'development') {
            console.warn('TTFB:', metric);
          }
        });
      });

      // Monitor bundle size
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            if (process.env.NODE_ENV === 'development') {
              console.warn('Page load time:', (entry as PerformanceNavigationTiming).loadEventEnd - (entry as PerformanceNavigationTiming).loadEventStart, 'ms');
            }
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
    }

    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.warn('Zion Tech Group App initialized');
    }

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
        <AnalyticsProvider>
          <div>
            <div />
            <div />
            <MetaManager />
            <PerformanceMonitor />
            <EnhancedAnalytics />
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <Navigation />
                <main className="relative z-10" id="main-content" role="main">
                  <Suspense fallback={
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-pulse bg-white/20 h-32 w-32 rounded-lg mx-auto mb-4"></div>
                        <p className="text-white text-xl">Loading application...</p>
                      </div>
                    </div>
                  }>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </div>
            </Router>
          </div>
        </AnalyticsProvider>
      </HelmetProvider>
    </div>
  );
};

export default App;