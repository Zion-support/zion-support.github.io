'use client';

import React, { Suspense, lazy, useCallback, useEffect } from 'react';
import Link from 'next/link';
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

// Lazy load components for better performance
const ContentShowcase = lazy(() => import('./components/ContentShowcase'));
const InteractiveContentShowcase2026 = lazy(
  () => import('./components/InteractiveContentShowcase2026')
);
const InteractiveAIROICalculator = lazy(
  () => import('./components/InteractiveAIROICalculator')
);

// Utils
import { lazyLoadImages, preloadCriticalResources, collectPerformanceMetrics, performanceOptimizer } from './utils/performanceOptimizer';
import { logger } from './utils/logger';

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    logger.info('App initialized', { component: 'App' });

    // Initialize performance monitoring
    lazyLoadImages();
    preloadCriticalResources();
    performanceOptimizer.init();
    
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const pageLoadMetrics = collectPerformanceMetrics();
      const metrics = performanceOptimizer.getMetrics();
      if (pageLoadMetrics) {
        console.log('Performance metrics collected:', pageLoadMetrics);
      }
      if (metrics) {
        console.log('Performance metrics:', metrics);
      }
    }
    
    logger.info('Performance monitoring initialized', { component: 'App' });
    logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring', { component: 'App' });
  }, []);

  return (
    <HelmetProvider>
      <AdvancedErrorBoundary
        enableErrorReporting={true}
        enableRetry={true}
        onError={(error, errorInfo) => {
          logger.error('Application Error', error, { component: 'ErrorBoundary', errorInfo });
        }}
      >
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
                url: 'https://ziontechgroup.com',
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
                <main id="main-content">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      {/* Add more routes as needed */}
                    </Routes>
                  </Suspense>
                </main>

                {/* Performance Dashboard */}
                <PerformanceDashboard />
                
                {/* Advanced Performance Monitor */}
                <AdvancedPerformanceMonitor
                  enableRealTimeMonitoring={process.env.NODE_ENV === 'development'}
                  onMetricsUpdate={(metrics) => {
                    if (process.env.NODE_ENV === 'development') {
                      logger.info('Performance Metrics', { component: 'PerformanceMonitor', metrics: metrics as unknown as Record<string, unknown> });
                    }
                  }}
                />
              </div>
            </Router>
          </SEOEnhancer>
        </AccessibilityEnhancer>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

// Loading fallback component
const LoadingFallback: React.FC<{ height?: string }> = ({
  height = 'h-32',
}) => (
  <div className={`flex items-center justify-center ${height} w-full`}>
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
  </div>
);

const HomePage: React.FC = () => {
  // Analytics tracking for phone clicks
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
      ((window as unknown as { gtag: Function }).gtag)('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link 
                href="/" 
                className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
                aria-label="Zion Tech Group - Home"
              >
                Zion Tech Group
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/services" className="text-gray-700 hover:text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded px-2 py-1">
                Services
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded px-2 py-1">
                Blog
              </Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded px-2 py-1">
                Case Studies
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded px-2 py-1">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <a
                href="tel:+1-302-464-0950"
                onClick={handlePhoneClick}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                aria-label="Call us at +1-302-464-0950"
              >
                +1-302-464-0950
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="relative">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered Enterprise
                <span className="block text-indigo-600">Transformation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Revolutionize your business with cutting-edge AI solutions. 
                Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains 
                through our proven enterprise automation platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/services"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Explore Solutions
                </Link>
                <Link 
                  href="/contact"
                  className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Showcase */}
        <Suspense fallback={<LoadingFallback height="h-96" />}>
          <ContentShowcase />
        </Suspense>

        {/* Interactive Content Showcase 2026 */}
        <Suspense fallback={<LoadingFallback height="h-96" />}>
          <InteractiveContentShowcase2026 />
        </Suspense>

        {/* Interactive AI ROI Calculator */}
        <Suspense fallback={<LoadingFallback height="h-96" />}>
          <InteractiveAIROICalculator />
        </Suspense>

        {/* Performance Dashboard */}
        <PerformanceDashboard />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
              <p className="text-gray-300 mb-4">
                Leading provider of AI-powered enterprise solutions, automation, 
                and digital transformation services.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+1-302-464-0950" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  +1-302-464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">AI Solutions</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Cloud Automation</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Enterprise IT</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Digital Transformation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">About Us</Link></li>
                <li><Link href="/case-studies" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Case Studies</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
