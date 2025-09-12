import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Services = React.lazy(() => import('./pages/Services'));
const AISolutions = React.lazy(() => import('./pages/AISolutions'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const Resources = React.lazy(() => import('./pages/Resources'));

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

// Enhanced error fallback component with better UX
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900" role="alert">
    <div className="text-center max-w-md mx-auto p-6">
      <div className="text-red-500 text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
      <p className="text-gray-300 mb-6">We're sorry, but something unexpected happened.</p>
      <details className="text-left mb-6">
        <summary className="cursor-pointer text-cyan-500 hover:text-cyan-400">
          Technical Details
        </summary>
        <pre className="mt-2 p-3 bg-gray-800 rounded text-xs text-gray-300 overflow-auto">
          {error.message}
        </pre>
      </details>
      <button
        onClick={resetErrorBoundary}
        className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

// Main App component with enhanced error handling and performance
const App: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/css/critical.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);
    };

    preloadCriticalResources();
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <div className="App">
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
                <Route path="/ai-solutions" element={<AISolutions />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;