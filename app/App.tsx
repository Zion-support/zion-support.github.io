'use client';

import React, { Suspense, lazy, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import SEOEnhancer from './components/SEOEnhancer';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
import LoadingSpinner from './components/LoadingSpinner';
import PerformanceDashboard from './components/PerformanceDashboard';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';

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
    logger.lifecycle('initialized', 'App');

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
  }, []);

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
    <HelmetProvider>
      <AdvancedErrorBoundary
        enableErrorReporting={true}
        enableRetry={true}
        onError={(error, errorInfo) => {
          logger.error('Application Error', 'ErrorBoundary', { error: error.message, errorInfo });
        }}
      >
        <AccessibilityEnhancer>
            <SEOEnhancer
              title='Zion Tech Group - Advanced AI and IT Solutions'
              description='Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology.'
            >
              <AdvancedSEOOptimizer
                seoData={{
                  title: 'Zion Tech Group - Advanced AI and IT Solutions',
                  description: 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology.',
                  keywords: ['AI solutions', 'enterprise AI', 'quantum computing', 'autonomous systems', 'digital transformation', 'automation', 'cloud services', 'AI consulting', 'business intelligence', 'machine learning'],
                  canonicalUrl: 'https://ziontechgroup.com',
                  ogImage: 'https://ziontechgroup.com/og-image.jpg',
                  twitterCard: 'summary_large_image',
                  structuredData: {
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    name: 'Zion Tech Group',
                    description: 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems',
                    url: 'https://ziontechgroup.com',
                    logo: 'https://ziontechgroup.com/logo.png',
                    contactPoint: {
                      '@type': 'ContactPoint',
                      telephone: '+1-302-464-0950',
                      contactType: 'customer service',
                      email: 'kleber@ziontechgroup.com',
                    },
                    address: {
                      '@type': 'PostalAddress',
                      streetAddress: '364 E Main St STE 1008',
                      addressLocality: 'Middletown',
                      addressRegion: 'DE',
                      postalCode: '19709',
                      addressCountry: 'US',
                    },
                    sameAs: [
                      'https://linkedin.com/company/zion-tech-group',
                      'https://twitter.com/ziontechgroup',
                    ],
                    offers: {
                      '@type': 'Offer',
                      name: 'AI Enterprise Transformation Services',
                      description: 'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
                      price: '50000',
                      priceCurrency: 'USD',
                      availability: 'https://schema.org/InStock',
                    },
                  }
                }}
                enableStructuredData={true}
                enableOpenGraph={true}
                enableTwitterCards={true}
                enableSchemaMarkup={true}
              />
              <Router>
                <div className='App'>
                  <main id='main-content'>
                    <Suspense fallback={<LoadingSpinner />}>
                      <Routes>
                        <Route path='/' element={<HomePage />} />
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
                        logger.performance('Performance Metrics', metrics as unknown as Record<string, unknown>, 'PerformanceMonitor');
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

// HomePage component
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
    <>
      <SEOOptimizer 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, automation, and digital transformation services. Transform your business with cutting-edge AI micro SaaS services and cloud automation."
        keywords={['AI solutions', 'enterprise AI', 'digital transformation', 'automation', 'cloud services', 'AI consulting', 'business intelligence', 'machine learning', 'artificial intelligence', 'enterprise software']}
      />
      <AccessibilityEnhancer>
        <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
        <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Link 
                  href="/" 
                  className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
                  aria-label="Zion Tech Group - Home"
                >
                  Zion Tech Group
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link 
                  href="/services" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
                >
                  Services
                </Link>
                <Link 
                  href="/blog" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
                >
                  Blog
                </Link>
                <Link 
                  href="/case-studies" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
                >
                  Case Studies
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
                >
                  Contact
                </Link>
              </nav>
              <div className="md:hidden">
                <button 
                  className="text-gray-700 hover:text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded p-2"
                  aria-label="Open mobile menu"
                  aria-expanded="false"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main role="main">
          <section className="py-20 relative overflow-hidden" aria-labelledby="hero-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="mb-8">
                <span className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6" role="img" aria-label="Rocket emoji">
                  🚀 Leading AI Innovation Since 2025
                </span>
              </div>
              <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Business with
                <span className="text-indigo-600 block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  AI-Powered Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
                and enterprise IT solutions that drive growth, efficiency, and innovation across industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/services"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-label="Explore our AI and IT services">
                  Explore Our Services
                </Link>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-label="Call us at +1 302 464 0950">
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Trust indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
                  <div className="text-gray-600 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
                  <div className="text-gray-600 text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">99.9%</div>
                  <div className="text-gray-600 text-sm">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Services Section */}
          <section className="py-20 bg-white" aria-labelledby="services-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Comprehensive AI & IT Solutions
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From AI-powered automation to enterprise cloud solutions, we deliver cutting-edge technology that drives business growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
                <article className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300" role="listitem">
                  <div className="text-indigo-600 text-4xl mb-4" role="img" aria-label="Robot emoji">🤖</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">AI Micro SaaS Services</h3>
                  <p className="text-gray-600 mb-4">
                    Scalable AI solutions including chatbots, automation tools, and intelligent business processes.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1" role="list">
                    <li>• Custom AI Model Development</li>
                    <li>• Natural Language Processing</li>
                    <li>• Predictive Analytics</li>
                    <li>• Machine Learning Pipelines</li>
                  </ul>
                </article>
                
                <article className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300" role="listitem">
                  <div className="text-blue-600 text-4xl mb-4" role="img" aria-label="Cloud emoji">☁️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Automation</h3>
                  <p className="text-gray-600 mb-4">
                    Streamline operations with automated cloud infrastructure and deployment pipelines.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1" role="list">
                    <li>• Infrastructure as Code</li>
                    <li>• CI/CD Pipeline Setup</li>
                    <li>• Auto-scaling Solutions</li>
                    <li>• Cloud Cost Optimization</li>
                  </ul>
                </article>
                
                <article className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300" role="listitem">
                  <div className="text-green-600 text-4xl mb-4" role="img" aria-label="Building emoji">🏢</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive digital transformation services for large-scale business operations.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1" role="list">
                    <li>• Digital Transformation</li>
                    <li>• Legacy System Modernization</li>
                    <li>• Data Migration</li>
                    <li>• Enterprise Integration</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* Content Showcase */}
          <section className='py-16 bg-gray-50'>
            <div className='container mx-auto px-4'>
              <Suspense fallback={<LoadingSpinner />}>
                <ContentShowcase />
              </Suspense>
            </div>
          </section>

          {/* Interactive AI ROI Calculator */}
          <section className='py-16 bg-white'>
            <div className='container mx-auto px-4'>
              <Suspense fallback={<LoadingSpinner />}>
                <InteractiveAIROICalculator />
              </Suspense>
            </div>
          </section>

          {/* 2026 Content Showcase */}
          <section className='py-16 bg-gray-50'>
            <div className='container mx-auto px-4'>
              <Suspense fallback={<LoadingSpinner />}>
                <InteractiveContentShowcase2026 />
              </Suspense>
            </div>
          </section>

          {/* Enhanced Features Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We combine cutting-edge technology with proven methodologies to deliver exceptional results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-indigo-600 text-2xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-gray-600 text-sm">Rapid prototyping and agile development methodologies</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 text-2xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Secure & Reliable</h3>
                  <p className="text-gray-600 text-sm">Enterprise-grade security and 99.9% uptime guarantee</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-2xl">📈</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Scalable Solutions</h3>
                  <p className="text-gray-600 text-sm">Architecture designed to grow with your business</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 text-2xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Results-Driven</h3>
                  <p className="text-gray-600 text-sm">Data-driven approach with measurable business outcomes</p>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that have already transformed their operations with our AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                  Get Started Today
                </Link>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-transparent text-white px-8 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105 font-medium">
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-12" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Zion Tech Group</h3>
                <p className="text-gray-400 text-sm">
                  Leading provider of AI-powered enterprise solutions and digital transformation services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-gray-400" role="list">
                  <li><Link href="/services" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">AI Solutions</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Cloud Automation</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Enterprise IT</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Digital Transformation</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400" role="list">
                  <li><Link href="/about" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">About Us</Link></li>
                  <li><Link href="/case-studies" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Case Studies</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <div className="text-sm text-gray-400 space-y-2">
                  <p>Phone: <a href="tel:+13024640950" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">+1 302 464 0950</a></p>
                  <p>Email: <a href="mailto:info@zion.app" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">info@zion.app</a></p>
                  <p>Website: <a href="https://zion.app" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">zion.app</a></p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
        </div>
      </AccessibilityEnhancer>
    </>
  );
};

export default App;