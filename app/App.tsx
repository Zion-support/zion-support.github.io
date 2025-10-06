import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from '../src/components/ErrorBoundary';
import SEOOptimizer from '../src/components/SEOOptimizer';
import AccessibilityEnhancer from '../src/components/AccessibilityEnhancer';
import LoadingSpinner from '../src/components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ServicesPage = lazy(() => import('./services/page'));
const ContactPage = lazy(() => import('./contact/page'));
<<<<<<< HEAD
const TeamPage = lazy(() => import('./team/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-83ba
const EnterprisePage = lazy(() => import('./enterprise/page'));

// Utils
import performanceOptimizer from '../src/utils/performanceOptimizer';

const App: React.FC = () => {
  useEffect(() => {
<<<<<<< HEAD
    // Initialize performance optimizations
    performanceOptimizer.init();
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <SEOOptimizer />
        <AccessibilityEnhancer>
          <div></div>
        </AccessibilityEnhancer>
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/enterprise" element={<EnterprisePage />} />
            </Routes>
          </Suspense>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
=======
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      performanceOptimizer.preloadCriticalResources();
      performanceOptimizer.lazyLoadImages();
    }
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="App">
            <SEOOptimizer>
              <AccessibilityEnhancer>
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/enterprise" element={<EnterprisePage />} />
                  </Routes>
                </Suspense>
              </AccessibilityEnhancer>
            </SEOOptimizer>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
>>>>>>> cursor/fix-errors-and-merge-to-main-83ba
  );
};

export default App;