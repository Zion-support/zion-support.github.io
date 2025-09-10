import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/ContactPage'));
const Blog = React.lazy(() => import('./pages/Blog'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Services = React.lazy(() => import('./pages/Services'));

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-cyan-500/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-500 font-bold text-lg">
        ZION
      </div>
      <div className="mt-4 text-center">
        <div className="text-cyan-500 text-sm animate-pulse">Loading amazing experiences...</div>
      </div>
    </div>
  </div>
);

// Error boundary component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 text-red-500">Something went wrong</h1>
      <p className="text-xl text-gray-300 mb-4">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

function App() {
  // Performance monitoring and analytics
  useEffect(() => {
    // Track page load performance
    if (typeof window !== 'undefined' && 'performance' in window) {
      const _loadTime = performance.now();
      // App loaded in ${_loadTime.toFixed(2)}ms
      
      // Track Core Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then((vitals) => {
          if (vitals.onCLS) vitals.onCLS(() => {});
          if (vitals.onINP) vitals.onINP(() => {}); // INP replaces FID
          if (vitals.onFCP) vitals.onFCP(() => {});
          if (vitals.onLCP) vitals.onLCP(() => {});
          if (vitals.onTTFB) vitals.onTTFB(() => {});
        });
      }
    }
  }, []);
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<EnhancedLoadingSpinner />}>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={
                <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                    <p className="text-xl text-gray-300">The page you're looking for doesn't exist.</p>
                  </div>
                </div>
              } />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;