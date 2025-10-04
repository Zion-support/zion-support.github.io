import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import BannerManager from './components/BannerManager';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import SEOHead from './components/EnhancedSEOHead';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import NotificationSystem from './components/NotificationSystem';
import PerformanceMonitor from './components/PerformanceMonitor';

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
};

// Banner data
const bannerData = [
  {
    id: '1',
    title: 'Welcome to Zion Tech Group',
    subtitle: 'Advanced AI and IT Solutions',
    image: '/images/hero-banner.jpg',
    link: '/services'
  }
];

// Lazy loaded components for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const SolutionsPage = React.lazy(() => import('./pages/SolutionsPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudiesPage'));

// Simple Error Boundary
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
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
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <SEOHead />
            <EnhancedErrorBoundary>
              <Header />

              {/* Dynamic Banner System */}
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="relative"
              >
                <BannerManager
                  banners={bannerData}
                  rotationInterval={8000}
                  maxVisibleBanners={3}
                />
              </motion.div>

              {/* Main Content */}
              <motion.main
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="relative z-10"
              >
                <div className="flex gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <Sidebar />
                  <div id="main-content" className="flex-1">
                    <React.Suspense fallback={
                      <div className="min-h-screen flex items-center justify-center">
                        <div className="text-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                          <p className="text-gray-600">Loading...</p>
                        </div>
                      </div>
                    }>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services/*" element={<ServicesPage />} />
                        <Route path="/solutions/*" element={<SolutionsPage />} />
                        <Route path="/blog/*" element={<BlogPage />} />
                        <Route path="/case-studies" element={<CaseStudiesPage />} />

                        {/* Blog Routes */}
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
                                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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

              <Footer />
            </EnhancedErrorBoundary>
          </div>

          {showPerformanceOptimizer && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" role="dialog" aria-modal="true">
              <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Performance Optimizer</h2>
                  <button onClick={() => setShowPerformanceOptimizer(false)} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
                </div>
                <PerformanceOptimizer isVisible={true} onClose={() => setShowPerformanceOptimizer(false)} />
              </div>
            </div>
          )}

          {/* Performance Monitoring */}
          <PerformanceMonitor />
          
          {/* Accessibility Enhancement */}
          <AccessibilityEnhancer />
          
          {/* Notification System */}
          <NotificationSystem />
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;