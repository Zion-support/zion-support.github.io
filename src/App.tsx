import React, { useState, useEffect, Suspense, lazy, useCallback } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import core components (always loaded)
import Header from './components/Header';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import LoadingSpinner from './components/LoadingSpinner';
import UserFriendlyErrorBoundary from './components/UserFriendlyErrorBoundary';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';

// Lazy load performance components (only when needed)
const PerformanceOptimizer = lazy(() => import('./components/PerformanceOptimizer'));
const PerformanceMonitor = lazy(() => import('./components/PerformanceMonitor'));

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));
const ServicesPage = lazy(() => import('./pages/Services'));
const BlogPage = lazy(() => import('./pages/Blog'));

// Animation variants (memoized for performance)
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

// Loading fallback component
const PageLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner />
  </div>
);

// Main App component
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);

  // Memoized handlers for better performance
  const togglePerformanceOptimizer = useCallback(() => {
    setShowPerformanceOptimizer(prev => !prev);
  }, []);

  const togglePerformanceMonitor = useCallback(() => {
    setShowPerformanceMonitor(prev => !prev);
  }, []);

  useEffect(() => {
    // Simulate loading with reduced time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Optimized keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey) {
        switch (event.key.toLowerCase()) {
          case 'p':
            event.preventDefault();
            togglePerformanceOptimizer();
            break;
          case 'm':
            event.preventDefault();
            togglePerformanceMonitor();
            break;
          case 'escape':
            event.preventDefault();
            setShowPerformanceOptimizer(false);
            setShowPerformanceMonitor(false);
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [togglePerformanceOptimizer, togglePerformanceMonitor]);

  if (isLoading) {
    return (
      <HelmetProvider>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <LoadingSpinner />
        </div>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <UserFriendlyErrorBoundary>
        <EnhancedErrorBoundary>
          <Router>
            <div className="min-h-screen bg-white">
              <SEOHead />
              <Header />
              
              <motion.main
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="flex-1"
              >
                <Suspense fallback={<PageLoadingFallback />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                  </Routes>
                </Suspense>
              </motion.main>

              <Footer />

              {/* Performance Optimizer Modal */}
              {showPerformanceOptimizer && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">Performance Optimizer</h2>
                      <button
                        onClick={togglePerformanceOptimizer}
                        className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                        aria-label="Close Performance Optimizer"
                      >
                        ✕
                      </button>
                    </div>
                    <Suspense fallback={<LoadingSpinner />}>
                      <PerformanceOptimizer />
                    </Suspense>
                  </div>
                </div>
              )}

              {/* Performance Monitor Modal */}
              {showPerformanceMonitor && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">Performance Monitor</h2>
                      <button
                        onClick={togglePerformanceMonitor}
                        className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                        aria-label="Close Performance Monitor"
                      >
                        ✕
                      </button>
                    </div>
                    <Suspense fallback={<LoadingSpinner />}>
                      <PerformanceMonitor />
                    </Suspense>
                  </div>
                </div>
              )}

              {/* Keyboard Shortcuts Help */}
              <div className="fixed bottom-4 left-4 z-40 bg-gray-800 text-white p-3 rounded-lg shadow-lg text-sm opacity-75 hover:opacity-100 transition-opacity duration-200">
                <div className="font-semibold mb-1">Keyboard Shortcuts:</div>
                <div>Ctrl+Shift+P: Performance Optimizer</div>
                <div>Ctrl+Shift+M: Performance Monitor</div>
                <div>Ctrl+Shift+Esc: Close Modals</div>
              </div>
            </div>
          </Router>
        </EnhancedErrorBoundary>
      </UserFriendlyErrorBoundary>
    </HelmetProvider>
  );
}

export default App;