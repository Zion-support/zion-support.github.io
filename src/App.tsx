import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import SEOHead from './components/SEOHead';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { LoadingSpinner } from './components/LoadingSpinner';

// Import our new comprehensive optimization components
import EnhancedAccessibilityMonitor from '../app/components/EnhancedAccessibilityMonitor';
import AdvancedPerformanceMonitor from '../app/components/AdvancedPerformanceMonitor';
import SEOOptimizer from '../app/components/SEOOptimizer';
import { initializeOptimizer } from '../utils/comprehensiveOptimizer';

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.4
};


// Lazy loaded components for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/About'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ServicesPage = React.lazy(() => import('./pages/Services'));
const BlogPage = React.lazy(() => import('./pages/Blog'));

// Simple Error Boundary
class ErrorBoundary extends React.Component<{ children: React.ReactNode; fallback?: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  // Initialize comprehensive optimizer
  useEffect(() => {
    initializeOptimizer({
      accessibility: {
        autoFix: true,
        announceChanges: true,
        respectMotionPreferences: true
      },
      performance: {
        enableLazyLoading: true,
        preloadCritical: true,
        optimizeScroll: true,
        monitorMemory: true
      },
      seo: {
        autoOptimize: true,
        generateStructuredData: true,
        optimizeMetaTags: true
      }
    });
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary fallback={<div>Error occurred</div>}>
        <Router>
          {/* SEO and Performance Monitoring */}
          <SEOHead />
          <PerformanceMonitor 
            reportToAnalytics={process.env.NODE_ENV === 'production'} 
            logToConsole={process.env.NODE_ENV === 'development'} 
          />
          <AccessibilityEnhancer />
          
          {/* Comprehensive Optimization Components */}
          <SEOOptimizer 
            seoData={{
              title: 'Zion Tech Group - Advanced AI and IT Solutions',
              description: 'Leading provider of advanced AI and IT solutions for modern businesses. Expert services in AI automation, cybersecurity, cloud infrastructure, and digital transformation.',
              keywords: ['AI solutions', 'IT services', 'cybersecurity', 'cloud computing', 'digital transformation', 'automation', 'machine learning'],
              canonicalUrl: window.location.href,
              ogImage: '/images/zion-tech-group-og.jpg',
              twitterImage: '/images/zion-tech-group-twitter.jpg',
              robots: {
                index: true,
                follow: true
              }
            }}
            autoOptimize={true}
            showAudit={process.env.NODE_ENV === 'development'}
          />
          
          {/* Development-only monitoring components */}
          {process.env.NODE_ENV === 'development' && (
            <>
              <EnhancedAccessibilityMonitor 
                showInProduction={false}
                autoFix={true}
              />
              <AdvancedPerformanceMonitor />
            </>
          )}
          
          <div className="min-h-screen bg-gray-50">
            <EnhancedErrorBoundary fallback={<div>Enhanced error occurred</div>}>
              <Header />

              {/* Main Content */}
              <motion.main
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="relative z-10"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div id="main-content" className="flex-1" tabIndex={-1}>
                    <React.Suspense fallback={
                      <LoadingSpinner 
                        size="lg" 
                        message="Loading page..."
                      />
                    }>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services/*" element={<ServicesPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/blog/:slug" element={<BlogPage />} />

                        {/* 404 Fallback */}
                        <Route
                          path="*"
                          element={
                            <div className="min-h-screen flex items-center justify-center">
                              <div className="text-center">
                                <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
                                <p className="text-xl text-gray-600 mb-8">Page not found</p>
                                <a
                                  href="/"
                                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                  Return Home
                                </a>
                              </div>
                            </div>
                          } />
                      </Routes>
                    </React.Suspense>
                  </div>
                </div>
              </motion.main>
              
              {/* Footer */}
              <Footer />
            </EnhancedErrorBoundary>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;