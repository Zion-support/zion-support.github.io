<<<<<<< HEAD
import { Suspense, lazy, useEffect } from 'react';
=======
import React, { Suspense, lazy, useEffect } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c2c5
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import Loading from './components/Loading';
<<<<<<< HEAD
=======
import performanceOptimizer from './utils/performance-optimizer';
import errorHandler from './utils/advanced-error-handler';
import securityEnhancer from './utils/security-enhancer';
import seoOptimizer from './utils/seo-optimizer';
>>>>>>> origin/fix-merge-conflicts-and-errors
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
<<<<<<< HEAD
      try {
        // Initialize performance monitoring
<<<<<<< HEAD
        // performanceOptimizer.startPerformanceMonitoring();
        
        // Initialize security enhancements
        // securityEnhancer.setupSecurityMonitoring();
        
        // Initialize SEO tracking
        // seoOptimizer.trackPageView();
        
        // Set up error reporting
        // errorHandler.setReportingEnabled(true);
=======
        performanceOptimizer.startPerformanceMonitoring();
        
        // Initialize security enhancements
        securityEnhancer.setupSecurityMonitoring();
        
        // Initialize SEO tracking
        seoOptimizer.trackPageView();
        
        // Set up error reporting
        errorHandler.setReportingEnabled(true);
>>>>>>> origin/fix-merge-conflicts-and-errors
        
        console.log('All optimization systems initialized successfully');
      } catch (error) {
        console.error('Failed to initialize optimization systems:', error);
<<<<<<< HEAD
        // errorHandler.handleError({
        //   type: 'Initialization Error',
        //   message: 'Failed to initialize optimization systems',
        //   error: error.message,
        //   timestamp: new Date().toISOString()
        // });
=======
        errorHandler.handleError({
          type: 'Initialization Error',
          message: 'Failed to initialize optimization systems',
          error: error.message,
          timestamp: new Date().toISOString()
        });
>>>>>>> origin/fix-merge-conflicts-and-errors
      }
    };

    // Initialize optimizations after component mount
    initializeOptimizations();

    // Cleanup on unmount
    return () => {
<<<<<<< HEAD
      // performanceOptimizer.cleanup();
    };
=======
      // Performance monitoring
      if (process.env.NODE_ENV === 'development') {
        console.log('🚀 Initializing performance optimizations...');
      }
      
      // SEO optimizations
      document.title = 'Zion Tech Group - Advanced AI and IT Solutions';
      
      // Accessibility enhancements
      document.documentElement.setAttribute('lang', 'en');
      
      // Security headers (if not already set by server)
      if (!document.querySelector('meta[http-equiv="X-Content-Type-Options"]')) {
        const meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'X-Content-Type-Options');
        meta.setAttribute('content', 'nosniff');
        document.head.appendChild(meta);
      }
    };

    initializeOptimizations();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c2c5
  }, []);
=======
      performanceOptimizer.cleanup();
    };
    }, []);
>>>>>>> origin/fix-merge-conflicts-and-errors

  return (
    <ErrorBoundary>
      <SEO />
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
<<<<<<< HEAD
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/team' element={<Team />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/terms' element={<Terms />} />
=======
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog/:slug" element={<Blog />} />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c2c5
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
<<<<<<< HEAD
=======
export default App;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c2c5
=======
>>>>>>> origin/fix-merge-conflicts-and-errors
