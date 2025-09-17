import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import PerformanceMonitor from "./components/PerformanceMonitor";
import EnhancedErrorBoundary from "./components/EnhancedErrorBoundary";
import EnhancedSEOHead from "./components/EnhancedSEOHead";
import ModernAccessibilityEnhancer from "./components/ModernAccessibilityEnhancer";
import ModernLoadingSpinner from "./components/ModernLoadingSpinner";
import { PerformanceOptimizer } from "./utils/performanceOptimizer";
import PerformanceMonitor from "./utils/performanceMonitor";

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
  useEffect(() => {
    // Initialize performance monitoring
    const perfOptimizer = PerformanceOptimizer.getInstance();
    const perfMonitor = PerformanceMonitor.getInstance();
    
    perfOptimizer.init();
    perfMonitor.init();
    
    // Report performance metrics after page load
    const handleLoad = () => {
      setTimeout(() => {
        perfOptimizer.reportMetrics();
        perfMonitor.reportMetrics();
        
        // Log performance score
        const score = perfMonitor.getPerformanceScore();
        console.log(`Performance Score: ${score}/100`);
      }, 2000);
    };
    
    window.addEventListener('load', handleLoad);
    
    return () => {
      perfOptimizer.cleanup();
      perfMonitor.cleanup();
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <EnhancedErrorBoundary showDetails={process.env.NODE_ENV === 'development'}>
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
              <EnhancedSEOHead />
              <ModernAccessibilityEnhancer showControls={process.env.NODE_ENV === 'development'} />
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
      </EnhancedErrorBoundary>
  );
}

export default App;
