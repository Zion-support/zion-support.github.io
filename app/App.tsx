import React, { Suspense, lazy, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Link from 'next/link';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import SEOEnhancer from './components/SEOEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
  </div>
);

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Utils
import { performanceOptimizer } from './utils/performanceOptimizer';
import { logger } from './utils/logger';

// Styles
import '../index.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize performance monitoring
    performanceOptimizer.init();
    
    // Log app initialization
    logger.info('App initialized successfully');
    
    return () => {
      performanceOptimizer.cleanup();
    };
  }, []);

  const handlePerformanceOptimization = useCallback(() => {
    // Trigger performance optimization
    performanceOptimizer.init();
    logger.info('Performance optimization triggered');
  }, []);

  return (
    <HelmetProvider>
      <AdvancedErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-50">
            
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/services" element={<div>Services Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
                <Route path="/blog" element={<div>Blog Page</div>} />
                <Route path="/enterprise" element={<div>Enterprise Page</div>} />
                <Route path="/privacy" element={<div>Privacy Page</div>} />
                <Route path="/terms" element={<div>Terms Page</div>} />
                <Route path="/team" element={<div>Team Page</div>} />
                <Route path="/services-advertising" element={<div>Advertising Services Page</div>} />
                <Route path="/guides/ai-2026-implementation-roadmap" element={<div>AI 2026 Guide</div>} />
                <Route path="/guides/ai-2027-implementation-roadmap" element={<div>AI 2027 Guide</div>} />
                <Route path="/guides/autonomous-business-processes-implementation-guide-2026" element={<div>Autonomous Business Guide</div>} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
