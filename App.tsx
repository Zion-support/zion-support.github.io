import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import AnalyticsProvider from './app/components/AnalyticsProvider';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import SEOEnhancer from './app/components/SEOEnhancer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import LoadingStates from './app/components/LoadingStates';
import CustomErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import MetaManager from './app/components/MetaManager';
import EnhancedAnalytics from './app/components/EnhancedAnalytics';
import AdvancedLoadingStates from './app/components/AdvancedLoadingStates';

// Pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';

const App: React.FC = () => {
  const handlePerformanceMetrics = (metrics: { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number }) => {
    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
    
    // Send to analytics in production
    if (typeof window !== 'undefined' && (window as typeof window & { gtag?: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag) {
      (window as typeof window & { gtag: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag('event', 'performance_metrics', {
        custom_parameter_1: metrics.fcp,
        custom_parameter_2: metrics.lcp,
        custom_parameter_3: metrics.fid,
        custom_parameter_4: metrics.cls
      });
    }
  };

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <PerformanceOptimizer>
<<<<<<< HEAD
            <AccessibilityEnhancer>
              <SEOEnhancer
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
              <PerformanceMonitor onMetricsUpdate={handlePerformanceMetrics} />
              <Router>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                  <Navigation />
                  <main className="relative z-10" id="main-content" role="main">
                    <Suspense fallback={<LoadingStates type="page" />}>
=======
            <AccessibilityEnhancer />
            <SEOOptimizer />
            <MetaManager />
            <PerformanceMonitor />
            <EnhancedAnalytics />
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <Navigation />
                <main className="relative z-10" id="main-content" role="main">
                  <Suspense fallback={<AdvancedLoadingStates type="skeleton" fullScreen message="Loading application..." />}>
                    <CustomErrorBoundary>
>>>>>>> 1b059d1410f62dab100fd4d8f9e853982d9dd4f2
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                      </Routes>
<<<<<<< HEAD
                    </Suspense>
                  </main>
                  <Footer />
                </div>
              </Router>
            </AccessibilityEnhancer>
=======
                    </CustomErrorBoundary>
                  </Suspense>
                </main>
                <Footer />
              </div>
            </Router>
>>>>>>> 1b059d1410f62dab100fd4d8f9e853982d9dd4f2
          </PerformanceOptimizer>
        </AnalyticsProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;