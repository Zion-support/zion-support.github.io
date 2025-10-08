import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Advanced utilities
import { performanceOptimizer } from './utils/performanceOptimizer';
import { performanceMonitoring } from './utils/performanceMonitoring';
import { errorTracking, ErrorCategory, ErrorSeverity } from './utils/errorTracking';
import { logger } from './utils/logger';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const ContactPage = lazy(() => import('./contact/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    // Mark app initialization start
    performanceMonitoring.mark('app-init-start');

    // Initialize global error handling with advanced tracking
    const handleGlobalError = (event: ErrorEvent) => {
      errorTracking.trackError(event.error || new Error(event.message), {
        category: ErrorCategory.Runtime,
        severity: ErrorSeverity.High,
        context: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
      });
      
      // Prevent default error handling to avoid console clutter in production
      if (import.meta.env.PROD) {
        event.preventDefault();
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      errorTracking.trackError(
        new Error(`Unhandled Promise Rejection: ${event.reason}`),
        {
          category: ErrorCategory.Runtime,
          severity: ErrorSeverity.Critical,
          context: { reason: event.reason },
        }
      );
      
      // Prevent default handling in production
      if (import.meta.env.PROD) {
        event.preventDefault();
      }
    };

    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Register Service Worker for offline support
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          logger.info('Service Worker registered', { scope: registration.scope });
        })
        .catch((error: Error) => {
          logger.error('Service Worker registration failed', error);
        });
    }

    // Initialize performance monitoring and Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      performanceOptimizer.optimizeImages();
      
      // Record initial metrics
      performanceMonitoring.recordCustomMetric('app-mount', performance.now(), 'ms');
      
      // Log performance summary in development
      if (import.meta.env.DEV) {
        const summary = performanceMonitoring.getSummary();
        logger.info('Performance Summary', {
          score: summary.score,
          vitals: summary.webVitals,
          recommendations: summary.recommendations,
        });
      }
    }

    // Mark app initialization end
    performanceMonitoring.mark('app-init-end');
    performanceMonitoring.measure('app-init-duration', 'app-init-start', 'app-init-end');

    // Cleanup
    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEOOptimizer />
        <AccessibilityEnhancer>
          <Router>
            <div className="App">
              <Navigation />
              
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/enterprise" element={<EnterprisePage />} />
                </Routes>
              </Suspense>
              
              <Footer />
            </div>
          </Router>
        </AccessibilityEnhancer>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;