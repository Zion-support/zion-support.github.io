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

// AI Services Pages
const _AIServicesPage = lazy(() => import('./ai-services/page'));
const _AIMarketingPage = lazy(() => import('./ai-marketing/page'));
const _AIAutomationPage = lazy(() => import('./ai-automation/page'));
const _AIHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const _AIFintechPage = lazy(() => import('./ai-fintech/page'));
const _AIDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const _AICybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const _AIWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const _AICloudInfrastructurePage = lazy(() => import('./ai-cloud-infrastructure/page'));
const _AIEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const _AIMobileAppDevelopmentPage = lazy(() => import('./ai-mobile-app-development/page'));

// IT Services Pages
const _ITServicesPage = lazy(() => import('./it-services/page'));
const _MicroSAASPage = lazy(() => import('./micro-saas/page'));
const _CybersecurityPage = lazy(() => import('./cybersecurity/page'));

// Specialized Technology Pages
const _QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const _AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const _BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const _BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const _IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));

// Additional Pages
const _BlogPage = lazy(() => import('./blog-index'));
const _GuidesPage = lazy(() => import('./guides/page'));
const _SitemapPage = lazy(() => import('./sitemap/page'));

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
                        
                        {/* AI Services Routes */}
                        <Route path="/ai-services" element={<_AIServicesPage />} />
                        <Route path="/ai-marketing" element={<_AIMarketingPage />} />
                        <Route path="/ai-automation" element={<_AIAutomationPage />} />
                        <Route path="/ai-healthcare" element={<_AIHealthcarePage />} />
                        <Route path="/ai-fintech" element={<_AIFintechPage />} />
                        <Route path="/ai-data-analytics" element={<_AIDataAnalyticsPage />} />
                        <Route path="/ai-cybersecurity" element={<_AICybersecurityPage />} />
                        <Route path="/ai-workflow-automation" element={<_AIWorkflowAutomationPage />} />
                        <Route path="/ai-cloud-infrastructure" element={<_AICloudInfrastructurePage />} />
                        <Route path="/ai-ecommerce-solutions" element={<_AIEcommerceSolutionsPage />} />
                        <Route path="/ai-mobile-app-development" element={<_AIMobileAppDevelopmentPage />} />
                        
                        {/* IT Services Routes */}
                        <Route path="/it-services" element={<_ITServicesPage />} />
                        <Route path="/micro-saas" element={<_MicroSAASPage />} />
                        <Route path="/cybersecurity" element={<_CybersecurityPage />} />
                        
                        {/* Specialized Technology Routes */}
                        <Route path="/quantum-computing" element={<_QuantumComputingPage />} />
                        <Route path="/autonomous-systems" element={<_AutonomousSystemsPage />} />
                        <Route path="/business-intelligence" element={<_BusinessIntelligencePage />} />
                        <Route path="/blockchain-web3" element={<_BlockchainWeb3Page />} />
                        <Route path="/iot-edge-computing" element={<_IoTEdgeComputingPage />} />
                        
                        {/* Additional Routes */}
                        <Route path="/blog" element={<_BlogPage />} />
                        <Route path="/guides" element={<_GuidesPage />} />
                        <Route path="/sitemap" element={<_SitemapPage />} />
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