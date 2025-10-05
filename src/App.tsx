import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import Loading from './components/Loading';
import performanceOptimizer from './utils/performance-optimizer';
import errorHandler from './utils/advanced-error-handler';
import securityEnhancer from './utils/security-enhancer';
import seoOptimizer from './utils/seo-optimizer';
import cacheSystem from './utils/advanced-caching';
import analyticsOptimizer from './utils/analytics-optimizer';
import SystemMonitor from './components/SystemMonitor';
import "./index.css";

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
        performanceOptimizer.startPerformanceMonitoring();
        
        // Initialize security enhancements
        securityEnhancer.setupSecurityMonitoring();
        
        // Initialize SEO tracking
        seoOptimizer.trackPageView();
        
        // Set up error reporting
        errorHandler.setReportingEnabled(true);
        
        // Initialize advanced caching
        cacheSystem.loadFromStorage();
        
        // Initialize analytics optimization
        analyticsOptimizer.trackPageView();
        
        console.log('All optimization systems initialized successfully');
      } catch (error) {
        console.error('Failed to initialize optimization systems:', error);
        errorHandler.handleError({
          type: 'Initialization Error',
          message: 'Failed to initialize optimization systems',
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    };

    // Initialize optimizations after component mount
    initializeOptimizations();

    // Cleanup on unmount
    return () => {
      performanceOptimizer.cleanup();
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
      <SystemMonitor />
    </ErrorBoundary>
  );
}

export default App;