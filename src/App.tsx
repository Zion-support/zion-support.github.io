import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import PerformanceMonitor from "./components/PerformanceMonitor";
import EnhancedErrorBoundary from "./components/EnhancedErrorBoundary";
import SEOHead from "./components/SEOHead";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import { usePerformanceOptimization } from "./hooks/usePerformanceOptimization";

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const AdvancedDashboard = React.lazy(() => import('./pages/AdvancedDashboard'));

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

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

function App() {
<<<<<<< HEAD
  const { prefetchResource, cacheResource, measurePerformance } = usePerformanceOptimization({
    enableLazyLoading: true,
    enableImageOptimization: true,
    enableCodeSplitting: true,
    enablePrefetching: true,
    enableCaching: true
  });
=======
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <AppHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/services" element={<ServicesPage />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}
>>>>>>> origin/seo-improvements-clean

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
    const perfMonitor = new PerformanceMonitor();
    
    // Report performance metrics after page load
    const handleLoad = () => {
      setTimeout(() => {
        if (perfMonitor.reportMetrics) {
          perfMonitor.reportMetrics();
        };
      }, 2000);
    };
    window.addEventListener('load', handleLoad);
    
    return () => {
      if (perfMonitor.cleanup) {
        perfMonitor.cleanup();
      };
      window.removeEventListener('load', handleLoad);
    };
  }, [prefetchResource, cacheResource, measurePerformance]);

  return (
    <EnhancedErrorBoundary
      onError={(error, errorInfo) => {
        console.error('App Error:', error, errorInfo);
        // Here you would send error to monitoring service
      }}
    >
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
              <SEOHead />
              <AccessibilityEnhancer 
                enableKeyboardNavigation={true}
                enableScreenReader={true}
                enableHighContrast={true}
                enableFocusManagement={true}
                enableAriaLabels={true}
              />
              <PerformanceMonitor 
                enableReporting={true}
                reportInterval={30000}
                onMetricsUpdate={(metrics) => {
                  console.log('Performance metrics updated:', metrics);
                }}
              />
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
              
              {/* Main Content with enhanced Suspense and Error Boundary */};
              <main id="main-content" className="pt-20 min-h-screen" role="main">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<AdvancedDashboard />} />
                    <Route path="/advanced-dashboard" element={<AdvancedDashboard />} />
                    
                    {/* Catch all route */};
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
};
export default App;
