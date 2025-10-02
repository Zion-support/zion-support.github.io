import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SEOHead } from './components/SEOHead';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { useWebVitals } from './hooks/usePerformance';
import { preloadCriticalResources } from './utils/performance';

// Lazy load main components
const AppRouter = lazy(() => import('./router').then(module => ({ default: module.AppRouter })));
const Header = lazy(() => import('./components/Header').then(module => ({ default: module.default })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.default })));

// Lazy load banner components
const LazyBannerWrapper = lazy(() => import('./components/LazyBanner').then(module => ({ default: module.LazyBannerWrapper })));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

// Main App component
const AppContent: React.FC = () => {
  useWebVitals();

  React.useEffect(() => {
    preloadCriticalResources();
  }, []);

  return (
    <>
      <SEOHead />
      <Router>
        <div className="min-h-screen bg-slate-950">
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Header />
            </Suspense>
            
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyBannerWrapper>
                  {/* Only load critical banners initially */}
                  <div className="space-y-0">
                    {/* Hero Section */}
                    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Transform Your Business with
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                              AI-Powered Solutions
                            </span>
                          </h1>
                          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Zion Tech Group delivers cutting-edge AI and IT solutions that drive innovation, 
                            efficiency, and growth for enterprises worldwide.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                              Get Started
                            </button>
                            <button className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                              View Solutions
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Main Content */}
                    <Suspense fallback={<LoadingSpinner />}>
                      <AppRouter />
                    </Suspense>
                  </div>
                </LazyBannerWrapper>
              </Suspense>
            </ErrorBoundary>
            
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Footer />
              </Suspense>
            </ErrorBoundary>
          </ErrorBoundary>
          
          {/* Performance Monitor */}
          <PerformanceMonitor />
        </div>
      </Router>
    </>
  );
};

// Main App export
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <AppContent />
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;