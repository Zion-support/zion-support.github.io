import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import PerformanceMonitor from "./components/PerformanceMonitor";
import AdvancedErrorBoundary from "./components/AdvancedErrorBoundary";
import EnhancedSEOHead from "./components/EnhancedSEOHead";
import ModernAccessibilityEnhancer from "./components/ModernAccessibilityEnhancer";
import ModernLoadingSpinner from "./components/ModernLoadingSpinner";
import UserExperienceOptimizer from "./components/UserExperienceOptimizer";
import { PerformanceOptimizer } from "./utils/performanceOptimizer";
import PerformanceMonitor from "./utils/performanceMonitor";
import { useAnalytics } from "./hooks/useAnalytics";
// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white flex items-center justify-center">
    <div className="text-center max-w-md mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4 text-red-400">Something went wrong</h2>
      <p className="text-gray-300 mb-6">{error.message}</p>
      <button 
        onClick={resetErrorBoundary}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);
// Loading Component - now using the modern version
const LoadingSpinner = () => (
  <ModernLoadingSpinner 
    message="Loading Zion Tech Group..."
    variant="default"
    size="lg"
  />
);
function App() {
  const { prefetchResource, cacheResource, measurePerformance } = usePerformanceOptimization({
    enableLazyLoading: true,
    enableImageOptimization: true,
    enableCodeSplitting: true,
    enablePrefetching: true,
    enableCaching: true
  });
  const { trackPageView, trackEvent } = useAnalytics();
  useEffect(() => {
    // Prefetch critical resources
    measurePerformance('App initialization', () => {
      prefetchResource('/assets/vendor-DgTrhVr3.js', 'script');
      prefetchResource('/assets/index-CWbMb2zs.js', 'script');
    });
    // Cache app configuration
    cacheResource('app-config', {
      version: '1.0.0',
      features: ['performance-monitoring', 'accessibility', 'error-boundary']
    }, 300000); // 5 minutes
    // Initialize performance monitoring
    const perfOptimizer = PerformanceOptimizer.getInstance();
    const perfMonitor = PerformanceMonitor.getInstance();
    perfOptimizer.init();
    perfMonitor.init();
    // Track page view
    trackPageView({
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
    // Report performance metrics after page load
    const handleLoad = () => {
      setTimeout(() => {
        perfOptimizer.reportMetrics();
        perfMonitor.reportMetrics();
        // Log performance score
        const score = perfMonitor.getPerformanceScore();
        console.log(`Performance Score: ${score}/100`);
        // Track performance event
        trackEvent({
          action: 'performance_metrics',
          category: 'performance',
          custom_parameters: { score }
        });
      }, 2000);
    }
    window.addEventListener('load', handleLoad);
    return () => {
      perfOptimizer.cleanup();
      perfMonitor.cleanup();
      window.removeEventListener('load', handleLoad);
    };
  }, [prefetchResource, cacheResource, measurePerformance]);
  return (
    <AdvancedErrorBoundary 
      enableReporting={true}
      enableRecovery={true}
      onError={(error, errorInfo) => {
        console.error('App Error:', error, errorInfo);
        trackEvent({
          action: 'error_occurred',
          category: 'error',
          custom_parameters: {
            error_message: error.message,
            error_stack: error.stack,
            component_stack: errorInfo.componentStack
          }
        });
      }}
    >
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
              <EnhancedSEOHead />
              <ModernAccessibilityEnhancer showControls={process.env.NODE_ENV === 'development'} />
              <UserExperienceOptimizer 
                enableA11y={true}
                enablePerformance={true}
                enablePersonalization={true}
                enableFeedback={true}
              />
              <PerformanceMonitor showMetrics={process.env.NODE_ENV === 'development'} />
              {/* Skip Links for Accessibility */}
              <div className="sr-only focus-within:not-sr-only">
                <a href="#main-content" className="skip-link">
                  Skip to main content
                </a>
                <a href="#navigation" className="skip-link">
                  Skip to navigation
                </a>
              </div>
              <Navigation />
              {/* Main Content with enhanced Suspense and Error Boundary */}
              <main id="main-content" className="pt-20 min-h-screen" role="main">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Catch all route */}
                    <Route path="*" element={<Home />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </AdvancedErrorBoundary>
  );
}
export default App;
