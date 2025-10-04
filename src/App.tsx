import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

<<<<<<< HEAD
// Import core components (always loaded)
import Header from './components/Header';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import LoadingSpinner from './components/LoadingSpinner';
// import UserFriendlyErrorBoundary from './components/UserFriendlyErrorBoundary';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
=======
// Components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
>>>>>>> cursor/fix-errors-and-merge-to-main-6f5b

// Pages
import HomePage from './page';

// Utils
import {
  setupGlobalErrorHandling,
  monitorPerformance,
} from '../utils/errorHandling';
import { performanceOptimizer } from '../utils/performanceOptimizer';

// Styles
import '../src/index.css';

const App: React.FC = () => {
<<<<<<< HEAD
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  // const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics | null>(null);

  // Performance monitoring toggle
  const togglePerformanceMonitor = useCallback(() => {
    setShowPerformanceMonitor(prev => !prev);
  }, []);

  // Performance metrics collection
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6f5b
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
    </HelmetProvider>
  );
};

export default App;
