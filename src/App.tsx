import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import SkipLink from './components/SkipLink';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorFallback from './components/ErrorFallback';
import SystemDashboard from './components/SystemDashboard';
import AccessibilityTester from './components/AccessibilityTester';
import PerformanceProfiler from './components/PerformanceProfiler';
import { initializeErrorReporting } from './utils/errorReporting';
import { initOptimizations } from './utils/buildOptimizations';
import { seoManager, seoAnalytics, performanceSEO } from './utils/seoEnhanced';
import { accessibilityManager } from './utils/accessibility';
import { securityManager } from './utils/security';
import { PerformanceMonitor, ResourceMonitor, MemoryMonitor } from './utils/performance';
import './index.css';

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App(): React.JSX.Element {
  useEffect(() => {
    // Initialize error reporting
    initializeErrorReporting();
    
    // Initialize build optimizations
    initOptimizations();
    
    // Initialize security features
    securityManager.initialize();
    
    // Initialize performance monitoring
    const performanceMonitor = PerformanceMonitor.getInstance();
    performanceMonitor.measurePageLoad();
    
    const resourceMonitor = ResourceMonitor.getInstance();
    resourceMonitor.startMonitoring();
    
    const memoryMonitor = MemoryMonitor.getInstance();
    memoryMonitor.startMonitoring();
    
    // Initialize accessibility features
    accessibilityManager.initialize({
      announceChanges: true,
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      highContrast: window.matchMedia('(prefers-contrast: high)').matches
    });

    // Initialize SEO analytics
    seoAnalytics.trackPageView(window.location.pathname);
    
    // Initialize performance SEO optimizations
    performanceSEO.optimizeImages();
    performanceSEO.preloadCriticalResources();
    performanceSEO.optimizeFonts();

    // Set default SEO data
    seoManager.updateSEO({
      title: 'Zion Tech Group - Leading Technology Solutions',
      description: 'Innovative technology solutions and consulting services for modern businesses. Expert development, cloud services, and digital transformation.',
      keywords: ['technology', 'consulting', 'development', 'cloud services', 'digital transformation'],
      ogType: 'website',
      ogImage: '/og-image.png',
      twitterCard: 'summary_large_image',
      structuredData: [
        seoManager.generateOrganizationStructuredData(),
        seoManager.generateWebsiteStructuredData()
      ]
    });

    // Track user engagement
    let startTime = Date.now();
    let scrollDepth = 0;
    let clicks = 0;

    const trackEngagement = () => {
      const timeOnPage = Date.now() - startTime;
      seoAnalytics.trackUserEngagement(window.location.pathname, {
        timeOnPage,
        scrollDepth,
        clicks
      });
    };

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollDepth = Math.max(scrollDepth, scrollTop / documentHeight);
    };

    // Track clicks
    const handleClick = () => {
      clicks++;
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);

    // Track engagement on page unload
    window.addEventListener('beforeunload', trackEngagement);

    // Mark app as fully initialized
    if (typeof window !== 'undefined' && window.performance) {
      performance.mark('app-init-complete');
      performance.measure('app-initialization', 'app-init-start', 'app-init-complete');
    }

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      window.removeEventListener('beforeunload', trackEngagement);
      memoryMonitor.stopMonitoring();
    };
  }, []);

  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Router>
        <div className="min-h-screen bg-white">
          <SkipLink />
          <ScrollToTop />
          <Header />
          
          <main id="main-content">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          
          {/* Development Tools */}
          <SystemDashboard />
          <AccessibilityTester />
          <PerformanceProfiler />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
