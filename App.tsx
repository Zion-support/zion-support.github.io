import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import { AnalyticsProvider } from './app/contexts/AnalyticsProvider';
// import PerformanceOptimizer from './app/components/PerformanceOptimizer';
// import EnhancedSEO from './app/components/EnhancedSEO';
// import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
// import ErrorBoundary from './app/components/ErrorBoundary';
// import LoadingStates from './app/components/LoadingStates';

import PerformanceMonitor from './app/components/PerformanceMonitor';
import MetaManager from './app/components/MetaManager';
import EnhancedAnalytics from './app/components/EnhancedAnalytics';
// import AdvancedLoadingStates from './app/components/AdvancedLoadingStates';

// Dynamic page loader for all other pages
const DynamicPageLoader: React.FC<{ pagePath: string }> = ({ pagePath }) => {
  const PageComponent = React.useMemo(() => {
    try {
      // Convert path to component path
      const componentPath = pagePath === '/' ? './app/page' : `./app/${pagePath.replace(/^\//, '').replace(/\//g, '/')}/page`;
      return React.lazy(() => import(componentPath));
    } catch (error) {
      console.error('Error loading page:', error);
      // Fallback to 404 page
      return React.lazy(() => import('./app/404/page'));
    }
  }, [pagePath]);

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><div className="text-white text-xl">Loading page...</div></div>}>
      <PageComponent />
    </Suspense>
  );
};

// Main router component - removed as it's not used

// Router content component that has access to location
const RouterContent: React.FC = () => {
  const location = useLocation();
  
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <div className="cyber-loading mx-auto mb-4"></div>
          <div className="text-white text-xl">Loading application...</div>
        </div>
      </div>
    }>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<DynamicPageLoader pagePath={location.pathname} />} />
      </Routes>
    </Suspense>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading application...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <HelmetProvider>
        <AnalyticsProvider>
          <div>
            <div />
            <div />
            <MetaManager />
            <PerformanceMonitor />
            <EnhancedAnalytics />
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <Navigation />
                <main className="relative z-10" id="main-content" role="main">
                  <Suspense fallback={
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-pulse bg-white/20 h-32 w-32 rounded-lg mx-auto mb-4"></div>
                        <p className="text-white text-xl">Loading application...</p>
                      </div>
                    </div>
                  }>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </div>
            </Router>
          </div>
        </Router>
      </HelmetProvider>
    </div>
  );
};

export default App;