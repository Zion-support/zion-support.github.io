import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import Loading from './components/Loading';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import PerformanceMonitor from './utils/performance-monitor';
import SEOOptimizer from './utils/seo-optimizer';
import ErrorHandler from './utils/error-handler';
import './index.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Team = lazy(() => import('./pages/Team'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

function App() {
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    // Initialize all optimization systems
    const initializeOptimizations = () => {
      try {
        // Initialize performance monitoring
        const performanceMonitor = PerformanceMonitor.getInstance();
        performanceMonitor.init();
        
        // Initialize SEO optimization
        const seoOptimizer = SEOOptimizer.getInstance();
        seoOptimizer.init();
        
        // Initialize error handling
        const errorHandler = ErrorHandler.getInstance();
        errorHandler.init();
        
        console.log('All optimization systems initialized successfully');
      } catch (error) {
        console.error('Failed to initialize optimization systems:', error);
        const errorHandler = ErrorHandler.getInstance();
        errorHandler.handleError({
          type: 'javascript',
          message: 'Failed to initialize optimization systems',
          error: error as Error
        });
      }
    };

    // Initialize optimizations after component mount
    initializeOptimizations();

    // Cleanup on unmount
    return () => {
      console.log('Cleaning up optimization systems');
      PerformanceMonitor.getInstance().cleanup();
      SEOOptimizer.getInstance().cleanup();
      ErrorHandler.getInstance().cleanup();
    };
  }, []);

  return (
    <ErrorBoundary>
      <SEO />
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/team' element={<Team />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/terms' element={<Terms />} />
          </Routes>
        </Suspense>
      </Router>
      
      {/* Analytics Toggle Button */}
      <button
        onClick={() => setShowAnalytics(true)}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-40 transition-colors"
        title="Open Analytics Dashboard"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>

      {/* Analytics Dashboard */}
      <AnalyticsDashboard
        isVisible={showAnalytics}
        onClose={() => setShowAnalytics(false)}
      />
    </ErrorBoundary>
  );
}

export default App;
