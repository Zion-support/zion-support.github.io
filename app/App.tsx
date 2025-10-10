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
const InteractiveContentShowcase2026 = lazy(
  () => import('./components/InteractiveContentShowcase2026')
);
const InteractiveAIROICalculator = lazy(
  () => import('./components/InteractiveAIROICalculator')
);

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
const SitemapPage = lazy(() => import('./sitemap/page'));

// Utils
import { lazyLoadImages, preloadCriticalResources, collectPerformanceMetrics, performanceOptimizer } from './utils/performanceOptimizer';
import { logger } from './utils/logger';
import performanceMonitor from './utils/performanceMonitor';
import seoOptimizer from './utils/seoOptimizer';
import accessibilityEnhancer from './utils/accessibilityEnhancer';

// Styles
import './globals.css';

const App = () => {
  useEffect(() => {
    // Initialize performance monitoring
    performanceMonitor.init();
    
    // Preload critical resources
    preloadCriticalResources();
    
    // Lazy load images
    lazyLoadImages();
    
    // Collect performance metrics
    collectPerformanceMetrics();
    
    // Initialize SEO optimizer
    seoOptimizer.init();
    
    // Initialize accessibility enhancer
    accessibilityEnhancer.init();
    
    // Log app initialization
    logger.info('App initialized successfully');
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <AdvancedErrorBoundary>
            <AccessibilityEnhancer>
              <SEOEnhancer>
                <PerformanceOptimizer>
                  <Navigation />
                  
                  <main className="flex-1">
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
                        <Route path="/sitemap" element={<SitemapPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  
                  <Footer />
                  
                  <AdvancedPerformanceMonitor />
                  <PerformanceDashboard />
                  <AdvancedSEOOptimizer />
                  <Analytics />
                  
                  <Suspense fallback={null}>
                    <InteractiveContentShowcase2026 />
                    <InteractiveAIROICalculator />
                  </Suspense>
                </PerformanceOptimizer>
              </SEOEnhancer>
            </AccessibilityEnhancer>
          </AdvancedErrorBoundary>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;