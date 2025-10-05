import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import EnhancedSEO from './components/EnhancedSEO';
import { LoadingPage } from './components/EnhancedLoading';
import performanceOptimizer from './utils/performance-optimizer';
import errorHandler from './utils/advanced-error-handler';
import securityEnhancer from './utils/security-enhancer';
import seoOptimizer from './utils/seo-optimizer';
import cacheSystem from './utils/advanced-caching';
import analyticsOptimizer from './utils/analytics-optimizer';
import SystemMonitor from './components/SystemMonitor';
import performanceMonitor from './utils/advanced-performance-monitor';
=======
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import Loading from './components/Loading';
>>>>>>> 31330b606ffa8add68612abb144b6508c148ddf4
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
  useEffect(() => {
    // Initialize all optimization systems
    const initializeOptimizations = () => {
      try {
        // Initialize performance monitoring
<<<<<<< HEAD
        performanceOptimizer.startPerformanceMonitoring();
        performanceMonitor.startMonitoring();
=======
        // performanceOptimizer.startPerformanceMonitoring();
>>>>>>> 31330b606ffa8add68612abb144b6508c148ddf4
        
        // Initialize security enhancements
        // securityEnhancer.setupSecurityMonitoring();
        
        // Initialize SEO tracking
        // seoOptimizer.trackPageView();
        
        // Set up error reporting
        // errorHandler.setReportingEnabled(true);
        
        console.log('All optimization systems initialized successfully');
      } catch (error) {
        console.error('Failed to initialize optimization systems:', error);
        // errorHandler.handleError({
        //   type: 'Initialization Error' 
        //   message: 'Failed to initialize optimization systems' 
        //   error: error.message 
        //   timestamp: new Date().toISOString()
        // });
      }
    };

    // Initialize optimizations after component mount
    initializeOptimizations();

    // Cleanup on unmount
    return () => {
<<<<<<< HEAD
      performanceOptimizer.cleanup();
      performanceMonitor.stopMonitoring();
=======
      // performanceOptimizer.cleanup();
>>>>>>> 31330b606ffa8add68612abb144b6508c148ddf4
    };
  }, []);

  return (
    <EnhancedErrorBoundary showDetails={process.env.NODE_ENV === 'development'}>
      <EnhancedSEO />
      <Router>
        <Suspense fallback={<LoadingPage />}>
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
<<<<<<< HEAD
      <SystemMonitor />
    </EnhancedErrorBoundary>
=======
    </ErrorBoundary>
>>>>>>> 31330b606ffa8add68612abb144b6508c148ddf4
  );
}

export default App;
