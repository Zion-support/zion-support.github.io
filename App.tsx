import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import { AnalyticsProvider } from './app/contexts/AnalyticsContext.tsx';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import EnhancedSEO from './app/components/EnhancedSEO';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import ErrorBoundary from './app/components/ErrorBoundary';
import LoadingSpinner from './app/components/LoadingSpinner';
import SEOOptimizer from './app/components/SEOOptimizer';

import PerformanceMonitor from './app/components/PerformanceMonitor';
import MetaManager from './app/components/MetaManager';
import EnhancedAnalytics from './app/components/EnhancedAnalytics';
import AdvancedLoadingStates from './app/components/AdvancedLoadingStates';

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
    return <AdvancedLoadingStates />;
  }

  return (
    <HelmetProvider>
      <AnalyticsProvider>
        <PerformanceMonitor>
          <MetaManager
              title="Zion Tech Group - Advanced AI and IT Solutions"
              description="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation."
              keywords={['AI', 'IT solutions', 'automation', 'digital transformation', 'cybersecurity', 'cloud infrastructure']}
              type="website"
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
              }}
            />
            <EnhancedAnalytics />
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <Navigation />
                <main className="relative z-10" id="main-content" role="main">
                  <Suspense fallback={<AdvancedLoadingStates type="skeleton" fullScreen message="Loading application..." />}>
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
          </PerformanceMonitor>
        </AnalyticsProvider>
      </HelmetProvider>
  );
};

export default App;