import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import existing components
import Header from './components/Header';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import LoadingSpinner from './components/LoadingSpinner';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import UserFriendlyErrorBoundary from './components/UserFriendlyErrorBoundary';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';

// Import pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ServicesPage from './pages/Services';
import BlogPage from './pages/Blog';

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

// Main App component
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey) {
        switch (event.key) {
          case 'P':
            event.preventDefault();
            setShowPerformanceOptimizer(true);
            break;
          case 'M':
            event.preventDefault();
            setShowPerformanceMonitor(true);
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

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
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                </Routes>
              </motion.main>

              <Footer />

              {/* Performance Optimizer Modal */}
              {showPerformanceOptimizer && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">Performance Optimizer</h2>
                      <button
                        onClick={() => setShowPerformanceOptimizer(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </button>
                    </div>
                    <PerformanceOptimizer />
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
                        onClick={() => setShowPerformanceMonitor(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </button>
                    </div>
                    <PerformanceMonitor />
                  </div>
                </div>
              )}

              {/* Keyboard Shortcuts Help */}
              <div className="fixed bottom-4 left-4 z-40 bg-gray-800 text-white p-3 rounded-lg shadow-lg text-sm opacity-75 hover:opacity-100 transition-opacity duration-200">
                <div className="font-semibold mb-1">Keyboard Shortcuts:</div>
                <div>Ctrl+Shift+P: Performance Optimizer</div>
                <div>Ctrl+Shift+M: Performance Monitor</div>
              </div>
            </div>
          </Router>
        </EnhancedErrorBoundary>
      </UserFriendlyErrorBoundary>
    </HelmetProvider>
  );
}

export default App;