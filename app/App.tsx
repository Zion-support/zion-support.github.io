import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from '../src/components/ErrorBoundary';
import SEOOptimizer from '../src/components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ServicesPage = lazy(() => import('./services/page'));
const ContactPage = lazy(() => import('./contact/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));

// Utils
import performanceOptimizer from '../src/utils/performanceOptimizer';

// Styles
import '../src/index.css';

function App() {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      performanceOptimizer.preloadCriticalResources();
      performanceOptimizer.lazyLoadImages();
    }
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEOOptimizer>
          <AccessibilityEnhancer>
            <Router>
              <div className="App">
                <PerformanceDashboard />
                
                <Navigation />
                
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/enterprise" element={<EnterprisePage />} />
                  </Routes>
                </Suspense>
                
                <Footer />
              </div>
            </Router>
          </AccessibilityEnhancer>
        </SEOOptimizer>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
