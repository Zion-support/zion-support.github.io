'use client';

import React, { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import EnhancedAccessibility from './components/EnhancedAccessibility';
import EnhancedPerformanceMonitor from './components/EnhancedPerformanceMonitor';
import EnhancedSEO from './components/EnhancedSEO';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';

// Lazy load components for better performance
// const ContentShowcase = lazy(() => import('./components/ContentShowcase'));
// const InteractiveContentShowcase2026 = lazy(
//   () => import('./components/InteractiveContentShowcase2026')
// );
// const InteractiveAIROICalculator = lazy(
//   () => import('./components/InteractiveAIROICalculator')
// );

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ServicesPage = lazy(() => import('./services/page'));
const ContactPage = lazy(() => import('./contact/page'));
const TeamPage = lazy(() => import('./team/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));
const ServicesAdvertisingPage = lazy(() => import('./services-advertising/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));

// Utils
import { lazyLoadImages, preloadCriticalResources, collectPerformanceMetrics, performanceOptimizer } from './utils/performanceOptimizer';
import { logger } from './utils/logger';
import performanceMonitor from './utils/performanceMonitor';
import seoOptimizer from './utils/seoOptimizer';
import accessibilityEnhancer from './utils/accessibilityEnhancer';

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    logger.info('initialized', { component: 'App' });

    // Initialize performance monitoring
    lazyLoadImages();
    preloadCriticalResources();
    performanceOptimizer.init();
    performanceMonitor.init();
    
    // Initialize SEO optimization
    seoOptimizer.init();
    
    // Initialize accessibility enhancements
    accessibilityEnhancer.init();
    
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const pageLoadMetrics = collectPerformanceMetrics();
      const metrics = performanceOptimizer.getMetrics();
      // const performanceMetrics = performanceMonitor.getMetrics();
      
      if (pageLoadMetrics) {
        // eslint-disable-next-line no-console
        console.log('Performance metrics collected:', pageLoadMetrics);
      }
      if (metrics) {
        // eslint-disable-next-line no-console
        console.log('Performance metrics:', metrics);
      }
      if (performanceMetrics) {
        // eslint-disable-next-line no-console
        console.log('Core Web Vitals:', performanceMetrics);
      }
    }
    
    // Log performance and accessibility metrics periodically
    const metricsInterval = setInterval(() => {
      // const _performanceMetrics = performanceMonitor.getMetrics();
      const accessibilityMetrics = accessibilityEnhancer.getMetrics();
      
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Performance Score:', performanceMonitor.getScore());
        // eslint-disable-next-line no-console
        console.log('Accessibility Score:', accessibilityMetrics.overallScore);
      }
    }, 30000);
    
    logger.info('performance monitoring initialized', { component: 'App' });
    logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring', { component: 'App' });

    return () => {
      // Cleanup
      performanceOptimizer.cleanup();
      performanceMonitor.cleanup();
      accessibilityEnhancer.cleanup();
      clearInterval(metricsInterval);
    };
  }, []);

  return (
    <HelmetProvider>
      <AdvancedErrorBoundary
        enableErrorReporting={true}
        enableRetry={true}
        onError={(error, errorInfo) => {
          logger.error(error.message, { error, errorInfo });
        }}
      >
        <PerformanceOptimizer>
          <EnhancedAccessibility
            enableRealTimeMonitoring={process.env.NODE_ENV === 'development'}
            enableKeyboardNavigation={true}
            enableHighContrast={true}
            enableReducedMotion={true}
            onMetricsUpdate={(metrics) => {
              if (process.env.NODE_ENV === 'development') {
                logger.info('Accessibility Metrics', { component: 'AccessibilityEnhancer', metrics });
              }
            }}
          />
          <EnhancedSEO
            title="Zion Tech Group - Advanced AI & Technology Solutions | Enterprise AI Transformation"
            description="Transform your business with cutting-edge AI solutions, digital transformation, and cloud services. Proven strategies delivering $50M+ annual savings and 95% process automation."
            keywords={[
              'AI solutions',
              'enterprise AI transformation',
              'digital automation',
              'cloud services',
              'AI consulting',
              'machine learning',
              'artificial intelligence',
              'digital transformation',
              'technology services',
              'Zion Tech Group',
              'AI implementation',
              'enterprise architecture',
              'cost optimization',
              'autonomous systems',
              'quantum computing',
              'blockchain',
              'cybersecurity'
            ]}
            canonicalUrl="https://ziontechgroup.com"
            ogImage="https://ziontechgroup.com/og-image.jpg"
            ogType="website"
            twitterCard="summary_large_image"
          />
          <Router>
            <div className="App">
              <Navigation />
              <main id="main-content" role="main">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/enterprise" element={<EnterprisePage />} />
                    <Route path="/services-advertising" element={<ServicesAdvertisingPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />

              {/* Enhanced Performance Monitor */}
              <EnhancedPerformanceMonitor
                enableRealTimeMonitoring={process.env.NODE_ENV === 'development'}
                onMetricsUpdate={(metrics) => {
                  if (process.env.NODE_ENV === 'development') {
                    logger.info('Performance Metrics', { component: 'PerformanceMonitor', metrics });
                  }
                }}
                threshold={{
                  fcp: 1500,
                  lcp: 2500,
                  cls: 0.1,
                  fid: 100
                }}
              />
            </div>
          </Router>
        </PerformanceOptimizer>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;