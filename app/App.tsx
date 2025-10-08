'use client';

import React, { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import ImprovedErrorBoundary from './components/ImprovedErrorBoundary';
import SEOEnhancer from './components/SEOEnhancer';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
import AdvancedSEOComponent from './components/AdvancedSEOComponent';
import AdvancedPerformanceOptimizer from './components/AdvancedPerformanceOptimizer';
import EnhancedPerformanceMonitor from './components/EnhancedPerformanceMonitor';
import LoadingSpinner from './components/LoadingSpinner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import Analytics from './components/Analytics';

// Lazy load components for better performance
const _ContentShowcase = lazy(() => import('./components/ContentShowcase'));
const InteractiveContentShowcase2026 = lazy(
  () => import('./components/InteractiveContentShowcase2026')
);
const InteractiveAIROICalculator = lazy(
  () => import('./components/InteractiveAIROICalculator')
);

// Lazy load pages for better performance
const _HomePage = lazy(() => import('./page'));
const _AboutPage = lazy(() => import('./about/page'));
const _ServicesPage = lazy(() => import('./services/page'));
const _ContactPage = lazy(() => import('./contact/page'));
const _TeamPage = lazy(() => import('./team/page'));
const _PrivacyPage = lazy(() => import('./privacy/page'));
const _TermsPage = lazy(() => import('./terms/page'));
const _EnterprisePage = lazy(() => import('./enterprise/page'));
const _ServicesAdvertisingPage = lazy(() => import('./services-advertising/page'));
const _CaseStudiesPage = lazy(() => import('./case-studies/page'));

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
      const performanceMetrics = performanceMonitor.getMetrics();
      
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
      const performanceMetrics = performanceMonitor.getMetrics();
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
      <ImprovedErrorBoundary
        enableErrorReporting={true}
        enableRetry={true}
        maxRetries={3}
        onError={(error, errorInfo) => {
          logger.error(error.message, { error, errorInfo });
        }}
      >
        <AdvancedPerformanceOptimizer
          enableImageOptimization={true}
          enableLazyLoading={true}
          enablePreloading={true}
          enableResourceHints={true}
          enableCriticalCSS={true}
          onOptimizationComplete={(metrics) => {
            if (process.env.NODE_ENV === 'development') {
              console.log('Optimization Complete:', metrics);
            }
          }}
        />
        <AccessibilityEnhancer>
          <AdvancedSEOComponent
            config={{
              title: 'Zion Tech Group - Advanced AI and IT Solutions',
              description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with our proven AI strategies delivering $50M+ annual savings.',
              keywords: ['AI solutions', 'enterprise AI transformation', 'digital automation', 'cloud services', 'AI consulting', 'machine learning', 'artificial intelligence', 'digital transformation', 'technology services', 'Zion Tech Group', 'AI implementation', 'enterprise architecture', 'cost optimization', 'autonomous systems', 'quantum computing', 'business intelligence', 'process automation'],
              canonicalUrl: 'https://ziontechgroup.com',
              ogImage: 'https://ziontechgroup.com/og-image.jpg',
              twitterCard: 'summary_large_image',
              twitterSite: '@ziontechgroup',
              twitterCreator: '@ziontechgroup',
              structuredData: {
                '@context': 'https://schema.org',
                '@type': 'TechCompany',
                name: 'Zion Tech Group',
                description: 'Advanced AI and IT Solutions Provider',
                foundingDate: '2020',
                numberOfEmployees: '50-100',
                industry: 'Technology',
                services: [
                  'AI Solutions',
                  'Digital Transformation',
                  'Cloud Services',
                  'Automation',
                  'Business Intelligence'
                ],
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+1-302-464-0950',
                  contactType: 'Customer Service',
                  areaServed: 'US',
                  availableLanguage: 'en',
                },
                sameAs: [
                  'https://twitter.com/ziontechgroup',
                  'https://linkedin.com/company/ziontechgroup',
                ],
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'US',
                },
              }
            }}
            enableStructuredData={true}
            enableOpenGraph={true}
            enableTwitterCards={true}
            enableSchemaMarkup={true}
            enableBreadcrumbs={false}
          />
          <Router>
            <div className="App">
              <Analytics trackingId="G-XXXXXXXXXX" />
              <Navigation />
              <main id="main-content">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<_HomePage />} />
                    <Route path="/about" element={<_AboutPage />} />
                    <Route path="/services" element={<_ServicesPage />} />
                    <Route path="/contact" element={<_ContactPage />} />
                    <Route path="/team" element={<_TeamPage />} />
                    <Route path="/privacy" element={<_PrivacyPage />} />
                    <Route path="/terms" element={<_TermsPage />} />
                    <Route path="/enterprise" element={<_EnterprisePage />} />
                    <Route path="/services-advertising" element={<_ServicesAdvertisingPage />} />
                    <Route path="/case-studies" element={<_CaseStudiesPage />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />

              {/* Performance Dashboard */}
              <PerformanceDashboard />
              
              {/* Enhanced Performance Monitor */}
              <EnhancedPerformanceMonitor
                enableRealTimeMonitoring={process.env['NODE_ENV'] === 'development'}
                onMetricsUpdate={(metrics) => {
                  if (process.env['NODE_ENV'] === 'development') {
                    logger.info('Performance Metrics', { component: 'PerformanceMonitor', metrics });
                  }
                }}
                threshold={{
                  fcp: 1800,
                  lcp: 2500,
                  fid: 100,
                  cls: 0.1,
                  ttfb: 600,
                }}
              />
            </div>
          </Router>
        </AccessibilityEnhancer>
      </ImprovedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;