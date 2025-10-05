import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import core components
import Header from './components/Header';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Team = React.lazy(() => import('./pages/Team'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));

const App: React.FC = () => {
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  // const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);

  // Performance monitoring toggle
  const togglePerformanceMonitor = useCallback(() => {
    setShowPerformanceMonitor(prev => !prev);
  }, []);

  // Performance metrics collection
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'P') {
          togglePerformanceMonitor();
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [togglePerformanceMonitor]);
  return (
    <HelmetProvider>
      <Router>
        <EnhancedErrorBoundary>
          <div className="min-h-screen bg-gray-50">
            <SEOHead />
            <Header />
            
            <main className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                </Routes>
              </Suspense>
            </main>

            <Footer />

            {/* Performance Monitor Modal */}
            {showPerformanceMonitor && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={togglePerformanceMonitor}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Performance Monitor</h2>
                    <button
                      onClick={togglePerformanceMonitor}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="text-center text-gray-500">
                    Performance monitoring features coming soon...
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </EnhancedErrorBoundary>
      </Router>
    </HelmetProvider>
  );
};

export default App;
