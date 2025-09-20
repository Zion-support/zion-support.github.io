import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Enhanced components
import ErrorBoundary from '../error/ErrorBoundary';
import LoadingSpinner from '../performance/LoadingSpinner';
import { SkipLinks } from '../accessibility/SkipLink';
import SEOHelmet from '../seo/SEOHelmet';
import { usePerformanceMonitor } from '../../hooks/usePerformanceMonitor';

// Lazy load pages for better performance
const Home = lazy(() => import('../../pages/Home'));
const About = lazy(() => import('../../pages/About'));
const Services = lazy(() => import('../../pages/Services'));
const Contact = lazy(() => import('../../pages/Contact'));
const NotFound = lazy(() => import('../error/NotFound'));

// Layout components
const Header = lazy(() => import('../Header'));
const Footer = lazy(() => import('../Footer'));

const EnhancedApp: React.FC = () => {
  const { trackInteraction, getMetrics } = usePerformanceMonitor('EnhancedApp', {
    trackPageLoad: true,
    trackInteractions: true,
    onMetrics: (metrics) => {
      console.log('Performance metrics:', metrics);
    }
  });

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-futuristic">
            <SkipLinks />
            
            <SEOHelmet
              title="Zion Tech Group - Leading AI & Quantum Computing Solutions"
              description="Transform your business with cutting-edge AI and quantum computing solutions. Expert technology consulting and implementation services."
              keywords={['AI', 'quantum computing', 'technology consulting', 'business automation', 'machine learning']}
            />

            <Suspense fallback={<LoadingSpinner text="Loading navigation..." />}>
              <Header />
            </Suspense>

            <main id="main-content" className="flex-1">
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <LoadingSpinner size="lg" text="Loading page..." />
                </div>
              }>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>

            <Suspense fallback={<LoadingSpinner text="Loading footer..." />}>
              <Footer />
            </Suspense>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default EnhancedApp;