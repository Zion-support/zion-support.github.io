'use client';

import React, { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import SEOEnhancer from './components/SEOEnhancer';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
import LoadingSpinner from './components/LoadingSpinner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
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

// Additional service pages
const AiServicesPage = lazy(() => import('./ai-services/page'));
const ItServicesPage = lazy(() => import('./it-services/page'));
const MicroSaasPage = lazy(() => import('./micro-saas/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const IotEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));

// Additional pages
const BlogPage = lazy(() => import('./blog/page'));
const GuidesPage = lazy(() => import('./guides/page'));
const SitemapPage = lazy(() => import('./sitemap/page'));
const NotFoundPage = lazy(() => import('./not-found'));
const OfflinePage = lazy(() => import('./offline/page'));

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
          <AccessibilityEnhancer>
            <SEOEnhancer
              title="Zion Tech Group - Advanced AI and IT Solutions"
              description="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
            >
              <AdvancedSEOOptimizer
                config={{
                  title: 'Zion Tech Group - Advanced AI and IT Solutions',
                  description: 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology.',
                  keywords: ['AI solutions', 'enterprise AI', 'quantum computing', 'autonomous systems', 'digital transformation', 'automation', 'cloud services', 'AI consulting', 'business intelligence', 'machine learning'],
                  canonicalUrl: 'https://ziontechgroup.com',
                  ogImage: 'https://ziontechgroup.com/og-image.jpg',
                  structuredData: {
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
                    ]
                  }
                }}
                enableStructuredData={true}
                enableOpenGraph={true}
                enableTwitterCards={true}
                enableSchemaMarkup={true}
              />
              <Router>
                <div className="App">
                  <Navigation />
                  <main id="main-content">
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
                        
                        {/* Service Pages */}
                        <Route path="/ai-services" element={<AiServicesPage />} />
                        <Route path="/it-services" element={<ItServicesPage />} />
                        <Route path="/micro-saas" element={<MicroSaasPage />} />
                        <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                        <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
                        <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
                        <Route path="/cybersecurity" element={<CybersecurityPage />} />
                        <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                        <Route path="/iot-edge-computing" element={<IotEdgeComputingPage />} />
                        
                        {/* Additional Pages */}
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/guides" element={<GuidesPage />} />
                        <Route path="/sitemap" element={<SitemapPage />} />
                        <Route path="/offline" element={<OfflinePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />

                  {/* Performance Dashboard */}
                  <PerformanceDashboard />
                  
                  {/* Advanced Performance Monitor */}
                  <AdvancedPerformanceMonitor
                    enableRealTimeMonitoring={process.env['NODE_ENV'] === 'development'}
                    onMetricsUpdate={(metrics) => {
                      if (process.env['NODE_ENV'] === 'development') {
                        logger.info('Performance Metrics', { component: 'PerformanceMonitor', metrics });
                      }
                    }}
                  />
                </div>
              </Router>
            </SEOEnhancer>
          </AccessibilityEnhancer>
        </PerformanceOptimizer>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;