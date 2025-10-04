import React, { useState, useEffect, Suspense, lazy, useCallback } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import core components (always loaded)
import Header from './components/Header';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import LoadingSpinner from './components/LoadingSpinner';
import UserFriendlyErrorBoundary from './components/UserFriendlyErrorBoundary';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';

// Lazy load performance components (only when needed)
const PerformanceOptimizer = lazy(() => import('./components/PerformanceOptimizer'));
const PerformanceMonitor = lazy(() => import('./components/PerformanceMonitor'));

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));
const BlogPage = lazy(() => import('./pages/Blog'));
const ServicesPage = lazy(() => import('./pages/Services'));
const TeamPage = lazy(() => import('./pages/Team'));
const PrivacyPage = lazy(() => import('./pages/Privacy'));
const TermsPage = lazy(() => import('./pages/Terms'));

// Performance monitoring state
const App: React.FC = () => {
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);

  // Performance monitoring toggle
  const togglePerformanceMonitor = useCallback(() => {
    setShowPerformanceMonitor(prev => !prev);
  }, []);

  // Performance metrics collection
  useEffect(() => {
    const collectMetrics = () => {
      const metrics = {
        loadTime: performance.now(),
        memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
        timestamp: new Date().toISOString()
      };
      setPerformanceMetrics(metrics);
    };

    collectMetrics();
    const interval = setInterval(collectMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <EnhancedErrorBoundary>
          <SEOHead />
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </EnhancedErrorBoundary>
      </Router>
    </HelmetProvider>
  );
};

export default App;