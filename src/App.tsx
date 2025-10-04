import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';

// Pages
import HomePage from './page';

<<<<<<< HEAD
// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));
const BlogPage = lazy(() => import('./pages/Blog'));
const ServicesPage = lazy(() => import('./pages/Services'));
const TeamPage = lazy(() => import('./pages/Team'));
const PrivacyPage = lazy(() => import('./pages/Privacy'));
const TermsPage = lazy(() => import('./pages/Terms'));

// Performance monitoring state
const App: React.FC = () => {
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);

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
        <div className="min-h-screen bg-gray-50">
          <SEOHead />
          <EnhancedErrorBoundary>
            <Header />
            
            <main className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
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
                  <PerformanceMonitor />
                </motion.div>
              </motion.div>
            )}

            {/* Performance Optimizer (hidden) */}
            <PerformanceOptimizer />
          </EnhancedErrorBoundary>
        </div>
      </Router>
=======
// Utils
import {
  setupGlobalErrorHandling,
  monitorPerformance,
} from '../utils/errorHandling';
import { performanceOptimizer } from '../utils/performanceOptimizer';

// Styles
import '../src/index.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    setupGlobalErrorHandling();

    // Initialize performance monitoring
    monitorPerformance();

    // Initialize performance optimizer
    performanceOptimizer.clearMetrics();

    console.log(
      '🚀 Zion Tech Group App initialized with comprehensive monitoring',
    );
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEOOptimizer>
          <AccessibilityEnhancer>
            <Router>
              <div className='App'>
                {/* Skip to main content link for accessibility */}
                <a
                  href='#main-content'
                  className='skip-link'
                  onClick={e => {
                    e.preventDefault();
                    const main =
                      document.querySelector('main') ||
                      document.querySelector('#main-content');
                    if (main) {
                      main.focus();
                      main.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Skip to main content
                </a>

                <Routes>
                  <Route path='/' element={<HomePage />} />
                  {/* Add more routes as needed */}
                </Routes>

                {/* Performance Dashboard */}
                <PerformanceDashboard />
              </div>
            </Router>
          </AccessibilityEnhancer>
        </SEOOptimizer>
      </ErrorBoundary>
>>>>>>> cursor/fix-errors-and-merge-to-main-80bc
    </HelmetProvider>
  );
};

export default App;
