import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import { AnalyticsProvider } from './app/contexts/AnalyticsContext.tsx';
import ErrorBoundary from './app/components/ErrorBoundary';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import PerformanceMonitor from './app/components/PerformanceMonitor';

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
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto"></div>
          <p className="text-white mt-4 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <AccessibilityEnhancer />
          <PerformanceMonitor />
          <Router>
            <div className="min-h-screen bg-slate-900 text-white">
              <Navigation />
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </AnalyticsProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;